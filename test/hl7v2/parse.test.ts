import { test, expect, describe } from "bun:test";
import { parseMessage, parseSingleSegment } from "../../src/hl7v2/parse";

describe("parseMessage", () => {
  test("parses simple MSH segment", () => {
    const wire = "MSH|^~\\&|APP|FAC|||20231201120000||ADT^A01|MSG001|P|2.5.1";
    const msg = parseMessage(wire);

    expect(msg.length).toBe(1);
    expect(msg[0]?.segment).toBe("MSH");
    expect(msg[0]?.fields[1]).toBe("|");
    expect(msg[0]?.fields[2]).toBe("^~\\&");
    expect(msg[0]?.fields[3]).toBe("APP");
    expect(msg[0]?.fields[4]).toBe("FAC");
    expect(msg[0]?.fields[7]).toBe("20231201120000");
    expect(msg[0]?.fields[10]).toBe("MSG001");
  });

  test("parses complex components", () => {
    // MSH-9 is message type (ADT^A01^ADT_A01)
    const wire = "MSH|^~\\&|APP|FAC|||20231201||ADT^A01^ADT_A01|MSG001|P|2.5.1";
    const msg = parseMessage(wire);

    expect(msg[0]?.fields[9]).toEqual({ 1: "ADT", 2: "A01", 3: "ADT_A01" });
  });

  test("parses subcomponents", () => {
    const wire = "MSH|^~\\&|||||||||MSG001||\rPID|1||12345^^^HOSP&1.2.3&ISO^MR";
    const msg = parseMessage(wire);

    const pid = msg.find(s => s.segment === "PID");
    expect(pid?.fields[3]).toEqual({
      1: "12345",
      4: { 1: "HOSP", 2: "1.2.3", 3: "ISO" },
      5: "MR"
    });
  });

  test("parses repeating fields", () => {
    const wire = "MSH|^~\\&|||||||||MSG001||\rPID|1||ID1~ID2~ID3";
    const msg = parseMessage(wire);

    const pid = msg.find(s => s.segment === "PID");
    expect(pid?.fields[3]).toEqual(["ID1", "ID2", "ID3"]);
  });

  test("parses repeating complex fields", () => {
    const wire = "MSH|^~\\&|||||||||MSG001||\rPID|1||12345^^^HOSP^MR~67890^^^SSA^SS";
    const msg = parseMessage(wire);

    const pid = msg.find(s => s.segment === "PID");
    expect(pid?.fields[3]).toEqual([
      { 1: "12345", 4: "HOSP", 5: "MR" },
      { 1: "67890", 4: "SSA", 5: "SS" }
    ]);
  });

  test("parses message with multiple segments", () => {
    const wire = [
      "MSH|^~\\&|APP|FAC|||20231201||ADT^A01|MSG001|P|2.5.1",
      "EVN|A01|20231201",
      "PID|1||12345||Smith^John||19800101|M"
    ].join("\r");

    const msg = parseMessage(wire);

    expect(msg.length).toBe(3);
    expect(msg[0]?.segment).toBe("MSH");
    expect(msg[1]?.segment).toBe("EVN");
    expect(msg[2]?.segment).toBe("PID");

    // Check PID name field (XPN type)
    expect(msg[2]?.fields[5]).toEqual({ 1: "Smith", 2: "John" });
  });

  test("handles different line endings", () => {
    const wireCR = "MSH|^~\\&|APP||||||||MSG001\rPID|1||123";
    const wireLF = "MSH|^~\\&|APP||||||||MSG001\nPID|1||123";
    const wireCRLF = "MSH|^~\\&|APP||||||||MSG001\r\nPID|1||123";

    expect(parseMessage(wireCR).length).toBe(2);
    expect(parseMessage(wireLF).length).toBe(2);
    expect(parseMessage(wireCRLF).length).toBe(2);
  });

  test("throws error if message doesn't start with MSH", () => {
    expect(() => parseMessage("PID|1||12345")).toThrow("must start with MSH");
  });

  test("returns empty array for empty input", () => {
    expect(parseMessage("")).toEqual([]);
    expect(parseMessage("   ")).toEqual([]);
  });

  test("handles escape sequences", () => {
    // \F\ = |, \S\ = ^, \R\ = ~, \T\ = &, \E\ = \
    const wire = "MSH|^~\\&|||||||||MSG001||\rOBX|1|ST|CODE||Test\\F\\Value\\S\\Component";
    const msg = parseMessage(wire);

    const obx = msg.find(s => s.segment === "OBX");
    expect(obx?.fields[5]).toBe("Test|Value^Component");
  });
});

describe("parseSingleSegment", () => {
  test("parses a simple segment", () => {
    const seg = parseSingleSegment("PID|1||12345||Smith^John||19800101|M");

    expect(seg?.segment).toBe("PID");
    expect(seg?.fields[1]).toBe("1");
    expect(seg?.fields[3]).toBe("12345");
    expect(seg?.fields[5]).toEqual({ 1: "Smith", 2: "John" });
    expect(seg?.fields[8]).toBe("M");
  });

  test("parses MSH segment", () => {
    const seg = parseSingleSegment("MSH|^~\\&|APP|FAC|||20231201||ADT^A01|MSG001|P|2.5.1");

    expect(seg?.segment).toBe("MSH");
    expect(seg?.fields[1]).toBe("|");
    expect(seg?.fields[2]).toBe("^~\\&");
    expect(seg?.fields[3]).toBe("APP");
  });

  test("returns null for empty input", () => {
    expect(parseSingleSegment("")).toBeNull();
    expect(parseSingleSegment("   ")).toBeNull();
  });
});
