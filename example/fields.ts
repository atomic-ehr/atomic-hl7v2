// AUTO-GENERATED - HL7v2 DataType Interfaces and Segment Builders
// Generated for: ADT_A01

import type { HL7v2Segment, FieldValue } from "./types";
import { getComponent } from "./types";

// ====== DataType Interfaces ======

/** AUI DataType */
export interface AUI {
  /** AUI.1 - Authorization Number */
  authorization_1?: string;
  /** AUI.2 - Date */
  date_2?: string;
  /** AUI.3 - Source */
  source_3?: string;
}

/** CE DataType */
export interface CE {
  /** CE.1 - Identifier */
  code_1?: string;
  /** CE.2 - Text */
  text_2?: string;
  /** CE.3 - Name of Coding System */
  system_3?: string;
  /** CE.4 - Alternate Identifier */
  altCode_4?: string;
  /** CE.5 - Alternate Text */
  altDisplay_5?: string;
  /** CE.6 - Name of Alternate Coding System */
  altSystem_6?: string;
}

/** CNE DataType */
export interface CNE {
  /** CNE.1 - Identifier */
  code_1?: string;
  /** CNE.2 - Text */
  text_2?: string;
  /** CNE.3 - Name of Coding System */
  system_3?: string;
  /** CNE.4 - Alternate Identifier */
  altCode_4?: string;
  /** CNE.5 - Alternate Text */
  altDisplay_5?: string;
  /** CNE.6 - Name of Alternate Coding System */
  altSystem_6?: string;
  /** CNE.7 - Coding System Version ID */
  version_7?: string;
  /** CNE.8 - Alternate Coding System Version ID */
  altVersion_8?: string;
  /** CNE.9 - Original Text */
  originalText_9?: string;
}

/** CP DataType */
export interface CP {
  /** CP.1 - Price */
  amount_1?: MO;
  /** CP.2 - Price Type */
  priceType_2?: string;
  /** CP.3 - From Value */
  low_3?: string;
  /** CP.4 - To Value */
  high_4?: string;
  /** CP.5 - Range Units */
  unit_5?: CE;
  /** CP.6 - Range Type */
  rangeType_6?: string;
}

/** CWE DataType */
export interface CWE {
  /** CWE.1 - Identifier */
  code_1?: string;
  /** CWE.2 - Text */
  text_2?: string;
  /** CWE.3 - Name of Coding System */
  system_3?: string;
  /** CWE.4 - Alternate Identifier */
  altCode_4?: string;
  /** CWE.5 - Alternate Text */
  altDisplay_5?: string;
  /** CWE.6 - Name of Alternate Coding System */
  altSystem_6?: string;
  /** CWE.7 - Coding System Version ID */
  version_7?: string;
  /** CWE.8 - Alternate Coding System Version ID */
  altVersion_8?: string;
  /** CWE.9 - Original Text */
  originalText_9?: string;
}

/** CX DataType */
export interface CX {
  /** CX.1 - ID Number */
  value_1?: string;
  /** CX.2 - Check Digit */
  checkDigit_2?: string;
  /** CX.3 - Check Digit Scheme */
  checkDigitScheme_3?: string;
  /** CX.4 - Assigning Authority */
  system_4?: HD;
  /** CX.5 - Identifier Type Code */
  type_5?: string;
  /** CX.6 - Assigning Facility */
  assigner_6?: HD;
  /** CX.7 - Effective Date */
  start_7?: string;
  /** CX.8 - Expiration Date */
  end_8?: string;
  /** CX.9 - Assigning Jurisdiction */
  jurisdiction_9?: CWE;
  /** CX.10 - Assigning Agency or Department */
  department_10?: CWE;
}

/** DDI DataType */
export interface DDI {
  /** DDI.1 - Delay Days */
  delay_1?: string;
  /** DDI.2 - Monetary Amount */
  amount_2?: MO;
  /** DDI.3 - Number of Days */
  days_3?: string;
}

/** DLD DataType */
export interface DLD {
  /** DLD.1 - Discharge Location */
  location_1?: string;
  /** DLD.2 - Effective Date */
  start_2?: string;
}

/** DLN DataType */
export interface DLN {
  /** DLN.1 - License Number */
  license_1?: string;
  /** DLN.2 - Issuing State, Province, Country */
  issuingAuthority_2?: string;
  /** DLN.3 - Expiration Date */
  end_3?: string;
}

/** DR DataType */
export interface DR {
  /** DR.1 - Range Start Date/Time */
  start_1?: string;
  /** DR.2 - Range End Date/Time */
  end_2?: string;
}

/** DTN DataType */
export interface DTN {
  /** DTN.1 - Day Type */
  dayType_1?: string;
  /** DTN.2 - Number of Days */
  days_2?: string;
}

/** EI DataType */
export interface EI {
  /** EI.1 - Entity Identifier */
  value_1?: string;
  /** EI.2 - Namespace ID */
  namespace_2?: string;
  /** EI.3 - Universal ID */
  system_3?: string;
  /** EI.4 - Universal ID Type */
  systemType_4?: string;
}

/** FC DataType */
export interface FC {
  /** FC.1 - Financial Class Code */
  code_1?: string;
  /** FC.2 - Effective Date */
  start_2?: string;
}

/** FN DataType */
export interface FN {
  /** FN.1 - Surname */
  family_1?: string;
  /** FN.2 - Own Surname Prefix */
  ownPrefix_2?: string;
  /** FN.3 - Own Surname */
  ownFamily_3?: string;
  /** FN.4 - Surname Prefix From Partner/Spouse */
  partnerPrefix_4?: string;
  /** FN.5 - Surname From Partner/Spouse */
  partnerFamily_5?: string;
}

/** HD DataType */
export interface HD {
  /** HD.1 - Namespace ID */
  namespace_1?: string;
  /** HD.2 - Universal ID */
  system_2?: string;
  /** HD.3 - Universal ID Type */
  systemType_3?: string;
}

/** ICD DataType */
export interface ICD {
  /** ICD.1 - Certification Patient Type */
  patientType_1?: string;
  /** ICD.2 - Certification Required */
  required_2?: string;
  /** ICD.3 - Date/Time Certification Required */
  requiredAt_3?: string;
}

/** JCC DataType */
export interface JCC {
  /** JCC.1 - Job Code */
  jobCode_1?: string;
  /** JCC.2 - Job Class */
  jobClass_2?: string;
  /** JCC.3 - Job Description Text */
  jobDescription_3?: string;
}

/** MO DataType */
export interface MO {
  /** MO.1 - Quantity */
  value_1?: string;
  /** MO.2 - Denomination */
  currency_2?: string;
}

/** MOP DataType */
export interface MOP {
  /** MOP.1 - Money or Percentage Indicator */
  indicator_1?: string;
  /** MOP.2 - Money or Percentage Quantity */
  value_2?: string;
  /** MOP.3 - Currency Denomination */
  currency_3?: string;
}

/** MSG DataType */
export interface MSG {
  /** MSG.1 - Message Code */
  code_1?: string;
  /** MSG.2 - Trigger Event */
  event_2?: string;
  /** MSG.3 - Message Structure */
  structure_3?: string;
}

/** OCD DataType */
export interface OCD {
  /** OCD.1 - Occurrence Code */
  code_1?: CNE;
  /** OCD.2 - Occurrence Date */
  date_2?: string;
}

/** OSP DataType */
export interface OSP {
  /** OSP.1 - Occurrence Span Code */
  code_1?: CNE;
  /** OSP.2 - Occurrence Span Start Date */
  start_2?: string;
  /** OSP.3 - Occurrence Span Stop Date */
  end_3?: string;
}

/** PL DataType */
export interface PL {
  /** PL.1 - Point of Care */
  careSite_1?: string;
  /** PL.2 - Room */
  room_2?: string;
  /** PL.3 - Bed */
  bed_3?: string;
  /** PL.4 - Facility */
  facility_4?: HD;
  /** PL.5 - Location Status */
  status_5?: string;
  /** PL.6 - Person Location Type */
  locationType_6?: string;
  /** PL.7 - Building */
  building_7?: string;
  /** PL.8 - Floor */
  floor_8?: string;
  /** PL.9 - Location Description */
  description_9?: string;
  /** PL.10 - Comprehensive Location Identifier */
  identifier_10?: EI;
  /** PL.11 - Assigning Authority for Location */
  locationSystem_11?: HD;
}

/** PT DataType */
export interface PT {
  /** PT.1 - Processing ID */
  processingId_1?: string;
  /** PT.2 - Processing Mode */
  processingMode_2?: string;
}

/** PTA DataType */
export interface PTA {
  /** PTA.1 - Policy Type */
  policyType_1?: string;
  /** PTA.2 - Amount Class */
  amountClass_2?: string;
  /** PTA.3 - Money or Percentage Quantity */
  value_3?: string;
  /** PTA.4 - Money or Percentage */
  basis_4?: MOP;
}

/** RMC DataType */
export interface RMC {
  /** RMC.1 - Room Type */
  roomType_1?: string;
  /** RMC.2 - Amount Type */
  amountType_2?: string;
  /** RMC.3 - Coverage Amount */
  coverage_3?: string;
  /** RMC.4 - Money or Percentage */
  basis_4?: MOP;
}

/** SAD DataType */
export interface SAD {
  /** SAD.1 - Street or Mailing Address */
  line_1?: string;
  /** SAD.2 - Street Name */
  streetName_2?: string;
  /** SAD.3 - Dwelling Number */
  houseNumber_3?: string;
}

/** UVC DataType */
export interface UVC {
  /** UVC.1 - Value Code */
  code_1?: CNE;
  /** UVC.2 - Value Amount */
  amount_2?: MO;
}

/** VID DataType */
export interface VID {
  /** VID.1 - Version ID */
  version_1?: string;
  /** VID.2 - Internationalization Code */
  locale_2?: CE;
  /** VID.3 - International Version ID */
  internationalVersion_3?: CE;
}

/** XAD DataType */
export interface XAD {
  /** XAD.1 - Street Address */
  line1_1?: SAD;
  /** XAD.2 - Other Designation */
  line2_2?: string;
  /** XAD.3 - City */
  city_3?: string;
  /** XAD.4 - State or Province */
  state_4?: string;
  /** XAD.5 - Zip or Postal Code */
  postalCode_5?: string;
  /** XAD.6 - Country */
  country_6?: string;
  /** XAD.7 - Address Type */
  type_7?: string;
  /** XAD.8 - Other Geographic Designation */
  additionalLocator_8?: string;
  /** XAD.9 - County/Parish Code */
  district_9?: string;
  /** XAD.10 - Census Tract */
  censusTract_10?: string;
  /** XAD.11 - Address Representation Code */
  representation_11?: string;
  /** XAD.12 - Address Validity Range */
  period_12?: DR;
  /** XAD.13 - Effective Date */
  start_13?: string;
  /** XAD.14 - Expiration Date */
  end_14?: string;
}

/** XCN DataType */
export interface XCN {
  /** XCN.1 - ID Number */
  value_1?: string;
  /** XCN.2 - Family Name */
  family_2?: FN;
  /** XCN.3 - Given Name */
  given_3?: string;
  /** XCN.4 - Second and Further Given Names or Initials Thereof */
  additionalGiven_4?: string;
  /** XCN.5 - Suffix (e.g., JR or III) */
  suffix_5?: string;
  /** XCN.6 - Prefix (e.g., DR) */
  prefix_6?: string;
  /** XCN.7 - Degree (e.g., MD) */
  qualification_7?: string;
  /** XCN.8 - Source Table */
  sourceTable_8?: string;
  /** XCN.9 - Assigning Authority */
  system_9?: HD;
  /** XCN.10 - Name Type Code */
  use_10?: string;
  /** XCN.11 - Identifier Check Digit */
  checkDigit_11?: string;
  /** XCN.12 - Check Digit Scheme */
  checkDigitScheme_12?: string;
  /** XCN.13 - Identifier Type Code */
  type_13?: string;
  /** XCN.14 - Assigning Facility */
  assigner_14?: HD;
  /** XCN.15 - Name Representation Code */
  representation_15?: string;
  /** XCN.16 - Name Context */
  context_16?: CE;
  /** XCN.17 - Name Validity Range */
  period_17?: DR;
  /** XCN.18 - Name Assembly Order */
  order_18?: string;
  /** XCN.19 - Effective Date */
  start_19?: string;
  /** XCN.20 - Expiration Date */
  end_20?: string;
  /** XCN.21 - Professional Suffix */
  credential_21?: string;
  /** XCN.22 - Assigning Jurisdiction */
  jurisdiction_22?: CWE;
  /** XCN.23 - Assigning Agency or Department */
  department_23?: CWE;
}

/** XON DataType */
export interface XON {
  /** XON.1 - Organization Name */
  name_1?: string;
  /** XON.2 - Organization Name Type Code */
  nameType_2?: string;
  /** XON.3 - ID Number */
  value_3?: string;
  /** XON.4 - Check Digit */
  checkDigit_4?: string;
  /** XON.5 - Check Digit Scheme */
  checkDigitScheme_5?: string;
  /** XON.6 - Assigning Authority */
  system_6?: HD;
  /** XON.7 - Identifier Type Code */
  type_7?: string;
  /** XON.8 - Assigning Facility */
  assigner_8?: HD;
  /** XON.9 - Name Representation Code */
  representation_9?: string;
  /** XON.10 - Organization Identifier */
  organizationId_10?: string;
}

/** XPN DataType */
export interface XPN {
  /** XPN.1 - Family Name */
  family_1?: FN;
  /** XPN.2 - Given Name */
  given_2?: string;
  /** XPN.3 - Second and Further Given Names or Initials Thereof */
  additionalGiven_3?: string;
  /** XPN.4 - Suffix (e.g., JR or III) */
  suffix_4?: string;
  /** XPN.5 - Prefix (e.g., DR) */
  prefix_5?: string;
  /** XPN.6 - Degree (e.g., MD) */
  qualification_6?: string;
  /** XPN.7 - Name Type Code */
  use_7?: string;
  /** XPN.8 - Name Representation Code */
  representation_8?: string;
  /** XPN.9 - Name Context */
  context_9?: CE;
  /** XPN.10 - Name Validity Range */
  period_10?: DR;
  /** XPN.11 - Name Assembly Order */
  order_11?: string;
  /** XPN.12 - Effective Date */
  start_12?: string;
  /** XPN.13 - Expiration Date */
  end_13?: string;
  /** XPN.14 - Professional Suffix */
  credential_14?: string;
}

/** XTN DataType */
export interface XTN {
  /** XTN.1 - Telephone Number */
  value_1?: string;
  /** XTN.2 - Telecommunication Use Code */
  use_2?: string;
  /** XTN.3 - Telecommunication Equipment Type */
  system_3?: string;
  /** XTN.4 - Email Address */
  email_4?: string;
  /** XTN.5 - Country Code */
  countryCode_5?: string;
  /** XTN.6 - Area/City Code */
  areaCode_6?: string;
  /** XTN.7 - Local Number */
  localNumber_7?: string;
  /** XTN.8 - Extension */
  extension_8?: string;
  /** XTN.9 - Any Text */
  text_9?: string;
  /** XTN.10 - Extension Prefix */
  extensionPrefix_10?: string;
  /** XTN.11 - Speed Dial Code */
  speedDial_11?: string;
  /** XTN.12 - Unformatted Telephone number */
  unformatted_12?: string;
}

// ====== Conversion Functions ======

/** Convert a record object to FieldValue */
function toFieldValue(obj: Record<string, unknown> | null | undefined): FieldValue | undefined {
  if (obj == null) return undefined;
  const result: { [key: number]: FieldValue } = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value == null) continue;
    const match = key.match(/_(\d+)$/);
    if (!match || !match[1]) continue;
    const idx = parseInt(match[1], 10);
    if (typeof value === "string") {
      result[idx] = value;
    } else if (typeof value === "object") {
      const nested = toFieldValue(value as Record<string, unknown>);
      if (nested !== undefined) result[idx] = nested;
    }
  }
  return Object.keys(result).length > 0 ? result : undefined;
}

// ====== FromFieldValue Converters ======

/** Convert FieldValue to AUI */
function fromAUI(fv: FieldValue | undefined): AUI | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { authorization_1: fv };
  if (Array.isArray(fv)) return fromAUI(fv[0]);
  const result: AUI = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.authorization_1 = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.authorization_1 = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.date_2 = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.date_2 = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.source_3 = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.source_3 = (v3 as any)[1];
  }
  return result;
}

/** Convert FieldValue to CE */
function fromCE(fv: FieldValue | undefined): CE | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { code_1: fv };
  if (Array.isArray(fv)) return fromCE(fv[0]);
  const result: CE = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.code_1 = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.code_1 = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.text_2 = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.text_2 = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.system_3 = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.system_3 = (v3 as any)[1];
  }
  if (fv[4] !== undefined) {
    const v4 = fv[4];
    if (typeof v4 === "string") result.altCode_4 = v4;
    else if (typeof v4 === "object" && !Array.isArray(v4) && typeof (v4 as any)[1] === "string") result.altCode_4 = (v4 as any)[1];
  }
  if (fv[5] !== undefined) {
    const v5 = fv[5];
    if (typeof v5 === "string") result.altDisplay_5 = v5;
    else if (typeof v5 === "object" && !Array.isArray(v5) && typeof (v5 as any)[1] === "string") result.altDisplay_5 = (v5 as any)[1];
  }
  if (fv[6] !== undefined) {
    const v6 = fv[6];
    if (typeof v6 === "string") result.altSystem_6 = v6;
    else if (typeof v6 === "object" && !Array.isArray(v6) && typeof (v6 as any)[1] === "string") result.altSystem_6 = (v6 as any)[1];
  }
  return result;
}

/** Convert FieldValue to CNE */
function fromCNE(fv: FieldValue | undefined): CNE | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { code_1: fv };
  if (Array.isArray(fv)) return fromCNE(fv[0]);
  const result: CNE = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.code_1 = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.code_1 = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.text_2 = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.text_2 = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.system_3 = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.system_3 = (v3 as any)[1];
  }
  if (fv[4] !== undefined) {
    const v4 = fv[4];
    if (typeof v4 === "string") result.altCode_4 = v4;
    else if (typeof v4 === "object" && !Array.isArray(v4) && typeof (v4 as any)[1] === "string") result.altCode_4 = (v4 as any)[1];
  }
  if (fv[5] !== undefined) {
    const v5 = fv[5];
    if (typeof v5 === "string") result.altDisplay_5 = v5;
    else if (typeof v5 === "object" && !Array.isArray(v5) && typeof (v5 as any)[1] === "string") result.altDisplay_5 = (v5 as any)[1];
  }
  if (fv[6] !== undefined) {
    const v6 = fv[6];
    if (typeof v6 === "string") result.altSystem_6 = v6;
    else if (typeof v6 === "object" && !Array.isArray(v6) && typeof (v6 as any)[1] === "string") result.altSystem_6 = (v6 as any)[1];
  }
  if (fv[7] !== undefined) {
    const v7 = fv[7];
    if (typeof v7 === "string") result.version_7 = v7;
    else if (typeof v7 === "object" && !Array.isArray(v7) && typeof (v7 as any)[1] === "string") result.version_7 = (v7 as any)[1];
  }
  if (fv[8] !== undefined) {
    const v8 = fv[8];
    if (typeof v8 === "string") result.altVersion_8 = v8;
    else if (typeof v8 === "object" && !Array.isArray(v8) && typeof (v8 as any)[1] === "string") result.altVersion_8 = (v8 as any)[1];
  }
  if (fv[9] !== undefined) {
    const v9 = fv[9];
    if (typeof v9 === "string") result.originalText_9 = v9;
    else if (typeof v9 === "object" && !Array.isArray(v9) && typeof (v9 as any)[1] === "string") result.originalText_9 = (v9 as any)[1];
  }
  return result;
}

/** Convert FieldValue to CP */
function fromCP(fv: FieldValue | undefined): CP | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { amount_1: fromMO(fv) };
  if (Array.isArray(fv)) return fromCP(fv[0]);
  const result: CP = {};
  if (fv[1] !== undefined) result.amount_1 = fromMO(fv[1]);
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.priceType_2 = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.priceType_2 = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.low_3 = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.low_3 = (v3 as any)[1];
  }
  if (fv[4] !== undefined) {
    const v4 = fv[4];
    if (typeof v4 === "string") result.high_4 = v4;
    else if (typeof v4 === "object" && !Array.isArray(v4) && typeof (v4 as any)[1] === "string") result.high_4 = (v4 as any)[1];
  }
  if (fv[5] !== undefined) result.unit_5 = fromCE(fv[5]);
  if (fv[6] !== undefined) {
    const v6 = fv[6];
    if (typeof v6 === "string") result.rangeType_6 = v6;
    else if (typeof v6 === "object" && !Array.isArray(v6) && typeof (v6 as any)[1] === "string") result.rangeType_6 = (v6 as any)[1];
  }
  return result;
}

/** Convert FieldValue to CWE */
function fromCWE(fv: FieldValue | undefined): CWE | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { code_1: fv };
  if (Array.isArray(fv)) return fromCWE(fv[0]);
  const result: CWE = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.code_1 = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.code_1 = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.text_2 = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.text_2 = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.system_3 = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.system_3 = (v3 as any)[1];
  }
  if (fv[4] !== undefined) {
    const v4 = fv[4];
    if (typeof v4 === "string") result.altCode_4 = v4;
    else if (typeof v4 === "object" && !Array.isArray(v4) && typeof (v4 as any)[1] === "string") result.altCode_4 = (v4 as any)[1];
  }
  if (fv[5] !== undefined) {
    const v5 = fv[5];
    if (typeof v5 === "string") result.altDisplay_5 = v5;
    else if (typeof v5 === "object" && !Array.isArray(v5) && typeof (v5 as any)[1] === "string") result.altDisplay_5 = (v5 as any)[1];
  }
  if (fv[6] !== undefined) {
    const v6 = fv[6];
    if (typeof v6 === "string") result.altSystem_6 = v6;
    else if (typeof v6 === "object" && !Array.isArray(v6) && typeof (v6 as any)[1] === "string") result.altSystem_6 = (v6 as any)[1];
  }
  if (fv[7] !== undefined) {
    const v7 = fv[7];
    if (typeof v7 === "string") result.version_7 = v7;
    else if (typeof v7 === "object" && !Array.isArray(v7) && typeof (v7 as any)[1] === "string") result.version_7 = (v7 as any)[1];
  }
  if (fv[8] !== undefined) {
    const v8 = fv[8];
    if (typeof v8 === "string") result.altVersion_8 = v8;
    else if (typeof v8 === "object" && !Array.isArray(v8) && typeof (v8 as any)[1] === "string") result.altVersion_8 = (v8 as any)[1];
  }
  if (fv[9] !== undefined) {
    const v9 = fv[9];
    if (typeof v9 === "string") result.originalText_9 = v9;
    else if (typeof v9 === "object" && !Array.isArray(v9) && typeof (v9 as any)[1] === "string") result.originalText_9 = (v9 as any)[1];
  }
  return result;
}

/** Convert FieldValue to CX */
function fromCX(fv: FieldValue | undefined): CX | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { value_1: fv };
  if (Array.isArray(fv)) return fromCX(fv[0]);
  const result: CX = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.value_1 = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.value_1 = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.checkDigit_2 = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.checkDigit_2 = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.checkDigitScheme_3 = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.checkDigitScheme_3 = (v3 as any)[1];
  }
  if (fv[4] !== undefined) result.system_4 = fromHD(fv[4]);
  if (fv[5] !== undefined) {
    const v5 = fv[5];
    if (typeof v5 === "string") result.type_5 = v5;
    else if (typeof v5 === "object" && !Array.isArray(v5) && typeof (v5 as any)[1] === "string") result.type_5 = (v5 as any)[1];
  }
  if (fv[6] !== undefined) result.assigner_6 = fromHD(fv[6]);
  if (fv[7] !== undefined) {
    const v7 = fv[7];
    if (typeof v7 === "string") result.start_7 = v7;
    else if (typeof v7 === "object" && !Array.isArray(v7) && typeof (v7 as any)[1] === "string") result.start_7 = (v7 as any)[1];
  }
  if (fv[8] !== undefined) {
    const v8 = fv[8];
    if (typeof v8 === "string") result.end_8 = v8;
    else if (typeof v8 === "object" && !Array.isArray(v8) && typeof (v8 as any)[1] === "string") result.end_8 = (v8 as any)[1];
  }
  if (fv[9] !== undefined) result.jurisdiction_9 = fromCWE(fv[9]);
  if (fv[10] !== undefined) result.department_10 = fromCWE(fv[10]);
  return result;
}

/** Convert FieldValue to DDI */
function fromDDI(fv: FieldValue | undefined): DDI | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { delay_1: fv };
  if (Array.isArray(fv)) return fromDDI(fv[0]);
  const result: DDI = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.delay_1 = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.delay_1 = (v1 as any)[1];
  }
  if (fv[2] !== undefined) result.amount_2 = fromMO(fv[2]);
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.days_3 = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.days_3 = (v3 as any)[1];
  }
  return result;
}

/** Convert FieldValue to DLD */
function fromDLD(fv: FieldValue | undefined): DLD | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { location_1: fv };
  if (Array.isArray(fv)) return fromDLD(fv[0]);
  const result: DLD = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.location_1 = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.location_1 = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.start_2 = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.start_2 = (v2 as any)[1];
  }
  return result;
}

/** Convert FieldValue to DLN */
function fromDLN(fv: FieldValue | undefined): DLN | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { license_1: fv };
  if (Array.isArray(fv)) return fromDLN(fv[0]);
  const result: DLN = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.license_1 = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.license_1 = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.issuingAuthority_2 = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.issuingAuthority_2 = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.end_3 = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.end_3 = (v3 as any)[1];
  }
  return result;
}

/** Convert FieldValue to DR */
function fromDR(fv: FieldValue | undefined): DR | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { start_1: fv };
  if (Array.isArray(fv)) return fromDR(fv[0]);
  const result: DR = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.start_1 = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.start_1 = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.end_2 = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.end_2 = (v2 as any)[1];
  }
  return result;
}

/** Convert FieldValue to DTN */
function fromDTN(fv: FieldValue | undefined): DTN | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { dayType_1: fv };
  if (Array.isArray(fv)) return fromDTN(fv[0]);
  const result: DTN = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.dayType_1 = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.dayType_1 = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.days_2 = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.days_2 = (v2 as any)[1];
  }
  return result;
}

/** Convert FieldValue to EI */
function fromEI(fv: FieldValue | undefined): EI | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { value_1: fv };
  if (Array.isArray(fv)) return fromEI(fv[0]);
  const result: EI = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.value_1 = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.value_1 = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.namespace_2 = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.namespace_2 = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.system_3 = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.system_3 = (v3 as any)[1];
  }
  if (fv[4] !== undefined) {
    const v4 = fv[4];
    if (typeof v4 === "string") result.systemType_4 = v4;
    else if (typeof v4 === "object" && !Array.isArray(v4) && typeof (v4 as any)[1] === "string") result.systemType_4 = (v4 as any)[1];
  }
  return result;
}

/** Convert FieldValue to FC */
function fromFC(fv: FieldValue | undefined): FC | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { code_1: fv };
  if (Array.isArray(fv)) return fromFC(fv[0]);
  const result: FC = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.code_1 = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.code_1 = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.start_2 = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.start_2 = (v2 as any)[1];
  }
  return result;
}

/** Convert FieldValue to FN */
function fromFN(fv: FieldValue | undefined): FN | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { family_1: fv };
  if (Array.isArray(fv)) return fromFN(fv[0]);
  const result: FN = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.family_1 = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.family_1 = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.ownPrefix_2 = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.ownPrefix_2 = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.ownFamily_3 = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.ownFamily_3 = (v3 as any)[1];
  }
  if (fv[4] !== undefined) {
    const v4 = fv[4];
    if (typeof v4 === "string") result.partnerPrefix_4 = v4;
    else if (typeof v4 === "object" && !Array.isArray(v4) && typeof (v4 as any)[1] === "string") result.partnerPrefix_4 = (v4 as any)[1];
  }
  if (fv[5] !== undefined) {
    const v5 = fv[5];
    if (typeof v5 === "string") result.partnerFamily_5 = v5;
    else if (typeof v5 === "object" && !Array.isArray(v5) && typeof (v5 as any)[1] === "string") result.partnerFamily_5 = (v5 as any)[1];
  }
  return result;
}

/** Convert FieldValue to HD */
function fromHD(fv: FieldValue | undefined): HD | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { namespace_1: fv };
  if (Array.isArray(fv)) return fromHD(fv[0]);
  const result: HD = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.namespace_1 = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.namespace_1 = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.system_2 = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.system_2 = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.systemType_3 = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.systemType_3 = (v3 as any)[1];
  }
  return result;
}

/** Convert FieldValue to ICD */
function fromICD(fv: FieldValue | undefined): ICD | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { patientType_1: fv };
  if (Array.isArray(fv)) return fromICD(fv[0]);
  const result: ICD = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.patientType_1 = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.patientType_1 = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.required_2 = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.required_2 = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.requiredAt_3 = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.requiredAt_3 = (v3 as any)[1];
  }
  return result;
}

/** Convert FieldValue to JCC */
function fromJCC(fv: FieldValue | undefined): JCC | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { jobCode_1: fv };
  if (Array.isArray(fv)) return fromJCC(fv[0]);
  const result: JCC = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.jobCode_1 = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.jobCode_1 = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.jobClass_2 = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.jobClass_2 = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.jobDescription_3 = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.jobDescription_3 = (v3 as any)[1];
  }
  return result;
}

/** Convert FieldValue to MO */
function fromMO(fv: FieldValue | undefined): MO | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { value_1: fv };
  if (Array.isArray(fv)) return fromMO(fv[0]);
  const result: MO = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.value_1 = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.value_1 = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.currency_2 = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.currency_2 = (v2 as any)[1];
  }
  return result;
}

/** Convert FieldValue to MOP */
function fromMOP(fv: FieldValue | undefined): MOP | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { indicator_1: fv };
  if (Array.isArray(fv)) return fromMOP(fv[0]);
  const result: MOP = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.indicator_1 = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.indicator_1 = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.value_2 = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.value_2 = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.currency_3 = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.currency_3 = (v3 as any)[1];
  }
  return result;
}

/** Convert FieldValue to MSG */
function fromMSG(fv: FieldValue | undefined): MSG | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { code_1: fv };
  if (Array.isArray(fv)) return fromMSG(fv[0]);
  const result: MSG = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.code_1 = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.code_1 = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.event_2 = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.event_2 = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.structure_3 = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.structure_3 = (v3 as any)[1];
  }
  return result;
}

/** Convert FieldValue to OCD */
function fromOCD(fv: FieldValue | undefined): OCD | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { code_1: fromCNE(fv) };
  if (Array.isArray(fv)) return fromOCD(fv[0]);
  const result: OCD = {};
  if (fv[1] !== undefined) result.code_1 = fromCNE(fv[1]);
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.date_2 = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.date_2 = (v2 as any)[1];
  }
  return result;
}

/** Convert FieldValue to OSP */
function fromOSP(fv: FieldValue | undefined): OSP | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { code_1: fromCNE(fv) };
  if (Array.isArray(fv)) return fromOSP(fv[0]);
  const result: OSP = {};
  if (fv[1] !== undefined) result.code_1 = fromCNE(fv[1]);
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.start_2 = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.start_2 = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.end_3 = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.end_3 = (v3 as any)[1];
  }
  return result;
}

/** Convert FieldValue to PL */
function fromPL(fv: FieldValue | undefined): PL | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { careSite_1: fv };
  if (Array.isArray(fv)) return fromPL(fv[0]);
  const result: PL = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.careSite_1 = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.careSite_1 = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.room_2 = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.room_2 = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.bed_3 = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.bed_3 = (v3 as any)[1];
  }
  if (fv[4] !== undefined) result.facility_4 = fromHD(fv[4]);
  if (fv[5] !== undefined) {
    const v5 = fv[5];
    if (typeof v5 === "string") result.status_5 = v5;
    else if (typeof v5 === "object" && !Array.isArray(v5) && typeof (v5 as any)[1] === "string") result.status_5 = (v5 as any)[1];
  }
  if (fv[6] !== undefined) {
    const v6 = fv[6];
    if (typeof v6 === "string") result.locationType_6 = v6;
    else if (typeof v6 === "object" && !Array.isArray(v6) && typeof (v6 as any)[1] === "string") result.locationType_6 = (v6 as any)[1];
  }
  if (fv[7] !== undefined) {
    const v7 = fv[7];
    if (typeof v7 === "string") result.building_7 = v7;
    else if (typeof v7 === "object" && !Array.isArray(v7) && typeof (v7 as any)[1] === "string") result.building_7 = (v7 as any)[1];
  }
  if (fv[8] !== undefined) {
    const v8 = fv[8];
    if (typeof v8 === "string") result.floor_8 = v8;
    else if (typeof v8 === "object" && !Array.isArray(v8) && typeof (v8 as any)[1] === "string") result.floor_8 = (v8 as any)[1];
  }
  if (fv[9] !== undefined) {
    const v9 = fv[9];
    if (typeof v9 === "string") result.description_9 = v9;
    else if (typeof v9 === "object" && !Array.isArray(v9) && typeof (v9 as any)[1] === "string") result.description_9 = (v9 as any)[1];
  }
  if (fv[10] !== undefined) result.identifier_10 = fromEI(fv[10]);
  if (fv[11] !== undefined) result.locationSystem_11 = fromHD(fv[11]);
  return result;
}

/** Convert FieldValue to PT */
function fromPT(fv: FieldValue | undefined): PT | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { processingId_1: fv };
  if (Array.isArray(fv)) return fromPT(fv[0]);
  const result: PT = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.processingId_1 = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.processingId_1 = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.processingMode_2 = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.processingMode_2 = (v2 as any)[1];
  }
  return result;
}

/** Convert FieldValue to PTA */
function fromPTA(fv: FieldValue | undefined): PTA | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { policyType_1: fv };
  if (Array.isArray(fv)) return fromPTA(fv[0]);
  const result: PTA = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.policyType_1 = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.policyType_1 = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.amountClass_2 = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.amountClass_2 = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.value_3 = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.value_3 = (v3 as any)[1];
  }
  if (fv[4] !== undefined) result.basis_4 = fromMOP(fv[4]);
  return result;
}

/** Convert FieldValue to RMC */
function fromRMC(fv: FieldValue | undefined): RMC | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { roomType_1: fv };
  if (Array.isArray(fv)) return fromRMC(fv[0]);
  const result: RMC = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.roomType_1 = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.roomType_1 = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.amountType_2 = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.amountType_2 = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.coverage_3 = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.coverage_3 = (v3 as any)[1];
  }
  if (fv[4] !== undefined) result.basis_4 = fromMOP(fv[4]);
  return result;
}

/** Convert FieldValue to SAD */
function fromSAD(fv: FieldValue | undefined): SAD | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { line_1: fv };
  if (Array.isArray(fv)) return fromSAD(fv[0]);
  const result: SAD = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.line_1 = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.line_1 = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.streetName_2 = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.streetName_2 = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.houseNumber_3 = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.houseNumber_3 = (v3 as any)[1];
  }
  return result;
}

/** Convert FieldValue to UVC */
function fromUVC(fv: FieldValue | undefined): UVC | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { code_1: fromCNE(fv) };
  if (Array.isArray(fv)) return fromUVC(fv[0]);
  const result: UVC = {};
  if (fv[1] !== undefined) result.code_1 = fromCNE(fv[1]);
  if (fv[2] !== undefined) result.amount_2 = fromMO(fv[2]);
  return result;
}

/** Convert FieldValue to VID */
function fromVID(fv: FieldValue | undefined): VID | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { version_1: fv };
  if (Array.isArray(fv)) return fromVID(fv[0]);
  const result: VID = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.version_1 = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.version_1 = (v1 as any)[1];
  }
  if (fv[2] !== undefined) result.locale_2 = fromCE(fv[2]);
  if (fv[3] !== undefined) result.internationalVersion_3 = fromCE(fv[3]);
  return result;
}

/** Convert FieldValue to XAD */
function fromXAD(fv: FieldValue | undefined): XAD | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { line1_1: fromSAD(fv) };
  if (Array.isArray(fv)) return fromXAD(fv[0]);
  const result: XAD = {};
  if (fv[1] !== undefined) result.line1_1 = fromSAD(fv[1]);
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.line2_2 = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.line2_2 = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.city_3 = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.city_3 = (v3 as any)[1];
  }
  if (fv[4] !== undefined) {
    const v4 = fv[4];
    if (typeof v4 === "string") result.state_4 = v4;
    else if (typeof v4 === "object" && !Array.isArray(v4) && typeof (v4 as any)[1] === "string") result.state_4 = (v4 as any)[1];
  }
  if (fv[5] !== undefined) {
    const v5 = fv[5];
    if (typeof v5 === "string") result.postalCode_5 = v5;
    else if (typeof v5 === "object" && !Array.isArray(v5) && typeof (v5 as any)[1] === "string") result.postalCode_5 = (v5 as any)[1];
  }
  if (fv[6] !== undefined) {
    const v6 = fv[6];
    if (typeof v6 === "string") result.country_6 = v6;
    else if (typeof v6 === "object" && !Array.isArray(v6) && typeof (v6 as any)[1] === "string") result.country_6 = (v6 as any)[1];
  }
  if (fv[7] !== undefined) {
    const v7 = fv[7];
    if (typeof v7 === "string") result.type_7 = v7;
    else if (typeof v7 === "object" && !Array.isArray(v7) && typeof (v7 as any)[1] === "string") result.type_7 = (v7 as any)[1];
  }
  if (fv[8] !== undefined) {
    const v8 = fv[8];
    if (typeof v8 === "string") result.additionalLocator_8 = v8;
    else if (typeof v8 === "object" && !Array.isArray(v8) && typeof (v8 as any)[1] === "string") result.additionalLocator_8 = (v8 as any)[1];
  }
  if (fv[9] !== undefined) {
    const v9 = fv[9];
    if (typeof v9 === "string") result.district_9 = v9;
    else if (typeof v9 === "object" && !Array.isArray(v9) && typeof (v9 as any)[1] === "string") result.district_9 = (v9 as any)[1];
  }
  if (fv[10] !== undefined) {
    const v10 = fv[10];
    if (typeof v10 === "string") result.censusTract_10 = v10;
    else if (typeof v10 === "object" && !Array.isArray(v10) && typeof (v10 as any)[1] === "string") result.censusTract_10 = (v10 as any)[1];
  }
  if (fv[11] !== undefined) {
    const v11 = fv[11];
    if (typeof v11 === "string") result.representation_11 = v11;
    else if (typeof v11 === "object" && !Array.isArray(v11) && typeof (v11 as any)[1] === "string") result.representation_11 = (v11 as any)[1];
  }
  if (fv[12] !== undefined) result.period_12 = fromDR(fv[12]);
  if (fv[13] !== undefined) {
    const v13 = fv[13];
    if (typeof v13 === "string") result.start_13 = v13;
    else if (typeof v13 === "object" && !Array.isArray(v13) && typeof (v13 as any)[1] === "string") result.start_13 = (v13 as any)[1];
  }
  if (fv[14] !== undefined) {
    const v14 = fv[14];
    if (typeof v14 === "string") result.end_14 = v14;
    else if (typeof v14 === "object" && !Array.isArray(v14) && typeof (v14 as any)[1] === "string") result.end_14 = (v14 as any)[1];
  }
  return result;
}

/** Convert FieldValue to XCN */
function fromXCN(fv: FieldValue | undefined): XCN | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { value_1: fv };
  if (Array.isArray(fv)) return fromXCN(fv[0]);
  const result: XCN = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.value_1 = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.value_1 = (v1 as any)[1];
  }
  if (fv[2] !== undefined) result.family_2 = fromFN(fv[2]);
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.given_3 = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.given_3 = (v3 as any)[1];
  }
  if (fv[4] !== undefined) {
    const v4 = fv[4];
    if (typeof v4 === "string") result.additionalGiven_4 = v4;
    else if (typeof v4 === "object" && !Array.isArray(v4) && typeof (v4 as any)[1] === "string") result.additionalGiven_4 = (v4 as any)[1];
  }
  if (fv[5] !== undefined) {
    const v5 = fv[5];
    if (typeof v5 === "string") result.suffix_5 = v5;
    else if (typeof v5 === "object" && !Array.isArray(v5) && typeof (v5 as any)[1] === "string") result.suffix_5 = (v5 as any)[1];
  }
  if (fv[6] !== undefined) {
    const v6 = fv[6];
    if (typeof v6 === "string") result.prefix_6 = v6;
    else if (typeof v6 === "object" && !Array.isArray(v6) && typeof (v6 as any)[1] === "string") result.prefix_6 = (v6 as any)[1];
  }
  if (fv[7] !== undefined) {
    const v7 = fv[7];
    if (typeof v7 === "string") result.qualification_7 = v7;
    else if (typeof v7 === "object" && !Array.isArray(v7) && typeof (v7 as any)[1] === "string") result.qualification_7 = (v7 as any)[1];
  }
  if (fv[8] !== undefined) {
    const v8 = fv[8];
    if (typeof v8 === "string") result.sourceTable_8 = v8;
    else if (typeof v8 === "object" && !Array.isArray(v8) && typeof (v8 as any)[1] === "string") result.sourceTable_8 = (v8 as any)[1];
  }
  if (fv[9] !== undefined) result.system_9 = fromHD(fv[9]);
  if (fv[10] !== undefined) {
    const v10 = fv[10];
    if (typeof v10 === "string") result.use_10 = v10;
    else if (typeof v10 === "object" && !Array.isArray(v10) && typeof (v10 as any)[1] === "string") result.use_10 = (v10 as any)[1];
  }
  if (fv[11] !== undefined) {
    const v11 = fv[11];
    if (typeof v11 === "string") result.checkDigit_11 = v11;
    else if (typeof v11 === "object" && !Array.isArray(v11) && typeof (v11 as any)[1] === "string") result.checkDigit_11 = (v11 as any)[1];
  }
  if (fv[12] !== undefined) {
    const v12 = fv[12];
    if (typeof v12 === "string") result.checkDigitScheme_12 = v12;
    else if (typeof v12 === "object" && !Array.isArray(v12) && typeof (v12 as any)[1] === "string") result.checkDigitScheme_12 = (v12 as any)[1];
  }
  if (fv[13] !== undefined) {
    const v13 = fv[13];
    if (typeof v13 === "string") result.type_13 = v13;
    else if (typeof v13 === "object" && !Array.isArray(v13) && typeof (v13 as any)[1] === "string") result.type_13 = (v13 as any)[1];
  }
  if (fv[14] !== undefined) result.assigner_14 = fromHD(fv[14]);
  if (fv[15] !== undefined) {
    const v15 = fv[15];
    if (typeof v15 === "string") result.representation_15 = v15;
    else if (typeof v15 === "object" && !Array.isArray(v15) && typeof (v15 as any)[1] === "string") result.representation_15 = (v15 as any)[1];
  }
  if (fv[16] !== undefined) result.context_16 = fromCE(fv[16]);
  if (fv[17] !== undefined) result.period_17 = fromDR(fv[17]);
  if (fv[18] !== undefined) {
    const v18 = fv[18];
    if (typeof v18 === "string") result.order_18 = v18;
    else if (typeof v18 === "object" && !Array.isArray(v18) && typeof (v18 as any)[1] === "string") result.order_18 = (v18 as any)[1];
  }
  if (fv[19] !== undefined) {
    const v19 = fv[19];
    if (typeof v19 === "string") result.start_19 = v19;
    else if (typeof v19 === "object" && !Array.isArray(v19) && typeof (v19 as any)[1] === "string") result.start_19 = (v19 as any)[1];
  }
  if (fv[20] !== undefined) {
    const v20 = fv[20];
    if (typeof v20 === "string") result.end_20 = v20;
    else if (typeof v20 === "object" && !Array.isArray(v20) && typeof (v20 as any)[1] === "string") result.end_20 = (v20 as any)[1];
  }
  if (fv[21] !== undefined) {
    const v21 = fv[21];
    if (typeof v21 === "string") result.credential_21 = v21;
    else if (typeof v21 === "object" && !Array.isArray(v21) && typeof (v21 as any)[1] === "string") result.credential_21 = (v21 as any)[1];
  }
  if (fv[22] !== undefined) result.jurisdiction_22 = fromCWE(fv[22]);
  if (fv[23] !== undefined) result.department_23 = fromCWE(fv[23]);
  return result;
}

/** Convert FieldValue to XON */
function fromXON(fv: FieldValue | undefined): XON | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { name_1: fv };
  if (Array.isArray(fv)) return fromXON(fv[0]);
  const result: XON = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.name_1 = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.name_1 = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.nameType_2 = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.nameType_2 = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.value_3 = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.value_3 = (v3 as any)[1];
  }
  if (fv[4] !== undefined) {
    const v4 = fv[4];
    if (typeof v4 === "string") result.checkDigit_4 = v4;
    else if (typeof v4 === "object" && !Array.isArray(v4) && typeof (v4 as any)[1] === "string") result.checkDigit_4 = (v4 as any)[1];
  }
  if (fv[5] !== undefined) {
    const v5 = fv[5];
    if (typeof v5 === "string") result.checkDigitScheme_5 = v5;
    else if (typeof v5 === "object" && !Array.isArray(v5) && typeof (v5 as any)[1] === "string") result.checkDigitScheme_5 = (v5 as any)[1];
  }
  if (fv[6] !== undefined) result.system_6 = fromHD(fv[6]);
  if (fv[7] !== undefined) {
    const v7 = fv[7];
    if (typeof v7 === "string") result.type_7 = v7;
    else if (typeof v7 === "object" && !Array.isArray(v7) && typeof (v7 as any)[1] === "string") result.type_7 = (v7 as any)[1];
  }
  if (fv[8] !== undefined) result.assigner_8 = fromHD(fv[8]);
  if (fv[9] !== undefined) {
    const v9 = fv[9];
    if (typeof v9 === "string") result.representation_9 = v9;
    else if (typeof v9 === "object" && !Array.isArray(v9) && typeof (v9 as any)[1] === "string") result.representation_9 = (v9 as any)[1];
  }
  if (fv[10] !== undefined) {
    const v10 = fv[10];
    if (typeof v10 === "string") result.organizationId_10 = v10;
    else if (typeof v10 === "object" && !Array.isArray(v10) && typeof (v10 as any)[1] === "string") result.organizationId_10 = (v10 as any)[1];
  }
  return result;
}

/** Convert FieldValue to XPN */
function fromXPN(fv: FieldValue | undefined): XPN | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { family_1: fromFN(fv) };
  if (Array.isArray(fv)) return fromXPN(fv[0]);
  const result: XPN = {};
  if (fv[1] !== undefined) result.family_1 = fromFN(fv[1]);
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.given_2 = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.given_2 = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.additionalGiven_3 = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.additionalGiven_3 = (v3 as any)[1];
  }
  if (fv[4] !== undefined) {
    const v4 = fv[4];
    if (typeof v4 === "string") result.suffix_4 = v4;
    else if (typeof v4 === "object" && !Array.isArray(v4) && typeof (v4 as any)[1] === "string") result.suffix_4 = (v4 as any)[1];
  }
  if (fv[5] !== undefined) {
    const v5 = fv[5];
    if (typeof v5 === "string") result.prefix_5 = v5;
    else if (typeof v5 === "object" && !Array.isArray(v5) && typeof (v5 as any)[1] === "string") result.prefix_5 = (v5 as any)[1];
  }
  if (fv[6] !== undefined) {
    const v6 = fv[6];
    if (typeof v6 === "string") result.qualification_6 = v6;
    else if (typeof v6 === "object" && !Array.isArray(v6) && typeof (v6 as any)[1] === "string") result.qualification_6 = (v6 as any)[1];
  }
  if (fv[7] !== undefined) {
    const v7 = fv[7];
    if (typeof v7 === "string") result.use_7 = v7;
    else if (typeof v7 === "object" && !Array.isArray(v7) && typeof (v7 as any)[1] === "string") result.use_7 = (v7 as any)[1];
  }
  if (fv[8] !== undefined) {
    const v8 = fv[8];
    if (typeof v8 === "string") result.representation_8 = v8;
    else if (typeof v8 === "object" && !Array.isArray(v8) && typeof (v8 as any)[1] === "string") result.representation_8 = (v8 as any)[1];
  }
  if (fv[9] !== undefined) result.context_9 = fromCE(fv[9]);
  if (fv[10] !== undefined) result.period_10 = fromDR(fv[10]);
  if (fv[11] !== undefined) {
    const v11 = fv[11];
    if (typeof v11 === "string") result.order_11 = v11;
    else if (typeof v11 === "object" && !Array.isArray(v11) && typeof (v11 as any)[1] === "string") result.order_11 = (v11 as any)[1];
  }
  if (fv[12] !== undefined) {
    const v12 = fv[12];
    if (typeof v12 === "string") result.start_12 = v12;
    else if (typeof v12 === "object" && !Array.isArray(v12) && typeof (v12 as any)[1] === "string") result.start_12 = (v12 as any)[1];
  }
  if (fv[13] !== undefined) {
    const v13 = fv[13];
    if (typeof v13 === "string") result.end_13 = v13;
    else if (typeof v13 === "object" && !Array.isArray(v13) && typeof (v13 as any)[1] === "string") result.end_13 = (v13 as any)[1];
  }
  if (fv[14] !== undefined) {
    const v14 = fv[14];
    if (typeof v14 === "string") result.credential_14 = v14;
    else if (typeof v14 === "object" && !Array.isArray(v14) && typeof (v14 as any)[1] === "string") result.credential_14 = (v14 as any)[1];
  }
  return result;
}

/** Convert FieldValue to XTN */
function fromXTN(fv: FieldValue | undefined): XTN | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { value_1: fv };
  if (Array.isArray(fv)) return fromXTN(fv[0]);
  const result: XTN = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.value_1 = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.value_1 = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.use_2 = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.use_2 = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.system_3 = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.system_3 = (v3 as any)[1];
  }
  if (fv[4] !== undefined) {
    const v4 = fv[4];
    if (typeof v4 === "string") result.email_4 = v4;
    else if (typeof v4 === "object" && !Array.isArray(v4) && typeof (v4 as any)[1] === "string") result.email_4 = (v4 as any)[1];
  }
  if (fv[5] !== undefined) {
    const v5 = fv[5];
    if (typeof v5 === "string") result.countryCode_5 = v5;
    else if (typeof v5 === "object" && !Array.isArray(v5) && typeof (v5 as any)[1] === "string") result.countryCode_5 = (v5 as any)[1];
  }
  if (fv[6] !== undefined) {
    const v6 = fv[6];
    if (typeof v6 === "string") result.areaCode_6 = v6;
    else if (typeof v6 === "object" && !Array.isArray(v6) && typeof (v6 as any)[1] === "string") result.areaCode_6 = (v6 as any)[1];
  }
  if (fv[7] !== undefined) {
    const v7 = fv[7];
    if (typeof v7 === "string") result.localNumber_7 = v7;
    else if (typeof v7 === "object" && !Array.isArray(v7) && typeof (v7 as any)[1] === "string") result.localNumber_7 = (v7 as any)[1];
  }
  if (fv[8] !== undefined) {
    const v8 = fv[8];
    if (typeof v8 === "string") result.extension_8 = v8;
    else if (typeof v8 === "object" && !Array.isArray(v8) && typeof (v8 as any)[1] === "string") result.extension_8 = (v8 as any)[1];
  }
  if (fv[9] !== undefined) {
    const v9 = fv[9];
    if (typeof v9 === "string") result.text_9 = v9;
    else if (typeof v9 === "object" && !Array.isArray(v9) && typeof (v9 as any)[1] === "string") result.text_9 = (v9 as any)[1];
  }
  if (fv[10] !== undefined) {
    const v10 = fv[10];
    if (typeof v10 === "string") result.extensionPrefix_10 = v10;
    else if (typeof v10 === "object" && !Array.isArray(v10) && typeof (v10 as any)[1] === "string") result.extensionPrefix_10 = (v10 as any)[1];
  }
  if (fv[11] !== undefined) {
    const v11 = fv[11];
    if (typeof v11 === "string") result.speedDial_11 = v11;
    else if (typeof v11 === "object" && !Array.isArray(v11) && typeof (v11 as any)[1] === "string") result.speedDial_11 = (v11 as any)[1];
  }
  if (fv[12] !== undefined) {
    const v12 = fv[12];
    if (typeof v12 === "string") result.unformatted_12 = v12;
    else if (typeof v12 === "object" && !Array.isArray(v12) && typeof (v12 as any)[1] === "string") result.unformatted_12 = (v12 as any)[1];
  }
  return result;
}

// ====== ACC Segment ======

export class ACCBuilder {
  private seg: HL7v2Segment = { segment: "ACC", fields: {} };

  /** ACC.1 - Accident Date/Time */
  set_acc_1_accidentDateTime(value: string | null | undefined): this {
    if (value != null) this.seg.fields[1] = value;
    return this;
  }

  /** ACC.1 - Accident Date/Time */
  get_acc_1_accidentDateTime(): string | undefined {
    const val = this.seg.fields[1];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** ACC.2 - Accident Code */
  set_acc_2_accidentCode(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[2] = fv;
    return this;
  }

  /** ACC.2 - Accident Code */
  get_acc_2_accidentCode(): CE | undefined {
    return fromCE(this.seg.fields[2]);
  }

  /** ACC.3 - Accident Location */
  set_acc_3_accidentLocation(value: string | null | undefined): this {
    if (value != null) this.seg.fields[3] = value;
    return this;
  }

  /** ACC.3 - Accident Location */
  get_acc_3_accidentLocation(): string | undefined {
    const val = this.seg.fields[3];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** ACC.4 - Auto Accident State */
  set_acc_4_autoAccidentState(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[4] = fv;
    return this;
  }

  /** ACC.4 - Auto Accident State */
  get_acc_4_autoAccidentState(): CE | undefined {
    return fromCE(this.seg.fields[4]);
  }

  /** ACC.5 - Accident Job Related Indicator */
  set_acc_5_accidentJobRelatedIndicator(value: string | null | undefined): this {
    if (value != null) this.seg.fields[5] = value;
    return this;
  }

  /** ACC.5 - Accident Job Related Indicator */
  get_acc_5_accidentJobRelatedIndicator(): string | undefined {
    const val = this.seg.fields[5];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** ACC.6 - Accident Death Indicator */
  set_acc_6_accidentDeathIndicator(value: string | null | undefined): this {
    if (value != null) this.seg.fields[6] = value;
    return this;
  }

  /** ACC.6 - Accident Death Indicator */
  get_acc_6_accidentDeathIndicator(): string | undefined {
    const val = this.seg.fields[6];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** ACC.7 - Entered By */
  set_acc_7_enteredBy(value: XCN | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[7] = fv;
    return this;
  }

  /** ACC.7 - Entered By */
  get_acc_7_enteredBy(): XCN | undefined {
    return fromXCN(this.seg.fields[7]);
  }

  /** ACC.8 - Accident Description */
  set_acc_8_accidentDescription(value: string | null | undefined): this {
    if (value != null) this.seg.fields[8] = value;
    return this;
  }

  /** ACC.8 - Accident Description */
  get_acc_8_accidentDescription(): string | undefined {
    const val = this.seg.fields[8];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** ACC.9 - Brought In By */
  set_acc_9_broughtInBy(value: string | null | undefined): this {
    if (value != null) this.seg.fields[9] = value;
    return this;
  }

  /** ACC.9 - Brought In By */
  get_acc_9_broughtInBy(): string | undefined {
    const val = this.seg.fields[9];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** ACC.10 - Police Notified Indicator */
  set_acc_10_policeNotifiedIndicator(value: string | null | undefined): this {
    if (value != null) this.seg.fields[10] = value;
    return this;
  }

  /** ACC.10 - Police Notified Indicator */
  get_acc_10_policeNotifiedIndicator(): string | undefined {
    const val = this.seg.fields[10];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** ACC.11 - Accident Address */
  set_acc_11_accidentAddress(value: XAD | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[11] = fv;
    return this;
  }

  /** ACC.11 - Accident Address */
  get_acc_11_accidentAddress(): XAD | undefined {
    return fromXAD(this.seg.fields[11]);
  }

  build(): HL7v2Segment {
    return this.seg;
  }
}

// ====== AL1 Segment ======

export class AL1Builder {
  private seg: HL7v2Segment = { segment: "AL1", fields: {} };

  /** AL1.1 - Set ID - AL1 */
  set_al1_1_setIdAl1(value: string | null | undefined): this {
    if (value != null) this.seg.fields[1] = value;
    return this;
  }

  /** AL1.1 - Set ID - AL1 */
  get_al1_1_setIdAl1(): string | undefined {
    const val = this.seg.fields[1];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** AL1.2 - Allergen Type Code */
  set_al1_2_allergenTypeCode(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[2] = fv;
    return this;
  }

  /** AL1.2 - Allergen Type Code */
  get_al1_2_allergenTypeCode(): CE | undefined {
    return fromCE(this.seg.fields[2]);
  }

  /** AL1.3 - Allergen Code/Mnemonic/Description */
  set_al1_3_allergenCodeMnemonicDescription(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[3] = fv;
    return this;
  }

  /** AL1.3 - Allergen Code/Mnemonic/Description */
  get_al1_3_allergenCodeMnemonicDescription(): CE | undefined {
    return fromCE(this.seg.fields[3]);
  }

  /** AL1.4 - Allergy Severity Code */
  set_al1_4_allergySeverityCode(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[4] = fv;
    return this;
  }

  /** AL1.4 - Allergy Severity Code */
  get_al1_4_allergySeverityCode(): CE | undefined {
    return fromCE(this.seg.fields[4]);
  }

  /** AL1.5 - Allergy Reaction Code */
  set_al1_5_allergyReactionCode(value: string | null | undefined): this {
    if (value != null) this.seg.fields[5] = value;
    return this;
  }

  /** AL1.5 - Allergy Reaction Code */
  get_al1_5_allergyReactionCode(): string | undefined {
    const val = this.seg.fields[5];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** AL1.6 - Identification Date */
  set_al1_6_identificationDate(value: string | null | undefined): this {
    if (value != null) this.seg.fields[6] = value;
    return this;
  }

  /** AL1.6 - Identification Date */
  get_al1_6_identificationDate(): string | undefined {
    const val = this.seg.fields[6];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  build(): HL7v2Segment {
    return this.seg;
  }
}

// ====== DB1 Segment ======

export class DB1Builder {
  private seg: HL7v2Segment = { segment: "DB1", fields: {} };

  /** DB1.1 - Set ID - DB1 */
  set_db1_1_setIdDb1(value: string | null | undefined): this {
    if (value != null) this.seg.fields[1] = value;
    return this;
  }

  /** DB1.1 - Set ID - DB1 */
  get_db1_1_setIdDb1(): string | undefined {
    const val = this.seg.fields[1];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** DB1.2 - Disabled Person Code */
  set_db1_2_disabledPersonCode(value: string | null | undefined): this {
    if (value != null) this.seg.fields[2] = value;
    return this;
  }

  /** DB1.2 - Disabled Person Code */
  get_db1_2_disabledPersonCode(): string | undefined {
    const val = this.seg.fields[2];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** DB1.3 - Disabled Person Identifier (set all values) */
  set_db1_3_disabledPersonIdentifier(values: CX[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[3] = arr;
    return this;
  }

  /** DB1.3 - Disabled Person Identifier (add single value) */
  add_db1_3_disabledPersonIdentifier(value: CX | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[3];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[3] = [fv];
      }
    }
    return this;
  }

  /** DB1.3 - Disabled Person Identifier */
  get_db1_3_disabledPersonIdentifier(): CX[] | undefined {
    const val = this.seg.fields[3];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromCX(v)).filter((v): v is CX => v !== undefined);
  }

  /** DB1.4 - Disabled Indicator */
  set_db1_4_disabledIndicator(value: string | null | undefined): this {
    if (value != null) this.seg.fields[4] = value;
    return this;
  }

  /** DB1.4 - Disabled Indicator */
  get_db1_4_disabledIndicator(): string | undefined {
    const val = this.seg.fields[4];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** DB1.5 - Disability Start Date */
  set_db1_5_disabilityStartDate(value: string | null | undefined): this {
    if (value != null) this.seg.fields[5] = value;
    return this;
  }

  /** DB1.5 - Disability Start Date */
  get_db1_5_disabilityStartDate(): string | undefined {
    const val = this.seg.fields[5];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** DB1.6 - Disability End Date */
  set_db1_6_disabilityEndDate(value: string | null | undefined): this {
    if (value != null) this.seg.fields[6] = value;
    return this;
  }

  /** DB1.6 - Disability End Date */
  get_db1_6_disabilityEndDate(): string | undefined {
    const val = this.seg.fields[6];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** DB1.7 - Disability Return to Work Date */
  set_db1_7_disabilityReturnToWorkDate(value: string | null | undefined): this {
    if (value != null) this.seg.fields[7] = value;
    return this;
  }

  /** DB1.7 - Disability Return to Work Date */
  get_db1_7_disabilityReturnToWorkDate(): string | undefined {
    const val = this.seg.fields[7];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** DB1.8 - Disability Unable to Work Date */
  set_db1_8_disabilityUnableToWorkDate(value: string | null | undefined): this {
    if (value != null) this.seg.fields[8] = value;
    return this;
  }

  /** DB1.8 - Disability Unable to Work Date */
  get_db1_8_disabilityUnableToWorkDate(): string | undefined {
    const val = this.seg.fields[8];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  build(): HL7v2Segment {
    return this.seg;
  }
}

// ====== DG1 Segment ======

export class DG1Builder {
  private seg: HL7v2Segment = { segment: "DG1", fields: {} };

  /** DG1.1 - Set ID - DG1 */
  set_dg1_1_setIdDg1(value: string | null | undefined): this {
    if (value != null) this.seg.fields[1] = value;
    return this;
  }

  /** DG1.1 - Set ID - DG1 */
  get_dg1_1_setIdDg1(): string | undefined {
    const val = this.seg.fields[1];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** DG1.2 - Diagnosis Coding Method */
  set_dg1_2_diagnosisCodingMethod(value: string | null | undefined): this {
    if (value != null) this.seg.fields[2] = value;
    return this;
  }

  /** DG1.2 - Diagnosis Coding Method */
  get_dg1_2_diagnosisCodingMethod(): string | undefined {
    const val = this.seg.fields[2];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** DG1.3 - Diagnosis Code - DG1 */
  set_dg1_3_diagnosisCodeDg1(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[3] = fv;
    return this;
  }

  /** DG1.3 - Diagnosis Code - DG1 */
  get_dg1_3_diagnosisCodeDg1(): CE | undefined {
    return fromCE(this.seg.fields[3]);
  }

  /** DG1.4 - Diagnosis Description */
  set_dg1_4_diagnosisDescription(value: string | null | undefined): this {
    if (value != null) this.seg.fields[4] = value;
    return this;
  }

  /** DG1.4 - Diagnosis Description */
  get_dg1_4_diagnosisDescription(): string | undefined {
    const val = this.seg.fields[4];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** DG1.5 - Diagnosis Date/Time */
  set_dg1_5_diagnosisDateTime(value: string | null | undefined): this {
    if (value != null) this.seg.fields[5] = value;
    return this;
  }

  /** DG1.5 - Diagnosis Date/Time */
  get_dg1_5_diagnosisDateTime(): string | undefined {
    const val = this.seg.fields[5];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** DG1.6 - Diagnosis Type */
  set_dg1_6_diagnosisType(value: string | null | undefined): this {
    if (value != null) this.seg.fields[6] = value;
    return this;
  }

  /** DG1.6 - Diagnosis Type */
  get_dg1_6_diagnosisType(): string | undefined {
    const val = this.seg.fields[6];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** DG1.7 - Major Diagnostic Category */
  set_dg1_7_majorDiagnosticCategory(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[7] = fv;
    return this;
  }

  /** DG1.7 - Major Diagnostic Category */
  get_dg1_7_majorDiagnosticCategory(): CE | undefined {
    return fromCE(this.seg.fields[7]);
  }

  /** DG1.8 - Diagnostic Related Group */
  set_dg1_8_diagnosticRelatedGroup(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[8] = fv;
    return this;
  }

  /** DG1.8 - Diagnostic Related Group */
  get_dg1_8_diagnosticRelatedGroup(): CE | undefined {
    return fromCE(this.seg.fields[8]);
  }

  /** DG1.9 - DRG Approval Indicator */
  set_dg1_9_drgApproval(value: string | null | undefined): this {
    if (value != null) this.seg.fields[9] = value;
    return this;
  }

  /** DG1.9 - DRG Approval Indicator */
  get_dg1_9_drgApproval(): string | undefined {
    const val = this.seg.fields[9];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** DG1.10 - DRG Grouper Review Code */
  set_dg1_10_drgGrouperReviewCode(value: string | null | undefined): this {
    if (value != null) this.seg.fields[10] = value;
    return this;
  }

  /** DG1.10 - DRG Grouper Review Code */
  get_dg1_10_drgGrouperReviewCode(): string | undefined {
    const val = this.seg.fields[10];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** DG1.11 - Outlier Type */
  set_dg1_11_outlierType(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[11] = fv;
    return this;
  }

  /** DG1.11 - Outlier Type */
  get_dg1_11_outlierType(): CE | undefined {
    return fromCE(this.seg.fields[11]);
  }

  /** DG1.12 - Outlier Days */
  set_dg1_12_outlierDays(value: string | null | undefined): this {
    if (value != null) this.seg.fields[12] = value;
    return this;
  }

  /** DG1.12 - Outlier Days */
  get_dg1_12_outlierDays(): string | undefined {
    const val = this.seg.fields[12];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** DG1.13 - Outlier Cost */
  set_dg1_13_outlierCost(value: CP | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[13] = fv;
    return this;
  }

  /** DG1.13 - Outlier Cost */
  get_dg1_13_outlierCost(): CP | undefined {
    return fromCP(this.seg.fields[13]);
  }

  /** DG1.14 - Grouper Version And Type */
  set_dg1_14_grouperVersionAndType(value: string | null | undefined): this {
    if (value != null) this.seg.fields[14] = value;
    return this;
  }

  /** DG1.14 - Grouper Version And Type */
  get_dg1_14_grouperVersionAndType(): string | undefined {
    const val = this.seg.fields[14];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** DG1.15 - Diagnosis Priority */
  set_dg1_15_diagnosisPriority(value: string | null | undefined): this {
    if (value != null) this.seg.fields[15] = value;
    return this;
  }

  /** DG1.15 - Diagnosis Priority */
  get_dg1_15_diagnosisPriority(): string | undefined {
    const val = this.seg.fields[15];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** DG1.16 - Diagnosing Clinician (set all values) */
  set_dg1_16_diagnosingClinician(values: XCN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[16] = arr;
    return this;
  }

  /** DG1.16 - Diagnosing Clinician (add single value) */
  add_dg1_16_diagnosingClinician(value: XCN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[16];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[16] = [fv];
      }
    }
    return this;
  }

  /** DG1.16 - Diagnosing Clinician */
  get_dg1_16_diagnosingClinician(): XCN[] | undefined {
    const val = this.seg.fields[16];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXCN(v)).filter((v): v is XCN => v !== undefined);
  }

  /** DG1.17 - Diagnosis Classification */
  set_dg1_17_diagnosisClassification(value: string | null | undefined): this {
    if (value != null) this.seg.fields[17] = value;
    return this;
  }

  /** DG1.17 - Diagnosis Classification */
  get_dg1_17_diagnosisClassification(): string | undefined {
    const val = this.seg.fields[17];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** DG1.18 - Confidential Indicator */
  set_dg1_18_confidentialIndicator(value: string | null | undefined): this {
    if (value != null) this.seg.fields[18] = value;
    return this;
  }

  /** DG1.18 - Confidential Indicator */
  get_dg1_18_confidentialIndicator(): string | undefined {
    const val = this.seg.fields[18];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** DG1.19 - Attestation Date/Time */
  set_dg1_19_attestationDateTime(value: string | null | undefined): this {
    if (value != null) this.seg.fields[19] = value;
    return this;
  }

  /** DG1.19 - Attestation Date/Time */
  get_dg1_19_attestationDateTime(): string | undefined {
    const val = this.seg.fields[19];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** DG1.20 - Diagnosis Identifier */
  set_dg1_20_diagnosisIdentifier(value: EI | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[20] = fv;
    return this;
  }

  /** DG1.20 - Diagnosis Identifier */
  get_dg1_20_diagnosisIdentifier(): EI | undefined {
    return fromEI(this.seg.fields[20]);
  }

  /** DG1.21 - Diagnosis Action Code */
  set_dg1_21_diagnosisActionCode(value: string | null | undefined): this {
    if (value != null) this.seg.fields[21] = value;
    return this;
  }

  /** DG1.21 - Diagnosis Action Code */
  get_dg1_21_diagnosisActionCode(): string | undefined {
    const val = this.seg.fields[21];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  build(): HL7v2Segment {
    return this.seg;
  }
}

// ====== DRG Segment ======

export class DRGBuilder {
  private seg: HL7v2Segment = { segment: "DRG", fields: {} };

  /** DRG.1 - Diagnostic Related Group */
  set_drg_1_diagnosticRelatedGroup(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[1] = fv;
    return this;
  }

  /** DRG.1 - Diagnostic Related Group */
  get_drg_1_diagnosticRelatedGroup(): CE | undefined {
    return fromCE(this.seg.fields[1]);
  }

  /** DRG.2 - DRG Assigned Date/Time */
  set_drg_2_drgAssignedDateTime(value: string | null | undefined): this {
    if (value != null) this.seg.fields[2] = value;
    return this;
  }

  /** DRG.2 - DRG Assigned Date/Time */
  get_drg_2_drgAssignedDateTime(): string | undefined {
    const val = this.seg.fields[2];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** DRG.3 - DRG Approval Indicator */
  set_drg_3_drgApproval(value: string | null | undefined): this {
    if (value != null) this.seg.fields[3] = value;
    return this;
  }

  /** DRG.3 - DRG Approval Indicator */
  get_drg_3_drgApproval(): string | undefined {
    const val = this.seg.fields[3];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** DRG.4 - DRG Grouper Review Code */
  set_drg_4_drgGrouperReviewCode(value: string | null | undefined): this {
    if (value != null) this.seg.fields[4] = value;
    return this;
  }

  /** DRG.4 - DRG Grouper Review Code */
  get_drg_4_drgGrouperReviewCode(): string | undefined {
    const val = this.seg.fields[4];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** DRG.5 - Outlier Type */
  set_drg_5_outlierType(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[5] = fv;
    return this;
  }

  /** DRG.5 - Outlier Type */
  get_drg_5_outlierType(): CE | undefined {
    return fromCE(this.seg.fields[5]);
  }

  /** DRG.6 - Outlier Days */
  set_drg_6_outlierDays(value: string | null | undefined): this {
    if (value != null) this.seg.fields[6] = value;
    return this;
  }

  /** DRG.6 - Outlier Days */
  get_drg_6_outlierDays(): string | undefined {
    const val = this.seg.fields[6];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** DRG.7 - Outlier Cost */
  set_drg_7_outlierCost(value: CP | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[7] = fv;
    return this;
  }

  /** DRG.7 - Outlier Cost */
  get_drg_7_outlierCost(): CP | undefined {
    return fromCP(this.seg.fields[7]);
  }

  /** DRG.8 - DRG Payor */
  set_drg_8_drgPayor(value: string | null | undefined): this {
    if (value != null) this.seg.fields[8] = value;
    return this;
  }

  /** DRG.8 - DRG Payor */
  get_drg_8_drgPayor(): string | undefined {
    const val = this.seg.fields[8];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** DRG.9 - Outlier Reimbursement */
  set_drg_9_outlierReimbursement(value: CP | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[9] = fv;
    return this;
  }

  /** DRG.9 - Outlier Reimbursement */
  get_drg_9_outlierReimbursement(): CP | undefined {
    return fromCP(this.seg.fields[9]);
  }

  /** DRG.10 - Confidential Indicator */
  set_drg_10_confidentialIndicator(value: string | null | undefined): this {
    if (value != null) this.seg.fields[10] = value;
    return this;
  }

  /** DRG.10 - Confidential Indicator */
  get_drg_10_confidentialIndicator(): string | undefined {
    const val = this.seg.fields[10];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** DRG.11 - DRG Transfer Type */
  set_drg_11_drgTransferType(value: string | null | undefined): this {
    if (value != null) this.seg.fields[11] = value;
    return this;
  }

  /** DRG.11 - DRG Transfer Type */
  get_drg_11_drgTransferType(): string | undefined {
    const val = this.seg.fields[11];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  build(): HL7v2Segment {
    return this.seg;
  }
}

// ====== EVN Segment ======

export class EVNBuilder {
  private seg: HL7v2Segment = { segment: "EVN", fields: {} };

  /** EVN.1 - Event Type Code */
  set_evn_1_eventTypeCode(value: string | null | undefined): this {
    if (value != null) this.seg.fields[1] = value;
    return this;
  }

  /** EVN.1 - Event Type Code */
  get_evn_1_eventTypeCode(): string | undefined {
    const val = this.seg.fields[1];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** EVN.2 - Recorded Date/Time */
  set_evn_2_recordedDateTime(value: string | null | undefined): this {
    if (value != null) this.seg.fields[2] = value;
    return this;
  }

  /** EVN.2 - Recorded Date/Time */
  get_evn_2_recordedDateTime(): string | undefined {
    const val = this.seg.fields[2];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** EVN.3 - Date/Time Planned Event */
  set_evn_3_plannedEventDateTime(value: string | null | undefined): this {
    if (value != null) this.seg.fields[3] = value;
    return this;
  }

  /** EVN.3 - Date/Time Planned Event */
  get_evn_3_plannedEventDateTime(): string | undefined {
    const val = this.seg.fields[3];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** EVN.4 - Event Reason Code */
  set_evn_4_eventReasonCode(value: string | null | undefined): this {
    if (value != null) this.seg.fields[4] = value;
    return this;
  }

  /** EVN.4 - Event Reason Code */
  get_evn_4_eventReasonCode(): string | undefined {
    const val = this.seg.fields[4];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** EVN.5 - Operator ID (set all values) */
  set_evn_5_operatorId(values: XCN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[5] = arr;
    return this;
  }

  /** EVN.5 - Operator ID (add single value) */
  add_evn_5_operatorId(value: XCN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[5];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[5] = [fv];
      }
    }
    return this;
  }

  /** EVN.5 - Operator ID */
  get_evn_5_operatorId(): XCN[] | undefined {
    const val = this.seg.fields[5];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXCN(v)).filter((v): v is XCN => v !== undefined);
  }

  /** EVN.6 - Event Occurred */
  set_evn_6_eventOccurred(value: string | null | undefined): this {
    if (value != null) this.seg.fields[6] = value;
    return this;
  }

  /** EVN.6 - Event Occurred */
  get_evn_6_eventOccurred(): string | undefined {
    const val = this.seg.fields[6];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** EVN.7 - Event Facility */
  set_evn_7_eventFacility(value: HD | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[7] = fv;
    return this;
  }

  /** EVN.7 - Event Facility */
  get_evn_7_eventFacility(): HD | undefined {
    return fromHD(this.seg.fields[7]);
  }

  build(): HL7v2Segment {
    return this.seg;
  }
}

// ====== GT1 Segment ======

export class GT1Builder {
  private seg: HL7v2Segment = { segment: "GT1", fields: {} };

  /** GT1.1 - Set ID - GT1 */
  set_gt1_1_setIdGt1(value: string | null | undefined): this {
    if (value != null) this.seg.fields[1] = value;
    return this;
  }

  /** GT1.1 - Set ID - GT1 */
  get_gt1_1_setIdGt1(): string | undefined {
    const val = this.seg.fields[1];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** GT1.2 - Guarantor Number (set all values) */
  set_gt1_2_guarantorNumber(values: CX[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[2] = arr;
    return this;
  }

  /** GT1.2 - Guarantor Number (add single value) */
  add_gt1_2_guarantorNumber(value: CX | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[2];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[2] = [fv];
      }
    }
    return this;
  }

  /** GT1.2 - Guarantor Number */
  get_gt1_2_guarantorNumber(): CX[] | undefined {
    const val = this.seg.fields[2];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromCX(v)).filter((v): v is CX => v !== undefined);
  }

  /** GT1.3 - Guarantor Name (set all values) */
  set_gt1_3_guarantorName(values: XPN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[3] = arr;
    return this;
  }

  /** GT1.3 - Guarantor Name (add single value) */
  add_gt1_3_guarantorName(value: XPN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[3];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[3] = [fv];
      }
    }
    return this;
  }

  /** GT1.3 - Guarantor Name */
  get_gt1_3_guarantorName(): XPN[] | undefined {
    const val = this.seg.fields[3];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXPN(v)).filter((v): v is XPN => v !== undefined);
  }

  /** GT1.4 - Guarantor Spouse Name (set all values) */
  set_gt1_4_guarantorSpouseName(values: XPN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[4] = arr;
    return this;
  }

  /** GT1.4 - Guarantor Spouse Name (add single value) */
  add_gt1_4_guarantorSpouseName(value: XPN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[4];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[4] = [fv];
      }
    }
    return this;
  }

  /** GT1.4 - Guarantor Spouse Name */
  get_gt1_4_guarantorSpouseName(): XPN[] | undefined {
    const val = this.seg.fields[4];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXPN(v)).filter((v): v is XPN => v !== undefined);
  }

  /** GT1.5 - Guarantor Address (set all values) */
  set_gt1_5_guarantorAddress(values: XAD[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[5] = arr;
    return this;
  }

  /** GT1.5 - Guarantor Address (add single value) */
  add_gt1_5_guarantorAddress(value: XAD | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[5];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[5] = [fv];
      }
    }
    return this;
  }

  /** GT1.5 - Guarantor Address */
  get_gt1_5_guarantorAddress(): XAD[] | undefined {
    const val = this.seg.fields[5];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXAD(v)).filter((v): v is XAD => v !== undefined);
  }

  /** GT1.6 - Guarantor Ph Num - Home (set all values) */
  set_gt1_6_guarantorPhNumHome(values: XTN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[6] = arr;
    return this;
  }

  /** GT1.6 - Guarantor Ph Num - Home (add single value) */
  add_gt1_6_guarantorPhNumHome(value: XTN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[6];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[6] = [fv];
      }
    }
    return this;
  }

  /** GT1.6 - Guarantor Ph Num - Home */
  get_gt1_6_guarantorPhNumHome(): XTN[] | undefined {
    const val = this.seg.fields[6];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXTN(v)).filter((v): v is XTN => v !== undefined);
  }

  /** GT1.7 - Guarantor Ph Num - Business (set all values) */
  set_gt1_7_guarantorPhNumBusiness(values: XTN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[7] = arr;
    return this;
  }

  /** GT1.7 - Guarantor Ph Num - Business (add single value) */
  add_gt1_7_guarantorPhNumBusiness(value: XTN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[7];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[7] = [fv];
      }
    }
    return this;
  }

  /** GT1.7 - Guarantor Ph Num - Business */
  get_gt1_7_guarantorPhNumBusiness(): XTN[] | undefined {
    const val = this.seg.fields[7];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXTN(v)).filter((v): v is XTN => v !== undefined);
  }

  /** GT1.8 - Guarantor Date/Time Of Birth */
  set_gt1_8_birthDate(value: string | null | undefined): this {
    if (value != null) this.seg.fields[8] = value;
    return this;
  }

  /** GT1.8 - Guarantor Date/Time Of Birth */
  get_gt1_8_birthDate(): string | undefined {
    const val = this.seg.fields[8];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** GT1.9 - Guarantor Administrative Sex */
  set_gt1_9_guarantorAdministrativeGender(value: string | null | undefined): this {
    if (value != null) this.seg.fields[9] = value;
    return this;
  }

  /** GT1.9 - Guarantor Administrative Sex */
  get_gt1_9_guarantorAdministrativeGender(): string | undefined {
    const val = this.seg.fields[9];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** GT1.10 - Guarantor Type */
  set_gt1_10_guarantorType(value: string | null | undefined): this {
    if (value != null) this.seg.fields[10] = value;
    return this;
  }

  /** GT1.10 - Guarantor Type */
  get_gt1_10_guarantorType(): string | undefined {
    const val = this.seg.fields[10];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** GT1.11 - Guarantor Relationship */
  set_gt1_11_guarantorRelationship(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[11] = fv;
    return this;
  }

  /** GT1.11 - Guarantor Relationship */
  get_gt1_11_guarantorRelationship(): CE | undefined {
    return fromCE(this.seg.fields[11]);
  }

  /** GT1.12 - Guarantor SSN */
  set_gt1_12_guarantorSsn(value: string | null | undefined): this {
    if (value != null) this.seg.fields[12] = value;
    return this;
  }

  /** GT1.12 - Guarantor SSN */
  get_gt1_12_guarantorSsn(): string | undefined {
    const val = this.seg.fields[12];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** GT1.13 - Guarantor Date - Begin */
  set_gt1_13_guarantorDateBegin(value: string | null | undefined): this {
    if (value != null) this.seg.fields[13] = value;
    return this;
  }

  /** GT1.13 - Guarantor Date - Begin */
  get_gt1_13_guarantorDateBegin(): string | undefined {
    const val = this.seg.fields[13];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** GT1.14 - Guarantor Date - End */
  set_gt1_14_guarantorDateEnd(value: string | null | undefined): this {
    if (value != null) this.seg.fields[14] = value;
    return this;
  }

  /** GT1.14 - Guarantor Date - End */
  get_gt1_14_guarantorDateEnd(): string | undefined {
    const val = this.seg.fields[14];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** GT1.15 - Guarantor Priority */
  set_gt1_15_guarantorPriority(value: string | null | undefined): this {
    if (value != null) this.seg.fields[15] = value;
    return this;
  }

  /** GT1.15 - Guarantor Priority */
  get_gt1_15_guarantorPriority(): string | undefined {
    const val = this.seg.fields[15];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** GT1.16 - Guarantor Employer Name (set all values) */
  set_gt1_16_guarantorEmployerName(values: XPN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[16] = arr;
    return this;
  }

  /** GT1.16 - Guarantor Employer Name (add single value) */
  add_gt1_16_guarantorEmployerName(value: XPN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[16];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[16] = [fv];
      }
    }
    return this;
  }

  /** GT1.16 - Guarantor Employer Name */
  get_gt1_16_guarantorEmployerName(): XPN[] | undefined {
    const val = this.seg.fields[16];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXPN(v)).filter((v): v is XPN => v !== undefined);
  }

  /** GT1.17 - Guarantor Employer Address (set all values) */
  set_gt1_17_guarantorEmployerAddress(values: XAD[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[17] = arr;
    return this;
  }

  /** GT1.17 - Guarantor Employer Address (add single value) */
  add_gt1_17_guarantorEmployerAddress(value: XAD | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[17];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[17] = [fv];
      }
    }
    return this;
  }

  /** GT1.17 - Guarantor Employer Address */
  get_gt1_17_guarantorEmployerAddress(): XAD[] | undefined {
    const val = this.seg.fields[17];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXAD(v)).filter((v): v is XAD => v !== undefined);
  }

  /** GT1.18 - Guarantor Employer Phone Number (set all values) */
  set_gt1_18_guarantorEmployerPhoneNumber(values: XTN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[18] = arr;
    return this;
  }

  /** GT1.18 - Guarantor Employer Phone Number (add single value) */
  add_gt1_18_guarantorEmployerPhoneNumber(value: XTN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[18];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[18] = [fv];
      }
    }
    return this;
  }

  /** GT1.18 - Guarantor Employer Phone Number */
  get_gt1_18_guarantorEmployerPhoneNumber(): XTN[] | undefined {
    const val = this.seg.fields[18];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXTN(v)).filter((v): v is XTN => v !== undefined);
  }

  /** GT1.19 - Guarantor Employee ID Number (set all values) */
  set_gt1_19_guarantorEmployeeIdNumber(values: CX[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[19] = arr;
    return this;
  }

  /** GT1.19 - Guarantor Employee ID Number (add single value) */
  add_gt1_19_guarantorEmployeeIdNumber(value: CX | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[19];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[19] = [fv];
      }
    }
    return this;
  }

  /** GT1.19 - Guarantor Employee ID Number */
  get_gt1_19_guarantorEmployeeIdNumber(): CX[] | undefined {
    const val = this.seg.fields[19];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromCX(v)).filter((v): v is CX => v !== undefined);
  }

  /** GT1.20 - Guarantor Employment Status */
  set_gt1_20_guarantorEmploymentStatus(value: string | null | undefined): this {
    if (value != null) this.seg.fields[20] = value;
    return this;
  }

  /** GT1.20 - Guarantor Employment Status */
  get_gt1_20_guarantorEmploymentStatus(): string | undefined {
    const val = this.seg.fields[20];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** GT1.21 - Guarantor Organization Name (set all values) */
  set_gt1_21_guarantorOrganizationName(values: XON[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[21] = arr;
    return this;
  }

  /** GT1.21 - Guarantor Organization Name (add single value) */
  add_gt1_21_guarantorOrganizationName(value: XON | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[21];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[21] = [fv];
      }
    }
    return this;
  }

  /** GT1.21 - Guarantor Organization Name */
  get_gt1_21_guarantorOrganizationName(): XON[] | undefined {
    const val = this.seg.fields[21];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXON(v)).filter((v): v is XON => v !== undefined);
  }

  /** GT1.22 - Guarantor Billing Hold Flag */
  set_gt1_22_guarantorBillingHoldFlag(value: string | null | undefined): this {
    if (value != null) this.seg.fields[22] = value;
    return this;
  }

  /** GT1.22 - Guarantor Billing Hold Flag */
  get_gt1_22_guarantorBillingHoldFlag(): string | undefined {
    const val = this.seg.fields[22];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** GT1.23 - Guarantor Credit Rating Code */
  set_gt1_23_guarantorCreditRatingCode(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[23] = fv;
    return this;
  }

  /** GT1.23 - Guarantor Credit Rating Code */
  get_gt1_23_guarantorCreditRatingCode(): CE | undefined {
    return fromCE(this.seg.fields[23]);
  }

  /** GT1.24 - Guarantor Death Date And Time */
  set_gt1_24_guarantorDeathDateAndTime(value: string | null | undefined): this {
    if (value != null) this.seg.fields[24] = value;
    return this;
  }

  /** GT1.24 - Guarantor Death Date And Time */
  get_gt1_24_guarantorDeathDateAndTime(): string | undefined {
    const val = this.seg.fields[24];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** GT1.25 - Guarantor Death Flag */
  set_gt1_25_guarantorDeathFlag(value: string | null | undefined): this {
    if (value != null) this.seg.fields[25] = value;
    return this;
  }

  /** GT1.25 - Guarantor Death Flag */
  get_gt1_25_guarantorDeathFlag(): string | undefined {
    const val = this.seg.fields[25];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** GT1.26 - Guarantor Charge Adjustment Code */
  set_gt1_26_guarantorChargeAdjustmentCode(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[26] = fv;
    return this;
  }

  /** GT1.26 - Guarantor Charge Adjustment Code */
  get_gt1_26_guarantorChargeAdjustmentCode(): CE | undefined {
    return fromCE(this.seg.fields[26]);
  }

  /** GT1.27 - Guarantor Household Annual Income */
  set_gt1_27_guarantorHouseholdAnnualIncome(value: CP | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[27] = fv;
    return this;
  }

  /** GT1.27 - Guarantor Household Annual Income */
  get_gt1_27_guarantorHouseholdAnnualIncome(): CP | undefined {
    return fromCP(this.seg.fields[27]);
  }

  /** GT1.28 - Guarantor Household Size */
  set_gt1_28_guarantorHouseholdSize(value: string | null | undefined): this {
    if (value != null) this.seg.fields[28] = value;
    return this;
  }

  /** GT1.28 - Guarantor Household Size */
  get_gt1_28_guarantorHouseholdSize(): string | undefined {
    const val = this.seg.fields[28];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** GT1.29 - Guarantor Employer ID Number (set all values) */
  set_gt1_29_guarantorEmployerIdNumber(values: CX[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[29] = arr;
    return this;
  }

  /** GT1.29 - Guarantor Employer ID Number (add single value) */
  add_gt1_29_guarantorEmployerIdNumber(value: CX | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[29];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[29] = [fv];
      }
    }
    return this;
  }

  /** GT1.29 - Guarantor Employer ID Number */
  get_gt1_29_guarantorEmployerIdNumber(): CX[] | undefined {
    const val = this.seg.fields[29];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromCX(v)).filter((v): v is CX => v !== undefined);
  }

  /** GT1.30 - Guarantor Marital Status Code */
  set_gt1_30_guarantorMaritalStatusCode(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[30] = fv;
    return this;
  }

  /** GT1.30 - Guarantor Marital Status Code */
  get_gt1_30_guarantorMaritalStatusCode(): CE | undefined {
    return fromCE(this.seg.fields[30]);
  }

  /** GT1.31 - Guarantor Hire Effective Date */
  set_gt1_31_guarantorHireEffectiveDate(value: string | null | undefined): this {
    if (value != null) this.seg.fields[31] = value;
    return this;
  }

  /** GT1.31 - Guarantor Hire Effective Date */
  get_gt1_31_guarantorHireEffectiveDate(): string | undefined {
    const val = this.seg.fields[31];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** GT1.32 - Employment Stop Date */
  set_gt1_32_employmentEnd(value: string | null | undefined): this {
    if (value != null) this.seg.fields[32] = value;
    return this;
  }

  /** GT1.32 - Employment Stop Date */
  get_gt1_32_employmentEnd(): string | undefined {
    const val = this.seg.fields[32];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** GT1.33 - Living Dependency */
  set_gt1_33_livingDependency(value: string | null | undefined): this {
    if (value != null) this.seg.fields[33] = value;
    return this;
  }

  /** GT1.33 - Living Dependency */
  get_gt1_33_livingDependency(): string | undefined {
    const val = this.seg.fields[33];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** GT1.34 - Ambulatory Status */
  set_gt1_34_ambulatoryStatus(value: string | null | undefined): this {
    if (value != null) this.seg.fields[34] = value;
    return this;
  }

  /** GT1.34 - Ambulatory Status */
  get_gt1_34_ambulatoryStatus(): string | undefined {
    const val = this.seg.fields[34];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** GT1.35 - Citizenship (set all values) */
  set_gt1_35_citizenship(values: CE[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[35] = arr;
    return this;
  }

  /** GT1.35 - Citizenship (add single value) */
  add_gt1_35_citizenship(value: CE | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[35];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[35] = [fv];
      }
    }
    return this;
  }

  /** GT1.35 - Citizenship */
  get_gt1_35_citizenship(): CE[] | undefined {
    const val = this.seg.fields[35];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromCE(v)).filter((v): v is CE => v !== undefined);
  }

  /** GT1.36 - Primary Language */
  set_gt1_36_language(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[36] = fv;
    return this;
  }

  /** GT1.36 - Primary Language */
  get_gt1_36_language(): CE | undefined {
    return fromCE(this.seg.fields[36]);
  }

  /** GT1.37 - Living Arrangement */
  set_gt1_37_livingArrangement(value: string | null | undefined): this {
    if (value != null) this.seg.fields[37] = value;
    return this;
  }

  /** GT1.37 - Living Arrangement */
  get_gt1_37_livingArrangement(): string | undefined {
    const val = this.seg.fields[37];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** GT1.38 - Publicity Code */
  set_gt1_38_publicityCode(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[38] = fv;
    return this;
  }

  /** GT1.38 - Publicity Code */
  get_gt1_38_publicityCode(): CE | undefined {
    return fromCE(this.seg.fields[38]);
  }

  /** GT1.39 - Protection Indicator */
  set_gt1_39_protectionIndicator(value: string | null | undefined): this {
    if (value != null) this.seg.fields[39] = value;
    return this;
  }

  /** GT1.39 - Protection Indicator */
  get_gt1_39_protectionIndicator(): string | undefined {
    const val = this.seg.fields[39];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** GT1.40 - Student Indicator */
  set_gt1_40_student(value: string | null | undefined): this {
    if (value != null) this.seg.fields[40] = value;
    return this;
  }

  /** GT1.40 - Student Indicator */
  get_gt1_40_student(): string | undefined {
    const val = this.seg.fields[40];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** GT1.41 - Religion */
  set_gt1_41_religion(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[41] = fv;
    return this;
  }

  /** GT1.41 - Religion */
  get_gt1_41_religion(): CE | undefined {
    return fromCE(this.seg.fields[41]);
  }

  /** GT1.42 - Mother's Maiden Name (set all values) */
  set_gt1_42_mothersMaidenName(values: XPN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[42] = arr;
    return this;
  }

  /** GT1.42 - Mother's Maiden Name (add single value) */
  add_gt1_42_mothersMaidenName(value: XPN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[42];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[42] = [fv];
      }
    }
    return this;
  }

  /** GT1.42 - Mother's Maiden Name */
  get_gt1_42_mothersMaidenName(): XPN[] | undefined {
    const val = this.seg.fields[42];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXPN(v)).filter((v): v is XPN => v !== undefined);
  }

  /** GT1.43 - Nationality */
  set_gt1_43_nationality(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[43] = fv;
    return this;
  }

  /** GT1.43 - Nationality */
  get_gt1_43_nationality(): CE | undefined {
    return fromCE(this.seg.fields[43]);
  }

  /** GT1.44 - Ethnic Group (set all values) */
  set_gt1_44_ethnicity(values: CE[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[44] = arr;
    return this;
  }

  /** GT1.44 - Ethnic Group (add single value) */
  add_gt1_44_ethnicity(value: CE | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[44];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[44] = [fv];
      }
    }
    return this;
  }

  /** GT1.44 - Ethnic Group */
  get_gt1_44_ethnicity(): CE[] | undefined {
    const val = this.seg.fields[44];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromCE(v)).filter((v): v is CE => v !== undefined);
  }

  /** GT1.45 - Contact Person's Name (set all values) */
  set_gt1_45_contactPersonsName(values: XPN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[45] = arr;
    return this;
  }

  /** GT1.45 - Contact Person's Name (add single value) */
  add_gt1_45_contactPersonsName(value: XPN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[45];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[45] = [fv];
      }
    }
    return this;
  }

  /** GT1.45 - Contact Person's Name */
  get_gt1_45_contactPersonsName(): XPN[] | undefined {
    const val = this.seg.fields[45];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXPN(v)).filter((v): v is XPN => v !== undefined);
  }

  /** GT1.46 - Contact Person's Telephone Number (set all values) */
  set_gt1_46_contactPhone(values: XTN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[46] = arr;
    return this;
  }

  /** GT1.46 - Contact Person's Telephone Number (add single value) */
  add_gt1_46_contactPhone(value: XTN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[46];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[46] = [fv];
      }
    }
    return this;
  }

  /** GT1.46 - Contact Person's Telephone Number */
  get_gt1_46_contactPhone(): XTN[] | undefined {
    const val = this.seg.fields[46];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXTN(v)).filter((v): v is XTN => v !== undefined);
  }

  /** GT1.47 - Contact Reason */
  set_gt1_47_contactReason(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[47] = fv;
    return this;
  }

  /** GT1.47 - Contact Reason */
  get_gt1_47_contactReason(): CE | undefined {
    return fromCE(this.seg.fields[47]);
  }

  /** GT1.48 - Contact Relationship */
  set_gt1_48_contactRelationship(value: string | null | undefined): this {
    if (value != null) this.seg.fields[48] = value;
    return this;
  }

  /** GT1.48 - Contact Relationship */
  get_gt1_48_contactRelationship(): string | undefined {
    const val = this.seg.fields[48];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** GT1.49 - Job Title */
  set_gt1_49_jobTitle(value: string | null | undefined): this {
    if (value != null) this.seg.fields[49] = value;
    return this;
  }

  /** GT1.49 - Job Title */
  get_gt1_49_jobTitle(): string | undefined {
    const val = this.seg.fields[49];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** GT1.50 - Job Code/Class */
  set_gt1_50_jobCodeClass(value: JCC | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[50] = fv;
    return this;
  }

  /** GT1.50 - Job Code/Class */
  get_gt1_50_jobCodeClass(): JCC | undefined {
    return fromJCC(this.seg.fields[50]);
  }

  /** GT1.51 - Guarantor Employer's Organization Name (set all values) */
  set_gt1_51_guarantorEmployersOrganizationName(values: XON[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[51] = arr;
    return this;
  }

  /** GT1.51 - Guarantor Employer's Organization Name (add single value) */
  add_gt1_51_guarantorEmployersOrganizationName(value: XON | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[51];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[51] = [fv];
      }
    }
    return this;
  }

  /** GT1.51 - Guarantor Employer's Organization Name */
  get_gt1_51_guarantorEmployersOrganizationName(): XON[] | undefined {
    const val = this.seg.fields[51];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXON(v)).filter((v): v is XON => v !== undefined);
  }

  /** GT1.52 - Handicap */
  set_gt1_52_disability(value: string | null | undefined): this {
    if (value != null) this.seg.fields[52] = value;
    return this;
  }

  /** GT1.52 - Handicap */
  get_gt1_52_disability(): string | undefined {
    const val = this.seg.fields[52];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** GT1.53 - Job Status */
  set_gt1_53_jobStatus(value: string | null | undefined): this {
    if (value != null) this.seg.fields[53] = value;
    return this;
  }

  /** GT1.53 - Job Status */
  get_gt1_53_jobStatus(): string | undefined {
    const val = this.seg.fields[53];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** GT1.54 - Guarantor Financial Class */
  set_gt1_54_guarantorFinancialClass(value: FC | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[54] = fv;
    return this;
  }

  /** GT1.54 - Guarantor Financial Class */
  get_gt1_54_guarantorFinancialClass(): FC | undefined {
    return fromFC(this.seg.fields[54]);
  }

  /** GT1.55 - Guarantor Race (set all values) */
  set_gt1_55_guarantorRace(values: CE[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[55] = arr;
    return this;
  }

  /** GT1.55 - Guarantor Race (add single value) */
  add_gt1_55_guarantorRace(value: CE | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[55];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[55] = [fv];
      }
    }
    return this;
  }

  /** GT1.55 - Guarantor Race */
  get_gt1_55_guarantorRace(): CE[] | undefined {
    const val = this.seg.fields[55];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromCE(v)).filter((v): v is CE => v !== undefined);
  }

  /** GT1.56 - Guarantor Birth Place */
  set_gt1_56_guarantorBirthPlace(value: string | null | undefined): this {
    if (value != null) this.seg.fields[56] = value;
    return this;
  }

  /** GT1.56 - Guarantor Birth Place */
  get_gt1_56_guarantorBirthPlace(): string | undefined {
    const val = this.seg.fields[56];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** GT1.57 - VIP Indicator */
  set_gt1_57_vip(value: string | null | undefined): this {
    if (value != null) this.seg.fields[57] = value;
    return this;
  }

  /** GT1.57 - VIP Indicator */
  get_gt1_57_vip(): string | undefined {
    const val = this.seg.fields[57];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  build(): HL7v2Segment {
    return this.seg;
  }
}

// ====== IN1 Segment ======

export class IN1Builder {
  private seg: HL7v2Segment = { segment: "IN1", fields: {} };

  /** IN1.1 - Set ID - IN1 */
  set_in1_1_setIdIn1(value: string | null | undefined): this {
    if (value != null) this.seg.fields[1] = value;
    return this;
  }

  /** IN1.1 - Set ID - IN1 */
  get_in1_1_setIdIn1(): string | undefined {
    const val = this.seg.fields[1];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN1.2 - Insurance Plan ID */
  set_in1_2_insurancePlanId(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[2] = fv;
    return this;
  }

  /** IN1.2 - Insurance Plan ID */
  get_in1_2_insurancePlanId(): CE | undefined {
    return fromCE(this.seg.fields[2]);
  }

  /** IN1.3 - Insurance Company ID (set all values) */
  set_in1_3_insuranceCompanyId(values: CX[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[3] = arr;
    return this;
  }

  /** IN1.3 - Insurance Company ID (add single value) */
  add_in1_3_insuranceCompanyId(value: CX | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[3];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[3] = [fv];
      }
    }
    return this;
  }

  /** IN1.3 - Insurance Company ID */
  get_in1_3_insuranceCompanyId(): CX[] | undefined {
    const val = this.seg.fields[3];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromCX(v)).filter((v): v is CX => v !== undefined);
  }

  /** IN1.4 - Insurance Company Name (set all values) */
  set_in1_4_insuranceCompanyName(values: XON[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[4] = arr;
    return this;
  }

  /** IN1.4 - Insurance Company Name (add single value) */
  add_in1_4_insuranceCompanyName(value: XON | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[4];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[4] = [fv];
      }
    }
    return this;
  }

  /** IN1.4 - Insurance Company Name */
  get_in1_4_insuranceCompanyName(): XON[] | undefined {
    const val = this.seg.fields[4];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXON(v)).filter((v): v is XON => v !== undefined);
  }

  /** IN1.5 - Insurance Company Address (set all values) */
  set_in1_5_insuranceCompanyAddress(values: XAD[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[5] = arr;
    return this;
  }

  /** IN1.5 - Insurance Company Address (add single value) */
  add_in1_5_insuranceCompanyAddress(value: XAD | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[5];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[5] = [fv];
      }
    }
    return this;
  }

  /** IN1.5 - Insurance Company Address */
  get_in1_5_insuranceCompanyAddress(): XAD[] | undefined {
    const val = this.seg.fields[5];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXAD(v)).filter((v): v is XAD => v !== undefined);
  }

  /** IN1.6 - Insurance Co Contact Person (set all values) */
  set_in1_6_insuranceCoContactPerson(values: XPN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[6] = arr;
    return this;
  }

  /** IN1.6 - Insurance Co Contact Person (add single value) */
  add_in1_6_insuranceCoContactPerson(value: XPN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[6];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[6] = [fv];
      }
    }
    return this;
  }

  /** IN1.6 - Insurance Co Contact Person */
  get_in1_6_insuranceCoContactPerson(): XPN[] | undefined {
    const val = this.seg.fields[6];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXPN(v)).filter((v): v is XPN => v !== undefined);
  }

  /** IN1.7 - Insurance Co Phone Number (set all values) */
  set_in1_7_insurancePhone(values: XTN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[7] = arr;
    return this;
  }

  /** IN1.7 - Insurance Co Phone Number (add single value) */
  add_in1_7_insurancePhone(value: XTN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[7];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[7] = [fv];
      }
    }
    return this;
  }

  /** IN1.7 - Insurance Co Phone Number */
  get_in1_7_insurancePhone(): XTN[] | undefined {
    const val = this.seg.fields[7];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXTN(v)).filter((v): v is XTN => v !== undefined);
  }

  /** IN1.8 - Group Number */
  set_in1_8_groupNumber(value: string | null | undefined): this {
    if (value != null) this.seg.fields[8] = value;
    return this;
  }

  /** IN1.8 - Group Number */
  get_in1_8_groupNumber(): string | undefined {
    const val = this.seg.fields[8];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN1.9 - Group Name (set all values) */
  set_in1_9_groupName(values: XON[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[9] = arr;
    return this;
  }

  /** IN1.9 - Group Name (add single value) */
  add_in1_9_groupName(value: XON | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[9];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[9] = [fv];
      }
    }
    return this;
  }

  /** IN1.9 - Group Name */
  get_in1_9_groupName(): XON[] | undefined {
    const val = this.seg.fields[9];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXON(v)).filter((v): v is XON => v !== undefined);
  }

  /** IN1.10 - Insured's Group Emp ID (set all values) */
  set_in1_10_insuredsGroupEmpId(values: CX[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[10] = arr;
    return this;
  }

  /** IN1.10 - Insured's Group Emp ID (add single value) */
  add_in1_10_insuredsGroupEmpId(value: CX | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[10];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[10] = [fv];
      }
    }
    return this;
  }

  /** IN1.10 - Insured's Group Emp ID */
  get_in1_10_insuredsGroupEmpId(): CX[] | undefined {
    const val = this.seg.fields[10];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromCX(v)).filter((v): v is CX => v !== undefined);
  }

  /** IN1.11 - Insured's Group Emp Name (set all values) */
  set_in1_11_insuredsGroupEmpName(values: XON[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[11] = arr;
    return this;
  }

  /** IN1.11 - Insured's Group Emp Name (add single value) */
  add_in1_11_insuredsGroupEmpName(value: XON | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[11];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[11] = [fv];
      }
    }
    return this;
  }

  /** IN1.11 - Insured's Group Emp Name */
  get_in1_11_insuredsGroupEmpName(): XON[] | undefined {
    const val = this.seg.fields[11];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXON(v)).filter((v): v is XON => v !== undefined);
  }

  /** IN1.12 - Plan Effective Date */
  set_in1_12_planEffectiveDate(value: string | null | undefined): this {
    if (value != null) this.seg.fields[12] = value;
    return this;
  }

  /** IN1.12 - Plan Effective Date */
  get_in1_12_planEffectiveDate(): string | undefined {
    const val = this.seg.fields[12];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN1.13 - Plan Expiration Date */
  set_in1_13_planExpirationDate(value: string | null | undefined): this {
    if (value != null) this.seg.fields[13] = value;
    return this;
  }

  /** IN1.13 - Plan Expiration Date */
  get_in1_13_planExpirationDate(): string | undefined {
    const val = this.seg.fields[13];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN1.14 - Authorization Information */
  set_in1_14_authorizationInformation(value: AUI | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[14] = fv;
    return this;
  }

  /** IN1.14 - Authorization Information */
  get_in1_14_authorizationInformation(): AUI | undefined {
    return fromAUI(this.seg.fields[14]);
  }

  /** IN1.15 - Plan Type */
  set_in1_15_planType(value: string | null | undefined): this {
    if (value != null) this.seg.fields[15] = value;
    return this;
  }

  /** IN1.15 - Plan Type */
  get_in1_15_planType(): string | undefined {
    const val = this.seg.fields[15];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN1.16 - Name Of Insured (set all values) */
  set_in1_16_nameOfInsured(values: XPN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[16] = arr;
    return this;
  }

  /** IN1.16 - Name Of Insured (add single value) */
  add_in1_16_nameOfInsured(value: XPN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[16];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[16] = [fv];
      }
    }
    return this;
  }

  /** IN1.16 - Name Of Insured */
  get_in1_16_nameOfInsured(): XPN[] | undefined {
    const val = this.seg.fields[16];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXPN(v)).filter((v): v is XPN => v !== undefined);
  }

  /** IN1.17 - Insured's Relationship To Patient */
  set_in1_17_insuredsRelationshipToPatient(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[17] = fv;
    return this;
  }

  /** IN1.17 - Insured's Relationship To Patient */
  get_in1_17_insuredsRelationshipToPatient(): CE | undefined {
    return fromCE(this.seg.fields[17]);
  }

  /** IN1.18 - Insured's Date Of Birth */
  set_in1_18_insuredsDateOfBirth(value: string | null | undefined): this {
    if (value != null) this.seg.fields[18] = value;
    return this;
  }

  /** IN1.18 - Insured's Date Of Birth */
  get_in1_18_insuredsDateOfBirth(): string | undefined {
    const val = this.seg.fields[18];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN1.19 - Insured's Address (set all values) */
  set_in1_19_insuredsAddress(values: XAD[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[19] = arr;
    return this;
  }

  /** IN1.19 - Insured's Address (add single value) */
  add_in1_19_insuredsAddress(value: XAD | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[19];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[19] = [fv];
      }
    }
    return this;
  }

  /** IN1.19 - Insured's Address */
  get_in1_19_insuredsAddress(): XAD[] | undefined {
    const val = this.seg.fields[19];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXAD(v)).filter((v): v is XAD => v !== undefined);
  }

  /** IN1.20 - Assignment Of Benefits */
  set_in1_20_assignmentOfBenefits(value: string | null | undefined): this {
    if (value != null) this.seg.fields[20] = value;
    return this;
  }

  /** IN1.20 - Assignment Of Benefits */
  get_in1_20_assignmentOfBenefits(): string | undefined {
    const val = this.seg.fields[20];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN1.21 - Coordination Of Benefits */
  set_in1_21_coordinationOfBenefits(value: string | null | undefined): this {
    if (value != null) this.seg.fields[21] = value;
    return this;
  }

  /** IN1.21 - Coordination Of Benefits */
  get_in1_21_coordinationOfBenefits(): string | undefined {
    const val = this.seg.fields[21];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN1.22 - Coord Of Ben. Priority */
  set_in1_22_coordOfBenPriority(value: string | null | undefined): this {
    if (value != null) this.seg.fields[22] = value;
    return this;
  }

  /** IN1.22 - Coord Of Ben. Priority */
  get_in1_22_coordOfBenPriority(): string | undefined {
    const val = this.seg.fields[22];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN1.23 - Notice Of Admission Flag */
  set_in1_23_noticeOfAdmissionFlag(value: string | null | undefined): this {
    if (value != null) this.seg.fields[23] = value;
    return this;
  }

  /** IN1.23 - Notice Of Admission Flag */
  get_in1_23_noticeOfAdmissionFlag(): string | undefined {
    const val = this.seg.fields[23];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN1.24 - Notice Of Admission Date */
  set_in1_24_noticeOfAdmissionDate(value: string | null | undefined): this {
    if (value != null) this.seg.fields[24] = value;
    return this;
  }

  /** IN1.24 - Notice Of Admission Date */
  get_in1_24_noticeOfAdmissionDate(): string | undefined {
    const val = this.seg.fields[24];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN1.25 - Report Of Eligibility Flag */
  set_in1_25_reportOfEligibilityFlag(value: string | null | undefined): this {
    if (value != null) this.seg.fields[25] = value;
    return this;
  }

  /** IN1.25 - Report Of Eligibility Flag */
  get_in1_25_reportOfEligibilityFlag(): string | undefined {
    const val = this.seg.fields[25];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN1.26 - Report Of Eligibility Date */
  set_in1_26_reportOfEligibilityDate(value: string | null | undefined): this {
    if (value != null) this.seg.fields[26] = value;
    return this;
  }

  /** IN1.26 - Report Of Eligibility Date */
  get_in1_26_reportOfEligibilityDate(): string | undefined {
    const val = this.seg.fields[26];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN1.27 - Release Information Code */
  set_in1_27_releaseInformationCode(value: string | null | undefined): this {
    if (value != null) this.seg.fields[27] = value;
    return this;
  }

  /** IN1.27 - Release Information Code */
  get_in1_27_releaseInformationCode(): string | undefined {
    const val = this.seg.fields[27];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN1.28 - Pre-Admit Cert (PAC) */
  set_in1_28_preAdmitCert(value: string | null | undefined): this {
    if (value != null) this.seg.fields[28] = value;
    return this;
  }

  /** IN1.28 - Pre-Admit Cert (PAC) */
  get_in1_28_preAdmitCert(): string | undefined {
    const val = this.seg.fields[28];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN1.29 - Verification Date/Time */
  set_in1_29_verificationDateTime(value: string | null | undefined): this {
    if (value != null) this.seg.fields[29] = value;
    return this;
  }

  /** IN1.29 - Verification Date/Time */
  get_in1_29_verificationDateTime(): string | undefined {
    const val = this.seg.fields[29];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN1.30 - Verification By (set all values) */
  set_in1_30_verificationBy(values: XCN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[30] = arr;
    return this;
  }

  /** IN1.30 - Verification By (add single value) */
  add_in1_30_verificationBy(value: XCN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[30];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[30] = [fv];
      }
    }
    return this;
  }

  /** IN1.30 - Verification By */
  get_in1_30_verificationBy(): XCN[] | undefined {
    const val = this.seg.fields[30];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXCN(v)).filter((v): v is XCN => v !== undefined);
  }

  /** IN1.31 - Type Of Agreement Code */
  set_in1_31_typeOfAgreementCode(value: string | null | undefined): this {
    if (value != null) this.seg.fields[31] = value;
    return this;
  }

  /** IN1.31 - Type Of Agreement Code */
  get_in1_31_typeOfAgreementCode(): string | undefined {
    const val = this.seg.fields[31];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN1.32 - Billing Status */
  set_in1_32_billingStatus(value: string | null | undefined): this {
    if (value != null) this.seg.fields[32] = value;
    return this;
  }

  /** IN1.32 - Billing Status */
  get_in1_32_billingStatus(): string | undefined {
    const val = this.seg.fields[32];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN1.33 - Lifetime Reserve Days */
  set_in1_33_lifetimeReserveDays(value: string | null | undefined): this {
    if (value != null) this.seg.fields[33] = value;
    return this;
  }

  /** IN1.33 - Lifetime Reserve Days */
  get_in1_33_lifetimeReserveDays(): string | undefined {
    const val = this.seg.fields[33];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN1.34 - Delay Before L.R. Day */
  set_in1_34_delayBeforeLRDay(value: string | null | undefined): this {
    if (value != null) this.seg.fields[34] = value;
    return this;
  }

  /** IN1.34 - Delay Before L.R. Day */
  get_in1_34_delayBeforeLRDay(): string | undefined {
    const val = this.seg.fields[34];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN1.35 - Company Plan Code */
  set_in1_35_companyPlanCode(value: string | null | undefined): this {
    if (value != null) this.seg.fields[35] = value;
    return this;
  }

  /** IN1.35 - Company Plan Code */
  get_in1_35_companyPlanCode(): string | undefined {
    const val = this.seg.fields[35];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN1.36 - Policy Number */
  set_in1_36_policyNumber(value: string | null | undefined): this {
    if (value != null) this.seg.fields[36] = value;
    return this;
  }

  /** IN1.36 - Policy Number */
  get_in1_36_policyNumber(): string | undefined {
    const val = this.seg.fields[36];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN1.37 - Policy Deductible */
  set_in1_37_policyDeductible(value: CP | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[37] = fv;
    return this;
  }

  /** IN1.37 - Policy Deductible */
  get_in1_37_policyDeductible(): CP | undefined {
    return fromCP(this.seg.fields[37]);
  }

  /** IN1.38 - Policy Limit - Amount */
  set_in1_38_policyLimitAmount(value: CP | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[38] = fv;
    return this;
  }

  /** IN1.38 - Policy Limit - Amount */
  get_in1_38_policyLimitAmount(): CP | undefined {
    return fromCP(this.seg.fields[38]);
  }

  /** IN1.39 - Policy Limit - Days */
  set_in1_39_policyLimitDays(value: string | null | undefined): this {
    if (value != null) this.seg.fields[39] = value;
    return this;
  }

  /** IN1.39 - Policy Limit - Days */
  get_in1_39_policyLimitDays(): string | undefined {
    const val = this.seg.fields[39];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN1.40 - Room Rate - Semi-Private */
  set_in1_40_roomRateSemiPrivate(value: CP | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[40] = fv;
    return this;
  }

  /** IN1.40 - Room Rate - Semi-Private */
  get_in1_40_roomRateSemiPrivate(): CP | undefined {
    return fromCP(this.seg.fields[40]);
  }

  /** IN1.41 - Room Rate - Private */
  set_in1_41_roomRatePrivate(value: CP | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[41] = fv;
    return this;
  }

  /** IN1.41 - Room Rate - Private */
  get_in1_41_roomRatePrivate(): CP | undefined {
    return fromCP(this.seg.fields[41]);
  }

  /** IN1.42 - Insured's Employment Status */
  set_in1_42_insuredsEmploymentStatus(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[42] = fv;
    return this;
  }

  /** IN1.42 - Insured's Employment Status */
  get_in1_42_insuredsEmploymentStatus(): CE | undefined {
    return fromCE(this.seg.fields[42]);
  }

  /** IN1.43 - Insured's Administrative Sex */
  set_in1_43_insuredsAdministrativeGender(value: string | null | undefined): this {
    if (value != null) this.seg.fields[43] = value;
    return this;
  }

  /** IN1.43 - Insured's Administrative Sex */
  get_in1_43_insuredsAdministrativeGender(): string | undefined {
    const val = this.seg.fields[43];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN1.44 - Insured's Employer's Address (set all values) */
  set_in1_44_insuredsEmployersAddress(values: XAD[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[44] = arr;
    return this;
  }

  /** IN1.44 - Insured's Employer's Address (add single value) */
  add_in1_44_insuredsEmployersAddress(value: XAD | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[44];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[44] = [fv];
      }
    }
    return this;
  }

  /** IN1.44 - Insured's Employer's Address */
  get_in1_44_insuredsEmployersAddress(): XAD[] | undefined {
    const val = this.seg.fields[44];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXAD(v)).filter((v): v is XAD => v !== undefined);
  }

  /** IN1.45 - Verification Status */
  set_in1_45_verificationStatus(value: string | null | undefined): this {
    if (value != null) this.seg.fields[45] = value;
    return this;
  }

  /** IN1.45 - Verification Status */
  get_in1_45_verificationStatus(): string | undefined {
    const val = this.seg.fields[45];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN1.46 - Prior Insurance Plan ID */
  set_in1_46_priorInsurancePlanId(value: string | null | undefined): this {
    if (value != null) this.seg.fields[46] = value;
    return this;
  }

  /** IN1.46 - Prior Insurance Plan ID */
  get_in1_46_priorInsurancePlanId(): string | undefined {
    const val = this.seg.fields[46];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN1.47 - Coverage Type */
  set_in1_47_coverageType(value: string | null | undefined): this {
    if (value != null) this.seg.fields[47] = value;
    return this;
  }

  /** IN1.47 - Coverage Type */
  get_in1_47_coverageType(): string | undefined {
    const val = this.seg.fields[47];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN1.48 - Handicap */
  set_in1_48_disability(value: string | null | undefined): this {
    if (value != null) this.seg.fields[48] = value;
    return this;
  }

  /** IN1.48 - Handicap */
  get_in1_48_disability(): string | undefined {
    const val = this.seg.fields[48];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN1.49 - Insured's ID Number (set all values) */
  set_in1_49_insuredsIdNumber(values: CX[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[49] = arr;
    return this;
  }

  /** IN1.49 - Insured's ID Number (add single value) */
  add_in1_49_insuredsIdNumber(value: CX | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[49];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[49] = [fv];
      }
    }
    return this;
  }

  /** IN1.49 - Insured's ID Number */
  get_in1_49_insuredsIdNumber(): CX[] | undefined {
    const val = this.seg.fields[49];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromCX(v)).filter((v): v is CX => v !== undefined);
  }

  /** IN1.50 - Signature Code */
  set_in1_50_signatureCode(value: string | null | undefined): this {
    if (value != null) this.seg.fields[50] = value;
    return this;
  }

  /** IN1.50 - Signature Code */
  get_in1_50_signatureCode(): string | undefined {
    const val = this.seg.fields[50];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN1.51 - Signature Code Date */
  set_in1_51_signatureCodeDate(value: string | null | undefined): this {
    if (value != null) this.seg.fields[51] = value;
    return this;
  }

  /** IN1.51 - Signature Code Date */
  get_in1_51_signatureCodeDate(): string | undefined {
    const val = this.seg.fields[51];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN1.52 - Insured's Birth Place */
  set_in1_52_insuredsBirthPlace(value: string | null | undefined): this {
    if (value != null) this.seg.fields[52] = value;
    return this;
  }

  /** IN1.52 - Insured's Birth Place */
  get_in1_52_insuredsBirthPlace(): string | undefined {
    const val = this.seg.fields[52];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN1.53 - VIP Indicator */
  set_in1_53_vip(value: string | null | undefined): this {
    if (value != null) this.seg.fields[53] = value;
    return this;
  }

  /** IN1.53 - VIP Indicator */
  get_in1_53_vip(): string | undefined {
    const val = this.seg.fields[53];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  build(): HL7v2Segment {
    return this.seg;
  }
}

// ====== IN2 Segment ======

export class IN2Builder {
  private seg: HL7v2Segment = { segment: "IN2", fields: {} };

  /** IN2.1 - Insured's Employee ID (set all values) */
  set_in2_1_insuredsEmployeeId(values: CX[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[1] = arr;
    return this;
  }

  /** IN2.1 - Insured's Employee ID (add single value) */
  add_in2_1_insuredsEmployeeId(value: CX | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[1];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[1] = [fv];
      }
    }
    return this;
  }

  /** IN2.1 - Insured's Employee ID */
  get_in2_1_insuredsEmployeeId(): CX[] | undefined {
    const val = this.seg.fields[1];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromCX(v)).filter((v): v is CX => v !== undefined);
  }

  /** IN2.2 - Insured's Social Security Number */
  set_in2_2_insuredsSocialSecurityNumber(value: string | null | undefined): this {
    if (value != null) this.seg.fields[2] = value;
    return this;
  }

  /** IN2.2 - Insured's Social Security Number */
  get_in2_2_insuredsSocialSecurityNumber(): string | undefined {
    const val = this.seg.fields[2];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN2.3 - Insured's Employer's Name and ID (set all values) */
  set_in2_3_insuredsEmployersNameAndId(values: XCN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[3] = arr;
    return this;
  }

  /** IN2.3 - Insured's Employer's Name and ID (add single value) */
  add_in2_3_insuredsEmployersNameAndId(value: XCN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[3];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[3] = [fv];
      }
    }
    return this;
  }

  /** IN2.3 - Insured's Employer's Name and ID */
  get_in2_3_insuredsEmployersNameAndId(): XCN[] | undefined {
    const val = this.seg.fields[3];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXCN(v)).filter((v): v is XCN => v !== undefined);
  }

  /** IN2.4 - Employer Information Data */
  set_in2_4_employerInformationData(value: string | null | undefined): this {
    if (value != null) this.seg.fields[4] = value;
    return this;
  }

  /** IN2.4 - Employer Information Data */
  get_in2_4_employerInformationData(): string | undefined {
    const val = this.seg.fields[4];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN2.5 - Mail Claim Party */
  set_in2_5_mailClaimParty(value: string | null | undefined): this {
    if (value != null) this.seg.fields[5] = value;
    return this;
  }

  /** IN2.5 - Mail Claim Party */
  get_in2_5_mailClaimParty(): string | undefined {
    const val = this.seg.fields[5];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN2.6 - Medicare Health Ins Card Number */
  set_in2_6_medicareHealthInsCardNumber(value: string | null | undefined): this {
    if (value != null) this.seg.fields[6] = value;
    return this;
  }

  /** IN2.6 - Medicare Health Ins Card Number */
  get_in2_6_medicareHealthInsCardNumber(): string | undefined {
    const val = this.seg.fields[6];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN2.7 - Medicaid Case Name (set all values) */
  set_in2_7_medicaidCaseName(values: XPN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[7] = arr;
    return this;
  }

  /** IN2.7 - Medicaid Case Name (add single value) */
  add_in2_7_medicaidCaseName(value: XPN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[7];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[7] = [fv];
      }
    }
    return this;
  }

  /** IN2.7 - Medicaid Case Name */
  get_in2_7_medicaidCaseName(): XPN[] | undefined {
    const val = this.seg.fields[7];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXPN(v)).filter((v): v is XPN => v !== undefined);
  }

  /** IN2.8 - Medicaid Case Number */
  set_in2_8_medicaidCaseNumber(value: string | null | undefined): this {
    if (value != null) this.seg.fields[8] = value;
    return this;
  }

  /** IN2.8 - Medicaid Case Number */
  get_in2_8_medicaidCaseNumber(): string | undefined {
    const val = this.seg.fields[8];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN2.9 - Military Sponsor Name (set all values) */
  set_in2_9_militarySponsorName(values: XPN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[9] = arr;
    return this;
  }

  /** IN2.9 - Military Sponsor Name (add single value) */
  add_in2_9_militarySponsorName(value: XPN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[9];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[9] = [fv];
      }
    }
    return this;
  }

  /** IN2.9 - Military Sponsor Name */
  get_in2_9_militarySponsorName(): XPN[] | undefined {
    const val = this.seg.fields[9];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXPN(v)).filter((v): v is XPN => v !== undefined);
  }

  /** IN2.10 - Military ID Number */
  set_in2_10_militaryIdNumber(value: string | null | undefined): this {
    if (value != null) this.seg.fields[10] = value;
    return this;
  }

  /** IN2.10 - Military ID Number */
  get_in2_10_militaryIdNumber(): string | undefined {
    const val = this.seg.fields[10];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN2.11 - Dependent Of Military Recipient */
  set_in2_11_dependentOfMilitaryRecipient(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[11] = fv;
    return this;
  }

  /** IN2.11 - Dependent Of Military Recipient */
  get_in2_11_dependentOfMilitaryRecipient(): CE | undefined {
    return fromCE(this.seg.fields[11]);
  }

  /** IN2.12 - Military Organization */
  set_in2_12_militaryOrganization(value: string | null | undefined): this {
    if (value != null) this.seg.fields[12] = value;
    return this;
  }

  /** IN2.12 - Military Organization */
  get_in2_12_militaryOrganization(): string | undefined {
    const val = this.seg.fields[12];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN2.13 - Military Station */
  set_in2_13_militaryStation(value: string | null | undefined): this {
    if (value != null) this.seg.fields[13] = value;
    return this;
  }

  /** IN2.13 - Military Station */
  get_in2_13_militaryStation(): string | undefined {
    const val = this.seg.fields[13];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN2.14 - Military Service */
  set_in2_14_militaryService(value: string | null | undefined): this {
    if (value != null) this.seg.fields[14] = value;
    return this;
  }

  /** IN2.14 - Military Service */
  get_in2_14_militaryService(): string | undefined {
    const val = this.seg.fields[14];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN2.15 - Military Rank/Grade */
  set_in2_15_militaryRankGrade(value: string | null | undefined): this {
    if (value != null) this.seg.fields[15] = value;
    return this;
  }

  /** IN2.15 - Military Rank/Grade */
  get_in2_15_militaryRankGrade(): string | undefined {
    const val = this.seg.fields[15];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN2.16 - Military Status */
  set_in2_16_militaryStatus(value: string | null | undefined): this {
    if (value != null) this.seg.fields[16] = value;
    return this;
  }

  /** IN2.16 - Military Status */
  get_in2_16_militaryStatus(): string | undefined {
    const val = this.seg.fields[16];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN2.17 - Military Retire Date */
  set_in2_17_militaryRetireDate(value: string | null | undefined): this {
    if (value != null) this.seg.fields[17] = value;
    return this;
  }

  /** IN2.17 - Military Retire Date */
  get_in2_17_militaryRetireDate(): string | undefined {
    const val = this.seg.fields[17];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN2.18 - Military Non-Avail Cert On File */
  set_in2_18_militaryNonAvailCertOnFile(value: string | null | undefined): this {
    if (value != null) this.seg.fields[18] = value;
    return this;
  }

  /** IN2.18 - Military Non-Avail Cert On File */
  get_in2_18_militaryNonAvailCertOnFile(): string | undefined {
    const val = this.seg.fields[18];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN2.19 - Baby Coverage */
  set_in2_19_babyCoverage(value: string | null | undefined): this {
    if (value != null) this.seg.fields[19] = value;
    return this;
  }

  /** IN2.19 - Baby Coverage */
  get_in2_19_babyCoverage(): string | undefined {
    const val = this.seg.fields[19];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN2.20 - Combine Baby Bill */
  set_in2_20_combineBabyBill(value: string | null | undefined): this {
    if (value != null) this.seg.fields[20] = value;
    return this;
  }

  /** IN2.20 - Combine Baby Bill */
  get_in2_20_combineBabyBill(): string | undefined {
    const val = this.seg.fields[20];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN2.21 - Blood Deductible */
  set_in2_21_bloodDeductible(value: string | null | undefined): this {
    if (value != null) this.seg.fields[21] = value;
    return this;
  }

  /** IN2.21 - Blood Deductible */
  get_in2_21_bloodDeductible(): string | undefined {
    const val = this.seg.fields[21];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN2.22 - Special Coverage Approval Name (set all values) */
  set_in2_22_specialCoverageApprovalName(values: XPN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[22] = arr;
    return this;
  }

  /** IN2.22 - Special Coverage Approval Name (add single value) */
  add_in2_22_specialCoverageApprovalName(value: XPN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[22];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[22] = [fv];
      }
    }
    return this;
  }

  /** IN2.22 - Special Coverage Approval Name */
  get_in2_22_specialCoverageApprovalName(): XPN[] | undefined {
    const val = this.seg.fields[22];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXPN(v)).filter((v): v is XPN => v !== undefined);
  }

  /** IN2.23 - Special Coverage Approval Title */
  set_in2_23_specialCoverageApprovalTitle(value: string | null | undefined): this {
    if (value != null) this.seg.fields[23] = value;
    return this;
  }

  /** IN2.23 - Special Coverage Approval Title */
  get_in2_23_specialCoverageApprovalTitle(): string | undefined {
    const val = this.seg.fields[23];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN2.24 - Non-Covered Insurance Code */
  set_in2_24_nonCoveredInsuranceCode(value: string | null | undefined): this {
    if (value != null) this.seg.fields[24] = value;
    return this;
  }

  /** IN2.24 - Non-Covered Insurance Code */
  get_in2_24_nonCoveredInsuranceCode(): string | undefined {
    const val = this.seg.fields[24];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN2.25 - Payor ID (set all values) */
  set_in2_25_payorId(values: CX[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[25] = arr;
    return this;
  }

  /** IN2.25 - Payor ID (add single value) */
  add_in2_25_payorId(value: CX | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[25];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[25] = [fv];
      }
    }
    return this;
  }

  /** IN2.25 - Payor ID */
  get_in2_25_payorId(): CX[] | undefined {
    const val = this.seg.fields[25];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromCX(v)).filter((v): v is CX => v !== undefined);
  }

  /** IN2.26 - Payor Subscriber ID (set all values) */
  set_in2_26_payorSubscriberId(values: CX[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[26] = arr;
    return this;
  }

  /** IN2.26 - Payor Subscriber ID (add single value) */
  add_in2_26_payorSubscriberId(value: CX | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[26];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[26] = [fv];
      }
    }
    return this;
  }

  /** IN2.26 - Payor Subscriber ID */
  get_in2_26_payorSubscriberId(): CX[] | undefined {
    const val = this.seg.fields[26];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromCX(v)).filter((v): v is CX => v !== undefined);
  }

  /** IN2.27 - Eligibility Source */
  set_in2_27_eligibilitySource(value: string | null | undefined): this {
    if (value != null) this.seg.fields[27] = value;
    return this;
  }

  /** IN2.27 - Eligibility Source */
  get_in2_27_eligibilitySource(): string | undefined {
    const val = this.seg.fields[27];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN2.28 - Room Coverage Type/Amount (set all values) */
  set_in2_28_roomCoverageTypeAmount(values: RMC[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[28] = arr;
    return this;
  }

  /** IN2.28 - Room Coverage Type/Amount (add single value) */
  add_in2_28_roomCoverageTypeAmount(value: RMC | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[28];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[28] = [fv];
      }
    }
    return this;
  }

  /** IN2.28 - Room Coverage Type/Amount */
  get_in2_28_roomCoverageTypeAmount(): RMC[] | undefined {
    const val = this.seg.fields[28];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromRMC(v)).filter((v): v is RMC => v !== undefined);
  }

  /** IN2.29 - Policy Type/Amount (set all values) */
  set_in2_29_policyTypeAmount(values: PTA[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[29] = arr;
    return this;
  }

  /** IN2.29 - Policy Type/Amount (add single value) */
  add_in2_29_policyTypeAmount(value: PTA | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[29];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[29] = [fv];
      }
    }
    return this;
  }

  /** IN2.29 - Policy Type/Amount */
  get_in2_29_policyTypeAmount(): PTA[] | undefined {
    const val = this.seg.fields[29];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromPTA(v)).filter((v): v is PTA => v !== undefined);
  }

  /** IN2.30 - Daily Deductible */
  set_in2_30_dailyDeductible(value: DDI | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[30] = fv;
    return this;
  }

  /** IN2.30 - Daily Deductible */
  get_in2_30_dailyDeductible(): DDI | undefined {
    return fromDDI(this.seg.fields[30]);
  }

  /** IN2.31 - Living Dependency */
  set_in2_31_livingDependency(value: string | null | undefined): this {
    if (value != null) this.seg.fields[31] = value;
    return this;
  }

  /** IN2.31 - Living Dependency */
  get_in2_31_livingDependency(): string | undefined {
    const val = this.seg.fields[31];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN2.32 - Ambulatory Status */
  set_in2_32_ambulatoryStatus(value: string | null | undefined): this {
    if (value != null) this.seg.fields[32] = value;
    return this;
  }

  /** IN2.32 - Ambulatory Status */
  get_in2_32_ambulatoryStatus(): string | undefined {
    const val = this.seg.fields[32];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN2.33 - Citizenship (set all values) */
  set_in2_33_citizenship(values: CE[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[33] = arr;
    return this;
  }

  /** IN2.33 - Citizenship (add single value) */
  add_in2_33_citizenship(value: CE | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[33];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[33] = [fv];
      }
    }
    return this;
  }

  /** IN2.33 - Citizenship */
  get_in2_33_citizenship(): CE[] | undefined {
    const val = this.seg.fields[33];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromCE(v)).filter((v): v is CE => v !== undefined);
  }

  /** IN2.34 - Primary Language */
  set_in2_34_language(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[34] = fv;
    return this;
  }

  /** IN2.34 - Primary Language */
  get_in2_34_language(): CE | undefined {
    return fromCE(this.seg.fields[34]);
  }

  /** IN2.35 - Living Arrangement */
  set_in2_35_livingArrangement(value: string | null | undefined): this {
    if (value != null) this.seg.fields[35] = value;
    return this;
  }

  /** IN2.35 - Living Arrangement */
  get_in2_35_livingArrangement(): string | undefined {
    const val = this.seg.fields[35];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN2.36 - Publicity Code */
  set_in2_36_publicityCode(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[36] = fv;
    return this;
  }

  /** IN2.36 - Publicity Code */
  get_in2_36_publicityCode(): CE | undefined {
    return fromCE(this.seg.fields[36]);
  }

  /** IN2.37 - Protection Indicator */
  set_in2_37_protectionIndicator(value: string | null | undefined): this {
    if (value != null) this.seg.fields[37] = value;
    return this;
  }

  /** IN2.37 - Protection Indicator */
  get_in2_37_protectionIndicator(): string | undefined {
    const val = this.seg.fields[37];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN2.38 - Student Indicator */
  set_in2_38_student(value: string | null | undefined): this {
    if (value != null) this.seg.fields[38] = value;
    return this;
  }

  /** IN2.38 - Student Indicator */
  get_in2_38_student(): string | undefined {
    const val = this.seg.fields[38];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN2.39 - Religion */
  set_in2_39_religion(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[39] = fv;
    return this;
  }

  /** IN2.39 - Religion */
  get_in2_39_religion(): CE | undefined {
    return fromCE(this.seg.fields[39]);
  }

  /** IN2.40 - Mother's Maiden Name (set all values) */
  set_in2_40_mothersMaidenName(values: XPN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[40] = arr;
    return this;
  }

  /** IN2.40 - Mother's Maiden Name (add single value) */
  add_in2_40_mothersMaidenName(value: XPN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[40];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[40] = [fv];
      }
    }
    return this;
  }

  /** IN2.40 - Mother's Maiden Name */
  get_in2_40_mothersMaidenName(): XPN[] | undefined {
    const val = this.seg.fields[40];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXPN(v)).filter((v): v is XPN => v !== undefined);
  }

  /** IN2.41 - Nationality */
  set_in2_41_nationality(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[41] = fv;
    return this;
  }

  /** IN2.41 - Nationality */
  get_in2_41_nationality(): CE | undefined {
    return fromCE(this.seg.fields[41]);
  }

  /** IN2.42 - Ethnic Group (set all values) */
  set_in2_42_ethnicity(values: CE[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[42] = arr;
    return this;
  }

  /** IN2.42 - Ethnic Group (add single value) */
  add_in2_42_ethnicity(value: CE | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[42];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[42] = [fv];
      }
    }
    return this;
  }

  /** IN2.42 - Ethnic Group */
  get_in2_42_ethnicity(): CE[] | undefined {
    const val = this.seg.fields[42];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromCE(v)).filter((v): v is CE => v !== undefined);
  }

  /** IN2.43 - Marital Status (set all values) */
  set_in2_43_maritalStatus(values: CE[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[43] = arr;
    return this;
  }

  /** IN2.43 - Marital Status (add single value) */
  add_in2_43_maritalStatus(value: CE | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[43];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[43] = [fv];
      }
    }
    return this;
  }

  /** IN2.43 - Marital Status */
  get_in2_43_maritalStatus(): CE[] | undefined {
    const val = this.seg.fields[43];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromCE(v)).filter((v): v is CE => v !== undefined);
  }

  /** IN2.44 - Insured's Employment Start Date */
  set_in2_44_insuredsEmploymentStartDate(value: string | null | undefined): this {
    if (value != null) this.seg.fields[44] = value;
    return this;
  }

  /** IN2.44 - Insured's Employment Start Date */
  get_in2_44_insuredsEmploymentStartDate(): string | undefined {
    const val = this.seg.fields[44];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN2.45 - Employment Stop Date */
  set_in2_45_employmentEnd(value: string | null | undefined): this {
    if (value != null) this.seg.fields[45] = value;
    return this;
  }

  /** IN2.45 - Employment Stop Date */
  get_in2_45_employmentEnd(): string | undefined {
    const val = this.seg.fields[45];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN2.46 - Job Title */
  set_in2_46_jobTitle(value: string | null | undefined): this {
    if (value != null) this.seg.fields[46] = value;
    return this;
  }

  /** IN2.46 - Job Title */
  get_in2_46_jobTitle(): string | undefined {
    const val = this.seg.fields[46];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN2.47 - Job Code/Class */
  set_in2_47_jobCodeClass(value: JCC | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[47] = fv;
    return this;
  }

  /** IN2.47 - Job Code/Class */
  get_in2_47_jobCodeClass(): JCC | undefined {
    return fromJCC(this.seg.fields[47]);
  }

  /** IN2.48 - Job Status */
  set_in2_48_jobStatus(value: string | null | undefined): this {
    if (value != null) this.seg.fields[48] = value;
    return this;
  }

  /** IN2.48 - Job Status */
  get_in2_48_jobStatus(): string | undefined {
    const val = this.seg.fields[48];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN2.49 - Employer Contact Person Name (set all values) */
  set_in2_49_employerContactPersonName(values: XPN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[49] = arr;
    return this;
  }

  /** IN2.49 - Employer Contact Person Name (add single value) */
  add_in2_49_employerContactPersonName(value: XPN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[49];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[49] = [fv];
      }
    }
    return this;
  }

  /** IN2.49 - Employer Contact Person Name */
  get_in2_49_employerContactPersonName(): XPN[] | undefined {
    const val = this.seg.fields[49];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXPN(v)).filter((v): v is XPN => v !== undefined);
  }

  /** IN2.50 - Employer Contact Person Phone Number (set all values) */
  set_in2_50_employerContactPhone(values: XTN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[50] = arr;
    return this;
  }

  /** IN2.50 - Employer Contact Person Phone Number (add single value) */
  add_in2_50_employerContactPhone(value: XTN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[50];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[50] = [fv];
      }
    }
    return this;
  }

  /** IN2.50 - Employer Contact Person Phone Number */
  get_in2_50_employerContactPhone(): XTN[] | undefined {
    const val = this.seg.fields[50];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXTN(v)).filter((v): v is XTN => v !== undefined);
  }

  /** IN2.51 - Employer Contact Reason */
  set_in2_51_employerContactReason(value: string | null | undefined): this {
    if (value != null) this.seg.fields[51] = value;
    return this;
  }

  /** IN2.51 - Employer Contact Reason */
  get_in2_51_employerContactReason(): string | undefined {
    const val = this.seg.fields[51];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN2.52 - Insured's Contact Person's Name (set all values) */
  set_in2_52_insuredsContactPersonsName(values: XPN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[52] = arr;
    return this;
  }

  /** IN2.52 - Insured's Contact Person's Name (add single value) */
  add_in2_52_insuredsContactPersonsName(value: XPN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[52];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[52] = [fv];
      }
    }
    return this;
  }

  /** IN2.52 - Insured's Contact Person's Name */
  get_in2_52_insuredsContactPersonsName(): XPN[] | undefined {
    const val = this.seg.fields[52];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXPN(v)).filter((v): v is XPN => v !== undefined);
  }

  /** IN2.53 - Insured's Contact Person Phone Number (set all values) */
  set_in2_53_insuredContactPhone(values: XTN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[53] = arr;
    return this;
  }

  /** IN2.53 - Insured's Contact Person Phone Number (add single value) */
  add_in2_53_insuredContactPhone(value: XTN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[53];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[53] = [fv];
      }
    }
    return this;
  }

  /** IN2.53 - Insured's Contact Person Phone Number */
  get_in2_53_insuredContactPhone(): XTN[] | undefined {
    const val = this.seg.fields[53];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXTN(v)).filter((v): v is XTN => v !== undefined);
  }

  /** IN2.54 - Insured's Contact Person Reason */
  set_in2_54_insuredsContactPersonReason(value: string | null | undefined): this {
    if (value != null) this.seg.fields[54] = value;
    return this;
  }

  /** IN2.54 - Insured's Contact Person Reason */
  get_in2_54_insuredsContactPersonReason(): string | undefined {
    const val = this.seg.fields[54];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN2.55 - Relationship to the Patient Start Date */
  set_in2_55_relationshipToThePatientStartDate(value: string | null | undefined): this {
    if (value != null) this.seg.fields[55] = value;
    return this;
  }

  /** IN2.55 - Relationship to the Patient Start Date */
  get_in2_55_relationshipToThePatientStartDate(): string | undefined {
    const val = this.seg.fields[55];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN2.56 - Relationship to the Patient Stop Date */
  set_in2_56_relationshipToThePatientStopDate(value: string | null | undefined): this {
    if (value != null) this.seg.fields[56] = value;
    return this;
  }

  /** IN2.56 - Relationship to the Patient Stop Date */
  get_in2_56_relationshipToThePatientStopDate(): string | undefined {
    const val = this.seg.fields[56];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN2.57 - Insurance Co. Contact Reason */
  set_in2_57_insuranceCoContactReason(value: string | null | undefined): this {
    if (value != null) this.seg.fields[57] = value;
    return this;
  }

  /** IN2.57 - Insurance Co. Contact Reason */
  get_in2_57_insuranceCoContactReason(): string | undefined {
    const val = this.seg.fields[57];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN2.58 - Insurance Co Contact Phone Number */
  set_in2_58_insuranceContactPhone(value: XTN | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[58] = fv;
    return this;
  }

  /** IN2.58 - Insurance Co Contact Phone Number */
  get_in2_58_insuranceContactPhone(): XTN | undefined {
    return fromXTN(this.seg.fields[58]);
  }

  /** IN2.59 - Policy Scope */
  set_in2_59_policyScope(value: string | null | undefined): this {
    if (value != null) this.seg.fields[59] = value;
    return this;
  }

  /** IN2.59 - Policy Scope */
  get_in2_59_policyScope(): string | undefined {
    const val = this.seg.fields[59];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN2.60 - Policy Source */
  set_in2_60_policySource(value: string | null | undefined): this {
    if (value != null) this.seg.fields[60] = value;
    return this;
  }

  /** IN2.60 - Policy Source */
  get_in2_60_policySource(): string | undefined {
    const val = this.seg.fields[60];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN2.61 - Patient Member Number */
  set_in2_61_memberNumber(value: CX | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[61] = fv;
    return this;
  }

  /** IN2.61 - Patient Member Number */
  get_in2_61_memberNumber(): CX | undefined {
    return fromCX(this.seg.fields[61]);
  }

  /** IN2.62 - Guarantor's Relationship to Insured */
  set_in2_62_guarantorsRelationshipToInsured(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[62] = fv;
    return this;
  }

  /** IN2.62 - Guarantor's Relationship to Insured */
  get_in2_62_guarantorsRelationshipToInsured(): CE | undefined {
    return fromCE(this.seg.fields[62]);
  }

  /** IN2.63 - Insured's Phone Number - Home (set all values) */
  set_in2_63_insuredHomePhone(values: XTN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[63] = arr;
    return this;
  }

  /** IN2.63 - Insured's Phone Number - Home (add single value) */
  add_in2_63_insuredHomePhone(value: XTN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[63];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[63] = [fv];
      }
    }
    return this;
  }

  /** IN2.63 - Insured's Phone Number - Home */
  get_in2_63_insuredHomePhone(): XTN[] | undefined {
    const val = this.seg.fields[63];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXTN(v)).filter((v): v is XTN => v !== undefined);
  }

  /** IN2.64 - Insured's Employer Phone Number (set all values) */
  set_in2_64_insuredEmployerPhone(values: XTN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[64] = arr;
    return this;
  }

  /** IN2.64 - Insured's Employer Phone Number (add single value) */
  add_in2_64_insuredEmployerPhone(value: XTN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[64];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[64] = [fv];
      }
    }
    return this;
  }

  /** IN2.64 - Insured's Employer Phone Number */
  get_in2_64_insuredEmployerPhone(): XTN[] | undefined {
    const val = this.seg.fields[64];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXTN(v)).filter((v): v is XTN => v !== undefined);
  }

  /** IN2.65 - Military Handicapped Program */
  set_in2_65_militaryHandicappedProgram(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[65] = fv;
    return this;
  }

  /** IN2.65 - Military Handicapped Program */
  get_in2_65_militaryHandicappedProgram(): CE | undefined {
    return fromCE(this.seg.fields[65]);
  }

  /** IN2.66 - Suspend Flag */
  set_in2_66_suspendFlag(value: string | null | undefined): this {
    if (value != null) this.seg.fields[66] = value;
    return this;
  }

  /** IN2.66 - Suspend Flag */
  get_in2_66_suspendFlag(): string | undefined {
    const val = this.seg.fields[66];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN2.67 - Copay Limit Flag */
  set_in2_67_copayLimitFlag(value: string | null | undefined): this {
    if (value != null) this.seg.fields[67] = value;
    return this;
  }

  /** IN2.67 - Copay Limit Flag */
  get_in2_67_copayLimitFlag(): string | undefined {
    const val = this.seg.fields[67];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN2.68 - Stoploss Limit Flag */
  set_in2_68_stoplossLimitFlag(value: string | null | undefined): this {
    if (value != null) this.seg.fields[68] = value;
    return this;
  }

  /** IN2.68 - Stoploss Limit Flag */
  get_in2_68_stoplossLimitFlag(): string | undefined {
    const val = this.seg.fields[68];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN2.69 - Insured Organization Name and ID (set all values) */
  set_in2_69_insuredOrganizationNameAndId(values: XON[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[69] = arr;
    return this;
  }

  /** IN2.69 - Insured Organization Name and ID (add single value) */
  add_in2_69_insuredOrganizationNameAndId(value: XON | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[69];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[69] = [fv];
      }
    }
    return this;
  }

  /** IN2.69 - Insured Organization Name and ID */
  get_in2_69_insuredOrganizationNameAndId(): XON[] | undefined {
    const val = this.seg.fields[69];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXON(v)).filter((v): v is XON => v !== undefined);
  }

  /** IN2.70 - Insured Employer Organization Name and ID (set all values) */
  set_in2_70_insuredEmployerOrganizationNameAndId(values: XON[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[70] = arr;
    return this;
  }

  /** IN2.70 - Insured Employer Organization Name and ID (add single value) */
  add_in2_70_insuredEmployerOrganizationNameAndId(value: XON | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[70];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[70] = [fv];
      }
    }
    return this;
  }

  /** IN2.70 - Insured Employer Organization Name and ID */
  get_in2_70_insuredEmployerOrganizationNameAndId(): XON[] | undefined {
    const val = this.seg.fields[70];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXON(v)).filter((v): v is XON => v !== undefined);
  }

  /** IN2.71 - Race (set all values) */
  set_in2_71_race(values: CE[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[71] = arr;
    return this;
  }

  /** IN2.71 - Race (add single value) */
  add_in2_71_race(value: CE | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[71];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[71] = [fv];
      }
    }
    return this;
  }

  /** IN2.71 - Race */
  get_in2_71_race(): CE[] | undefined {
    const val = this.seg.fields[71];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromCE(v)).filter((v): v is CE => v !== undefined);
  }

  /** IN2.72 - CMS Patient's Relationship to Insured */
  set_in2_72_cmsPatientsRelationshipToInsured(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[72] = fv;
    return this;
  }

  /** IN2.72 - CMS Patient's Relationship to Insured */
  get_in2_72_cmsPatientsRelationshipToInsured(): CE | undefined {
    return fromCE(this.seg.fields[72]);
  }

  build(): HL7v2Segment {
    return this.seg;
  }
}

// ====== IN3 Segment ======

export class IN3Builder {
  private seg: HL7v2Segment = { segment: "IN3", fields: {} };

  /** IN3.1 - Set ID - IN3 */
  set_in3_1_setIdIn3(value: string | null | undefined): this {
    if (value != null) this.seg.fields[1] = value;
    return this;
  }

  /** IN3.1 - Set ID - IN3 */
  get_in3_1_setIdIn3(): string | undefined {
    const val = this.seg.fields[1];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN3.2 - Certification Number */
  set_in3_2_certificationNumber(value: CX | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[2] = fv;
    return this;
  }

  /** IN3.2 - Certification Number */
  get_in3_2_certificationNumber(): CX | undefined {
    return fromCX(this.seg.fields[2]);
  }

  /** IN3.3 - Certified By (set all values) */
  set_in3_3_certifiedBy(values: XCN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[3] = arr;
    return this;
  }

  /** IN3.3 - Certified By (add single value) */
  add_in3_3_certifiedBy(value: XCN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[3];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[3] = [fv];
      }
    }
    return this;
  }

  /** IN3.3 - Certified By */
  get_in3_3_certifiedBy(): XCN[] | undefined {
    const val = this.seg.fields[3];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXCN(v)).filter((v): v is XCN => v !== undefined);
  }

  /** IN3.4 - Certification Required */
  set_in3_4_required(value: string | null | undefined): this {
    if (value != null) this.seg.fields[4] = value;
    return this;
  }

  /** IN3.4 - Certification Required */
  get_in3_4_required(): string | undefined {
    const val = this.seg.fields[4];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN3.5 - Penalty */
  set_in3_5_penalty(value: MOP | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[5] = fv;
    return this;
  }

  /** IN3.5 - Penalty */
  get_in3_5_penalty(): MOP | undefined {
    return fromMOP(this.seg.fields[5]);
  }

  /** IN3.6 - Certification Date/Time */
  set_in3_6_certificationDateTime(value: string | null | undefined): this {
    if (value != null) this.seg.fields[6] = value;
    return this;
  }

  /** IN3.6 - Certification Date/Time */
  get_in3_6_certificationDateTime(): string | undefined {
    const val = this.seg.fields[6];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN3.7 - Certification Modify Date/Time */
  set_in3_7_certificationModifyDateTime(value: string | null | undefined): this {
    if (value != null) this.seg.fields[7] = value;
    return this;
  }

  /** IN3.7 - Certification Modify Date/Time */
  get_in3_7_certificationModifyDateTime(): string | undefined {
    const val = this.seg.fields[7];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN3.8 - Operator (set all values) */
  set_in3_8_operator(values: XCN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[8] = arr;
    return this;
  }

  /** IN3.8 - Operator (add single value) */
  add_in3_8_operator(value: XCN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[8];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[8] = [fv];
      }
    }
    return this;
  }

  /** IN3.8 - Operator */
  get_in3_8_operator(): XCN[] | undefined {
    const val = this.seg.fields[8];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXCN(v)).filter((v): v is XCN => v !== undefined);
  }

  /** IN3.9 - Certification Begin Date */
  set_in3_9_certificationBeginDate(value: string | null | undefined): this {
    if (value != null) this.seg.fields[9] = value;
    return this;
  }

  /** IN3.9 - Certification Begin Date */
  get_in3_9_certificationBeginDate(): string | undefined {
    const val = this.seg.fields[9];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN3.10 - Certification End Date */
  set_in3_10_certificationEndDate(value: string | null | undefined): this {
    if (value != null) this.seg.fields[10] = value;
    return this;
  }

  /** IN3.10 - Certification End Date */
  get_in3_10_certificationEndDate(): string | undefined {
    const val = this.seg.fields[10];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN3.11 - Days */
  set_in3_11_days(value: DTN | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[11] = fv;
    return this;
  }

  /** IN3.11 - Days */
  get_in3_11_days(): DTN | undefined {
    return fromDTN(this.seg.fields[11]);
  }

  /** IN3.12 - Non-Concur Code/Description */
  set_in3_12_nonConcurCodeDescription(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[12] = fv;
    return this;
  }

  /** IN3.12 - Non-Concur Code/Description */
  get_in3_12_nonConcurCodeDescription(): CE | undefined {
    return fromCE(this.seg.fields[12]);
  }

  /** IN3.13 - Non-Concur Effective Date/Time */
  set_in3_13_nonConcurEffectiveDateTime(value: string | null | undefined): this {
    if (value != null) this.seg.fields[13] = value;
    return this;
  }

  /** IN3.13 - Non-Concur Effective Date/Time */
  get_in3_13_nonConcurEffectiveDateTime(): string | undefined {
    const val = this.seg.fields[13];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN3.14 - Physician Reviewer (set all values) */
  set_in3_14_physicianReviewer(values: XCN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[14] = arr;
    return this;
  }

  /** IN3.14 - Physician Reviewer (add single value) */
  add_in3_14_physicianReviewer(value: XCN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[14];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[14] = [fv];
      }
    }
    return this;
  }

  /** IN3.14 - Physician Reviewer */
  get_in3_14_physicianReviewer(): XCN[] | undefined {
    const val = this.seg.fields[14];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXCN(v)).filter((v): v is XCN => v !== undefined);
  }

  /** IN3.15 - Certification Contact */
  set_in3_15_certificationContact(value: string | null | undefined): this {
    if (value != null) this.seg.fields[15] = value;
    return this;
  }

  /** IN3.15 - Certification Contact */
  get_in3_15_certificationContact(): string | undefined {
    const val = this.seg.fields[15];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN3.16 - Certification Contact Phone Number (set all values) */
  set_in3_16_certificationContactPhoneNumber(values: XTN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[16] = arr;
    return this;
  }

  /** IN3.16 - Certification Contact Phone Number (add single value) */
  add_in3_16_certificationContactPhoneNumber(value: XTN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[16];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[16] = [fv];
      }
    }
    return this;
  }

  /** IN3.16 - Certification Contact Phone Number */
  get_in3_16_certificationContactPhoneNumber(): XTN[] | undefined {
    const val = this.seg.fields[16];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXTN(v)).filter((v): v is XTN => v !== undefined);
  }

  /** IN3.17 - Appeal Reason */
  set_in3_17_appealReason(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[17] = fv;
    return this;
  }

  /** IN3.17 - Appeal Reason */
  get_in3_17_appealReason(): CE | undefined {
    return fromCE(this.seg.fields[17]);
  }

  /** IN3.18 - Certification Agency */
  set_in3_18_certificationAgency(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[18] = fv;
    return this;
  }

  /** IN3.18 - Certification Agency */
  get_in3_18_certificationAgency(): CE | undefined {
    return fromCE(this.seg.fields[18]);
  }

  /** IN3.19 - Certification Agency Phone Number (set all values) */
  set_in3_19_certificationAgencyPhoneNumber(values: XTN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[19] = arr;
    return this;
  }

  /** IN3.19 - Certification Agency Phone Number (add single value) */
  add_in3_19_certificationAgencyPhoneNumber(value: XTN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[19];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[19] = [fv];
      }
    }
    return this;
  }

  /** IN3.19 - Certification Agency Phone Number */
  get_in3_19_certificationAgencyPhoneNumber(): XTN[] | undefined {
    const val = this.seg.fields[19];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXTN(v)).filter((v): v is XTN => v !== undefined);
  }

  /** IN3.20 - Pre-Certification Requirement (set all values) */
  set_in3_20_preCertificationRequirement(values: ICD[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[20] = arr;
    return this;
  }

  /** IN3.20 - Pre-Certification Requirement (add single value) */
  add_in3_20_preCertificationRequirement(value: ICD | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[20];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[20] = [fv];
      }
    }
    return this;
  }

  /** IN3.20 - Pre-Certification Requirement */
  get_in3_20_preCertificationRequirement(): ICD[] | undefined {
    const val = this.seg.fields[20];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromICD(v)).filter((v): v is ICD => v !== undefined);
  }

  /** IN3.21 - Case Manager */
  set_in3_21_caseManager(value: string | null | undefined): this {
    if (value != null) this.seg.fields[21] = value;
    return this;
  }

  /** IN3.21 - Case Manager */
  get_in3_21_caseManager(): string | undefined {
    const val = this.seg.fields[21];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN3.22 - Second Opinion Date */
  set_in3_22_secondOpinionDate(value: string | null | undefined): this {
    if (value != null) this.seg.fields[22] = value;
    return this;
  }

  /** IN3.22 - Second Opinion Date */
  get_in3_22_secondOpinionDate(): string | undefined {
    const val = this.seg.fields[22];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN3.23 - Second Opinion Status */
  set_in3_23_secondOpinionStatus(value: string | null | undefined): this {
    if (value != null) this.seg.fields[23] = value;
    return this;
  }

  /** IN3.23 - Second Opinion Status */
  get_in3_23_secondOpinionStatus(): string | undefined {
    const val = this.seg.fields[23];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN3.24 - Second Opinion Documentation Received */
  set_in3_24_secondOpinionDocumentationReceived(value: string | null | undefined): this {
    if (value != null) this.seg.fields[24] = value;
    return this;
  }

  /** IN3.24 - Second Opinion Documentation Received */
  get_in3_24_secondOpinionDocumentationReceived(): string | undefined {
    const val = this.seg.fields[24];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** IN3.25 - Second Opinion Physician (set all values) */
  set_in3_25_secondOpinionPhysician(values: XCN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[25] = arr;
    return this;
  }

  /** IN3.25 - Second Opinion Physician (add single value) */
  add_in3_25_secondOpinionPhysician(value: XCN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[25];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[25] = [fv];
      }
    }
    return this;
  }

  /** IN3.25 - Second Opinion Physician */
  get_in3_25_secondOpinionPhysician(): XCN[] | undefined {
    const val = this.seg.fields[25];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXCN(v)).filter((v): v is XCN => v !== undefined);
  }

  build(): HL7v2Segment {
    return this.seg;
  }
}

// ====== MSH Segment ======

export class MSHBuilder {
  private seg: HL7v2Segment = { segment: "MSH", fields: {} };

  /** MSH.1 - Field Separator */
  set_msh_1_fieldSeparator(value: string | null | undefined): this {
    if (value != null) this.seg.fields[1] = value;
    return this;
  }

  /** MSH.1 - Field Separator */
  get_msh_1_fieldSeparator(): string | undefined {
    const val = this.seg.fields[1];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** MSH.2 - Encoding Characters */
  set_msh_2_encodingCharacters(value: string | null | undefined): this {
    if (value != null) this.seg.fields[2] = value;
    return this;
  }

  /** MSH.2 - Encoding Characters */
  get_msh_2_encodingCharacters(): string | undefined {
    const val = this.seg.fields[2];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** MSH.3 - Sending Application */
  set_msh_3_sendingApplication(value: HD | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[3] = fv;
    return this;
  }

  /** MSH.3 - Sending Application */
  get_msh_3_sendingApplication(): HD | undefined {
    return fromHD(this.seg.fields[3]);
  }

  /** MSH.4 - Sending Facility */
  set_msh_4_sendingFacility(value: HD | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[4] = fv;
    return this;
  }

  /** MSH.4 - Sending Facility */
  get_msh_4_sendingFacility(): HD | undefined {
    return fromHD(this.seg.fields[4]);
  }

  /** MSH.5 - Receiving Application */
  set_msh_5_receivingApplication(value: HD | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[5] = fv;
    return this;
  }

  /** MSH.5 - Receiving Application */
  get_msh_5_receivingApplication(): HD | undefined {
    return fromHD(this.seg.fields[5]);
  }

  /** MSH.6 - Receiving Facility */
  set_msh_6_receivingFacility(value: HD | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[6] = fv;
    return this;
  }

  /** MSH.6 - Receiving Facility */
  get_msh_6_receivingFacility(): HD | undefined {
    return fromHD(this.seg.fields[6]);
  }

  /** MSH.7 - Date/Time Of Message */
  set_msh_7_messageDateTime(value: string | null | undefined): this {
    if (value != null) this.seg.fields[7] = value;
    return this;
  }

  /** MSH.7 - Date/Time Of Message */
  get_msh_7_messageDateTime(): string | undefined {
    const val = this.seg.fields[7];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** MSH.8 - Security */
  set_msh_8_security(value: string | null | undefined): this {
    if (value != null) this.seg.fields[8] = value;
    return this;
  }

  /** MSH.8 - Security */
  get_msh_8_security(): string | undefined {
    const val = this.seg.fields[8];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** MSH.9 - Message Type */
  set_msh_9_messageType(value: MSG | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[9] = fv;
    return this;
  }

  /** MSH.9 - Message Type */
  get_msh_9_messageType(): MSG | undefined {
    return fromMSG(this.seg.fields[9]);
  }

  /** MSH.10 - Message Control ID */
  set_msh_10_messageControlId(value: string | null | undefined): this {
    if (value != null) this.seg.fields[10] = value;
    return this;
  }

  /** MSH.10 - Message Control ID */
  get_msh_10_messageControlId(): string | undefined {
    const val = this.seg.fields[10];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** MSH.11 - Processing ID */
  set_msh_11_processingId(value: PT | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[11] = fv;
    return this;
  }

  /** MSH.11 - Processing ID */
  get_msh_11_processingId(): PT | undefined {
    return fromPT(this.seg.fields[11]);
  }

  /** MSH.12 - Version ID */
  set_msh_12_version(value: VID | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[12] = fv;
    return this;
  }

  /** MSH.12 - Version ID */
  get_msh_12_version(): VID | undefined {
    return fromVID(this.seg.fields[12]);
  }

  /** MSH.13 - Sequence Number */
  set_msh_13_sequenceNumber(value: string | null | undefined): this {
    if (value != null) this.seg.fields[13] = value;
    return this;
  }

  /** MSH.13 - Sequence Number */
  get_msh_13_sequenceNumber(): string | undefined {
    const val = this.seg.fields[13];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** MSH.14 - Continuation Pointer */
  set_msh_14_continuationPointer(value: string | null | undefined): this {
    if (value != null) this.seg.fields[14] = value;
    return this;
  }

  /** MSH.14 - Continuation Pointer */
  get_msh_14_continuationPointer(): string | undefined {
    const val = this.seg.fields[14];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** MSH.15 - Accept Acknowledgment Type */
  set_msh_15_acceptAcknowledgmentType(value: string | null | undefined): this {
    if (value != null) this.seg.fields[15] = value;
    return this;
  }

  /** MSH.15 - Accept Acknowledgment Type */
  get_msh_15_acceptAcknowledgmentType(): string | undefined {
    const val = this.seg.fields[15];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** MSH.16 - Application Acknowledgment Type */
  set_msh_16_applicationAcknowledgmentType(value: string | null | undefined): this {
    if (value != null) this.seg.fields[16] = value;
    return this;
  }

  /** MSH.16 - Application Acknowledgment Type */
  get_msh_16_applicationAcknowledgmentType(): string | undefined {
    const val = this.seg.fields[16];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** MSH.17 - Country Code */
  set_msh_17_countryCode(value: string | null | undefined): this {
    if (value != null) this.seg.fields[17] = value;
    return this;
  }

  /** MSH.17 - Country Code */
  get_msh_17_countryCode(): string | undefined {
    const val = this.seg.fields[17];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** MSH.18 - Character Set */
  set_msh_18_characterSet(value: string | null | undefined): this {
    if (value != null) this.seg.fields[18] = value;
    return this;
  }

  /** MSH.18 - Character Set */
  get_msh_18_characterSet(): string | undefined {
    const val = this.seg.fields[18];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** MSH.19 - Principal Language Of Message */
  set_msh_19_principalLanguageOfMessage(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[19] = fv;
    return this;
  }

  /** MSH.19 - Principal Language Of Message */
  get_msh_19_principalLanguageOfMessage(): CE | undefined {
    return fromCE(this.seg.fields[19]);
  }

  /** MSH.20 - Alternate Character Set Handling Scheme */
  set_msh_20_alternateCharacterSetHandlingScheme(value: string | null | undefined): this {
    if (value != null) this.seg.fields[20] = value;
    return this;
  }

  /** MSH.20 - Alternate Character Set Handling Scheme */
  get_msh_20_alternateCharacterSetHandlingScheme(): string | undefined {
    const val = this.seg.fields[20];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** MSH.21 - Message Profile Identifier (set all values) */
  set_msh_21_messageProfileIdentifier(values: EI[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[21] = arr;
    return this;
  }

  /** MSH.21 - Message Profile Identifier (add single value) */
  add_msh_21_messageProfileIdentifier(value: EI | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[21];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[21] = [fv];
      }
    }
    return this;
  }

  /** MSH.21 - Message Profile Identifier */
  get_msh_21_messageProfileIdentifier(): EI[] | undefined {
    const val = this.seg.fields[21];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromEI(v)).filter((v): v is EI => v !== undefined);
  }

  build(): HL7v2Segment {
    return this.seg;
  }
}

// ====== NK1 Segment ======

export class NK1Builder {
  private seg: HL7v2Segment = { segment: "NK1", fields: {} };

  /** NK1.1 - Set ID - NK1 */
  set_nk1_1_setIdNk1(value: string | null | undefined): this {
    if (value != null) this.seg.fields[1] = value;
    return this;
  }

  /** NK1.1 - Set ID - NK1 */
  get_nk1_1_setIdNk1(): string | undefined {
    const val = this.seg.fields[1];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** NK1.2 - Name (set all values) */
  set_nk1_2_name(values: XPN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[2] = arr;
    return this;
  }

  /** NK1.2 - Name (add single value) */
  add_nk1_2_name(value: XPN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[2];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[2] = [fv];
      }
    }
    return this;
  }

  /** NK1.2 - Name */
  get_nk1_2_name(): XPN[] | undefined {
    const val = this.seg.fields[2];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXPN(v)).filter((v): v is XPN => v !== undefined);
  }

  /** NK1.3 - Relationship */
  set_nk1_3_relationship(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[3] = fv;
    return this;
  }

  /** NK1.3 - Relationship */
  get_nk1_3_relationship(): CE | undefined {
    return fromCE(this.seg.fields[3]);
  }

  /** NK1.4 - Address (set all values) */
  set_nk1_4_text(values: XAD[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[4] = arr;
    return this;
  }

  /** NK1.4 - Address (add single value) */
  add_nk1_4_text(value: XAD | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[4];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[4] = [fv];
      }
    }
    return this;
  }

  /** NK1.4 - Address */
  get_nk1_4_text(): XAD[] | undefined {
    const val = this.seg.fields[4];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXAD(v)).filter((v): v is XAD => v !== undefined);
  }

  /** NK1.5 - Phone Number (set all values) */
  set_nk1_5_phone(values: XTN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[5] = arr;
    return this;
  }

  /** NK1.5 - Phone Number (add single value) */
  add_nk1_5_phone(value: XTN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[5];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[5] = [fv];
      }
    }
    return this;
  }

  /** NK1.5 - Phone Number */
  get_nk1_5_phone(): XTN[] | undefined {
    const val = this.seg.fields[5];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXTN(v)).filter((v): v is XTN => v !== undefined);
  }

  /** NK1.6 - Business Phone Number (set all values) */
  set_nk1_6_businessPhone(values: XTN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[6] = arr;
    return this;
  }

  /** NK1.6 - Business Phone Number (add single value) */
  add_nk1_6_businessPhone(value: XTN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[6];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[6] = [fv];
      }
    }
    return this;
  }

  /** NK1.6 - Business Phone Number */
  get_nk1_6_businessPhone(): XTN[] | undefined {
    const val = this.seg.fields[6];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXTN(v)).filter((v): v is XTN => v !== undefined);
  }

  /** NK1.7 - Contact Role */
  set_nk1_7_contactRole(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[7] = fv;
    return this;
  }

  /** NK1.7 - Contact Role */
  get_nk1_7_contactRole(): CE | undefined {
    return fromCE(this.seg.fields[7]);
  }

  /** NK1.8 - Start Date */
  set_nk1_8_startDate(value: string | null | undefined): this {
    if (value != null) this.seg.fields[8] = value;
    return this;
  }

  /** NK1.8 - Start Date */
  get_nk1_8_startDate(): string | undefined {
    const val = this.seg.fields[8];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** NK1.9 - End Date */
  set_nk1_9_endDate(value: string | null | undefined): this {
    if (value != null) this.seg.fields[9] = value;
    return this;
  }

  /** NK1.9 - End Date */
  get_nk1_9_endDate(): string | undefined {
    const val = this.seg.fields[9];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** NK1.10 - Next of Kin / Associated Parties Job Title */
  set_nk1_10_nextOfKinAssociatedPartiesJobTitle(value: string | null | undefined): this {
    if (value != null) this.seg.fields[10] = value;
    return this;
  }

  /** NK1.10 - Next of Kin / Associated Parties Job Title */
  get_nk1_10_nextOfKinAssociatedPartiesJobTitle(): string | undefined {
    const val = this.seg.fields[10];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** NK1.11 - Next of Kin / Associated Parties Job Code/Class */
  set_nk1_11_nextOfKinAssociatedPartiesJobCodeClass(value: JCC | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[11] = fv;
    return this;
  }

  /** NK1.11 - Next of Kin / Associated Parties Job Code/Class */
  get_nk1_11_nextOfKinAssociatedPartiesJobCodeClass(): JCC | undefined {
    return fromJCC(this.seg.fields[11]);
  }

  /** NK1.12 - Next of Kin / Associated Parties Employee Number */
  set_nk1_12_nextOfKinAssociatedPartiesEmployeeNumber(value: CX | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[12] = fv;
    return this;
  }

  /** NK1.12 - Next of Kin / Associated Parties Employee Number */
  get_nk1_12_nextOfKinAssociatedPartiesEmployeeNumber(): CX | undefined {
    return fromCX(this.seg.fields[12]);
  }

  /** NK1.13 - Organization Name - NK1 (set all values) */
  set_nk1_13_organizationNameNk1(values: XON[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[13] = arr;
    return this;
  }

  /** NK1.13 - Organization Name - NK1 (add single value) */
  add_nk1_13_organizationNameNk1(value: XON | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[13];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[13] = [fv];
      }
    }
    return this;
  }

  /** NK1.13 - Organization Name - NK1 */
  get_nk1_13_organizationNameNk1(): XON[] | undefined {
    const val = this.seg.fields[13];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXON(v)).filter((v): v is XON => v !== undefined);
  }

  /** NK1.14 - Marital Status */
  set_nk1_14_maritalStatus(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[14] = fv;
    return this;
  }

  /** NK1.14 - Marital Status */
  get_nk1_14_maritalStatus(): CE | undefined {
    return fromCE(this.seg.fields[14]);
  }

  /** NK1.15 - Administrative Sex */
  set_nk1_15_gender(value: string | null | undefined): this {
    if (value != null) this.seg.fields[15] = value;
    return this;
  }

  /** NK1.15 - Administrative Sex */
  get_nk1_15_gender(): string | undefined {
    const val = this.seg.fields[15];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** NK1.16 - Date/Time of Birth */
  set_nk1_16_birthDate(value: string | null | undefined): this {
    if (value != null) this.seg.fields[16] = value;
    return this;
  }

  /** NK1.16 - Date/Time of Birth */
  get_nk1_16_birthDate(): string | undefined {
    const val = this.seg.fields[16];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** NK1.17 - Living Dependency */
  set_nk1_17_livingDependency(value: string | null | undefined): this {
    if (value != null) this.seg.fields[17] = value;
    return this;
  }

  /** NK1.17 - Living Dependency */
  get_nk1_17_livingDependency(): string | undefined {
    const val = this.seg.fields[17];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** NK1.18 - Ambulatory Status */
  set_nk1_18_ambulatoryStatus(value: string | null | undefined): this {
    if (value != null) this.seg.fields[18] = value;
    return this;
  }

  /** NK1.18 - Ambulatory Status */
  get_nk1_18_ambulatoryStatus(): string | undefined {
    const val = this.seg.fields[18];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** NK1.19 - Citizenship (set all values) */
  set_nk1_19_citizenship(values: CE[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[19] = arr;
    return this;
  }

  /** NK1.19 - Citizenship (add single value) */
  add_nk1_19_citizenship(value: CE | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[19];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[19] = [fv];
      }
    }
    return this;
  }

  /** NK1.19 - Citizenship */
  get_nk1_19_citizenship(): CE[] | undefined {
    const val = this.seg.fields[19];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromCE(v)).filter((v): v is CE => v !== undefined);
  }

  /** NK1.20 - Primary Language */
  set_nk1_20_language(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[20] = fv;
    return this;
  }

  /** NK1.20 - Primary Language */
  get_nk1_20_language(): CE | undefined {
    return fromCE(this.seg.fields[20]);
  }

  /** NK1.21 - Living Arrangement */
  set_nk1_21_livingArrangement(value: string | null | undefined): this {
    if (value != null) this.seg.fields[21] = value;
    return this;
  }

  /** NK1.21 - Living Arrangement */
  get_nk1_21_livingArrangement(): string | undefined {
    const val = this.seg.fields[21];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** NK1.22 - Publicity Code */
  set_nk1_22_publicityCode(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[22] = fv;
    return this;
  }

  /** NK1.22 - Publicity Code */
  get_nk1_22_publicityCode(): CE | undefined {
    return fromCE(this.seg.fields[22]);
  }

  /** NK1.23 - Protection Indicator */
  set_nk1_23_protectionIndicator(value: string | null | undefined): this {
    if (value != null) this.seg.fields[23] = value;
    return this;
  }

  /** NK1.23 - Protection Indicator */
  get_nk1_23_protectionIndicator(): string | undefined {
    const val = this.seg.fields[23];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** NK1.24 - Student Indicator */
  set_nk1_24_student(value: string | null | undefined): this {
    if (value != null) this.seg.fields[24] = value;
    return this;
  }

  /** NK1.24 - Student Indicator */
  get_nk1_24_student(): string | undefined {
    const val = this.seg.fields[24];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** NK1.25 - Religion */
  set_nk1_25_religion(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[25] = fv;
    return this;
  }

  /** NK1.25 - Religion */
  get_nk1_25_religion(): CE | undefined {
    return fromCE(this.seg.fields[25]);
  }

  /** NK1.26 - Mother's Maiden Name (set all values) */
  set_nk1_26_mothersMaidenName(values: XPN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[26] = arr;
    return this;
  }

  /** NK1.26 - Mother's Maiden Name (add single value) */
  add_nk1_26_mothersMaidenName(value: XPN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[26];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[26] = [fv];
      }
    }
    return this;
  }

  /** NK1.26 - Mother's Maiden Name */
  get_nk1_26_mothersMaidenName(): XPN[] | undefined {
    const val = this.seg.fields[26];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXPN(v)).filter((v): v is XPN => v !== undefined);
  }

  /** NK1.27 - Nationality */
  set_nk1_27_nationality(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[27] = fv;
    return this;
  }

  /** NK1.27 - Nationality */
  get_nk1_27_nationality(): CE | undefined {
    return fromCE(this.seg.fields[27]);
  }

  /** NK1.28 - Ethnic Group (set all values) */
  set_nk1_28_ethnicity(values: CE[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[28] = arr;
    return this;
  }

  /** NK1.28 - Ethnic Group (add single value) */
  add_nk1_28_ethnicity(value: CE | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[28];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[28] = [fv];
      }
    }
    return this;
  }

  /** NK1.28 - Ethnic Group */
  get_nk1_28_ethnicity(): CE[] | undefined {
    const val = this.seg.fields[28];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromCE(v)).filter((v): v is CE => v !== undefined);
  }

  /** NK1.29 - Contact Reason (set all values) */
  set_nk1_29_contactReason(values: CE[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[29] = arr;
    return this;
  }

  /** NK1.29 - Contact Reason (add single value) */
  add_nk1_29_contactReason(value: CE | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[29];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[29] = [fv];
      }
    }
    return this;
  }

  /** NK1.29 - Contact Reason */
  get_nk1_29_contactReason(): CE[] | undefined {
    const val = this.seg.fields[29];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromCE(v)).filter((v): v is CE => v !== undefined);
  }

  /** NK1.30 - Contact Person's Name (set all values) */
  set_nk1_30_contactPersonsName(values: XPN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[30] = arr;
    return this;
  }

  /** NK1.30 - Contact Person's Name (add single value) */
  add_nk1_30_contactPersonsName(value: XPN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[30];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[30] = [fv];
      }
    }
    return this;
  }

  /** NK1.30 - Contact Person's Name */
  get_nk1_30_contactPersonsName(): XPN[] | undefined {
    const val = this.seg.fields[30];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXPN(v)).filter((v): v is XPN => v !== undefined);
  }

  /** NK1.31 - Contact Person's Telephone Number (set all values) */
  set_nk1_31_contactPhone(values: XTN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[31] = arr;
    return this;
  }

  /** NK1.31 - Contact Person's Telephone Number (add single value) */
  add_nk1_31_contactPhone(value: XTN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[31];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[31] = [fv];
      }
    }
    return this;
  }

  /** NK1.31 - Contact Person's Telephone Number */
  get_nk1_31_contactPhone(): XTN[] | undefined {
    const val = this.seg.fields[31];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXTN(v)).filter((v): v is XTN => v !== undefined);
  }

  /** NK1.32 - Contact Person's Address (set all values) */
  set_nk1_32_contactPersonsAddress(values: XAD[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[32] = arr;
    return this;
  }

  /** NK1.32 - Contact Person's Address (add single value) */
  add_nk1_32_contactPersonsAddress(value: XAD | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[32];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[32] = [fv];
      }
    }
    return this;
  }

  /** NK1.32 - Contact Person's Address */
  get_nk1_32_contactPersonsAddress(): XAD[] | undefined {
    const val = this.seg.fields[32];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXAD(v)).filter((v): v is XAD => v !== undefined);
  }

  /** NK1.33 - Next of Kin/Associated Party's Identifiers (set all values) */
  set_nk1_33_nextOfKinAssociatedPartysIdentifiers(values: CX[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[33] = arr;
    return this;
  }

  /** NK1.33 - Next of Kin/Associated Party's Identifiers (add single value) */
  add_nk1_33_nextOfKinAssociatedPartysIdentifiers(value: CX | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[33];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[33] = [fv];
      }
    }
    return this;
  }

  /** NK1.33 - Next of Kin/Associated Party's Identifiers */
  get_nk1_33_nextOfKinAssociatedPartysIdentifiers(): CX[] | undefined {
    const val = this.seg.fields[33];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromCX(v)).filter((v): v is CX => v !== undefined);
  }

  /** NK1.34 - Job Status */
  set_nk1_34_jobStatus(value: string | null | undefined): this {
    if (value != null) this.seg.fields[34] = value;
    return this;
  }

  /** NK1.34 - Job Status */
  get_nk1_34_jobStatus(): string | undefined {
    const val = this.seg.fields[34];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** NK1.35 - Race (set all values) */
  set_nk1_35_race(values: CE[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[35] = arr;
    return this;
  }

  /** NK1.35 - Race (add single value) */
  add_nk1_35_race(value: CE | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[35];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[35] = [fv];
      }
    }
    return this;
  }

  /** NK1.35 - Race */
  get_nk1_35_race(): CE[] | undefined {
    const val = this.seg.fields[35];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromCE(v)).filter((v): v is CE => v !== undefined);
  }

  /** NK1.36 - Handicap */
  set_nk1_36_disability(value: string | null | undefined): this {
    if (value != null) this.seg.fields[36] = value;
    return this;
  }

  /** NK1.36 - Handicap */
  get_nk1_36_disability(): string | undefined {
    const val = this.seg.fields[36];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** NK1.37 - Contact Person Social Security Number */
  set_nk1_37_contactPersonSocialSecurityNumber(value: string | null | undefined): this {
    if (value != null) this.seg.fields[37] = value;
    return this;
  }

  /** NK1.37 - Contact Person Social Security Number */
  get_nk1_37_contactPersonSocialSecurityNumber(): string | undefined {
    const val = this.seg.fields[37];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** NK1.38 - Next of Kin Birth Place */
  set_nk1_38_nextOfKinBirthPlace(value: string | null | undefined): this {
    if (value != null) this.seg.fields[38] = value;
    return this;
  }

  /** NK1.38 - Next of Kin Birth Place */
  get_nk1_38_nextOfKinBirthPlace(): string | undefined {
    const val = this.seg.fields[38];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** NK1.39 - VIP Indicator */
  set_nk1_39_vip(value: string | null | undefined): this {
    if (value != null) this.seg.fields[39] = value;
    return this;
  }

  /** NK1.39 - VIP Indicator */
  get_nk1_39_vip(): string | undefined {
    const val = this.seg.fields[39];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  build(): HL7v2Segment {
    return this.seg;
  }
}

// ====== OBX Segment ======

export class OBXBuilder {
  private seg: HL7v2Segment = { segment: "OBX", fields: {} };

  /** OBX.1 - Set ID - OBX */
  set_obx_1_setIdObx(value: string | null | undefined): this {
    if (value != null) this.seg.fields[1] = value;
    return this;
  }

  /** OBX.1 - Set ID - OBX */
  get_obx_1_setIdObx(): string | undefined {
    const val = this.seg.fields[1];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** OBX.2 - Value Type */
  set_obx_2_valueType(value: string | null | undefined): this {
    if (value != null) this.seg.fields[2] = value;
    return this;
  }

  /** OBX.2 - Value Type */
  get_obx_2_valueType(): string | undefined {
    const val = this.seg.fields[2];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** OBX.3 - Observation Identifier */
  set_obx_3_observationIdentifier(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[3] = fv;
    return this;
  }

  /** OBX.3 - Observation Identifier */
  get_obx_3_observationIdentifier(): CE | undefined {
    return fromCE(this.seg.fields[3]);
  }

  /** OBX.4 - Observation Sub-ID */
  set_obx_4_observationSubId(value: string | null | undefined): this {
    if (value != null) this.seg.fields[4] = value;
    return this;
  }

  /** OBX.4 - Observation Sub-ID */
  get_obx_4_observationSubId(): string | undefined {
    const val = this.seg.fields[4];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** OBX.5 - Observation Value */
  set_obx_5_observationValue(value: string | null | undefined): this {
    if (value != null) this.seg.fields[5] = value;
    return this;
  }

  /** OBX.5 - Observation Value */
  get_obx_5_observationValue(): string | undefined {
    const val = this.seg.fields[5];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** OBX.6 - Units */
  set_obx_6_unit(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[6] = fv;
    return this;
  }

  /** OBX.6 - Units */
  get_obx_6_unit(): CE | undefined {
    return fromCE(this.seg.fields[6]);
  }

  /** OBX.7 - References Range */
  set_obx_7_referencesRange(value: string | null | undefined): this {
    if (value != null) this.seg.fields[7] = value;
    return this;
  }

  /** OBX.7 - References Range */
  get_obx_7_referencesRange(): string | undefined {
    const val = this.seg.fields[7];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** OBX.8 - Abnormal Flags */
  set_obx_8_abnormalFlags(value: string | null | undefined): this {
    if (value != null) this.seg.fields[8] = value;
    return this;
  }

  /** OBX.8 - Abnormal Flags */
  get_obx_8_abnormalFlags(): string | undefined {
    const val = this.seg.fields[8];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** OBX.9 - Probability */
  set_obx_9_probability(value: string | null | undefined): this {
    if (value != null) this.seg.fields[9] = value;
    return this;
  }

  /** OBX.9 - Probability */
  get_obx_9_probability(): string | undefined {
    const val = this.seg.fields[9];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** OBX.10 - Nature of Abnormal Test */
  set_obx_10_natureOfAbnormalTest(value: string | null | undefined): this {
    if (value != null) this.seg.fields[10] = value;
    return this;
  }

  /** OBX.10 - Nature of Abnormal Test */
  get_obx_10_natureOfAbnormalTest(): string | undefined {
    const val = this.seg.fields[10];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** OBX.11 - Observation Result Status */
  set_obx_11_observationResultStatus(value: string | null | undefined): this {
    if (value != null) this.seg.fields[11] = value;
    return this;
  }

  /** OBX.11 - Observation Result Status */
  get_obx_11_observationResultStatus(): string | undefined {
    const val = this.seg.fields[11];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** OBX.12 - Effective Date of Reference Range Values */
  set_obx_12_effectiveDateOfReferenceRangeValues(value: string | null | undefined): this {
    if (value != null) this.seg.fields[12] = value;
    return this;
  }

  /** OBX.12 - Effective Date of Reference Range Values */
  get_obx_12_effectiveDateOfReferenceRangeValues(): string | undefined {
    const val = this.seg.fields[12];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** OBX.13 - User Defined Access Checks */
  set_obx_13_userDefinedAccessChecks(value: string | null | undefined): this {
    if (value != null) this.seg.fields[13] = value;
    return this;
  }

  /** OBX.13 - User Defined Access Checks */
  get_obx_13_userDefinedAccessChecks(): string | undefined {
    const val = this.seg.fields[13];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** OBX.14 - Date/Time of the Observation */
  set_obx_14_observationDateTime(value: string | null | undefined): this {
    if (value != null) this.seg.fields[14] = value;
    return this;
  }

  /** OBX.14 - Date/Time of the Observation */
  get_obx_14_observationDateTime(): string | undefined {
    const val = this.seg.fields[14];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** OBX.15 - Producer's Reference */
  set_obx_15_producersReference(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[15] = fv;
    return this;
  }

  /** OBX.15 - Producer's Reference */
  get_obx_15_producersReference(): CE | undefined {
    return fromCE(this.seg.fields[15]);
  }

  /** OBX.16 - Responsible Observer (set all values) */
  set_obx_16_responsibleObserver(values: XCN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[16] = arr;
    return this;
  }

  /** OBX.16 - Responsible Observer (add single value) */
  add_obx_16_responsibleObserver(value: XCN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[16];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[16] = [fv];
      }
    }
    return this;
  }

  /** OBX.16 - Responsible Observer */
  get_obx_16_responsibleObserver(): XCN[] | undefined {
    const val = this.seg.fields[16];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXCN(v)).filter((v): v is XCN => v !== undefined);
  }

  /** OBX.17 - Observation Method (set all values) */
  set_obx_17_observationMethod(values: CE[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[17] = arr;
    return this;
  }

  /** OBX.17 - Observation Method (add single value) */
  add_obx_17_observationMethod(value: CE | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[17];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[17] = [fv];
      }
    }
    return this;
  }

  /** OBX.17 - Observation Method */
  get_obx_17_observationMethod(): CE[] | undefined {
    const val = this.seg.fields[17];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromCE(v)).filter((v): v is CE => v !== undefined);
  }

  /** OBX.18 - Equipment Instance Identifier (set all values) */
  set_obx_18_equipmentInstanceIdentifier(values: EI[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[18] = arr;
    return this;
  }

  /** OBX.18 - Equipment Instance Identifier (add single value) */
  add_obx_18_equipmentInstanceIdentifier(value: EI | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[18];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[18] = [fv];
      }
    }
    return this;
  }

  /** OBX.18 - Equipment Instance Identifier */
  get_obx_18_equipmentInstanceIdentifier(): EI[] | undefined {
    const val = this.seg.fields[18];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromEI(v)).filter((v): v is EI => v !== undefined);
  }

  /** OBX.19 - Date/Time of the Analysis */
  set_obx_19_analysisDateTime(value: string | null | undefined): this {
    if (value != null) this.seg.fields[19] = value;
    return this;
  }

  /** OBX.19 - Date/Time of the Analysis */
  get_obx_19_analysisDateTime(): string | undefined {
    const val = this.seg.fields[19];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** OBX.20 - Observation Site (set all values) */
  set_obx_20_observationSite(values: CWE[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[20] = arr;
    return this;
  }

  /** OBX.20 - Observation Site (add single value) */
  add_obx_20_observationSite(value: CWE | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[20];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[20] = [fv];
      }
    }
    return this;
  }

  /** OBX.20 - Observation Site */
  get_obx_20_observationSite(): CWE[] | undefined {
    const val = this.seg.fields[20];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromCWE(v)).filter((v): v is CWE => v !== undefined);
  }

  /** OBX.21 - Observation Instance Identifier */
  set_obx_21_observationInstanceIdentifier(value: EI | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[21] = fv;
    return this;
  }

  /** OBX.21 - Observation Instance Identifier */
  get_obx_21_observationInstanceIdentifier(): EI | undefined {
    return fromEI(this.seg.fields[21]);
  }

  /** OBX.22 - Mood Identifier */
  set_obx_22_moodIdentifier(value: CNE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[22] = fv;
    return this;
  }

  /** OBX.22 - Mood Identifier */
  get_obx_22_moodIdentifier(): CNE | undefined {
    return fromCNE(this.seg.fields[22]);
  }

  /** OBX.23 - Performing Organization Name */
  set_obx_23_performingOrganizationName(value: XON | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[23] = fv;
    return this;
  }

  /** OBX.23 - Performing Organization Name */
  get_obx_23_performingOrganizationName(): XON | undefined {
    return fromXON(this.seg.fields[23]);
  }

  /** OBX.24 - Performing Organization Address */
  set_obx_24_performingOrganizationAddress(value: XAD | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[24] = fv;
    return this;
  }

  /** OBX.24 - Performing Organization Address */
  get_obx_24_performingOrganizationAddress(): XAD | undefined {
    return fromXAD(this.seg.fields[24]);
  }

  /** OBX.25 - Performing Organization Medical Director */
  set_obx_25_performingOrganizationMedicalDirector(value: XCN | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[25] = fv;
    return this;
  }

  /** OBX.25 - Performing Organization Medical Director */
  get_obx_25_performingOrganizationMedicalDirector(): XCN | undefined {
    return fromXCN(this.seg.fields[25]);
  }

  build(): HL7v2Segment {
    return this.seg;
  }
}

// ====== PD1 Segment ======

export class PD1Builder {
  private seg: HL7v2Segment = { segment: "PD1", fields: {} };

  /** PD1.1 - Living Dependency */
  set_pd1_1_livingDependency(value: string | null | undefined): this {
    if (value != null) this.seg.fields[1] = value;
    return this;
  }

  /** PD1.1 - Living Dependency */
  get_pd1_1_livingDependency(): string | undefined {
    const val = this.seg.fields[1];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PD1.2 - Living Arrangement */
  set_pd1_2_livingArrangement(value: string | null | undefined): this {
    if (value != null) this.seg.fields[2] = value;
    return this;
  }

  /** PD1.2 - Living Arrangement */
  get_pd1_2_livingArrangement(): string | undefined {
    const val = this.seg.fields[2];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PD1.3 - Patient Primary Facility (set all values) */
  set_pd1_3_primaryFacility(values: XON[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[3] = arr;
    return this;
  }

  /** PD1.3 - Patient Primary Facility (add single value) */
  add_pd1_3_primaryFacility(value: XON | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[3];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[3] = [fv];
      }
    }
    return this;
  }

  /** PD1.3 - Patient Primary Facility */
  get_pd1_3_primaryFacility(): XON[] | undefined {
    const val = this.seg.fields[3];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXON(v)).filter((v): v is XON => v !== undefined);
  }

  /** PD1.4 - Patient Primary Care Provider Name & ID No. (set all values) */
  set_pd1_4_primaryCareProvider(values: XCN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[4] = arr;
    return this;
  }

  /** PD1.4 - Patient Primary Care Provider Name & ID No. (add single value) */
  add_pd1_4_primaryCareProvider(value: XCN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[4];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[4] = [fv];
      }
    }
    return this;
  }

  /** PD1.4 - Patient Primary Care Provider Name & ID No. */
  get_pd1_4_primaryCareProvider(): XCN[] | undefined {
    const val = this.seg.fields[4];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXCN(v)).filter((v): v is XCN => v !== undefined);
  }

  /** PD1.5 - Student Indicator */
  set_pd1_5_student(value: string | null | undefined): this {
    if (value != null) this.seg.fields[5] = value;
    return this;
  }

  /** PD1.5 - Student Indicator */
  get_pd1_5_student(): string | undefined {
    const val = this.seg.fields[5];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PD1.6 - Handicap */
  set_pd1_6_disability(value: string | null | undefined): this {
    if (value != null) this.seg.fields[6] = value;
    return this;
  }

  /** PD1.6 - Handicap */
  get_pd1_6_disability(): string | undefined {
    const val = this.seg.fields[6];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PD1.7 - Living Will Code */
  set_pd1_7_livingWill(value: string | null | undefined): this {
    if (value != null) this.seg.fields[7] = value;
    return this;
  }

  /** PD1.7 - Living Will Code */
  get_pd1_7_livingWill(): string | undefined {
    const val = this.seg.fields[7];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PD1.8 - Organ Donor Code */
  set_pd1_8_organDonorCode(value: string | null | undefined): this {
    if (value != null) this.seg.fields[8] = value;
    return this;
  }

  /** PD1.8 - Organ Donor Code */
  get_pd1_8_organDonorCode(): string | undefined {
    const val = this.seg.fields[8];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PD1.9 - Separate Bill */
  set_pd1_9_separateBill(value: string | null | undefined): this {
    if (value != null) this.seg.fields[9] = value;
    return this;
  }

  /** PD1.9 - Separate Bill */
  get_pd1_9_separateBill(): string | undefined {
    const val = this.seg.fields[9];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PD1.10 - Duplicate Patient (set all values) */
  set_pd1_10_duplicatePatient(values: CX[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[10] = arr;
    return this;
  }

  /** PD1.10 - Duplicate Patient (add single value) */
  add_pd1_10_duplicatePatient(value: CX | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[10];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[10] = [fv];
      }
    }
    return this;
  }

  /** PD1.10 - Duplicate Patient */
  get_pd1_10_duplicatePatient(): CX[] | undefined {
    const val = this.seg.fields[10];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromCX(v)).filter((v): v is CX => v !== undefined);
  }

  /** PD1.11 - Publicity Code */
  set_pd1_11_publicityCode(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[11] = fv;
    return this;
  }

  /** PD1.11 - Publicity Code */
  get_pd1_11_publicityCode(): CE | undefined {
    return fromCE(this.seg.fields[11]);
  }

  /** PD1.12 - Protection Indicator */
  set_pd1_12_protectionIndicator(value: string | null | undefined): this {
    if (value != null) this.seg.fields[12] = value;
    return this;
  }

  /** PD1.12 - Protection Indicator */
  get_pd1_12_protectionIndicator(): string | undefined {
    const val = this.seg.fields[12];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PD1.13 - Protection Indicator Effective Date */
  set_pd1_13_protectionIndicatorEffectiveDate(value: string | null | undefined): this {
    if (value != null) this.seg.fields[13] = value;
    return this;
  }

  /** PD1.13 - Protection Indicator Effective Date */
  get_pd1_13_protectionIndicatorEffectiveDate(): string | undefined {
    const val = this.seg.fields[13];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PD1.14 - Place of Worship (set all values) */
  set_pd1_14_placeOfWorship(values: XON[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[14] = arr;
    return this;
  }

  /** PD1.14 - Place of Worship (add single value) */
  add_pd1_14_placeOfWorship(value: XON | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[14];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[14] = [fv];
      }
    }
    return this;
  }

  /** PD1.14 - Place of Worship */
  get_pd1_14_placeOfWorship(): XON[] | undefined {
    const val = this.seg.fields[14];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXON(v)).filter((v): v is XON => v !== undefined);
  }

  /** PD1.15 - Advance Directive Code (set all values) */
  set_pd1_15_advanceDirectiveCode(values: CE[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[15] = arr;
    return this;
  }

  /** PD1.15 - Advance Directive Code (add single value) */
  add_pd1_15_advanceDirectiveCode(value: CE | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[15];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[15] = [fv];
      }
    }
    return this;
  }

  /** PD1.15 - Advance Directive Code */
  get_pd1_15_advanceDirectiveCode(): CE[] | undefined {
    const val = this.seg.fields[15];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromCE(v)).filter((v): v is CE => v !== undefined);
  }

  /** PD1.16 - Immunization Registry Status */
  set_pd1_16_immunizationRegistryStatus(value: string | null | undefined): this {
    if (value != null) this.seg.fields[16] = value;
    return this;
  }

  /** PD1.16 - Immunization Registry Status */
  get_pd1_16_immunizationRegistryStatus(): string | undefined {
    const val = this.seg.fields[16];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PD1.17 - Immunization Registry Status Effective Date */
  set_pd1_17_immunizationRegistryStatusEffectiveDate(value: string | null | undefined): this {
    if (value != null) this.seg.fields[17] = value;
    return this;
  }

  /** PD1.17 - Immunization Registry Status Effective Date */
  get_pd1_17_immunizationRegistryStatusEffectiveDate(): string | undefined {
    const val = this.seg.fields[17];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PD1.18 - Publicity Code Effective Date */
  set_pd1_18_publicityCodeEffectiveDate(value: string | null | undefined): this {
    if (value != null) this.seg.fields[18] = value;
    return this;
  }

  /** PD1.18 - Publicity Code Effective Date */
  get_pd1_18_publicityCodeEffectiveDate(): string | undefined {
    const val = this.seg.fields[18];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PD1.19 - Military Branch */
  set_pd1_19_militaryBranch(value: string | null | undefined): this {
    if (value != null) this.seg.fields[19] = value;
    return this;
  }

  /** PD1.19 - Military Branch */
  get_pd1_19_militaryBranch(): string | undefined {
    const val = this.seg.fields[19];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PD1.20 - Military Rank/Grade */
  set_pd1_20_militaryRankGrade(value: string | null | undefined): this {
    if (value != null) this.seg.fields[20] = value;
    return this;
  }

  /** PD1.20 - Military Rank/Grade */
  get_pd1_20_militaryRankGrade(): string | undefined {
    const val = this.seg.fields[20];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PD1.21 - Military Status */
  set_pd1_21_militaryStatus(value: string | null | undefined): this {
    if (value != null) this.seg.fields[21] = value;
    return this;
  }

  /** PD1.21 - Military Status */
  get_pd1_21_militaryStatus(): string | undefined {
    const val = this.seg.fields[21];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  build(): HL7v2Segment {
    return this.seg;
  }
}

// ====== PDA Segment ======

export class PDABuilder {
  private seg: HL7v2Segment = { segment: "PDA", fields: {} };

  /** PDA.1 - Death Cause Code (set all values) */
  set_pda_1_deathCauseCode(values: CE[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[1] = arr;
    return this;
  }

  /** PDA.1 - Death Cause Code (add single value) */
  add_pda_1_deathCauseCode(value: CE | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[1];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[1] = [fv];
      }
    }
    return this;
  }

  /** PDA.1 - Death Cause Code */
  get_pda_1_deathCauseCode(): CE[] | undefined {
    const val = this.seg.fields[1];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromCE(v)).filter((v): v is CE => v !== undefined);
  }

  /** PDA.2 - Death Location */
  set_pda_2_deathLocation(value: PL | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[2] = fv;
    return this;
  }

  /** PDA.2 - Death Location */
  get_pda_2_deathLocation(): PL | undefined {
    return fromPL(this.seg.fields[2]);
  }

  /** PDA.3 - Death Certified Indicator */
  set_pda_3_deathCertifiedIndicator(value: string | null | undefined): this {
    if (value != null) this.seg.fields[3] = value;
    return this;
  }

  /** PDA.3 - Death Certified Indicator */
  get_pda_3_deathCertifiedIndicator(): string | undefined {
    const val = this.seg.fields[3];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PDA.4 - Death Certificate Signed Date/Time */
  set_pda_4_deathCertificateSignedDateTime(value: string | null | undefined): this {
    if (value != null) this.seg.fields[4] = value;
    return this;
  }

  /** PDA.4 - Death Certificate Signed Date/Time */
  get_pda_4_deathCertificateSignedDateTime(): string | undefined {
    const val = this.seg.fields[4];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PDA.5 - Death Certified By */
  set_pda_5_deathCertifiedBy(value: XCN | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[5] = fv;
    return this;
  }

  /** PDA.5 - Death Certified By */
  get_pda_5_deathCertifiedBy(): XCN | undefined {
    return fromXCN(this.seg.fields[5]);
  }

  /** PDA.6 - Autopsy Indicator */
  set_pda_6_autopsyIndicator(value: string | null | undefined): this {
    if (value != null) this.seg.fields[6] = value;
    return this;
  }

  /** PDA.6 - Autopsy Indicator */
  get_pda_6_autopsyIndicator(): string | undefined {
    const val = this.seg.fields[6];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PDA.7 - Autopsy Start and End Date/Time */
  set_pda_7_autopsyStartAndEndDateTime(value: DR | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[7] = fv;
    return this;
  }

  /** PDA.7 - Autopsy Start and End Date/Time */
  get_pda_7_autopsyStartAndEndDateTime(): DR | undefined {
    return fromDR(this.seg.fields[7]);
  }

  /** PDA.8 - Autopsy Performed By */
  set_pda_8_autopsyPerformedBy(value: XCN | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[8] = fv;
    return this;
  }

  /** PDA.8 - Autopsy Performed By */
  get_pda_8_autopsyPerformedBy(): XCN | undefined {
    return fromXCN(this.seg.fields[8]);
  }

  /** PDA.9 - Coroner Indicator */
  set_pda_9_coronerIndicator(value: string | null | undefined): this {
    if (value != null) this.seg.fields[9] = value;
    return this;
  }

  /** PDA.9 - Coroner Indicator */
  get_pda_9_coronerIndicator(): string | undefined {
    const val = this.seg.fields[9];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  build(): HL7v2Segment {
    return this.seg;
  }
}

// ====== PID Segment ======

export class PIDBuilder {
  private seg: HL7v2Segment = { segment: "PID", fields: {} };

  /** PID.1 - Set ID - PID */
  set_pid_1_setIdPid(value: string | null | undefined): this {
    if (value != null) this.seg.fields[1] = value;
    return this;
  }

  /** PID.1 - Set ID - PID */
  get_pid_1_setIdPid(): string | undefined {
    const val = this.seg.fields[1];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PID.2 - Patient ID */
  set_pid_2_patientId(value: CX | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[2] = fv;
    return this;
  }

  /** PID.2 - Patient ID */
  get_pid_2_patientId(): CX | undefined {
    return fromCX(this.seg.fields[2]);
  }

  /** PID.3 - Patient Identifier List (set all values) */
  set_pid_3_identifier(values: CX[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[3] = arr;
    return this;
  }

  /** PID.3 - Patient Identifier List (add single value) */
  add_pid_3_identifier(value: CX | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[3];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[3] = [fv];
      }
    }
    return this;
  }

  /** PID.3 - Patient Identifier List */
  get_pid_3_identifier(): CX[] | undefined {
    const val = this.seg.fields[3];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromCX(v)).filter((v): v is CX => v !== undefined);
  }

  /** PID.4 - Alternate Patient ID - PID (set all values) */
  set_pid_4_alternatePatientIdPid(values: CX[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[4] = arr;
    return this;
  }

  /** PID.4 - Alternate Patient ID - PID (add single value) */
  add_pid_4_alternatePatientIdPid(value: CX | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[4];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[4] = [fv];
      }
    }
    return this;
  }

  /** PID.4 - Alternate Patient ID - PID */
  get_pid_4_alternatePatientIdPid(): CX[] | undefined {
    const val = this.seg.fields[4];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromCX(v)).filter((v): v is CX => v !== undefined);
  }

  /** PID.5 - Patient Name (set all values) */
  set_pid_5_name(values: XPN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[5] = arr;
    return this;
  }

  /** PID.5 - Patient Name (add single value) */
  add_pid_5_name(value: XPN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[5];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[5] = [fv];
      }
    }
    return this;
  }

  /** PID.5 - Patient Name */
  get_pid_5_name(): XPN[] | undefined {
    const val = this.seg.fields[5];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXPN(v)).filter((v): v is XPN => v !== undefined);
  }

  /** PID.6 - Mother's Maiden Name (set all values) */
  set_pid_6_mothersMaidenName(values: XPN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[6] = arr;
    return this;
  }

  /** PID.6 - Mother's Maiden Name (add single value) */
  add_pid_6_mothersMaidenName(value: XPN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[6];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[6] = [fv];
      }
    }
    return this;
  }

  /** PID.6 - Mother's Maiden Name */
  get_pid_6_mothersMaidenName(): XPN[] | undefined {
    const val = this.seg.fields[6];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXPN(v)).filter((v): v is XPN => v !== undefined);
  }

  /** PID.7 - Date/Time of Birth */
  set_pid_7_birthDate(value: string | null | undefined): this {
    if (value != null) this.seg.fields[7] = value;
    return this;
  }

  /** PID.7 - Date/Time of Birth */
  get_pid_7_birthDate(): string | undefined {
    const val = this.seg.fields[7];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PID.8 - Administrative Sex */
  set_pid_8_gender(value: string | null | undefined): this {
    if (value != null) this.seg.fields[8] = value;
    return this;
  }

  /** PID.8 - Administrative Sex */
  get_pid_8_gender(): string | undefined {
    const val = this.seg.fields[8];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PID.9 - Patient Alias (set all values) */
  set_pid_9_alias(values: XPN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[9] = arr;
    return this;
  }

  /** PID.9 - Patient Alias (add single value) */
  add_pid_9_alias(value: XPN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[9];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[9] = [fv];
      }
    }
    return this;
  }

  /** PID.9 - Patient Alias */
  get_pid_9_alias(): XPN[] | undefined {
    const val = this.seg.fields[9];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXPN(v)).filter((v): v is XPN => v !== undefined);
  }

  /** PID.10 - Race (set all values) */
  set_pid_10_race(values: CE[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[10] = arr;
    return this;
  }

  /** PID.10 - Race (add single value) */
  add_pid_10_race(value: CE | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[10];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[10] = [fv];
      }
    }
    return this;
  }

  /** PID.10 - Race */
  get_pid_10_race(): CE[] | undefined {
    const val = this.seg.fields[10];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromCE(v)).filter((v): v is CE => v !== undefined);
  }

  /** PID.11 - Patient Address (set all values) */
  set_pid_11_address(values: XAD[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[11] = arr;
    return this;
  }

  /** PID.11 - Patient Address (add single value) */
  add_pid_11_address(value: XAD | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[11];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[11] = [fv];
      }
    }
    return this;
  }

  /** PID.11 - Patient Address */
  get_pid_11_address(): XAD[] | undefined {
    const val = this.seg.fields[11];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXAD(v)).filter((v): v is XAD => v !== undefined);
  }

  /** PID.12 - County Code */
  set_pid_12_countyCode(value: string | null | undefined): this {
    if (value != null) this.seg.fields[12] = value;
    return this;
  }

  /** PID.12 - County Code */
  get_pid_12_countyCode(): string | undefined {
    const val = this.seg.fields[12];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PID.13 - Phone Number - Home (set all values) */
  set_pid_13_homePhone(values: XTN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[13] = arr;
    return this;
  }

  /** PID.13 - Phone Number - Home (add single value) */
  add_pid_13_homePhone(value: XTN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[13];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[13] = [fv];
      }
    }
    return this;
  }

  /** PID.13 - Phone Number - Home */
  get_pid_13_homePhone(): XTN[] | undefined {
    const val = this.seg.fields[13];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXTN(v)).filter((v): v is XTN => v !== undefined);
  }

  /** PID.14 - Phone Number - Business (set all values) */
  set_pid_14_businessPhone(values: XTN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[14] = arr;
    return this;
  }

  /** PID.14 - Phone Number - Business (add single value) */
  add_pid_14_businessPhone(value: XTN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[14];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[14] = [fv];
      }
    }
    return this;
  }

  /** PID.14 - Phone Number - Business */
  get_pid_14_businessPhone(): XTN[] | undefined {
    const val = this.seg.fields[14];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXTN(v)).filter((v): v is XTN => v !== undefined);
  }

  /** PID.15 - Primary Language */
  set_pid_15_language(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[15] = fv;
    return this;
  }

  /** PID.15 - Primary Language */
  get_pid_15_language(): CE | undefined {
    return fromCE(this.seg.fields[15]);
  }

  /** PID.16 - Marital Status */
  set_pid_16_maritalStatus(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[16] = fv;
    return this;
  }

  /** PID.16 - Marital Status */
  get_pid_16_maritalStatus(): CE | undefined {
    return fromCE(this.seg.fields[16]);
  }

  /** PID.17 - Religion */
  set_pid_17_religion(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[17] = fv;
    return this;
  }

  /** PID.17 - Religion */
  get_pid_17_religion(): CE | undefined {
    return fromCE(this.seg.fields[17]);
  }

  /** PID.18 - Patient Account Number */
  set_pid_18_accountNumber(value: CX | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[18] = fv;
    return this;
  }

  /** PID.18 - Patient Account Number */
  get_pid_18_accountNumber(): CX | undefined {
    return fromCX(this.seg.fields[18]);
  }

  /** PID.19 - SSN Number - Patient */
  set_pid_19_ssnNumberPatient(value: string | null | undefined): this {
    if (value != null) this.seg.fields[19] = value;
    return this;
  }

  /** PID.19 - SSN Number - Patient */
  get_pid_19_ssnNumberPatient(): string | undefined {
    const val = this.seg.fields[19];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PID.20 - Driver's License Number - Patient */
  set_pid_20_driversLicenseNumberPatient(value: DLN | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[20] = fv;
    return this;
  }

  /** PID.20 - Driver's License Number - Patient */
  get_pid_20_driversLicenseNumberPatient(): DLN | undefined {
    return fromDLN(this.seg.fields[20]);
  }

  /** PID.21 - Mother's Identifier (set all values) */
  set_pid_21_mothersIdentifier(values: CX[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[21] = arr;
    return this;
  }

  /** PID.21 - Mother's Identifier (add single value) */
  add_pid_21_mothersIdentifier(value: CX | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[21];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[21] = [fv];
      }
    }
    return this;
  }

  /** PID.21 - Mother's Identifier */
  get_pid_21_mothersIdentifier(): CX[] | undefined {
    const val = this.seg.fields[21];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromCX(v)).filter((v): v is CX => v !== undefined);
  }

  /** PID.22 - Ethnic Group (set all values) */
  set_pid_22_ethnicity(values: CE[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[22] = arr;
    return this;
  }

  /** PID.22 - Ethnic Group (add single value) */
  add_pid_22_ethnicity(value: CE | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[22];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[22] = [fv];
      }
    }
    return this;
  }

  /** PID.22 - Ethnic Group */
  get_pid_22_ethnicity(): CE[] | undefined {
    const val = this.seg.fields[22];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromCE(v)).filter((v): v is CE => v !== undefined);
  }

  /** PID.23 - Birth Place */
  set_pid_23_birthPlace(value: string | null | undefined): this {
    if (value != null) this.seg.fields[23] = value;
    return this;
  }

  /** PID.23 - Birth Place */
  get_pid_23_birthPlace(): string | undefined {
    const val = this.seg.fields[23];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PID.24 - Multiple Birth Indicator */
  set_pid_24_multipleBirthIndicator(value: string | null | undefined): this {
    if (value != null) this.seg.fields[24] = value;
    return this;
  }

  /** PID.24 - Multiple Birth Indicator */
  get_pid_24_multipleBirthIndicator(): string | undefined {
    const val = this.seg.fields[24];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PID.25 - Birth Order */
  set_pid_25_birthOrder(value: string | null | undefined): this {
    if (value != null) this.seg.fields[25] = value;
    return this;
  }

  /** PID.25 - Birth Order */
  get_pid_25_birthOrder(): string | undefined {
    const val = this.seg.fields[25];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PID.26 - Citizenship (set all values) */
  set_pid_26_citizenship(values: CE[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[26] = arr;
    return this;
  }

  /** PID.26 - Citizenship (add single value) */
  add_pid_26_citizenship(value: CE | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[26];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[26] = [fv];
      }
    }
    return this;
  }

  /** PID.26 - Citizenship */
  get_pid_26_citizenship(): CE[] | undefined {
    const val = this.seg.fields[26];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromCE(v)).filter((v): v is CE => v !== undefined);
  }

  /** PID.27 - Veterans Military Status */
  set_pid_27_veteransMilitaryStatus(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[27] = fv;
    return this;
  }

  /** PID.27 - Veterans Military Status */
  get_pid_27_veteransMilitaryStatus(): CE | undefined {
    return fromCE(this.seg.fields[27]);
  }

  /** PID.28 - Nationality */
  set_pid_28_nationality(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[28] = fv;
    return this;
  }

  /** PID.28 - Nationality */
  get_pid_28_nationality(): CE | undefined {
    return fromCE(this.seg.fields[28]);
  }

  /** PID.29 - Patient Death Date and Time */
  set_pid_29_deceasedDateTime(value: string | null | undefined): this {
    if (value != null) this.seg.fields[29] = value;
    return this;
  }

  /** PID.29 - Patient Death Date and Time */
  get_pid_29_deceasedDateTime(): string | undefined {
    const val = this.seg.fields[29];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PID.30 - Patient Death Indicator */
  set_pid_30_deceased(value: string | null | undefined): this {
    if (value != null) this.seg.fields[30] = value;
    return this;
  }

  /** PID.30 - Patient Death Indicator */
  get_pid_30_deceased(): string | undefined {
    const val = this.seg.fields[30];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PID.31 - Identity Unknown Indicator */
  set_pid_31_identityUnknownIndicator(value: string | null | undefined): this {
    if (value != null) this.seg.fields[31] = value;
    return this;
  }

  /** PID.31 - Identity Unknown Indicator */
  get_pid_31_identityUnknownIndicator(): string | undefined {
    const val = this.seg.fields[31];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PID.32 - Identity Reliability Code */
  set_pid_32_identityReliabilityCode(value: string | null | undefined): this {
    if (value != null) this.seg.fields[32] = value;
    return this;
  }

  /** PID.32 - Identity Reliability Code */
  get_pid_32_identityReliabilityCode(): string | undefined {
    const val = this.seg.fields[32];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PID.33 - Last Update Date/Time */
  set_pid_33_lastUpdateDateTime(value: string | null | undefined): this {
    if (value != null) this.seg.fields[33] = value;
    return this;
  }

  /** PID.33 - Last Update Date/Time */
  get_pid_33_lastUpdateDateTime(): string | undefined {
    const val = this.seg.fields[33];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PID.34 - Last Update Facility */
  set_pid_34_lastUpdateFacility(value: HD | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[34] = fv;
    return this;
  }

  /** PID.34 - Last Update Facility */
  get_pid_34_lastUpdateFacility(): HD | undefined {
    return fromHD(this.seg.fields[34]);
  }

  /** PID.35 - Species Code */
  set_pid_35_speciesCode(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[35] = fv;
    return this;
  }

  /** PID.35 - Species Code */
  get_pid_35_speciesCode(): CE | undefined {
    return fromCE(this.seg.fields[35]);
  }

  /** PID.36 - Breed Code */
  set_pid_36_breedCode(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[36] = fv;
    return this;
  }

  /** PID.36 - Breed Code */
  get_pid_36_breedCode(): CE | undefined {
    return fromCE(this.seg.fields[36]);
  }

  /** PID.37 - Strain */
  set_pid_37_strain(value: string | null | undefined): this {
    if (value != null) this.seg.fields[37] = value;
    return this;
  }

  /** PID.37 - Strain */
  get_pid_37_strain(): string | undefined {
    const val = this.seg.fields[37];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PID.38 - Production Class Code */
  set_pid_38_productionClassCode(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[38] = fv;
    return this;
  }

  /** PID.38 - Production Class Code */
  get_pid_38_productionClassCode(): CE | undefined {
    return fromCE(this.seg.fields[38]);
  }

  /** PID.39 - Tribal Citizenship (set all values) */
  set_pid_39_tribalCitizenship(values: CWE[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[39] = arr;
    return this;
  }

  /** PID.39 - Tribal Citizenship (add single value) */
  add_pid_39_tribalCitizenship(value: CWE | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[39];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[39] = [fv];
      }
    }
    return this;
  }

  /** PID.39 - Tribal Citizenship */
  get_pid_39_tribalCitizenship(): CWE[] | undefined {
    const val = this.seg.fields[39];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromCWE(v)).filter((v): v is CWE => v !== undefined);
  }

  build(): HL7v2Segment {
    return this.seg;
  }
}

// ====== PR1 Segment ======

export class PR1Builder {
  private seg: HL7v2Segment = { segment: "PR1", fields: {} };

  /** PR1.1 - Set ID - PR1 */
  set_pr1_1_setIdPr1(value: string | null | undefined): this {
    if (value != null) this.seg.fields[1] = value;
    return this;
  }

  /** PR1.1 - Set ID - PR1 */
  get_pr1_1_setIdPr1(): string | undefined {
    const val = this.seg.fields[1];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PR1.2 - Procedure Coding Method */
  set_pr1_2_procedureCodingMethod(value: string | null | undefined): this {
    if (value != null) this.seg.fields[2] = value;
    return this;
  }

  /** PR1.2 - Procedure Coding Method */
  get_pr1_2_procedureCodingMethod(): string | undefined {
    const val = this.seg.fields[2];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PR1.3 - Procedure Code */
  set_pr1_3_procedureCode(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[3] = fv;
    return this;
  }

  /** PR1.3 - Procedure Code */
  get_pr1_3_procedureCode(): CE | undefined {
    return fromCE(this.seg.fields[3]);
  }

  /** PR1.4 - Procedure Description */
  set_pr1_4_procedureDescription(value: string | null | undefined): this {
    if (value != null) this.seg.fields[4] = value;
    return this;
  }

  /** PR1.4 - Procedure Description */
  get_pr1_4_procedureDescription(): string | undefined {
    const val = this.seg.fields[4];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PR1.5 - Procedure Date/Time */
  set_pr1_5_procedureDateTime(value: string | null | undefined): this {
    if (value != null) this.seg.fields[5] = value;
    return this;
  }

  /** PR1.5 - Procedure Date/Time */
  get_pr1_5_procedureDateTime(): string | undefined {
    const val = this.seg.fields[5];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PR1.6 - Procedure Functional Type */
  set_pr1_6_procedureFunctionalType(value: string | null | undefined): this {
    if (value != null) this.seg.fields[6] = value;
    return this;
  }

  /** PR1.6 - Procedure Functional Type */
  get_pr1_6_procedureFunctionalType(): string | undefined {
    const val = this.seg.fields[6];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PR1.7 - Procedure Minutes */
  set_pr1_7_procedureMinutes(value: string | null | undefined): this {
    if (value != null) this.seg.fields[7] = value;
    return this;
  }

  /** PR1.7 - Procedure Minutes */
  get_pr1_7_procedureMinutes(): string | undefined {
    const val = this.seg.fields[7];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PR1.8 - Anesthesiologist (set all values) */
  set_pr1_8_anesthesiologist(values: XCN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[8] = arr;
    return this;
  }

  /** PR1.8 - Anesthesiologist (add single value) */
  add_pr1_8_anesthesiologist(value: XCN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[8];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[8] = [fv];
      }
    }
    return this;
  }

  /** PR1.8 - Anesthesiologist */
  get_pr1_8_anesthesiologist(): XCN[] | undefined {
    const val = this.seg.fields[8];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXCN(v)).filter((v): v is XCN => v !== undefined);
  }

  /** PR1.9 - Anesthesia Code */
  set_pr1_9_anesthesiaCode(value: string | null | undefined): this {
    if (value != null) this.seg.fields[9] = value;
    return this;
  }

  /** PR1.9 - Anesthesia Code */
  get_pr1_9_anesthesiaCode(): string | undefined {
    const val = this.seg.fields[9];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PR1.10 - Anesthesia Minutes */
  set_pr1_10_anesthesiaMinutes(value: string | null | undefined): this {
    if (value != null) this.seg.fields[10] = value;
    return this;
  }

  /** PR1.10 - Anesthesia Minutes */
  get_pr1_10_anesthesiaMinutes(): string | undefined {
    const val = this.seg.fields[10];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PR1.11 - Surgeon (set all values) */
  set_pr1_11_surgeon(values: XCN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[11] = arr;
    return this;
  }

  /** PR1.11 - Surgeon (add single value) */
  add_pr1_11_surgeon(value: XCN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[11];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[11] = [fv];
      }
    }
    return this;
  }

  /** PR1.11 - Surgeon */
  get_pr1_11_surgeon(): XCN[] | undefined {
    const val = this.seg.fields[11];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXCN(v)).filter((v): v is XCN => v !== undefined);
  }

  /** PR1.12 - Procedure Practitioner (set all values) */
  set_pr1_12_procedurePractitioner(values: XCN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[12] = arr;
    return this;
  }

  /** PR1.12 - Procedure Practitioner (add single value) */
  add_pr1_12_procedurePractitioner(value: XCN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[12];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[12] = [fv];
      }
    }
    return this;
  }

  /** PR1.12 - Procedure Practitioner */
  get_pr1_12_procedurePractitioner(): XCN[] | undefined {
    const val = this.seg.fields[12];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXCN(v)).filter((v): v is XCN => v !== undefined);
  }

  /** PR1.13 - Consent Code */
  set_pr1_13_consentCode(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[13] = fv;
    return this;
  }

  /** PR1.13 - Consent Code */
  get_pr1_13_consentCode(): CE | undefined {
    return fromCE(this.seg.fields[13]);
  }

  /** PR1.14 - Procedure Priority */
  set_pr1_14_procedurePriority(value: string | null | undefined): this {
    if (value != null) this.seg.fields[14] = value;
    return this;
  }

  /** PR1.14 - Procedure Priority */
  get_pr1_14_procedurePriority(): string | undefined {
    const val = this.seg.fields[14];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PR1.15 - Associated Diagnosis Code */
  set_pr1_15_associatedDiagnosisCode(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[15] = fv;
    return this;
  }

  /** PR1.15 - Associated Diagnosis Code */
  get_pr1_15_associatedDiagnosisCode(): CE | undefined {
    return fromCE(this.seg.fields[15]);
  }

  /** PR1.16 - Procedure Code Modifier (set all values) */
  set_pr1_16_procedureCodeModifier(values: CE[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[16] = arr;
    return this;
  }

  /** PR1.16 - Procedure Code Modifier (add single value) */
  add_pr1_16_procedureCodeModifier(value: CE | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[16];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[16] = [fv];
      }
    }
    return this;
  }

  /** PR1.16 - Procedure Code Modifier */
  get_pr1_16_procedureCodeModifier(): CE[] | undefined {
    const val = this.seg.fields[16];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromCE(v)).filter((v): v is CE => v !== undefined);
  }

  /** PR1.17 - Procedure DRG Type */
  set_pr1_17_procedureDrgType(value: string | null | undefined): this {
    if (value != null) this.seg.fields[17] = value;
    return this;
  }

  /** PR1.17 - Procedure DRG Type */
  get_pr1_17_procedureDrgType(): string | undefined {
    const val = this.seg.fields[17];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PR1.18 - Tissue Type Code (set all values) */
  set_pr1_18_tissueTypeCode(values: CE[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[18] = arr;
    return this;
  }

  /** PR1.18 - Tissue Type Code (add single value) */
  add_pr1_18_tissueTypeCode(value: CE | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[18];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[18] = [fv];
      }
    }
    return this;
  }

  /** PR1.18 - Tissue Type Code */
  get_pr1_18_tissueTypeCode(): CE[] | undefined {
    const val = this.seg.fields[18];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromCE(v)).filter((v): v is CE => v !== undefined);
  }

  /** PR1.19 - Procedure Identifier */
  set_pr1_19_procedureIdentifier(value: EI | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[19] = fv;
    return this;
  }

  /** PR1.19 - Procedure Identifier */
  get_pr1_19_procedureIdentifier(): EI | undefined {
    return fromEI(this.seg.fields[19]);
  }

  /** PR1.20 - Procedure Action Code */
  set_pr1_20_procedureActionCode(value: string | null | undefined): this {
    if (value != null) this.seg.fields[20] = value;
    return this;
  }

  /** PR1.20 - Procedure Action Code */
  get_pr1_20_procedureActionCode(): string | undefined {
    const val = this.seg.fields[20];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  build(): HL7v2Segment {
    return this.seg;
  }
}

// ====== PV1 Segment ======

export class PV1Builder {
  private seg: HL7v2Segment = { segment: "PV1", fields: {} };

  /** PV1.1 - Set ID - PV1 */
  set_pv1_1_setIdPv1(value: string | null | undefined): this {
    if (value != null) this.seg.fields[1] = value;
    return this;
  }

  /** PV1.1 - Set ID - PV1 */
  get_pv1_1_setIdPv1(): string | undefined {
    const val = this.seg.fields[1];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV1.2 - Patient Class */
  set_pv1_2_class(value: string | null | undefined): this {
    if (value != null) this.seg.fields[2] = value;
    return this;
  }

  /** PV1.2 - Patient Class */
  get_pv1_2_class(): string | undefined {
    const val = this.seg.fields[2];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV1.3 - Assigned Patient Location */
  set_pv1_3_assignedPatientLocation(value: PL | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[3] = fv;
    return this;
  }

  /** PV1.3 - Assigned Patient Location */
  get_pv1_3_assignedPatientLocation(): PL | undefined {
    return fromPL(this.seg.fields[3]);
  }

  /** PV1.4 - Admission Type */
  set_pv1_4_admissionType(value: string | null | undefined): this {
    if (value != null) this.seg.fields[4] = value;
    return this;
  }

  /** PV1.4 - Admission Type */
  get_pv1_4_admissionType(): string | undefined {
    const val = this.seg.fields[4];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV1.5 - Preadmit Number */
  set_pv1_5_preadmitNumber(value: CX | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[5] = fv;
    return this;
  }

  /** PV1.5 - Preadmit Number */
  get_pv1_5_preadmitNumber(): CX | undefined {
    return fromCX(this.seg.fields[5]);
  }

  /** PV1.6 - Prior Patient Location */
  set_pv1_6_priorPatientLocation(value: PL | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[6] = fv;
    return this;
  }

  /** PV1.6 - Prior Patient Location */
  get_pv1_6_priorPatientLocation(): PL | undefined {
    return fromPL(this.seg.fields[6]);
  }

  /** PV1.7 - Attending Doctor (set all values) */
  set_pv1_7_attendingDoctor(values: XCN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[7] = arr;
    return this;
  }

  /** PV1.7 - Attending Doctor (add single value) */
  add_pv1_7_attendingDoctor(value: XCN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[7];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[7] = [fv];
      }
    }
    return this;
  }

  /** PV1.7 - Attending Doctor */
  get_pv1_7_attendingDoctor(): XCN[] | undefined {
    const val = this.seg.fields[7];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXCN(v)).filter((v): v is XCN => v !== undefined);
  }

  /** PV1.8 - Referring Doctor (set all values) */
  set_pv1_8_referringDoctor(values: XCN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[8] = arr;
    return this;
  }

  /** PV1.8 - Referring Doctor (add single value) */
  add_pv1_8_referringDoctor(value: XCN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[8];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[8] = [fv];
      }
    }
    return this;
  }

  /** PV1.8 - Referring Doctor */
  get_pv1_8_referringDoctor(): XCN[] | undefined {
    const val = this.seg.fields[8];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXCN(v)).filter((v): v is XCN => v !== undefined);
  }

  /** PV1.9 - Consulting Doctor (set all values) */
  set_pv1_9_consultingDoctor(values: XCN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[9] = arr;
    return this;
  }

  /** PV1.9 - Consulting Doctor (add single value) */
  add_pv1_9_consultingDoctor(value: XCN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[9];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[9] = [fv];
      }
    }
    return this;
  }

  /** PV1.9 - Consulting Doctor */
  get_pv1_9_consultingDoctor(): XCN[] | undefined {
    const val = this.seg.fields[9];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXCN(v)).filter((v): v is XCN => v !== undefined);
  }

  /** PV1.10 - Hospital Service */
  set_pv1_10_hospitalService(value: string | null | undefined): this {
    if (value != null) this.seg.fields[10] = value;
    return this;
  }

  /** PV1.10 - Hospital Service */
  get_pv1_10_hospitalService(): string | undefined {
    const val = this.seg.fields[10];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV1.11 - Temporary Location */
  set_pv1_11_temporaryLocation(value: PL | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[11] = fv;
    return this;
  }

  /** PV1.11 - Temporary Location */
  get_pv1_11_temporaryLocation(): PL | undefined {
    return fromPL(this.seg.fields[11]);
  }

  /** PV1.12 - Preadmit Test Indicator */
  set_pv1_12_preadmitTestIndicator(value: string | null | undefined): this {
    if (value != null) this.seg.fields[12] = value;
    return this;
  }

  /** PV1.12 - Preadmit Test Indicator */
  get_pv1_12_preadmitTestIndicator(): string | undefined {
    const val = this.seg.fields[12];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV1.13 - Re-admission Indicator */
  set_pv1_13_reAdmissionIndicator(value: string | null | undefined): this {
    if (value != null) this.seg.fields[13] = value;
    return this;
  }

  /** PV1.13 - Re-admission Indicator */
  get_pv1_13_reAdmissionIndicator(): string | undefined {
    const val = this.seg.fields[13];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV1.14 - Admit Source */
  set_pv1_14_admitSource(value: string | null | undefined): this {
    if (value != null) this.seg.fields[14] = value;
    return this;
  }

  /** PV1.14 - Admit Source */
  get_pv1_14_admitSource(): string | undefined {
    const val = this.seg.fields[14];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV1.15 - Ambulatory Status */
  set_pv1_15_ambulatoryStatus(value: string | null | undefined): this {
    if (value != null) this.seg.fields[15] = value;
    return this;
  }

  /** PV1.15 - Ambulatory Status */
  get_pv1_15_ambulatoryStatus(): string | undefined {
    const val = this.seg.fields[15];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV1.16 - VIP Indicator */
  set_pv1_16_vip(value: string | null | undefined): this {
    if (value != null) this.seg.fields[16] = value;
    return this;
  }

  /** PV1.16 - VIP Indicator */
  get_pv1_16_vip(): string | undefined {
    const val = this.seg.fields[16];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV1.17 - Admitting Doctor (set all values) */
  set_pv1_17_admittingDoctor(values: XCN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[17] = arr;
    return this;
  }

  /** PV1.17 - Admitting Doctor (add single value) */
  add_pv1_17_admittingDoctor(value: XCN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[17];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[17] = [fv];
      }
    }
    return this;
  }

  /** PV1.17 - Admitting Doctor */
  get_pv1_17_admittingDoctor(): XCN[] | undefined {
    const val = this.seg.fields[17];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXCN(v)).filter((v): v is XCN => v !== undefined);
  }

  /** PV1.18 - Patient Type */
  set_pv1_18_type(value: string | null | undefined): this {
    if (value != null) this.seg.fields[18] = value;
    return this;
  }

  /** PV1.18 - Patient Type */
  get_pv1_18_type(): string | undefined {
    const val = this.seg.fields[18];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV1.19 - Visit Number */
  set_pv1_19_visitNumber(value: CX | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[19] = fv;
    return this;
  }

  /** PV1.19 - Visit Number */
  get_pv1_19_visitNumber(): CX | undefined {
    return fromCX(this.seg.fields[19]);
  }

  /** PV1.20 - Financial Class (set all values) */
  set_pv1_20_financialClass(values: FC[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[20] = arr;
    return this;
  }

  /** PV1.20 - Financial Class (add single value) */
  add_pv1_20_financialClass(value: FC | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[20];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[20] = [fv];
      }
    }
    return this;
  }

  /** PV1.20 - Financial Class */
  get_pv1_20_financialClass(): FC[] | undefined {
    const val = this.seg.fields[20];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromFC(v)).filter((v): v is FC => v !== undefined);
  }

  /** PV1.21 - Charge Price Indicator */
  set_pv1_21_chargePriceIndicator(value: string | null | undefined): this {
    if (value != null) this.seg.fields[21] = value;
    return this;
  }

  /** PV1.21 - Charge Price Indicator */
  get_pv1_21_chargePriceIndicator(): string | undefined {
    const val = this.seg.fields[21];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV1.22 - Courtesy Code */
  set_pv1_22_courtesyCode(value: string | null | undefined): this {
    if (value != null) this.seg.fields[22] = value;
    return this;
  }

  /** PV1.22 - Courtesy Code */
  get_pv1_22_courtesyCode(): string | undefined {
    const val = this.seg.fields[22];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV1.23 - Credit Rating */
  set_pv1_23_creditRating(value: string | null | undefined): this {
    if (value != null) this.seg.fields[23] = value;
    return this;
  }

  /** PV1.23 - Credit Rating */
  get_pv1_23_creditRating(): string | undefined {
    const val = this.seg.fields[23];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV1.24 - Contract Code */
  set_pv1_24_contractCode(value: string | null | undefined): this {
    if (value != null) this.seg.fields[24] = value;
    return this;
  }

  /** PV1.24 - Contract Code */
  get_pv1_24_contractCode(): string | undefined {
    const val = this.seg.fields[24];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV1.25 - Contract Effective Date */
  set_pv1_25_contractEffectiveDate(value: string | null | undefined): this {
    if (value != null) this.seg.fields[25] = value;
    return this;
  }

  /** PV1.25 - Contract Effective Date */
  get_pv1_25_contractEffectiveDate(): string | undefined {
    const val = this.seg.fields[25];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV1.26 - Contract Amount */
  set_pv1_26_contractAmount(value: string | null | undefined): this {
    if (value != null) this.seg.fields[26] = value;
    return this;
  }

  /** PV1.26 - Contract Amount */
  get_pv1_26_contractAmount(): string | undefined {
    const val = this.seg.fields[26];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV1.27 - Contract Period */
  set_pv1_27_contractPeriod(value: string | null | undefined): this {
    if (value != null) this.seg.fields[27] = value;
    return this;
  }

  /** PV1.27 - Contract Period */
  get_pv1_27_contractPeriod(): string | undefined {
    const val = this.seg.fields[27];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV1.28 - Interest Code */
  set_pv1_28_interestCode(value: string | null | undefined): this {
    if (value != null) this.seg.fields[28] = value;
    return this;
  }

  /** PV1.28 - Interest Code */
  get_pv1_28_interestCode(): string | undefined {
    const val = this.seg.fields[28];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV1.29 - Transfer to Bad Debt Code */
  set_pv1_29_transferToBadDebtCode(value: string | null | undefined): this {
    if (value != null) this.seg.fields[29] = value;
    return this;
  }

  /** PV1.29 - Transfer to Bad Debt Code */
  get_pv1_29_transferToBadDebtCode(): string | undefined {
    const val = this.seg.fields[29];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV1.30 - Transfer to Bad Debt Date */
  set_pv1_30_transferToBadDebtDate(value: string | null | undefined): this {
    if (value != null) this.seg.fields[30] = value;
    return this;
  }

  /** PV1.30 - Transfer to Bad Debt Date */
  get_pv1_30_transferToBadDebtDate(): string | undefined {
    const val = this.seg.fields[30];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV1.31 - Bad Debt Agency Code */
  set_pv1_31_badDebtAgencyCode(value: string | null | undefined): this {
    if (value != null) this.seg.fields[31] = value;
    return this;
  }

  /** PV1.31 - Bad Debt Agency Code */
  get_pv1_31_badDebtAgencyCode(): string | undefined {
    const val = this.seg.fields[31];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV1.32 - Bad Debt Transfer Amount */
  set_pv1_32_badDebtTransferAmount(value: string | null | undefined): this {
    if (value != null) this.seg.fields[32] = value;
    return this;
  }

  /** PV1.32 - Bad Debt Transfer Amount */
  get_pv1_32_badDebtTransferAmount(): string | undefined {
    const val = this.seg.fields[32];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV1.33 - Bad Debt Recovery Amount */
  set_pv1_33_badDebtRecoveryAmount(value: string | null | undefined): this {
    if (value != null) this.seg.fields[33] = value;
    return this;
  }

  /** PV1.33 - Bad Debt Recovery Amount */
  get_pv1_33_badDebtRecoveryAmount(): string | undefined {
    const val = this.seg.fields[33];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV1.34 - Delete Account Indicator */
  set_pv1_34_deleteAccountIndicator(value: string | null | undefined): this {
    if (value != null) this.seg.fields[34] = value;
    return this;
  }

  /** PV1.34 - Delete Account Indicator */
  get_pv1_34_deleteAccountIndicator(): string | undefined {
    const val = this.seg.fields[34];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV1.35 - Delete Account Date */
  set_pv1_35_deleteAccountDate(value: string | null | undefined): this {
    if (value != null) this.seg.fields[35] = value;
    return this;
  }

  /** PV1.35 - Delete Account Date */
  get_pv1_35_deleteAccountDate(): string | undefined {
    const val = this.seg.fields[35];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV1.36 - Discharge Disposition */
  set_pv1_36_dischargeDisposition(value: string | null | undefined): this {
    if (value != null) this.seg.fields[36] = value;
    return this;
  }

  /** PV1.36 - Discharge Disposition */
  get_pv1_36_dischargeDisposition(): string | undefined {
    const val = this.seg.fields[36];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV1.37 - Discharged to Location */
  set_pv1_37_dischargedToLocation(value: DLD | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[37] = fv;
    return this;
  }

  /** PV1.37 - Discharged to Location */
  get_pv1_37_dischargedToLocation(): DLD | undefined {
    return fromDLD(this.seg.fields[37]);
  }

  /** PV1.38 - Diet Type */
  set_pv1_38_dietType(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[38] = fv;
    return this;
  }

  /** PV1.38 - Diet Type */
  get_pv1_38_dietType(): CE | undefined {
    return fromCE(this.seg.fields[38]);
  }

  /** PV1.39 - Servicing Facility */
  set_pv1_39_servicingFacility(value: string | null | undefined): this {
    if (value != null) this.seg.fields[39] = value;
    return this;
  }

  /** PV1.39 - Servicing Facility */
  get_pv1_39_servicingFacility(): string | undefined {
    const val = this.seg.fields[39];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV1.40 - Bed Status */
  set_pv1_40_bedStatus(value: string | null | undefined): this {
    if (value != null) this.seg.fields[40] = value;
    return this;
  }

  /** PV1.40 - Bed Status */
  get_pv1_40_bedStatus(): string | undefined {
    const val = this.seg.fields[40];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV1.41 - Account Status */
  set_pv1_41_accountStatus(value: string | null | undefined): this {
    if (value != null) this.seg.fields[41] = value;
    return this;
  }

  /** PV1.41 - Account Status */
  get_pv1_41_accountStatus(): string | undefined {
    const val = this.seg.fields[41];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV1.42 - Pending Location */
  set_pv1_42_pendingLocation(value: PL | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[42] = fv;
    return this;
  }

  /** PV1.42 - Pending Location */
  get_pv1_42_pendingLocation(): PL | undefined {
    return fromPL(this.seg.fields[42]);
  }

  /** PV1.43 - Prior Temporary Location */
  set_pv1_43_priorTemporaryLocation(value: PL | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[43] = fv;
    return this;
  }

  /** PV1.43 - Prior Temporary Location */
  get_pv1_43_priorTemporaryLocation(): PL | undefined {
    return fromPL(this.seg.fields[43]);
  }

  /** PV1.44 - Admit Date/Time */
  set_pv1_44_admission(value: string | null | undefined): this {
    if (value != null) this.seg.fields[44] = value;
    return this;
  }

  /** PV1.44 - Admit Date/Time */
  get_pv1_44_admission(): string | undefined {
    const val = this.seg.fields[44];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV1.45 - Discharge Date/Time */
  set_pv1_45_discharge(value: string | null | undefined): this {
    if (value != null) this.seg.fields[45] = value;
    return this;
  }

  /** PV1.45 - Discharge Date/Time */
  get_pv1_45_discharge(): string | undefined {
    const val = this.seg.fields[45];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV1.46 - Current Patient Balance */
  set_pv1_46_currentPatientBalance(value: string | null | undefined): this {
    if (value != null) this.seg.fields[46] = value;
    return this;
  }

  /** PV1.46 - Current Patient Balance */
  get_pv1_46_currentPatientBalance(): string | undefined {
    const val = this.seg.fields[46];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV1.47 - Total Charges */
  set_pv1_47_totalCharges(value: string | null | undefined): this {
    if (value != null) this.seg.fields[47] = value;
    return this;
  }

  /** PV1.47 - Total Charges */
  get_pv1_47_totalCharges(): string | undefined {
    const val = this.seg.fields[47];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV1.48 - Total Adjustments */
  set_pv1_48_totalAdjustments(value: string | null | undefined): this {
    if (value != null) this.seg.fields[48] = value;
    return this;
  }

  /** PV1.48 - Total Adjustments */
  get_pv1_48_totalAdjustments(): string | undefined {
    const val = this.seg.fields[48];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV1.49 - Total Payments */
  set_pv1_49_totalPayments(value: string | null | undefined): this {
    if (value != null) this.seg.fields[49] = value;
    return this;
  }

  /** PV1.49 - Total Payments */
  get_pv1_49_totalPayments(): string | undefined {
    const val = this.seg.fields[49];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV1.50 - Alternate Visit ID */
  set_pv1_50_alternateVisitId(value: CX | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[50] = fv;
    return this;
  }

  /** PV1.50 - Alternate Visit ID */
  get_pv1_50_alternateVisitId(): CX | undefined {
    return fromCX(this.seg.fields[50]);
  }

  /** PV1.51 - Visit Indicator */
  set_pv1_51_visitIndicator(value: string | null | undefined): this {
    if (value != null) this.seg.fields[51] = value;
    return this;
  }

  /** PV1.51 - Visit Indicator */
  get_pv1_51_visitIndicator(): string | undefined {
    const val = this.seg.fields[51];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV1.52 - Other Healthcare Provider (set all values) */
  set_pv1_52_otherHealthcareProvider(values: XCN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[52] = arr;
    return this;
  }

  /** PV1.52 - Other Healthcare Provider (add single value) */
  add_pv1_52_otherHealthcareProvider(value: XCN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[52];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[52] = [fv];
      }
    }
    return this;
  }

  /** PV1.52 - Other Healthcare Provider */
  get_pv1_52_otherHealthcareProvider(): XCN[] | undefined {
    const val = this.seg.fields[52];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXCN(v)).filter((v): v is XCN => v !== undefined);
  }

  build(): HL7v2Segment {
    return this.seg;
  }
}

// ====== PV2 Segment ======

export class PV2Builder {
  private seg: HL7v2Segment = { segment: "PV2", fields: {} };

  /** PV2.1 - Prior Pending Location */
  set_pv2_1_priorPendingLocation(value: PL | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[1] = fv;
    return this;
  }

  /** PV2.1 - Prior Pending Location */
  get_pv2_1_priorPendingLocation(): PL | undefined {
    return fromPL(this.seg.fields[1]);
  }

  /** PV2.2 - Accommodation Code */
  set_pv2_2_accommodationCode(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[2] = fv;
    return this;
  }

  /** PV2.2 - Accommodation Code */
  get_pv2_2_accommodationCode(): CE | undefined {
    return fromCE(this.seg.fields[2]);
  }

  /** PV2.3 - Admit Reason */
  set_pv2_3_admitReason(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[3] = fv;
    return this;
  }

  /** PV2.3 - Admit Reason */
  get_pv2_3_admitReason(): CE | undefined {
    return fromCE(this.seg.fields[3]);
  }

  /** PV2.4 - Transfer Reason */
  set_pv2_4_transferReason(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[4] = fv;
    return this;
  }

  /** PV2.4 - Transfer Reason */
  get_pv2_4_transferReason(): CE | undefined {
    return fromCE(this.seg.fields[4]);
  }

  /** PV2.5 - Patient Valuables */
  set_pv2_5_valuables(value: string | null | undefined): this {
    if (value != null) this.seg.fields[5] = value;
    return this;
  }

  /** PV2.5 - Patient Valuables */
  get_pv2_5_valuables(): string | undefined {
    const val = this.seg.fields[5];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV2.6 - Patient Valuables Location */
  set_pv2_6_valuablesLocation(value: string | null | undefined): this {
    if (value != null) this.seg.fields[6] = value;
    return this;
  }

  /** PV2.6 - Patient Valuables Location */
  get_pv2_6_valuablesLocation(): string | undefined {
    const val = this.seg.fields[6];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV2.7 - Visit User Code */
  set_pv2_7_visitUserCode(value: string | null | undefined): this {
    if (value != null) this.seg.fields[7] = value;
    return this;
  }

  /** PV2.7 - Visit User Code */
  get_pv2_7_visitUserCode(): string | undefined {
    const val = this.seg.fields[7];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV2.8 - Expected Admit Date/Time */
  set_pv2_8_expectedAdmission(value: string | null | undefined): this {
    if (value != null) this.seg.fields[8] = value;
    return this;
  }

  /** PV2.8 - Expected Admit Date/Time */
  get_pv2_8_expectedAdmission(): string | undefined {
    const val = this.seg.fields[8];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV2.9 - Expected Discharge Date/Time */
  set_pv2_9_expectedDischarge(value: string | null | undefined): this {
    if (value != null) this.seg.fields[9] = value;
    return this;
  }

  /** PV2.9 - Expected Discharge Date/Time */
  get_pv2_9_expectedDischarge(): string | undefined {
    const val = this.seg.fields[9];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV2.10 - Estimated Length of Inpatient Stay */
  set_pv2_10_estimatedLengthOfInpatientStay(value: string | null | undefined): this {
    if (value != null) this.seg.fields[10] = value;
    return this;
  }

  /** PV2.10 - Estimated Length of Inpatient Stay */
  get_pv2_10_estimatedLengthOfInpatientStay(): string | undefined {
    const val = this.seg.fields[10];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV2.11 - Actual Length of Inpatient Stay */
  set_pv2_11_actualLengthOfInpatientStay(value: string | null | undefined): this {
    if (value != null) this.seg.fields[11] = value;
    return this;
  }

  /** PV2.11 - Actual Length of Inpatient Stay */
  get_pv2_11_actualLengthOfInpatientStay(): string | undefined {
    const val = this.seg.fields[11];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV2.12 - Visit Description */
  set_pv2_12_visitDescription(value: string | null | undefined): this {
    if (value != null) this.seg.fields[12] = value;
    return this;
  }

  /** PV2.12 - Visit Description */
  get_pv2_12_visitDescription(): string | undefined {
    const val = this.seg.fields[12];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV2.13 - Referral Source Code (set all values) */
  set_pv2_13_referralSourceCode(values: XCN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[13] = arr;
    return this;
  }

  /** PV2.13 - Referral Source Code (add single value) */
  add_pv2_13_referralSourceCode(value: XCN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[13];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[13] = [fv];
      }
    }
    return this;
  }

  /** PV2.13 - Referral Source Code */
  get_pv2_13_referralSourceCode(): XCN[] | undefined {
    const val = this.seg.fields[13];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXCN(v)).filter((v): v is XCN => v !== undefined);
  }

  /** PV2.14 - Previous Service Date */
  set_pv2_14_previousServiceDate(value: string | null | undefined): this {
    if (value != null) this.seg.fields[14] = value;
    return this;
  }

  /** PV2.14 - Previous Service Date */
  get_pv2_14_previousServiceDate(): string | undefined {
    const val = this.seg.fields[14];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV2.15 - Employment Illness Related Indicator */
  set_pv2_15_employmentIllnessRelatedIndicator(value: string | null | undefined): this {
    if (value != null) this.seg.fields[15] = value;
    return this;
  }

  /** PV2.15 - Employment Illness Related Indicator */
  get_pv2_15_employmentIllnessRelatedIndicator(): string | undefined {
    const val = this.seg.fields[15];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV2.16 - Purge Status Code */
  set_pv2_16_purgeStatusCode(value: string | null | undefined): this {
    if (value != null) this.seg.fields[16] = value;
    return this;
  }

  /** PV2.16 - Purge Status Code */
  get_pv2_16_purgeStatusCode(): string | undefined {
    const val = this.seg.fields[16];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV2.17 - Purge Status Date */
  set_pv2_17_purgeStatusDate(value: string | null | undefined): this {
    if (value != null) this.seg.fields[17] = value;
    return this;
  }

  /** PV2.17 - Purge Status Date */
  get_pv2_17_purgeStatusDate(): string | undefined {
    const val = this.seg.fields[17];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV2.18 - Special Program Code */
  set_pv2_18_specialProgramCode(value: string | null | undefined): this {
    if (value != null) this.seg.fields[18] = value;
    return this;
  }

  /** PV2.18 - Special Program Code */
  get_pv2_18_specialProgramCode(): string | undefined {
    const val = this.seg.fields[18];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV2.19 - Retention Indicator */
  set_pv2_19_retentionIndicator(value: string | null | undefined): this {
    if (value != null) this.seg.fields[19] = value;
    return this;
  }

  /** PV2.19 - Retention Indicator */
  get_pv2_19_retentionIndicator(): string | undefined {
    const val = this.seg.fields[19];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV2.20 - Expected Number of Insurance Plans */
  set_pv2_20_expectedNumberOfInsurancePlans(value: string | null | undefined): this {
    if (value != null) this.seg.fields[20] = value;
    return this;
  }

  /** PV2.20 - Expected Number of Insurance Plans */
  get_pv2_20_expectedNumberOfInsurancePlans(): string | undefined {
    const val = this.seg.fields[20];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV2.21 - Visit Publicity Code */
  set_pv2_21_visitPublicityCode(value: string | null | undefined): this {
    if (value != null) this.seg.fields[21] = value;
    return this;
  }

  /** PV2.21 - Visit Publicity Code */
  get_pv2_21_visitPublicityCode(): string | undefined {
    const val = this.seg.fields[21];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV2.22 - Visit Protection Indicator */
  set_pv2_22_visitProtectionIndicator(value: string | null | undefined): this {
    if (value != null) this.seg.fields[22] = value;
    return this;
  }

  /** PV2.22 - Visit Protection Indicator */
  get_pv2_22_visitProtectionIndicator(): string | undefined {
    const val = this.seg.fields[22];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV2.23 - Clinic Organization Name (set all values) */
  set_pv2_23_clinicOrganizationName(values: XON[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[23] = arr;
    return this;
  }

  /** PV2.23 - Clinic Organization Name (add single value) */
  add_pv2_23_clinicOrganizationName(value: XON | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[23];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[23] = [fv];
      }
    }
    return this;
  }

  /** PV2.23 - Clinic Organization Name */
  get_pv2_23_clinicOrganizationName(): XON[] | undefined {
    const val = this.seg.fields[23];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXON(v)).filter((v): v is XON => v !== undefined);
  }

  /** PV2.24 - Patient Status Code */
  set_pv2_24_status(value: string | null | undefined): this {
    if (value != null) this.seg.fields[24] = value;
    return this;
  }

  /** PV2.24 - Patient Status Code */
  get_pv2_24_status(): string | undefined {
    const val = this.seg.fields[24];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV2.25 - Visit Priority Code */
  set_pv2_25_visitPriorityCode(value: string | null | undefined): this {
    if (value != null) this.seg.fields[25] = value;
    return this;
  }

  /** PV2.25 - Visit Priority Code */
  get_pv2_25_visitPriorityCode(): string | undefined {
    const val = this.seg.fields[25];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV2.26 - Previous Treatment Date */
  set_pv2_26_previousTreatmentDate(value: string | null | undefined): this {
    if (value != null) this.seg.fields[26] = value;
    return this;
  }

  /** PV2.26 - Previous Treatment Date */
  get_pv2_26_previousTreatmentDate(): string | undefined {
    const val = this.seg.fields[26];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV2.27 - Expected Discharge Disposition */
  set_pv2_27_expectedDischargeDisposition(value: string | null | undefined): this {
    if (value != null) this.seg.fields[27] = value;
    return this;
  }

  /** PV2.27 - Expected Discharge Disposition */
  get_pv2_27_expectedDischargeDisposition(): string | undefined {
    const val = this.seg.fields[27];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV2.28 - Signature on File Date */
  set_pv2_28_signatureOnFileDate(value: string | null | undefined): this {
    if (value != null) this.seg.fields[28] = value;
    return this;
  }

  /** PV2.28 - Signature on File Date */
  get_pv2_28_signatureOnFileDate(): string | undefined {
    const val = this.seg.fields[28];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV2.29 - First Similar Illness Date */
  set_pv2_29_firstSimilarIllnessDate(value: string | null | undefined): this {
    if (value != null) this.seg.fields[29] = value;
    return this;
  }

  /** PV2.29 - First Similar Illness Date */
  get_pv2_29_firstSimilarIllnessDate(): string | undefined {
    const val = this.seg.fields[29];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV2.30 - Patient Charge Adjustment Code */
  set_pv2_30_chargeAdjustmentCode(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[30] = fv;
    return this;
  }

  /** PV2.30 - Patient Charge Adjustment Code */
  get_pv2_30_chargeAdjustmentCode(): CE | undefined {
    return fromCE(this.seg.fields[30]);
  }

  /** PV2.31 - Recurring Service Code */
  set_pv2_31_recurringServiceCode(value: string | null | undefined): this {
    if (value != null) this.seg.fields[31] = value;
    return this;
  }

  /** PV2.31 - Recurring Service Code */
  get_pv2_31_recurringServiceCode(): string | undefined {
    const val = this.seg.fields[31];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV2.32 - Billing Media Code */
  set_pv2_32_billingMediaCode(value: string | null | undefined): this {
    if (value != null) this.seg.fields[32] = value;
    return this;
  }

  /** PV2.32 - Billing Media Code */
  get_pv2_32_billingMediaCode(): string | undefined {
    const val = this.seg.fields[32];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV2.33 - Expected Surgery Date and Time */
  set_pv2_33_expectedSurgeryDateAndTime(value: string | null | undefined): this {
    if (value != null) this.seg.fields[33] = value;
    return this;
  }

  /** PV2.33 - Expected Surgery Date and Time */
  get_pv2_33_expectedSurgeryDateAndTime(): string | undefined {
    const val = this.seg.fields[33];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV2.34 - Military Partnership Code */
  set_pv2_34_militaryPartnershipCode(value: string | null | undefined): this {
    if (value != null) this.seg.fields[34] = value;
    return this;
  }

  /** PV2.34 - Military Partnership Code */
  get_pv2_34_militaryPartnershipCode(): string | undefined {
    const val = this.seg.fields[34];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV2.35 - Military Non-Availability Code */
  set_pv2_35_militaryNonAvailabilityCode(value: string | null | undefined): this {
    if (value != null) this.seg.fields[35] = value;
    return this;
  }

  /** PV2.35 - Military Non-Availability Code */
  get_pv2_35_militaryNonAvailabilityCode(): string | undefined {
    const val = this.seg.fields[35];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV2.36 - Newborn Baby Indicator */
  set_pv2_36_newbornBabyIndicator(value: string | null | undefined): this {
    if (value != null) this.seg.fields[36] = value;
    return this;
  }

  /** PV2.36 - Newborn Baby Indicator */
  get_pv2_36_newbornBabyIndicator(): string | undefined {
    const val = this.seg.fields[36];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV2.37 - Baby Detained Indicator */
  set_pv2_37_babyDetainedIndicator(value: string | null | undefined): this {
    if (value != null) this.seg.fields[37] = value;
    return this;
  }

  /** PV2.37 - Baby Detained Indicator */
  get_pv2_37_babyDetainedIndicator(): string | undefined {
    const val = this.seg.fields[37];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV2.38 - Mode of Arrival Code */
  set_pv2_38_modeOfArrivalCode(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[38] = fv;
    return this;
  }

  /** PV2.38 - Mode of Arrival Code */
  get_pv2_38_modeOfArrivalCode(): CE | undefined {
    return fromCE(this.seg.fields[38]);
  }

  /** PV2.39 - Recreational Drug Use Code (set all values) */
  set_pv2_39_recreationalDrugUseCode(values: CE[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[39] = arr;
    return this;
  }

  /** PV2.39 - Recreational Drug Use Code (add single value) */
  add_pv2_39_recreationalDrugUseCode(value: CE | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[39];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[39] = [fv];
      }
    }
    return this;
  }

  /** PV2.39 - Recreational Drug Use Code */
  get_pv2_39_recreationalDrugUseCode(): CE[] | undefined {
    const val = this.seg.fields[39];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromCE(v)).filter((v): v is CE => v !== undefined);
  }

  /** PV2.40 - Admission Level of Care Code */
  set_pv2_40_admissionLevelOfCareCode(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[40] = fv;
    return this;
  }

  /** PV2.40 - Admission Level of Care Code */
  get_pv2_40_admissionLevelOfCareCode(): CE | undefined {
    return fromCE(this.seg.fields[40]);
  }

  /** PV2.41 - Precaution Code (set all values) */
  set_pv2_41_precautionCode(values: CE[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[41] = arr;
    return this;
  }

  /** PV2.41 - Precaution Code (add single value) */
  add_pv2_41_precautionCode(value: CE | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[41];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[41] = [fv];
      }
    }
    return this;
  }

  /** PV2.41 - Precaution Code */
  get_pv2_41_precautionCode(): CE[] | undefined {
    const val = this.seg.fields[41];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromCE(v)).filter((v): v is CE => v !== undefined);
  }

  /** PV2.42 - Patient Condition Code */
  set_pv2_42_conditionCode(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[42] = fv;
    return this;
  }

  /** PV2.42 - Patient Condition Code */
  get_pv2_42_conditionCode(): CE | undefined {
    return fromCE(this.seg.fields[42]);
  }

  /** PV2.43 - Living Will Code */
  set_pv2_43_livingWill(value: string | null | undefined): this {
    if (value != null) this.seg.fields[43] = value;
    return this;
  }

  /** PV2.43 - Living Will Code */
  get_pv2_43_livingWill(): string | undefined {
    const val = this.seg.fields[43];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV2.44 - Organ Donor Code */
  set_pv2_44_organDonorCode(value: string | null | undefined): this {
    if (value != null) this.seg.fields[44] = value;
    return this;
  }

  /** PV2.44 - Organ Donor Code */
  get_pv2_44_organDonorCode(): string | undefined {
    const val = this.seg.fields[44];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV2.45 - Advance Directive Code (set all values) */
  set_pv2_45_advanceDirectiveCode(values: CE[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[45] = arr;
    return this;
  }

  /** PV2.45 - Advance Directive Code (add single value) */
  add_pv2_45_advanceDirectiveCode(value: CE | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[45];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[45] = [fv];
      }
    }
    return this;
  }

  /** PV2.45 - Advance Directive Code */
  get_pv2_45_advanceDirectiveCode(): CE[] | undefined {
    const val = this.seg.fields[45];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromCE(v)).filter((v): v is CE => v !== undefined);
  }

  /** PV2.46 - Patient Status Effective Date */
  set_pv2_46_statusStart(value: string | null | undefined): this {
    if (value != null) this.seg.fields[46] = value;
    return this;
  }

  /** PV2.46 - Patient Status Effective Date */
  get_pv2_46_statusStart(): string | undefined {
    const val = this.seg.fields[46];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV2.47 - Expected LOA Return Date/Time */
  set_pv2_47_expectedLoaReturnDateTime(value: string | null | undefined): this {
    if (value != null) this.seg.fields[47] = value;
    return this;
  }

  /** PV2.47 - Expected LOA Return Date/Time */
  get_pv2_47_expectedLoaReturnDateTime(): string | undefined {
    const val = this.seg.fields[47];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV2.48 - Expected Pre-admission Testing Date/Time */
  set_pv2_48_expectedPreAdmissionTestingDateTime(value: string | null | undefined): this {
    if (value != null) this.seg.fields[48] = value;
    return this;
  }

  /** PV2.48 - Expected Pre-admission Testing Date/Time */
  get_pv2_48_expectedPreAdmissionTestingDateTime(): string | undefined {
    const val = this.seg.fields[48];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** PV2.49 - Notify Clergy Code */
  set_pv2_49_notifyClergyCode(value: string | null | undefined): this {
    if (value != null) this.seg.fields[49] = value;
    return this;
  }

  /** PV2.49 - Notify Clergy Code */
  get_pv2_49_notifyClergyCode(): string | undefined {
    const val = this.seg.fields[49];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  build(): HL7v2Segment {
    return this.seg;
  }
}

// ====== ROL Segment ======

export class ROLBuilder {
  private seg: HL7v2Segment = { segment: "ROL", fields: {} };

  /** ROL.1 - Role Instance ID */
  set_rol_1_roleInstanceId(value: EI | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[1] = fv;
    return this;
  }

  /** ROL.1 - Role Instance ID */
  get_rol_1_roleInstanceId(): EI | undefined {
    return fromEI(this.seg.fields[1]);
  }

  /** ROL.2 - Action Code */
  set_rol_2_actionCode(value: string | null | undefined): this {
    if (value != null) this.seg.fields[2] = value;
    return this;
  }

  /** ROL.2 - Action Code */
  get_rol_2_actionCode(): string | undefined {
    const val = this.seg.fields[2];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** ROL.3 - Role-ROL */
  set_rol_3_roleRol(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[3] = fv;
    return this;
  }

  /** ROL.3 - Role-ROL */
  get_rol_3_roleRol(): CE | undefined {
    return fromCE(this.seg.fields[3]);
  }

  /** ROL.4 - Role Person (set all values) */
  set_rol_4_rolePerson(values: XCN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[4] = arr;
    return this;
  }

  /** ROL.4 - Role Person (add single value) */
  add_rol_4_rolePerson(value: XCN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[4];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[4] = [fv];
      }
    }
    return this;
  }

  /** ROL.4 - Role Person */
  get_rol_4_rolePerson(): XCN[] | undefined {
    const val = this.seg.fields[4];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXCN(v)).filter((v): v is XCN => v !== undefined);
  }

  /** ROL.5 - Role Begin Date/Time */
  set_rol_5_roleBeginDateTime(value: string | null | undefined): this {
    if (value != null) this.seg.fields[5] = value;
    return this;
  }

  /** ROL.5 - Role Begin Date/Time */
  get_rol_5_roleBeginDateTime(): string | undefined {
    const val = this.seg.fields[5];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** ROL.6 - Role End Date/Time */
  set_rol_6_roleEndDateTime(value: string | null | undefined): this {
    if (value != null) this.seg.fields[6] = value;
    return this;
  }

  /** ROL.6 - Role End Date/Time */
  get_rol_6_roleEndDateTime(): string | undefined {
    const val = this.seg.fields[6];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** ROL.7 - Role Duration */
  set_rol_7_roleDuration(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[7] = fv;
    return this;
  }

  /** ROL.7 - Role Duration */
  get_rol_7_roleDuration(): CE | undefined {
    return fromCE(this.seg.fields[7]);
  }

  /** ROL.8 - Role Action Reason */
  set_rol_8_roleActionReason(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[8] = fv;
    return this;
  }

  /** ROL.8 - Role Action Reason */
  get_rol_8_roleActionReason(): CE | undefined {
    return fromCE(this.seg.fields[8]);
  }

  /** ROL.9 - Provider Type (set all values) */
  set_rol_9_providerType(values: CE[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[9] = arr;
    return this;
  }

  /** ROL.9 - Provider Type (add single value) */
  add_rol_9_providerType(value: CE | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[9];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[9] = [fv];
      }
    }
    return this;
  }

  /** ROL.9 - Provider Type */
  get_rol_9_providerType(): CE[] | undefined {
    const val = this.seg.fields[9];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromCE(v)).filter((v): v is CE => v !== undefined);
  }

  /** ROL.10 - Organization Unit Type */
  set_rol_10_organizationUnitType(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[10] = fv;
    return this;
  }

  /** ROL.10 - Organization Unit Type */
  get_rol_10_organizationUnitType(): CE | undefined {
    return fromCE(this.seg.fields[10]);
  }

  /** ROL.11 - Office/Home Address/Birthplace (set all values) */
  set_rol_11_address(values: XAD[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[11] = arr;
    return this;
  }

  /** ROL.11 - Office/Home Address/Birthplace (add single value) */
  add_rol_11_address(value: XAD | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[11];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[11] = [fv];
      }
    }
    return this;
  }

  /** ROL.11 - Office/Home Address/Birthplace */
  get_rol_11_address(): XAD[] | undefined {
    const val = this.seg.fields[11];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXAD(v)).filter((v): v is XAD => v !== undefined);
  }

  /** ROL.12 - Phone (set all values) */
  set_rol_12_phone(values: XTN[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[12] = arr;
    return this;
  }

  /** ROL.12 - Phone (add single value) */
  add_rol_12_phone(value: XTN | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[12];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[12] = [fv];
      }
    }
    return this;
  }

  /** ROL.12 - Phone */
  get_rol_12_phone(): XTN[] | undefined {
    const val = this.seg.fields[12];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromXTN(v)).filter((v): v is XTN => v !== undefined);
  }

  build(): HL7v2Segment {
    return this.seg;
  }
}

// ====== SFT Segment ======

export class SFTBuilder {
  private seg: HL7v2Segment = { segment: "SFT", fields: {} };

  /** SFT.1 - Software Vendor Organization */
  set_sft_1_softwareVendorOrganization(value: XON | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[1] = fv;
    return this;
  }

  /** SFT.1 - Software Vendor Organization */
  get_sft_1_softwareVendorOrganization(): XON | undefined {
    return fromXON(this.seg.fields[1]);
  }

  /** SFT.2 - Software Certified Version or Release Number */
  set_sft_2_softwareCertifiedVersionOrReleaseNumber(value: string | null | undefined): this {
    if (value != null) this.seg.fields[2] = value;
    return this;
  }

  /** SFT.2 - Software Certified Version or Release Number */
  get_sft_2_softwareCertifiedVersionOrReleaseNumber(): string | undefined {
    const val = this.seg.fields[2];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** SFT.3 - Software Product Name */
  set_sft_3_softwareProductName(value: string | null | undefined): this {
    if (value != null) this.seg.fields[3] = value;
    return this;
  }

  /** SFT.3 - Software Product Name */
  get_sft_3_softwareProductName(): string | undefined {
    const val = this.seg.fields[3];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** SFT.4 - Software Binary ID */
  set_sft_4_softwareBinaryId(value: string | null | undefined): this {
    if (value != null) this.seg.fields[4] = value;
    return this;
  }

  /** SFT.4 - Software Binary ID */
  get_sft_4_softwareBinaryId(): string | undefined {
    const val = this.seg.fields[4];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** SFT.5 - Software Product Information */
  set_sft_5_softwareProductInformation(value: string | null | undefined): this {
    if (value != null) this.seg.fields[5] = value;
    return this;
  }

  /** SFT.5 - Software Product Information */
  get_sft_5_softwareProductInformation(): string | undefined {
    const val = this.seg.fields[5];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** SFT.6 - Software Install Date */
  set_sft_6_softwareInstallDate(value: string | null | undefined): this {
    if (value != null) this.seg.fields[6] = value;
    return this;
  }

  /** SFT.6 - Software Install Date */
  get_sft_6_softwareInstallDate(): string | undefined {
    const val = this.seg.fields[6];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  build(): HL7v2Segment {
    return this.seg;
  }
}

// ====== UB1 Segment ======

export class UB1Builder {
  private seg: HL7v2Segment = { segment: "UB1", fields: {} };

  /** UB1.1 - Set ID - UB1 */
  set_ub1_1_setIdUb1(value: string | null | undefined): this {
    if (value != null) this.seg.fields[1] = value;
    return this;
  }

  /** UB1.1 - Set ID - UB1 */
  get_ub1_1_setIdUb1(): string | undefined {
    const val = this.seg.fields[1];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** UB1.2 - Blood Deductible  (43) */
  set_ub1_2_bloodDeductible(value: string | null | undefined): this {
    if (value != null) this.seg.fields[2] = value;
    return this;
  }

  /** UB1.2 - Blood Deductible  (43) */
  get_ub1_2_bloodDeductible(): string | undefined {
    const val = this.seg.fields[2];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** UB1.3 - Blood Furnished-Pints Of (40) */
  set_ub1_3_bloodFurnishedPintsOf(value: string | null | undefined): this {
    if (value != null) this.seg.fields[3] = value;
    return this;
  }

  /** UB1.3 - Blood Furnished-Pints Of (40) */
  get_ub1_3_bloodFurnishedPintsOf(): string | undefined {
    const val = this.seg.fields[3];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** UB1.4 - Blood Replaced-Pints (41) */
  set_ub1_4_bloodReplacedPints(value: string | null | undefined): this {
    if (value != null) this.seg.fields[4] = value;
    return this;
  }

  /** UB1.4 - Blood Replaced-Pints (41) */
  get_ub1_4_bloodReplacedPints(): string | undefined {
    const val = this.seg.fields[4];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** UB1.5 - Blood Not Replaced-Pints(42) */
  set_ub1_5_bloodNotReplacedPints(value: string | null | undefined): this {
    if (value != null) this.seg.fields[5] = value;
    return this;
  }

  /** UB1.5 - Blood Not Replaced-Pints(42) */
  get_ub1_5_bloodNotReplacedPints(): string | undefined {
    const val = this.seg.fields[5];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** UB1.6 - Co-Insurance Days (25) */
  set_ub1_6_coInsuranceDays(value: string | null | undefined): this {
    if (value != null) this.seg.fields[6] = value;
    return this;
  }

  /** UB1.6 - Co-Insurance Days (25) */
  get_ub1_6_coInsuranceDays(): string | undefined {
    const val = this.seg.fields[6];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** UB1.7 - Condition Code (35-39) */
  set_ub1_7_conditionCode(value: string | null | undefined): this {
    if (value != null) this.seg.fields[7] = value;
    return this;
  }

  /** UB1.7 - Condition Code (35-39) */
  get_ub1_7_conditionCode(): string | undefined {
    const val = this.seg.fields[7];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** UB1.8 - Covered Days - (23) */
  set_ub1_8_coveredDays(value: string | null | undefined): this {
    if (value != null) this.seg.fields[8] = value;
    return this;
  }

  /** UB1.8 - Covered Days - (23) */
  get_ub1_8_coveredDays(): string | undefined {
    const val = this.seg.fields[8];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** UB1.9 - Non Covered Days - (24) */
  set_ub1_9_nonCoveredDays(value: string | null | undefined): this {
    if (value != null) this.seg.fields[9] = value;
    return this;
  }

  /** UB1.9 - Non Covered Days - (24) */
  get_ub1_9_nonCoveredDays(): string | undefined {
    const val = this.seg.fields[9];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** UB1.10 - Value Amount & Code (46-49) (set all values) */
  set_ub1_10_valueAmountAndCode(values: UVC[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[10] = arr;
    return this;
  }

  /** UB1.10 - Value Amount & Code (46-49) (add single value) */
  add_ub1_10_valueAmountAndCode(value: UVC | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[10];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[10] = [fv];
      }
    }
    return this;
  }

  /** UB1.10 - Value Amount & Code (46-49) */
  get_ub1_10_valueAmountAndCode(): UVC[] | undefined {
    const val = this.seg.fields[10];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromUVC(v)).filter((v): v is UVC => v !== undefined);
  }

  /** UB1.11 - Number Of Grace Days (90) */
  set_ub1_11_numberOfGraceDays(value: string | null | undefined): this {
    if (value != null) this.seg.fields[11] = value;
    return this;
  }

  /** UB1.11 - Number Of Grace Days (90) */
  get_ub1_11_numberOfGraceDays(): string | undefined {
    const val = this.seg.fields[11];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** UB1.12 - Special Program Indicator (44) */
  set_ub1_12_specialProgramIndicator(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[12] = fv;
    return this;
  }

  /** UB1.12 - Special Program Indicator (44) */
  get_ub1_12_specialProgramIndicator(): CE | undefined {
    return fromCE(this.seg.fields[12]);
  }

  /** UB1.13 - PSRO/UR Approval Indicator (87) */
  set_ub1_13_psroUrApprovalIndicator(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[13] = fv;
    return this;
  }

  /** UB1.13 - PSRO/UR Approval Indicator (87) */
  get_ub1_13_psroUrApprovalIndicator(): CE | undefined {
    return fromCE(this.seg.fields[13]);
  }

  /** UB1.14 - PSRO/UR Approved Stay-Fm (88) */
  set_ub1_14_psroUrApprovedStayFm(value: string | null | undefined): this {
    if (value != null) this.seg.fields[14] = value;
    return this;
  }

  /** UB1.14 - PSRO/UR Approved Stay-Fm (88) */
  get_ub1_14_psroUrApprovedStayFm(): string | undefined {
    const val = this.seg.fields[14];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** UB1.15 - PSRO/UR Approved Stay-To (89) */
  set_ub1_15_psroUrApprovedStayTo(value: string | null | undefined): this {
    if (value != null) this.seg.fields[15] = value;
    return this;
  }

  /** UB1.15 - PSRO/UR Approved Stay-To (89) */
  get_ub1_15_psroUrApprovedStayTo(): string | undefined {
    const val = this.seg.fields[15];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** UB1.16 - Occurrence (28-32) (set all values) */
  set_ub1_16_occurrence(values: OCD[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[16] = arr;
    return this;
  }

  /** UB1.16 - Occurrence (28-32) (add single value) */
  add_ub1_16_occurrence(value: OCD | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[16];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[16] = [fv];
      }
    }
    return this;
  }

  /** UB1.16 - Occurrence (28-32) */
  get_ub1_16_occurrence(): OCD[] | undefined {
    const val = this.seg.fields[16];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromOCD(v)).filter((v): v is OCD => v !== undefined);
  }

  /** UB1.17 - Occurrence Span (33) */
  set_ub1_17_occurrenceSpan(value: CE | null | undefined): this {
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) this.seg.fields[17] = fv;
    return this;
  }

  /** UB1.17 - Occurrence Span (33) */
  get_ub1_17_occurrenceSpan(): CE | undefined {
    return fromCE(this.seg.fields[17]);
  }

  /** UB1.18 - Occur Span Start Date(33) */
  set_ub1_18_occurSpanStartDate(value: string | null | undefined): this {
    if (value != null) this.seg.fields[18] = value;
    return this;
  }

  /** UB1.18 - Occur Span Start Date(33) */
  get_ub1_18_occurSpanStartDate(): string | undefined {
    const val = this.seg.fields[18];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** UB1.19 - Occur Span End Date (33) */
  set_ub1_19_occurSpanEndDate(value: string | null | undefined): this {
    if (value != null) this.seg.fields[19] = value;
    return this;
  }

  /** UB1.19 - Occur Span End Date (33) */
  get_ub1_19_occurSpanEndDate(): string | undefined {
    const val = this.seg.fields[19];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** UB1.20 - UB-82 Locator 2 */
  set_ub1_20_ub82Locator2(value: string | null | undefined): this {
    if (value != null) this.seg.fields[20] = value;
    return this;
  }

  /** UB1.20 - UB-82 Locator 2 */
  get_ub1_20_ub82Locator2(): string | undefined {
    const val = this.seg.fields[20];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** UB1.21 - UB-82 Locator 9 */
  set_ub1_21_ub82Locator9(value: string | null | undefined): this {
    if (value != null) this.seg.fields[21] = value;
    return this;
  }

  /** UB1.21 - UB-82 Locator 9 */
  get_ub1_21_ub82Locator9(): string | undefined {
    const val = this.seg.fields[21];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** UB1.22 - UB-82 Locator 27 */
  set_ub1_22_ub82Locator27(value: string | null | undefined): this {
    if (value != null) this.seg.fields[22] = value;
    return this;
  }

  /** UB1.22 - UB-82 Locator 27 */
  get_ub1_22_ub82Locator27(): string | undefined {
    const val = this.seg.fields[22];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** UB1.23 - UB-82 Locator 45 */
  set_ub1_23_ub82Locator45(value: string | null | undefined): this {
    if (value != null) this.seg.fields[23] = value;
    return this;
  }

  /** UB1.23 - UB-82 Locator 45 */
  get_ub1_23_ub82Locator45(): string | undefined {
    const val = this.seg.fields[23];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  build(): HL7v2Segment {
    return this.seg;
  }
}

// ====== UB2 Segment ======

export class UB2Builder {
  private seg: HL7v2Segment = { segment: "UB2", fields: {} };

  /** UB2.1 - Set ID - UB2 */
  set_ub2_1_setIdUb2(value: string | null | undefined): this {
    if (value != null) this.seg.fields[1] = value;
    return this;
  }

  /** UB2.1 - Set ID - UB2 */
  get_ub2_1_setIdUb2(): string | undefined {
    const val = this.seg.fields[1];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** UB2.2 - Co-Insurance Days (9) */
  set_ub2_2_coInsuranceDays(value: string | null | undefined): this {
    if (value != null) this.seg.fields[2] = value;
    return this;
  }

  /** UB2.2 - Co-Insurance Days (9) */
  get_ub2_2_coInsuranceDays(): string | undefined {
    const val = this.seg.fields[2];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** UB2.3 - Condition Code (24-30) */
  set_ub2_3_conditionCode(value: string | null | undefined): this {
    if (value != null) this.seg.fields[3] = value;
    return this;
  }

  /** UB2.3 - Condition Code (24-30) */
  get_ub2_3_conditionCode(): string | undefined {
    const val = this.seg.fields[3];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** UB2.4 - Covered Days (7) */
  set_ub2_4_coveredDays(value: string | null | undefined): this {
    if (value != null) this.seg.fields[4] = value;
    return this;
  }

  /** UB2.4 - Covered Days (7) */
  get_ub2_4_coveredDays(): string | undefined {
    const val = this.seg.fields[4];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** UB2.5 - Non-Covered Days (8) */
  set_ub2_5_nonCoveredDays(value: string | null | undefined): this {
    if (value != null) this.seg.fields[5] = value;
    return this;
  }

  /** UB2.5 - Non-Covered Days (8) */
  get_ub2_5_nonCoveredDays(): string | undefined {
    const val = this.seg.fields[5];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** UB2.6 - Value Amount & Code (set all values) */
  set_ub2_6_valueAmountAndCode(values: UVC[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[6] = arr;
    return this;
  }

  /** UB2.6 - Value Amount & Code (add single value) */
  add_ub2_6_valueAmountAndCode(value: UVC | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[6];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[6] = [fv];
      }
    }
    return this;
  }

  /** UB2.6 - Value Amount & Code */
  get_ub2_6_valueAmountAndCode(): UVC[] | undefined {
    const val = this.seg.fields[6];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromUVC(v)).filter((v): v is UVC => v !== undefined);
  }

  /** UB2.7 - Occurrence Code & Date (32-35) (set all values) */
  set_ub2_7_occurrenceCodeAndDate(values: OCD[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[7] = arr;
    return this;
  }

  /** UB2.7 - Occurrence Code & Date (32-35) (add single value) */
  add_ub2_7_occurrenceCodeAndDate(value: OCD | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[7];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[7] = [fv];
      }
    }
    return this;
  }

  /** UB2.7 - Occurrence Code & Date (32-35) */
  get_ub2_7_occurrenceCodeAndDate(): OCD[] | undefined {
    const val = this.seg.fields[7];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromOCD(v)).filter((v): v is OCD => v !== undefined);
  }

  /** UB2.8 - Occurrence Span Code/Dates (36) (set all values) */
  set_ub2_8_occurrenceSpanCodeDates(values: OSP[] | null | undefined): this {
    if (values == null) return this;
    const arr: FieldValue[] = [];
    for (const v of values) {
      const fv = toFieldValue(v as Record<string, unknown>);
      if (fv !== undefined) arr.push(fv);
    }
    if (arr.length > 0) this.seg.fields[8] = arr;
    return this;
  }

  /** UB2.8 - Occurrence Span Code/Dates (36) (add single value) */
  add_ub2_8_occurrenceSpanCodeDates(value: OSP | null | undefined): this {
    if (value == null) return this;
    const fv = toFieldValue(value as Record<string, unknown>);
    if (fv !== undefined) {
      const existing = this.seg.fields[8];
      if (Array.isArray(existing)) {
        existing.push(fv);
      } else {
        this.seg.fields[8] = [fv];
      }
    }
    return this;
  }

  /** UB2.8 - Occurrence Span Code/Dates (36) */
  get_ub2_8_occurrenceSpanCodeDates(): OSP[] | undefined {
    const val = this.seg.fields[8];
    if (val === undefined) return undefined;
    const arr = Array.isArray(val) ? val : [val];
    return arr.map(v => fromOSP(v)).filter((v): v is OSP => v !== undefined);
  }

  /** UB2.9 - UB92 Locator 2 (State) */
  set_ub2_9_ub92Locator2(value: string | null | undefined): this {
    if (value != null) this.seg.fields[9] = value;
    return this;
  }

  /** UB2.9 - UB92 Locator 2 (State) */
  get_ub2_9_ub92Locator2(): string | undefined {
    const val = this.seg.fields[9];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** UB2.10 - UB92 Locator 11 (State) */
  set_ub2_10_ub92Locator11(value: string | null | undefined): this {
    if (value != null) this.seg.fields[10] = value;
    return this;
  }

  /** UB2.10 - UB92 Locator 11 (State) */
  get_ub2_10_ub92Locator11(): string | undefined {
    const val = this.seg.fields[10];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** UB2.11 - UB92 Locator 31 (National) */
  set_ub2_11_ub92Locator31(value: string | null | undefined): this {
    if (value != null) this.seg.fields[11] = value;
    return this;
  }

  /** UB2.11 - UB92 Locator 31 (National) */
  get_ub2_11_ub92Locator31(): string | undefined {
    const val = this.seg.fields[11];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** UB2.12 - Document Control Number */
  set_ub2_12_documentControlNumber(value: string | null | undefined): this {
    if (value != null) this.seg.fields[12] = value;
    return this;
  }

  /** UB2.12 - Document Control Number */
  get_ub2_12_documentControlNumber(): string | undefined {
    const val = this.seg.fields[12];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** UB2.13 - UB92 Locator 49 (National) */
  set_ub2_13_ub92Locator49(value: string | null | undefined): this {
    if (value != null) this.seg.fields[13] = value;
    return this;
  }

  /** UB2.13 - UB92 Locator 49 (National) */
  get_ub2_13_ub92Locator49(): string | undefined {
    const val = this.seg.fields[13];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** UB2.14 - UB92 Locator 56 (State) */
  set_ub2_14_ub92Locator56(value: string | null | undefined): this {
    if (value != null) this.seg.fields[14] = value;
    return this;
  }

  /** UB2.14 - UB92 Locator 56 (State) */
  get_ub2_14_ub92Locator56(): string | undefined {
    const val = this.seg.fields[14];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** UB2.15 - UB92 Locator 57 (National) */
  set_ub2_15_ub92Locator57(value: string | null | undefined): this {
    if (value != null) this.seg.fields[15] = value;
    return this;
  }

  /** UB2.15 - UB92 Locator 57 (National) */
  get_ub2_15_ub92Locator57(): string | undefined {
    const val = this.seg.fields[15];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** UB2.16 - UB92 Locator 78 (State) */
  set_ub2_16_ub92Locator78(value: string | null | undefined): this {
    if (value != null) this.seg.fields[16] = value;
    return this;
  }

  /** UB2.16 - UB92 Locator 78 (State) */
  get_ub2_16_ub92Locator78(): string | undefined {
    const val = this.seg.fields[16];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  /** UB2.17 - Special Visit Count */
  set_ub2_17_specialVisitCount(value: string | null | undefined): this {
    if (value != null) this.seg.fields[17] = value;
    return this;
  }

  /** UB2.17 - Special Visit Count */
  get_ub2_17_specialVisitCount(): string | undefined {
    const val = this.seg.fields[17];
    if (typeof val === "string") return val;
    if (Array.isArray(val) && typeof val[0] === "string") return val[0];
    return undefined;
  }

  build(): HL7v2Segment {
    return this.seg;
  }
}
