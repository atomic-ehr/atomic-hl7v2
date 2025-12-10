import { test, expect, describe } from "bun:test";
import { ADT_A01Builder, toADT_A01, type ADT_A01_Input } from "../../example/messages";
import { AdministrativeSex, PatientClass } from "../../example/tables";
import { formatMessage } from "../../src/hl7v2/format";

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

describe("toADT_A01", () => {
  test("converts input object to HL7v2Message", () => {
    const input: ADT_A01_Input = {
      type: "ADT_A01",
      MSH: {
        $3_sendingApplication: { $1_namespace: "SENDER" },
        $5_receivingApplication: { $1_namespace: "RECEIVER" },
        $7_messageDateTime: "20251210120000",
        $9_messageType: { $1_code: "ADT", $2_event: "A01" },
        $10_messageControlId: "MSG001",
        $11_processingId: { $1_processingId: "P" },
        $12_version: { $1_version: "2.5.1" }
      },
      EVN: {
        $2_recordedDateTime: "20251210120000"
      },
      PID: {
        $3_identifier: [{ $1_value: "12345", $4_system: { $1_namespace: "MRN" } }],
        $5_name: [{ $1_family: { $1_family: "Smith" }, $2_given: "John" }],
        $8_gender: AdministrativeSex.Male
      },
      PV1: {
        $2_class: PatientClass.Inpatient
      }
    };

    const message = toADT_A01(input);

    expect(message).toHaveLength(4);
    expect(message[0]?.segment).toBe("MSH");
    expect(message[1]?.segment).toBe("EVN");
    expect(message[2]?.segment).toBe("PID");
    expect(message[3]?.segment).toBe("PV1");
  });

  test("converts input with groups to HL7v2Message", () => {
    const input: ADT_A01_Input = {
      type: "ADT_A01",
      MSH: minMSH(),
      EVN: minEVN(),
      PID: minPID(),
      PV1: minPV1(),
      DG1: [
        { $1_setIdDg1: "1", $3_diagnosisCodeDg1: { $1_code: "J18.9" }, $6_diagnosisType: "A" },
        { $1_setIdDg1: "2", $3_diagnosisCodeDg1: { $1_code: "I10" }, $6_diagnosisType: "F" }
      ],
      PROCEDURE: [
        { PR1: { $1_setIdPr1: "1", $3_procedureCode: { $1_code: "99213" }, $5_procedureDateTime: "20251210" } }
      ],
      INSURANCE: [
        {
          IN1: { $1_setIdIn1: "1", $2_insurancePlanId: { $1_code: "BCBS" }, $3_insuranceCompanyId: [{ $1_value: "INS001" }] },
          IN2: { $1_insuredsEmployeeId: [{ $1_value: "EMP123" }] }
        }
      ]
    };

    const message = toADT_A01(input);

    expect(message.filter(s => s.segment === "DG1")).toHaveLength(2);
    expect(message.filter(s => s.segment === "PR1")).toHaveLength(1);
    expect(message.filter(s => s.segment === "IN1")).toHaveLength(1);
    expect(message.filter(s => s.segment === "IN2")).toHaveLength(1);
  });

  test("formats input to wire format", () => {
    const input: ADT_A01_Input = {
      type: "ADT_A01",
      MSH: {
        $3_sendingApplication: { $1_namespace: "HIS" },
        $5_receivingApplication: { $1_namespace: "LAB" },
        $7_messageDateTime: "20251210120000",
        $9_messageType: { $1_code: "ADT", $2_event: "A01", $3_structure: "ADT_A01" },
        $10_messageControlId: "CTRL001",
        $11_processingId: { $1_processingId: "P" },
        $12_version: { $1_version: "2.5.1" }
      },
      EVN: { $1_eventTypeCode: "A01", $2_recordedDateTime: "20251210120000" },
      PID: {
        $1_setIdPid: "1",
        $3_identifier: [{ $1_value: "PAT001" }],
        $5_name: [{ $1_family: { $1_family: "Doe" }, $2_given: "Jane" }],
        $7_birthDate: "19850515",
        $8_gender: AdministrativeSex.Female
      },
      PV1: { $1_setIdPv1: "1", $2_class: PatientClass.Outpatient }
    };

    const message = toADT_A01(input);
    const wire = formatMessage(message);

    expect(wire).toContain("MSH|^~\\&|HIS||LAB");
    expect(wire).toContain("ADT^A01^ADT_A01");
    expect(wire).toContain("PID|1||PAT001");
    expect(wire).toContain("Doe^Jane");
    expect(wire).toContain("|F\r");  // Gender at end of PID
    expect(wire).toContain("PV1|1|O");
  });
});
