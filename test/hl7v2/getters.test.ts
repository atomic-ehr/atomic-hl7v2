import { test, expect, describe } from "bun:test";
import { fromPID, fromMSH, fromPV1, fromEVN, fromDG1, fromAL1 } from "../../example/fields";
import { parseMessage } from "../../src/hl7v2/parse";

describe("fromSegment converters", () => {
  test("fromPID extracts patient identifiers", () => {
    const wire = `MSH|^~\\&|APP|||20251210||ADT^A01|MSG|P|2.5
PID|1||12345^^^MRN^MR~999-99-9999^^^SSN^SS||Smith^John||19800515|M`;

    const msg = parseMessage(wire);
    const pid = fromPID(msg.find(s => s.segment === "PID")!);

    expect(pid.$1_setIdPid).toBe("1");
    expect(pid.$3_identifier).toHaveLength(2);
    expect(pid.$3_identifier?.[0]?.$1_value).toBe("12345");
    expect(pid.$3_identifier?.[0]?.$4_system?.$1_namespace).toBe("MRN");
    expect(pid.$3_identifier?.[0]?.$5_type).toBe("MR");
    expect(pid.$3_identifier?.[1]?.$1_value).toBe("999-99-9999");
    expect(pid.$3_identifier?.[1]?.$5_type).toBe("SS");
  });

  test("fromPID extracts patient name components", () => {
    const wire = `MSH|^~\\&|APP|||20251210||ADT^A01|MSG|P|2.5
PID|||12345||Smith^John^Robert^Jr^Dr||19800515|M`;

    const msg = parseMessage(wire);
    const pid = fromPID(msg.find(s => s.segment === "PID")!);

    expect(pid.$5_name?.[0]?.$1_family?.$1_family).toBe("Smith");
    expect(pid.$5_name?.[0]?.$2_given).toBe("John");
    expect(pid.$5_name?.[0]?.$3_additionalGiven).toBe("Robert");
    expect(pid.$5_name?.[0]?.$4_suffix).toBe("Jr");
    expect(pid.$5_name?.[0]?.$5_prefix).toBe("Dr");
  });

  test("fromPID extracts demographics", () => {
    const wire = `MSH|^~\\&|APP|||20251210||ADT^A01|MSG|P|2.5
PID|||12345||Doe^Jane||19901225|F|||123 Main St^Apt 4^Boston^MA^02101^USA`;

    const msg = parseMessage(wire);
    const pid = fromPID(msg.find(s => s.segment === "PID")!);

    expect(pid.$7_birthDate).toBe("19901225");
    expect(pid.$8_gender).toBe("F");
    expect(pid.$11_address?.[0]?.$1_line1?.$1_line).toBe("123 Main St");
    expect(pid.$11_address?.[0]?.$2_line2).toBe("Apt 4");
    expect(pid.$11_address?.[0]?.$3_city).toBe("Boston");
    expect(pid.$11_address?.[0]?.$4_state).toBe("MA");
    expect(pid.$11_address?.[0]?.$5_postalCode).toBe("02101");
    expect(pid.$11_address?.[0]?.$6_country).toBe("USA");
  });

  test("fromMSH extracts message header", () => {
    const wire = `MSH|^~\\&|SENDER|SEND_FAC|RECEIVER|RECV_FAC|20251210120000||ADT^A01^ADT_A01|MSG001|P|2.5.1`;

    const msg = parseMessage(wire);
    const msh = fromMSH(msg.find(s => s.segment === "MSH")!);

    expect(msh.$3_sendingApplication?.$1_namespace).toBe("SENDER");
    expect(msh.$4_sendingFacility?.$1_namespace).toBe("SEND_FAC");
    expect(msh.$5_receivingApplication?.$1_namespace).toBe("RECEIVER");
    expect(msh.$6_receivingFacility?.$1_namespace).toBe("RECV_FAC");
    expect(msh.$7_messageDateTime).toBe("20251210120000");
    expect(msh.$9_messageType?.$1_code).toBe("ADT");
    expect(msh.$9_messageType?.$2_event).toBe("A01");
    expect(msh.$9_messageType?.$3_structure).toBe("ADT_A01");
    expect(msh.$10_messageControlId).toBe("MSG001");
    expect(msh.$11_processingId?.$1_processingId).toBe("P");
    expect(msh.$12_version?.$1_version).toBe("2.5.1");
  });

  test("fromPV1 extracts patient visit", () => {
    const wire = `MSH|^~\\&|APP|||20251210||ADT^A01|MSG|P|2.5
PV1|1|I|WARD-A^101^1^HOSP|E|||DOC001^Johnson^Mary`;

    const msg = parseMessage(wire);
    const pv1 = fromPV1(msg.find(s => s.segment === "PV1")!);

    expect(pv1.$1_setIdPv1).toBe("1");
    expect(pv1.$2_class).toBe("I");
    expect(pv1.$3_assignedPatientLocation?.$1_careSite).toBe("WARD-A");
    expect(pv1.$3_assignedPatientLocation?.$2_room).toBe("101");
    expect(pv1.$3_assignedPatientLocation?.$3_bed).toBe("1");
    expect(pv1.$3_assignedPatientLocation?.$4_facility?.$1_namespace).toBe("HOSP");
    expect(pv1.$4_admissionType).toBe("E");
    expect(pv1.$7_attendingDoctor?.[0]?.$1_value).toBe("DOC001");
    expect(pv1.$7_attendingDoctor?.[0]?.$2_family?.$1_family).toBe("Johnson");
    expect(pv1.$7_attendingDoctor?.[0]?.$3_given).toBe("Mary");
  });

  test("fromEVN extracts event info", () => {
    const wire = `MSH|^~\\&|APP|||20251210||ADT^A01|MSG|P|2.5
EVN|A01|20251210115500||||20251210115000`;

    const msg = parseMessage(wire);
    const evn = fromEVN(msg.find(s => s.segment === "EVN")!);

    expect(evn.$1_eventTypeCode).toBe("A01");
    expect(evn.$2_recordedDateTime).toBe("20251210115500");
    expect(evn.$6_eventOccurred).toBe("20251210115000");
  });

  test("fromDG1 extracts diagnosis", () => {
    const wire = `MSH|^~\\&|APP|||20251210||ADT^A01|MSG|P|2.5
DG1|1||J18.9^Pneumonia^ICD10|||A|||||||||1`;

    const msg = parseMessage(wire);
    const dg1 = fromDG1(msg.find(s => s.segment === "DG1")!);

    expect(dg1.$1_setIdDg1).toBe("1");
    expect(dg1.$3_diagnosisCodeDg1?.$1_code).toBe("J18.9");
    expect(dg1.$3_diagnosisCodeDg1?.$2_text).toBe("Pneumonia");
    expect(dg1.$3_diagnosisCodeDg1?.$3_system).toBe("ICD10");
    expect(dg1.$6_diagnosisType).toBe("A");
    expect(dg1.$15_diagnosisPriority).toBe("1");
  });

  test("fromAL1 extracts allergy", () => {
    const wire = `MSH|^~\\&|APP|||20251210||ADT^A01|MSG|P|2.5
AL1|1|DA^Drug Allergy|PENICILLIN^Penicillin|SV^Severe`;

    const msg = parseMessage(wire);
    const al1 = fromAL1(msg.find(s => s.segment === "AL1")!);

    expect(al1.$1_setIdAl1).toBe("1");
    expect(al1.$2_allergenTypeCode?.$1_code).toBe("DA");
    expect(al1.$2_allergenTypeCode?.$2_text).toBe("Drug Allergy");
    expect(al1.$3_allergenCodeMnemonicDescription?.$1_code).toBe("PENICILLIN");
    expect(al1.$3_allergenCodeMnemonicDescription?.$2_text).toBe("Penicillin");
    expect(al1.$4_allergySeverityCode?.$1_code).toBe("SV");
    expect(al1.$4_allergySeverityCode?.$2_text).toBe("Severe");
  });

  test("handles missing optional fields", () => {
    const wire = `MSH|^~\\&|APP|||20251210||ADT^A01|MSG|P|2.5
PID|||12345`;

    const msg = parseMessage(wire);
    const pid = fromPID(msg.find(s => s.segment === "PID")!);

    expect(pid.$3_identifier?.[0]?.$1_value).toBe("12345");
    expect(pid.$5_name).toBeUndefined();
    expect(pid.$7_birthDate).toBeUndefined();
    expect(pid.$8_gender).toBeUndefined();
  });

  test("handles multiple repeating values", () => {
    const wire = `MSH|^~\\&|APP|||20251210||ADT^A01|MSG|P|2.5
PID|||ID1~ID2~ID3||Name1^Given1~Name2^Given2`;

    const msg = parseMessage(wire);
    const pid = fromPID(msg.find(s => s.segment === "PID")!);

    expect(pid.$3_identifier).toHaveLength(3);
    expect(pid.$3_identifier?.[0]?.$1_value).toBe("ID1");
    expect(pid.$3_identifier?.[1]?.$1_value).toBe("ID2");
    expect(pid.$3_identifier?.[2]?.$1_value).toBe("ID3");

    expect(pid.$5_name).toHaveLength(2);
    expect(pid.$5_name?.[0]?.$1_family?.$1_family).toBe("Name1");
    expect(pid.$5_name?.[0]?.$2_given).toBe("Given1");
    expect(pid.$5_name?.[1]?.$1_family?.$1_family).toBe("Name2");
  });
});
