#!/usr/bin/env bun
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const DATA_TYPES_DIR = path.resolve(new URL("../schema/dataTypes", import.meta.url).pathname);

function toCodeName(longName: string): string {
  const cleaned = longName
    // Drop parenthetical examples like "(e.g., MD)" so names stay concise
    .replace(/\([^)]*\)/g, " ")
    // Normalize everything else to spaces
    .replace(/[^A-Za-z0-9]+/g, " ")
    .trim();

  if (!cleaned) return "";

  return cleaned
    .split(/\s+/)
    .map((word, idx) =>
      idx === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join("");
}

function orderKeys<T extends Record<string, unknown>>(obj: T): T {
  const ordered: Record<string, unknown> = {};
  for (const key of ["dataType", "longName", "codeName"]) {
    if (key in obj) ordered[key] = obj[key];
  }
  for (const [key, value] of Object.entries(obj)) {
    if (!(key in ordered)) ordered[key] = value;
  }
  return ordered as T;
}

async function main() {
  const entries = await readdir(DATA_TYPES_DIR);
  let updated = 0;
  let skipped = 0;

  for (const file of entries) {
    if (!file.endsWith(".json")) {
      continue;
    }

    const fullPath = path.join(DATA_TYPES_DIR, file);
    const raw = await readFile(fullPath, "utf8");
    const json = JSON.parse(raw) as Record<string, unknown>;

    if (typeof json.longName !== "string") {
      skipped += 1;
      continue;
    }

    const codeName = toCodeName(json.longName);
    if (!codeName) {
      console.warn(`Could not derive codeName for ${file} (longName="${json.longName}")`);
      skipped += 1;
      continue;
    }

    if (json.codeName === codeName) {
      skipped += 1;
      continue;
    }

    const next = orderKeys({ ...json, codeName });
    await writeFile(fullPath, JSON.stringify(next, null, 2) + "\n");
    updated += 1;
  }

  console.log(`Updated ${updated} file(s), skipped ${skipped}.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
