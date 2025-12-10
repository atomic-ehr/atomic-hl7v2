#!/usr/bin/env bun
/**
 * Checks that all coded elements in the schema have corresponding table files.
 * Scans all field definitions for hl7Table references and verifies the table files exist.
 *
 * Usage:
 *   bun scripts/check-tables.ts           # Show full report
 *   bun scripts/check-tables.ts --json    # Output missing tables as JSON
 *   bun scripts/check-tables.ts --list    # Output missing table numbers only
 */

import { Glob } from "bun";
import { join, basename } from "path";

const SCHEMA_DIR = join(import.meta.dir, "../schema");
const FIELDS_DIR = join(SCHEMA_DIR, "fields");
const TABLES_DIR = join(SCHEMA_DIR, "tables");

const args = process.argv.slice(2);
const jsonOutput = args.includes("--json");
const listOutput = args.includes("--list");

interface FieldDef {
  dataType?: string;
  longName?: string;
  codeName?: string;
  hl7Table?: string;
}

interface TableReference {
  field: string;
  tableId: string;
  tableNumber: string;
}

async function getExistingTables(): Promise<Set<string>> {
  const tables = new Set<string>();
  const glob = new Glob("*.json");

  for await (const file of glob.scan(TABLES_DIR)) {
    if (file !== "index.json") {
      tables.add(basename(file, ".json"));
    }
  }
  return tables;
}

async function getTableReferences(): Promise<TableReference[]> {
  const references: TableReference[] = [];
  const glob = new Glob("*.json");

  for await (const file of glob.scan(FIELDS_DIR)) {
    const fieldPath = join(FIELDS_DIR, file);
    const content = await Bun.file(fieldPath).json() as FieldDef;

    if (content.hl7Table && content.hl7Table.trim() !== "") {
      // Extract table number from HL7XXXX format
      const match = content.hl7Table.match(/^HL7(\d+)$/);
      if (match) {
        references.push({
          field: basename(file, ".json"),
          tableId: content.hl7Table,
          tableNumber: match[1],
        });
      }
    }
  }

  return references;
}

async function main() {
  const existingTables = await getExistingTables();
  const references = await getTableReferences();

  // Group references by table number
  const tableUsage = new Map<string, string[]>();
  for (const ref of references) {
    const existing = tableUsage.get(ref.tableNumber) || [];
    existing.push(ref.field);
    tableUsage.set(ref.tableNumber, existing);
  }

  // Find missing tables
  const missingTables: { tableNumber: string; tableId: string; fields: string[] }[] = [];
  const presentTables: { tableNumber: string; fields: string[] }[] = [];

  for (const [tableNumber, fields] of tableUsage) {
    if (!existingTables.has(tableNumber)) {
      missingTables.push({
        tableNumber,
        tableId: `HL7${tableNumber}`,
        fields: fields.sort(),
      });
    } else {
      presentTables.push({ tableNumber, fields: fields.sort() });
    }
  }

  // Find unused tables (tables that exist but are not referenced)
  const referencedTables = new Set(tableUsage.keys());
  const unusedTables: string[] = [];
  for (const table of existingTables) {
    if (!referencedTables.has(table)) {
      unusedTables.push(table);
    }
  }

  missingTables.sort((a, b) => a.tableNumber.localeCompare(b.tableNumber));
  unusedTables.sort();

  // JSON output mode
  if (jsonOutput) {
    console.log(JSON.stringify({
      summary: {
        existingTables: existingTables.size,
        totalReferences: references.length,
        uniqueTablesReferenced: tableUsage.size,
        missingCount: missingTables.length,
        unusedCount: unusedTables.length,
      },
      missing: missingTables,
      unused: unusedTables,
    }, null, 2));
    process.exit(missingTables.length > 0 ? 1 : 0);
  }

  // List output mode - just the missing table numbers
  if (listOutput) {
    for (const { tableNumber } of missingTables) {
      console.log(tableNumber);
    }
    process.exit(missingTables.length > 0 ? 1 : 0);
  }

  // Default: Human-readable report
  console.log("Checking table references in schema...\n");
  console.log(`Total existing tables: ${existingTables.size}`);
  console.log(`Total table references in fields: ${references.length}`);
  console.log(`Unique tables referenced: ${tableUsage.size}`);
  console.log("");

  if (missingTables.length === 0) {
    console.log("✅ All referenced tables have corresponding files!\n");
  } else {
    console.log(`❌ Missing ${missingTables.length} table files:\n`);
    for (const { tableNumber, tableId, fields } of missingTables) {
      console.log(`  ${tableId} (${tableNumber}.json)`);
      console.log(`    Used by: ${fields.join(", ")}`);
    }
    console.log("");
  }

  if (unusedTables.length > 0) {
    console.log(`⚠️  ${unusedTables.length} tables exist but are not referenced by any field:`);
    for (const table of unusedTables.slice(0, 20)) {
      console.log(`  ${table}.json`);
    }
    if (unusedTables.length > 20) {
      console.log(`  ... and ${unusedTables.length - 20} more`);
    }
    console.log("");
  }

  // Exit with error code if there are missing tables
  if (missingTables.length > 0) {
    process.exit(1);
  }
}

main().catch(console.error);
