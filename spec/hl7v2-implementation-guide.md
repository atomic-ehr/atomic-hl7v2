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
  fields.ts      # segment field helpers + fluent builders - GENERATED
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
# Generate segment-level field helpers and builders
bun src/hl7v2/codegen.ts BAR_P01 > src/hl7v2/fields.ts

# Generate message-level type-safe builders
bun src/hl7v2/codegen.ts BAR_P01 --messages > src/hl7v2/messages.ts
```

---

## Segment Builders

Fluent API for building segments. Method names follow the pattern `set_[segment]_[idx]_[fieldName]`:

```ts
import { PIDBuilder } from "./hl7v2/fields";

const pid = new PIDBuilder()
  // Primitive field - direct value
  .set_pid_1_setIdPid("1")
  .set_pid_8_administrativeSex("M")

  // Complex field - record object with _N suffix for component positions
  .set_pid_5_patientName([{
    familyName_1: {
      surname_1: "Smith",
      ownSurnamePrefix_2: "van"
    },
    givenName_2: "John",
    middleName_3: "Robert",
    suffix_4: "Jr"
  }])

  // Repeating field - set all values as array
  .set_pid_3_patientIdentifierList([{
    idNumber_1: "12345",
    assigningAuthority_4: {
      namespaceId_1: "Hospital"
    },
    identifierTypeCode_5: "MR"
  }])

  // Repeating field - add additional values one by one
  .add_pid_3_patientIdentifierList({
    idNumber_1: "67890",
    identifierTypeCode_5: "SSN"
  })

  .build();
```

---

## Field Naming Convention

Field names use `_N` suffix to indicate HL7v2 component position:

```
{name}_N     →  component N
{name}_N_M   →  component N, subcomponent M (flattened in parent)
```

Examples:
- `givenName_2` → XPN.2
- `surname_1` → FN.1 (when nested in `familyName_1`)
- `idNumber_1` → CX.1

---

## DataType Interfaces

Generated interfaces mirror HL7v2 datatype structure:

```ts
// XPN - Extended Person Name
interface XPN {
  familyName_1?: FN;        // complex component
  givenName_2?: string;     // primitive component
  middleName_3?: string;
  suffix_4?: string;
  prefix_5?: string;
  degree_6?: string;
  nameTypeCode_7?: string;
}

// FN - Family Name (nested in XPN.1)
interface FN {
  surname_1?: string;
  ownSurnamePrefix_2?: string;
  ownSurname_3?: string;
  surnamePrefixFromPartner_4?: string;
  surnameFromPartner_5?: string;
}

// CX - Composite ID
interface CX {
  idNumber_1?: string;
  checkDigit_2?: string;
  checkDigitScheme_3?: string;
  assigningAuthority_4?: HD;
  identifierTypeCode_5?: string;
  assigningFacility_6?: HD;
}

// HD - Hierarchic Designator
interface HD {
  namespaceId_1?: string;
  universalId_2?: string;
  universalIdType_3?: string;
}
```

---

## Field Access Patterns

### Setters

| Schema | Method | Example |
|--------|--------|---------|
| primitive | `set_[seg]_[N]_name(value)` | `set_pid_8_administrativeSex("M")` |
| complex, single | `set_[seg]_[N]_name(record)` | `set_msh_9_messageType({ messageCode_1: "BAR" })` |
| complex, repeating | `set_[seg]_[N]_name(records[])` | `set_pid_3_patientIdentifierList([{ idNumber_1: "123" }])` |
| complex, repeating | `add_[seg]_[N]_name(record)` | `add_pid_3_patientIdentifierList({ idNumber_1: "456" })` |

### Getters

| Schema | Method | Return Type |
|--------|--------|-------------|
| primitive | `get_[seg]_[N]_name()` | `string \| undefined` |
| complex, single | `get_[seg]_[N]_name()` | `DataType \| undefined` |
| complex, repeating | `get_[seg]_[N]_name()` | `DataType[] \| undefined` |

Examples:

```ts
const pid = new PIDBuilder()
  .set_pid_3_patientIdentifierList([{ idNumber_1: "12345" }])
  .set_pid_5_patientName([{ familyName_1: { surname_1: "Smith" } }])
  .set_pid_8_administrativeSex("M");

// Primitive field
pid.get_pid_8_administrativeSex();  // "M"

// Complex repeating field
pid.get_pid_3_patientIdentifierList();  // [{ idNumber_1: "12345" }]

// Complex repeating field
pid.get_pid_5_patientName();  // [{ familyName_1: { surname_1: "Smith" } }]
```

---

## Nullable Fields

All fields in record objects are optional. Undefined/null values are ignored:

```ts
pid.set_pid_5_patientName([{
  familyName_1: {
    surname_1: patient.name?.family  // undefined if missing
  },
  givenName_2: patient.name?.given?.[0]
}])
```

---

## Message Builders

Type-safe builders enforce message structure from schema:

```ts
import { BAR_P01Builder } from "./hl7v2/messages";

const message = new BAR_P01Builder()
  .msh(msh => msh
    .set_msh_3_sendingApplication({ namespaceId_1: "FHIR_APP" })
    .set_msh_9_messageType({
      messageCode_1: "BAR",
      triggerEvent_2: "P01",
      messageStructure_3: "BAR_P01"
    })
    .set_msh_10_messageControlId("MSG001"))
  .evn(evn => evn
    .set_evn_1_eventTypeCode("P01")
    .set_evn_2_recordedDateTime("20231201120000"))
  .pid(pid => pid
    .set_pid_3_patientIdentifierList([{
      idNumber_1: "12345",
      identifierTypeCode_5: "MR"
    }])
    .set_pid_5_patientName([{
      familyName_1: { surname_1: "Smith" },
      givenName_2: "John"
    }]))
  .addVISIT(visit => visit
    .pv1(pv1 => pv1.set_pv1_2_patientClass("I"))
    .addDG1(dg1 => dg1
      .set_dg1_3_diagnosisCodeDg1({
        identifier_1: "J20.9",
        nameOfCodingSystem_3: "ICD10"
      }))
    .addINSURANCE(ins => ins
      .in1(in1 => in1.set_in1_1_setIdIn1("1"))))
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
const buildPID = (input: BarMessageInput) => (pid: PIDBuilder) => {
  const name = input.patient.name?.[0];
  const address = input.patient.address?.[0];

  return pid
    .set_pid_3_patientIdentifierList([{
      idNumber_1: input.patient.identifier?.[0]?.value,
      identifierTypeCode_5: "MR"
    }])
    .set_pid_5_patientName([{
      familyName_1: { surname_1: name?.family },
      givenName_2: name?.given?.[0]
    }])
    .set_pid_11_patientAddress([{
      streetAddress_1: { streetOrMailingAddress_1: address?.line?.[0] },
      city_3: address?.city,
      stateOrProvince_4: address?.state,
      zipOrPostalCode_5: address?.postalCode
    }]);
};

export function generateBarMessage(input: BarMessageInput): HL7v2Message {
  return new BAR_P01Builder()
    .msh(buildMSH(input))
    .evn(buildEVN(input))
    .pid(buildPID(input))
    .addVISIT(buildVisit(input))
    .build();
}
```

---

## Design Benefits

- **1:1 mapping to wire format** — serialization is trivial
- **Schema-driven** — fields validated against `schema/`
- **IDE autocomplete** — type `set_pid` to see all PID field methods
- **Compile-time safety** — message builders catch missing required segments
- **Auto-generated** — regenerate when schema updates
