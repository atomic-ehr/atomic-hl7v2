/**
 * Message Structure Parser
 *
 * Parses HL7v2 messages into structured objects matching the message schema,
 * with proper grouping (e.g., PROCEDURE, INSURANCE, PATIENT_RESULT).
 */

import type { HL7v2Message, HL7v2Segment } from "./types";
import { fromSegment } from "./schema-parser";

// Load message schemas
const messages = require("../../schema/messages");

interface ElementDef {
  segment?: string;
  group?: string;
  minOccurs: string;
  maxOccurs: string;
  jsonKey?: string;
}

interface GroupDef {
  elements: ElementDef[];
}

interface MessageSchema {
  [key: string]: GroupDef;
}

/**
 * Get message type from MSH-9 (e.g., "ADT_A01")
 */
function getMessageType(message: HL7v2Message): string | null {
  const msh = message.find(s => s.segment === "MSH");
  if (!msh) return null;

  const msgType = msh.fields[9];
  if (typeof msgType === "string") return msgType.replace("^", "_");

  if (typeof msgType === "object" && !Array.isArray(msgType)) {
    const code = msgType[1];
    const event = msgType[2];
    if (typeof code === "string" && typeof event === "string") {
      return `${code}_${event}`;
    }
  }

  return null;
}

/**
 * Parse context to track position in message
 */
interface ParseContext {
  segments: HL7v2Message;
  index: number;
}

/**
 * Try to parse a group from current position
 */
function parseGroup(
  ctx: ParseContext,
  schema: MessageSchema,
  groupName: string
): Record<string, any> | null {
  const groupDef = schema[groupName];
  if (!groupDef) return null;

  const result: Record<string, any> = {};
  const startIndex = ctx.index;
  let matched = false;

  for (const element of groupDef.elements) {
    if (element.segment) {
      // Segment element
      const key = element.jsonKey || element.segment;
      const isRepeating = element.maxOccurs === "unbounded";

      if (isRepeating) {
        const items: any[] = [];
        while (ctx.index < ctx.segments.length) {
          const seg = ctx.segments[ctx.index];
          if (seg.segment === element.segment) {
            items.push(fromSegment(seg));
            ctx.index++;
            matched = true;
          } else {
            break;
          }
        }
        if (items.length > 0) {
          result[key] = items;
        }
      } else {
        // Single occurrence
        if (ctx.index < ctx.segments.length) {
          const seg = ctx.segments[ctx.index];
          if (seg.segment === element.segment) {
            result[key] = fromSegment(seg);
            ctx.index++;
            matched = true;
          }
        }
      }
    } else if (element.group) {
      // Nested group
      const isRepeating = element.maxOccurs === "unbounded";

      if (isRepeating) {
        const items: any[] = [];
        while (ctx.index < ctx.segments.length) {
          const groupResult = parseGroup(ctx, schema, element.group);
          if (groupResult && Object.keys(groupResult).length > 0) {
            items.push(groupResult);
            matched = true;
          } else {
            break;
          }
        }
        if (items.length > 0) {
          result[element.group] = items;
        }
      } else {
        const groupResult = parseGroup(ctx, schema, element.group);
        if (groupResult && Object.keys(groupResult).length > 0) {
          result[element.group] = groupResult;
          matched = true;
        }
      }
    }
  }

  // If nothing matched and this group is optional, return null
  if (!matched) {
    ctx.index = startIndex;
    return null;
  }

  return Object.keys(result).length > 0 ? result : null;
}

/**
 * Parse a message into structured object matching schema
 */
export function parseMessageStructure(message: HL7v2Message): Record<string, any> {
  const messageType = getMessageType(message);
  if (!messageType) {
    // Unknown message type - return flat structure
    return flatParse(message);
  }

  const schema = messages[messageType] as MessageSchema | undefined;
  if (!schema || !schema[messageType]) {
    // Schema not found - return flat structure
    return flatParse(message);
  }

  const ctx: ParseContext = { segments: message, index: 0 };
  const result = parseGroup(ctx, schema, messageType);

  // Handle any remaining segments not matched by schema
  if (ctx.index < message.length) {
    const remaining: any[] = [];
    while (ctx.index < message.length) {
      remaining.push(fromSegment(message[ctx.index]));
      ctx.index++;
    }
    if (remaining.length > 0 && result) {
      result._unmatched = remaining;
    }
  }

  return result || flatParse(message);
}

/**
 * Flat parse without schema structure (fallback)
 */
function flatParse(message: HL7v2Message): Record<string, any> {
  const result: Record<string, any> = {};

  for (const segment of message) {
    const parsed = fromSegment(segment);
    const name = segment.segment;

    if (result[name]) {
      // Already have this segment - make it an array
      if (!Array.isArray(result[name])) {
        result[name] = [result[name]];
      }
      result[name].push(parsed);
    } else {
      result[name] = parsed;
    }
  }

  return result;
}

/**
 * Parse wire format to structured message object
 */
export function parseToStructure(wireFormat: string): Record<string, any> {
  const { parseMessage } = require("./parse");
  const message = parseMessage(wireFormat);
  return parseMessageStructure(message);
}
