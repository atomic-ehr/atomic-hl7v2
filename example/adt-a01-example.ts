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
    set_3_sendingApplication: { set_1_namespace: "HOSPITAL_APP" },
    set_4_sendingFacility: { set_1_namespace: "HOSPITAL_FAC" },
    set_5_receivingApplication: { set_1_namespace: "ADT_RECEIVER" },
    set_6_receivingFacility: { set_1_namespace: "RECV_FAC" },
    set_7_messageDateTime: "20251210120000",
    set_9_messageType: {
      set_1_code: "ADT",
      set_2_event: "A01",
      set_3_structure: "ADT_A01"
    },
    set_10_messageControlId: "MSG00001",
    set_11_processingId: { set_1_processingId: "P" },
    set_12_version: { set_1_version: "2.5.1" }
  })

  // EVN - Event Type (required)
  .evn({
    set_1_eventTypeCode: "A01",
    set_2_recordedDateTime: "20251210115500",
    set_6_eventOccurred: "20251210115000"
  })

  // PID - Patient Identification (required)
  .pid({
    set_1_setIdPid: "1",
    set_3_identifier: [
      {
        set_1_value: "12345678",
        set_4_system: { set_1_namespace: "HOSP" },
        set_5_type: "MR"
      },
      {
        set_1_value: "987-65-4321",
        set_4_system: { set_1_namespace: "SSA" },
        set_5_type: "SS"
      }
    ],
    set_5_name: [{
      set_1_family: { set_1_family: "Smith" },
      set_2_given: "John",
      set_3_additionalGiven: "Robert",
      set_4_suffix: "Jr"
    }],
    set_7_birthDate: "19800515",
    set_8_gender: AdministrativeSex.Male,
    set_11_address: [{
      set_1_line1: { set_1_line: "123 Main Street" },
      set_2_line2: "Apt 4B",
      set_3_city: "Boston",
      set_4_state: "MA",
      set_5_postalCode: "02101",
      set_6_country: "USA"
    }],
    set_13_homePhone: [{
      set_1_value: "617-555-1234",
      set_2_use: "PRN"
    }],
    set_14_businessPhone: [{
      set_1_value: "617-555-5678",
      set_2_use: "WPN"
    }]
  })

  // PV1 - Patient Visit (required)
  .pv1({
    set_1_setIdPv1: "1",
    set_2_class: PatientClass.Inpatient,
    set_3_assignedPatientLocation: {
      set_1_careSite: "WARD-A",
      set_2_room: "101",
      set_3_bed: "1",
      set_4_facility: { set_1_namespace: "HOSP" }
    },
    set_4_admissionType: AdmissionType.Emergency,
    set_7_attendingDoctor: [{
      set_1_value: "DOC001",
      set_2_family: { set_1_family: "Johnson" },
      set_3_given: "Mary",
      set_9_system: { set_1_namespace: "HOSP" }
    }],
    set_10_hospitalService: "MED",
    set_14_admitSource: "7",
    set_17_admittingDoctor: [{
      set_1_value: "DOC002",
      set_2_family: { set_1_family: "Williams" },
      set_3_given: "James"
    }],
    set_19_visitNumber: {
      set_1_value: "V12345",
      set_4_system: { set_1_namespace: "HOSP" }
    },
    set_44_admission: "20251210115000"
  })

  // NK1 - Next of Kin (optional, repeating)
  .addNK1({
    set_1_setIdNk1: "1",
    set_2_name: [{
      set_1_family: { set_1_family: "Smith" },
      set_2_given: "Jane"
    }],
    set_3_relationship: {
      set_1_code: "SPO",
      set_2_text: "Spouse"
    },
    set_5_phone: [{
      set_1_value: "617-555-9999"
    }]
  })

  // DG1 - Diagnosis (optional, repeating)
  .addDG1({
    set_1_setIdDg1: "1",
    set_3_diagnosisCodeDg1: {
      set_1_code: "J18.9",
      set_2_text: "Pneumonia, unspecified organism",
      set_3_system: "ICD10"
    },
    set_6_diagnosisType: "A",
    set_15_diagnosisPriority: "1"
  })
  .addDG1({
    set_1_setIdDg1: "2",
    set_3_diagnosisCodeDg1: {
      set_1_code: "I10",
      set_2_text: "Essential hypertension",
      set_3_system: "ICD10"
    },
    set_6_diagnosisType: "F",
    set_15_diagnosisPriority: "2"
  })

  // AL1 - Allergy (optional, repeating)
  .addAL1({
    set_1_setIdAl1: "1",
    set_2_allergenTypeCode: {
      set_1_code: "DA",
      set_2_text: "Drug Allergy"
    },
    set_3_allergenCodeMnemonicDescription: {
      set_1_code: "PENICILLIN",
      set_2_text: "Penicillin"
    },
    set_4_allergySeverityCode: {
      set_1_code: "SV",
      set_2_text: "Severe"
    }
  })

  // INSURANCE group (optional, repeating)
  .addINSURANCE(ins => ins
    .in1({
      set_1_setIdIn1: "1",
      set_2_insurancePlanId: {
        set_1_code: "BCBS001",
        set_2_text: "Blue Cross Blue Shield"
      },
      set_3_insuranceCompanyId: [{
        set_1_value: "INS123",
        set_4_system: { set_1_namespace: "BCBS" }
      }],
      set_4_insuranceCompanyName: [{
        set_1_name: "Blue Cross Blue Shield of MA"
      }],
      set_8_groupNumber: "GRP12345",
      set_36_policyNumber: "POL987654"
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
