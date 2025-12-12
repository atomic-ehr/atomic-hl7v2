/**
 * Schema Metadata SDK
 *
 * Provides programmatic access to HL7v2 schema metadata.
 * Uses lazy loading via require() with automatic caching.
 */

import { readdirSync } from 'fs';
import { resolve } from 'path';

const SCHEMA_DIR = resolve(__dirname, '../../schema');

// Type definitions based on actual schema structure

export interface SegmentFieldRef {
  field: string;
  minOccurs: string;
  maxOccurs: string;
}

export interface SegmentSchema {
  fields: SegmentFieldRef[];
}

export interface FieldSchema {
  dataType: string;
  longName: string;
  codeName: string;
  hl7Table?: string;
}

export interface DataTypeComponentRef {
  dataType: string;
  minOccurs: string;
  maxOccurs: string;
}

export interface DataTypeSchema {
  components?: DataTypeComponentRef[];
  // For component definitions (e.g., CX.1)
  dataType?: string;
  longName?: string;
  codeName?: string;
}

export interface MessageElement {
  minOccurs: string;
  maxOccurs: string;
  segment?: string;
  group?: string;
  jsonKey?: string;
}

export interface MessageGroup {
  elements: MessageElement[];
}

export interface MessageSchema {
  [groupName: string]: MessageGroup;
}

export interface TableConcept {
  code: string;
  display: string;
}

export interface TableSchema {
  tableNumber: string;
  id: string;
  name: string;
  title: string;
  description: string;
  url: string;
  concepts: TableConcept[];
}

export class Schema {
  // List methods

  listSegments(): string[] {
    return this.listSchemaFiles('segments');
  }

  listFields(segment?: string): string[] {
    const all = this.listSchemaFiles('fields');
    if (segment) {
      return all.filter(f => f.startsWith(segment + '.'));
    }
    return all;
  }

  listDataTypes(): string[] {
    return this.listSchemaFiles('dataTypes');
  }

  listMessages(): string[] {
    return this.listSchemaFiles('messages');
  }

  listTables(): string[] {
    return this.listSchemaFiles('tables');
  }

  // Get methods

  getSegment(name: string): SegmentSchema | null {
    return this.loadSchema('segments', name);
  }

  getField(field: string): FieldSchema | null {
    return this.loadSchema('fields', field);
  }

  getDataType(type: string): DataTypeSchema | null {
    return this.loadSchema('dataTypes', type);
  }

  getMessage(type: string): MessageSchema | null {
    return this.loadSchema('messages', type);
  }

  getTable(id: string): TableSchema | null {
    return this.loadSchema('tables', id);
  }

  // Private helpers

  private listSchemaFiles(subdir: string): string[] {
    try {
      const dir = readdirSync(`${SCHEMA_DIR}/${subdir}`);
      return dir
        .filter(f => f.endsWith('.json'))
        .map(f => f.replace('.json', ''))
        .sort();
    } catch {
      return [];
    }
  }

  private loadSchema<T>(subdir: string, name: string): T | null {
    try {
      return require(`${SCHEMA_DIR}/${subdir}/${name}.json`);
    } catch {
      return null;
    }
  }
}

// Default instance for convenience
export const schema = new Schema();
