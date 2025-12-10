/**
 * HL7v2 Message Parser
 * Parses pipe-delimited wire format to HL7v2Message internal representation
 */

import type { HL7v2Message, HL7v2Segment, FieldValue } from "./types";

export interface ParseOptions {
  /** Segment separator (default: \r, also accepts \n and \r\n) */
  segmentSep?: string | RegExp;
}

/**
 * Parse a field value from string, handling components and subcomponents
 */
function parseFieldValue(
  value: string,
  componentSep: string,
  subcomponentSep: string,
  repetitionSep: string,
  escapeSep: string
): FieldValue {
  // Check for repetitions first (only if repetitionSep is non-empty)
  if (repetitionSep && value.includes(repetitionSep)) {
    const parts = value.split(repetitionSep);
    // Parse each part without further repetition checking
    return parts.map(p => parseFieldValueNoRepeat(p, componentSep, subcomponentSep, escapeSep));
  }

  return parseFieldValueNoRepeat(value, componentSep, subcomponentSep, escapeSep);
}

/**
 * Parse field value without checking for repetitions (to avoid infinite recursion)
 */
function parseFieldValueNoRepeat(
  value: string,
  componentSep: string,
  subcomponentSep: string,
  escapeSep: string
): FieldValue {
  // Check for components
  if (value.includes(componentSep)) {
    const components = value.split(componentSep);
    const result: { [key: number]: FieldValue } = {};

    for (let i = 0; i < components.length; i++) {
      const comp = components[i];
      if (comp === undefined || comp === "") continue;

      // Check for subcomponents
      if (comp.includes(subcomponentSep)) {
        const subcomponents = comp.split(subcomponentSep);
        const subResult: { [key: number]: FieldValue } = {};
        for (let j = 0; j < subcomponents.length; j++) {
          const sub = subcomponents[j];
          if (sub !== undefined && sub !== "") {
            subResult[j + 1] = unescapeValue(sub, escapeSep, componentSep, subcomponentSep, "");
          }
        }
        if (Object.keys(subResult).length > 0) {
          result[i + 1] = subResult;
        }
      } else {
        result[i + 1] = unescapeValue(comp, escapeSep, componentSep, subcomponentSep, "");
      }
    }

    return Object.keys(result).length > 0 ? result : "";
  }

  // Simple value
  return unescapeValue(value, escapeSep, componentSep, subcomponentSep, "");
}

/**
 * Unescape HL7v2 escape sequences
 */
function unescapeValue(
  value: string,
  escapeSep: string,
  componentSep: string,
  subcomponentSep: string,
  repetitionSep: string
): string {
  if (!value.includes(escapeSep)) return value;

  return value
    .replace(new RegExp(`${escapeRegex(escapeSep)}F${escapeRegex(escapeSep)}`, "g"), "|")
    .replace(new RegExp(`${escapeRegex(escapeSep)}S${escapeRegex(escapeSep)}`, "g"), componentSep)
    .replace(new RegExp(`${escapeRegex(escapeSep)}T${escapeRegex(escapeSep)}`, "g"), subcomponentSep)
    .replace(new RegExp(`${escapeRegex(escapeSep)}R${escapeRegex(escapeSep)}`, "g"), repetitionSep)
    .replace(new RegExp(`${escapeRegex(escapeSep)}E${escapeRegex(escapeSep)}`, "g"), escapeSep);
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Parse a single segment from string
 */
function parseSegment(
  line: string,
  fieldSep: string,
  componentSep: string,
  subcomponentSep: string,
  repetitionSep: string,
  escapeSep: string
): HL7v2Segment | null {
  if (!line || line.trim() === "") return null;

  const parts = line.split(fieldSep);
  const segmentName = parts[0];
  if (!segmentName) return null;

  const segment: HL7v2Segment = {
    segment: segmentName,
    fields: {},
  };

  // Special handling for MSH segment
  // MSH is special because the field separator "|" is MSH-1
  // So: MSH|^~\&|APP|... splits to ["MSH", "^~\&", "APP", ...]
  //     parts[1] = encoding chars = MSH-2
  //     parts[2] = APP = MSH-3
  //     parts[n] = MSH-(n+1) for n >= 1
  if (segmentName === "MSH") {
    // MSH.1 is the field separator itself
    segment.fields[1] = fieldSep;
    // MSH.2 is the encoding characters (parts[1])
    if (parts[1]) {
      segment.fields[2] = parts[1];
    }
    // parts[n] maps to MSH-(n+1), so fields[n+1] = parts[n]
    for (let i = 2; i < parts.length; i++) {
      const value = parts[i];
      if (value !== undefined && value !== "") {
        segment.fields[i + 1] = parseFieldValue(value, componentSep, subcomponentSep, repetitionSep, escapeSep);
      }
    }
  } else {
    // Non-MSH segments: fields start at index 1
    for (let i = 1; i < parts.length; i++) {
      const value = parts[i];
      if (value !== undefined && value !== "") {
        segment.fields[i] = parseFieldValue(value, componentSep, subcomponentSep, repetitionSep, escapeSep);
      }
    }
  }

  return segment;
}

/**
 * Parse an HL7v2 message from pipe-delimited wire format
 *
 * @param wireFormat - The pipe-delimited string to parse
 * @param options - Optional parse options
 * @returns Parsed HL7v2Message
 *
 * @example
 * const msg = parseMessage("MSH|^~\\&|APP|FAC|...\rPID|1||12345...");
 * const pid = msg.find(s => s.segment === "PID");
 */
export function parseMessage(wireFormat: string, options: ParseOptions = {}): HL7v2Message {
  if (!wireFormat || wireFormat.trim() === "") return [];

  // Normalize line endings and split into segments
  const segmentSep = options.segmentSep ?? /\r\n|\r|\n/;
  const lines = wireFormat.split(segmentSep).filter(line => line.trim() !== "");

  if (lines.length === 0) return [];

  // First line must be MSH to extract delimiters
  const firstLine = lines[0];
  if (!firstLine || !firstLine.startsWith("MSH")) {
    throw new Error("HL7v2 message must start with MSH segment");
  }

  // Extract delimiters from MSH
  // MSH|^~\&| - character 3 is field sep, characters 4-7 are encoding chars
  const fieldSep = firstLine[3] ?? "|";
  const encodingChars = firstLine.substring(4, 8);
  const componentSep = encodingChars[0] ?? "^";
  const repetitionSep = encodingChars[1] ?? "~";
  const escapeSep = encodingChars[2] ?? "\\";
  const subcomponentSep = encodingChars[3] ?? "&";

  const message: HL7v2Message = [];

  for (const line of lines) {
    const segment = parseSegment(line, fieldSep, componentSep, subcomponentSep, repetitionSep, escapeSep);
    if (segment) {
      message.push(segment);
    }
  }

  return message;
}

/**
 * Parse a single segment from wire format (assumes default delimiters)
 */
export function parseSingleSegment(
  line: string,
  fieldSep = "|",
  encodingChars = "^~\\&"
): HL7v2Segment | null {
  const componentSep = encodingChars[0] ?? "^";
  const repetitionSep = encodingChars[1] ?? "~";
  const escapeSep = encodingChars[2] ?? "\\";
  const subcomponentSep = encodingChars[3] ?? "&";

  return parseSegment(line, fieldSep, componentSep, subcomponentSep, repetitionSep, escapeSep);
}
