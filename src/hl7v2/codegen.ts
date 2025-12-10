#!/usr/bin/env bun
/**
 * HL7v2 Code Generator
 *
 * Generates TypeScript types, segment builders, and message builders
 * from HL7v2 schema into a specified output folder.
 *
 * Usage:
 *   bun src/hl7v2/codegen.ts <output_folder> <MESSAGE_TYPE> [MESSAGE_TYPE...]
 *
 * Example:
 *   bun src/hl7v2/codegen.ts ./output ADT_A01 BAR_P01
 *
 * This generates:
 *   ./output/types.ts    - Core types (FieldValue, HL7v2Segment, HL7v2Message)
 *   ./output/fields.ts   - DataType interfaces and segment builders
 *   ./output/messages.ts - Message builders for specified message types
 */

import { mkdir } from "node:fs/promises";
import { join } from "node:path";

const SCHEMA_BASE = "./schema";

interface MessageElement {
  segment?: string;
  group?: string;
  minOccurs: string;
  maxOccurs: string;
  jsonKey?: string;
}

interface MessageDef {
  [key: string]: { elements: MessageElement[] };
}

interface SegmentDef {
  fields: { field: string; minOccurs: string; maxOccurs: string }[];
}

interface FieldDef {
  dataType: string;
  longName: string;
  codeName?: string;
}

interface DataTypeDef {
  components?: { dataType: string; minOccurs: string; maxOccurs: string }[];
}

// Primitive data types that don't have further components
const PRIMITIVE_TYPES = new Set([
  "ST", "TX", "FT", "NM", "SI", "ID", "IS", "DT", "TM", "DTM", "TS", "GTS", "NUL", "varies",
]);

async function readJsonAsync<T>(path: string): Promise<T | null> {
  try {
    const text = await Bun.file(path).text();
    return JSON.parse(text);
  } catch {
    return null;
  }
}

class HL7v2CodeGen {
  private usedSegments = new Set<string>();
  private usedDataTypes = new Set<string>();
  private fieldDefs = new Map<string, FieldDef>();
  private dataTypeDefs = new Map<string, DataTypeDef>();
  private segmentDefs = new Map<string, SegmentDef>();
  private messageDefs = new Map<string, MessageDef>();

  constructor(private messageTypes: string[], private outputFolder: string) {}

  async generate(): Promise<void> {
    // Create output folder
    await mkdir(this.outputFolder, { recursive: true });

    // 1. Collect all segments from message definitions
    for (const msgType of this.messageTypes) {
      await this.collectSegmentsFromMessage(msgType);
    }

    // 2. Load segment definitions and collect data types
    for (const segmentName of this.usedSegments) {
      await this.loadSegment(segmentName);
    }

    // 3. Recursively load all data types
    await this.loadAllDataTypes();

    // 4. Generate files
    await this.writeTypesFile();
    await this.writeFieldsFile();
    await this.writeMessagesFile();

    console.log(`Generated files in ${this.outputFolder}:`);
    console.log(`  - types.ts`);
    console.log(`  - fields.ts`);
    console.log(`  - messages.ts`);
  }

  private async collectSegmentsFromMessage(msgType: string): Promise<void> {
    const path = `${SCHEMA_BASE}/messages/${msgType}.json`;
    const msgDef = await readJsonAsync<MessageDef>(path);
    if (!msgDef) {
      console.error(`Warning: Could not load message definition for ${msgType}`);
      return;
    }

    this.messageDefs.set(msgType, msgDef);

    const processElements = (elements: MessageElement[]) => {
      for (const el of elements) {
        if (el.segment) {
          this.usedSegments.add(el.segment);
        }
        if (el.group) {
          const groupDef = msgDef[el.group];
          if (groupDef) {
            processElements(groupDef.elements);
          }
        }
      }
    };

    if (msgDef[msgType]) {
      processElements(msgDef[msgType].elements);
    }

    for (const key of Object.keys(msgDef)) {
      if (key !== msgType && msgDef[key]?.elements) {
        processElements(msgDef[key].elements);
      }
    }
  }

  private async loadSegment(segmentName: string): Promise<void> {
    const path = `${SCHEMA_BASE}/segments/${segmentName}.json`;
    const segDef = await readJsonAsync<SegmentDef>(path);
    if (!segDef) return;

    this.segmentDefs.set(segmentName, segDef);

    for (const field of segDef.fields) {
      const fieldPath = `${SCHEMA_BASE}/fields/${field.field}.json`;
      const fieldDef = await readJsonAsync<FieldDef>(fieldPath);
      if (fieldDef) {
        this.fieldDefs.set(field.field, fieldDef);
        this.usedDataTypes.add(fieldDef.dataType);
      }
    }
  }

  private async loadAllDataTypes(): Promise<void> {
    const toProcess = new Set(this.usedDataTypes);
    const processed = new Set<string>();

    while (toProcess.size > 0) {
      const dtName = toProcess.values().next().value;
      if (!dtName) break;
      toProcess.delete(dtName);

      if (processed.has(dtName) || PRIMITIVE_TYPES.has(dtName)) {
        continue;
      }
      processed.add(dtName);

      const path = `${SCHEMA_BASE}/dataTypes/${dtName}.json`;
      const dtDef = await readJsonAsync<DataTypeDef>(path);
      if (!dtDef?.components) continue;

      this.dataTypeDefs.set(dtName, dtDef);

      for (let i = 0; i < dtDef.components.length; i++) {
        const comp = dtDef.components[i]!;
        const compDefPath = `${SCHEMA_BASE}/dataTypes/${dtName}.${i + 1}.json`;
        const compDef = await readJsonAsync<FieldDef>(compDefPath);
        if (compDef) {
          this.fieldDefs.set(comp.dataType, compDef);
          if (!PRIMITIVE_TYPES.has(compDef.dataType) && !processed.has(compDef.dataType)) {
            toProcess.add(compDef.dataType);
          }
        }
      }
    }
  }

  // ===== types.ts =====
  private async writeTypesFile(): Promise<void> {
    const output: string[] = [];

    output.push(`// AUTO-GENERATED - HL7v2 Core Types`);
    output.push(`// Generated for: ${this.messageTypes.join(", ")}`);
    output.push(``);
    output.push(`/**`);
    output.push(` * Recursive type for field values:`);
    output.push(` * - string: primitive value`);
    output.push(` * - FieldValue[]: repeating field`);
    output.push(` * - Record<number, FieldValue>: complex type with components`);
    output.push(` */`);
    output.push(`export type FieldValue = string | FieldValue[] | { [key: number]: FieldValue };`);
    output.push(``);
    output.push(`/**`);
    output.push(` * A single HL7v2 segment with numeric field keys`);
    output.push(` */`);
    output.push(`export interface HL7v2Segment {`);
    output.push(`  segment: string;`);
    output.push(`  fields: Record<number, FieldValue>;`);
    output.push(`}`);
    output.push(``);
    output.push(`/**`);
    output.push(` * An HL7v2 message is an array of segments`);
    output.push(` */`);
    output.push(`export type HL7v2Message = HL7v2Segment[];`);
    output.push(``);
    output.push(`/**`);
    output.push(` * Get a component from a field value`);
    output.push(` */`);
    output.push(`export function getComponent(field: FieldValue | undefined, ...path: number[]): string | undefined {`);
    output.push(`  if (field === undefined) return undefined;`);
    output.push(`  let current: FieldValue | undefined = field;`);
    output.push(`  if (Array.isArray(current)) current = current[0];`);
    output.push(`  for (const idx of path) {`);
    output.push(`    if (current === undefined || typeof current === 'string') return undefined;`);
    output.push(`    if (Array.isArray(current)) current = current[0];`);
    output.push(`    if (current !== undefined && typeof current === 'object' && !Array.isArray(current)) {`);
    output.push(`      current = current[idx];`);
    output.push(`    }`);
    output.push(`  }`);
    output.push(`  if (typeof current === 'string') return current;`);
    output.push(`  if (Array.isArray(current) && current[0] !== undefined) return getComponent(current[0]);`);
    output.push(`  if (current !== undefined && typeof current === 'object' && !Array.isArray(current)) {`);
    output.push(`    return getComponent(current[1]);`);
    output.push(`  }`);
    output.push(`  return undefined;`);
    output.push(`}`);
    output.push(``);

    await Bun.write(join(this.outputFolder, "types.ts"), output.join("\n"));
  }

  // ===== fields.ts =====
  private async writeFieldsFile(): Promise<void> {
    const output: string[] = [];

    output.push(`// AUTO-GENERATED - HL7v2 DataType Interfaces and Segment Builders`);
    output.push(`// Generated for: ${this.messageTypes.join(", ")}`);
    output.push(``);
    output.push(`import type { HL7v2Segment, FieldValue } from "./types";`);
    output.push(`import { getComponent } from "./types";`);
    output.push(``);

    this.generateDataTypeInterfaces(output);
    this.generateConversionFunction(output);
    this.generateFromFieldValueFunctions(output);
    this.generateSegmentBuilders(output);

    await Bun.write(join(this.outputFolder, "fields.ts"), output.join("\n"));
  }

  // ===== messages.ts =====
  private async writeMessagesFile(): Promise<void> {
    const output: string[] = [];

    output.push(`// AUTO-GENERATED - HL7v2 Message Builders`);
    output.push(`// Generated for: ${this.messageTypes.join(", ")}`);
    output.push(``);
    output.push(`import type { HL7v2Segment, HL7v2Message } from "./types";`);

    // Collect all segments used
    const allSegments = new Set<string>();
    for (const msgType of this.messageTypes) {
      const msgDef = this.messageDefs.get(msgType);
      if (msgDef) {
        this.collectAllSegmentsFromDef(msgDef, msgType, allSegments);
      }
    }

    // Import segment builders
    const sortedSegments = [...allSegments].sort();
    output.push(`import {`);
    for (const seg of sortedSegments) {
      output.push(`  ${seg}Builder,`);
    }
    output.push(`} from "./fields";`);
    output.push(``);

    // Generate message types and builders
    for (const msgType of this.messageTypes) {
      const msgDef = this.messageDefs.get(msgType);
      if (!msgDef) continue;

      this.generateMessageTypes(output, msgType, msgDef);
      this.generateMessageBuilder(output, msgType, msgDef);
    }

    await Bun.write(join(this.outputFolder, "messages.ts"), output.join("\n"));
  }

  // ===== Generation helpers =====

  private generateDataTypeInterfaces(output: string[]): void {
    output.push(`// ====== DataType Interfaces ======`);
    output.push(``);

    const sortedTypes = [...this.dataTypeDefs.keys()].sort();

    for (const dtName of sortedTypes) {
      const dtDef = this.dataTypeDefs.get(dtName);
      if (!dtDef?.components) continue;

      output.push(`/** ${dtName} DataType */`);
      output.push(`export interface ${dtName} {`);

      for (let i = 0; i < dtDef.components.length; i++) {
        const comp = dtDef.components[i]!;
        const compNum = i + 1;
        const compDef = this.fieldDefs.get(comp.dataType);
        if (!compDef) continue;

        const fieldName = this.getCodeName(compDef);
        const nestedDtDef = this.dataTypeDefs.get(compDef.dataType);
        const typeName = nestedDtDef ? compDef.dataType : "string";

        output.push(`  /** ${comp.dataType} - ${compDef.longName} */`);
        output.push(`  ${fieldName}_${compNum}?: ${typeName};`);
      }

      output.push(`}`);
      output.push(``);
    }
  }

  private generateConversionFunction(output: string[]): void {
    output.push(`// ====== Conversion Functions ======`);
    output.push(``);
    output.push(`/** Convert a record object to FieldValue */`);
    output.push(`function toFieldValue(obj: Record<string, unknown> | null | undefined): FieldValue | undefined {`);
    output.push(`  if (obj == null) return undefined;`);
    output.push(`  const result: { [key: number]: FieldValue } = {};`);
    output.push(`  for (const [key, value] of Object.entries(obj)) {`);
    output.push(`    if (value == null) continue;`);
    output.push(`    const match = key.match(/_(\\\d+)$/);`);
    output.push(`    if (!match || !match[1]) continue;`);
    output.push(`    const idx = parseInt(match[1], 10);`);
    output.push(`    if (typeof value === "string") {`);
    output.push(`      result[idx] = value;`);
    output.push(`    } else if (typeof value === "object") {`);
    output.push(`      const nested = toFieldValue(value as Record<string, unknown>);`);
    output.push(`      if (nested !== undefined) result[idx] = nested;`);
    output.push(`    }`);
    output.push(`  }`);
    output.push(`  return Object.keys(result).length > 0 ? result : undefined;`);
    output.push(`}`);
    output.push(``);
  }

  private generateFromFieldValueFunctions(output: string[]): void {
    output.push(`// ====== FromFieldValue Converters ======`);
    output.push(``);

    const sortedTypes = [...this.dataTypeDefs.keys()].sort();

    for (const dtName of sortedTypes) {
      const dtDef = this.dataTypeDefs.get(dtName);
      if (!dtDef?.components) continue;

      const firstComp = dtDef.components[0];
      const firstCompDef = firstComp ? this.fieldDefs.get(firstComp.dataType) : undefined;
      const firstFieldName = firstCompDef ? this.getCodeName(firstCompDef) : undefined;

      output.push(`/** Convert FieldValue to ${dtName} */`);
      output.push(`function from${dtName}(fv: FieldValue | undefined): ${dtName} | undefined {`);
      output.push(`  if (fv === undefined) return undefined;`);

      if (firstFieldName && firstCompDef) {
        const firstNestedDt = this.dataTypeDefs.get(firstCompDef.dataType);
        if (firstNestedDt) {
          output.push(`  if (typeof fv === "string") return { ${firstFieldName}_1: from${firstCompDef.dataType}(fv) };`);
        } else {
          output.push(`  if (typeof fv === "string") return { ${firstFieldName}_1: fv };`);
        }
      } else {
        output.push(`  if (typeof fv === "string") return undefined;`);
      }

      output.push(`  if (Array.isArray(fv)) return from${dtName}(fv[0]);`);
      output.push(`  const result: ${dtName} = {};`);

      for (let i = 0; i < dtDef.components.length; i++) {
        const comp = dtDef.components[i]!;
        const compNum = i + 1;
        const compDef = this.fieldDefs.get(comp.dataType);
        if (!compDef) continue;

        const fieldName = this.getCodeName(compDef);
        const nestedDtDef = this.dataTypeDefs.get(compDef.dataType);

        if (nestedDtDef) {
          output.push(`  if (fv[${compNum}] !== undefined) result.${fieldName}_${compNum} = from${compDef.dataType}(fv[${compNum}]);`);
        } else {
          output.push(`  if (fv[${compNum}] !== undefined) {`);
          output.push(`    const v${compNum} = fv[${compNum}];`);
          output.push(`    if (typeof v${compNum} === "string") result.${fieldName}_${compNum} = v${compNum};`);
          output.push(`    else if (typeof v${compNum} === "object" && !Array.isArray(v${compNum}) && typeof (v${compNum} as any)[1] === "string") result.${fieldName}_${compNum} = (v${compNum} as any)[1];`);
          output.push(`  }`);
        }
      }

      output.push(`  return result;`);
      output.push(`}`);
      output.push(``);
    }
  }

  private generateSegmentBuilders(output: string[]): void {
    const segments = [...this.usedSegments].sort();

    for (const segName of segments) {
      const segDef = this.segmentDefs.get(segName);
      if (!segDef) continue;

      output.push(`// ====== ${segName} Segment ======`);
      output.push(``);

      output.push(`export class ${segName}Builder {`);
      output.push(`  private seg: HL7v2Segment = { segment: "${segName}", fields: {} };`);
      output.push(``);

      for (const field of segDef.fields) {
        const fieldDef = this.fieldDefs.get(field.field);
        if (!fieldDef) continue;

        const fieldNumStr = field.field.split(".")[1];
        if (!fieldNumStr) continue;
        const fieldNum = parseInt(fieldNumStr, 10);
        const fieldName = this.getCodeName(fieldDef);
        const isRepeating = field.maxOccurs === "unbounded" || parseInt(field.maxOccurs) > 1;
        const dtDef = this.dataTypeDefs.get(fieldDef.dataType);
        const isPrimitive = PRIMITIVE_TYPES.has(fieldDef.dataType);

        const segLower = segName.toLowerCase();

        if (isPrimitive) {
          output.push(`  /** ${field.field} - ${fieldDef.longName} */`);
          output.push(`  set_${segLower}_${fieldNum}_${fieldName}(value: string | null | undefined): this {`);
          output.push(`    if (value != null) this.seg.fields[${fieldNum}] = value;`);
          output.push(`    return this;`);
          output.push(`  }`);
          output.push(``);

          output.push(`  /** ${field.field} - ${fieldDef.longName} */`);
          output.push(`  get_${segLower}_${fieldNum}_${fieldName}(): string | undefined {`);
          output.push(`    const val = this.seg.fields[${fieldNum}];`);
          output.push(`    if (typeof val === "string") return val;`);
          output.push(`    if (Array.isArray(val) && typeof val[0] === "string") return val[0];`);
          output.push(`    return undefined;`);
          output.push(`  }`);
          output.push(``);
        } else if (dtDef) {
          const typeName = fieldDef.dataType;

          if (isRepeating) {
            output.push(`  /** ${field.field} - ${fieldDef.longName} (set all values) */`);
            output.push(`  set_${segLower}_${fieldNum}_${fieldName}(values: ${typeName}[] | null | undefined): this {`);
            output.push(`    if (values == null) return this;`);
            output.push(`    const arr: FieldValue[] = [];`);
            output.push(`    for (const v of values) {`);
            output.push(`      const fv = toFieldValue(v as Record<string, unknown>);`);
            output.push(`      if (fv !== undefined) arr.push(fv);`);
            output.push(`    }`);
            output.push(`    if (arr.length > 0) this.seg.fields[${fieldNum}] = arr;`);
            output.push(`    return this;`);
            output.push(`  }`);
            output.push(``);

            output.push(`  /** ${field.field} - ${fieldDef.longName} (add single value) */`);
            output.push(`  add_${segLower}_${fieldNum}_${fieldName}(value: ${typeName} | null | undefined): this {`);
            output.push(`    if (value == null) return this;`);
            output.push(`    const fv = toFieldValue(value as Record<string, unknown>);`);
            output.push(`    if (fv !== undefined) {`);
            output.push(`      const existing = this.seg.fields[${fieldNum}];`);
            output.push(`      if (Array.isArray(existing)) {`);
            output.push(`        existing.push(fv);`);
            output.push(`      } else {`);
            output.push(`        this.seg.fields[${fieldNum}] = [fv];`);
            output.push(`      }`);
            output.push(`    }`);
            output.push(`    return this;`);
            output.push(`  }`);
            output.push(``);

            output.push(`  /** ${field.field} - ${fieldDef.longName} */`);
            output.push(`  get_${segLower}_${fieldNum}_${fieldName}(): ${typeName}[] | undefined {`);
            output.push(`    const val = this.seg.fields[${fieldNum}];`);
            output.push(`    if (val === undefined) return undefined;`);
            output.push(`    const arr = Array.isArray(val) ? val : [val];`);
            output.push(`    return arr.map(v => from${typeName}(v)).filter((v): v is ${typeName} => v !== undefined);`);
            output.push(`  }`);
            output.push(``);
          } else {
            output.push(`  /** ${field.field} - ${fieldDef.longName} */`);
            output.push(`  set_${segLower}_${fieldNum}_${fieldName}(value: ${typeName} | null | undefined): this {`);
            output.push(`    const fv = toFieldValue(value as Record<string, unknown>);`);
            output.push(`    if (fv !== undefined) this.seg.fields[${fieldNum}] = fv;`);
            output.push(`    return this;`);
            output.push(`  }`);
            output.push(``);

            output.push(`  /** ${field.field} - ${fieldDef.longName} */`);
            output.push(`  get_${segLower}_${fieldNum}_${fieldName}(): ${typeName} | undefined {`);
            output.push(`    return from${typeName}(this.seg.fields[${fieldNum}]);`);
            output.push(`  }`);
            output.push(``);
          }
        }
      }

      output.push(`  build(): HL7v2Segment {`);
      output.push(`    return this.seg;`);
      output.push(`  }`);
      output.push(`}`);
      output.push(``);
    }
  }

  private getCodeName(def: FieldDef): string {
    if (def.codeName && def.codeName.trim()) return def.codeName;
    return this.toCamelCase(def.longName);
  }

  private toCamelCase(str: string): string {
    return str
      .replace(/[^a-zA-Z0-9\s]/g, " ")
      .split(/\s+/)
      .map((word, i) => {
        if (i === 0) return word.toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join("");
  }

  private collectAllSegmentsFromDef(def: MessageDef, rootKey: string, segments: Set<string>): void {
    const processElements = (elements: MessageElement[]) => {
      for (const el of elements) {
        if (el.segment) {
          segments.add(el.segment);
        }
        if (el.group) {
          const groupDef = def[el.group];
          if (groupDef) {
            processElements(groupDef.elements);
          }
        }
      }
    };

    if (def[rootKey]) {
      processElements(def[rootKey].elements);
    }

    for (const key of Object.keys(def)) {
      if (key !== rootKey && def[key]?.elements) {
        processElements(def[key].elements);
      }
    }
  }

  private getElementFieldName(el: MessageElement): string {
    if (el.jsonKey) return el.jsonKey.toLowerCase();
    if (el.segment) return el.segment.toLowerCase();
    if (el.group) return el.group.toLowerCase();
    return "";
  }

  private getElementMethodName(el: MessageElement): string {
    if (el.jsonKey) return el.jsonKey;
    if (el.segment) return el.segment;
    if (el.group) return el.group;
    return "";
  }

  private generateMessageTypes(output: string[], msgType: string, msgDef: MessageDef): void {
    const rootDef = msgDef[msgType];
    if (!rootDef) return;

    // Generate group interfaces first
    for (const [groupName, groupDef] of Object.entries(msgDef)) {
      if (groupName === msgType) continue;
      this.generateGroupInterface(output, msgType, groupName, groupDef, msgDef);
    }

    // Generate main message interface
    output.push(`/**`);
    output.push(` * ${msgType} Message Structure`);
    output.push(` */`);
    output.push(`export interface ${msgType}_Message {`);

    for (const el of rootDef.elements) {
      const isRequired = el.minOccurs !== "0";
      const isRepeating = el.maxOccurs === "unbounded" || parseInt(el.maxOccurs) > 1;
      const optionalMark = isRequired ? "" : "?";
      const fieldName = this.getElementFieldName(el);

      if (el.segment) {
        if (isRepeating) {
          output.push(`  ${fieldName}${optionalMark}: HL7v2Segment[];`);
        } else {
          output.push(`  ${fieldName}${optionalMark}: HL7v2Segment;`);
        }
      } else if (el.group) {
        const typeName = `${msgType}_${el.group}`;
        if (isRepeating) {
          output.push(`  ${fieldName}${optionalMark}: ${typeName}[];`);
        } else {
          output.push(`  ${fieldName}${optionalMark}: ${typeName};`);
        }
      }
    }

    output.push(`}`);
    output.push(``);
  }

  private generateGroupInterface(
    output: string[],
    msgType: string,
    groupName: string,
    groupDef: { elements: MessageElement[] },
    msgDef: MessageDef
  ): void {
    output.push(`export interface ${msgType}_${groupName} {`);

    for (const el of groupDef.elements) {
      const isRequired = el.minOccurs !== "0";
      const isRepeating = el.maxOccurs === "unbounded" || parseInt(el.maxOccurs) > 1;
      const optionalMark = isRequired ? "" : "?";
      const fieldName = this.getElementFieldName(el);

      if (el.segment) {
        if (isRepeating) {
          output.push(`  ${fieldName}${optionalMark}: HL7v2Segment[];`);
        } else {
          output.push(`  ${fieldName}${optionalMark}: HL7v2Segment;`);
        }
      } else if (el.group) {
        const typeName = `${msgType}_${el.group}`;
        if (isRepeating) {
          output.push(`  ${fieldName}${optionalMark}: ${typeName}[];`);
        } else {
          output.push(`  ${fieldName}${optionalMark}: ${typeName};`);
        }
      }
    }

    output.push(`}`);
    output.push(``);

    this.generateGroupBuilder(output, msgType, groupName, groupDef);
  }

  private generateGroupBuilder(
    output: string[],
    msgType: string,
    groupName: string,
    groupDef: { elements: MessageElement[] }
  ): void {
    const builderName = `${msgType}_${groupName}Builder`;
    const typeName = `${msgType}_${groupName}`;

    output.push(`export class ${builderName} {`);
    output.push(`  private group: Partial<${typeName}> = {};`);
    output.push(``);

    for (const el of groupDef.elements) {
      const isRepeating = el.maxOccurs === "unbounded" || parseInt(el.maxOccurs) > 1;
      const fieldName = this.getElementFieldName(el);
      const methodName = this.getElementMethodName(el);

      if (el.segment) {
        const segBuilderName = `${el.segment}Builder`;

        if (isRepeating) {
          output.push(`  add${methodName}(segment: HL7v2Segment | ${segBuilderName} | ((builder: ${segBuilderName}) => ${segBuilderName})): this {`);
          output.push(`    let seg: HL7v2Segment;`);
          output.push(`    if (typeof segment === "function") seg = segment(new ${segBuilderName}()).build();`);
          output.push(`    else if (segment instanceof ${segBuilderName}) seg = segment.build();`);
          output.push(`    else seg = segment;`);
          output.push(`    if (!this.group.${fieldName}) this.group.${fieldName} = [];`);
          output.push(`    this.group.${fieldName}.push(seg);`);
          output.push(`    return this;`);
          output.push(`  }`);
        } else {
          output.push(`  ${fieldName}(segment: HL7v2Segment | ${segBuilderName} | ((builder: ${segBuilderName}) => ${segBuilderName})): this {`);
          output.push(`    if (typeof segment === "function") this.group.${fieldName} = segment(new ${segBuilderName}()).build();`);
          output.push(`    else if (segment instanceof ${segBuilderName}) this.group.${fieldName} = segment.build();`);
          output.push(`    else this.group.${fieldName} = segment;`);
          output.push(`    return this;`);
          output.push(`  }`);
        }
        output.push(``);
      } else if (el.group) {
        const nestedBuilderName = `${msgType}_${el.group}Builder`;
        const nestedTypeName = `${msgType}_${el.group}`;

        if (isRepeating) {
          output.push(`  add${methodName}(group: ${nestedTypeName} | ${nestedBuilderName} | ((builder: ${nestedBuilderName}) => ${nestedBuilderName})): this {`);
          output.push(`    let g: ${nestedTypeName};`);
          output.push(`    if (typeof group === "function") g = group(new ${nestedBuilderName}()).build();`);
          output.push(`    else if (group instanceof ${nestedBuilderName}) g = group.build();`);
          output.push(`    else g = group;`);
          output.push(`    if (!this.group.${fieldName}) this.group.${fieldName} = [];`);
          output.push(`    this.group.${fieldName}.push(g);`);
          output.push(`    return this;`);
          output.push(`  }`);
        } else {
          output.push(`  ${fieldName}(group: ${nestedTypeName} | ${nestedBuilderName} | ((builder: ${nestedBuilderName}) => ${nestedBuilderName})): this {`);
          output.push(`    if (typeof group === "function") this.group.${fieldName} = group(new ${nestedBuilderName}()).build();`);
          output.push(`    else if (group instanceof ${nestedBuilderName}) this.group.${fieldName} = group.build();`);
          output.push(`    else this.group.${fieldName} = group;`);
          output.push(`    return this;`);
          output.push(`  }`);
        }
        output.push(``);
      }
    }

    output.push(`  build(): ${typeName} {`);
    output.push(`    return this.group as ${typeName};`);
    output.push(`  }`);
    output.push(`}`);
    output.push(``);
  }

  private generateMessageBuilder(output: string[], msgType: string, msgDef: MessageDef): void {
    const rootDef = msgDef[msgType];
    if (!rootDef) return;

    const builderName = `${msgType}Builder`;

    output.push(`/**`);
    output.push(` * Builder for ${msgType} messages`);
    output.push(` */`);
    output.push(`export class ${builderName} {`);
    output.push(`  private msg: Partial<${msgType}_Message> = {};`);
    output.push(``);

    const requiredFields: string[] = [];

    for (const el of rootDef.elements) {
      const isRequired = el.minOccurs !== "0";
      const isRepeating = el.maxOccurs === "unbounded" || parseInt(el.maxOccurs) > 1;
      const fieldName = this.getElementFieldName(el);
      const methodName = this.getElementMethodName(el);

      if (el.segment) {
        const segBuilderName = `${el.segment}Builder`;

        if (isRequired) requiredFields.push(fieldName);

        if (isRepeating) {
          output.push(`  add${methodName}(segment: HL7v2Segment | ${segBuilderName} | ((builder: ${segBuilderName}) => ${segBuilderName})): this {`);
          output.push(`    let seg: HL7v2Segment;`);
          output.push(`    if (typeof segment === "function") seg = segment(new ${segBuilderName}()).build();`);
          output.push(`    else if (segment instanceof ${segBuilderName}) seg = segment.build();`);
          output.push(`    else seg = segment;`);
          output.push(`    if (!this.msg.${fieldName}) this.msg.${fieldName} = [];`);
          output.push(`    this.msg.${fieldName}.push(seg);`);
          output.push(`    return this;`);
          output.push(`  }`);
        } else {
          output.push(`  ${fieldName}(segment: HL7v2Segment | ${segBuilderName} | ((builder: ${segBuilderName}) => ${segBuilderName})): this {`);
          output.push(`    if (typeof segment === "function") this.msg.${fieldName} = segment(new ${segBuilderName}()).build();`);
          output.push(`    else if (segment instanceof ${segBuilderName}) this.msg.${fieldName} = segment.build();`);
          output.push(`    else this.msg.${fieldName} = segment;`);
          output.push(`    return this;`);
          output.push(`  }`);
        }
        output.push(``);
      } else if (el.group) {
        const groupBuilderName = `${msgType}_${el.group}Builder`;
        const groupTypeName = `${msgType}_${el.group}`;

        if (isRequired) requiredFields.push(fieldName);

        if (isRepeating) {
          output.push(`  add${methodName}(group: ${groupTypeName} | ${groupBuilderName} | ((builder: ${groupBuilderName}) => ${groupBuilderName})): this {`);
          output.push(`    let g: ${groupTypeName};`);
          output.push(`    if (typeof group === "function") g = group(new ${groupBuilderName}()).build();`);
          output.push(`    else if (group instanceof ${groupBuilderName}) g = group.build();`);
          output.push(`    else g = group;`);
          output.push(`    if (!this.msg.${fieldName}) this.msg.${fieldName} = [];`);
          output.push(`    this.msg.${fieldName}.push(g);`);
          output.push(`    return this;`);
          output.push(`  }`);
        } else {
          output.push(`  ${fieldName}(group: ${groupTypeName} | ${groupBuilderName} | ((builder: ${groupBuilderName}) => ${groupBuilderName})): this {`);
          output.push(`    if (typeof group === "function") this.msg.${fieldName} = group(new ${groupBuilderName}()).build();`);
          output.push(`    else if (group instanceof ${groupBuilderName}) this.msg.${fieldName} = group.build();`);
          output.push(`    else this.msg.${fieldName} = group;`);
          output.push(`    return this;`);
          output.push(`  }`);
        }
        output.push(``);
      }
    }

    output.push(`  build(): HL7v2Message {`);
    if (requiredFields.length > 0) {
      for (const field of requiredFields) {
        output.push(`    if (!this.msg.${field}) throw new Error("${msgType}: ${field} is required");`);
      }
    }
    output.push(`    const segments: HL7v2Message = [];`);
    this.generateFlattenCode(output, rootDef.elements, msgDef, "this.msg");
    output.push(`    return segments;`);
    output.push(`  }`);
    output.push(`}`);
    output.push(``);
  }

  private generateFlattenCode(
    output: string[],
    elements: MessageElement[],
    msgDef: MessageDef,
    prefix: string
  ): void {
    for (const el of elements) {
      const isRepeating = el.maxOccurs === "unbounded" || parseInt(el.maxOccurs) > 1;
      const fieldName = this.getElementFieldName(el);
      const fieldPath = `${prefix}.${fieldName}`;

      if (el.segment) {
        if (isRepeating) {
          output.push(`    if (${fieldPath}) for (const seg of ${fieldPath}) segments.push(seg);`);
        } else {
          output.push(`    if (${fieldPath}) segments.push(${fieldPath});`);
        }
      } else if (el.group) {
        const groupDef = msgDef[el.group];

        if (groupDef) {
          if (isRepeating) {
            output.push(`    if (${fieldPath}) for (const group of ${fieldPath}) {`);
            this.generateFlattenCodeForGroup(output, groupDef.elements, msgDef, "group", "      ");
            output.push(`    }`);
          } else {
            output.push(`    if (${fieldPath}) {`);
            output.push(`      const group = ${fieldPath};`);
            this.generateFlattenCodeForGroup(output, groupDef.elements, msgDef, "group", "      ");
            output.push(`    }`);
          }
        }
      }
    }
  }

  private generateFlattenCodeForGroup(
    output: string[],
    elements: MessageElement[],
    msgDef: MessageDef,
    prefix: string,
    indent: string
  ): void {
    for (const el of elements) {
      const isRepeating = el.maxOccurs === "unbounded" || parseInt(el.maxOccurs) > 1;
      const fieldName = this.getElementFieldName(el);
      const fieldPath = `${prefix}.${fieldName}`;

      if (el.segment) {
        if (isRepeating) {
          output.push(`${indent}if (${fieldPath}) for (const seg of ${fieldPath}) segments.push(seg);`);
        } else {
          output.push(`${indent}if (${fieldPath}) segments.push(${fieldPath});`);
        }
      } else if (el.group) {
        const groupDef = msgDef[el.group];

        if (groupDef) {
          if (isRepeating) {
            output.push(`${indent}if (${fieldPath}) for (const subgroup of ${fieldPath}) {`);
            this.generateFlattenCodeForGroup(output, groupDef.elements, msgDef, "subgroup", indent + "  ");
            output.push(`${indent}}`);
          } else {
            output.push(`${indent}if (${fieldPath}) {`);
            output.push(`${indent}  const subgroup = ${fieldPath};`);
            this.generateFlattenCodeForGroup(output, groupDef.elements, msgDef, "subgroup", indent + "  ");
            output.push(`${indent}}`);
          }
        }
      }
    }
  }
}

// Main entry point
async function main() {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.error("Usage: bun src/hl7v2/codegen.ts <output_folder> <MESSAGE_TYPE> [MESSAGE_TYPE...]");
    console.error("");
    console.error("Example:");
    console.error("  bun src/hl7v2/codegen.ts ./output ADT_A01 BAR_P01");
    console.error("");
    console.error("This generates:");
    console.error("  ./output/types.ts    - Core types (FieldValue, HL7v2Segment, HL7v2Message)");
    console.error("  ./output/fields.ts   - DataType interfaces and segment builders");
    console.error("  ./output/messages.ts - Message builders for specified message types");
    process.exit(1);
  }

  const outputFolder = args[0]!;
  const messageTypes = args.slice(1);

  const gen = new HL7v2CodeGen(messageTypes, outputFolder);
  await gen.generate();
}

main().catch(console.error);
