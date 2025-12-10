# @atomic-ehr/hl7v2

[![npm version](https://img.shields.io/npm/v/@atomic-ehr/hl7v2.svg)](https://www.npmjs.com/package/@atomic-ehr/hl7v2)

A TypeScript library for parsing and generating HL7v2 messages with type-safe, schema-driven builders.

## Features

- **Parse** HL7v2 wire format to typed internal representation
- **Generate** HL7v2 messages using fluent builders or typed input objects
- **Symmetric API** - `toXXX` functions for building, `fromXXX` functions for parsing
- **Schema-driven** code generation from HL7v2 specification
- **Zero dependencies** - pure TypeScript implementation

## Installation

```bash
bun install
```

## Quick Start

### Building Messages with Input Objects

The simplest way to build messages - pass a typed object:

```typescript
import { toADT_A01, type ADT_A01_Input } from "./example/messages";
import { formatMessage } from "./src/hl7v2/format";
import { AdministrativeSex, PatientClass } from "./example/tables";

const input: ADT_A01_Input = {
  type: "ADT_A01",
  MSH: {
    $3_sendingApplication: { $1_namespace: "HOSPITAL" },
    $5_receivingApplication: { $1_namespace: "LAB" },
    $7_messageDateTime: "20251210120000",
    $9_messageType: { $1_code: "ADT", $2_event: "A01" },
    $10_messageControlId: "MSG001",
    $11_processingId: { $1_processingId: "P" },
    $12_version: { $1_version: "2.5.1" }
  },
  EVN: { $2_recordedDateTime: "20251210120000" },
  PID: {
    $3_identifier: [{ $1_value: "12345", $4_system: { $1_namespace: "MRN" } }],
    $5_name: [{ $1_family: { $1_family: "Smith" }, $2_given: "John" }],
    $8_gender: AdministrativeSex.Male
  },
  PV1: { $2_class: PatientClass.Inpatient },
  DG1: [
    { $1_setIdDg1: "1", $3_diagnosisCodeDg1: { $1_code: "J18.9" }, $6_diagnosisType: "A" }
  ]
};

const message = toADT_A01(input);
const wire = formatMessage(message);
```

### Building Messages with Fluent Builder

For more control, use the builder pattern:

```typescript
import { ADT_A01Builder } from "./example/messages";
import { formatMessage } from "./src/hl7v2/format";

const message = new ADT_A01Builder()
  .msh({
    $3_sendingApplication: { $1_namespace: "HOSPITAL" },
    $7_messageDateTime: "20251210120000",
    $9_messageType: { $1_code: "ADT", $2_event: "A01" },
    $10_messageControlId: "MSG001",
    $11_processingId: { $1_processingId: "P" },
    $12_version: { $1_version: "2.5.1" }
  })
  .evn({ $2_recordedDateTime: "20251210120000" })
  .pid({
    $3_identifier: [{ $1_value: "12345" }],
    $5_name: [{ $1_family: { $1_family: "Smith" }, $2_given: "John" }]
  })
  .pv1({ $2_class: "I" })
  .addDG1({ $1_setIdDg1: "1", $3_diagnosisCodeDg1: { $1_code: "J18.9" }, $6_diagnosisType: "A" })
  .build();

const wireFormat = formatMessage(message);
```

### Parsing Messages

```typescript
import { parseMessage } from "./src/hl7v2/parse";
import { fromPID, fromMSH, fromPV1 } from "./example/fields";

const wire = `MSH|^~\\&|HOSPITAL|FAC|||20231201||ADT^A01|MSG001|P|2.5.1
PID|1||12345^^^HOSP^MR||Smith^John||19800515|M`;

const message = parseMessage(wire);

// Use typed getters for segments
const pidSeg = message.find(s => s.segment === "PID");
const pid = fromPID(pidSeg!);

console.log(pid.$3_identifier?.[0]?.$1_value);     // "12345"
console.log(pid.$5_name?.[0]?.$1_family?.$1_family); // "Smith"
console.log(pid.$5_name?.[0]?.$2_given);           // "John"
console.log(pid.$8_gender);                         // "M"
```

## Field Naming: `$N_name` Pattern

All generated interfaces use the `$N_name` pattern where `N` is the field/component position:

```typescript
// PID segment
interface PID {
  $1_setIdPid?: string;
  $3_identifier: CX[];      // Required
  $5_name: XPN[];           // Required
  $7_birthDate?: string;
  $8_gender?: AdministrativeSex | string;
}

// XPN (Extended Person Name) datatype
interface XPN {
  $1_family?: FN;           // Family name (complex)
  $2_given?: string;        // Given name
  $3_additionalGiven?: string;
  $4_suffix?: string;
  $5_prefix?: string;
}

// Usage - same pattern for read and write
const pid: PID = {
  $3_identifier: [{ $1_value: "12345" }],
  $5_name: [{ $1_family: { $1_family: "Smith" }, $2_given: "John" }]
};
```

## Architecture

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Wire Format   │────▶│    Internal     │────▶│   Wire Format   │
│  (pipe-delim)   │     │ Representation  │     │  (pipe-delim)   │
└─────────────────┘     └─────────────────┘     └─────────────────┘
    parseMessage()           HL7v2Message         formatMessage()
                                 │
                    ┌────────────┴────────────┐
                    │                         │
               fromPID()                 toADT_A01()
               fromMSH()                 ADT_A01Builder
                    │                         │
                    ▼                         ▼
            ┌───────────────┐         ┌───────────────┐
            │ Typed Objects │         │ Typed Objects │
            │  PID, MSH...  │         │  ADT_A01_Input│
            └───────────────┘         └───────────────┘
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

The `codegen.ts` generates self-contained type-safe code from HL7v2 schema:

```bash
# Generate all files for specified message types into output folder
bun src/hl7v2/codegen.ts ./output ADT_A01 BAR_P01

# This generates:
#   ./output/types.ts    - Core types (FieldValue, HL7v2Segment, HL7v2Message)
#   ./output/tables.ts   - Enum constants (AdministrativeSex, PatientClass, etc.)
#   ./output/fields.ts   - DataType interfaces, segment interfaces, fromXXX getters
#   ./output/messages.ts - Message builders and toXXX functions
```

Generated code includes:
- **Core types** (types.ts) - FieldValue, HL7v2Segment, HL7v2Message, getComponent()
- **Table constants** (tables.ts) - AdministrativeSex, PatientClass, DiagnosisType, etc.
- **DataType interfaces** (fields.ts) - XPN, CX, HD, CE with `$N_name` properties
- **Segment interfaces** (fields.ts) - PID, MSH, PV1 with required/optional fields
- **Getter functions** (fields.ts) - fromPID(), fromMSH(), fromPV1() for parsing
- **Input interfaces** (messages.ts) - ADT_A01_Input with typed segment data
- **Converter functions** (messages.ts) - toADT_A01() for building from input objects
- **Builder classes** (messages.ts) - ADT_A01Builder with fluent API

The generated code is self-contained and doesn't depend on `src/hl7v2/`.

## Project Structure

```
src/hl7v2/
├── types.ts      # Core types: FieldValue, HL7v2Segment, HL7v2Message
├── parse.ts      # Wire format → Internal representation
├── format.ts     # Internal representation → Wire format
├── codegen.ts    # Schema-driven code generator
└── highlight.ts  # Syntax highlighting for terminal

schema/
├── messages/     # Message structure definitions
├── segments/     # Segment field definitions
├── fields/       # Field metadata
├── dataTypes/    # Complex type components
└── structure/    # Message type → structure mapping

example/
├── adt-a01-example.ts    # Building ADT^A01 with builder
├── input-example.ts      # Building ADT^A01 with input object
├── parse-example.ts      # Parsing and using getters
├── types.ts              # Generated core types
├── tables.ts             # Generated table constants
├── fields.ts             # Generated segment interfaces and getters
└── messages.ts           # Generated builders and toADT_A01
```

## Running Examples

```bash
# Build ADT^A01 with fluent builder
bun example/adt-a01-example.ts

# Build ADT^A01 with input object
bun example/input-example.ts

# Parse and extract typed data
bun example/parse-example.ts
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
