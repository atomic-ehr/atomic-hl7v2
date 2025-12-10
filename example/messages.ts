// AUTO-GENERATED - HL7v2 Message Builders
// Generated for: ADT_A01

import type { HL7v2Segment, HL7v2Message } from "./types";
import {
  toSegment,
  type ACC,
  type AL1,
  type DB1,
  type DG1,
  type DRG,
  type EVN,
  type GT1,
  type IN1,
  type IN2,
  type IN3,
  type MSH,
  type NK1,
  type OBX,
  type PD1,
  type PDA,
  type PID,
  type PR1,
  type PV1,
  type PV2,
  type ROL,
  type SFT,
  type UB1,
  type UB2,
} from "./fields";

export interface ADT_A01_PROCEDURE {
  pr1: HL7v2Segment;
  rol?: HL7v2Segment[];
}

export class ADT_A01_PROCEDUREBuilder {
  private group: Partial<ADT_A01_PROCEDURE> = {};

  pr1(segment: PR1): this {
    this.group.pr1 = toSegment("PR1", segment);
    return this;
  }

  addROL(segment: ROL): this {
    if (!this.group.rol) this.group.rol = [];
    this.group.rol.push(toSegment("ROL", segment));
    return this;
  }

  build(): ADT_A01_PROCEDURE {
    return this.group as ADT_A01_PROCEDURE;
  }
}

export interface ADT_A01_INSURANCE {
  in1: HL7v2Segment;
  in2?: HL7v2Segment;
  in3?: HL7v2Segment[];
  rol?: HL7v2Segment[];
}

export class ADT_A01_INSURANCEBuilder {
  private group: Partial<ADT_A01_INSURANCE> = {};

  in1(segment: IN1): this {
    this.group.in1 = toSegment("IN1", segment);
    return this;
  }

  in2(segment: IN2): this {
    this.group.in2 = toSegment("IN2", segment);
    return this;
  }

  addIN3(segment: IN3): this {
    if (!this.group.in3) this.group.in3 = [];
    this.group.in3.push(toSegment("IN3", segment));
    return this;
  }

  addROL(segment: ROL): this {
    if (!this.group.rol) this.group.rol = [];
    this.group.rol.push(toSegment("ROL", segment));
    return this;
  }

  build(): ADT_A01_INSURANCE {
    return this.group as ADT_A01_INSURANCE;
  }
}

/**
 * ADT_A01 Message Structure
 */
export interface ADT_A01_Message {
  msh: HL7v2Segment;
  sft?: HL7v2Segment[];
  evn: HL7v2Segment;
  pid: HL7v2Segment;
  pd1?: HL7v2Segment;
  rol_1?: HL7v2Segment[];
  nk1?: HL7v2Segment[];
  pv1: HL7v2Segment;
  pv2?: HL7v2Segment;
  rol_2?: HL7v2Segment[];
  db1?: HL7v2Segment[];
  obx?: HL7v2Segment[];
  al1?: HL7v2Segment[];
  dg1?: HL7v2Segment[];
  drg?: HL7v2Segment;
  procedure?: ADT_A01_PROCEDURE[];
  gt1?: HL7v2Segment[];
  insurance?: ADT_A01_INSURANCE[];
  acc?: HL7v2Segment;
  ub1?: HL7v2Segment;
  ub2?: HL7v2Segment;
  pda?: HL7v2Segment;
}

/**
 * Builder for ADT_A01 messages
 */
export class ADT_A01Builder {
  private msg: Partial<ADT_A01_Message> = {};

  msh(segment: MSH): this {
    this.msg.msh = toSegment("MSH", segment);
    return this;
  }

  addSFT(segment: SFT): this {
    if (!this.msg.sft) this.msg.sft = [];
    this.msg.sft.push(toSegment("SFT", segment));
    return this;
  }

  evn(segment: EVN): this {
    this.msg.evn = toSegment("EVN", segment);
    return this;
  }

  pid(segment: PID): this {
    this.msg.pid = toSegment("PID", segment);
    return this;
  }

  pd1(segment: PD1): this {
    this.msg.pd1 = toSegment("PD1", segment);
    return this;
  }

  addROL_1(segment: ROL): this {
    if (!this.msg.rol_1) this.msg.rol_1 = [];
    this.msg.rol_1.push(toSegment("ROL", segment));
    return this;
  }

  addNK1(segment: NK1): this {
    if (!this.msg.nk1) this.msg.nk1 = [];
    this.msg.nk1.push(toSegment("NK1", segment));
    return this;
  }

  pv1(segment: PV1): this {
    this.msg.pv1 = toSegment("PV1", segment);
    return this;
  }

  pv2(segment: PV2): this {
    this.msg.pv2 = toSegment("PV2", segment);
    return this;
  }

  addROL_2(segment: ROL): this {
    if (!this.msg.rol_2) this.msg.rol_2 = [];
    this.msg.rol_2.push(toSegment("ROL", segment));
    return this;
  }

  addDB1(segment: DB1): this {
    if (!this.msg.db1) this.msg.db1 = [];
    this.msg.db1.push(toSegment("DB1", segment));
    return this;
  }

  addOBX(segment: OBX): this {
    if (!this.msg.obx) this.msg.obx = [];
    this.msg.obx.push(toSegment("OBX", segment));
    return this;
  }

  addAL1(segment: AL1): this {
    if (!this.msg.al1) this.msg.al1 = [];
    this.msg.al1.push(toSegment("AL1", segment));
    return this;
  }

  addDG1(segment: DG1): this {
    if (!this.msg.dg1) this.msg.dg1 = [];
    this.msg.dg1.push(toSegment("DG1", segment));
    return this;
  }

  drg(segment: DRG): this {
    this.msg.drg = toSegment("DRG", segment);
    return this;
  }

  addPROCEDURE(group: ADT_A01_PROCEDURE | ((builder: ADT_A01_PROCEDUREBuilder) => ADT_A01_PROCEDUREBuilder)): this {
    let g: ADT_A01_PROCEDURE;
    if (typeof group === "function") g = group(new ADT_A01_PROCEDUREBuilder()).build();
    else g = group;
    if (!this.msg.procedure) this.msg.procedure = [];
    this.msg.procedure.push(g);
    return this;
  }

  addGT1(segment: GT1): this {
    if (!this.msg.gt1) this.msg.gt1 = [];
    this.msg.gt1.push(toSegment("GT1", segment));
    return this;
  }

  addINSURANCE(group: ADT_A01_INSURANCE | ((builder: ADT_A01_INSURANCEBuilder) => ADT_A01_INSURANCEBuilder)): this {
    let g: ADT_A01_INSURANCE;
    if (typeof group === "function") g = group(new ADT_A01_INSURANCEBuilder()).build();
    else g = group;
    if (!this.msg.insurance) this.msg.insurance = [];
    this.msg.insurance.push(g);
    return this;
  }

  acc(segment: ACC): this {
    this.msg.acc = toSegment("ACC", segment);
    return this;
  }

  ub1(segment: UB1): this {
    this.msg.ub1 = toSegment("UB1", segment);
    return this;
  }

  ub2(segment: UB2): this {
    this.msg.ub2 = toSegment("UB2", segment);
    return this;
  }

  pda(segment: PDA): this {
    this.msg.pda = toSegment("PDA", segment);
    return this;
  }

  build(): HL7v2Message {
    if (!this.msg.msh) throw new Error("ADT_A01: msh is required");
    if (!this.msg.evn) throw new Error("ADT_A01: evn is required");
    if (!this.msg.pid) throw new Error("ADT_A01: pid is required");
    if (!this.msg.pv1) throw new Error("ADT_A01: pv1 is required");
    const segments: HL7v2Message = [];
    if (this.msg.msh) segments.push(this.msg.msh);
    if (this.msg.sft) for (const seg of this.msg.sft) segments.push(seg);
    if (this.msg.evn) segments.push(this.msg.evn);
    if (this.msg.pid) segments.push(this.msg.pid);
    if (this.msg.pd1) segments.push(this.msg.pd1);
    if (this.msg.rol_1) for (const seg of this.msg.rol_1) segments.push(seg);
    if (this.msg.nk1) for (const seg of this.msg.nk1) segments.push(seg);
    if (this.msg.pv1) segments.push(this.msg.pv1);
    if (this.msg.pv2) segments.push(this.msg.pv2);
    if (this.msg.rol_2) for (const seg of this.msg.rol_2) segments.push(seg);
    if (this.msg.db1) for (const seg of this.msg.db1) segments.push(seg);
    if (this.msg.obx) for (const seg of this.msg.obx) segments.push(seg);
    if (this.msg.al1) for (const seg of this.msg.al1) segments.push(seg);
    if (this.msg.dg1) for (const seg of this.msg.dg1) segments.push(seg);
    if (this.msg.drg) segments.push(this.msg.drg);
    if (this.msg.procedure) for (const group of this.msg.procedure) {
      if (group.pr1) segments.push(group.pr1);
      if (group.rol) for (const seg of group.rol) segments.push(seg);
    }
    if (this.msg.gt1) for (const seg of this.msg.gt1) segments.push(seg);
    if (this.msg.insurance) for (const group of this.msg.insurance) {
      if (group.in1) segments.push(group.in1);
      if (group.in2) segments.push(group.in2);
      if (group.in3) for (const seg of group.in3) segments.push(seg);
      if (group.rol) for (const seg of group.rol) segments.push(seg);
    }
    if (this.msg.acc) segments.push(this.msg.acc);
    if (this.msg.ub1) segments.push(this.msg.ub1);
    if (this.msg.ub2) segments.push(this.msg.ub2);
    if (this.msg.pda) segments.push(this.msg.pda);
    return segments;
  }
}
