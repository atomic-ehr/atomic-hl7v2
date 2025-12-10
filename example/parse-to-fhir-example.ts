/**
 * ADT^A01 Parser → FHIR Patient Example
 *
 * This example demonstrates parsing an HL7v2 ADT message from wire format
 * and extracting patient data into a FHIR Patient resource using typed getters.
 *
 * Run: bun example/parse-to-fhir-example.ts
 */

import { parseMessage } from "../src/hl7v2/parse";
import { PIDBuilder } from "./adt-a01-fields";
import type { HL7v2Segment } from "../src/hl7v2/types";

// FHIR R4 Patient resource type (simplified)
interface FHIRPatient {
  resourceType: "Patient";
  identifier?: Array<{
    system?: string;
    value?: string;
    type?: { coding?: Array<{ code?: string }> };
  }>;
  name?: Array<{
    family?: string;
    given?: string[];
    prefix?: string[];
    suffix?: string[];
  }>;
  gender?: "male" | "female" | "other" | "unknown";
  birthDate?: string;
  address?: Array<{
    line?: string[];
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
  }>;
  telecom?: Array<{
    system?: "phone" | "email";
    value?: string;
    use?: "home" | "work" | "mobile";
  }>;
}

// Sample ADT^A01 message (wire format)
const adtMessage = `MSH|^~\\&|HOSPITAL_APP|HOSPITAL_FAC|ADT_RECEIVER|RECV_FAC|20251210120000||ADT^A01^ADT_A01|MSG00001|P|2.5.1
EVN|A01|20251210115500||||20251210115000
PID|1||12345678^^^HOSP^MR~987-65-4321^^^SSA^SS||Smith^John^Robert^Jr^Dr||19800515|M|||123 Main Street^Apt 4B^Boston^MA^02101^USA||617-555-1234^PRN^PH|617-555-5678^WPN^PH|||S
NK1|1|Smith^Jane||617-555-9999
PV1|1|I|WARD-A^101^1^HOSP|E|||DOC001^Johnson^Mary
AL1|1|DA|PENICILLIN|SV
DG1|1||J18.9^Pneumonia^ICD10|||A`;

/**
 * Extract FHIR Patient from PID segment using typed getters
 */
function extractPatientFromPID(pidSegment: HL7v2Segment): FHIRPatient {
  // Create a builder instance from the parsed segment to use getters
  const pid = Object.assign(new PIDBuilder(), { seg: pidSegment }) as PIDBuilder & { seg: HL7v2Segment };
  // Access the internal segment directly for getters
  (pid as any).seg = pidSegment;

  const patient: FHIRPatient = {
    resourceType: "Patient",
  };

  // Extract identifiers (PID-3: Patient Identifier List)
  // CX uses: value_1, system_4 (HD), type_5
  // HD uses: namespace_1
  const identifiers = pid.get_pid_3_patientIdentifierList();
  if (identifiers && identifiers.length > 0) {
    patient.identifier = identifiers.map(id => ({
      value: id.value_1,
      system: id.system_4?.namespace_1
        ? `urn:oid:${id.system_4.namespace_1}`
        : undefined,
      type: id.type_5
        ? { coding: [{ code: id.type_5 }] }
        : undefined,
    }));
  }

  // Extract patient name (PID-5: Patient Name)
  // XPN uses: family_1 (FN), given_2, additionalGiven_3, suffix_4, prefix_5
  // FN uses: family_1 (surname)
  const names = pid.get_pid_5_patientName();
  if (names && names.length > 0) {
    patient.name = names.map(name => {
      const result: NonNullable<FHIRPatient["name"]>[0] = {};

      if (name.family_1?.family_1) {
        result.family = name.family_1.family_1;
      }

      const given: string[] = [];
      if (name.given_2) given.push(name.given_2);
      if (name.additionalGiven_3) {
        given.push(name.additionalGiven_3);
      }
      if (given.length > 0) result.given = given;

      if (name.prefix_5) result.prefix = [name.prefix_5];
      if (name.suffix_4) result.suffix = [name.suffix_4];

      return result;
    });
  }

  // Extract gender (PID-8: Administrative Sex)
  const sex = pid.get_pid_8_administrativeSex();
  if (sex) {
    const genderMap: Record<string, FHIRPatient["gender"]> = {
      "M": "male",
      "F": "female",
      "O": "other",
      "U": "unknown",
    };
    patient.gender = genderMap[sex] ?? "unknown";
  }

  // Extract birth date (PID-7: Date/Time of Birth)
  const birthDate = pid.get_pid_7_dateTimeOfBirth();
  if (birthDate) {
    // Convert HL7 date format (YYYYMMDD) to FHIR format (YYYY-MM-DD)
    patient.birthDate = `${birthDate.substring(0, 4)}-${birthDate.substring(4, 6)}-${birthDate.substring(6, 8)}`;
  }

  // Extract addresses (PID-11: Patient Address)
  // XAD uses: line1_1 (SAD), line2_2, city_3, state_4, postalCode_5, country_6
  // SAD uses: line_1 (street address)
  const addresses = pid.get_pid_11_patientAddress();
  if (addresses && addresses.length > 0) {
    patient.address = addresses.map(addr => {
      const result: NonNullable<FHIRPatient["address"]>[0] = {};

      const lines: string[] = [];
      if (addr.line1_1?.line_1) {
        lines.push(addr.line1_1.line_1);
      }
      if (addr.line2_2) lines.push(addr.line2_2);
      if (lines.length > 0) result.line = lines;

      if (addr.city_3) result.city = addr.city_3;
      if (addr.state_4) result.state = addr.state_4;
      if (addr.postalCode_5) result.postalCode = addr.postalCode_5;
      if (addr.country_6) result.country = addr.country_6;

      return result;
    });
  }

  // Extract phone numbers (PID-13: Home Phone, PID-14: Business Phone)
  // XTN uses: value_1 (phone number), use_2, system_3
  const telecoms: NonNullable<FHIRPatient["telecom"]> = [];

  const homePhones = pid.get_pid_13_phoneNumberHome();
  if (homePhones) {
    for (const phone of homePhones) {
      if (phone.value_1) {
        telecoms.push({
          system: "phone",
          value: phone.value_1,
          use: "home",
        });
      }
    }
  }

  const workPhones = pid.get_pid_14_phoneNumberBusiness();
  if (workPhones) {
    for (const phone of workPhones) {
      if (phone.value_1) {
        telecoms.push({
          system: "phone",
          value: phone.value_1,
          use: "work",
        });
      }
    }
  }

  if (telecoms.length > 0) {
    patient.telecom = telecoms;
  }

  return patient;
}

// ===== Main =====

console.log("=== Input: HL7v2 ADT^A01 Message ===\n");
console.log(adtMessage);
console.log("\n" + "=".repeat(50) + "\n");

// Parse the wire format
const message = parseMessage(adtMessage);

console.log("=== Parsed Segments ===\n");
for (const seg of message) {
  console.log(`${seg.segment}: ${Object.keys(seg.fields).length} fields`);
}

// Find PID segment
const pidSegment = message.find(s => s.segment === "PID");
if (!pidSegment) {
  console.error("No PID segment found!");
  process.exit(1);
}

console.log("\n=== PID Segment (Internal Representation) ===\n");
console.log(JSON.stringify(pidSegment, null, 2));

// Extract FHIR Patient
const fhirPatient = extractPatientFromPID(pidSegment);

console.log("\n=== Output: FHIR Patient Resource ===\n");
console.log(JSON.stringify(fhirPatient, null, 2));

// Demonstrate round-trip: Show specific getter values
console.log("\n=== Getter Examples ===\n");

const pid = Object.assign(new PIDBuilder(), {}) as any;
pid.seg = pidSegment;

console.log("Patient Identifiers:");
const ids = pid.get_pid_3_patientIdentifierList();
if (ids) {
  for (const id of ids) {
    // CX uses: value_1, system_4 (HD), type_5
    // HD uses: namespace_1
    console.log(`  - ${id.value_1} (${id.type_5 ?? "unknown type"}) @ ${id.system_4?.namespace_1 ?? "unknown authority"}`);
  }
}

console.log("\nPatient Name:");
const names = pid.get_pid_5_patientName();
if (names) {
  for (const name of names) {
    // XPN uses: prefix_5, given_2, additionalGiven_3, family_1 (FN), suffix_4
    // FN uses: family_1 (surname)
    const parts = [
      name.prefix_5,
      name.given_2,
      name.additionalGiven_3,
      name.family_1?.family_1,
      name.suffix_4,
    ].filter(Boolean);
    console.log(`  - ${parts.join(" ")}`);
  }
}

console.log(`\nGender: ${pid.get_pid_8_administrativeSex()}`);
console.log(`Birth Date: ${pid.get_pid_7_dateTimeOfBirth()}`);
