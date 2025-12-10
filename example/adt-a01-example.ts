/**
 * ADT^A01 (Admit/Visit Notification) Example
 *
 * This example demonstrates building an ADT A01 message using the
 * type-safe fluent builders generated from HL7v2 schema.
 *
 * Run: bun example/adt-a01-example.ts
 */

import { ADT_A01Builder } from "./messages";
import { formatMessage } from "../src/hl7v2/format";
import { AdministrativeSex, PatientClass, AdmissionType } from "./tables";

// Build an ADT^A01 message for patient admission
const message = new ADT_A01Builder()
  // MSH - Message Header (required)
  .msh({
    $3_sendingApplication: { $1_namespace: "HOSPITAL_APP" },
    $4_sendingFacility: { $1_namespace: "HOSPITAL_FAC" },
    $5_receivingApplication: { $1_namespace: "ADT_RECEIVER" },
    $6_receivingFacility: { $1_namespace: "RECV_FAC" },
    $7_messageDateTime: "20251210120000",
    $9_messageType: {
      $1_code: "ADT",
      $2_event: "A01",
      $3_structure: "ADT_A01"
    },
    $10_messageControlId: "MSG00001",
    $11_processingId: { $1_processingId: "P" },
    $12_version: { $1_version: "2.5.1" }
  })

  // EVN - Event Type (required)
  .evn({
    $1_eventTypeCode: "A01",
    $2_recordedDateTime: "20251210115500",
    $6_eventOccurred: "20251210115000"
  })

  // PID - Patient Identification (required)
  .pid({
    $1_setIdPid: "1",
    $3_identifier: [
      {
        $1_value: "12345678",
        $4_system: { $1_namespace: "HOSP" },
        $5_type: "MR"
      },
      {
        $1_value: "987-65-4321",
        $4_system: { $1_namespace: "SSA" },
        $5_type: "SS"
      }
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
    }],
    $13_homePhone: [{
      $1_value: "617-555-1234",
      $2_use: "PRN"
    }],
    $14_businessPhone: [{
      $1_value: "617-555-5678",
      $2_use: "WPN"
    }]
  })

  // PV1 - Patient Visit (required)
  .pv1({
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
      $3_given: "Mary",
      $9_system: { $1_namespace: "HOSP" }
    }],
    $10_hospitalService: "MED",
    $14_admitSource: "7",
    $17_admittingDoctor: [{
      $1_value: "DOC002",
      $2_family: { $1_family: "Williams" },
      $3_given: "James"
    }],
    $19_visitNumber: {
      $1_value: "V12345",
      $4_system: { $1_namespace: "HOSP" }
    },
    $44_admission: "20251210115000"
  })

  // NK1 - Next of Kin (optional, repeating)
  .addNK1({
    $1_setIdNk1: "1",
    $2_name: [{
      $1_family: { $1_family: "Smith" },
      $2_given: "Jane"
    }],
    $3_relationship: {
      $1_code: "SPO",
      $2_text: "Spouse"
    },
    $5_phone: [{
      $1_value: "617-555-9999"
    }]
  })

  // DG1 - Diagnosis (optional, repeating)
  .addDG1({
    $1_setIdDg1: "1",
    $3_diagnosisCodeDg1: {
      $1_code: "J18.9",
      $2_text: "Pneumonia, unspecified organism",
      $3_system: "ICD10"
    },
    $6_diagnosisType: "A",
    $15_diagnosisPriority: "1"
  })
  .addDG1({
    $1_setIdDg1: "2",
    $3_diagnosisCodeDg1: {
      $1_code: "I10",
      $2_text: "Essential hypertension",
      $3_system: "ICD10"
    },
    $6_diagnosisType: "F",
    $15_diagnosisPriority: "2"
  })

  // AL1 - Allergy (optional, repeating)
  .addAL1({
    $1_setIdAl1: "1",
    $2_allergenTypeCode: {
      $1_code: "DA",
      $2_text: "Drug Allergy"
    },
    $3_allergenCodeMnemonicDescription: {
      $1_code: "PENICILLIN",
      $2_text: "Penicillin"
    },
    $4_allergySeverityCode: {
      $1_code: "SV",
      $2_text: "Severe"
    }
  })

  // INSURANCE group (optional, repeating)
  .addINSURANCE(ins => ins
    .in1({
      $1_setIdIn1: "1",
      $2_insurancePlanId: {
        $1_code: "BCBS001",
        $2_text: "Blue Cross Blue Shield"
      },
      $3_insuranceCompanyId: [{
        $1_value: "INS123",
        $4_system: { $1_namespace: "BCBS" }
      }],
      $4_insuranceCompanyName: [{
        $1_name: "Blue Cross Blue Shield of MA"
      }],
      $8_groupNumber: "GRP12345",
      $36_policyNumber: "POL987654"
    })
  )

  .build();

// Format to wire format
const wireFormat = formatMessage(message);

console.log("=== ADT^A01 Message ===\n");
console.log(wireFormat.replace(/\r/g, "\n"));

console.log("\n=== Segment Count ===");
console.log(`Total segments: ${message.length}`);
message.forEach(seg => console.log(`  ${seg.segment}`));

console.log("\n=== Internal Representation (first 3 segments) ===");
console.log(JSON.stringify(message.slice(0, 3), null, 2));
