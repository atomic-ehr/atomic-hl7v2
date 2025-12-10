# HL7 v2 Protocol Reference

HL7 v2.x defines a **text-based, event-driven messaging standard** for exchanging clinical, administrative, and financial data between healthcare systems.

## 1. Physical layout

An HL7 v2 message is a **sequence of segments** separated by **carriage return** (`\r`, ASCII 0x0D).

```
<SEG>\r
<SEG>\r
<SEG>\r
```

Each segment:

- Starts with a **3-character segment ID**
- Followed by **fields** separated by a field delimiter (typically `|`)
- Ends at the carriage return

Example:

```
MSH|^~\&|SENDAPP|SENDFAC|RCVAPP|RCVFAC|202512101230||ADT^A01|123|P|2.5.1
PID|1||12345^^^HOSP^MR||Doe^John||19800101|M
PV1|1|I|WARD^101^1^HOSP
```

---

## 2. Delimiters and encoding characters

### 2.1 Delimiter definition

Delimiters are defined in **MSH**:

- **MSH-1 Field Separator**: single character immediately after `MSH`. Default: `|`
- **MSH-2 Encoding Characters**: 4 characters defining sub-delimiters. Default: `^~\&`

Default meaning:

| Character | Purpose |
|-----------|---------|
| `\|` | field separator |
| `^` | component separator |
| `~` | repetition separator |
| `\` | escape character |
| `&` | subcomponent separator |

Sender may choose other characters, but receiver **must read MSH-1/2 and parse accordingly**.

### 2.2 Escaping

If delimiter characters appear inside data, they must be escaped:

| Meaning | Escape |
|---------|--------|
| field sep | `\F\` |
| component sep | `\S\` |
| repetition sep | `\R\` |
| escape char | `\E\` |
| subcomponent sep | `\T\` |

Example: Text "A|B" → "A\F\B"

---

## 3. Segments, fields, components, subcomponents

### 3.1 Fields

Fields are positional and separated by the field separator:

```
SEG|field1|field2|field3...
```

Empty fields use consecutive delimiters:

```
PID|1||12345...
```

Here PID-2 is empty.

### 3.2 Components and subcomponents

Some fields use composite data types split into components (`^`) and subcomponents (`&`).

Example (CX datatype):

```
PID-3 = 12345^^^HOSP^MR
```

Components:
1. ID number = `12345`
2. (empty)
3. (empty)
4. assigning authority = `HOSP`
5. identifier type = `MR`

### 3.3 Repeating fields

Multiple values separated by `~`:

```
PID-3 = 12345^^^HOSP^MR~99999^^^OTHER^SS
```

### 3.4 Data types

Each field is defined by a **data type** (e.g., TS, XPN, CX, CE/CWE). Data types define:

- Component meanings and order
- Optionality and constraints
- Allowed repetitions

---

## 4. Message type and trigger event

### 4.1 Message Type (MSH-9)

```
<messageType>^<triggerEvent>[^<messageStructure>]
```

Examples:

- `ADT^A01` — Admit/visit notification
- `ORM^O01` — Order message
- `BAR^P05` — Billing account update
- `ADT^A01^ADT_A01` — with explicit structure (v2.4+)

### 4.2 Event timestamping

- **MSH-7**: time the message was created/sent
- Event segment (EVN/ORC/OBR) carries the **clinical event time**

---

## 5. Segment ordering and groups

HL7 defines a **message structure** per message type/trigger:

- **Required segments** must appear
- **Optional segments** may appear
- **Repetitions** allowed where specified
- **Groups** are nested repeating blocks

Notation in HL7 specs:

- `[SEG]` optional
- `{SEG}` repeating
- `GROUP{ ... }` structured block

---

## 6. Acknowledgments (ACK)

### 6.1 ACK types

- **Accept ACK**: confirms message was received/parsed
- **Application ACK**: confirms message was processed successfully

MSH-15/16 control ACK expectations:

- `AL` (always), `NE` (never), `ER` (error/reject only)

### 6.2 ACK message form

- `MSH` header
- `MSA` segment:
  - **MSA-1**: `AA` (accepted), `AE` (error), `AR` (reject)
  - **MSA-2**: echoes sender's MSH-10 Message Control ID
- Optional `ERR` segment with error details

---

## 7. Nulls and updates

- **Empty field**: usually "not provided / leave as is"
- **Explicit null** (`""`): clear this field's previous value

Document whether updates are **full snapshots** or **partial**.

---

## 8. MLLP Transport

Most real-time HL7 v2 uses **Minimal Lower Layer Protocol (MLLP)** over TCP:

```
0x0B + <HL7 payload> + 0x1C + 0x0D
```

- **0x0B** (VT) start block
- **0x1C 0x0D** (FS CR) end block

---

## 9. Validation checklist

### Sender must ensure

- Correct MSH delimiters + version (MSH-12)
- Correct message type/trigger (MSH-9)
- Unique MSH-10 per message
- Required segments and critical fields populated
- No unescaped delimiter characters in text fields

### Receiver should validate

- MSH-1/2 read and applied before parsing rest
- Structural compliance with expected message structure
- Return appropriate ACK with error detail on failure
- Log raw inbound/outbound messages for audit

---

## 10. Example message

Admit (ADT^A01) minimal:

```
MSH|^~\&|EHR|FAC|ADT|FAC|202512101230||ADT^A01^ADT_A01|MSG0001|P|2.5.1
EVN|A01|202512101229
PID|1||12345^^^FAC^MR||Doe^John||19800101|M
PV1|1|I|WARD^101^1^FAC
```

Parsing notes:

- Field separator = `|`
- Encoding chars = `^~\&`
- MSH-9 says ADT A01, so EVN+PID+PV1 are expected
- PID-3 is CX: MRN `12345` assigned by `FAC`
- PV1-2 class `I` = inpatient

---

## 11. Implementation tips

- **Always parse MSH first**, using its delimiters for everything else
- **Do not assume optional segments absent** means "false" — it means "not sent"
- **Repeatable segments/fields** are common; handle lists robustly
- **Ordering** is frequently enforced even when HL7 allows flexibility
- **Code systems**: include coding system IDs in CE/CWE fields
- **Version drift**: receivers may claim v2.5.1 but follow older rules
- **Escape early**: any free-text field might contain delimiter characters
