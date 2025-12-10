/**
 * ADT^A01 (Admit/Visit Notification) Example
 *
 * This example demonstrates building an ADT A01 message using the
 * type-safe fluent builders generated from HL7v2 schema.
 *
 * Run: bun example/adt-a01-example.ts
 */

import { ADT_A01Builder } from "./adt-a01-messages";
import { formatMessage } from "../src/hl7v2/format";

// Build an ADT^A01 message for patient admission
const message = new ADT_A01Builder()
  // MSH - Message Header (required)
  .msh(msh => msh
    .set_msh_3_sendingApplication({ namespaceId_1: "HOSPITAL_APP" })
    .set_msh_4_sendingFacility({ namespaceId_1: "HOSPITAL_FAC" })
    .set_msh_5_receivingApplication({ namespaceId_1: "ADT_RECEIVER" })
    .set_msh_6_receivingFacility({ namespaceId_1: "RECV_FAC" })
    .set_msh_7_dateTimeOfMessage("20251210120000")
    .set_msh_9_messageType({
      messageCode_1: "ADT",
      triggerEvent_2: "A01",
      messageStructure_3: "ADT_A01"
    })
    .set_msh_10_messageControlId("MSG00001")
    .set_msh_11_processingId({ processingId_1: "P" })
    .set_msh_12_versionId({ versionId_1: "2.5.1" })
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
    .set_pid_3_patientIdentifierList([
      {
        idNumber_1: "12345678",
        assigningAuthority_4: { namespaceId_1: "HOSP" },
        identifierTypeCode_5: "MR"
      },
      {
        idNumber_1: "987-65-4321",
        assigningAuthority_4: { namespaceId_1: "SSA" },
        identifierTypeCode_5: "SS"
      }
    ])
    .set_pid_5_patientName([{
      familyName_1: { surname_1: "Smith" },
      givenName_2: "John",
      secondAndFurtherGivenNamesOrInitialsThereof_3: "Robert",
      suffix_4: "Jr",
    }])
    .set_pid_7_dateTimeOfBirth("19800515")
    .set_pid_8_administrativeSex("M")
    .set_pid_11_patientAddress([{
      streetAddress_1: { streetOrMailingAddress_1: "123 Main Street" },
      otherDesignation_2: "Apt 4B",
      city_3: "Boston",
      stateOrProvince_4: "MA",
      zipOrPostalCode_5: "02101",
      country_6: "USA"
    }])
    .set_pid_13_phoneNumberHome([{
      telephoneNumber_1: "617-555-1234",
      telecommunicationUseCode_2: "PRN"
    }])
    .set_pid_14_phoneNumberBusiness([{
      telephoneNumber_1: "617-555-5678",
      telecommunicationUseCode_2: "WPN"
    }])
  )

  // PV1 - Patient Visit (required)
  .pv1(pv1 => pv1
    .set_pv1_1_setIdPv1("1")
    .set_pv1_2_patientClass("I")  // I = Inpatient
    .set_pv1_3_assignedPatientLocation({
      pointOfCare_1: "WARD-A",
      room_2: "101",
      bed_3: "1",
      facility_4: { namespaceId_1: "HOSP" }
    })
    .set_pv1_4_admissionType("E")  // E = Emergency
    .set_pv1_7_attendingDoctor([{
      idNumber_1: "DOC001",
      familyName_2: { surname_1: "Johnson" },
      givenName_3: "Mary",
      assigningAuthority_9: { namespaceId_1: "HOSP" }
    }])
    .set_pv1_10_hospitalService("MED")
    .set_pv1_14_admitSource("7")  // 7 = Emergency Room
    .set_pv1_17_admittingDoctor([{
      idNumber_1: "DOC002",
      familyName_2: { surname_1: "Williams" },
      givenName_3: "James"
    }])
    .set_pv1_19_visitNumber({
      idNumber_1: "V12345",
      assigningAuthority_4: { namespaceId_1: "HOSP" }
    })
    .set_pv1_44_admitDateTime("20251210115000")
  )

  // NK1 - Next of Kin (optional, repeating)
  .addNK1(nk1 => nk1
    .set_nk1_1_setIdNk1("1")
    .set_nk1_2_name([{
      familyName_1: { surname_1: "Smith" },
      givenName_2: "Jane"
    }])
    .set_nk1_3_relationship({
      identifier_1: "SPO",
      text_2: "Spouse"
    })
    .set_nk1_5_phoneNumber([{
      telephoneNumber_1: "617-555-9999"
    }])
  )

  // DG1 - Diagnosis (optional, repeating)
  .addDG1(dg1 => dg1
    .set_dg1_1_setIdDg1("1")
    .set_dg1_3_diagnosisCodeDg1({
      identifier_1: "J18.9",
      text_2: "Pneumonia, unspecified organism",
      nameOfCodingSystem_3: "ICD10"
    })
    .set_dg1_6_diagnosisType("A")  // A = Admitting
    .set_dg1_15_diagnosisPriority("1")
  )
  .addDG1(dg1 => dg1
    .set_dg1_1_setIdDg1("2")
    .set_dg1_3_diagnosisCodeDg1({
      identifier_1: "I10",
      text_2: "Essential hypertension",
      nameOfCodingSystem_3: "ICD10"
    })
    .set_dg1_6_diagnosisType("F")  // F = Final
    .set_dg1_15_diagnosisPriority("2")
  )

  // AL1 - Allergy (optional, repeating)
  .addAL1(al1 => al1
    .set_al1_1_setIdAl1("1")
    .set_al1_2_allergenTypeCode({
      identifier_1: "DA",
      text_2: "Drug Allergy"
    })
    .set_al1_3_allergenCodeMnemonicDescription({
      identifier_1: "PENICILLIN",
      text_2: "Penicillin"
    })
    .set_al1_4_allergySeverityCode({
      identifier_1: "SV",
      text_2: "Severe"
    })
  )

  // INSURANCE group (optional, repeating)
  .addINSURANCE(ins => ins
    .in1(in1 => in1
      .set_in1_1_setIdIn1("1")
      .set_in1_2_insurancePlanId({
        identifier_1: "BCBS001",
        text_2: "Blue Cross Blue Shield"
      })
      .set_in1_3_insuranceCompanyId([{
        idNumber_1: "INS123",
        assigningAuthority_4: { namespaceId_1: "BCBS" }
      }])
      .set_in1_4_insuranceCompanyName([{
        organizationName_1: "Blue Cross Blue Shield of MA"
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
