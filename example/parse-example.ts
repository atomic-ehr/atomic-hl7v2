/**
 * HL7v2 Parsing Example
 *
 * This example demonstrates parsing HL7v2 wire format and using
 * typed getters (fromXXX functions) to extract structured data.
 *
 * Run: bun example/parse-example.ts
 */

import { parseMessage } from "../src/hl7v2/parse";
import { fromPID, fromMSH, fromPV1, fromDG1, fromAL1, fromEVN } from "./fields";

// Sample ADT^A01 message in wire format
const wireMessage = `MSH|^~\\&|HOSPITAL_APP|MAIN_FAC|LAB_SYSTEM|LAB_FAC|20251210120000||ADT^A01^ADT_A01|MSG00001|P|2.5.1
EVN|A01|20251210115500||||20251210115000
PID|1||12345678^^^HOSP^MR~987-65-4321^^^SSA^SS||Smith^John^Robert^Jr||19800515|M|||123 Main Street^Apt 4B^Boston^MA^02101^USA
PV1|1|I|WARD-A^101^1^^^HOSP|E|||DOC001^Johnson^Mary|||||||||||||V12345|||||||||||||||||||||||20251210115000
NK1|1|Smith^Jane||||||SPO^Spouse
DG1|1||J18.9^Pneumonia^ICD10|||A||||||||1
DG1|2||I10^Hypertension^ICD10|||F||||||||2
AL1|1|DA^Drug Allergy|PENICILLIN^Penicillin|SV^Severe`;

console.log("=== Original Wire Format ===\n");
console.log(wireMessage);
console.log("\n");

// Parse the message
const message = parseMessage(wireMessage);

console.log("=== Parsed Message Structure ===\n");
console.log(`Total segments: ${message.length}`);
message.forEach(seg => console.log(`  ${seg.segment}`));
console.log("\n");

// Extract MSH using typed getter
const mshSeg = message.find(s => s.segment === "MSH");
if (mshSeg) {
  const msh = fromMSH(mshSeg);
  console.log("=== MSH (Message Header) ===\n");
  console.log(`Sending Application: ${msh.$3_sendingApplication?.$1_namespace}`);
  console.log(`Sending Facility: ${msh.$4_sendingFacility?.$1_namespace}`);
  console.log(`Receiving Application: ${msh.$5_receivingApplication?.$1_namespace}`);
  console.log(`Message DateTime: ${msh.$7_messageDateTime}`);
  console.log(`Message Type: ${msh.$9_messageType?.$1_code}^${msh.$9_messageType?.$2_event}`);
  console.log(`Message Control ID: ${msh.$10_messageControlId}`);
  console.log(`Version: ${msh.$12_version?.$1_version}`);
  console.log("\n");
}

// Extract EVN using typed getter
const evnSeg = message.find(s => s.segment === "EVN");
if (evnSeg) {
  const evn = fromEVN(evnSeg);
  console.log("=== EVN (Event Type) ===\n");
  console.log(`Event Type Code: ${evn.$1_eventTypeCode}`);
  console.log(`Recorded DateTime: ${evn.$2_recordedDateTime}`);
  console.log(`Event Occurred: ${evn.$6_eventOccurred}`);
  console.log("\n");
}

// Extract PID using typed getter
const pidSeg = message.find(s => s.segment === "PID");
if (pidSeg) {
  const pid = fromPID(pidSeg);
  console.log("=== PID (Patient Identification) ===\n");

  // Patient identifiers (repeating)
  console.log("Identifiers:");
  pid.$3_identifier?.forEach((id, i) => {
    console.log(`  [${i + 1}] Value: ${id.$1_value}, System: ${id.$4_system?.$1_namespace}, Type: ${id.$5_type}`);
  });

  // Patient name
  const name = pid.$5_name?.[0];
  console.log(`\nPatient Name: ${name?.$1_family?.$1_family}, ${name?.$2_given} ${name?.$3_additionalGiven || ""} ${name?.$4_suffix || ""}`);

  // Demographics
  console.log(`Birth Date: ${pid.$7_birthDate}`);
  console.log(`Gender: ${pid.$8_gender}`);

  // Address
  const addr = pid.$11_address?.[0];
  if (addr) {
    console.log(`\nAddress:`);
    console.log(`  ${addr.$1_line1?.$1_line}`);
    if (addr.$2_line2) console.log(`  ${addr.$2_line2}`);
    console.log(`  ${addr.$3_city}, ${addr.$4_state} ${addr.$5_postalCode}`);
    console.log(`  ${addr.$6_country}`);
  }
  console.log("\n");
}

// Extract PV1 using typed getter
const pv1Seg = message.find(s => s.segment === "PV1");
if (pv1Seg) {
  const pv1 = fromPV1(pv1Seg);
  console.log("=== PV1 (Patient Visit) ===\n");
  console.log(`Patient Class: ${pv1.$2_class}`);

  const loc = pv1.$3_assignedPatientLocation;
  if (loc) {
    console.log(`Location: ${loc.$1_careSite} / Room ${loc.$2_room} / Bed ${loc.$3_bed}`);
  }

  console.log(`Admission Type: ${pv1.$4_admissionType}`);

  const doc = pv1.$7_attendingDoctor?.[0];
  if (doc) {
    console.log(`Attending Doctor: ${doc.$2_family?.$1_family}, ${doc.$3_given} (${doc.$1_value})`);
  }

  console.log(`Visit Number: ${pv1.$19_visitNumber?.$1_value}`);
  console.log(`Admission DateTime: ${pv1.$44_admission}`);
  console.log("\n");
}

// Extract DG1 segments using typed getter
const dg1Segs = message.filter(s => s.segment === "DG1");
if (dg1Segs.length > 0) {
  console.log("=== DG1 (Diagnoses) ===\n");
  dg1Segs.forEach(seg => {
    const dg1 = fromDG1(seg);
    const code = dg1.$3_diagnosisCodeDg1;
    console.log(`[${dg1.$1_setIdDg1}] ${code?.$1_code} - ${code?.$2_text} (${code?.$3_system}) Type: ${dg1.$6_diagnosisType}, Priority: ${dg1.$15_diagnosisPriority}`);
  });
  console.log("\n");
}

// Extract AL1 segments using typed getter
const al1Segs = message.filter(s => s.segment === "AL1");
if (al1Segs.length > 0) {
  console.log("=== AL1 (Allergies) ===\n");
  al1Segs.forEach(seg => {
    const al1 = fromAL1(seg);
    console.log(`[${al1.$1_setIdAl1}] ${al1.$3_allergenCodeMnemonicDescription?.$1_code} - ${al1.$3_allergenCodeMnemonicDescription?.$2_text}`);
    console.log(`   Type: ${al1.$2_allergenTypeCode?.$2_text}, Severity: ${al1.$4_allergySeverityCode?.$2_text}`);
  });
  console.log("\n");
}

// Demonstrate round-trip: parse -> modify -> format
console.log("=== Round-Trip Example ===\n");
console.log("Parsed, extracted typed data, ready for FHIR conversion or other processing.");
