import { test, expect, describe } from "bun:test";
import { highlightHL7Message, getHighlightStyles } from "../../src/hl7v2/highlight";

describe("highlightHL7Message", () => {
  test("returns placeholder for undefined input", () => {
    const result = highlightHL7Message(undefined);
    expect(result).toContain("No HL7v2 message");
  });

  test("returns placeholder for empty string", () => {
    const result = highlightHL7Message("");
    expect(result).toContain("No HL7v2 message");
  });

  test("highlights MSH segment name", () => {
    const wire = "MSH|^~\\&|APP|FAC|||20231201||ADT^A01|MSG001|P|2.5.1";
    const result = highlightHL7Message(wire);

    expect(result).toContain('<span class="hl7-segment">MSH</span>');
  });

  test("highlights pipe delimiters", () => {
    const wire = "MSH|^~\\&|APP|FAC|||20231201||ADT^A01|MSG001|P|2.5.1";
    const result = highlightHL7Message(wire);

    expect(result).toContain('class="hl7-delim hl7-pipe"');
  });

  test("highlights encoding characters in MSH.2", () => {
    const wire = "MSH|^~\\&|APP|FAC|||20231201||ADT^A01|MSG001|P|2.5.1";
    const result = highlightHL7Message(wire);

    expect(result).toContain('<span class="hl7-encoding"');
    expect(result).toContain("^~\\&amp;");
  });

  test("highlights component separators", () => {
    const wire = "MSH|^~\\&|APP|FAC|||20231201||ADT^A01|MSG001|P|2.5.1";
    const result = highlightHL7Message(wire);

    expect(result).toContain('<span class="hl7-delim hl7-comp">^</span>');
  });

  test("highlights PID segment", () => {
    const wire = "MSH|^~\\&|APP||||||||MSG001||\nPID|1||12345||Smith^John||19800101|M";
    const result = highlightHL7Message(wire);

    expect(result).toContain('<span class="hl7-segment">PID</span>');
  });

  test("includes field tooltips with metadata", () => {
    const wire = "MSH|^~\\&|APP|FAC|||20231201||ADT^A01|MSG001|P|2.5.1";
    const result = highlightHL7Message(wire);

    // MSH.3 is Sending Application
    expect(result).toContain("title=");
    expect(result).toContain("MSH.3");
  });

  test("highlights repetition separator", () => {
    const wire = "MSH|^~\\&|APP||||||||MSG001||\nPID|1||ID1~ID2~ID3";
    const result = highlightHL7Message(wire);

    expect(result).toContain('<span class="hl7-delim hl7-rep">~</span>');
  });

  test("handles multiple segments", () => {
    const wire = [
      "MSH|^~\\&|APP|FAC|||20231201||ADT^A01|MSG001|P|2.5.1",
      "EVN|A01|20231201",
      "PID|1||12345||Smith^John||19800101|M"
    ].join("\r");

    const result = highlightHL7Message(wire);

    expect(result).toContain('<span class="hl7-segment">MSH</span>');
    expect(result).toContain('<span class="hl7-segment">EVN</span>');
    expect(result).toContain('<span class="hl7-segment">PID</span>');
  });

  test("handles LF line endings", () => {
    const wire = "MSH|^~\\&|APP||||||||MSG001\nPID|1||123";
    const result = highlightHL7Message(wire);

    expect(result).toContain('<span class="hl7-segment">MSH</span>');
    expect(result).toContain('<span class="hl7-segment">PID</span>');
  });

  test("handles CR line endings", () => {
    const wire = "MSH|^~\\&|APP||||||||MSG001\rPID|1||123";
    const result = highlightHL7Message(wire);

    expect(result).toContain('<span class="hl7-segment">MSH</span>');
    expect(result).toContain('<span class="hl7-segment">PID</span>');
  });

  test("escapes HTML special characters", () => {
    const wire = "MSH|^~\\&|<APP>||||||||MSG001";
    const result = highlightHL7Message(wire);

    expect(result).toContain("&lt;APP&gt;");
    expect(result).not.toContain("<APP>");
  });

  test("wraps fields with tooltips", () => {
    const wire = "MSH|^~\\&|APP|FAC|||20231201||ADT^A01|MSG001|P|2.5.1";
    const result = highlightHL7Message(wire);

    expect(result).toContain('class="hl7-field-wrap"');
  });

  test("highlights subcomponents with & separator", () => {
    const wire = "MSH|^~\\&|||||||||MSG001||\nPID|1||12345^^^HOSP&1.2.3&ISO^MR";
    const result = highlightHL7Message(wire);

    expect(result).toContain('<span class="hl7-delim hl7-sub">&amp;</span>');
  });
});

describe("getHighlightStyles", () => {
  test("returns CSS string", () => {
    const styles = getHighlightStyles();

    expect(typeof styles).toBe("string");
    expect(styles.length).toBeGreaterThan(0);
  });

  test("includes segment styles", () => {
    const styles = getHighlightStyles();

    expect(styles).toContain(".hl7-segment");
  });

  test("includes delimiter styles", () => {
    const styles = getHighlightStyles();

    expect(styles).toContain(".hl7-delim");
    expect(styles).toContain(".hl7-pipe");
    expect(styles).toContain(".hl7-comp");
    expect(styles).toContain(".hl7-rep");
    expect(styles).toContain(".hl7-sub");
  });

  test("includes field styles", () => {
    const styles = getHighlightStyles();

    expect(styles).toContain(".hl7-field");
    expect(styles).toContain(".hl7-field-wrap");
  });

  test("includes encoding styles", () => {
    const styles = getHighlightStyles();

    expect(styles).toContain(".hl7-encoding");
  });
});
