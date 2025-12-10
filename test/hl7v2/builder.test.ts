import { test, expect, describe } from "bun:test";
import { ADT_A01Builder } from "../../example/messages";
import { fromPID, fromMSH, fromPV1 } from "../../example/fields";
import { AdministrativeSex, PatientClass } from "../../example/tables";
import { formatMessage } from "../../src/hl7v2/format";
import { parseMessage } from "../../src/hl7v2/parse";

// Helper to create minimal valid MSH
const minMSH = (overrides = {}) => ({
  $7_messageDateTime: "20251210120000",
  $9_messageType: { $1_code: "ADT", $2_event: "A01" },
  $10_messageControlId: "MSG001",
  $11_processingId: { $1_processingId: "P" },
  $12_version: { $1_version: "2.5.1" },
  ...overrides
});

// Helper to create minimal valid EVN
const minEVN = (overrides = {}) => ({
  $2_recordedDateTime: "20251210120000",
  ...overrides
});

// Helper to create minimal valid PID
const minPID = (overrides = {}) => ({
  $3_identifier: [{ $1_value: "12345" }],
  $5_name: [{ $1_family: { $1_family: "Test" } }],
  ...overrides
});

// Helper to create minimal valid PV1
const minPV1 = (overrides = {}) => ({
  $2_class: PatientClass.Inpatient,
  ...overrides
});

describe("ADT_A01Builder", () => {
  test("builds minimal ADT_A01 message", () => {
    const message = new ADT_A01Builder()
      .msh(minMSH({ $3_sendingApplication: { $1_namespace: "TEST_APP" } }))
      .evn(minEVN({ $1_eventTypeCode: "A01" }))
      .pid(minPID({
        $1_setIdPid: "1",
        $5_name: [{ $1_family: { $1_family: "Smith" }, $2_given: "John" }]
      }))
      .pv1(minPV1({ $1_setIdPv1: "1" }))
      .build();

    expect(message).toHaveLength(4);
    expect(message[0]?.segment).toBe("MSH");
    expect(message[1]?.segment).toBe("EVN");
    expect(message[2]?.segment).toBe("PID");
    expect(message[3]?.segment).toBe("PV1");
  });

  test("builds message with patient identifiers", () => {
    const message = new ADT_A01Builder()
      .msh(minMSH({ $3_sendingApplication: { $1_namespace: "APP" } }))
      .evn(minEVN())
      .pid(minPID({
        $1_setIdPid: "1",
        $3_identifier: [
          { $1_value: "12345", $4_system: { $1_namespace: "MRN" }, $5_type: "MR" },
          { $1_value: "999-99-9999", $4_system: { $1_namespace: "SSN" }, $5_type: "SS" }
        ],
        $5_name: [{ $1_family: { $1_family: "Doe" }, $2_given: "Jane" }],
        $8_gender: AdministrativeSex.Female
      }))
      .pv1(minPV1({ $2_class: "O" }))
      .build();

    const pid = message.find(s => s.segment === "PID");
    expect(pid).toBeDefined();
    expect(pid?.fields[3]).toBeInstanceOf(Array);
    expect((pid?.fields[3] as any[]).length).toBe(2);
    expect(pid?.fields[8]).toBe("F");
  });

  test("builds message with repeating segments", () => {
    const message = new ADT_A01Builder()
      .msh(minMSH())
      .evn(minEVN())
      .pid(minPID())
      .pv1(minPV1())
      .addDG1({
        $1_setIdDg1: "1",
        $3_diagnosisCodeDg1: { $1_code: "J18.9", $3_system: "ICD10" },
        $6_diagnosisType: "A"
      })
      .addDG1({
        $1_setIdDg1: "2",
        $3_diagnosisCodeDg1: { $1_code: "I10", $3_system: "ICD10" },
        $6_diagnosisType: "F"
      })
      .addAL1({
        $1_setIdAl1: "1",
        $3_allergenCodeMnemonicDescription: { $1_code: "PENICILLIN" }
      })
      .build();

    const dg1Segments = message.filter(s => s.segment === "DG1");
    const al1Segments = message.filter(s => s.segment === "AL1");

    expect(dg1Segments).toHaveLength(2);
    expect(al1Segments).toHaveLength(1);
  });

  test("builds message with INSURANCE group", () => {
    const message = new ADT_A01Builder()
      .msh(minMSH())
      .evn(minEVN())
      .pid(minPID())
      .pv1(minPV1())
      .addINSURANCE(ins => ins
        .in1({
          $1_setIdIn1: "1",
          $2_insurancePlanId: { $1_code: "BCBS" },
          $3_insuranceCompanyId: [{ $1_value: "INS001" }]
        })
      )
      .addINSURANCE(ins => ins
        .in1({
          $1_setIdIn1: "2",
          $2_insurancePlanId: { $1_code: "MEDICARE" },
          $3_insuranceCompanyId: [{ $1_value: "INS002" }]
        })
        .in2({
          $1_insuredsEmployeeId: [{ $1_value: "EMP123" }]
        })
      )
      .build();

    const in1Segments = message.filter(s => s.segment === "IN1");
    const in2Segments = message.filter(s => s.segment === "IN2");

    expect(in1Segments).toHaveLength(2);
    expect(in2Segments).toHaveLength(1);
  });

  test("formats message to wire format", () => {
    const message = new ADT_A01Builder()
      .msh(minMSH({
        $3_sendingApplication: { $1_namespace: "SENDER" },
        $5_receivingApplication: { $1_namespace: "RECEIVER" },
        $9_messageType: { $1_code: "ADT", $2_event: "A01", $3_structure: "ADT_A01" },
        $10_messageControlId: "CTRL001"
      }))
      .evn(minEVN({ $1_eventTypeCode: "A01" }))
      .pid(minPID({
        $1_setIdPid: "1",
        $5_name: [{ $1_family: { $1_family: "Smith" }, $2_given: "John" }],
        $7_birthDate: "19800101",
        $8_gender: AdministrativeSex.Male
      }))
      .pv1(minPV1({ $1_setIdPv1: "1" }))
      .build();

    const wireFormat = formatMessage(message);

    expect(wireFormat).toContain("MSH|^~\\&|SENDER||RECEIVER");
    expect(wireFormat).toContain("ADT^A01^ADT_A01");
    expect(wireFormat).toContain("PID|1||12345");
    expect(wireFormat).toContain("PV1|1|I");
  });

  test("throws error when required segment is missing", () => {
    const builder = new ADT_A01Builder()
      .msh(minMSH())
      .evn(minEVN())
      .pid(minPID());
    // Missing PV1

    expect(() => builder.build()).toThrow("pv1 is required");
  });
});

describe("fromSegment converters", () => {
  test("parses PID segment to typed interface", () => {
    const wireFormat = `MSH|^~\\&|APP|FAC|||20251210120000||ADT^A01|MSG001|P|2.5.1
PID|1||12345^^^MRN^MR~999-99-9999^^^SSN^SS||Smith^John^Robert||19800515|M`;

    const message = parseMessage(wireFormat);
    const pidSeg = message.find(s => s.segment === "PID");
    expect(pidSeg).toBeDefined();

    const pid = fromPID(pidSeg!);

    expect(pid.$1_setIdPid).toBe("1");
    expect(pid.$3_identifier).toHaveLength(2);
    expect(pid.$3_identifier?.[0]?.$1_value).toBe("12345");
    expect(pid.$3_identifier?.[0]?.$4_system?.$1_namespace).toBe("MRN");
    expect(pid.$3_identifier?.[0]?.$5_type).toBe("MR");
    expect(pid.$3_identifier?.[1]?.$1_value).toBe("999-99-9999");
    expect(pid.$5_name?.[0]?.$1_family?.$1_family).toBe("Smith");
    expect(pid.$5_name?.[0]?.$2_given).toBe("John");
    expect(pid.$5_name?.[0]?.$3_additionalGiven).toBe("Robert");
    expect(pid.$7_birthDate).toBe("19800515");
    expect(pid.$8_gender).toBe("M");
  });

  test("parses MSH segment to typed interface", () => {
    const wireFormat = `MSH|^~\\&|SENDER|SEND_FAC|RECEIVER|RECV_FAC|20251210120000||ADT^A01^ADT_A01|MSG001|P|2.5.1`;

    const message = parseMessage(wireFormat);
    const mshSeg = message.find(s => s.segment === "MSH");
    expect(mshSeg).toBeDefined();

    const msh = fromMSH(mshSeg!);

    expect(msh.$3_sendingApplication?.$1_namespace).toBe("SENDER");
    expect(msh.$4_sendingFacility?.$1_namespace).toBe("SEND_FAC");
    expect(msh.$5_receivingApplication?.$1_namespace).toBe("RECEIVER");
    expect(msh.$9_messageType?.$1_code).toBe("ADT");
    expect(msh.$9_messageType?.$2_event).toBe("A01");
    expect(msh.$10_messageControlId).toBe("MSG001");
  });

  test("round-trip: build → format → parse → fromSegment", () => {
    // Build message
    const original = new ADT_A01Builder()
      .msh(minMSH({
        $3_sendingApplication: { $1_namespace: "SENDER" },
        $5_receivingApplication: { $1_namespace: "RECEIVER" }
      }))
      .evn(minEVN())
      .pid(minPID({
        $3_identifier: [{ $1_value: "PAT123", $5_type: "MR" }],
        $5_name: [{ $1_family: { $1_family: "Doe" }, $2_given: "Jane" }],
        $8_gender: AdministrativeSex.Female
      }))
      .pv1(minPV1({ $2_class: PatientClass.Outpatient }))
      .build();

    // Format to wire
    const wire = formatMessage(original);

    // Parse back
    const parsed = parseMessage(wire);

    // Convert to typed
    const pidSeg = parsed.find(s => s.segment === "PID");
    const pid = fromPID(pidSeg!);

    expect(pid.$3_identifier?.[0]?.$1_value).toBe("PAT123");
    expect(pid.$3_identifier?.[0]?.$5_type).toBe("MR");
    expect(pid.$5_name?.[0]?.$1_family?.$1_family).toBe("Doe");
    expect(pid.$5_name?.[0]?.$2_given).toBe("Jane");
    expect(pid.$8_gender).toBe("F");

    const pv1Seg = parsed.find(s => s.segment === "PV1");
    const pv1 = fromPV1(pv1Seg!);
    expect(pv1.$2_class).toBe("O");
  });
});
