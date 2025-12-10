# @atomic-ehr/hl7v2

[![npm version](https://img.shields.io/npm/v/@atomic-ehr/hl7v2.svg)](https://www.npmjs.com/package/@atomic-ehr/hl7v2)

A TypeScript library for parsing and generating HL7v2 messages with type-safe, schema-driven builders.

## Features

- **Parse** HL7v2 wire format to typed internal representation
- **Generate** HL7v2 messages using fluent, type-safe builders
- **Schema-driven** code generation from HL7v2 specification
- **Zero dependencies** - pure TypeScript implementation

## Installation

```bash
bun install
```

## Quick Start

### Parsing HL7v2 Messages

```typescript
import { parseMessage } from "./src/hl7v2/parse";

const wire = `MSH|^~\\&|HOSPITAL|FAC|||20231201||ADT^A01|MSG001|P|2.5.1
PID|1||12345^^^HOSP^MR||Smith^John||19800515|M`;

const message = parseMessage(wire);

// Access segments
const pid = message.find(s => s.segment === "PID");
console.log(pid?.fields[5]); // { 1: "Smith", 2: "John" }
```

### Building HL7v2 Messages

```typescript
import { ADT_A01Builder } from "./example/adt-a01-messages";
import { formatMessage } from "./src/hl7v2/format";

const message = new ADT_A01Builder()
  .msh(msh => msh
    .set_msh_3_sendingApplication({ namespace_1: "HOSPITAL" })
    .set_msh_9_messageType({ code_1: "ADT", event_2: "A01" })
  )
  .pid(pid => pid
    .set_pid_3_identifier([{ value_1: "12345", type_5: "MR" }])
    .set_pid_5_name([{ family_1: { family_1: "Smith" }, given_2: "John" }])
  )
  .build();

const wireFormat = formatMessage(message);
```

### Using Typed Getters

```typescript
import { PIDBuilder } from "./example/adt-a01-fields";

// After parsing, use getters to extract typed data
const pid = new PIDBuilder();
(pid as any).seg = parsedPidSegment;

const names = pid.get_pid_5_name();
// names[0].family_1?.family_1 => "Smith"
// names[0].given_2 => "John"
```

## Architecture

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Wire Format   │────▶│    Internal     │────▶│   Wire Format   │
│  (pipe-delim)   │     │ Representation  │     │  (pipe-delim)   │
└─────────────────┘     └─────────────────┘     └─────────────────┘
    parseMessage()           HL7v2Message         formatMessage()
```

### Internal Representation

Messages use a minimal, JSON-friendly structure:

```typescript
type FieldValue = string | FieldValue[] | { [key: number]: FieldValue };

interface HL7v2Segment {
  segment: string;           // "MSH", "PID", etc.
  fields: Record<number, FieldValue>;
}

type HL7v2Message = HL7v2Segment[];
```

### Code Generation

The `codegen.ts` generates type-safe builders from HL7v2 schema:

```bash
# Generate segment builders (fields.ts)
bun src/hl7v2/codegen.ts ADT_A01 > output/fields.ts

# Generate message builders (messages.ts)
bun src/hl7v2/codegen.ts ADT_A01 --messages > output/messages.ts
```

Generated code includes:
- **DataType interfaces** (XPN, CX, HD, etc.) with typed properties
- **Segment builders** (PIDBuilder, MSHBuilder) with fluent setters/getters
- **Message builders** (ADT_A01Builder) with segment orchestration
- **Converter functions** (fromXPN, fromCX) for parsing support

## Project Structure

```
src/hl7v2/
├── types.ts      # Core types: FieldValue, HL7v2Segment, HL7v2Message
├── parse.ts      # Wire format → Internal representation
├── format.ts     # Internal representation → Wire format
├── codegen.ts    # Schema-driven code generator
├── fields.ts     # Generated segment builders (BAR_P01)
└── messages.ts   # Generated message builders (BAR_P01)

schema/
├── messages/     # Message structure definitions
├── segments/     # Segment field definitions
├── fields/       # Field metadata
├── dataTypes/    # Complex type components
└── structure/    # Message type → structure mapping

example/
├── adt-a01-example.ts       # Building ADT^A01 message
├── parse-to-fhir-example.ts # Parsing to FHIR Patient
├── adt-a01-fields.ts        # Generated ADT_A01 builders
└── adt-a01-messages.ts      # Generated ADT_A01 message builder
```

## Running Examples

```bash
# Build and format an ADT^A01 message
bun example/adt-a01-example.ts

# Parse ADT^A01 and extract FHIR Patient
bun example/parse-to-fhir-example.ts
```

## Testing

```bash
bun test
```

## Credits

Created by [Nikolai Ryzhikov](https://github.com/niquola). Sponsored by [Health Samurai](https://www.health-samurai.io/).

HL7v2 schema metadata derived from [redox-hl7-v2](https://github.com/RedoxEngine/redox-hl7-v2) by Redox Engine.

## License

MIT License - see [LICENSE](LICENSE) for details.
