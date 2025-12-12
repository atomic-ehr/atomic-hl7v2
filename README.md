# @atomic-ehr/hl7v2

[![npm version](https://img.shields.io/npm/v/@atomic-ehr/hl7v2.svg)](https://www.npmjs.com/package/@atomic-ehr/hl7v2)

Type-safe HL7v2 parsing and generation for TypeScript.

## Design

### Internal Representation

At the core is a minimal, JSON-friendly data structure that captures HL7v2 semantics without wire format details:

```typescript
type FieldValue = string | FieldValue[] | { [key: number]: FieldValue };

interface HL7v2Segment {
  segment: string;                    // "MSH", "PID", etc.
  fields: Record<number, FieldValue>; // 1-indexed field values
}

type HL7v2Message = HL7v2Segment[];
```

This representation:
- Preserves position information (field 3, component 1, etc.)
- Handles repeating fields as arrays
- Handles components/subcomponents as nested objects
- Is serializable to JSON
- Is independent of wire format delimiters

### Field Naming: `$N_name`

Generated interfaces use positional field names with `$N_name` pattern:

```typescript
interface PID {
  $1_setIdPid?: string;
  $3_identifier: CX[];      // Required (minOccurs=1)
  $5_name: XPN[];           // Required
  $7_birthDate?: string;
  $8_gender?: string;
}

interface XPN {
  $1_family?: FN;
  $2_given?: string;
  $3_additionalGiven?: string;
}
```

Why `$N_name`:
- **Position preserved** - `$3_identifier` tells you it's PID-3
- **Readable** - semantic name follows the number
- **Compact** - shorter than alternatives like `field_3_identifier`
- **Neutral** - same property for read and write (no `get_`/`set_` confusion)

### Symmetric API

Building and parsing use symmetric function pairs:

```
Wire Format ←→ Internal ←→ Typed Objects

parseMessage()     fromPID()      ← Reading
formatMessage()    toADT_A01()    ← Writing
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

## Installation

```bash
bun add @atomic-ehr/hl7v2
```

## Using in External Projects

To use this library in your own project, you need to:
1. Install the package
2. Run the code generator to create typed interfaces for your message types
3. Import the generated code and runtime functions

### Step 1: Install

```bash
bun add @atomic-ehr/hl7v2
```

### Step 2: Generate Code

Run the generator specifying output directory and message types you need:

```bash
bunx @atomic-ehr/hl7v2/src/hl7v2/codegen.ts ./src/hl7v2-generated ADT_A01 ORU_R01
```

This creates four files in `./src/hl7v2-generated/`:
- `types.ts` - Core types
- `tables.ts` - HL7 table constants
- `fields.ts` - Segment and datatype interfaces
- `messages.ts` - Message builders and converters

### Step 3: Use Generated Code

**Building messages:**

```typescript
import { formatMessage } from "@atomic-ehr/hl7v2";
import { toADT_A01, type ADT_A01_Input } from "./src/hl7v2-generated/messages";

const input: ADT_A01_Input = {
  type: "ADT_A01",
  MSH: {
    $3_sendingApplication: { $1_namespace: "MY_APP" },
    $7_messageDateTime: "20251210120000",
    $9_messageType: { $1_code: "ADT", $2_event: "A01" },
    $10_messageControlId: "MSG001",
    $11_processingId: { $1_processingId: "P" },
    $12_version: { $1_version: "2.5.1" }
  },
  PID: {
    $3_identifier: [{ $1_value: "12345" }],
    $5_name: [{ $1_family: { $1_family: "Smith" }, $2_given: "John" }]
  },
  PV1: { $2_class: "I" }
};

const message = toADT_A01(input);
const wireFormat = formatMessage(message);
```

**Parsing messages:**

```typescript
import { parseMessage } from "@atomic-ehr/hl7v2";
import { fromPID, fromMSH } from "./src/hl7v2-generated/fields";

const wire = `MSH|^~\\&|SENDER|||20231201||ADT^A01|MSG001|P|2.5.1
PID|1||12345^^^HOSP||Smith^John||19800515|M`;

const message = parseMessage(wire);
const pid = fromPID(message.find(s => s.segment === "PID")!);

console.log(pid.$3_identifier?.[0]?.$1_value); // "12345"
console.log(pid.$5_name?.[0]?.$2_given);       // "John"
```

### Available Message Types

Common message types you can generate:

| Type | Description |
|------|-------------|
| `ADT_A01` | Patient admission |
| `ADT_A04` | Patient registration |
| `ADT_A08` | Patient information update |
| `ORU_R01` | Lab results |
| `ORM_O01` | General order |
| `BAR_P01` | Billing account |
| `SIU_S12` | Scheduling notification |
| `MDM_T02` | Document notification |

Generate multiple types at once:

```bash
bunx @atomic-ehr/hl7v2/src/hl7v2/codegen.ts ./generated ADT_A01 ADT_A04 ADT_A08 ORU_R01
```

## Usage

The examples below assume you're working within this repository. For external projects, see [Using in External Projects](#using-in-external-projects).

### Building Messages

**Option 1: Input Object** (simplest)

```typescript
import { toADT_A01, type ADT_A01_Input } from "./example/messages";
import { formatMessage } from "./src/hl7v2/format";

const input: ADT_A01_Input = {
  type: "ADT_A01",
  MSH: {
    $3_sendingApplication: { $1_namespace: "HOSPITAL" },
    $7_messageDateTime: "20251210120000",
    $9_messageType: { $1_code: "ADT", $2_event: "A01" },
    $10_messageControlId: "MSG001",
    $11_processingId: { $1_processingId: "P" },
    $12_version: { $1_version: "2.5.1" }
  },
  EVN: { $2_recordedDateTime: "20251210120000" },
  PID: {
    $3_identifier: [{ $1_value: "12345", $4_system: { $1_namespace: "MRN" } }],
    $5_name: [{ $1_family: { $1_family: "Smith" }, $2_given: "John" }]
  },
  PV1: { $2_class: "I" },
  DG1: [{ $1_setIdDg1: "1", $3_diagnosisCodeDg1: { $1_code: "J18.9" }, $6_diagnosisType: "A" }],
  PROCEDURE: [{ PR1: { $1_setIdPr1: "1", $3_procedureCode: { $1_code: "99213" }, $5_procedureDateTime: "20251210" } }]
};

const message = toADT_A01(input);
const wire = formatMessage(message);
```

**Option 2: Fluent Builder** (for incremental construction)

```typescript
import { ADT_A01Builder } from "./example/messages";

const message = new ADT_A01Builder()
  .msh({ $7_messageDateTime: "20251210120000", /* ... */ })
  .evn({ $2_recordedDateTime: "20251210120000" })
  .pid({ $3_identifier: [{ $1_value: "12345" }], $5_name: [{ $1_family: { $1_family: "Smith" } }] })
  .pv1({ $2_class: "I" })
  .addDG1({ $1_setIdDg1: "1", $3_diagnosisCodeDg1: { $1_code: "J18.9" }, $6_diagnosisType: "A" })
  .build();
```

### Parsing Messages

```typescript
import { parseMessage } from "./src/hl7v2/parse";
import { fromPID, fromMSH } from "./example/fields";

const wire = `MSH|^~\\&|HOSPITAL|FAC|||20231201||ADT^A01|MSG001|P|2.5.1
PID|1||12345^^^HOSP^MR||Smith^John||19800515|M`;

// Parse to internal representation
const message = parseMessage(wire);

// Convert to typed objects
const pid = fromPID(message.find(s => s.segment === "PID")!);

console.log(pid.$3_identifier?.[0]?.$1_value);       // "12345"
console.log(pid.$5_name?.[0]?.$1_family?.$1_family); // "Smith"
console.log(pid.$5_name?.[0]?.$2_given);             // "John"
console.log(pid.$8_gender);                           // "M"
```

## Code Generation

Generate type-safe code from HL7v2 schema:

```bash
bun src/hl7v2/codegen.ts ./output ADT_A01 BAR_P01
```

This generates self-contained files:

| File | Contents |
|------|----------|
| `types.ts` | Core types: `FieldValue`, `HL7v2Segment`, `HL7v2Message` |
| `tables.ts` | Constants: `AdministrativeSex`, `PatientClass`, etc. |
| `fields.ts` | DataTypes (`XPN`, `CX`), Segments (`PID`, `MSH`), Getters (`fromPID`) |
| `messages.ts` | Input interfaces (`ADT_A01_Input`), Converters (`toADT_A01`), Builders |

Generated code is standalone - no runtime dependency on `src/hl7v2/`.

## Project Structure

```
src/hl7v2/
├── types.ts      # Core types
├── parse.ts      # Wire → Internal
├── format.ts     # Internal → Wire
└── codegen.ts    # Schema → TypeScript

schema/
├── messages/     # Message structures (ADT_A01.json, etc.)
├── segments/     # Segment definitions (PID.json, etc.)
├── fields/       # Field metadata
└── dataTypes/    # Complex types (XPN, CX, etc.)

example/
├── adt-a01-example.ts  # Builder pattern
├── input-example.ts    # Input object pattern
├── parse-example.ts    # Parsing with getters
└── *.ts                # Generated code
```

## Examples

```bash
bun example/adt-a01-example.ts   # Build with builder
bun example/input-example.ts     # Build with input object
bun example/parse-example.ts     # Parse and extract
```

## Testing

```bash
bun test
```

## Credits

Created by [Nikolai Ryzhikov](https://github.com/niquola). Sponsored by [Health Samurai](https://www.health-samurai.io/).

HL7v2 schema from [redox-hl7-v2](https://github.com/RedoxEngine/redox-hl7-v2).

## License

MIT
