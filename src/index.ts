// Core types
export type { HL7v2Message, HL7v2Segment, FieldValue } from "./hl7v2/types";
export { getComponent } from "./hl7v2/types";

// Parsing
export { parseMessage, parseSingleSegment } from "./hl7v2/parse";
export type { ParseOptions } from "./hl7v2/parse";

// Formatting
export {
  formatMessage,
  formatSingleSegment,
  DEFAULT_FIELD_SEP,
  DEFAULT_ENCODING_CHARS,
  DEFAULT_SEGMENT_SEP,
} from "./hl7v2/format";
export type { FormatOptions } from "./hl7v2/format";

// Schema-based parsing
export { fromSegment, parseMessageToNamed, parseToNamed } from "./hl7v2/schema-parser";
