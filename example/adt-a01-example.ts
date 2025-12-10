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
    .set_msh3_sendingApplication({ namespaceId__1: "HOSPITAL_APP" })
    .set_msh4_sendingFacility({ namespaceId__1: "HOSPITAL_FAC" })
    .set_msh5_receivingApplication({ namespaceId__1: "ADT_RECEIVER" })
    .set_msh6_receivingFacility({ namespaceId__1: "RECV_FAC" })
    .set_msh7_dateTimeOfMessage("20251210120000")
    .set_msh9_messageType({
      messageCode__1: "ADT",
      triggerEvent__2: "A01",
      messageStructure__3: "ADT_A01"
    })
    .set_msh10_messageControlId("MSG00001")
    .set_msh11_processingId({ processingId__1: "P" })
    .set_msh12_versionId({ versionId__1: "2.5.1" })
  )

  // EVN - Event Type (required)
  .evn(evn => evn
    .set_evn1_eventTypeCode("A01")
    .set_evn2_recordedDateTime("20251210115500")
    .set_evn6_eventOccurred("20251210115000")
  )

  // PID - Patient Identification (required)
  .pid(pid => pid
    .set_pid1_setIdPid("1")
    .set_pid3_patientIdentifierList([
      {
        idNumber__1: "12345678",
        assigningAuthority__4: { namespaceId__1: "HOSP" },
        identifierTypeCode__5: "MR"
      },
      {
        idNumber__1: "987-65-4321",
        assigningAuthority__4: { namespaceId__1: "SSA" },
        identifierTypeCode__5: "SS"
      }
    ])
    .set_pid5_patientName([{
      familyName__1: { surname__1: "Smith" },
      givenName__2: "John",
      secondAndFurtherGivenNamesOrInitialsThereof__3: "Robert",
      suffixEGJrOrIii__4: "Jr",
    }])
    .set_pid7_dateTimeOfBirth("19800515")
    .set_pid8_administrativeSex("M")
    .set_pid11_patientAddress([{
      streetAddress__1: { streetOrMailingAddress__1: "123 Main Street" },
      otherDesignation__2: "Apt 4B",
      city__3: "Boston",
      stateOrProvince__4: "MA",
      zipOrPostalCode__5: "02101",
      country__6: "USA"
    }])
    .set_pid13_phoneNumberHome([{
      telephoneNumber__1: "617-555-1234",
      telecommunicationUseCode__2: "PRN"
    }])
    .set_pid14_phoneNumberBusiness([{
      telephoneNumber__1: "617-555-5678",
      telecommunicationUseCode__2: "WPN"
    }])
  )

  // PV1 - Patient Visit (required)
  .pv1(pv1 => pv1
    .set_pv11_setIdPv1("1")
    .set_pv12_patientClass("I")  // I = Inpatient
    .set_pv13_assignedPatientLocation({
      pointOfCare__1: "WARD-A",
      room__2: "101",
      bed__3: "1",
      facility__4: { namespaceId__1: "HOSP" }
    })
    .set_pv14_admissionType("E")  // E = Emergency
    .set_pv17_attendingDoctor([{
      idNumber__1: "DOC001",
      familyName__2: { surname__1: "Johnson" },
      givenName__3: "Mary",
      assigningAuthority__9: { namespaceId__1: "HOSP" }
    }])
    .set_pv110_hospitalService("MED")
    .set_pv114_admitSource("7")  // 7 = Emergency Room
    .set_pv117_admittingDoctor([{
      idNumber__1: "DOC002",
      familyName__2: { surname__1: "Williams" },
      givenName__3: "James"
    }])
    .set_pv119_visitNumber({
      idNumber__1: "V12345",
      assigningAuthority__4: { namespaceId__1: "HOSP" }
    })
    .set_pv144_admitDateTime("20251210115000")
  )

  // NK1 - Next of Kin (optional, repeating)
  .addNK1(nk1 => nk1
    .set_nk11_setIdNk1("1")
    .set_nk12_nkName([{
      familyName__1: { surname__1: "Smith" },
      givenName__2: "Jane"
    }])
    .set_nk13_relationship({
      identifier__1: "SPO",
      text__2: "Spouse"
    })
    .set_nk15_phoneNumber([{
      telephoneNumber__1: "617-555-9999"
    }])
  )

  // DG1 - Diagnosis (optional, repeating)
  .addDG1(dg1 => dg1
    .set_dg11_setIdDg1("1")
    .set_dg13_diagnosisCodeDg1({
      identifier__1: "J18.9",
      text__2: "Pneumonia, unspecified organism",
      nameOfCodingSystem__3: "ICD10"
    })
    .set_dg16_diagnosisType("A")  // A = Admitting
    .set_dg115_diagnosisPriority("1")
  )
  .addDG1(dg1 => dg1
    .set_dg11_setIdDg1("2")
    .set_dg13_diagnosisCodeDg1({
      identifier__1: "I10",
      text__2: "Essential hypertension",
      nameOfCodingSystem__3: "ICD10"
    })
    .set_dg16_diagnosisType("F")  // F = Final
    .set_dg115_diagnosisPriority("2")
  )

  // AL1 - Allergy (optional, repeating)
  .addAL1(al1 => al1
    .set_al11_setIdAl1("1")
    .set_al12_allergenTypeCode({
      identifier__1: "DA",
      text__2: "Drug Allergy"
    })
    .set_al13_allergenCodeMnemonicDescription({
      identifier__1: "PENICILLIN",
      text__2: "Penicillin"
    })
    .set_al14_allergySeverityCode({
      identifier__1: "SV",
      text__2: "Severe"
    })
  )

  // INSURANCE group (optional, repeating)
  .addINSURANCE(ins => ins
    .in1(in1 => in1
      .set_in11_setIdIn1("1")
      .set_in12_insurancePlanId({
        identifier__1: "BCBS001",
        text__2: "Blue Cross Blue Shield"
      })
      .set_in13_insuranceCompanyId([{
        idNumber__1: "INS123",
        assigningAuthority__4: { namespaceId__1: "BCBS" }
      }])
      .set_in14_insuranceCompanyName([{
        organizationName__1: "Blue Cross Blue Shield of MA"
      }])
      .set_in18_groupNumber("GRP12345")
      .set_in136_policyNumber("POL987654")
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
