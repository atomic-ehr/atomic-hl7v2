import { test, expect, describe } from "bun:test";
import { fromSegment, parseMessageToNamed, parseToNamed } from "../../src/hl7v2/schema-parser";
import { parseMessage } from "../../src/hl7v2/parse";

describe("fromSegment", () => {
  test("parses PID segment with patient identifiers", () => {
    const segment = {
      segment: "PID",
      fields: {
        1: "1",
        3: { 1: "12345", 4: { 1: "HOSP" }, 5: "MR" }
      }
    };

    const result = fromSegment(segment);

    expect(result._segment).toBe("PID");
    expect(result.$1_setIdPid).toBe("1");
    expect(result.$3_identifier).toEqual([{
      $1_value: "12345",
      $4_system: { $1_namespace: "HOSP" },
      $5_type: "MR"
    }]);
  });

  test("parses PID with repeating identifiers", () => {
    const segment = {
      segment: "PID",
      fields: {
        3: [
          { 1: "12345", 4: { 1: "HOSP" }, 5: "MR" },
          { 1: "987654321", 4: { 1: "SSA" }, 5: "SS" }
        ]
      }
    };

    const result = fromSegment(segment);

    expect(result.$3_identifier).toHaveLength(2);
    expect(result.$3_identifier[0].$1_value).toBe("12345");
    expect(result.$3_identifier[1].$1_value).toBe("987654321");
  });

  test("parses PID with patient name", () => {
    const segment = {
      segment: "PID",
      fields: {
        5: { 1: { 1: "Smith" }, 2: "John", 3: "Robert" }
      }
    };

    const result = fromSegment(segment);

    expect(result.$5_name).toHaveLength(1);
    expect(result.$5_name[0].$1_family.$1_family).toBe("Smith");
    expect(result.$5_name[0].$2_given).toBe("John");
    expect(result.$5_name[0].$3_additionalGiven).toBe("Robert");
  });

  test("parses MSH segment", () => {
    const segment = {
      segment: "MSH",
      fields: {
        1: "|",
        2: "^~\\&",
        3: { 1: "HOSPITAL" },
        7: "20231201120000",
        9: { 1: "ADT", 2: "A01" },
        10: "MSG001",
        12: { 1: "2.5.1" }
      }
    };

    const result = fromSegment(segment);

    expect(result._segment).toBe("MSH");
    expect(result.$1_fieldSeparator).toBe("|");
    expect(result.$2_encodingCharacters).toBe("^~\\&");
    expect(result.$3_sendingApplication.$1_namespace).toBe("HOSPITAL");
    expect(result.$9_messageType.$1_code).toBe("ADT");
    expect(result.$9_messageType.$2_event).toBe("A01");
  });

  test("parses EVN segment", () => {
    const segment = {
      segment: "EVN",
      fields: {
        1: "A01",
        2: "20231201120000"
      }
    };

    const result = fromSegment(segment);

    expect(result._segment).toBe("EVN");
    expect(result.$2_recordedDateTime).toBe("20231201120000");
  });

  test("parses DG1 segment with diagnosis code", () => {
    const segment = {
      segment: "DG1",
      fields: {
        1: "1",
        3: { 1: "J18.9", 2: "Pneumonia", 3: "ICD10" },
        6: "A"
      }
    };

    const result = fromSegment(segment);

    expect(result._segment).toBe("DG1");
    expect(result.$1_setIdDg1).toBe("1");
    expect(result.$3_diagnosisCodeDg1.$1_code).toBe("J18.9");
    expect(result.$3_diagnosisCodeDg1.$2_text).toBe("Pneumonia");
    expect(result.$6_diagnosisType).toBe("A");
  });

  test("handles unknown segment gracefully", () => {
    const segment = {
      segment: "ZZZ",
      fields: {
        1: "custom",
        2: "data"
      }
    };

    const result = fromSegment(segment);

    expect(result._segment).toBe("ZZZ");
    expect(result.$1).toBe("custom");
    expect(result.$2).toBe("data");
  });
});

describe("parseMessageToNamed", () => {
  test("parses full message to named segments", () => {
    const message = parseMessage(
      "MSH|^~\\&|APP|FAC|||20231201||ADT^A01|MSG001|P|2.5.1\r" +
      "EVN|A01|20231201\r" +
      "PID|1||12345^^^HOSP^MR||Smith^John||19800515|M"
    );

    const result = parseMessageToNamed(message);

    expect(result).toHaveLength(3);
    expect(result[0]._segment).toBe("MSH");
    expect(result[1]._segment).toBe("EVN");
    expect(result[2]._segment).toBe("PID");
    expect(result[2].$5_name[0].$1_family.$1_family).toBe("Smith");
  });
});

describe("parseToNamed", () => {
  test("parses wire format directly to named structure", () => {
    const wire = "MSH|^~\\&|APP||||20231201||ADT^A01|MSG001|P|2.5.1\rPID|1||12345||Doe^Jane";

    const result = parseToNamed(wire);

    expect(result).toHaveLength(2);
    expect(result[0].$3_sendingApplication.$1_namespace).toBe("APP");
    expect(result[1].$5_name[0].$1_family.$1_family).toBe("Doe");
    expect(result[1].$5_name[0].$2_given).toBe("Jane");
  });
});
