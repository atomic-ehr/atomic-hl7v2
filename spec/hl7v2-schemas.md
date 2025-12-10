# HL7 v2 Schema Catalogue (`schema/`)

The `schema/` folder is the machine-readable source of truth for HL7 v2.x message metadata. It feeds the code generator (`src/hl7v2/codegen.ts`), the message highlighter (`src/hl7v2/highlight.ts`), and any tooling that needs canonical definitions of message layouts, segments, fields, and data types.

## Top-level files
- `schema/index.js`: bundles the submodules and exposes `overrideSchema(base, override)` which merges two schema objects but replaces arrays wholesale (needed so shorter overrides can replace longer arrays).
- `schema/structure/index.json`: lookup table from `MSH-9` message type/trigger → canonical message structure name (e.g., `"ADT"` → `"A01"` → `"ADT_A01"`).

## Data sources by layer
- `dataTypes/` (523 JSON files)  
  - Composite datatypes (`CX.json`, `TS.json`, etc.) declare `components` with `dataType`, `minOccurs`, `maxOccurs`.  
  - Component leaf files (`CX.1.json`, `TS.1.json`, …) map to a primitive datatype and carry `longName`.  
  - Primitive mappings such as `NM.json` (`"dataType": "STRING"`), `escapeType.json` (`"xsd:string"`), and `varies.json` (`"VARIES"`).

- `fields/` (2188 JSON files)  
  - One file per segment field (`PID.3.json`, `PV1.2.json`, …) with `dataType`, `longName`, and optional `hl7Table` code system reference.  
  - These files do not carry occurrence info; that lives on the segment definitions.

- `segments/` (157 JSON files)  
  - Each segment file lists ordered `fields` with `field`, `minOccurs`, `maxOccurs`.  
  - Field IDs reference the files in `fields/` (e.g., `"field": "PID.3"`).

- `messages/` (201 JSON files)  
  - Each file contains the root message structure plus any reusable groups defined alongside it.  
  - `elements` arrays list ordered segments or groups with `minOccurs`, `maxOccurs`, and either `segment` or `group`. When the same segment repeats with different meaning, a `jsonKey` disambiguates it.  
  - Example (abridged from `messages/ADT_A01.json`):
    ```json
    {
      "PROCEDURE": { "elements": [{ "segment": "PR1" }, { "segment": "ROL", "maxOccurs": "unbounded" }] },
      "INSURANCE": { "elements": [{ "segment": "IN1" }, { "segment": "IN2" }, { "segment": "IN3", "maxOccurs": "unbounded" }] },
      "ADT_A01": { "elements": [{ "segment": "MSH" }, { "segment": "EVN" }, { "segment": "PID" }, { "group": "PROCEDURE", "maxOccurs": "unbounded" }] }
    }
    ```

## Protocol-relevant metadata (ties to `spec/hl7v2-protocol.md`)
- **Message routing**: `structure/index.json` maps MSH-9 message type/trigger to the canonical structure name; `messages/` then enumerates the exact segments/groups for that structure. This is how you enforce the protocol’s message type semantics.
- **Ordering and optionality**: Every segment, group, field, and component carries `minOccurs`/`maxOccurs`, expressing required/optional and repetition rules described in the protocol’s segment ordering section.
- **Group boundaries**: Groups in message files model the nested repeating blocks from the HL7 spec so you can parse or validate repeating sections without ambiguity; `jsonKey` differentiates repeated segments with different roles.
- **Field typing**: Each field has a datatype, and each datatype decomposes into components/subcomponents with their own datatypes and names. This aligns with the protocol’s delimiter rules (fields → components `^` → subcomponents `&`) and lets you validate structure beyond raw text parsing.
- **Code bindings**: Many field defs include `hl7Table`, pointing to the HL7 table that constrains allowed codes (values are not stored here, just the table ID).
- **Primitives and special cases**: Primitive tags (`STRING`, `VARIES`, `xsd:string`, etc.) indicate what the terminal value should be treated as after unescaping, matching the protocol’s guidance on escaping and literal values.
- **Not captured here**: Transport/MLLP framing, ACK choreography, and delimiter negotiation remain specified in `spec/hl7v2-protocol.md` and are not represented in the schema JSON.

## Conventions and quirks
- Occurrence counts are stored as strings; `"unbounded"` denotes repetition. Required items use `"minOccurs": "1"`.
- Component/field naming follows HL7 numbering with dots (`XPN.1`, `PID.3`).
- Groups inside message files are first-class siblings of the root message definition; references by name are recursive.

## How tooling consumes it
- `codegen.ts` walks `structure → messages → segments → fields → dataTypes` to generate TypeScript helpers (`src/hl7v2/fields.ts`, `src/hl7v2/messages.ts`).
- `highlight.ts` loads `segments`, `fields`, and `dataTypes` to build tooltips and required/optional hints while rendering messages.

## Extending the catalogue
1) New message type: add a message JSON file, register it in `structure/index.json`, and ensure all referenced segments/fields/datatypes exist.  
2) Customizing an existing definition: supply an override object and merge with `overrideSchema` so arrays are fully replaced when needed.  
3) Keep naming consistent (`SEG.N`, `DT.N`) and store counts as strings to match the existing shape.


