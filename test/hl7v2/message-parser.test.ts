import { test, expect, describe } from "bun:test";
import { parseMessageStructure, parseToStructure } from "../../src/hl7v2/message-parser";
import { parseMessage } from "../../src/hl7v2/parse";

describe("parseMessageStructure", () => {
  test("parses ADT_A01 with basic segments", () => {
    const wire = [
      "MSH|^~\\&|APP|FAC|||20231201||ADT^A01|MSG001|P|2.5.1",
      "EVN|A01|20231201",
      "PID|1||12345||Smith^John||19800515|M",
      "PV1|1|I|ICU"
    ].join("\r");

    const result = parseToStructure(wire);

    expect(result.MSH).toBeDefined();
    expect(result.MSH.$3_sendingApplication.$1_namespace).toBe("APP");
    expect(result.EVN).toBeDefined();
    expect(result.PID).toBeDefined();
    expect(result.PID.$5_name[0].$1_family.$1_family).toBe("Smith");
    expect(result.PV1).toBeDefined();
  });

  test("parses ADT_A01 with PROCEDURE group", () => {
    const wire = [
      "MSH|^~\\&|APP|FAC|||20231201||ADT^A01|MSG001|P|2.5.1",
      "EVN|A01|20231201",
      "PID|1||12345||Smith^John",
      "PV1|1|I",
      "PR1|1||99213^Office Visit",
      "PR1|2||99214^Office Visit Extended"
    ].join("\r");

    const result = parseToStructure(wire);

    expect(result.PROCEDURE).toBeDefined();
    expect(result.PROCEDURE).toHaveLength(2);
    expect(result.PROCEDURE[0].PR1.$3_procedureCode.$1_code).toBe("99213");
    expect(result.PROCEDURE[1].PR1.$3_procedureCode.$1_code).toBe("99214");
  });

  test("parses ADT_A01 with INSURANCE group", () => {
    const wire = [
      "MSH|^~\\&|APP|FAC|||20231201||ADT^A01|MSG001|P|2.5.1",
      "EVN|A01|20231201",
      "PID|1||12345||Smith^John",
      "PV1|1|I",
      "IN1|1|BCBS|12345|Blue Cross",
      "IN2|1|",
      "IN1|2|AETNA|67890|Aetna"
    ].join("\r");

    const result = parseToStructure(wire);

    expect(result.INSURANCE).toBeDefined();
    expect(result.INSURANCE).toHaveLength(2);
    expect(result.INSURANCE[0].IN1.$4_insuranceCompanyName[0].$1_name).toBe("Blue Cross");
    expect(result.INSURANCE[1].IN1.$4_insuranceCompanyName[0].$1_name).toBe("Aetna");
  });

  test("parses ADT_A01 with DG1 segments", () => {
    const wire = [
      "MSH|^~\\&|APP|FAC|||20231201||ADT^A01|MSG001|P|2.5.1",
      "EVN|A01|20231201",
      "PID|1||12345||Smith^John",
      "PV1|1|I",
      "DG1|1||J18.9^Pneumonia^ICD10||20231201|A",
      "DG1|2||I10^Hypertension^ICD10||20231201|S"
    ].join("\r");

    const result = parseToStructure(wire);

    expect(result.DG1).toBeDefined();
    expect(result.DG1).toHaveLength(2);
    expect(result.DG1[0].$3_diagnosisCodeDg1.$1_code).toBe("J18.9");
    expect(result.DG1[1].$3_diagnosisCodeDg1.$1_code).toBe("I10");
  });

  test("parses ORU_R01 with nested groups", () => {
    const wire = [
      "MSH|^~\\&|LAB|FAC|||20231201||ORU^R01|MSG001|P|2.5.1",
      "PID|1||12345||Smith^John",
      "PV1|1|O",
      "ORC|RE|ORD001",
      "OBR|1|ORD001||CBC^Complete Blood Count",
      "OBX|1|NM|WBC^White Blood Cell||7.5|10*3/uL|4.5-11.0|N|||F",
      "OBX|2|NM|RBC^Red Blood Cell||4.8|10*6/uL|4.5-5.5|N|||F"
    ].join("\r");

    const result = parseToStructure(wire);

    expect(result.MSH).toBeDefined();
    expect(result.PATIENT_RESULT).toBeDefined();
    expect(result.PATIENT_RESULT).toHaveLength(1);

    const patientResult = result.PATIENT_RESULT[0];
    expect(patientResult.PATIENT).toBeDefined();
    expect(patientResult.PATIENT.PID.$5_name[0].$1_family.$1_family).toBe("Smith");

    expect(patientResult.ORDER_OBSERVATION).toBeDefined();
    expect(patientResult.ORDER_OBSERVATION).toHaveLength(1);

    const order = patientResult.ORDER_OBSERVATION[0];
    expect(order.OBR.$4_service.$1_code).toBe("CBC");
    expect(order.OBSERVATION).toHaveLength(2);
    expect(order.OBSERVATION[0].OBX.$3_observationIdentifier.$1_code).toBe("WBC");
  });

  test("handles unknown message type with flat parse", () => {
    const wire = [
      "MSH|^~\\&|APP|FAC|||20231201||ZZZ^Z01|MSG001|P|2.5.1",
      "ZZ1|1|custom|data",
      "ZZ1|2|more|stuff"
    ].join("\r");

    const result = parseToStructure(wire);

    expect(result.MSH).toBeDefined();
    expect(result.ZZ1).toBeDefined();
    expect(Array.isArray(result.ZZ1)).toBe(true);
    expect(result.ZZ1).toHaveLength(2);
  });

  test("handles message without MSH-9", () => {
    const message = parseMessage("MSH|^~\\&|APP|FAC|||20231201|||MSG001|P|2.5.1\rPID|1||123");
    const result = parseMessageStructure(message);

    expect(result.MSH).toBeDefined();
    expect(result.PID).toBeDefined();
  });
});

describe("parseToStructure", () => {
  test("parses wire format directly", () => {
    const wire = "MSH|^~\\&|APP||||20231201||ADT^A01|MSG001|P|2.5.1\rPID|1||12345||Doe^Jane";

    const result = parseToStructure(wire);

    expect(result.MSH).toBeDefined();
    expect(result.PID.$5_name[0].$2_given).toBe("Jane");
  });
});
