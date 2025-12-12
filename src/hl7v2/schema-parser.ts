/**
 * Generic Schema-Based Parser
 *
 * Converts HL7v2 segments to named fields using the schema at runtime,
 * producing the same output as code-generated fromPID, fromMSH, etc. functions.
 */

import type { HL7v2Segment, HL7v2Message, FieldValue } from "./types";
import { getComponent } from "./types";

// Load schema data
const segments = require("../../schema/segments");
const fields = require("../../schema/fields");
const dataTypes = require("../../schema/dataTypes");

// Primitive types that don't have components
const PRIMITIVE_TYPES = new Set([
  "ST", "TX", "FT", "NM", "SI", "ID", "IS", "DT", "TM", "DTM", "TS",
  "NUL", "GTS", "SNM", "varies"
]);

interface FieldDef {
  dataType: string;
  longName: string;
  codeName: string;
  hl7Table?: string;
}

interface SegmentDef {
  fields: Array<{
    field: string;
    minOccurs: string;
    maxOccurs: string;
  }>;
}

interface DataTypeDef {
  components?: Array<{
    dataType: string;
    minOccurs: string;
    maxOccurs: string;
  }>;
}

interface ComponentDef {
  dataType: string;
  longName: string;
  codeName: string;
}

/**
 * Check if a data type is primitive (no subcomponents)
 */
function isPrimitive(dataType: string): boolean {
  if (PRIMITIVE_TYPES.has(dataType)) return true;
  const typeDef = dataTypes[dataType] as DataTypeDef | undefined;
  return !typeDef?.components;
}

/**
 * Convert a FieldValue to a named object using the data type schema
 */
function convertValue(value: FieldValue, dataTypeName: string): any {
  if (value === undefined || value === null) return undefined;

  // Check if this type has components (is complex)
  const typeDef = dataTypes[dataTypeName] as DataTypeDef | undefined;
  const isComplex = typeDef?.components && typeDef.components.length > 0;

  // Handle string values
  if (typeof value === "string") {
    if (!value) return undefined;

    // If the type is complex but we got a simple string, wrap it as first component
    if (isComplex && typeDef?.components) {
      const firstComp = typeDef.components[0];
      const compDef = dataTypes[firstComp.dataType] as ComponentDef | undefined;
      if (compDef) {
        const nestedType = compDef.dataType;
        const key = `$1_${compDef.codeName}`;
        if (isPrimitive(nestedType)) {
          return { [key]: value };
        } else {
          const converted = convertValue(value, nestedType);
          return converted !== undefined ? { [key]: converted } : undefined;
        }
      }
    }
    return value;
  }

  // Handle arrays (repeating values)
  if (Array.isArray(value)) {
    return value.map(v => convertValue(v, dataTypeName)).filter(v => v !== undefined);
  }

  // Handle complex types (objects with numeric keys)
  if (typeof value === "object") {
    if (!isComplex) {
      // Primitive type but got object - extract first component
      const v = getComponent(value);
      return v || undefined;
    }

    const result: Record<string, any> = {};

    for (const compSpec of typeDef!.components!) {
      // compSpec.dataType is like "CX.1", "CX.2", etc.
      const compNum = parseInt(compSpec.dataType.split(".")[1], 10);
      const compValue = value[compNum];

      if (compValue === undefined) continue;

      // Get component definition for codeName and nested dataType
      const compDef = dataTypes[compSpec.dataType] as ComponentDef | undefined;
      if (!compDef) continue;

      const codeName = compDef.codeName;
      const nestedType = compDef.dataType;
      const key = `$${compNum}_${codeName}`;

      if (isPrimitive(nestedType)) {
        // Primitive - get string value
        const strVal = typeof compValue === "string" ? compValue : getComponent(compValue);
        if (strVal) result[key] = strVal;
      } else {
        // Complex - recurse
        const converted = convertValue(compValue, nestedType);
        if (converted !== undefined) result[key] = converted;
      }
    }

    return Object.keys(result).length > 0 ? result : undefined;
  }

  return undefined;
}

/**
 * Convert a single segment to named fields using schema
 */
export function fromSegment(segment: HL7v2Segment): Record<string, any> {
  const segmentName = segment.segment;
  const segDef = segments[segmentName] as SegmentDef | undefined;

  const result: Record<string, any> = {
    _segment: segmentName
  };

  if (!segDef?.fields) {
    // Unknown segment - return raw fields
    for (const [key, value] of Object.entries(segment.fields)) {
      result[`$${key}`] = value;
    }
    return result;
  }

  for (const fieldSpec of segDef.fields) {
    // fieldSpec.field is like "PID.3"
    const fieldNum = parseInt(fieldSpec.field.split(".")[1], 10);
    const fieldValue = segment.fields[fieldNum];

    if (fieldValue === undefined) continue;

    // Get field definition for codeName and dataType
    const fieldDef = fields[fieldSpec.field] as FieldDef | undefined;
    if (!fieldDef) {
      // Unknown field - store raw
      result[`$${fieldNum}`] = fieldValue;
      continue;
    }

    const codeName = fieldDef.codeName;
    const dataType = fieldDef.dataType;
    const key = `$${fieldNum}_${codeName}`;
    const isRepeating = fieldSpec.maxOccurs === "unbounded";

    if (isPrimitive(dataType)) {
      // Primitive field
      if (Array.isArray(fieldValue)) {
        result[key] = fieldValue.map(v => typeof v === "string" ? v : getComponent(v)).filter(Boolean);
      } else {
        const strVal = typeof fieldValue === "string" ? fieldValue : getComponent(fieldValue);
        if (strVal) {
          result[key] = isRepeating ? [strVal] : strVal;
        }
      }
    } else {
      // Complex field
      if (Array.isArray(fieldValue)) {
        const converted = fieldValue.map(v => convertValue(v, dataType)).filter(v => v !== undefined);
        if (converted.length > 0) result[key] = converted;
      } else {
        const converted = convertValue(fieldValue, dataType);
        if (converted !== undefined) {
          result[key] = isRepeating ? [converted] : converted;
        }
      }
    }
  }

  return result;
}

/**
 * Convert a full message to named segments
 */
export function parseMessageToNamed(message: HL7v2Message): Record<string, any>[] {
  return message.map(segment => fromSegment(segment));
}

/**
 * Parse wire format directly to named structure
 */
export function parseToNamed(wireFormat: string): Record<string, any>[] {
  const { parseMessage } = require("./parse");
  const message = parseMessage(wireFormat);
  return parseMessageToNamed(message);
}
