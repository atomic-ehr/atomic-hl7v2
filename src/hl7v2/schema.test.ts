import { test, expect, describe } from "bun:test";
import { Schema, schema } from "./schema";

describe("Schema", () => {
  describe("listSegments", () => {
    test("returns array of segment names", () => {
      const segments = schema.listSegments();
      expect(Array.isArray(segments)).toBe(true);
      expect(segments.length).toBeGreaterThan(100);
      expect(segments).toContain("MSH");
      expect(segments).toContain("PID");
      expect(segments).toContain("PV1");
    });

    test("returns sorted list", () => {
      const segments = schema.listSegments();
      const sorted = [...segments].sort();
      expect(segments).toEqual(sorted);
    });
  });

  describe("listFields", () => {
    test("returns all fields when no filter", () => {
      const fields = schema.listFields();
      expect(fields.length).toBeGreaterThan(500);
      expect(fields).toContain("MSH.1");
      expect(fields).toContain("PID.3");
    });

    test("filters by segment when provided", () => {
      const mshFields = schema.listFields("MSH");
      expect(mshFields.every(f => f.startsWith("MSH."))).toBe(true);
      expect(mshFields.length).toBe(21);
    });

    test("returns empty for unknown segment", () => {
      const fields = schema.listFields("UNKNOWN");
      expect(fields).toEqual([]);
    });
  });

  describe("listDataTypes", () => {
    test("returns array of data type names", () => {
      const types = schema.listDataTypes();
      expect(types.length).toBeGreaterThan(100);
      expect(types).toContain("CX");
      expect(types).toContain("HD");
      expect(types).toContain("ST");
    });

    test("includes component types", () => {
      const types = schema.listDataTypes();
      expect(types).toContain("CX.1");
      expect(types).toContain("HD.1");
    });
  });

  describe("listMessages", () => {
    test("returns array of message types", () => {
      const messages = schema.listMessages();
      expect(messages.length).toBeGreaterThan(50);
      expect(messages).toContain("ADT_A01");
      expect(messages).toContain("ORM_O01");
      expect(messages).toContain("ACK");
    });
  });

  describe("listTables", () => {
    test("returns array of table IDs", () => {
      const tables = schema.listTables();
      expect(tables.length).toBeGreaterThan(100);
      expect(tables).toContain("0001");
      expect(tables).toContain("0048");
    });
  });

  describe("getSegment", () => {
    test("returns segment schema with fields", () => {
      const msh = schema.getSegment("MSH");
      expect(msh).not.toBeNull();
      expect(msh!.fields).toBeArray();
      expect(msh!.fields.length).toBe(21);
      expect(msh!.fields[0]).toEqual({
        field: "MSH.1",
        minOccurs: "1",
        maxOccurs: "1",
      });
    });

    test("returns null for unknown segment", () => {
      expect(schema.getSegment("UNKNOWN")).toBeNull();
    });
  });

  describe("getField", () => {
    test("returns field metadata", () => {
      const field = schema.getField("MSH.3");
      expect(field).not.toBeNull();
      expect(field!.dataType).toBe("HD");
      expect(field!.longName).toBe("Sending Application");
      expect(field!.codeName).toBe("sendingApplication");
      expect(field!.hl7Table).toBe("HL70361");
    });

    test("returns field without table reference", () => {
      const field = schema.getField("MSH.7");
      expect(field).not.toBeNull();
      expect(field!.dataType).toBe("TS");
      expect(field!.hl7Table).toBeFalsy(); // empty string or undefined
    });

    test("returns null for unknown field", () => {
      expect(schema.getField("FOO.99")).toBeNull();
    });
  });

  describe("getDataType", () => {
    test("returns complex type with components", () => {
      const cx = schema.getDataType("CX");
      expect(cx).not.toBeNull();
      expect(cx!.components).toBeArray();
      expect(cx!.components!.length).toBe(10);
      expect(cx!.components![0]).toEqual({
        dataType: "CX.1",
        minOccurs: "0",
        maxOccurs: "1",
      });
    });

    test("returns component definition", () => {
      const cx1 = schema.getDataType("CX.1");
      expect(cx1).not.toBeNull();
      expect(cx1!.dataType).toBe("ST");
      expect(cx1!.longName).toBe("ID Number");
      expect(cx1!.codeName).toBe("value");
    });

    test("returns null for unknown type", () => {
      expect(schema.getDataType("UNKNOWN")).toBeNull();
    });
  });

  describe("getMessage", () => {
    test("returns message structure with groups", () => {
      const adt = schema.getMessage("ADT_A01");
      expect(adt).not.toBeNull();
      expect(adt!["ADT_A01"]).toBeDefined();
      expect(adt!["ADT_A01"]!.elements).toBeArray();
      expect(adt!["PROCEDURE"]).toBeDefined();
      expect(adt!["INSURANCE"]).toBeDefined();
    });

    test("message elements have correct structure", () => {
      const adt = schema.getMessage("ADT_A01");
      const mshElement = adt!["ADT_A01"]!.elements[0];
      expect(mshElement).toEqual({
        minOccurs: "1",
        maxOccurs: "1",
        segment: "MSH",
      });
    });

    test("returns null for unknown message", () => {
      expect(schema.getMessage("UNKNOWN_X99")).toBeNull();
    });
  });

  describe("getTable", () => {
    test("returns table with concepts", () => {
      const table = schema.getTable("0048");
      expect(table).not.toBeNull();
      expect(table!.tableNumber).toBe("0048");
      expect(table!.name).toBe("WhatSubjectFilter");
      expect(table!.concepts).toBeArray();
      expect(table!.concepts.length).toBeGreaterThan(10);
    });

    test("concepts have code and display", () => {
      const table = schema.getTable("0048");
      expect(table!.concepts[0]).toHaveProperty("code");
      expect(table!.concepts[0]).toHaveProperty("display");
    });

    test("returns null for unknown table", () => {
      expect(schema.getTable("9999")).toBeNull();
    });
  });

  describe("instance vs default", () => {
    test("can create separate instances", () => {
      const s1 = new Schema();
      const s2 = new Schema();
      expect(s1.listSegments()).toEqual(s2.listSegments());
    });

    test("default instance works same as new instance", () => {
      const s = new Schema();
      expect(schema.getSegment("MSH")).toEqual(s.getSegment("MSH"));
    });
  });
});
