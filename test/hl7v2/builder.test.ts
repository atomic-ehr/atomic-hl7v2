import { test, expect, describe } from "bun:test";
import { ADT_A01Builder } from "../../example/messages";
import { AdministrativeSex, PatientClass } from "../../example/tables";
import { formatMessage } from "../../src/hl7v2/format";

describe("ADT_A01Builder", () => {
  test("builds minimal ADT_A01 message", () => {
    const message = new ADT_A01Builder()
      .msh({
        $3_sendingApplication: { $1_namespace: "TEST_APP" },
        $9_messageType: { $1_code: "ADT", $2_event: "A01" },
        $10_messageControlId: "MSG001"
      })
      .evn({
        $1_eventTypeCode: "A01",
        $2_recordedDateTime: "20251210120000"
      })
      .pid({
        $1_setIdPid: "1",
        $5_name: [{ $1_family: { $1_family: "Smith" }, $2_given: "John" }]
      })
      .pv1({
        $1_setIdPv1: "1",
        $2_class: PatientClass.Inpatient
      })
      .build();

    expect(message).toHaveLength(4);
    expect(message[0]?.segment).toBe("MSH");
    expect(message[1]?.segment).toBe("EVN");
    expect(message[2]?.segment).toBe("PID");
    expect(message[3]?.segment).toBe("PV1");
  });

  test("builds message with patient identifiers", () => {
    const message = new ADT_A01Builder()
      .msh({
        $3_sendingApplication: { $1_namespace: "APP" },
        $9_messageType: { $1_code: "ADT", $2_event: "A01" },
        $10_messageControlId: "MSG002"
      })
      .evn({ $1_eventTypeCode: "A01" })
      .pid({
        $1_setIdPid: "1",
        $3_identifier: [
          { $1_value: "12345", $4_system: { $1_namespace: "MRN" }, $5_type: "MR" },
          { $1_value: "999-99-9999", $4_system: { $1_namespace: "SSN" }, $5_type: "SS" }
        ],
        $5_name: [{ $1_family: { $1_family: "Doe" }, $2_given: "Jane" }],
        $8_gender: AdministrativeSex.Female
      })
      .pv1({ $2_class: "O" })
      .build();

    const pid = message.find(s => s.segment === "PID");
    expect(pid).toBeDefined();
    expect(pid?.fields[3]).toBeInstanceOf(Array);
    expect((pid?.fields[3] as any[]).length).toBe(2);
    expect(pid?.fields[8]).toBe("F");
  });

  test("builds message with repeating segments", () => {
    const message = new ADT_A01Builder()
      .msh({
        $3_sendingApplication: { $1_namespace: "APP" },
        $9_messageType: { $1_code: "ADT", $2_event: "A01" },
        $10_messageControlId: "MSG003"
      })
      .evn({ $1_eventTypeCode: "A01" })
      .pid({
        $1_setIdPid: "1",
        $5_name: [{ $1_family: { $1_family: "Test" } }]
      })
      .pv1({ $2_class: "I" })
      .addDG1({
        $1_setIdDg1: "1",
        $3_diagnosisCodeDg1: { $1_code: "J18.9", $3_system: "ICD10" }
      })
      .addDG1({
        $1_setIdDg1: "2",
        $3_diagnosisCodeDg1: { $1_code: "I10", $3_system: "ICD10" }
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
      .msh({
        $3_sendingApplication: { $1_namespace: "APP" },
        $9_messageType: { $1_code: "ADT", $2_event: "A01" },
        $10_messageControlId: "MSG004"
      })
      .evn({ $1_eventTypeCode: "A01" })
      .pid({
        $1_setIdPid: "1",
        $5_name: [{ $1_family: { $1_family: "Insured" } }]
      })
      .pv1({ $2_class: "I" })
      .addINSURANCE(ins => ins
        .in1({
          $1_setIdIn1: "1",
          $2_insurancePlanId: { $1_code: "BCBS" }
        })
      )
      .addINSURANCE(ins => ins
        .in1({
          $1_setIdIn1: "2",
          $2_insurancePlanId: { $1_code: "MEDICARE" }
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
      .msh({
        $3_sendingApplication: { $1_namespace: "SENDER" },
        $5_receivingApplication: { $1_namespace: "RECEIVER" },
        $7_messageDateTime: "20251210120000",
        $9_messageType: { $1_code: "ADT", $2_event: "A01", $3_structure: "ADT_A01" },
        $10_messageControlId: "CTRL001",
        $11_processingId: { $1_processingId: "P" },
        $12_version: { $1_version: "2.5.1" }
      })
      .evn({
        $1_eventTypeCode: "A01",
        $2_recordedDateTime: "20251210115500"
      })
      .pid({
        $1_setIdPid: "1",
        $5_name: [{ $1_family: { $1_family: "Smith" }, $2_given: "John" }],
        $7_birthDate: "19800101",
        $8_gender: AdministrativeSex.Male
      })
      .pv1({
        $1_setIdPv1: "1",
        $2_class: PatientClass.Inpatient
      })
      .build();

    const wireFormat = formatMessage(message);

    expect(wireFormat).toContain("MSH|^~\\&|SENDER||RECEIVER");
    expect(wireFormat).toContain("ADT^A01^ADT_A01");
    expect(wireFormat).toContain("PID|1||||Smith^John||19800101|M");
    expect(wireFormat).toContain("PV1|1|I");
  });

  test("throws error when required segment is missing", () => {
    const builder = new ADT_A01Builder()
      .msh({
        $9_messageType: { $1_code: "ADT", $2_event: "A01" },
        $10_messageControlId: "MSG"
      })
      .evn({ $1_eventTypeCode: "A01" })
      .pid({ $5_name: [{ $1_family: { $1_family: "Test" } }] });
    // Missing PV1

    expect(() => builder.build()).toThrow("pv1 is required");
  });
});
