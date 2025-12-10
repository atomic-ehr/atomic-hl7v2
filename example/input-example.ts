/**
 * ADT^A01 Input Object Example
 *
 * This example demonstrates building an ADT A01 message using the
 * typed input object pattern - a simpler alternative to the builder.
 *
 * Run: bun example/input-example.ts
 */

import { toADT_A01, type ADT_A01_Input } from "./messages";
import { formatMessage } from "../src/hl7v2/format";
import { AdministrativeSex, PatientClass, AdmissionType } from "./tables";

// Build an ADT^A01 message using a typed input object
const input: ADT_A01_Input = {
  type: "ADT_A01",

  // MSH - Message Header
  MSH: {
    $3_sendingApplication: { $1_namespace: "HOSPITAL_HIS" },
    $4_sendingFacility: { $1_namespace: "MAIN_CAMPUS" },
    $5_receivingApplication: { $1_namespace: "LAB_SYSTEM" },
    $6_receivingFacility: { $1_namespace: "LAB_FAC" },
    $7_messageDateTime: "20251210120000",
    $9_messageType: { $1_code: "ADT", $2_event: "A01", $3_structure: "ADT_A01" },
    $10_messageControlId: "MSG00001",
    $11_processingId: { $1_processingId: "P" },
    $12_version: { $1_version: "2.5.1" }
  },

  // EVN - Event Type
  EVN: {
    $1_eventTypeCode: "A01",
    $2_recordedDateTime: "20251210115500",
    $6_eventOccurred: "20251210115000"
  },

  // PID - Patient Identification
  PID: {
    $1_setIdPid: "1",
    $3_identifier: [
      { $1_value: "12345678", $4_system: { $1_namespace: "HOSP" }, $5_type: "MR" },
      { $1_value: "987-65-4321", $4_system: { $1_namespace: "SSA" }, $5_type: "SS" }
    ],
    $5_name: [{
      $1_family: { $1_family: "Smith" },
      $2_given: "John",
      $3_additionalGiven: "Robert",
      $4_suffix: "Jr"
    }],
    $7_birthDate: "19800515",
    $8_gender: AdministrativeSex.Male,
    $11_address: [{
      $1_line1: { $1_line: "123 Main Street" },
      $2_line2: "Apt 4B",
      $3_city: "Boston",
      $4_state: "MA",
      $5_postalCode: "02101",
      $6_country: "USA"
    }]
  },

  // PV1 - Patient Visit
  PV1: {
    $1_setIdPv1: "1",
    $2_class: PatientClass.Inpatient,
    $3_assignedPatientLocation: {
      $1_careSite: "WARD-A",
      $2_room: "101",
      $3_bed: "1",
      $4_facility: { $1_namespace: "HOSP" }
    },
    $4_admissionType: AdmissionType.Emergency,
    $7_attendingDoctor: [{
      $1_value: "DOC001",
      $2_family: { $1_family: "Johnson" },
      $3_given: "Mary"
    }],
    $19_visitNumber: { $1_value: "V12345" },
    $44_admission: "20251210115000"
  },

  // NK1 - Next of Kin (repeating)
  NK1: [{
    $1_setIdNk1: "1",
    $2_name: [{ $1_family: { $1_family: "Smith" }, $2_given: "Jane" }],
    $3_relationship: { $1_code: "SPO", $2_text: "Spouse" },
    $5_phone: [{ $1_value: "617-555-9999" }]
  }],

  // DG1 - Diagnosis (repeating)
  DG1: [
    {
      $1_setIdDg1: "1",
      $3_diagnosisCodeDg1: { $1_code: "J18.9", $2_text: "Pneumonia", $3_system: "ICD10" },
      $6_diagnosisType: "A",
      $15_diagnosisPriority: "1"
    },
    {
      $1_setIdDg1: "2",
      $3_diagnosisCodeDg1: { $1_code: "I10", $2_text: "Hypertension", $3_system: "ICD10" },
      $6_diagnosisType: "F",
      $15_diagnosisPriority: "2"
    }
  ],

  // AL1 - Allergy (repeating)
  AL1: [{
    $1_setIdAl1: "1",
    $2_allergenTypeCode: { $1_code: "DA", $2_text: "Drug Allergy" },
    $3_allergenCodeMnemonicDescription: { $1_code: "PENICILLIN", $2_text: "Penicillin" },
    $4_allergySeverityCode: { $1_code: "SV", $2_text: "Severe" }
  }],

  // PROCEDURE group (repeating)
  PROCEDURE: [{
    PR1: {
      $1_setIdPr1: "1",
      $3_procedureCode: { $1_code: "99213", $2_text: "Office Visit", $3_system: "CPT" },
      $5_procedureDateTime: "20251210110000",
      $6_procedureFunctionalType: "D"
    }
  }],

  // INSURANCE group (repeating)
  INSURANCE: [{
    IN1: {
      $1_setIdIn1: "1",
      $2_insurancePlanId: { $1_code: "BCBS001", $2_text: "Blue Cross Blue Shield" },
      $3_insuranceCompanyId: [{ $1_value: "INS123", $4_system: { $1_namespace: "BCBS" } }],
      $4_insuranceCompanyName: [{ $1_name: "Blue Cross Blue Shield of MA" }],
      $8_groupNumber: "GRP12345"
    },
    IN2: {
      $1_insuredsEmployeeId: [{ $1_value: "EMP54321" }]
    }
  }]
};

// Convert to HL7v2Message
const message = toADT_A01(input);

// Format to wire format
const wireFormat = formatMessage(message);

console.log("=== ADT^A01 Message (Input Object Pattern) ===\n");
console.log(wireFormat.replace(/\r/g, "\n"));

console.log("\n=== Segment Count ===");
console.log(`Total segments: ${message.length}`);
message.forEach(seg => console.log(`  ${seg.segment}`));

console.log("\n=== Message Structure ===");
console.log("MSH, EVN, PID, PV1, NK1, DG1 x2, AL1, PR1, IN1, IN2");
