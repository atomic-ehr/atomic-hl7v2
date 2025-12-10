// AUTO-GENERATED - HL7v2 DataType Interfaces and Segment Builders
// Generated for: ADT_A01

import type { HL7v2Segment, FieldValue } from "./types";
import { getComponent } from "./types";
import { AcceptApplicationAcknowledgmentConditions, AdministrativeSex, AdmissionLevelOfCare, AdmissionType, AdvanceDirective, AllergenType, AllergySeverity, AlternateCharacterSetHandlingScheme, AlternateCharacterSets, AmbulatoryStatus, ArrivalMode, AssignmentOfBenefits, BedStatus, ClergyNotificationType, ContactRole2, CoordinationOfBenefits, CoverageType, DiagnosisClassification, DiagnosisPriority, DiagnosisType, DisabilityInformationRelationship, DrgTransferType, EligibilitySource, EmploymentStatus, EthnicGroup, Event, EventReason, HospitalService, IdentifierType, IdentityReliability, ImmunizationRegistryStatus, InsuranceCompanyContactReason, JobStatus, LivingArrangement, LivingDependency2, LivingWillCodes, MailClaimParty, MaritalStatus, MilitaryService, MilitaryStatus, NatureOfAbnormalTesting, ObservationResultStatusCodesInterpretation, OrganDonorCodes, OrganizationUnitType, OutlierType, PHRaceAndEthnicityCDC, PatientClass, PatientCondition, PatientStatus, PatientsRelationshipToInsured, Precaution, ProblemGoalAction, ProcedureDrgType, ProcedureFunctionalType, ProcedurePriority, ProductionClass, ProviderRole, Publicity, PurgeStatus, ReAdmissionIndicator, RecreationalDrugType, Relationship, Religion2, SegmentAction, SignatureType, SpecialProgram, StudentStatus, TissueType, TypeOfAgreement, VisitIndicator, VisitPriority, VisitUserCodes } from "./tables";

// ====== DataType Interfaces ======

/** AUI DataType */
export interface AUI {
  /** AUI.1 - Authorization Number */
  set_1_authorization?: string;
  /** AUI.2 - Date */
  set_2_date?: string;
  /** AUI.3 - Source */
  set_3_source?: string;
}

/** CE DataType */
export interface CE {
  /** CE.1 - Identifier */
  set_1_code?: string;
  /** CE.2 - Text */
  set_2_text?: string;
  /** CE.3 - Name of Coding System */
  set_3_system?: string;
  /** CE.4 - Alternate Identifier */
  set_4_altCode?: string;
  /** CE.5 - Alternate Text */
  set_5_altDisplay?: string;
  /** CE.6 - Name of Alternate Coding System */
  set_6_altSystem?: string;
}

/** CNE DataType */
export interface CNE {
  /** CNE.1 - Identifier */
  set_1_code?: string;
  /** CNE.2 - Text */
  set_2_text?: string;
  /** CNE.3 - Name of Coding System */
  set_3_system?: string;
  /** CNE.4 - Alternate Identifier */
  set_4_altCode?: string;
  /** CNE.5 - Alternate Text */
  set_5_altDisplay?: string;
  /** CNE.6 - Name of Alternate Coding System */
  set_6_altSystem?: string;
  /** CNE.7 - Coding System Version ID */
  set_7_version?: string;
  /** CNE.8 - Alternate Coding System Version ID */
  set_8_altVersion?: string;
  /** CNE.9 - Original Text */
  set_9_originalText?: string;
}

/** CP DataType */
export interface CP {
  /** CP.1 - Price */
  set_1_amount?: MO;
  /** CP.2 - Price Type */
  set_2_priceType?: string;
  /** CP.3 - From Value */
  set_3_low?: string;
  /** CP.4 - To Value */
  set_4_high?: string;
  /** CP.5 - Range Units */
  set_5_unit?: CE;
  /** CP.6 - Range Type */
  set_6_rangeType?: string;
}

/** CWE DataType */
export interface CWE {
  /** CWE.1 - Identifier */
  set_1_code?: string;
  /** CWE.2 - Text */
  set_2_text?: string;
  /** CWE.3 - Name of Coding System */
  set_3_system?: string;
  /** CWE.4 - Alternate Identifier */
  set_4_altCode?: string;
  /** CWE.5 - Alternate Text */
  set_5_altDisplay?: string;
  /** CWE.6 - Name of Alternate Coding System */
  set_6_altSystem?: string;
  /** CWE.7 - Coding System Version ID */
  set_7_version?: string;
  /** CWE.8 - Alternate Coding System Version ID */
  set_8_altVersion?: string;
  /** CWE.9 - Original Text */
  set_9_originalText?: string;
}

/** CX DataType */
export interface CX {
  /** CX.1 - ID Number */
  set_1_value?: string;
  /** CX.2 - Check Digit */
  set_2_checkDigit?: string;
  /** CX.3 - Check Digit Scheme */
  set_3_checkDigitScheme?: string;
  /** CX.4 - Assigning Authority */
  set_4_system?: HD;
  /** CX.5 - Identifier Type Code */
  set_5_type?: string;
  /** CX.6 - Assigning Facility */
  set_6_assigner?: HD;
  /** CX.7 - Effective Date */
  set_7_start?: string;
  /** CX.8 - Expiration Date */
  set_8_end?: string;
  /** CX.9 - Assigning Jurisdiction */
  set_9_jurisdiction?: CWE;
  /** CX.10 - Assigning Agency or Department */
  set_10_department?: CWE;
}

/** DDI DataType */
export interface DDI {
  /** DDI.1 - Delay Days */
  set_1_delay?: string;
  /** DDI.2 - Monetary Amount */
  set_2_amount?: MO;
  /** DDI.3 - Number of Days */
  set_3_days?: string;
}

/** DLD DataType */
export interface DLD {
  /** DLD.1 - Discharge Location */
  set_1_location?: string;
  /** DLD.2 - Effective Date */
  set_2_start?: string;
}

/** DLN DataType */
export interface DLN {
  /** DLN.1 - License Number */
  set_1_license?: string;
  /** DLN.2 - Issuing State, Province, Country */
  set_2_issuingAuthority?: string;
  /** DLN.3 - Expiration Date */
  set_3_end?: string;
}

/** DR DataType */
export interface DR {
  /** DR.1 - Range Start Date/Time */
  set_1_start?: string;
  /** DR.2 - Range End Date/Time */
  set_2_end?: string;
}

/** DTN DataType */
export interface DTN {
  /** DTN.1 - Day Type */
  set_1_dayType?: string;
  /** DTN.2 - Number of Days */
  set_2_days?: string;
}

/** EI DataType */
export interface EI {
  /** EI.1 - Entity Identifier */
  set_1_value?: string;
  /** EI.2 - Namespace ID */
  set_2_namespace?: string;
  /** EI.3 - Universal ID */
  set_3_system?: string;
  /** EI.4 - Universal ID Type */
  set_4_systemType?: string;
}

/** FC DataType */
export interface FC {
  /** FC.1 - Financial Class Code */
  set_1_code?: string;
  /** FC.2 - Effective Date */
  set_2_start?: string;
}

/** FN DataType */
export interface FN {
  /** FN.1 - Surname */
  set_1_family?: string;
  /** FN.2 - Own Surname Prefix */
  set_2_ownPrefix?: string;
  /** FN.3 - Own Surname */
  set_3_ownFamily?: string;
  /** FN.4 - Surname Prefix From Partner/Spouse */
  set_4_partnerPrefix?: string;
  /** FN.5 - Surname From Partner/Spouse */
  set_5_partnerFamily?: string;
}

/** HD DataType */
export interface HD {
  /** HD.1 - Namespace ID */
  set_1_namespace?: string;
  /** HD.2 - Universal ID */
  set_2_system?: string;
  /** HD.3 - Universal ID Type */
  set_3_systemType?: string;
}

/** ICD DataType */
export interface ICD {
  /** ICD.1 - Certification Patient Type */
  set_1_patientType?: string;
  /** ICD.2 - Certification Required */
  set_2_required?: string;
  /** ICD.3 - Date/Time Certification Required */
  set_3_requiredAt?: string;
}

/** JCC DataType */
export interface JCC {
  /** JCC.1 - Job Code */
  set_1_jobCode?: string;
  /** JCC.2 - Job Class */
  set_2_jobClass?: string;
  /** JCC.3 - Job Description Text */
  set_3_jobDescription?: string;
}

/** MO DataType */
export interface MO {
  /** MO.1 - Quantity */
  set_1_value?: string;
  /** MO.2 - Denomination */
  set_2_currency?: string;
}

/** MOP DataType */
export interface MOP {
  /** MOP.1 - Money or Percentage Indicator */
  set_1_indicator?: string;
  /** MOP.2 - Money or Percentage Quantity */
  set_2_value?: string;
  /** MOP.3 - Currency Denomination */
  set_3_currency?: string;
}

/** MSG DataType */
export interface MSG {
  /** MSG.1 - Message Code */
  set_1_code?: string;
  /** MSG.2 - Trigger Event */
  set_2_event?: string;
  /** MSG.3 - Message Structure */
  set_3_structure?: string;
}

/** OCD DataType */
export interface OCD {
  /** OCD.1 - Occurrence Code */
  set_1_code?: CNE;
  /** OCD.2 - Occurrence Date */
  set_2_date?: string;
}

/** OSP DataType */
export interface OSP {
  /** OSP.1 - Occurrence Span Code */
  set_1_code?: CNE;
  /** OSP.2 - Occurrence Span Start Date */
  set_2_start?: string;
  /** OSP.3 - Occurrence Span Stop Date */
  set_3_end?: string;
}

/** PL DataType */
export interface PL {
  /** PL.1 - Point of Care */
  set_1_careSite?: string;
  /** PL.2 - Room */
  set_2_room?: string;
  /** PL.3 - Bed */
  set_3_bed?: string;
  /** PL.4 - Facility */
  set_4_facility?: HD;
  /** PL.5 - Location Status */
  set_5_status?: string;
  /** PL.6 - Person Location Type */
  set_6_locationType?: string;
  /** PL.7 - Building */
  set_7_building?: string;
  /** PL.8 - Floor */
  set_8_floor?: string;
  /** PL.9 - Location Description */
  set_9_description?: string;
  /** PL.10 - Comprehensive Location Identifier */
  set_10_identifier?: EI;
  /** PL.11 - Assigning Authority for Location */
  set_11_locationSystem?: HD;
}

/** PT DataType */
export interface PT {
  /** PT.1 - Processing ID */
  set_1_processingId?: string;
  /** PT.2 - Processing Mode */
  set_2_processingMode?: string;
}

/** PTA DataType */
export interface PTA {
  /** PTA.1 - Policy Type */
  set_1_policyType?: string;
  /** PTA.2 - Amount Class */
  set_2_amountClass?: string;
  /** PTA.3 - Money or Percentage Quantity */
  set_3_value?: string;
  /** PTA.4 - Money or Percentage */
  set_4_basis?: MOP;
}

/** RMC DataType */
export interface RMC {
  /** RMC.1 - Room Type */
  set_1_roomType?: string;
  /** RMC.2 - Amount Type */
  set_2_amountType?: string;
  /** RMC.3 - Coverage Amount */
  set_3_coverage?: string;
  /** RMC.4 - Money or Percentage */
  set_4_basis?: MOP;
}

/** SAD DataType */
export interface SAD {
  /** SAD.1 - Street or Mailing Address */
  set_1_line?: string;
  /** SAD.2 - Street Name */
  set_2_streetName?: string;
  /** SAD.3 - Dwelling Number */
  set_3_houseNumber?: string;
}

/** UVC DataType */
export interface UVC {
  /** UVC.1 - Value Code */
  set_1_code?: CNE;
  /** UVC.2 - Value Amount */
  set_2_amount?: MO;
}

/** VID DataType */
export interface VID {
  /** VID.1 - Version ID */
  set_1_version?: string;
  /** VID.2 - Internationalization Code */
  set_2_locale?: CE;
  /** VID.3 - International Version ID */
  set_3_internationalVersion?: CE;
}

/** XAD DataType */
export interface XAD {
  /** XAD.1 - Street Address */
  set_1_line1?: SAD;
  /** XAD.2 - Other Designation */
  set_2_line2?: string;
  /** XAD.3 - City */
  set_3_city?: string;
  /** XAD.4 - State or Province */
  set_4_state?: string;
  /** XAD.5 - Zip or Postal Code */
  set_5_postalCode?: string;
  /** XAD.6 - Country */
  set_6_country?: string;
  /** XAD.7 - Address Type */
  set_7_type?: string;
  /** XAD.8 - Other Geographic Designation */
  set_8_additionalLocator?: string;
  /** XAD.9 - County/Parish Code */
  set_9_district?: string;
  /** XAD.10 - Census Tract */
  set_10_censusTract?: string;
  /** XAD.11 - Address Representation Code */
  set_11_representation?: string;
  /** XAD.12 - Address Validity Range */
  set_12_period?: DR;
  /** XAD.13 - Effective Date */
  set_13_start?: string;
  /** XAD.14 - Expiration Date */
  set_14_end?: string;
}

/** XCN DataType */
export interface XCN {
  /** XCN.1 - ID Number */
  set_1_value?: string;
  /** XCN.2 - Family Name */
  set_2_family?: FN;
  /** XCN.3 - Given Name */
  set_3_given?: string;
  /** XCN.4 - Second and Further Given Names or Initials Thereof */
  set_4_additionalGiven?: string;
  /** XCN.5 - Suffix (e.g., JR or III) */
  set_5_suffix?: string;
  /** XCN.6 - Prefix (e.g., DR) */
  set_6_prefix?: string;
  /** XCN.7 - Degree (e.g., MD) */
  set_7_qualification?: string;
  /** XCN.8 - Source Table */
  set_8_sourceTable?: string;
  /** XCN.9 - Assigning Authority */
  set_9_system?: HD;
  /** XCN.10 - Name Type Code */
  set_10_use?: string;
  /** XCN.11 - Identifier Check Digit */
  set_11_checkDigit?: string;
  /** XCN.12 - Check Digit Scheme */
  set_12_checkDigitScheme?: string;
  /** XCN.13 - Identifier Type Code */
  set_13_type?: string;
  /** XCN.14 - Assigning Facility */
  set_14_assigner?: HD;
  /** XCN.15 - Name Representation Code */
  set_15_representation?: string;
  /** XCN.16 - Name Context */
  set_16_context?: CE;
  /** XCN.17 - Name Validity Range */
  set_17_period?: DR;
  /** XCN.18 - Name Assembly Order */
  set_18_order?: string;
  /** XCN.19 - Effective Date */
  set_19_start?: string;
  /** XCN.20 - Expiration Date */
  set_20_end?: string;
  /** XCN.21 - Professional Suffix */
  set_21_credential?: string;
  /** XCN.22 - Assigning Jurisdiction */
  set_22_jurisdiction?: CWE;
  /** XCN.23 - Assigning Agency or Department */
  set_23_department?: CWE;
}

/** XON DataType */
export interface XON {
  /** XON.1 - Organization Name */
  set_1_name?: string;
  /** XON.2 - Organization Name Type Code */
  set_2_nameType?: string;
  /** XON.3 - ID Number */
  set_3_value?: string;
  /** XON.4 - Check Digit */
  set_4_checkDigit?: string;
  /** XON.5 - Check Digit Scheme */
  set_5_checkDigitScheme?: string;
  /** XON.6 - Assigning Authority */
  set_6_system?: HD;
  /** XON.7 - Identifier Type Code */
  set_7_type?: string;
  /** XON.8 - Assigning Facility */
  set_8_assigner?: HD;
  /** XON.9 - Name Representation Code */
  set_9_representation?: string;
  /** XON.10 - Organization Identifier */
  set_10_organizationId?: string;
}

/** XPN DataType */
export interface XPN {
  /** XPN.1 - Family Name */
  set_1_family?: FN;
  /** XPN.2 - Given Name */
  set_2_given?: string;
  /** XPN.3 - Second and Further Given Names or Initials Thereof */
  set_3_additionalGiven?: string;
  /** XPN.4 - Suffix (e.g., JR or III) */
  set_4_suffix?: string;
  /** XPN.5 - Prefix (e.g., DR) */
  set_5_prefix?: string;
  /** XPN.6 - Degree (e.g., MD) */
  set_6_qualification?: string;
  /** XPN.7 - Name Type Code */
  set_7_use?: string;
  /** XPN.8 - Name Representation Code */
  set_8_representation?: string;
  /** XPN.9 - Name Context */
  set_9_context?: CE;
  /** XPN.10 - Name Validity Range */
  set_10_period?: DR;
  /** XPN.11 - Name Assembly Order */
  set_11_order?: string;
  /** XPN.12 - Effective Date */
  set_12_start?: string;
  /** XPN.13 - Expiration Date */
  set_13_end?: string;
  /** XPN.14 - Professional Suffix */
  set_14_credential?: string;
}

/** XTN DataType */
export interface XTN {
  /** XTN.1 - Telephone Number */
  set_1_value?: string;
  /** XTN.2 - Telecommunication Use Code */
  set_2_use?: string;
  /** XTN.3 - Telecommunication Equipment Type */
  set_3_system?: string;
  /** XTN.4 - Email Address */
  set_4_email?: string;
  /** XTN.5 - Country Code */
  set_5_countryCode?: string;
  /** XTN.6 - Area/City Code */
  set_6_areaCode?: string;
  /** XTN.7 - Local Number */
  set_7_localNumber?: string;
  /** XTN.8 - Extension */
  set_8_extension?: string;
  /** XTN.9 - Any Text */
  set_9_text?: string;
  /** XTN.10 - Extension Prefix */
  set_10_extensionPrefix?: string;
  /** XTN.11 - Speed Dial Code */
  set_11_speedDial?: string;
  /** XTN.12 - Unformatted Telephone number */
  set_12_unformatted?: string;
}

// ====== Conversion Functions ======

/** Convert a record object to FieldValue */
function toFieldValue(obj: Record<string, unknown> | null | undefined): FieldValue | undefined {
  if (obj == null) return undefined;
  const result: { [key: number]: FieldValue } = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value == null) continue;
    const match = key.match(/^set_(\d+)_/);
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
  if (typeof fv === "string") return { set_1_authorization: fv };
  if (Array.isArray(fv)) return fromAUI(fv[0]);
  const result: AUI = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.set_1_authorization = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.set_1_authorization = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.set_2_date = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.set_2_date = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.set_3_source = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.set_3_source = (v3 as any)[1];
  }
  return result;
}

/** Convert FieldValue to CE */
function fromCE(fv: FieldValue | undefined): CE | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { set_1_code: fv };
  if (Array.isArray(fv)) return fromCE(fv[0]);
  const result: CE = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.set_1_code = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.set_1_code = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.set_2_text = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.set_2_text = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.set_3_system = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.set_3_system = (v3 as any)[1];
  }
  if (fv[4] !== undefined) {
    const v4 = fv[4];
    if (typeof v4 === "string") result.set_4_altCode = v4;
    else if (typeof v4 === "object" && !Array.isArray(v4) && typeof (v4 as any)[1] === "string") result.set_4_altCode = (v4 as any)[1];
  }
  if (fv[5] !== undefined) {
    const v5 = fv[5];
    if (typeof v5 === "string") result.set_5_altDisplay = v5;
    else if (typeof v5 === "object" && !Array.isArray(v5) && typeof (v5 as any)[1] === "string") result.set_5_altDisplay = (v5 as any)[1];
  }
  if (fv[6] !== undefined) {
    const v6 = fv[6];
    if (typeof v6 === "string") result.set_6_altSystem = v6;
    else if (typeof v6 === "object" && !Array.isArray(v6) && typeof (v6 as any)[1] === "string") result.set_6_altSystem = (v6 as any)[1];
  }
  return result;
}

/** Convert FieldValue to CNE */
function fromCNE(fv: FieldValue | undefined): CNE | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { set_1_code: fv };
  if (Array.isArray(fv)) return fromCNE(fv[0]);
  const result: CNE = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.set_1_code = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.set_1_code = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.set_2_text = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.set_2_text = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.set_3_system = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.set_3_system = (v3 as any)[1];
  }
  if (fv[4] !== undefined) {
    const v4 = fv[4];
    if (typeof v4 === "string") result.set_4_altCode = v4;
    else if (typeof v4 === "object" && !Array.isArray(v4) && typeof (v4 as any)[1] === "string") result.set_4_altCode = (v4 as any)[1];
  }
  if (fv[5] !== undefined) {
    const v5 = fv[5];
    if (typeof v5 === "string") result.set_5_altDisplay = v5;
    else if (typeof v5 === "object" && !Array.isArray(v5) && typeof (v5 as any)[1] === "string") result.set_5_altDisplay = (v5 as any)[1];
  }
  if (fv[6] !== undefined) {
    const v6 = fv[6];
    if (typeof v6 === "string") result.set_6_altSystem = v6;
    else if (typeof v6 === "object" && !Array.isArray(v6) && typeof (v6 as any)[1] === "string") result.set_6_altSystem = (v6 as any)[1];
  }
  if (fv[7] !== undefined) {
    const v7 = fv[7];
    if (typeof v7 === "string") result.set_7_version = v7;
    else if (typeof v7 === "object" && !Array.isArray(v7) && typeof (v7 as any)[1] === "string") result.set_7_version = (v7 as any)[1];
  }
  if (fv[8] !== undefined) {
    const v8 = fv[8];
    if (typeof v8 === "string") result.set_8_altVersion = v8;
    else if (typeof v8 === "object" && !Array.isArray(v8) && typeof (v8 as any)[1] === "string") result.set_8_altVersion = (v8 as any)[1];
  }
  if (fv[9] !== undefined) {
    const v9 = fv[9];
    if (typeof v9 === "string") result.set_9_originalText = v9;
    else if (typeof v9 === "object" && !Array.isArray(v9) && typeof (v9 as any)[1] === "string") result.set_9_originalText = (v9 as any)[1];
  }
  return result;
}

/** Convert FieldValue to CP */
function fromCP(fv: FieldValue | undefined): CP | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { set_1_amount: fromMO(fv) };
  if (Array.isArray(fv)) return fromCP(fv[0]);
  const result: CP = {};
  if (fv[1] !== undefined) result.set_1_amount = fromMO(fv[1]);
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.set_2_priceType = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.set_2_priceType = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.set_3_low = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.set_3_low = (v3 as any)[1];
  }
  if (fv[4] !== undefined) {
    const v4 = fv[4];
    if (typeof v4 === "string") result.set_4_high = v4;
    else if (typeof v4 === "object" && !Array.isArray(v4) && typeof (v4 as any)[1] === "string") result.set_4_high = (v4 as any)[1];
  }
  if (fv[5] !== undefined) result.set_5_unit = fromCE(fv[5]);
  if (fv[6] !== undefined) {
    const v6 = fv[6];
    if (typeof v6 === "string") result.set_6_rangeType = v6;
    else if (typeof v6 === "object" && !Array.isArray(v6) && typeof (v6 as any)[1] === "string") result.set_6_rangeType = (v6 as any)[1];
  }
  return result;
}

/** Convert FieldValue to CWE */
function fromCWE(fv: FieldValue | undefined): CWE | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { set_1_code: fv };
  if (Array.isArray(fv)) return fromCWE(fv[0]);
  const result: CWE = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.set_1_code = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.set_1_code = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.set_2_text = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.set_2_text = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.set_3_system = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.set_3_system = (v3 as any)[1];
  }
  if (fv[4] !== undefined) {
    const v4 = fv[4];
    if (typeof v4 === "string") result.set_4_altCode = v4;
    else if (typeof v4 === "object" && !Array.isArray(v4) && typeof (v4 as any)[1] === "string") result.set_4_altCode = (v4 as any)[1];
  }
  if (fv[5] !== undefined) {
    const v5 = fv[5];
    if (typeof v5 === "string") result.set_5_altDisplay = v5;
    else if (typeof v5 === "object" && !Array.isArray(v5) && typeof (v5 as any)[1] === "string") result.set_5_altDisplay = (v5 as any)[1];
  }
  if (fv[6] !== undefined) {
    const v6 = fv[6];
    if (typeof v6 === "string") result.set_6_altSystem = v6;
    else if (typeof v6 === "object" && !Array.isArray(v6) && typeof (v6 as any)[1] === "string") result.set_6_altSystem = (v6 as any)[1];
  }
  if (fv[7] !== undefined) {
    const v7 = fv[7];
    if (typeof v7 === "string") result.set_7_version = v7;
    else if (typeof v7 === "object" && !Array.isArray(v7) && typeof (v7 as any)[1] === "string") result.set_7_version = (v7 as any)[1];
  }
  if (fv[8] !== undefined) {
    const v8 = fv[8];
    if (typeof v8 === "string") result.set_8_altVersion = v8;
    else if (typeof v8 === "object" && !Array.isArray(v8) && typeof (v8 as any)[1] === "string") result.set_8_altVersion = (v8 as any)[1];
  }
  if (fv[9] !== undefined) {
    const v9 = fv[9];
    if (typeof v9 === "string") result.set_9_originalText = v9;
    else if (typeof v9 === "object" && !Array.isArray(v9) && typeof (v9 as any)[1] === "string") result.set_9_originalText = (v9 as any)[1];
  }
  return result;
}

/** Convert FieldValue to CX */
function fromCX(fv: FieldValue | undefined): CX | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { set_1_value: fv };
  if (Array.isArray(fv)) return fromCX(fv[0]);
  const result: CX = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.set_1_value = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.set_1_value = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.set_2_checkDigit = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.set_2_checkDigit = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.set_3_checkDigitScheme = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.set_3_checkDigitScheme = (v3 as any)[1];
  }
  if (fv[4] !== undefined) result.set_4_system = fromHD(fv[4]);
  if (fv[5] !== undefined) {
    const v5 = fv[5];
    if (typeof v5 === "string") result.set_5_type = v5;
    else if (typeof v5 === "object" && !Array.isArray(v5) && typeof (v5 as any)[1] === "string") result.set_5_type = (v5 as any)[1];
  }
  if (fv[6] !== undefined) result.set_6_assigner = fromHD(fv[6]);
  if (fv[7] !== undefined) {
    const v7 = fv[7];
    if (typeof v7 === "string") result.set_7_start = v7;
    else if (typeof v7 === "object" && !Array.isArray(v7) && typeof (v7 as any)[1] === "string") result.set_7_start = (v7 as any)[1];
  }
  if (fv[8] !== undefined) {
    const v8 = fv[8];
    if (typeof v8 === "string") result.set_8_end = v8;
    else if (typeof v8 === "object" && !Array.isArray(v8) && typeof (v8 as any)[1] === "string") result.set_8_end = (v8 as any)[1];
  }
  if (fv[9] !== undefined) result.set_9_jurisdiction = fromCWE(fv[9]);
  if (fv[10] !== undefined) result.set_10_department = fromCWE(fv[10]);
  return result;
}

/** Convert FieldValue to DDI */
function fromDDI(fv: FieldValue | undefined): DDI | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { set_1_delay: fv };
  if (Array.isArray(fv)) return fromDDI(fv[0]);
  const result: DDI = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.set_1_delay = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.set_1_delay = (v1 as any)[1];
  }
  if (fv[2] !== undefined) result.set_2_amount = fromMO(fv[2]);
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.set_3_days = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.set_3_days = (v3 as any)[1];
  }
  return result;
}

/** Convert FieldValue to DLD */
function fromDLD(fv: FieldValue | undefined): DLD | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { set_1_location: fv };
  if (Array.isArray(fv)) return fromDLD(fv[0]);
  const result: DLD = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.set_1_location = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.set_1_location = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.set_2_start = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.set_2_start = (v2 as any)[1];
  }
  return result;
}

/** Convert FieldValue to DLN */
function fromDLN(fv: FieldValue | undefined): DLN | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { set_1_license: fv };
  if (Array.isArray(fv)) return fromDLN(fv[0]);
  const result: DLN = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.set_1_license = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.set_1_license = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.set_2_issuingAuthority = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.set_2_issuingAuthority = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.set_3_end = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.set_3_end = (v3 as any)[1];
  }
  return result;
}

/** Convert FieldValue to DR */
function fromDR(fv: FieldValue | undefined): DR | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { set_1_start: fv };
  if (Array.isArray(fv)) return fromDR(fv[0]);
  const result: DR = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.set_1_start = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.set_1_start = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.set_2_end = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.set_2_end = (v2 as any)[1];
  }
  return result;
}

/** Convert FieldValue to DTN */
function fromDTN(fv: FieldValue | undefined): DTN | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { set_1_dayType: fv };
  if (Array.isArray(fv)) return fromDTN(fv[0]);
  const result: DTN = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.set_1_dayType = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.set_1_dayType = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.set_2_days = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.set_2_days = (v2 as any)[1];
  }
  return result;
}

/** Convert FieldValue to EI */
function fromEI(fv: FieldValue | undefined): EI | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { set_1_value: fv };
  if (Array.isArray(fv)) return fromEI(fv[0]);
  const result: EI = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.set_1_value = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.set_1_value = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.set_2_namespace = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.set_2_namespace = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.set_3_system = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.set_3_system = (v3 as any)[1];
  }
  if (fv[4] !== undefined) {
    const v4 = fv[4];
    if (typeof v4 === "string") result.set_4_systemType = v4;
    else if (typeof v4 === "object" && !Array.isArray(v4) && typeof (v4 as any)[1] === "string") result.set_4_systemType = (v4 as any)[1];
  }
  return result;
}

/** Convert FieldValue to FC */
function fromFC(fv: FieldValue | undefined): FC | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { set_1_code: fv };
  if (Array.isArray(fv)) return fromFC(fv[0]);
  const result: FC = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.set_1_code = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.set_1_code = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.set_2_start = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.set_2_start = (v2 as any)[1];
  }
  return result;
}

/** Convert FieldValue to FN */
function fromFN(fv: FieldValue | undefined): FN | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { set_1_family: fv };
  if (Array.isArray(fv)) return fromFN(fv[0]);
  const result: FN = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.set_1_family = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.set_1_family = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.set_2_ownPrefix = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.set_2_ownPrefix = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.set_3_ownFamily = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.set_3_ownFamily = (v3 as any)[1];
  }
  if (fv[4] !== undefined) {
    const v4 = fv[4];
    if (typeof v4 === "string") result.set_4_partnerPrefix = v4;
    else if (typeof v4 === "object" && !Array.isArray(v4) && typeof (v4 as any)[1] === "string") result.set_4_partnerPrefix = (v4 as any)[1];
  }
  if (fv[5] !== undefined) {
    const v5 = fv[5];
    if (typeof v5 === "string") result.set_5_partnerFamily = v5;
    else if (typeof v5 === "object" && !Array.isArray(v5) && typeof (v5 as any)[1] === "string") result.set_5_partnerFamily = (v5 as any)[1];
  }
  return result;
}

/** Convert FieldValue to HD */
function fromHD(fv: FieldValue | undefined): HD | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { set_1_namespace: fv };
  if (Array.isArray(fv)) return fromHD(fv[0]);
  const result: HD = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.set_1_namespace = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.set_1_namespace = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.set_2_system = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.set_2_system = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.set_3_systemType = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.set_3_systemType = (v3 as any)[1];
  }
  return result;
}

/** Convert FieldValue to ICD */
function fromICD(fv: FieldValue | undefined): ICD | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { set_1_patientType: fv };
  if (Array.isArray(fv)) return fromICD(fv[0]);
  const result: ICD = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.set_1_patientType = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.set_1_patientType = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.set_2_required = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.set_2_required = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.set_3_requiredAt = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.set_3_requiredAt = (v3 as any)[1];
  }
  return result;
}

/** Convert FieldValue to JCC */
function fromJCC(fv: FieldValue | undefined): JCC | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { set_1_jobCode: fv };
  if (Array.isArray(fv)) return fromJCC(fv[0]);
  const result: JCC = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.set_1_jobCode = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.set_1_jobCode = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.set_2_jobClass = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.set_2_jobClass = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.set_3_jobDescription = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.set_3_jobDescription = (v3 as any)[1];
  }
  return result;
}

/** Convert FieldValue to MO */
function fromMO(fv: FieldValue | undefined): MO | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { set_1_value: fv };
  if (Array.isArray(fv)) return fromMO(fv[0]);
  const result: MO = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.set_1_value = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.set_1_value = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.set_2_currency = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.set_2_currency = (v2 as any)[1];
  }
  return result;
}

/** Convert FieldValue to MOP */
function fromMOP(fv: FieldValue | undefined): MOP | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { set_1_indicator: fv };
  if (Array.isArray(fv)) return fromMOP(fv[0]);
  const result: MOP = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.set_1_indicator = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.set_1_indicator = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.set_2_value = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.set_2_value = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.set_3_currency = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.set_3_currency = (v3 as any)[1];
  }
  return result;
}

/** Convert FieldValue to MSG */
function fromMSG(fv: FieldValue | undefined): MSG | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { set_1_code: fv };
  if (Array.isArray(fv)) return fromMSG(fv[0]);
  const result: MSG = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.set_1_code = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.set_1_code = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.set_2_event = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.set_2_event = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.set_3_structure = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.set_3_structure = (v3 as any)[1];
  }
  return result;
}

/** Convert FieldValue to OCD */
function fromOCD(fv: FieldValue | undefined): OCD | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { set_1_code: fromCNE(fv) };
  if (Array.isArray(fv)) return fromOCD(fv[0]);
  const result: OCD = {};
  if (fv[1] !== undefined) result.set_1_code = fromCNE(fv[1]);
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.set_2_date = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.set_2_date = (v2 as any)[1];
  }
  return result;
}

/** Convert FieldValue to OSP */
function fromOSP(fv: FieldValue | undefined): OSP | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { set_1_code: fromCNE(fv) };
  if (Array.isArray(fv)) return fromOSP(fv[0]);
  const result: OSP = {};
  if (fv[1] !== undefined) result.set_1_code = fromCNE(fv[1]);
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.set_2_start = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.set_2_start = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.set_3_end = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.set_3_end = (v3 as any)[1];
  }
  return result;
}

/** Convert FieldValue to PL */
function fromPL(fv: FieldValue | undefined): PL | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { set_1_careSite: fv };
  if (Array.isArray(fv)) return fromPL(fv[0]);
  const result: PL = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.set_1_careSite = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.set_1_careSite = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.set_2_room = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.set_2_room = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.set_3_bed = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.set_3_bed = (v3 as any)[1];
  }
  if (fv[4] !== undefined) result.set_4_facility = fromHD(fv[4]);
  if (fv[5] !== undefined) {
    const v5 = fv[5];
    if (typeof v5 === "string") result.set_5_status = v5;
    else if (typeof v5 === "object" && !Array.isArray(v5) && typeof (v5 as any)[1] === "string") result.set_5_status = (v5 as any)[1];
  }
  if (fv[6] !== undefined) {
    const v6 = fv[6];
    if (typeof v6 === "string") result.set_6_locationType = v6;
    else if (typeof v6 === "object" && !Array.isArray(v6) && typeof (v6 as any)[1] === "string") result.set_6_locationType = (v6 as any)[1];
  }
  if (fv[7] !== undefined) {
    const v7 = fv[7];
    if (typeof v7 === "string") result.set_7_building = v7;
    else if (typeof v7 === "object" && !Array.isArray(v7) && typeof (v7 as any)[1] === "string") result.set_7_building = (v7 as any)[1];
  }
  if (fv[8] !== undefined) {
    const v8 = fv[8];
    if (typeof v8 === "string") result.set_8_floor = v8;
    else if (typeof v8 === "object" && !Array.isArray(v8) && typeof (v8 as any)[1] === "string") result.set_8_floor = (v8 as any)[1];
  }
  if (fv[9] !== undefined) {
    const v9 = fv[9];
    if (typeof v9 === "string") result.set_9_description = v9;
    else if (typeof v9 === "object" && !Array.isArray(v9) && typeof (v9 as any)[1] === "string") result.set_9_description = (v9 as any)[1];
  }
  if (fv[10] !== undefined) result.set_10_identifier = fromEI(fv[10]);
  if (fv[11] !== undefined) result.set_11_locationSystem = fromHD(fv[11]);
  return result;
}

/** Convert FieldValue to PT */
function fromPT(fv: FieldValue | undefined): PT | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { set_1_processingId: fv };
  if (Array.isArray(fv)) return fromPT(fv[0]);
  const result: PT = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.set_1_processingId = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.set_1_processingId = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.set_2_processingMode = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.set_2_processingMode = (v2 as any)[1];
  }
  return result;
}

/** Convert FieldValue to PTA */
function fromPTA(fv: FieldValue | undefined): PTA | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { set_1_policyType: fv };
  if (Array.isArray(fv)) return fromPTA(fv[0]);
  const result: PTA = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.set_1_policyType = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.set_1_policyType = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.set_2_amountClass = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.set_2_amountClass = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.set_3_value = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.set_3_value = (v3 as any)[1];
  }
  if (fv[4] !== undefined) result.set_4_basis = fromMOP(fv[4]);
  return result;
}

/** Convert FieldValue to RMC */
function fromRMC(fv: FieldValue | undefined): RMC | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { set_1_roomType: fv };
  if (Array.isArray(fv)) return fromRMC(fv[0]);
  const result: RMC = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.set_1_roomType = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.set_1_roomType = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.set_2_amountType = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.set_2_amountType = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.set_3_coverage = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.set_3_coverage = (v3 as any)[1];
  }
  if (fv[4] !== undefined) result.set_4_basis = fromMOP(fv[4]);
  return result;
}

/** Convert FieldValue to SAD */
function fromSAD(fv: FieldValue | undefined): SAD | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { set_1_line: fv };
  if (Array.isArray(fv)) return fromSAD(fv[0]);
  const result: SAD = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.set_1_line = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.set_1_line = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.set_2_streetName = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.set_2_streetName = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.set_3_houseNumber = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.set_3_houseNumber = (v3 as any)[1];
  }
  return result;
}

/** Convert FieldValue to UVC */
function fromUVC(fv: FieldValue | undefined): UVC | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { set_1_code: fromCNE(fv) };
  if (Array.isArray(fv)) return fromUVC(fv[0]);
  const result: UVC = {};
  if (fv[1] !== undefined) result.set_1_code = fromCNE(fv[1]);
  if (fv[2] !== undefined) result.set_2_amount = fromMO(fv[2]);
  return result;
}

/** Convert FieldValue to VID */
function fromVID(fv: FieldValue | undefined): VID | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { set_1_version: fv };
  if (Array.isArray(fv)) return fromVID(fv[0]);
  const result: VID = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.set_1_version = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.set_1_version = (v1 as any)[1];
  }
  if (fv[2] !== undefined) result.set_2_locale = fromCE(fv[2]);
  if (fv[3] !== undefined) result.set_3_internationalVersion = fromCE(fv[3]);
  return result;
}

/** Convert FieldValue to XAD */
function fromXAD(fv: FieldValue | undefined): XAD | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { set_1_line1: fromSAD(fv) };
  if (Array.isArray(fv)) return fromXAD(fv[0]);
  const result: XAD = {};
  if (fv[1] !== undefined) result.set_1_line1 = fromSAD(fv[1]);
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.set_2_line2 = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.set_2_line2 = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.set_3_city = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.set_3_city = (v3 as any)[1];
  }
  if (fv[4] !== undefined) {
    const v4 = fv[4];
    if (typeof v4 === "string") result.set_4_state = v4;
    else if (typeof v4 === "object" && !Array.isArray(v4) && typeof (v4 as any)[1] === "string") result.set_4_state = (v4 as any)[1];
  }
  if (fv[5] !== undefined) {
    const v5 = fv[5];
    if (typeof v5 === "string") result.set_5_postalCode = v5;
    else if (typeof v5 === "object" && !Array.isArray(v5) && typeof (v5 as any)[1] === "string") result.set_5_postalCode = (v5 as any)[1];
  }
  if (fv[6] !== undefined) {
    const v6 = fv[6];
    if (typeof v6 === "string") result.set_6_country = v6;
    else if (typeof v6 === "object" && !Array.isArray(v6) && typeof (v6 as any)[1] === "string") result.set_6_country = (v6 as any)[1];
  }
  if (fv[7] !== undefined) {
    const v7 = fv[7];
    if (typeof v7 === "string") result.set_7_type = v7;
    else if (typeof v7 === "object" && !Array.isArray(v7) && typeof (v7 as any)[1] === "string") result.set_7_type = (v7 as any)[1];
  }
  if (fv[8] !== undefined) {
    const v8 = fv[8];
    if (typeof v8 === "string") result.set_8_additionalLocator = v8;
    else if (typeof v8 === "object" && !Array.isArray(v8) && typeof (v8 as any)[1] === "string") result.set_8_additionalLocator = (v8 as any)[1];
  }
  if (fv[9] !== undefined) {
    const v9 = fv[9];
    if (typeof v9 === "string") result.set_9_district = v9;
    else if (typeof v9 === "object" && !Array.isArray(v9) && typeof (v9 as any)[1] === "string") result.set_9_district = (v9 as any)[1];
  }
  if (fv[10] !== undefined) {
    const v10 = fv[10];
    if (typeof v10 === "string") result.set_10_censusTract = v10;
    else if (typeof v10 === "object" && !Array.isArray(v10) && typeof (v10 as any)[1] === "string") result.set_10_censusTract = (v10 as any)[1];
  }
  if (fv[11] !== undefined) {
    const v11 = fv[11];
    if (typeof v11 === "string") result.set_11_representation = v11;
    else if (typeof v11 === "object" && !Array.isArray(v11) && typeof (v11 as any)[1] === "string") result.set_11_representation = (v11 as any)[1];
  }
  if (fv[12] !== undefined) result.set_12_period = fromDR(fv[12]);
  if (fv[13] !== undefined) {
    const v13 = fv[13];
    if (typeof v13 === "string") result.set_13_start = v13;
    else if (typeof v13 === "object" && !Array.isArray(v13) && typeof (v13 as any)[1] === "string") result.set_13_start = (v13 as any)[1];
  }
  if (fv[14] !== undefined) {
    const v14 = fv[14];
    if (typeof v14 === "string") result.set_14_end = v14;
    else if (typeof v14 === "object" && !Array.isArray(v14) && typeof (v14 as any)[1] === "string") result.set_14_end = (v14 as any)[1];
  }
  return result;
}

/** Convert FieldValue to XCN */
function fromXCN(fv: FieldValue | undefined): XCN | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { set_1_value: fv };
  if (Array.isArray(fv)) return fromXCN(fv[0]);
  const result: XCN = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.set_1_value = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.set_1_value = (v1 as any)[1];
  }
  if (fv[2] !== undefined) result.set_2_family = fromFN(fv[2]);
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.set_3_given = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.set_3_given = (v3 as any)[1];
  }
  if (fv[4] !== undefined) {
    const v4 = fv[4];
    if (typeof v4 === "string") result.set_4_additionalGiven = v4;
    else if (typeof v4 === "object" && !Array.isArray(v4) && typeof (v4 as any)[1] === "string") result.set_4_additionalGiven = (v4 as any)[1];
  }
  if (fv[5] !== undefined) {
    const v5 = fv[5];
    if (typeof v5 === "string") result.set_5_suffix = v5;
    else if (typeof v5 === "object" && !Array.isArray(v5) && typeof (v5 as any)[1] === "string") result.set_5_suffix = (v5 as any)[1];
  }
  if (fv[6] !== undefined) {
    const v6 = fv[6];
    if (typeof v6 === "string") result.set_6_prefix = v6;
    else if (typeof v6 === "object" && !Array.isArray(v6) && typeof (v6 as any)[1] === "string") result.set_6_prefix = (v6 as any)[1];
  }
  if (fv[7] !== undefined) {
    const v7 = fv[7];
    if (typeof v7 === "string") result.set_7_qualification = v7;
    else if (typeof v7 === "object" && !Array.isArray(v7) && typeof (v7 as any)[1] === "string") result.set_7_qualification = (v7 as any)[1];
  }
  if (fv[8] !== undefined) {
    const v8 = fv[8];
    if (typeof v8 === "string") result.set_8_sourceTable = v8;
    else if (typeof v8 === "object" && !Array.isArray(v8) && typeof (v8 as any)[1] === "string") result.set_8_sourceTable = (v8 as any)[1];
  }
  if (fv[9] !== undefined) result.set_9_system = fromHD(fv[9]);
  if (fv[10] !== undefined) {
    const v10 = fv[10];
    if (typeof v10 === "string") result.set_10_use = v10;
    else if (typeof v10 === "object" && !Array.isArray(v10) && typeof (v10 as any)[1] === "string") result.set_10_use = (v10 as any)[1];
  }
  if (fv[11] !== undefined) {
    const v11 = fv[11];
    if (typeof v11 === "string") result.set_11_checkDigit = v11;
    else if (typeof v11 === "object" && !Array.isArray(v11) && typeof (v11 as any)[1] === "string") result.set_11_checkDigit = (v11 as any)[1];
  }
  if (fv[12] !== undefined) {
    const v12 = fv[12];
    if (typeof v12 === "string") result.set_12_checkDigitScheme = v12;
    else if (typeof v12 === "object" && !Array.isArray(v12) && typeof (v12 as any)[1] === "string") result.set_12_checkDigitScheme = (v12 as any)[1];
  }
  if (fv[13] !== undefined) {
    const v13 = fv[13];
    if (typeof v13 === "string") result.set_13_type = v13;
    else if (typeof v13 === "object" && !Array.isArray(v13) && typeof (v13 as any)[1] === "string") result.set_13_type = (v13 as any)[1];
  }
  if (fv[14] !== undefined) result.set_14_assigner = fromHD(fv[14]);
  if (fv[15] !== undefined) {
    const v15 = fv[15];
    if (typeof v15 === "string") result.set_15_representation = v15;
    else if (typeof v15 === "object" && !Array.isArray(v15) && typeof (v15 as any)[1] === "string") result.set_15_representation = (v15 as any)[1];
  }
  if (fv[16] !== undefined) result.set_16_context = fromCE(fv[16]);
  if (fv[17] !== undefined) result.set_17_period = fromDR(fv[17]);
  if (fv[18] !== undefined) {
    const v18 = fv[18];
    if (typeof v18 === "string") result.set_18_order = v18;
    else if (typeof v18 === "object" && !Array.isArray(v18) && typeof (v18 as any)[1] === "string") result.set_18_order = (v18 as any)[1];
  }
  if (fv[19] !== undefined) {
    const v19 = fv[19];
    if (typeof v19 === "string") result.set_19_start = v19;
    else if (typeof v19 === "object" && !Array.isArray(v19) && typeof (v19 as any)[1] === "string") result.set_19_start = (v19 as any)[1];
  }
  if (fv[20] !== undefined) {
    const v20 = fv[20];
    if (typeof v20 === "string") result.set_20_end = v20;
    else if (typeof v20 === "object" && !Array.isArray(v20) && typeof (v20 as any)[1] === "string") result.set_20_end = (v20 as any)[1];
  }
  if (fv[21] !== undefined) {
    const v21 = fv[21];
    if (typeof v21 === "string") result.set_21_credential = v21;
    else if (typeof v21 === "object" && !Array.isArray(v21) && typeof (v21 as any)[1] === "string") result.set_21_credential = (v21 as any)[1];
  }
  if (fv[22] !== undefined) result.set_22_jurisdiction = fromCWE(fv[22]);
  if (fv[23] !== undefined) result.set_23_department = fromCWE(fv[23]);
  return result;
}

/** Convert FieldValue to XON */
function fromXON(fv: FieldValue | undefined): XON | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { set_1_name: fv };
  if (Array.isArray(fv)) return fromXON(fv[0]);
  const result: XON = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.set_1_name = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.set_1_name = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.set_2_nameType = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.set_2_nameType = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.set_3_value = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.set_3_value = (v3 as any)[1];
  }
  if (fv[4] !== undefined) {
    const v4 = fv[4];
    if (typeof v4 === "string") result.set_4_checkDigit = v4;
    else if (typeof v4 === "object" && !Array.isArray(v4) && typeof (v4 as any)[1] === "string") result.set_4_checkDigit = (v4 as any)[1];
  }
  if (fv[5] !== undefined) {
    const v5 = fv[5];
    if (typeof v5 === "string") result.set_5_checkDigitScheme = v5;
    else if (typeof v5 === "object" && !Array.isArray(v5) && typeof (v5 as any)[1] === "string") result.set_5_checkDigitScheme = (v5 as any)[1];
  }
  if (fv[6] !== undefined) result.set_6_system = fromHD(fv[6]);
  if (fv[7] !== undefined) {
    const v7 = fv[7];
    if (typeof v7 === "string") result.set_7_type = v7;
    else if (typeof v7 === "object" && !Array.isArray(v7) && typeof (v7 as any)[1] === "string") result.set_7_type = (v7 as any)[1];
  }
  if (fv[8] !== undefined) result.set_8_assigner = fromHD(fv[8]);
  if (fv[9] !== undefined) {
    const v9 = fv[9];
    if (typeof v9 === "string") result.set_9_representation = v9;
    else if (typeof v9 === "object" && !Array.isArray(v9) && typeof (v9 as any)[1] === "string") result.set_9_representation = (v9 as any)[1];
  }
  if (fv[10] !== undefined) {
    const v10 = fv[10];
    if (typeof v10 === "string") result.set_10_organizationId = v10;
    else if (typeof v10 === "object" && !Array.isArray(v10) && typeof (v10 as any)[1] === "string") result.set_10_organizationId = (v10 as any)[1];
  }
  return result;
}

/** Convert FieldValue to XPN */
function fromXPN(fv: FieldValue | undefined): XPN | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { set_1_family: fromFN(fv) };
  if (Array.isArray(fv)) return fromXPN(fv[0]);
  const result: XPN = {};
  if (fv[1] !== undefined) result.set_1_family = fromFN(fv[1]);
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.set_2_given = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.set_2_given = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.set_3_additionalGiven = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.set_3_additionalGiven = (v3 as any)[1];
  }
  if (fv[4] !== undefined) {
    const v4 = fv[4];
    if (typeof v4 === "string") result.set_4_suffix = v4;
    else if (typeof v4 === "object" && !Array.isArray(v4) && typeof (v4 as any)[1] === "string") result.set_4_suffix = (v4 as any)[1];
  }
  if (fv[5] !== undefined) {
    const v5 = fv[5];
    if (typeof v5 === "string") result.set_5_prefix = v5;
    else if (typeof v5 === "object" && !Array.isArray(v5) && typeof (v5 as any)[1] === "string") result.set_5_prefix = (v5 as any)[1];
  }
  if (fv[6] !== undefined) {
    const v6 = fv[6];
    if (typeof v6 === "string") result.set_6_qualification = v6;
    else if (typeof v6 === "object" && !Array.isArray(v6) && typeof (v6 as any)[1] === "string") result.set_6_qualification = (v6 as any)[1];
  }
  if (fv[7] !== undefined) {
    const v7 = fv[7];
    if (typeof v7 === "string") result.set_7_use = v7;
    else if (typeof v7 === "object" && !Array.isArray(v7) && typeof (v7 as any)[1] === "string") result.set_7_use = (v7 as any)[1];
  }
  if (fv[8] !== undefined) {
    const v8 = fv[8];
    if (typeof v8 === "string") result.set_8_representation = v8;
    else if (typeof v8 === "object" && !Array.isArray(v8) && typeof (v8 as any)[1] === "string") result.set_8_representation = (v8 as any)[1];
  }
  if (fv[9] !== undefined) result.set_9_context = fromCE(fv[9]);
  if (fv[10] !== undefined) result.set_10_period = fromDR(fv[10]);
  if (fv[11] !== undefined) {
    const v11 = fv[11];
    if (typeof v11 === "string") result.set_11_order = v11;
    else if (typeof v11 === "object" && !Array.isArray(v11) && typeof (v11 as any)[1] === "string") result.set_11_order = (v11 as any)[1];
  }
  if (fv[12] !== undefined) {
    const v12 = fv[12];
    if (typeof v12 === "string") result.set_12_start = v12;
    else if (typeof v12 === "object" && !Array.isArray(v12) && typeof (v12 as any)[1] === "string") result.set_12_start = (v12 as any)[1];
  }
  if (fv[13] !== undefined) {
    const v13 = fv[13];
    if (typeof v13 === "string") result.set_13_end = v13;
    else if (typeof v13 === "object" && !Array.isArray(v13) && typeof (v13 as any)[1] === "string") result.set_13_end = (v13 as any)[1];
  }
  if (fv[14] !== undefined) {
    const v14 = fv[14];
    if (typeof v14 === "string") result.set_14_credential = v14;
    else if (typeof v14 === "object" && !Array.isArray(v14) && typeof (v14 as any)[1] === "string") result.set_14_credential = (v14 as any)[1];
  }
  return result;
}

/** Convert FieldValue to XTN */
function fromXTN(fv: FieldValue | undefined): XTN | undefined {
  if (fv === undefined) return undefined;
  if (typeof fv === "string") return { set_1_value: fv };
  if (Array.isArray(fv)) return fromXTN(fv[0]);
  const result: XTN = {};
  if (fv[1] !== undefined) {
    const v1 = fv[1];
    if (typeof v1 === "string") result.set_1_value = v1;
    else if (typeof v1 === "object" && !Array.isArray(v1) && typeof (v1 as any)[1] === "string") result.set_1_value = (v1 as any)[1];
  }
  if (fv[2] !== undefined) {
    const v2 = fv[2];
    if (typeof v2 === "string") result.set_2_use = v2;
    else if (typeof v2 === "object" && !Array.isArray(v2) && typeof (v2 as any)[1] === "string") result.set_2_use = (v2 as any)[1];
  }
  if (fv[3] !== undefined) {
    const v3 = fv[3];
    if (typeof v3 === "string") result.set_3_system = v3;
    else if (typeof v3 === "object" && !Array.isArray(v3) && typeof (v3 as any)[1] === "string") result.set_3_system = (v3 as any)[1];
  }
  if (fv[4] !== undefined) {
    const v4 = fv[4];
    if (typeof v4 === "string") result.set_4_email = v4;
    else if (typeof v4 === "object" && !Array.isArray(v4) && typeof (v4 as any)[1] === "string") result.set_4_email = (v4 as any)[1];
  }
  if (fv[5] !== undefined) {
    const v5 = fv[5];
    if (typeof v5 === "string") result.set_5_countryCode = v5;
    else if (typeof v5 === "object" && !Array.isArray(v5) && typeof (v5 as any)[1] === "string") result.set_5_countryCode = (v5 as any)[1];
  }
  if (fv[6] !== undefined) {
    const v6 = fv[6];
    if (typeof v6 === "string") result.set_6_areaCode = v6;
    else if (typeof v6 === "object" && !Array.isArray(v6) && typeof (v6 as any)[1] === "string") result.set_6_areaCode = (v6 as any)[1];
  }
  if (fv[7] !== undefined) {
    const v7 = fv[7];
    if (typeof v7 === "string") result.set_7_localNumber = v7;
    else if (typeof v7 === "object" && !Array.isArray(v7) && typeof (v7 as any)[1] === "string") result.set_7_localNumber = (v7 as any)[1];
  }
  if (fv[8] !== undefined) {
    const v8 = fv[8];
    if (typeof v8 === "string") result.set_8_extension = v8;
    else if (typeof v8 === "object" && !Array.isArray(v8) && typeof (v8 as any)[1] === "string") result.set_8_extension = (v8 as any)[1];
  }
  if (fv[9] !== undefined) {
    const v9 = fv[9];
    if (typeof v9 === "string") result.set_9_text = v9;
    else if (typeof v9 === "object" && !Array.isArray(v9) && typeof (v9 as any)[1] === "string") result.set_9_text = (v9 as any)[1];
  }
  if (fv[10] !== undefined) {
    const v10 = fv[10];
    if (typeof v10 === "string") result.set_10_extensionPrefix = v10;
    else if (typeof v10 === "object" && !Array.isArray(v10) && typeof (v10 as any)[1] === "string") result.set_10_extensionPrefix = (v10 as any)[1];
  }
  if (fv[11] !== undefined) {
    const v11 = fv[11];
    if (typeof v11 === "string") result.set_11_speedDial = v11;
    else if (typeof v11 === "object" && !Array.isArray(v11) && typeof (v11 as any)[1] === "string") result.set_11_speedDial = (v11 as any)[1];
  }
  if (fv[12] !== undefined) {
    const v12 = fv[12];
    if (typeof v12 === "string") result.set_12_unformatted = v12;
    else if (typeof v12 === "object" && !Array.isArray(v12) && typeof (v12 as any)[1] === "string") result.set_12_unformatted = (v12 as any)[1];
  }
  return result;
}

// ====== Segment Interfaces ======

/** ACC Segment */
export interface ACC {
  /** ACC.1 - Accident Date/Time */
  set_1_accidentDateTime?: string;
  /** ACC.2 - Accident Code */
  set_2_accidentCode?: CE;
  /** ACC.3 - Accident Location */
  set_3_accidentLocation?: string;
  /** ACC.4 - Auto Accident State */
  set_4_autoAccidentState?: CE;
  /** ACC.5 - Accident Job Related Indicator */
  set_5_accidentJobRelatedIndicator?: string;
  /** ACC.6 - Accident Death Indicator */
  set_6_accidentDeathIndicator?: string;
  /** ACC.7 - Entered By */
  set_7_enteredBy?: XCN;
  /** ACC.8 - Accident Description */
  set_8_accidentDescription?: string;
  /** ACC.9 - Brought In By */
  set_9_broughtInBy?: string;
  /** ACC.10 - Police Notified Indicator */
  set_10_policeNotifiedIndicator?: string;
  /** ACC.11 - Accident Address */
  set_11_accidentAddress?: XAD;
}

/** AL1 Segment */
export interface AL1 {
  /** AL1.1 - Set ID - AL1 */
  set_1_setIdAl1?: string;
  /** AL1.2 - Allergen Type Code */
  set_2_allergenTypeCode?: CE;
  /** AL1.3 - Allergen Code/Mnemonic/Description */
  set_3_allergenCodeMnemonicDescription?: CE;
  /** AL1.4 - Allergy Severity Code */
  set_4_allergySeverityCode?: CE;
  /** AL1.5 - Allergy Reaction Code */
  set_5_allergyReactionCode?: string[];
  /** AL1.6 - Identification Date */
  set_6_identificationDate?: string;
}

/** DB1 Segment */
export interface DB1 {
  /** DB1.1 - Set ID - DB1 */
  set_1_setIdDb1?: string;
  /** DB1.2 - Disabled Person Code */
  set_2_disabledPersonCode?: DisabilityInformationRelationship | string;
  /** DB1.3 - Disabled Person Identifier */
  set_3_disabledPersonIdentifier?: CX[];
  /** DB1.4 - Disabled Indicator */
  set_4_disabledIndicator?: string;
  /** DB1.5 - Disability Start Date */
  set_5_disabilityStartDate?: string;
  /** DB1.6 - Disability End Date */
  set_6_disabilityEndDate?: string;
  /** DB1.7 - Disability Return to Work Date */
  set_7_disabilityReturnToWorkDate?: string;
  /** DB1.8 - Disability Unable to Work Date */
  set_8_disabilityUnableToWorkDate?: string;
}

/** DG1 Segment */
export interface DG1 {
  /** DG1.1 - Set ID - DG1 */
  set_1_setIdDg1?: string;
  /** DG1.2 - Diagnosis Coding Method */
  set_2_diagnosisCodingMethod?: string;
  /** DG1.3 - Diagnosis Code - DG1 */
  set_3_diagnosisCodeDg1?: CE;
  /** DG1.4 - Diagnosis Description */
  set_4_diagnosisDescription?: string;
  /** DG1.5 - Diagnosis Date/Time */
  set_5_diagnosisDateTime?: string;
  /** DG1.6 - Diagnosis Type */
  set_6_diagnosisType?: DiagnosisType | string;
  /** DG1.7 - Major Diagnostic Category */
  set_7_majorDiagnosticCategory?: CE;
  /** DG1.8 - Diagnostic Related Group */
  set_8_diagnosticRelatedGroup?: CE;
  /** DG1.9 - DRG Approval Indicator */
  set_9_drgApproval?: string;
  /** DG1.10 - DRG Grouper Review Code */
  set_10_drgGrouperReviewCode?: string;
  /** DG1.11 - Outlier Type */
  set_11_outlierType?: CE;
  /** DG1.12 - Outlier Days */
  set_12_outlierDays?: string;
  /** DG1.13 - Outlier Cost */
  set_13_outlierCost?: CP;
  /** DG1.14 - Grouper Version And Type */
  set_14_grouperVersionAndType?: string;
  /** DG1.15 - Diagnosis Priority */
  set_15_diagnosisPriority?: DiagnosisPriority | string;
  /** DG1.16 - Diagnosing Clinician */
  set_16_diagnosingClinician?: XCN[];
  /** DG1.17 - Diagnosis Classification */
  set_17_diagnosisClassification?: DiagnosisClassification | string;
  /** DG1.18 - Confidential Indicator */
  set_18_confidentialIndicator?: string;
  /** DG1.19 - Attestation Date/Time */
  set_19_attestationDateTime?: string;
  /** DG1.20 - Diagnosis Identifier */
  set_20_diagnosisIdentifier?: EI;
  /** DG1.21 - Diagnosis Action Code */
  set_21_diagnosisActionCode?: SegmentAction | string;
}

/** DRG Segment */
export interface DRG {
  /** DRG.1 - Diagnostic Related Group */
  set_1_diagnosticRelatedGroup?: CE;
  /** DRG.2 - DRG Assigned Date/Time */
  set_2_drgAssignedDateTime?: string;
  /** DRG.3 - DRG Approval Indicator */
  set_3_drgApproval?: string;
  /** DRG.4 - DRG Grouper Review Code */
  set_4_drgGrouperReviewCode?: string;
  /** DRG.5 - Outlier Type */
  set_5_outlierType?: CE;
  /** DRG.6 - Outlier Days */
  set_6_outlierDays?: string;
  /** DRG.7 - Outlier Cost */
  set_7_outlierCost?: CP;
  /** DRG.8 - DRG Payor */
  set_8_drgPayor?: string;
  /** DRG.9 - Outlier Reimbursement */
  set_9_outlierReimbursement?: CP;
  /** DRG.10 - Confidential Indicator */
  set_10_confidentialIndicator?: string;
  /** DRG.11 - DRG Transfer Type */
  set_11_drgTransferType?: DrgTransferType | string;
}

/** EVN Segment */
export interface EVN {
  /** EVN.1 - Event Type Code */
  set_1_eventTypeCode?: Event | string;
  /** EVN.2 - Recorded Date/Time */
  set_2_recordedDateTime?: string;
  /** EVN.3 - Date/Time Planned Event */
  set_3_plannedEventDateTime?: string;
  /** EVN.4 - Event Reason Code */
  set_4_eventReasonCode?: EventReason | string;
  /** EVN.5 - Operator ID */
  set_5_operatorId?: XCN[];
  /** EVN.6 - Event Occurred */
  set_6_eventOccurred?: string;
  /** EVN.7 - Event Facility */
  set_7_eventFacility?: HD;
}

/** GT1 Segment */
export interface GT1 {
  /** GT1.1 - Set ID - GT1 */
  set_1_setIdGt1?: string;
  /** GT1.2 - Guarantor Number */
  set_2_guarantorNumber?: CX[];
  /** GT1.3 - Guarantor Name */
  set_3_guarantorName?: XPN[];
  /** GT1.4 - Guarantor Spouse Name */
  set_4_guarantorSpouseName?: XPN[];
  /** GT1.5 - Guarantor Address */
  set_5_guarantorAddress?: XAD[];
  /** GT1.6 - Guarantor Ph Num - Home */
  set_6_guarantorPhNumHome?: XTN[];
  /** GT1.7 - Guarantor Ph Num - Business */
  set_7_guarantorPhNumBusiness?: XTN[];
  /** GT1.8 - Guarantor Date/Time Of Birth */
  set_8_birthDate?: string;
  /** GT1.9 - Guarantor Administrative Sex */
  set_9_guarantorAdministrativeGender?: AdministrativeSex | string;
  /** GT1.10 - Guarantor Type */
  set_10_guarantorType?: string;
  /** GT1.11 - Guarantor Relationship */
  set_11_guarantorRelationship?: CE;
  /** GT1.12 - Guarantor SSN */
  set_12_guarantorSsn?: string;
  /** GT1.13 - Guarantor Date - Begin */
  set_13_guarantorDateBegin?: string;
  /** GT1.14 - Guarantor Date - End */
  set_14_guarantorDateEnd?: string;
  /** GT1.15 - Guarantor Priority */
  set_15_guarantorPriority?: string;
  /** GT1.16 - Guarantor Employer Name */
  set_16_guarantorEmployerName?: XPN[];
  /** GT1.17 - Guarantor Employer Address */
  set_17_guarantorEmployerAddress?: XAD[];
  /** GT1.18 - Guarantor Employer Phone Number */
  set_18_guarantorEmployerPhoneNumber?: XTN[];
  /** GT1.19 - Guarantor Employee ID Number */
  set_19_guarantorEmployeeIdNumber?: CX[];
  /** GT1.20 - Guarantor Employment Status */
  set_20_guarantorEmploymentStatus?: EmploymentStatus | string;
  /** GT1.21 - Guarantor Organization Name */
  set_21_guarantorOrganizationName?: XON[];
  /** GT1.22 - Guarantor Billing Hold Flag */
  set_22_guarantorBillingHoldFlag?: string;
  /** GT1.23 - Guarantor Credit Rating Code */
  set_23_guarantorCreditRatingCode?: CE;
  /** GT1.24 - Guarantor Death Date And Time */
  set_24_guarantorDeathDateAndTime?: string;
  /** GT1.25 - Guarantor Death Flag */
  set_25_guarantorDeathFlag?: string;
  /** GT1.26 - Guarantor Charge Adjustment Code */
  set_26_guarantorChargeAdjustmentCode?: CE;
  /** GT1.27 - Guarantor Household Annual Income */
  set_27_guarantorHouseholdAnnualIncome?: CP;
  /** GT1.28 - Guarantor Household Size */
  set_28_guarantorHouseholdSize?: string;
  /** GT1.29 - Guarantor Employer ID Number */
  set_29_guarantorEmployerIdNumber?: CX[];
  /** GT1.30 - Guarantor Marital Status Code */
  set_30_guarantorMaritalStatusCode?: CE;
  /** GT1.31 - Guarantor Hire Effective Date */
  set_31_guarantorHireEffectiveDate?: string;
  /** GT1.32 - Employment Stop Date */
  set_32_employmentEnd?: string;
  /** GT1.33 - Living Dependency */
  set_33_livingDependency?: LivingDependency2 | string;
  /** GT1.34 - Ambulatory Status */
  set_34_ambulatoryStatus?: (AmbulatoryStatus | string)[];
  /** GT1.35 - Citizenship */
  set_35_citizenship?: CE[];
  /** GT1.36 - Primary Language */
  set_36_language?: CE;
  /** GT1.37 - Living Arrangement */
  set_37_livingArrangement?: LivingArrangement | string;
  /** GT1.38 - Publicity Code */
  set_38_publicityCode?: CE;
  /** GT1.39 - Protection Indicator */
  set_39_protectionIndicator?: string;
  /** GT1.40 - Student Indicator */
  set_40_student?: StudentStatus | string;
  /** GT1.41 - Religion */
  set_41_religion?: CE;
  /** GT1.42 - Mother's Maiden Name */
  set_42_mothersMaidenName?: XPN[];
  /** GT1.43 - Nationality */
  set_43_nationality?: CE;
  /** GT1.44 - Ethnic Group */
  set_44_ethnicity?: CE[];
  /** GT1.45 - Contact Person's Name */
  set_45_contactPersonsName?: XPN[];
  /** GT1.46 - Contact Person's Telephone Number */
  set_46_contactPhone?: XTN[];
  /** GT1.47 - Contact Reason */
  set_47_contactReason?: CE;
  /** GT1.48 - Contact Relationship */
  set_48_contactRelationship?: Relationship | string;
  /** GT1.49 - Job Title */
  set_49_jobTitle?: string;
  /** GT1.50 - Job Code/Class */
  set_50_jobCodeClass?: JCC;
  /** GT1.51 - Guarantor Employer's Organization Name */
  set_51_guarantorEmployersOrganizationName?: XON[];
  /** GT1.52 - Handicap */
  set_52_disability?: string;
  /** GT1.53 - Job Status */
  set_53_jobStatus?: JobStatus | string;
  /** GT1.54 - Guarantor Financial Class */
  set_54_guarantorFinancialClass?: FC;
  /** GT1.55 - Guarantor Race */
  set_55_guarantorRace?: CE[];
  /** GT1.56 - Guarantor Birth Place */
  set_56_guarantorBirthPlace?: string;
  /** GT1.57 - VIP Indicator */
  set_57_vip?: string;
}

/** IN1 Segment */
export interface IN1 {
  /** IN1.1 - Set ID - IN1 */
  set_1_setIdIn1?: string;
  /** IN1.2 - Insurance Plan ID */
  set_2_insurancePlanId?: CE;
  /** IN1.3 - Insurance Company ID */
  set_3_insuranceCompanyId?: CX[];
  /** IN1.4 - Insurance Company Name */
  set_4_insuranceCompanyName?: XON[];
  /** IN1.5 - Insurance Company Address */
  set_5_insuranceCompanyAddress?: XAD[];
  /** IN1.6 - Insurance Co Contact Person */
  set_6_insuranceCoContactPerson?: XPN[];
  /** IN1.7 - Insurance Co Phone Number */
  set_7_insurancePhone?: XTN[];
  /** IN1.8 - Group Number */
  set_8_groupNumber?: string;
  /** IN1.9 - Group Name */
  set_9_groupName?: XON[];
  /** IN1.10 - Insured's Group Emp ID */
  set_10_insuredsGroupEmpId?: CX[];
  /** IN1.11 - Insured's Group Emp Name */
  set_11_insuredsGroupEmpName?: XON[];
  /** IN1.12 - Plan Effective Date */
  set_12_planEffectiveDate?: string;
  /** IN1.13 - Plan Expiration Date */
  set_13_planExpirationDate?: string;
  /** IN1.14 - Authorization Information */
  set_14_authorizationInformation?: AUI;
  /** IN1.15 - Plan Type */
  set_15_planType?: string;
  /** IN1.16 - Name Of Insured */
  set_16_nameOfInsured?: XPN[];
  /** IN1.17 - Insured's Relationship To Patient */
  set_17_insuredsRelationshipToPatient?: CE;
  /** IN1.18 - Insured's Date Of Birth */
  set_18_insuredsDateOfBirth?: string;
  /** IN1.19 - Insured's Address */
  set_19_insuredsAddress?: XAD[];
  /** IN1.20 - Assignment Of Benefits */
  set_20_assignmentOfBenefits?: AssignmentOfBenefits | string;
  /** IN1.21 - Coordination Of Benefits */
  set_21_coordinationOfBenefits?: CoordinationOfBenefits | string;
  /** IN1.22 - Coord Of Ben. Priority */
  set_22_coordOfBenPriority?: string;
  /** IN1.23 - Notice Of Admission Flag */
  set_23_noticeOfAdmissionFlag?: string;
  /** IN1.24 - Notice Of Admission Date */
  set_24_noticeOfAdmissionDate?: string;
  /** IN1.25 - Report Of Eligibility Flag */
  set_25_reportOfEligibilityFlag?: string;
  /** IN1.26 - Report Of Eligibility Date */
  set_26_reportOfEligibilityDate?: string;
  /** IN1.27 - Release Information Code */
  set_27_releaseInformationCode?: string;
  /** IN1.28 - Pre-Admit Cert (PAC) */
  set_28_preAdmitCert?: string;
  /** IN1.29 - Verification Date/Time */
  set_29_verificationDateTime?: string;
  /** IN1.30 - Verification By */
  set_30_verificationBy?: XCN[];
  /** IN1.31 - Type Of Agreement Code */
  set_31_typeOfAgreementCode?: TypeOfAgreement | string;
  /** IN1.32 - Billing Status */
  set_32_billingStatus?: string;
  /** IN1.33 - Lifetime Reserve Days */
  set_33_lifetimeReserveDays?: string;
  /** IN1.34 - Delay Before L.R. Day */
  set_34_delayBeforeLRDay?: string;
  /** IN1.35 - Company Plan Code */
  set_35_companyPlanCode?: string;
  /** IN1.36 - Policy Number */
  set_36_policyNumber?: string;
  /** IN1.37 - Policy Deductible */
  set_37_policyDeductible?: CP;
  /** IN1.38 - Policy Limit - Amount */
  set_38_policyLimitAmount?: CP;
  /** IN1.39 - Policy Limit - Days */
  set_39_policyLimitDays?: string;
  /** IN1.40 - Room Rate - Semi-Private */
  set_40_roomRateSemiPrivate?: CP;
  /** IN1.41 - Room Rate - Private */
  set_41_roomRatePrivate?: CP;
  /** IN1.42 - Insured's Employment Status */
  set_42_insuredsEmploymentStatus?: CE;
  /** IN1.43 - Insured's Administrative Sex */
  set_43_insuredsAdministrativeGender?: AdministrativeSex | string;
  /** IN1.44 - Insured's Employer's Address */
  set_44_insuredsEmployersAddress?: XAD[];
  /** IN1.45 - Verification Status */
  set_45_verificationStatus?: string;
  /** IN1.46 - Prior Insurance Plan ID */
  set_46_priorInsurancePlanId?: string;
  /** IN1.47 - Coverage Type */
  set_47_coverageType?: CoverageType | string;
  /** IN1.48 - Handicap */
  set_48_disability?: string;
  /** IN1.49 - Insured's ID Number */
  set_49_insuredsIdNumber?: CX[];
  /** IN1.50 - Signature Code */
  set_50_signatureCode?: SignatureType | string;
  /** IN1.51 - Signature Code Date */
  set_51_signatureCodeDate?: string;
  /** IN1.52 - Insured's Birth Place */
  set_52_insuredsBirthPlace?: string;
  /** IN1.53 - VIP Indicator */
  set_53_vip?: string;
}

/** IN2 Segment */
export interface IN2 {
  /** IN2.1 - Insured's Employee ID */
  set_1_insuredsEmployeeId?: CX[];
  /** IN2.2 - Insured's Social Security Number */
  set_2_insuredsSocialSecurityNumber?: string;
  /** IN2.3 - Insured's Employer's Name and ID */
  set_3_insuredsEmployersNameAndId?: XCN[];
  /** IN2.4 - Employer Information Data */
  set_4_employerInformationData?: string;
  /** IN2.5 - Mail Claim Party */
  set_5_mailClaimParty?: (MailClaimParty | string)[];
  /** IN2.6 - Medicare Health Ins Card Number */
  set_6_medicareHealthInsCardNumber?: string;
  /** IN2.7 - Medicaid Case Name */
  set_7_medicaidCaseName?: XPN[];
  /** IN2.8 - Medicaid Case Number */
  set_8_medicaidCaseNumber?: string;
  /** IN2.9 - Military Sponsor Name */
  set_9_militarySponsorName?: XPN[];
  /** IN2.10 - Military ID Number */
  set_10_militaryIdNumber?: string;
  /** IN2.11 - Dependent Of Military Recipient */
  set_11_dependentOfMilitaryRecipient?: CE;
  /** IN2.12 - Military Organization */
  set_12_militaryOrganization?: string;
  /** IN2.13 - Military Station */
  set_13_militaryStation?: string;
  /** IN2.14 - Military Service */
  set_14_militaryService?: MilitaryService | string;
  /** IN2.15 - Military Rank/Grade */
  set_15_militaryRankGrade?: string;
  /** IN2.16 - Military Status */
  set_16_militaryStatus?: MilitaryStatus | string;
  /** IN2.17 - Military Retire Date */
  set_17_militaryRetireDate?: string;
  /** IN2.18 - Military Non-Avail Cert On File */
  set_18_militaryNonAvailCertOnFile?: string;
  /** IN2.19 - Baby Coverage */
  set_19_babyCoverage?: string;
  /** IN2.20 - Combine Baby Bill */
  set_20_combineBabyBill?: string;
  /** IN2.21 - Blood Deductible */
  set_21_bloodDeductible?: string;
  /** IN2.22 - Special Coverage Approval Name */
  set_22_specialCoverageApprovalName?: XPN[];
  /** IN2.23 - Special Coverage Approval Title */
  set_23_specialCoverageApprovalTitle?: string;
  /** IN2.24 - Non-Covered Insurance Code */
  set_24_nonCoveredInsuranceCode?: string[];
  /** IN2.25 - Payor ID */
  set_25_payorId?: CX[];
  /** IN2.26 - Payor Subscriber ID */
  set_26_payorSubscriberId?: CX[];
  /** IN2.27 - Eligibility Source */
  set_27_eligibilitySource?: EligibilitySource | string;
  /** IN2.28 - Room Coverage Type/Amount */
  set_28_roomCoverageTypeAmount?: RMC[];
  /** IN2.29 - Policy Type/Amount */
  set_29_policyTypeAmount?: PTA[];
  /** IN2.30 - Daily Deductible */
  set_30_dailyDeductible?: DDI;
  /** IN2.31 - Living Dependency */
  set_31_livingDependency?: LivingDependency2 | string;
  /** IN2.32 - Ambulatory Status */
  set_32_ambulatoryStatus?: (AmbulatoryStatus | string)[];
  /** IN2.33 - Citizenship */
  set_33_citizenship?: CE[];
  /** IN2.34 - Primary Language */
  set_34_language?: CE;
  /** IN2.35 - Living Arrangement */
  set_35_livingArrangement?: LivingArrangement | string;
  /** IN2.36 - Publicity Code */
  set_36_publicityCode?: CE;
  /** IN2.37 - Protection Indicator */
  set_37_protectionIndicator?: string;
  /** IN2.38 - Student Indicator */
  set_38_student?: StudentStatus | string;
  /** IN2.39 - Religion */
  set_39_religion?: CE;
  /** IN2.40 - Mother's Maiden Name */
  set_40_mothersMaidenName?: XPN[];
  /** IN2.41 - Nationality */
  set_41_nationality?: CE;
  /** IN2.42 - Ethnic Group */
  set_42_ethnicity?: CE[];
  /** IN2.43 - Marital Status */
  set_43_maritalStatus?: CE[];
  /** IN2.44 - Insured's Employment Start Date */
  set_44_insuredsEmploymentStartDate?: string;
  /** IN2.45 - Employment Stop Date */
  set_45_employmentEnd?: string;
  /** IN2.46 - Job Title */
  set_46_jobTitle?: string;
  /** IN2.47 - Job Code/Class */
  set_47_jobCodeClass?: JCC;
  /** IN2.48 - Job Status */
  set_48_jobStatus?: JobStatus | string;
  /** IN2.49 - Employer Contact Person Name */
  set_49_employerContactPersonName?: XPN[];
  /** IN2.50 - Employer Contact Person Phone Number */
  set_50_employerContactPhone?: XTN[];
  /** IN2.51 - Employer Contact Reason */
  set_51_employerContactReason?: string;
  /** IN2.52 - Insured's Contact Person's Name */
  set_52_insuredsContactPersonsName?: XPN[];
  /** IN2.53 - Insured's Contact Person Phone Number */
  set_53_insuredContactPhone?: XTN[];
  /** IN2.54 - Insured's Contact Person Reason */
  set_54_insuredsContactPersonReason?: string[];
  /** IN2.55 - Relationship to the Patient Start Date */
  set_55_relationshipToThePatientStartDate?: string;
  /** IN2.56 - Relationship to the Patient Stop Date */
  set_56_relationshipToThePatientStopDate?: string[];
  /** IN2.57 - Insurance Co. Contact Reason */
  set_57_insuranceCoContactReason?: InsuranceCompanyContactReason | string;
  /** IN2.58 - Insurance Co Contact Phone Number */
  set_58_insuranceContactPhone?: XTN;
  /** IN2.59 - Policy Scope */
  set_59_policyScope?: string;
  /** IN2.60 - Policy Source */
  set_60_policySource?: string;
  /** IN2.61 - Patient Member Number */
  set_61_memberNumber?: CX;
  /** IN2.62 - Guarantor's Relationship to Insured */
  set_62_guarantorsRelationshipToInsured?: CE;
  /** IN2.63 - Insured's Phone Number - Home */
  set_63_insuredHomePhone?: XTN[];
  /** IN2.64 - Insured's Employer Phone Number */
  set_64_insuredEmployerPhone?: XTN[];
  /** IN2.65 - Military Handicapped Program */
  set_65_militaryHandicappedProgram?: CE;
  /** IN2.66 - Suspend Flag */
  set_66_suspendFlag?: string;
  /** IN2.67 - Copay Limit Flag */
  set_67_copayLimitFlag?: string;
  /** IN2.68 - Stoploss Limit Flag */
  set_68_stoplossLimitFlag?: string;
  /** IN2.69 - Insured Organization Name and ID */
  set_69_insuredOrganizationNameAndId?: XON[];
  /** IN2.70 - Insured Employer Organization Name and ID */
  set_70_insuredEmployerOrganizationNameAndId?: XON[];
  /** IN2.71 - Race */
  set_71_race?: CE[];
  /** IN2.72 - CMS Patient's Relationship to Insured */
  set_72_cmsPatientsRelationshipToInsured?: CE;
}

/** IN3 Segment */
export interface IN3 {
  /** IN3.1 - Set ID - IN3 */
  set_1_setIdIn3?: string;
  /** IN3.2 - Certification Number */
  set_2_certificationNumber?: CX;
  /** IN3.3 - Certified By */
  set_3_certifiedBy?: XCN[];
  /** IN3.4 - Certification Required */
  set_4_required?: string;
  /** IN3.5 - Penalty */
  set_5_penalty?: MOP;
  /** IN3.6 - Certification Date/Time */
  set_6_certificationDateTime?: string;
  /** IN3.7 - Certification Modify Date/Time */
  set_7_certificationModifyDateTime?: string;
  /** IN3.8 - Operator */
  set_8_operator?: XCN[];
  /** IN3.9 - Certification Begin Date */
  set_9_certificationBeginDate?: string;
  /** IN3.10 - Certification End Date */
  set_10_certificationEndDate?: string;
  /** IN3.11 - Days */
  set_11_days?: DTN;
  /** IN3.12 - Non-Concur Code/Description */
  set_12_nonConcurCodeDescription?: CE;
  /** IN3.13 - Non-Concur Effective Date/Time */
  set_13_nonConcurEffectiveDateTime?: string;
  /** IN3.14 - Physician Reviewer */
  set_14_physicianReviewer?: XCN[];
  /** IN3.15 - Certification Contact */
  set_15_certificationContact?: string;
  /** IN3.16 - Certification Contact Phone Number */
  set_16_certificationContactPhoneNumber?: XTN[];
  /** IN3.17 - Appeal Reason */
  set_17_appealReason?: CE;
  /** IN3.18 - Certification Agency */
  set_18_certificationAgency?: CE;
  /** IN3.19 - Certification Agency Phone Number */
  set_19_certificationAgencyPhoneNumber?: XTN[];
  /** IN3.20 - Pre-Certification Requirement */
  set_20_preCertificationRequirement?: ICD[];
  /** IN3.21 - Case Manager */
  set_21_caseManager?: string;
  /** IN3.22 - Second Opinion Date */
  set_22_secondOpinionDate?: string;
  /** IN3.23 - Second Opinion Status */
  set_23_secondOpinionStatus?: string;
  /** IN3.24 - Second Opinion Documentation Received */
  set_24_secondOpinionDocumentationReceived?: string[];
  /** IN3.25 - Second Opinion Physician */
  set_25_secondOpinionPhysician?: XCN[];
}

/** MSH Segment */
export interface MSH {
  /** MSH.1 - Field Separator */
  set_1_fieldSeparator?: string;
  /** MSH.2 - Encoding Characters */
  set_2_encodingCharacters?: string;
  /** MSH.3 - Sending Application */
  set_3_sendingApplication?: HD;
  /** MSH.4 - Sending Facility */
  set_4_sendingFacility?: HD;
  /** MSH.5 - Receiving Application */
  set_5_receivingApplication?: HD;
  /** MSH.6 - Receiving Facility */
  set_6_receivingFacility?: HD;
  /** MSH.7 - Date/Time Of Message */
  set_7_messageDateTime?: string;
  /** MSH.8 - Security */
  set_8_security?: string;
  /** MSH.9 - Message Type */
  set_9_messageType?: MSG;
  /** MSH.10 - Message Control ID */
  set_10_messageControlId?: string;
  /** MSH.11 - Processing ID */
  set_11_processingId?: PT;
  /** MSH.12 - Version ID */
  set_12_version?: VID;
  /** MSH.13 - Sequence Number */
  set_13_sequenceNumber?: string;
  /** MSH.14 - Continuation Pointer */
  set_14_continuationPointer?: string;
  /** MSH.15 - Accept Acknowledgment Type */
  set_15_acceptAcknowledgmentType?: AcceptApplicationAcknowledgmentConditions | string;
  /** MSH.16 - Application Acknowledgment Type */
  set_16_applicationAcknowledgmentType?: AcceptApplicationAcknowledgmentConditions | string;
  /** MSH.17 - Country Code */
  set_17_countryCode?: string;
  /** MSH.18 - Character Set */
  set_18_characterSet?: (AlternateCharacterSets | string)[];
  /** MSH.19 - Principal Language Of Message */
  set_19_principalLanguageOfMessage?: CE;
  /** MSH.20 - Alternate Character Set Handling Scheme */
  set_20_alternateCharacterSetHandlingScheme?: AlternateCharacterSetHandlingScheme | string;
  /** MSH.21 - Message Profile Identifier */
  set_21_messageProfileIdentifier?: EI[];
}

/** NK1 Segment */
export interface NK1 {
  /** NK1.1 - Set ID - NK1 */
  set_1_setIdNk1?: string;
  /** NK1.2 - Name */
  set_2_name?: XPN[];
  /** NK1.3 - Relationship */
  set_3_relationship?: CE;
  /** NK1.4 - Address */
  set_4_text?: XAD[];
  /** NK1.5 - Phone Number */
  set_5_phone?: XTN[];
  /** NK1.6 - Business Phone Number */
  set_6_businessPhone?: XTN[];
  /** NK1.7 - Contact Role */
  set_7_contactRole?: CE;
  /** NK1.8 - Start Date */
  set_8_startDate?: string;
  /** NK1.9 - End Date */
  set_9_endDate?: string;
  /** NK1.10 - Next of Kin / Associated Parties Job Title */
  set_10_nextOfKinAssociatedPartiesJobTitle?: string;
  /** NK1.11 - Next of Kin / Associated Parties Job Code/Class */
  set_11_nextOfKinAssociatedPartiesJobCodeClass?: JCC;
  /** NK1.12 - Next of Kin / Associated Parties Employee Number */
  set_12_nextOfKinAssociatedPartiesEmployeeNumber?: CX;
  /** NK1.13 - Organization Name - NK1 */
  set_13_organizationNameNk1?: XON[];
  /** NK1.14 - Marital Status */
  set_14_maritalStatus?: CE;
  /** NK1.15 - Administrative Sex */
  set_15_gender?: AdministrativeSex | string;
  /** NK1.16 - Date/Time of Birth */
  set_16_birthDate?: string;
  /** NK1.17 - Living Dependency */
  set_17_livingDependency?: (LivingDependency2 | string)[];
  /** NK1.18 - Ambulatory Status */
  set_18_ambulatoryStatus?: (AmbulatoryStatus | string)[];
  /** NK1.19 - Citizenship */
  set_19_citizenship?: CE[];
  /** NK1.20 - Primary Language */
  set_20_language?: CE;
  /** NK1.21 - Living Arrangement */
  set_21_livingArrangement?: LivingArrangement | string;
  /** NK1.22 - Publicity Code */
  set_22_publicityCode?: CE;
  /** NK1.23 - Protection Indicator */
  set_23_protectionIndicator?: string;
  /** NK1.24 - Student Indicator */
  set_24_student?: StudentStatus | string;
  /** NK1.25 - Religion */
  set_25_religion?: CE;
  /** NK1.26 - Mother's Maiden Name */
  set_26_mothersMaidenName?: XPN[];
  /** NK1.27 - Nationality */
  set_27_nationality?: CE;
  /** NK1.28 - Ethnic Group */
  set_28_ethnicity?: CE[];
  /** NK1.29 - Contact Reason */
  set_29_contactReason?: CE[];
  /** NK1.30 - Contact Person's Name */
  set_30_contactPersonsName?: XPN[];
  /** NK1.31 - Contact Person's Telephone Number */
  set_31_contactPhone?: XTN[];
  /** NK1.32 - Contact Person's Address */
  set_32_contactPersonsAddress?: XAD[];
  /** NK1.33 - Next of Kin/Associated Party's Identifiers */
  set_33_nextOfKinAssociatedPartysIdentifiers?: CX[];
  /** NK1.34 - Job Status */
  set_34_jobStatus?: JobStatus | string;
  /** NK1.35 - Race */
  set_35_race?: CE[];
  /** NK1.36 - Handicap */
  set_36_disability?: string;
  /** NK1.37 - Contact Person Social Security Number */
  set_37_contactPersonSocialSecurityNumber?: string;
  /** NK1.38 - Next of Kin Birth Place */
  set_38_nextOfKinBirthPlace?: string;
  /** NK1.39 - VIP Indicator */
  set_39_vip?: string;
}

/** OBX Segment */
export interface OBX {
  /** OBX.1 - Set ID - OBX */
  set_1_setIdObx?: string;
  /** OBX.2 - Value Type */
  set_2_valueType?: string;
  /** OBX.3 - Observation Identifier */
  set_3_observationIdentifier?: CE;
  /** OBX.4 - Observation Sub-ID */
  set_4_observationSubId?: string;
  /** OBX.5 - Observation Value */
  set_5_observationValue?: string[];
  /** OBX.6 - Units */
  set_6_unit?: CE;
  /** OBX.7 - References Range */
  set_7_referencesRange?: string;
  /** OBX.8 - Abnormal Flags */
  set_8_abnormalFlags?: string[];
  /** OBX.9 - Probability */
  set_9_probability?: string;
  /** OBX.10 - Nature of Abnormal Test */
  set_10_natureOfAbnormalTest?: (NatureOfAbnormalTesting | string)[];
  /** OBX.11 - Observation Result Status */
  set_11_observationResultStatus?: ObservationResultStatusCodesInterpretation | string;
  /** OBX.12 - Effective Date of Reference Range Values */
  set_12_effectiveDateOfReferenceRangeValues?: string;
  /** OBX.13 - User Defined Access Checks */
  set_13_userDefinedAccessChecks?: string;
  /** OBX.14 - Date/Time of the Observation */
  set_14_observationDateTime?: string;
  /** OBX.15 - Producer's Reference */
  set_15_producersReference?: CE;
  /** OBX.16 - Responsible Observer */
  set_16_responsibleObserver?: XCN[];
  /** OBX.17 - Observation Method */
  set_17_observationMethod?: CE[];
  /** OBX.18 - Equipment Instance Identifier */
  set_18_equipmentInstanceIdentifier?: EI[];
  /** OBX.19 - Date/Time of the Analysis */
  set_19_analysisDateTime?: string;
  /** OBX.20 - Observation Site */
  set_20_observationSite?: CWE[];
  /** OBX.21 - Observation Instance Identifier */
  set_21_observationInstanceIdentifier?: EI;
  /** OBX.22 - Mood Identifier */
  set_22_moodIdentifier?: CNE;
  /** OBX.23 - Performing Organization Name */
  set_23_performingOrganizationName?: XON;
  /** OBX.24 - Performing Organization Address */
  set_24_performingOrganizationAddress?: XAD;
  /** OBX.25 - Performing Organization Medical Director */
  set_25_performingOrganizationMedicalDirector?: XCN;
}

/** PD1 Segment */
export interface PD1 {
  /** PD1.1 - Living Dependency */
  set_1_livingDependency?: (LivingDependency2 | string)[];
  /** PD1.2 - Living Arrangement */
  set_2_livingArrangement?: LivingArrangement | string;
  /** PD1.3 - Patient Primary Facility */
  set_3_primaryFacility?: XON[];
  /** PD1.4 - Patient Primary Care Provider Name & ID No. */
  set_4_primaryCareProvider?: XCN[];
  /** PD1.5 - Student Indicator */
  set_5_student?: StudentStatus | string;
  /** PD1.6 - Handicap */
  set_6_disability?: string;
  /** PD1.7 - Living Will Code */
  set_7_livingWill?: LivingWillCodes | string;
  /** PD1.8 - Organ Donor Code */
  set_8_organDonorCode?: OrganDonorCodes | string;
  /** PD1.9 - Separate Bill */
  set_9_separateBill?: string;
  /** PD1.10 - Duplicate Patient */
  set_10_duplicatePatient?: CX[];
  /** PD1.11 - Publicity Code */
  set_11_publicityCode?: CE;
  /** PD1.12 - Protection Indicator */
  set_12_protectionIndicator?: string;
  /** PD1.13 - Protection Indicator Effective Date */
  set_13_protectionIndicatorEffectiveDate?: string;
  /** PD1.14 - Place of Worship */
  set_14_placeOfWorship?: XON[];
  /** PD1.15 - Advance Directive Code */
  set_15_advanceDirectiveCode?: CE[];
  /** PD1.16 - Immunization Registry Status */
  set_16_immunizationRegistryStatus?: ImmunizationRegistryStatus | string;
  /** PD1.17 - Immunization Registry Status Effective Date */
  set_17_immunizationRegistryStatusEffectiveDate?: string;
  /** PD1.18 - Publicity Code Effective Date */
  set_18_publicityCodeEffectiveDate?: string;
  /** PD1.19 - Military Branch */
  set_19_militaryBranch?: MilitaryService | string;
  /** PD1.20 - Military Rank/Grade */
  set_20_militaryRankGrade?: string;
  /** PD1.21 - Military Status */
  set_21_militaryStatus?: MilitaryStatus | string;
}

/** PDA Segment */
export interface PDA {
  /** PDA.1 - Death Cause Code */
  set_1_deathCauseCode?: CE[];
  /** PDA.2 - Death Location */
  set_2_deathLocation?: PL;
  /** PDA.3 - Death Certified Indicator */
  set_3_deathCertifiedIndicator?: string;
  /** PDA.4 - Death Certificate Signed Date/Time */
  set_4_deathCertificateSignedDateTime?: string;
  /** PDA.5 - Death Certified By */
  set_5_deathCertifiedBy?: XCN;
  /** PDA.6 - Autopsy Indicator */
  set_6_autopsyIndicator?: string;
  /** PDA.7 - Autopsy Start and End Date/Time */
  set_7_autopsyStartAndEndDateTime?: DR;
  /** PDA.8 - Autopsy Performed By */
  set_8_autopsyPerformedBy?: XCN;
  /** PDA.9 - Coroner Indicator */
  set_9_coronerIndicator?: string;
}

/** PID Segment */
export interface PID {
  /** PID.1 - Set ID - PID */
  set_1_setIdPid?: string;
  /** PID.2 - Patient ID */
  set_2_patientId?: CX;
  /** PID.3 - Patient Identifier List */
  set_3_identifier?: CX[];
  /** PID.4 - Alternate Patient ID - PID */
  set_4_alternatePatientIdPid?: CX[];
  /** PID.5 - Patient Name */
  set_5_name?: XPN[];
  /** PID.6 - Mother's Maiden Name */
  set_6_mothersMaidenName?: XPN[];
  /** PID.7 - Date/Time of Birth */
  set_7_birthDate?: string;
  /** PID.8 - Administrative Sex */
  set_8_gender?: AdministrativeSex | string;
  /** PID.9 - Patient Alias */
  set_9_alias?: XPN[];
  /** PID.10 - Race */
  set_10_race?: CE[];
  /** PID.11 - Patient Address */
  set_11_address?: XAD[];
  /** PID.12 - County Code */
  set_12_countyCode?: string;
  /** PID.13 - Phone Number - Home */
  set_13_homePhone?: XTN[];
  /** PID.14 - Phone Number - Business */
  set_14_businessPhone?: XTN[];
  /** PID.15 - Primary Language */
  set_15_language?: CE;
  /** PID.16 - Marital Status */
  set_16_maritalStatus?: CE;
  /** PID.17 - Religion */
  set_17_religion?: CE;
  /** PID.18 - Patient Account Number */
  set_18_accountNumber?: CX;
  /** PID.19 - SSN Number - Patient */
  set_19_ssnNumberPatient?: string;
  /** PID.20 - Driver's License Number - Patient */
  set_20_driversLicenseNumberPatient?: DLN;
  /** PID.21 - Mother's Identifier */
  set_21_mothersIdentifier?: CX[];
  /** PID.22 - Ethnic Group */
  set_22_ethnicity?: CE[];
  /** PID.23 - Birth Place */
  set_23_birthPlace?: string;
  /** PID.24 - Multiple Birth Indicator */
  set_24_multipleBirthIndicator?: string;
  /** PID.25 - Birth Order */
  set_25_birthOrder?: string;
  /** PID.26 - Citizenship */
  set_26_citizenship?: CE[];
  /** PID.27 - Veterans Military Status */
  set_27_veteransMilitaryStatus?: CE;
  /** PID.28 - Nationality */
  set_28_nationality?: CE;
  /** PID.29 - Patient Death Date and Time */
  set_29_deceasedDateTime?: string;
  /** PID.30 - Patient Death Indicator */
  set_30_deceased?: string;
  /** PID.31 - Identity Unknown Indicator */
  set_31_identityUnknownIndicator?: string;
  /** PID.32 - Identity Reliability Code */
  set_32_identityReliabilityCode?: (IdentityReliability | string)[];
  /** PID.33 - Last Update Date/Time */
  set_33_lastUpdateDateTime?: string;
  /** PID.34 - Last Update Facility */
  set_34_lastUpdateFacility?: HD;
  /** PID.35 - Species Code */
  set_35_speciesCode?: CE;
  /** PID.36 - Breed Code */
  set_36_breedCode?: CE;
  /** PID.37 - Strain */
  set_37_strain?: string;
  /** PID.38 - Production Class Code */
  set_38_productionClassCode?: CE;
  /** PID.39 - Tribal Citizenship */
  set_39_tribalCitizenship?: CWE[];
}

/** PR1 Segment */
export interface PR1 {
  /** PR1.1 - Set ID - PR1 */
  set_1_setIdPr1?: string;
  /** PR1.2 - Procedure Coding Method */
  set_2_procedureCodingMethod?: string;
  /** PR1.3 - Procedure Code */
  set_3_procedureCode?: CE;
  /** PR1.4 - Procedure Description */
  set_4_procedureDescription?: string;
  /** PR1.5 - Procedure Date/Time */
  set_5_procedureDateTime?: string;
  /** PR1.6 - Procedure Functional Type */
  set_6_procedureFunctionalType?: ProcedureFunctionalType | string;
  /** PR1.7 - Procedure Minutes */
  set_7_procedureMinutes?: string;
  /** PR1.8 - Anesthesiologist */
  set_8_anesthesiologist?: XCN[];
  /** PR1.9 - Anesthesia Code */
  set_9_anesthesiaCode?: string;
  /** PR1.10 - Anesthesia Minutes */
  set_10_anesthesiaMinutes?: string;
  /** PR1.11 - Surgeon */
  set_11_surgeon?: XCN[];
  /** PR1.12 - Procedure Practitioner */
  set_12_procedurePractitioner?: XCN[];
  /** PR1.13 - Consent Code */
  set_13_consentCode?: CE;
  /** PR1.14 - Procedure Priority */
  set_14_procedurePriority?: ProcedurePriority | string;
  /** PR1.15 - Associated Diagnosis Code */
  set_15_associatedDiagnosisCode?: CE;
  /** PR1.16 - Procedure Code Modifier */
  set_16_procedureCodeModifier?: CE[];
  /** PR1.17 - Procedure DRG Type */
  set_17_procedureDrgType?: ProcedureDrgType | string;
  /** PR1.18 - Tissue Type Code */
  set_18_tissueTypeCode?: CE[];
  /** PR1.19 - Procedure Identifier */
  set_19_procedureIdentifier?: EI;
  /** PR1.20 - Procedure Action Code */
  set_20_procedureActionCode?: SegmentAction | string;
}

/** PV1 Segment */
export interface PV1 {
  /** PV1.1 - Set ID - PV1 */
  set_1_setIdPv1?: string;
  /** PV1.2 - Patient Class */
  set_2_class?: PatientClass | string;
  /** PV1.3 - Assigned Patient Location */
  set_3_assignedPatientLocation?: PL;
  /** PV1.4 - Admission Type */
  set_4_admissionType?: AdmissionType | string;
  /** PV1.5 - Preadmit Number */
  set_5_preadmitNumber?: CX;
  /** PV1.6 - Prior Patient Location */
  set_6_priorPatientLocation?: PL;
  /** PV1.7 - Attending Doctor */
  set_7_attendingDoctor?: XCN[];
  /** PV1.8 - Referring Doctor */
  set_8_referringDoctor?: XCN[];
  /** PV1.9 - Consulting Doctor */
  set_9_consultingDoctor?: XCN[];
  /** PV1.10 - Hospital Service */
  set_10_hospitalService?: HospitalService | string;
  /** PV1.11 - Temporary Location */
  set_11_temporaryLocation?: PL;
  /** PV1.12 - Preadmit Test Indicator */
  set_12_preadmitTestIndicator?: string;
  /** PV1.13 - Re-admission Indicator */
  set_13_reAdmissionIndicator?: ReAdmissionIndicator | string;
  /** PV1.14 - Admit Source */
  set_14_admitSource?: string;
  /** PV1.15 - Ambulatory Status */
  set_15_ambulatoryStatus?: (AmbulatoryStatus | string)[];
  /** PV1.16 - VIP Indicator */
  set_16_vip?: string;
  /** PV1.17 - Admitting Doctor */
  set_17_admittingDoctor?: XCN[];
  /** PV1.18 - Patient Type */
  set_18_type?: string;
  /** PV1.19 - Visit Number */
  set_19_visitNumber?: CX;
  /** PV1.20 - Financial Class */
  set_20_financialClass?: FC[];
  /** PV1.21 - Charge Price Indicator */
  set_21_chargePriceIndicator?: string;
  /** PV1.22 - Courtesy Code */
  set_22_courtesyCode?: string;
  /** PV1.23 - Credit Rating */
  set_23_creditRating?: string;
  /** PV1.24 - Contract Code */
  set_24_contractCode?: string[];
  /** PV1.25 - Contract Effective Date */
  set_25_contractEffectiveDate?: string[];
  /** PV1.26 - Contract Amount */
  set_26_contractAmount?: string[];
  /** PV1.27 - Contract Period */
  set_27_contractPeriod?: string[];
  /** PV1.28 - Interest Code */
  set_28_interestCode?: string;
  /** PV1.29 - Transfer to Bad Debt Code */
  set_29_transferToBadDebtCode?: string;
  /** PV1.30 - Transfer to Bad Debt Date */
  set_30_transferToBadDebtDate?: string;
  /** PV1.31 - Bad Debt Agency Code */
  set_31_badDebtAgencyCode?: string;
  /** PV1.32 - Bad Debt Transfer Amount */
  set_32_badDebtTransferAmount?: string;
  /** PV1.33 - Bad Debt Recovery Amount */
  set_33_badDebtRecoveryAmount?: string;
  /** PV1.34 - Delete Account Indicator */
  set_34_deleteAccountIndicator?: string;
  /** PV1.35 - Delete Account Date */
  set_35_deleteAccountDate?: string;
  /** PV1.36 - Discharge Disposition */
  set_36_dischargeDisposition?: string;
  /** PV1.37 - Discharged to Location */
  set_37_dischargedToLocation?: DLD;
  /** PV1.38 - Diet Type */
  set_38_dietType?: CE;
  /** PV1.39 - Servicing Facility */
  set_39_servicingFacility?: string;
  /** PV1.40 - Bed Status */
  set_40_bedStatus?: BedStatus | string;
  /** PV1.41 - Account Status */
  set_41_accountStatus?: string;
  /** PV1.42 - Pending Location */
  set_42_pendingLocation?: PL;
  /** PV1.43 - Prior Temporary Location */
  set_43_priorTemporaryLocation?: PL;
  /** PV1.44 - Admit Date/Time */
  set_44_admission?: string;
  /** PV1.45 - Discharge Date/Time */
  set_45_discharge?: string[];
  /** PV1.46 - Current Patient Balance */
  set_46_currentPatientBalance?: string;
  /** PV1.47 - Total Charges */
  set_47_totalCharges?: string;
  /** PV1.48 - Total Adjustments */
  set_48_totalAdjustments?: string;
  /** PV1.49 - Total Payments */
  set_49_totalPayments?: string;
  /** PV1.50 - Alternate Visit ID */
  set_50_alternateVisitId?: CX;
  /** PV1.51 - Visit Indicator */
  set_51_visitIndicator?: VisitIndicator | string;
  /** PV1.52 - Other Healthcare Provider */
  set_52_otherHealthcareProvider?: XCN[];
}

/** PV2 Segment */
export interface PV2 {
  /** PV2.1 - Prior Pending Location */
  set_1_priorPendingLocation?: PL;
  /** PV2.2 - Accommodation Code */
  set_2_accommodationCode?: CE;
  /** PV2.3 - Admit Reason */
  set_3_admitReason?: CE;
  /** PV2.4 - Transfer Reason */
  set_4_transferReason?: CE;
  /** PV2.5 - Patient Valuables */
  set_5_valuables?: string[];
  /** PV2.6 - Patient Valuables Location */
  set_6_valuablesLocation?: string;
  /** PV2.7 - Visit User Code */
  set_7_visitUserCode?: (VisitUserCodes | string)[];
  /** PV2.8 - Expected Admit Date/Time */
  set_8_expectedAdmission?: string;
  /** PV2.9 - Expected Discharge Date/Time */
  set_9_expectedDischarge?: string;
  /** PV2.10 - Estimated Length of Inpatient Stay */
  set_10_estimatedLengthOfInpatientStay?: string;
  /** PV2.11 - Actual Length of Inpatient Stay */
  set_11_actualLengthOfInpatientStay?: string;
  /** PV2.12 - Visit Description */
  set_12_visitDescription?: string;
  /** PV2.13 - Referral Source Code */
  set_13_referralSourceCode?: XCN[];
  /** PV2.14 - Previous Service Date */
  set_14_previousServiceDate?: string;
  /** PV2.15 - Employment Illness Related Indicator */
  set_15_employmentIllnessRelatedIndicator?: string;
  /** PV2.16 - Purge Status Code */
  set_16_purgeStatusCode?: PurgeStatus | string;
  /** PV2.17 - Purge Status Date */
  set_17_purgeStatusDate?: string;
  /** PV2.18 - Special Program Code */
  set_18_specialProgramCode?: SpecialProgram | string;
  /** PV2.19 - Retention Indicator */
  set_19_retentionIndicator?: string;
  /** PV2.20 - Expected Number of Insurance Plans */
  set_20_expectedNumberOfInsurancePlans?: string;
  /** PV2.21 - Visit Publicity Code */
  set_21_visitPublicityCode?: Publicity | string;
  /** PV2.22 - Visit Protection Indicator */
  set_22_visitProtectionIndicator?: string;
  /** PV2.23 - Clinic Organization Name */
  set_23_clinicOrganizationName?: XON[];
  /** PV2.24 - Patient Status Code */
  set_24_status?: PatientStatus | string;
  /** PV2.25 - Visit Priority Code */
  set_25_visitPriorityCode?: VisitPriority | string;
  /** PV2.26 - Previous Treatment Date */
  set_26_previousTreatmentDate?: string;
  /** PV2.27 - Expected Discharge Disposition */
  set_27_expectedDischargeDisposition?: string;
  /** PV2.28 - Signature on File Date */
  set_28_signatureOnFileDate?: string;
  /** PV2.29 - First Similar Illness Date */
  set_29_firstSimilarIllnessDate?: string;
  /** PV2.30 - Patient Charge Adjustment Code */
  set_30_chargeAdjustmentCode?: CE;
  /** PV2.31 - Recurring Service Code */
  set_31_recurringServiceCode?: string;
  /** PV2.32 - Billing Media Code */
  set_32_billingMediaCode?: string;
  /** PV2.33 - Expected Surgery Date and Time */
  set_33_expectedSurgeryDateAndTime?: string;
  /** PV2.34 - Military Partnership Code */
  set_34_militaryPartnershipCode?: string;
  /** PV2.35 - Military Non-Availability Code */
  set_35_militaryNonAvailabilityCode?: string;
  /** PV2.36 - Newborn Baby Indicator */
  set_36_newbornBabyIndicator?: string;
  /** PV2.37 - Baby Detained Indicator */
  set_37_babyDetainedIndicator?: string;
  /** PV2.38 - Mode of Arrival Code */
  set_38_modeOfArrivalCode?: CE;
  /** PV2.39 - Recreational Drug Use Code */
  set_39_recreationalDrugUseCode?: CE[];
  /** PV2.40 - Admission Level of Care Code */
  set_40_admissionLevelOfCareCode?: CE;
  /** PV2.41 - Precaution Code */
  set_41_precautionCode?: CE[];
  /** PV2.42 - Patient Condition Code */
  set_42_conditionCode?: CE;
  /** PV2.43 - Living Will Code */
  set_43_livingWill?: LivingWillCodes | string;
  /** PV2.44 - Organ Donor Code */
  set_44_organDonorCode?: OrganDonorCodes | string;
  /** PV2.45 - Advance Directive Code */
  set_45_advanceDirectiveCode?: CE[];
  /** PV2.46 - Patient Status Effective Date */
  set_46_statusStart?: string;
  /** PV2.47 - Expected LOA Return Date/Time */
  set_47_expectedLoaReturnDateTime?: string;
  /** PV2.48 - Expected Pre-admission Testing Date/Time */
  set_48_expectedPreAdmissionTestingDateTime?: string;
  /** PV2.49 - Notify Clergy Code */
  set_49_notifyClergyCode?: (ClergyNotificationType | string)[];
}

/** ROL Segment */
export interface ROL {
  /** ROL.1 - Role Instance ID */
  set_1_roleInstanceId?: EI;
  /** ROL.2 - Action Code */
  set_2_actionCode?: ProblemGoalAction | string;
  /** ROL.3 - Role-ROL */
  set_3_roleRol?: CE;
  /** ROL.4 - Role Person */
  set_4_rolePerson?: XCN[];
  /** ROL.5 - Role Begin Date/Time */
  set_5_roleBeginDateTime?: string;
  /** ROL.6 - Role End Date/Time */
  set_6_roleEndDateTime?: string;
  /** ROL.7 - Role Duration */
  set_7_roleDuration?: CE;
  /** ROL.8 - Role Action Reason */
  set_8_roleActionReason?: CE;
  /** ROL.9 - Provider Type */
  set_9_providerType?: CE[];
  /** ROL.10 - Organization Unit Type */
  set_10_organizationUnitType?: CE;
  /** ROL.11 - Office/Home Address/Birthplace */
  set_11_address?: XAD[];
  /** ROL.12 - Phone */
  set_12_phone?: XTN[];
}

/** SFT Segment */
export interface SFT {
  /** SFT.1 - Software Vendor Organization */
  set_1_softwareVendorOrganization?: XON;
  /** SFT.2 - Software Certified Version or Release Number */
  set_2_softwareCertifiedVersionOrReleaseNumber?: string;
  /** SFT.3 - Software Product Name */
  set_3_softwareProductName?: string;
  /** SFT.4 - Software Binary ID */
  set_4_softwareBinaryId?: string;
  /** SFT.5 - Software Product Information */
  set_5_softwareProductInformation?: string;
  /** SFT.6 - Software Install Date */
  set_6_softwareInstallDate?: string;
}

/** UB1 Segment */
export interface UB1 {
  /** UB1.1 - Set ID - UB1 */
  set_1_setIdUb1?: string;
  /** UB1.2 - Blood Deductible  (43) */
  set_2_bloodDeductible?: string;
  /** UB1.3 - Blood Furnished-Pints Of (40) */
  set_3_bloodFurnishedPintsOf?: string;
  /** UB1.4 - Blood Replaced-Pints (41) */
  set_4_bloodReplacedPints?: string;
  /** UB1.5 - Blood Not Replaced-Pints(42) */
  set_5_bloodNotReplacedPints?: string;
  /** UB1.6 - Co-Insurance Days (25) */
  set_6_coInsuranceDays?: string;
  /** UB1.7 - Condition Code (35-39) */
  set_7_conditionCode?: string[];
  /** UB1.8 - Covered Days - (23) */
  set_8_coveredDays?: string;
  /** UB1.9 - Non Covered Days - (24) */
  set_9_nonCoveredDays?: string;
  /** UB1.10 - Value Amount & Code (46-49) */
  set_10_valueAmountAndCode?: UVC[];
  /** UB1.11 - Number Of Grace Days (90) */
  set_11_numberOfGraceDays?: string;
  /** UB1.12 - Special Program Indicator (44) */
  set_12_specialProgramIndicator?: CE;
  /** UB1.13 - PSRO/UR Approval Indicator (87) */
  set_13_psroUrApprovalIndicator?: CE;
  /** UB1.14 - PSRO/UR Approved Stay-Fm (88) */
  set_14_psroUrApprovedStayFm?: string;
  /** UB1.15 - PSRO/UR Approved Stay-To (89) */
  set_15_psroUrApprovedStayTo?: string;
  /** UB1.16 - Occurrence (28-32) */
  set_16_occurrence?: OCD[];
  /** UB1.17 - Occurrence Span (33) */
  set_17_occurrenceSpan?: CE;
  /** UB1.18 - Occur Span Start Date(33) */
  set_18_occurSpanStartDate?: string;
  /** UB1.19 - Occur Span End Date (33) */
  set_19_occurSpanEndDate?: string;
  /** UB1.20 - UB-82 Locator 2 */
  set_20_ub82Locator2?: string;
  /** UB1.21 - UB-82 Locator 9 */
  set_21_ub82Locator9?: string;
  /** UB1.22 - UB-82 Locator 27 */
  set_22_ub82Locator27?: string;
  /** UB1.23 - UB-82 Locator 45 */
  set_23_ub82Locator45?: string;
}

/** UB2 Segment */
export interface UB2 {
  /** UB2.1 - Set ID - UB2 */
  set_1_setIdUb2?: string;
  /** UB2.2 - Co-Insurance Days (9) */
  set_2_coInsuranceDays?: string;
  /** UB2.3 - Condition Code (24-30) */
  set_3_conditionCode?: string[];
  /** UB2.4 - Covered Days (7) */
  set_4_coveredDays?: string;
  /** UB2.5 - Non-Covered Days (8) */
  set_5_nonCoveredDays?: string;
  /** UB2.6 - Value Amount & Code */
  set_6_valueAmountAndCode?: UVC[];
  /** UB2.7 - Occurrence Code & Date (32-35) */
  set_7_occurrenceCodeAndDate?: OCD[];
  /** UB2.8 - Occurrence Span Code/Dates (36) */
  set_8_occurrenceSpanCodeDates?: OSP[];
  /** UB2.9 - UB92 Locator 2 (State) */
  set_9_ub92Locator2?: string[];
  /** UB2.10 - UB92 Locator 11 (State) */
  set_10_ub92Locator11?: string[];
  /** UB2.11 - UB92 Locator 31 (National) */
  set_11_ub92Locator31?: string;
  /** UB2.12 - Document Control Number */
  set_12_documentControlNumber?: string[];
  /** UB2.13 - UB92 Locator 49 (National) */
  set_13_ub92Locator49?: string[];
  /** UB2.14 - UB92 Locator 56 (State) */
  set_14_ub92Locator56?: string[];
  /** UB2.15 - UB92 Locator 57 (National) */
  set_15_ub92Locator57?: string;
  /** UB2.16 - UB92 Locator 78 (State) */
  set_16_ub92Locator78?: string[];
  /** UB2.17 - Special Visit Count */
  set_17_specialVisitCount?: string;
}

// ====== Segment Conversion ======

/** Convert typed segment object to HL7v2Segment */
export function toSegment(segmentName: string, data: Record<string, unknown>): HL7v2Segment {
  const fields: Record<number, FieldValue> = {};
  for (const [key, value] of Object.entries(data)) {
    if (value == null) continue;
    const match = key.match(/^set_(\d+)_/);
    if (!match || !match[1]) continue;
    const idx = parseInt(match[1], 10);
    if (typeof value === "string") {
      fields[idx] = value;
    } else if (Array.isArray(value)) {
      const arr: FieldValue[] = [];
      for (const v of value) {
        if (typeof v === "string") {
          arr.push(v);
        } else if (v != null) {
          const fv = toFieldValue(v as Record<string, unknown>);
          if (fv !== undefined) arr.push(fv);
        }
      }
      if (arr.length > 0) fields[idx] = arr;
    } else if (typeof value === "object") {
      const fv = toFieldValue(value as Record<string, unknown>);
      if (fv !== undefined) fields[idx] = fv;
    }
  }
  return { segment: segmentName, fields };
}
