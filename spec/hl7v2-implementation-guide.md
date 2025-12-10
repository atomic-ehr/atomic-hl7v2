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
{ "dataType": "FN", "longName": "Family Name", "codeName": "familyName" }
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

## Segment Interfaces

Segments use the same `set_[index]_[name]` pattern as datatypes — plain object literals:

```ts
import type { PID } from "./fields";

const pid: PID = {
  set_1_setIdPid: "1",
  set_3_identifier: [{
    set_1_value: "12345",
    set_4_system: { set_1_namespace: "Hospital" },
    set_5_type: "MR"
  }],
  set_5_name: [{
    set_1_family: {
      set_1_surname: "Smith",
      set_2_ownSurnamePrefix: "van"
    },
    set_2_given: "John",
    set_3_middle: "Robert",
    set_4_suffix: "Jr"
  }],
  set_8_gender: "M"
};
```

---

## Field Naming Convention

All field names use `set_[index]_[name]` pattern — index first for HL7-native autocomplete:

```
set_N_name   →  component N (segment field or datatype component)
```

**Why index-first?**
- HL7v2 developers think in terms of positions: "PID.8", "XPN.1"
- Type `set_8` → immediately find gender (PID.8)
- Type `set_1` on XPN → immediately find family name (XPN.1)
- Matches how HL7 specs are organized
- **Consistent everywhere** — segments and datatypes use same pattern

Examples:
- `set_8_gender` → PID.8
- `set_2_given` → XPN.2
- `set_1_surname` → FN.1 (when nested in `set_1_family`)
- `set_1_value` → CX.1

---

## Segment Interfaces

Generated interfaces for segments follow the same pattern as datatypes:

```ts
// PID - Patient Identification
interface PID {
  /** PID.1 - Set ID */
  set_1_setIdPid?: string;
  /** PID.3 - Patient Identifier List */
  set_3_identifier?: CX[];
  /** PID.5 - Patient Name */
  set_5_name?: XPN[];
  /** PID.7 - Date/Time of Birth */
  set_7_birthDate?: string;
  /** PID.8 - Administrative Sex */
  set_8_gender?: AdministrativeSex | string;
  /** PID.11 - Patient Address */
  set_11_address?: XAD[];
}

// MSH - Message Header
interface MSH {
  /** MSH.3 - Sending Application */
  set_3_sendingApplication?: HD;
  /** MSH.7 - Date/Time Of Message */
  set_7_messageDateTime?: string;
  /** MSH.9 - Message Type */
  set_9_messageType?: MSG;
  /** MSH.10 - Message Control ID */
  set_10_messageControlId?: string;
}
```

---

## DataType Interfaces

Generated interfaces mirror HL7v2 datatype structure with `set_[index]_[name]` properties:

```ts
// XPN - Extended Person Name
interface XPN {
  set_1_family?: FN;        // complex component
  set_2_given?: string;     // primitive component
  set_3_middle?: string;
  set_4_suffix?: string;
  set_5_prefix?: string;
  set_6_degree?: string;
  set_7_nameTypeCode?: string;
}

// FN - Family Name (nested in set_1_family)
interface FN {
  set_1_surname?: string;
  set_2_ownSurnamePrefix?: string;
  set_3_ownSurname?: string;
  set_4_surnamePrefixFromPartner?: string;
  set_5_surnameFromPartner?: string;
}

// CX - Composite ID
interface CX {
  set_1_value?: string;
  set_2_checkDigit?: string;
  set_3_checkDigitScheme?: string;
  set_4_system?: HD;
  set_5_type?: string;
  set_6_assigningFacility?: HD;
}

// HD - Hierarchic Designator
interface HD {
  set_1_namespace?: string;
  set_2_universalId?: string;
  set_3_universalIdType?: string;
}
```

---

## Nullable Fields

All fields are optional. Undefined/null values are ignored during conversion:

```ts
const pid: PID = {
  set_5_name: [{
    set_1_family: {
      set_1_surname: patient.name?.family  // undefined if missing
    },
    set_2_given: patient.name?.given?.[0]
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
    set_3_sendingApplication: { set_1_namespace: "FHIR_APP" },
    set_9_messageType: {
      set_1_code: "ADT",
      set_2_event: "A01",
      set_3_structure: "ADT_A01"
    },
    set_10_messageControlId: "MSG001"
  })
  .evn({
    set_1_eventTypeCode: "A01",
    set_2_recordedDateTime: "20231201120000"
  })
  .pid({
    set_3_identifier: [{
      set_1_value: "12345",
      set_5_type: "MR"
    }],
    set_5_name: [{
      set_1_family: { set_1_surname: "Smith" },
      set_2_given: "John"
    }]
  })
  .pv1({
    set_2_class: PatientClass.Inpatient
  })
  .addDG1({
    set_1_setIdDg1: "1",
    set_3_diagnosisCode: {
      set_1_code: "J20.9",
      set_3_system: "ICD10"
    }
  })
  .addINSURANCE(ins => ins
    .in1({
      set_1_setIdIn1: "1",
      set_2_insurancePlanId: { set_1_code: "BCBS" }
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
    set_3_identifier: [{
      set_1_value: input.patient.identifier?.[0]?.value,
      set_5_type: "MR"
    }],
    set_5_name: [{
      set_1_family: { set_1_surname: name?.family },
      set_2_given: name?.given?.[0]
    }],
    set_11_address: [{
      set_1_street: { set_1_line: address?.line?.[0] },
      set_3_city: address?.city,
      set_4_state: address?.state,
      set_5_postalCode: address?.postalCode
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
  set_8_gender: AdministrativeSex.Male
};

const pv1: PV1 = {
  set_2_class: PatientClass.Inpatient
};

// Raw string still works for edge cases
const pid2: PID = {
  set_8_gender: "M"
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
- **HL7-native autocomplete** — type `set_8` to find PID.8 (gender), `set_1` to find XPN.1 (family)
- **Consistent pattern** — segments and datatypes both use `set_N_name` object literals
- **Table enums** — coded fields show valid options with descriptions
- **Compile-time safety** — message builders catch missing required segments
- **Composable** — plain objects can be spread, merged, constructed dynamically
- **Auto-generated** — regenerate when schema updates
