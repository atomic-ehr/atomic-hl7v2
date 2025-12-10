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

// Build an ADT^A01 message for patient admission
const message = new ADT_A01Builder()
  // MSH - Message Header (required)
  .msh(msh => msh
    .set_msh_3_sendingApplication({ namespace_1: "HOSPITAL_APP" })
    .set_msh_4_sendingFacility({ namespace_1: "HOSPITAL_FAC" })
    .set_msh_5_receivingApplication({ namespace_1: "ADT_RECEIVER" })
    .set_msh_6_receivingFacility({ namespace_1: "RECV_FAC" })
    .set_msh_7_messageDateTime("20251210120000")
    .set_msh_9_messageType({
      code_1: "ADT",
      event_2: "A01",
      structure_3: "ADT_A01"
    })
    .set_msh_10_messageControlId("MSG00001")
    .set_msh_11_processingId({ processingId_1: "P" })
    .set_msh_12_version({ version_1: "2.5.1" })
  )

  // EVN - Event Type (required)
  .evn(evn => evn
    .set_evn_1_eventTypeCode("A01")
    .set_evn_2_recordedDateTime("20251210115500")
    .set_evn_6_eventOccurred("20251210115000")
  )

  // PID - Patient Identification (required)
  .pid(pid => pid
    .set_pid_1_setIdPid("1")
    .set_pid_3_identifier([
      {
        value_1: "12345678",
        system_4: { namespace_1: "HOSP" },
        type_5: "MR"
      },
      {
        value_1: "987-65-4321",
        system_4: { namespace_1: "SSA" },
        type_5: "SS"
      }
    ])
    .set_pid_5_name([{
      family_1: { family_1: "Smith" },
      given_2: "John",
      additionalGiven_3: "Robert",
      suffix_4: "Jr",
    }])
    .set_pid_7_birthDate("19800515")
    .set_pid_8_gender("M")
    .set_pid_11_address([{
      line1_1: { line_1: "123 Main Street" },
      line2_2: "Apt 4B",
      city_3: "Boston",
      state_4: "MA",
      postalCode_5: "02101",
      country_6: "USA"
    }])
    .set_pid_13_homePhone([{
      value_1: "617-555-1234",
      use_2: "PRN"
    }])
    .set_pid_14_businessPhone([{
      value_1: "617-555-5678",
      use_2: "WPN"
    }])
  )

  // PV1 - Patient Visit (required)
  .pv1(pv1 => pv1
    .set_pv1_1_setIdPv1("1")
    .set_pv1_2_class("I")  // I = Inpatient
    .set_pv1_3_assignedPatientLocation({
      careSite_1: "WARD-A",
      room_2: "101",
      bed_3: "1",
      facility_4: { namespace_1: "HOSP" }
    })
    .set_pv1_4_admissionType("E")  // E = Emergency
    .set_pv1_7_attendingDoctor([{
      value_1: "DOC001",
      family_2: { family_1: "Johnson" },
      given_3: "Mary",
      system_9: { namespace_1: "HOSP" }
    }])
    .set_pv1_10_hospitalService("MED")
    .set_pv1_14_admitSource("7")  // 7 = Emergency Room
    .set_pv1_17_admittingDoctor([{
      value_1: "DOC002",
      family_2: { family_1: "Williams" },
      given_3: "James"
    }])
    .set_pv1_19_visitNumber({
      value_1: "V12345",
      system_4: { namespace_1: "HOSP" }
    })
    .set_pv1_44_admission("20251210115000")
  )

  // NK1 - Next of Kin (optional, repeating)
  .addNK1(nk1 => nk1
    .set_nk1_1_setIdNk1("1")
    .set_nk1_2_name([{
      family_1: { family_1: "Smith" },
      given_2: "Jane"
    }])
    .set_nk1_3_relationship({
      code_1: "SPO",
      text_2: "Spouse"
    })
    .set_nk1_5_phone([{
      value_1: "617-555-9999"
    }])
  )

  // DG1 - Diagnosis (optional, repeating)
  .addDG1(dg1 => dg1
    .set_dg1_1_setIdDg1("1")
    .set_dg1_3_diagnosisCodeDg1({
      code_1: "J18.9",
      text_2: "Pneumonia, unspecified organism",
      system_3: "ICD10"
    })
    .set_dg1_6_diagnosisType("A")  // A = Admitting
    .set_dg1_15_diagnosisPriority("1")
  )
  .addDG1(dg1 => dg1
    .set_dg1_1_setIdDg1("2")
    .set_dg1_3_diagnosisCodeDg1({
      code_1: "I10",
      text_2: "Essential hypertension",
      system_3: "ICD10"
    })
    .set_dg1_6_diagnosisType("F")  // F = Final
    .set_dg1_15_diagnosisPriority("2")
  )

  // AL1 - Allergy (optional, repeating)
  .addAL1(al1 => al1
    .set_al1_1_setIdAl1("1")
    .set_al1_2_allergenTypeCode({
      code_1: "DA",
      text_2: "Drug Allergy"
    })
    .set_al1_3_allergenCodeMnemonicDescription({
      code_1: "PENICILLIN",
      text_2: "Penicillin"
    })
    .set_al1_4_allergySeverityCode({
      code_1: "SV",
      text_2: "Severe"
    })
  )

  // INSURANCE group (optional, repeating)
  .addINSURANCE(ins => ins
    .in1(in1 => in1
      .set_in1_1_setIdIn1("1")
      .set_in1_2_insurancePlanId({
        code_1: "BCBS001",
        text_2: "Blue Cross Blue Shield"
      })
      .set_in1_3_insuranceCompanyId([{
        value_1: "INS123",
        system_4: { namespace_1: "BCBS" }
      }])
      .set_in1_4_insuranceCompanyName([{
        name_1: "Blue Cross Blue Shield of MA"
      }])
      .set_in1_8_groupNumber("GRP12345")
      .set_in1_36_policyNumber("POL987654")
    )
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
