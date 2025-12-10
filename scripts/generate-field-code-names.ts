#!/usr/bin/env bun
/**
 * Populate `codeName` on schema/fields/*.json using FHIR-ish lowerCamel names.
 *
 * Strategy:
 * - Manual phrase overrides for common HL7 field names that have clear FHIR analogs.
 * - Reuse dataType longName → codeName pairs (keeps consistency for shared phrases).
 * - Heuristic fallback: sanitize to tokens, normalize common words, collapse date/time,
 *   then camelCase.
 *
 * The goal is to get concise, readable names that align with typical FHIR patterns,
 * not to create a perfect HL7→FHIR mapping.
 */

import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

type Json = Record<string, unknown>;

const ROOT = path.resolve(new URL("..", import.meta.url).pathname);
const FIELDS_DIR = path.join(ROOT, "schema", "fields");
const DATA_TYPES_DIR = path.join(ROOT, "schema", "dataTypes");

function normalizeKey(raw: string): string {
  return raw
    .replace(/&/g, " and ")
    .replace(/\s*[/–-]\s*/g, " ")
    .replace(/[^A-Za-z0-9 ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function camelCase(tokens: string[]): string {
  if (tokens.length === 0) return "";
  return tokens
    .map((word, idx) =>
      idx === 0 ? word.charAt(0).toLowerCase() + word.slice(1) : word.charAt(0).toUpperCase() + word.slice(1),
    )
    .join("");
}

function buildManualMap(): Map<string, string> {
  const rawMap: Record<string, string> = {
    // High-frequency structural fields
    "Sequence Number - Test/Observation Master File": "sequenceNumber",
    "Query Tag": "queryTag",
    "Segment Action Code": "actionCode",
    "Action Code": "actionCode",
    "Active/Inactive Flag": "active",
    "Set Id": "sequence",
    // Order identifiers
    "Filler Order Number": "fillerOrderNumber",
    "Placer Order Number": "placerOrderNumber",
    "Placer Group Number": "placerGroupNumber",
    "Universal Service Identifier": "service",
    // Procedures & pharmacy
    "Procedure Code": "procedureCode",
    "Procedure Code Modifier": "procedureCodeModifier",
    "Pharmacy Order Type": "pharmacyOrderType",
    "Filler Status Code": "fillerStatus",
    "Substitution Status": "substitutionStatus",
    // Demographics / patient basics
    "Patient Identifier List": "identifier",
    "Patient ID": "patientId",
    "Patient Name": "name",
    "Patient Alias": "alias",
    "Patient Address": "address",
    "Patient Account Number": "accountNumber",
    "Patient Class": "class",
    "Patient Type": "type",
    "Patient Status Code": "status",
    "Patient Status Effective Date": "statusStart",
    "Patient Death Date and Time": "deceasedDateTime",
    "Patient Death Indicator": "deceased",
    "Patient Valuables": "valuables",
    "Patient Valuables Location": "valuablesLocation",
    "Patient Primary Facility": "primaryFacility",
    "Patient Primary Care Provider Name & ID No.": "primaryCareProvider",
    "Patient Member Number": "memberNumber",
    "Patient Outcome": "outcome",
    "Patient Preparation": "preparation",
    "Patient Chargeable Indicator": "chargeable",
    "Patient Charge Adjustment Code": "chargeAdjustmentCode",
    "Patient Condition Code": "conditionCode",
    "Patient Evaluability Status": "evaluableStatus",
    "Patient Location Relationship Value": "locationRelationship",
    "Patient Study Eligibility Status": "eligibilityStatus",
    "Administrative Sex": "gender",
    "Marital Status": "maritalStatus",
    "Ethnic Group": "ethnicity",
    "Race": "race",
    "Citizenship": "citizenship",
    "Nationality": "nationality",
    "Primary Language": "language",
    "Religion": "religion",
    "Ambulatory Status": "ambulatoryStatus",
    "Living Arrangement": "livingArrangement",
    "Living Dependency": "livingDependency",
    "Mother's Maiden Name": "mothersMaidenName",
    "VIP Indicator": "vip",
    "Publicity Code": "publicityCode",
    "Handicap": "disability",
    "Needs Human Review": "needsHumanReview",
    "Student Indicator": "student",
    "Protection Indicator": "protectionIndicator",
    "Living Will Code": "livingWill",
    // Dates / times
    "Date/Time of Birth": "birthDate",
    "Guarantor Date/Time Of Birth": "birthDate",
    "Start Date/Time": "start",
    "End Date/Time": "end",
    "Start date/time": "start",
    "End date/time": "end",
    "Effective Date/Time": "effective",
    "Expiration Date/Time": "expiration",
    "Expiration Date": "expiration",
    "Effective Date/Time of Change": "changeEffective",
    "Discharge Date/Time": "discharge",
    "Admit Date/Time": "admission",
    "Expected Admit Date/Time": "expectedAdmission",
    "Expected Discharge Date/Time": "expectedDischarge",
    "Start Date/Time Offset": "startOffset",
    "Start Date/Time Offset Units": "startOffsetUnit",
    "Start Date/Time Offset Unit": "startOffsetUnit",
    "Duration": "duration",
    "Duration Units": "durationUnit",
    "Specimen Received Date/Time": "specimenReceived",
    "Requested Date/Time": "requestedDateTime",
    // Medication / blood product nuances
    "Substance Lot Number": "lotNumber",
    "Substance Expiration Date": "expiration",
    "Substance Manufacturer Name": "manufacturer",
    "BP Quantity": "quantity",
    "BP Units": "unit",
    "BP Amount": "amount",
    "BP Expiration Date/Time": "expiration",
    "BP Date/Time of Status": "statusDateTime",
    "BP Transfusion Start Date/Time of Status": "transfusionStart",
    "BP Transfusion End Date/Time of Status": "transfusionEnd",
    "BP Intended Use Date/Time": "intendedUse",
    "BP Requested Dispense Date/Time": "dispenseRequested",
    // Orders / substitution / misc flags
    "Allow Substitution Code": "allowSubstitution",
    "Quantity/Timing": "timing",
    "Quantity Limited Request": "quantityLimitedRequest",
    "Transaction Code": "transactionCode",
    "Transaction Amount - Unit": "transactionAmountUnit",
    "Supplementary Code": "supplementaryCode",
    "Procedure Code Modifier": "procedureCodeModifier",
    "Universal Service Identifier": "service",
    "Indication": "indication",
    // Contact details
    "Phone": "phone",
    "Phone Number": "phone",
    "Phone Number - Home": "homePhone",
    "Phone Number - Business": "businessPhone",
    "Business Phone Number": "businessPhone",
    "Call Back Phone Number": "callbackPhone",
    "Order Callback Phone Number": "callbackPhone",
    "Contact Phone": "contactPhone",
    "Contact Person's Telephone Number": "contactPhone",
    "Contact's Telephone Number": "contactPhone",
    "Entered By Phone Number": "enteredByPhone",
    "Primary Observer Telephone": "primaryObserverPhone",
    "Sender Telephone": "senderPhone",
    "Telephone Number of Section": "sectionPhone",
    "Phone Number of Outside Site": "externalSitePhone",
    "Filler Contact Phone Number": "fillerContactPhone",
    "Placer Contact Phone Number": "placerContactPhone",
    "Contact Person's Telephone Number": "contactPhone",
    "Employer Contact Person Phone Number": "employerContactPhone",
    "Insurance Co Phone Number": "insurancePhone",
    "Insurance Co Contact Phone Number": "insuranceContactPhone",
    "Insurance Plan ID": "insurancePlanId",
    "Insured's Phone Number - Home": "insuredHomePhone",
    "Insured's Employer Phone Number": "insuredEmployerPhone",
    "Insured's Contact Person Phone Number": "insuredContactPhone",
    // Miscellaneous frequent fields
    "Manufacturer Identifier": "manufacturerId",
    "Message Query Name": "queryName",
    "Preferred Method of Contact": "contactPreference",
    "Job Title": "jobTitle",
    "Job Status": "jobStatus",
    "Job Code/Class": "jobCodeClass",
    "Study Phase Identifier": "studyPhaseId",
    "Sponsor Study ID": "studyId",
    "Specimen Source": "specimenSource",
    "Specimen Expiration Date/Time": "specimenExpiration",
    "Specimen Collection Date/Time": "specimenCollection",
    "Specimen Source": "specimenSource",
    "Query/Response Format Code": "queryResponseFormat",
    "Number of Refills Remaining": "remainingRefills",
    "Resource Group": "resourceGroup",
    "BC Component": "component",
    "DRG Approval Indicator": "drgApproval",
    "Batch Comment": "batchComment",
    "Valid Patient Classes": "validPatientClasses",
    "Record-Level Event Code": "recordEventCode",
    "Input Parameter List": "inputParameters",
    "Episode of Care ID": "episodeId",
    "Value Type": "valueType",
    "Office/Home Address/Birthplace": "address",
    "Dispense-to Location": "dispenseToLocation",
    "Item Natural Account Code": "accountCode",
    "Bed Status": "bedStatus",
    "Placer Supplemental Service Information": "placerSupplementalInfo",
    "Filler Supplemental Service Information": "fillerSupplementalInfo",
    "Price": "price",
    "Give Sub-ID Counter": "subIdCounter",
    "Contact Role": "contactRole",
    "CP Lot Number": "lotNumber",
    "Employment Stop Date": "employmentEnd",
    "Provider's Administration Instructions": "administrationInstructions",
    "Primary Key Value - CDM": "primaryKey",
    "Automatic Repeat Allowed": "autoRepeatAllowed",
  };

  const normalized = new Map<string, string>();
  for (const [key, value] of Object.entries(rawMap)) {
    normalized.set(normalizeKey(key), value);
  }
  return normalized;
}

const MANUAL_MAP = buildManualMap();

async function loadDataTypeMap(): Promise<Map<string, string>> {
  const entries = await readdir(DATA_TYPES_DIR);
  const map = new Map<string, string>();

  for (const file of entries) {
    if (!file.endsWith(".json")) continue;
    const raw = await readFile(path.join(DATA_TYPES_DIR, file), "utf8");
    const json = JSON.parse(raw) as Json;
    if (typeof json.longName !== "string" || typeof json.codeName !== "string") continue;
    map.set(normalizeKey(json.longName), json.codeName);
  }

  return map;
}

const WORD_REPLACEMENTS: Record<string, string> = {
  datetime: "dateTime",
  date: "date",
  time: "time",
  id: "id",
  identifier: "identifier",
  number: "number",
  code: "code",
  status: "status",
  type: "type",
  set: "set",
  sequence: "sequence",
  service: "service",
  order: "order",
  placer: "placer",
  filler: "filler",
  provider: "provider",
  patient: "patient",
  phone: "phone",
  telephone: "phone",
  contact: "contact",
  class: "class",
  language: "language",
  gender: "gender",
  sex: "gender",
  address: "address",
  period: "period",
  start: "start",
  end: "end",
  effective: "effective",
  expiration: "expiration",
  expire: "expiration",
  birth: "birth",
  death: "death",
  discharge: "discharge",
  admission: "admission",
  price: "price",
  unit: "unit",
  units: "unit",
  value: "value",
  quantity: "quantity",
  qualifier: "qualifier",
  indicator: "indicator",
  organization: "organization",
  organisation: "organization",
  insurance: "insurance",
};

const STOPWORDS = new Set(["of", "the", "for"]);

function tokenize(longName: string): string[] {
  const cleaned = longName
    .replace(/\([^)]*\)/g, " ") // drop parenthetical hints
    .replace(/&/g, " and ")
    .replace(/['’]/g, "")
    .replace(/[/–-]/g, " ")
    .replace(/[^A-Za-z0-9 ]+/g, " ");

  const rawTokens = cleaned
    .toLowerCase()
    .split(/\s+/)
    .map((t) => t.trim())
    .filter(Boolean);

  return rawTokens.map((t) => WORD_REPLACEMENTS[t] ?? t);
}

function collapseTokens(tokens: string[]): string[] {
  let result: string[] = [];
  for (let i = 0; i < tokens.length; i += 1) {
    const current = tokens[i];
    const next = tokens[i + 1];

    // Merge date + time into dateTime
    if (current === "date" && next === "time") {
      result.push("dateTime");
      i += 1;
      continue;
    }

    // Compress start/end prefixes when followed by dateTime
    if ((current === "start" || current === "end") && next === "dateTime") {
      result.push(current);
      i += 1;
      continue;
    }

    result.push(current);
  }

  if (result[0] === "dateTime" && result.length > 1) {
    const tail = result.slice(1).filter((t) => !STOPWORDS.has(t));
    if (tail.length > 0) {
      result = [...tail, "dateTime"];
    }
  }
  return result;
}

function orderKeys(json: Json): Json {
  const ordered: Json = {};
  for (const key of ["dataType", "longName", "codeName", "hl7Table"]) {
    if (key in json) ordered[key] = json[key];
  }
  for (const [key, value] of Object.entries(json)) {
    if (!(key in ordered)) ordered[key] = value;
  }
  return ordered;
}

async function deriveCodeName(longName: string, dataTypeMap: Map<string, string>): Promise<string> {
  const normalized = normalizeKey(longName);
  if (MANUAL_MAP.has(normalized)) return MANUAL_MAP.get(normalized)!;
  if (dataTypeMap.has(normalized)) return dataTypeMap.get(normalized)!;

  const tokens = collapseTokens(tokenize(longName));
  if (tokens.length === 0) return "";

  // Drop leading "patient" to avoid redundant prefixes when no explicit override exists
  const trimmedTokens =
    tokens.length > 1 && tokens[0] === "patient" ? tokens.slice(1) : tokens.slice(0);

  return camelCase(trimmedTokens);
}

async function main() {
  const dataTypeMap = await loadDataTypeMap();
  const files = await readdir(FIELDS_DIR);

  let updated = 0;
  let skipped = 0;
  let empty = 0;

  for (const file of files) {
    if (!file.endsWith(".json")) continue;
    const fullPath = path.join(FIELDS_DIR, file);
    const raw = await readFile(fullPath, "utf8");
    const json = JSON.parse(raw) as Json;

    if (typeof json.longName !== "string") {
      skipped += 1;
      continue;
    }

    const codeName = await deriveCodeName(json.longName, dataTypeMap);
    if (!codeName) {
      console.warn(`Could not derive codeName for ${file} (longName="${json.longName}")`);
      empty += 1;
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

  console.log(`Updated ${updated} file(s), skipped ${skipped}, missing ${empty}.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
