# HL7v2 Implementation Guide

Type-safe HL7v2 message handling with schema-driven code generation.

See [hl7v2-protocol.md](./hl7v2-protocol.md) for the wire protocol reference.

---

## Internal Representation

Messages use numeric field keys matching HL7v2 positions:

```ts
type FieldValue = string | FieldValue[] | { [key: number]: FieldValue };

interface HL7v2Segment {
  segment: string;
  fields: Record<number, FieldValue>;
}

type HL7v2Message = HL7v2Segment[];
```

**Example:**

```ts
const msg: HL7v2Message = [
  {
    segment: "MSH",
    fields: {
      3: "SENDING_APP",
      7: "202312011200",
      9: { 1: "ADT", 2: "A01" },  // MSG datatype: message code, trigger event
      10: "MSG001"
    }
  },
  {
    segment: "PID",
    fields: {
      3: [{ 1: "12345", 4: { 1: "MRN" } }],  // Repeating CX datatype
      5: [{ 1: { 1: "Doe" }, 2: "John" }],   // XPN: family name (FN), given name
      7: "19900101",
      8: "M"
    }
  }
];
```

---

## File Structure

```
src/hl7v2/
  types.ts       # FieldValue, HL7v2Segment, HL7v2Message
  parse.ts       # deserialize from pipe-delimited string
  format.ts      # serialize to pipe-delimited string
  fields.ts      # segment + datatype interfaces - GENERATED
  messages.ts    # message-level type-safe builders - GENERATED
  codegen.ts     # generates fields.ts and messages.ts from schema

schema/
  messages/      # ADT_A01.json, BAR_P01.json - message structures
  segments/      # PID.json, MSH.json - segment field lists
  fields/        # PID.5.json - field metadata and data types
  dataTypes/     # XPN.json - complex type components
  structure/     # index.json - message code to structure mapping
```

---

## Schema Reference

### Messages (`messages/*.json`)

Defines segment structure with cardinality. Groups and their segments are defined in the same file:

```json
{
  "BAR_P01": {
    "elements": [
      { "segment": "MSH", "minOccurs": "1", "maxOccurs": "1" },
      { "segment": "SFT", "minOccurs": "0", "maxOccurs": "unbounded" },
      { "segment": "EVN", "minOccurs": "1", "maxOccurs": "1" },
      { "segment": "PID", "minOccurs": "1", "maxOccurs": "1" },
      { "segment": "PD1", "minOccurs": "0", "maxOccurs": "1" },
      { "segment": "ROL", "minOccurs": "0", "maxOccurs": "unbounded" },
      { "group": "VISIT", "minOccurs": "1", "maxOccurs": "unbounded" }
    ]
  },
  "VISIT": {
    "elements": [
      { "segment": "PV1", "minOccurs": "0", "maxOccurs": "1" },
      { "segment": "PV2", "minOccurs": "0", "maxOccurs": "1" },
      { "segment": "DG1", "minOccurs": "0", "maxOccurs": "unbounded" },
      { "group": "PROCEDURE", "minOccurs": "0", "maxOccurs": "unbounded" },
      { "group": "INSURANCE", "minOccurs": "0", "maxOccurs": "unbounded" }
    ]
  },
  "INSURANCE": {
    "elements": [
      { "segment": "IN1", "minOccurs": "1", "maxOccurs": "1" },
      { "segment": "IN2", "minOccurs": "0", "maxOccurs": "1" },
      { "segment": "IN3", "minOccurs": "0", "maxOccurs": "unbounded" }
    ]
  }
}
```

### Structure Mapping (`structure/index.json`)

Maps message code + trigger event to message structure:

```json
{
  "ADT": {
    "A01": "ADT_A01",
    "A04": "ADT_A01",
    "A08": "ADT_A01"
  },
  "BAR": {
    "P01": "BAR_P01",
    "P05": "BAR_P05"
  }
}
```

Note: Multiple trigger events can share the same structure (e.g., ADT A01/A04/A08).

### Segments (`segments/*.json`)

```json
{ "fields": [{ "field": "PID.3", "minOccurs": "1", "maxOccurs": "unbounded" }] }
```

### Fields (`fields/*.json`)

```json
{ "dataType": "XPN", "longName": "Patient Name" }
```

### Data Type Components (`dataTypes/*.N.json`)

Component metadata with optional `codeName` for cleaner generated names:

```json
{ "dataType": "FN", "longName": "Family Name", "codeName": "family" }
```

- `codeName` — optional override for generated property name
- If omitted, `longName` is converted to camelCase

### Data Types (`dataTypes/*.json`)

```json
{
  "components": [
    { "dataType": "XPN.1", "minOccurs": "0", "maxOccurs": "1" },
    { "dataType": "XPN.2", "minOccurs": "0", "maxOccurs": "1" }
  ]
}
```

---

## Code Generation

Generate helpers for specific message types:

```sh
# Generate all files (types.ts, tables.ts, fields.ts, messages.ts)
bun src/hl7v2/codegen.ts ./output ADT_A01 BAR_P01
```

---

## Field Naming Convention

All field names use `$[index]_[name]` pattern — index first for HL7-native autocomplete:

```
$N_name   →  field/component N
```

**Why this pattern?**
- `$` is compact and visually distinct — marks HL7 field positions
- Index-first matches HL7 thinking: "PID.8", "XPN.1"
- Type `$8` → immediately find gender (PID.8)
- Type `$1` on XPN → immediately find family name (XPN.1)
- **Neutral** — works for both reading and writing (no `set_`/`get_` asymmetry)

Examples:
- `$8_gender` → PID.8
- `$2_given` → XPN.2
- `$1_surname` → FN.1 (when nested in `$1_family`)
- `$1_value` → CX.1

---

## Segment Interfaces

Segments use plain object literals with `$N_name` properties:

```ts
import type { PID } from "./fields";

const pid: PID = {
  $1_setIdPid: "1",
  $3_identifier: [{
    $1_value: "12345",
    $4_system: { $1_namespace: "Hospital" },
    $5_type: "MR"
  }],
  $5_name: [{
    $1_family: {
      $1_surname: "Smith",
      $2_ownSurnamePrefix: "van"
    },
    $2_given: "John",
    $3_middle: "Robert",
    $4_suffix: "Jr"
  }],
  $8_gender: "M"
};
```

Generated interfaces:

```ts
// PID - Patient Identification
interface PID {
  /** PID.1 - Set ID */
  $1_setIdPid?: string;
  /** PID.3 - Patient Identifier List */
  $3_identifier?: CX[];
  /** PID.5 - Patient Name */
  $5_name?: XPN[];
  /** PID.7 - Date/Time of Birth */
  $7_birthDate?: string;
  /** PID.8 - Administrative Sex */
  $8_gender?: AdministrativeSex | string;
  /** PID.11 - Patient Address */
  $11_address?: XAD[];
}

// MSH - Message Header
interface MSH {
  /** MSH.3 - Sending Application */
  $3_sendingApplication?: HD;
  /** MSH.7 - Date/Time Of Message */
  $7_messageDateTime?: string;
  /** MSH.9 - Message Type */
  $9_messageType?: MSG;
  /** MSH.10 - Message Control ID */
  $10_messageControlId?: string;
}
```

---

## DataType Interfaces

Generated interfaces mirror HL7v2 datatype structure:

```ts
// XPN - Extended Person Name
interface XPN {
  $1_family?: FN;        // complex component
  $2_given?: string;     // primitive component
  $3_middle?: string;
  $4_suffix?: string;
  $5_prefix?: string;
  $6_degree?: string;
  $7_nameTypeCode?: string;
}

// FN - Family Name (nested in $1_family)
interface FN {
  $1_surname?: string;
  $2_ownSurnamePrefix?: string;
  $3_ownSurname?: string;
  $4_surnamePrefixFromPartner?: string;
  $5_surnameFromPartner?: string;
}

// CX - Composite ID
interface CX {
  $1_value?: string;
  $2_checkDigit?: string;
  $3_checkDigitScheme?: string;
  $4_system?: HD;
  $5_type?: string;
  $6_assigningFacility?: HD;
}

// HD - Hierarchic Designator
interface HD {
  $1_namespace?: string;
  $2_universalId?: string;
  $3_universalIdType?: string;
}
```

---

## Nullable Fields

All fields are optional. Undefined/null values are ignored during conversion:

```ts
const pid: PID = {
  $5_name: [{
    $1_family: {
      $1_surname: patient.name?.family  // undefined if missing
    },
    $2_given: patient.name?.given?.[0]
  }]
};
```

---

## Message Builders

Type-safe builders enforce message structure from schema. Segments are passed as object literals:

```ts
import { ADT_A01Builder } from "./messages";

const message = new ADT_A01Builder()
  .msh({
    $3_sendingApplication: { $1_namespace: "FHIR_APP" },
    $9_messageType: {
      $1_code: "ADT",
      $2_event: "A01",
      $3_structure: "ADT_A01"
    },
    $10_messageControlId: "MSG001"
  })
  .evn({
    $1_eventTypeCode: "A01",
    $2_recordedDateTime: "20231201120000"
  })
  .pid({
    $3_identifier: [{
      $1_value: "12345",
      $5_type: "MR"
    }],
    $5_name: [{
      $1_family: { $1_surname: "Smith" },
      $2_given: "John"
    }]
  })
  .pv1({
    $2_class: PatientClass.Inpatient
  })
  .addDG1({
    $1_setIdDg1: "1",
    $3_diagnosisCode: {
      $1_code: "J20.9",
      $3_system: "ICD10"
    }
  })
  .addINSURANCE(ins => ins
    .in1({
      $1_setIdIn1: "1",
      $2_insurancePlanId: { $1_code: "BCBS" }
    }))
  .build();
```

---

## Wire Format

### Serialize (Internal → Wire)

```ts
import { formatMessage } from "./hl7v2/format";

const wireFormat = formatMessage(message);
// MSH|^~\&|SENDING_APP||...
// PID|1||12345^^^MRN||Smith^John||19900101|M
```

### Parse (Wire → Internal)

```ts
import { parseMessage } from "./hl7v2/parse";

const message = parseMessage(wireFormat);
// Reads MSH-1/2 for delimiters, handles escape sequences
```

---

## Usage Example

From FHIR input to HL7v2 wire format:

```ts
function buildPID(input: PatientInput): PID {
  const name = input.patient.name?.[0];
  const address = input.patient.address?.[0];

  return {
    $3_identifier: [{
      $1_value: input.patient.identifier?.[0]?.value,
      $5_type: "MR"
    }],
    $5_name: [{
      $1_family: { $1_surname: name?.family },
      $2_given: name?.given?.[0]
    }],
    $11_address: [{
      $1_street: { $1_line: address?.line?.[0] },
      $3_city: address?.city,
      $4_state: address?.state,
      $5_postalCode: address?.postalCode
    }]
  };
}

export function generateMessage(input: PatientInput): HL7v2Message {
  return new ADT_A01Builder()
    .msh(buildMSH(input))
    .evn(buildEVN(input))
    .pid(buildPID(input))
    .pv1(buildPV1(input))
    .build();
}
```

---

## Table Value Types

Fields referencing HL7 tables get generated const objects for IDE autocomplete:

```ts
// Generated from schema/tables/0001.json
export const AdministrativeSex = {
  Female: "F",
  Male: "M",
  Other: "O",
  Unknown: "U",
  Ambiguous: "A",
  NotApplicable: "N",
  NonBinary: "X"
} as const;
export type AdministrativeSex = typeof AdministrativeSex[keyof typeof AdministrativeSex];

// Generated from schema/tables/0004.json
export const PatientClass = {
  Emergency: "E",
  Inpatient: "I",
  Outpatient: "O",
  Preadmit: "P",
  RecurringPatient: "R",
  Obstetrics: "B",
  CommercialAccount: "C",
  NotApplicable: "N",
  Unknown: "U"
} as const;
export type PatientClass = typeof PatientClass[keyof typeof PatientClass];
```

### Usage

When a field references a table that exists in `schema/tables/`, the property accepts both the enum and raw strings:

```ts
// With enum - IDE shows all valid options
const pid: PID = {
  $8_gender: AdministrativeSex.Male
};

const pv1: PV1 = {
  $2_class: PatientClass.Inpatient
};

// Raw string still works for edge cases
const pid2: PID = {
  $8_gender: "M"
};
```

### Schema Reference

Fields in `schema/fields/*.json` reference tables via `hl7Table`:

```json
{
  "dataType": "IS",
  "longName": "Administrative Sex",
  "codeName": "gender",
  "hl7Table": "HL70001"
}
```

Tables in `schema/tables/*.json` define valid codes:

```json
{
  "tableNumber": "0001",
  "name": "AdministrativeSex",
  "concepts": [
    { "code": "F", "display": "Female" },
    { "code": "M", "display": "Male" }
  ]
}
```

### Validation

Check for missing tables:

```sh
bun scripts/check-tables.ts           # Full report
bun scripts/check-tables.ts --json    # JSON output
bun scripts/check-tables.ts --list    # Missing table numbers only
```

---

## Design Benefits

- **1:1 mapping to wire format** — serialization is trivial
- **Schema-driven** — fields validated against `schema/`
- **HL7-native autocomplete** — type `$8` to find PID.8 (gender), `$1` to find XPN.1 (family)
- **Compact notation** — `$N_name` is concise and visually distinct
- **Neutral naming** — same property for read and write (no `set_`/`get_` asymmetry)
- **Table enums** — coded fields show valid options with descriptions
- **Compile-time safety** — message builders catch missing required segments
- **Composable** — plain objects can be spread, merged, constructed dynamically
- **Auto-generated** — regenerate when schema updates
