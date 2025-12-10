// AUTO-GENERATED - HL7v2 Message Builders
// Generated for: ADT_A01

import type { HL7v2Segment, HL7v2Message } from "./types";
import {
  ACCBuilder,
  AL1Builder,
  DB1Builder,
  DG1Builder,
  DRGBuilder,
  EVNBuilder,
  GT1Builder,
  IN1Builder,
  IN2Builder,
  IN3Builder,
  MSHBuilder,
  NK1Builder,
  OBXBuilder,
  PD1Builder,
  PDABuilder,
  PIDBuilder,
  PR1Builder,
  PV1Builder,
  PV2Builder,
  ROLBuilder,
  SFTBuilder,
  UB1Builder,
  UB2Builder,
} from "./fields";

export interface ADT_A01_PROCEDURE {
  pr1: HL7v2Segment;
  rol?: HL7v2Segment[];
}

export class ADT_A01_PROCEDUREBuilder {
  private group: Partial<ADT_A01_PROCEDURE> = {};

  pr1(segment: HL7v2Segment | PR1Builder | ((builder: PR1Builder) => PR1Builder)): this {
    if (typeof segment === "function") this.group.pr1 = segment(new PR1Builder()).build();
    else if (segment instanceof PR1Builder) this.group.pr1 = segment.build();
    else this.group.pr1 = segment;
    return this;
  }

  addROL(segment: HL7v2Segment | ROLBuilder | ((builder: ROLBuilder) => ROLBuilder)): this {
    let seg: HL7v2Segment;
    if (typeof segment === "function") seg = segment(new ROLBuilder()).build();
    else if (segment instanceof ROLBuilder) seg = segment.build();
    else seg = segment;
    if (!this.group.rol) this.group.rol = [];
    this.group.rol.push(seg);
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

  in1(segment: HL7v2Segment | IN1Builder | ((builder: IN1Builder) => IN1Builder)): this {
    if (typeof segment === "function") this.group.in1 = segment(new IN1Builder()).build();
    else if (segment instanceof IN1Builder) this.group.in1 = segment.build();
    else this.group.in1 = segment;
    return this;
  }

  in2(segment: HL7v2Segment | IN2Builder | ((builder: IN2Builder) => IN2Builder)): this {
    if (typeof segment === "function") this.group.in2 = segment(new IN2Builder()).build();
    else if (segment instanceof IN2Builder) this.group.in2 = segment.build();
    else this.group.in2 = segment;
    return this;
  }

  addIN3(segment: HL7v2Segment | IN3Builder | ((builder: IN3Builder) => IN3Builder)): this {
    let seg: HL7v2Segment;
    if (typeof segment === "function") seg = segment(new IN3Builder()).build();
    else if (segment instanceof IN3Builder) seg = segment.build();
    else seg = segment;
    if (!this.group.in3) this.group.in3 = [];
    this.group.in3.push(seg);
    return this;
  }

  addROL(segment: HL7v2Segment | ROLBuilder | ((builder: ROLBuilder) => ROLBuilder)): this {
    let seg: HL7v2Segment;
    if (typeof segment === "function") seg = segment(new ROLBuilder()).build();
    else if (segment instanceof ROLBuilder) seg = segment.build();
    else seg = segment;
    if (!this.group.rol) this.group.rol = [];
    this.group.rol.push(seg);
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
  rol?: HL7v2Segment[];
  nk1?: HL7v2Segment[];
  pv1: HL7v2Segment;
  pv2?: HL7v2Segment;
  rol?: HL7v2Segment[];
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

  msh(segment: HL7v2Segment | MSHBuilder | ((builder: MSHBuilder) => MSHBuilder)): this {
    if (typeof segment === "function") this.msg.msh = segment(new MSHBuilder()).build();
    else if (segment instanceof MSHBuilder) this.msg.msh = segment.build();
    else this.msg.msh = segment;
    return this;
  }

  addSFT(segment: HL7v2Segment | SFTBuilder | ((builder: SFTBuilder) => SFTBuilder)): this {
    let seg: HL7v2Segment;
    if (typeof segment === "function") seg = segment(new SFTBuilder()).build();
    else if (segment instanceof SFTBuilder) seg = segment.build();
    else seg = segment;
    if (!this.msg.sft) this.msg.sft = [];
    this.msg.sft.push(seg);
    return this;
  }

  evn(segment: HL7v2Segment | EVNBuilder | ((builder: EVNBuilder) => EVNBuilder)): this {
    if (typeof segment === "function") this.msg.evn = segment(new EVNBuilder()).build();
    else if (segment instanceof EVNBuilder) this.msg.evn = segment.build();
    else this.msg.evn = segment;
    return this;
  }

  pid(segment: HL7v2Segment | PIDBuilder | ((builder: PIDBuilder) => PIDBuilder)): this {
    if (typeof segment === "function") this.msg.pid = segment(new PIDBuilder()).build();
    else if (segment instanceof PIDBuilder) this.msg.pid = segment.build();
    else this.msg.pid = segment;
    return this;
  }

  pd1(segment: HL7v2Segment | PD1Builder | ((builder: PD1Builder) => PD1Builder)): this {
    if (typeof segment === "function") this.msg.pd1 = segment(new PD1Builder()).build();
    else if (segment instanceof PD1Builder) this.msg.pd1 = segment.build();
    else this.msg.pd1 = segment;
    return this;
  }

  addROL(segment: HL7v2Segment | ROLBuilder | ((builder: ROLBuilder) => ROLBuilder)): this {
    let seg: HL7v2Segment;
    if (typeof segment === "function") seg = segment(new ROLBuilder()).build();
    else if (segment instanceof ROLBuilder) seg = segment.build();
    else seg = segment;
    if (!this.msg.rol) this.msg.rol = [];
    this.msg.rol.push(seg);
    return this;
  }

  addNK1(segment: HL7v2Segment | NK1Builder | ((builder: NK1Builder) => NK1Builder)): this {
    let seg: HL7v2Segment;
    if (typeof segment === "function") seg = segment(new NK1Builder()).build();
    else if (segment instanceof NK1Builder) seg = segment.build();
    else seg = segment;
    if (!this.msg.nk1) this.msg.nk1 = [];
    this.msg.nk1.push(seg);
    return this;
  }

  pv1(segment: HL7v2Segment | PV1Builder | ((builder: PV1Builder) => PV1Builder)): this {
    if (typeof segment === "function") this.msg.pv1 = segment(new PV1Builder()).build();
    else if (segment instanceof PV1Builder) this.msg.pv1 = segment.build();
    else this.msg.pv1 = segment;
    return this;
  }

  pv2(segment: HL7v2Segment | PV2Builder | ((builder: PV2Builder) => PV2Builder)): this {
    if (typeof segment === "function") this.msg.pv2 = segment(new PV2Builder()).build();
    else if (segment instanceof PV2Builder) this.msg.pv2 = segment.build();
    else this.msg.pv2 = segment;
    return this;
  }

  addROL(segment: HL7v2Segment | ROLBuilder | ((builder: ROLBuilder) => ROLBuilder)): this {
    let seg: HL7v2Segment;
    if (typeof segment === "function") seg = segment(new ROLBuilder()).build();
    else if (segment instanceof ROLBuilder) seg = segment.build();
    else seg = segment;
    if (!this.msg.rol) this.msg.rol = [];
    this.msg.rol.push(seg);
    return this;
  }

  addDB1(segment: HL7v2Segment | DB1Builder | ((builder: DB1Builder) => DB1Builder)): this {
    let seg: HL7v2Segment;
    if (typeof segment === "function") seg = segment(new DB1Builder()).build();
    else if (segment instanceof DB1Builder) seg = segment.build();
    else seg = segment;
    if (!this.msg.db1) this.msg.db1 = [];
    this.msg.db1.push(seg);
    return this;
  }

  addOBX(segment: HL7v2Segment | OBXBuilder | ((builder: OBXBuilder) => OBXBuilder)): this {
    let seg: HL7v2Segment;
    if (typeof segment === "function") seg = segment(new OBXBuilder()).build();
    else if (segment instanceof OBXBuilder) seg = segment.build();
    else seg = segment;
    if (!this.msg.obx) this.msg.obx = [];
    this.msg.obx.push(seg);
    return this;
  }

  addAL1(segment: HL7v2Segment | AL1Builder | ((builder: AL1Builder) => AL1Builder)): this {
    let seg: HL7v2Segment;
    if (typeof segment === "function") seg = segment(new AL1Builder()).build();
    else if (segment instanceof AL1Builder) seg = segment.build();
    else seg = segment;
    if (!this.msg.al1) this.msg.al1 = [];
    this.msg.al1.push(seg);
    return this;
  }

  addDG1(segment: HL7v2Segment | DG1Builder | ((builder: DG1Builder) => DG1Builder)): this {
    let seg: HL7v2Segment;
    if (typeof segment === "function") seg = segment(new DG1Builder()).build();
    else if (segment instanceof DG1Builder) seg = segment.build();
    else seg = segment;
    if (!this.msg.dg1) this.msg.dg1 = [];
    this.msg.dg1.push(seg);
    return this;
  }

  drg(segment: HL7v2Segment | DRGBuilder | ((builder: DRGBuilder) => DRGBuilder)): this {
    if (typeof segment === "function") this.msg.drg = segment(new DRGBuilder()).build();
    else if (segment instanceof DRGBuilder) this.msg.drg = segment.build();
    else this.msg.drg = segment;
    return this;
  }

  addPROCEDURE(group: ADT_A01_PROCEDURE | ADT_A01_PROCEDUREBuilder | ((builder: ADT_A01_PROCEDUREBuilder) => ADT_A01_PROCEDUREBuilder)): this {
    let g: ADT_A01_PROCEDURE;
    if (typeof group === "function") g = group(new ADT_A01_PROCEDUREBuilder()).build();
    else if (group instanceof ADT_A01_PROCEDUREBuilder) g = group.build();
    else g = group;
    if (!this.msg.procedure) this.msg.procedure = [];
    this.msg.procedure.push(g);
    return this;
  }

  addGT1(segment: HL7v2Segment | GT1Builder | ((builder: GT1Builder) => GT1Builder)): this {
    let seg: HL7v2Segment;
    if (typeof segment === "function") seg = segment(new GT1Builder()).build();
    else if (segment instanceof GT1Builder) seg = segment.build();
    else seg = segment;
    if (!this.msg.gt1) this.msg.gt1 = [];
    this.msg.gt1.push(seg);
    return this;
  }

  addINSURANCE(group: ADT_A01_INSURANCE | ADT_A01_INSURANCEBuilder | ((builder: ADT_A01_INSURANCEBuilder) => ADT_A01_INSURANCEBuilder)): this {
    let g: ADT_A01_INSURANCE;
    if (typeof group === "function") g = group(new ADT_A01_INSURANCEBuilder()).build();
    else if (group instanceof ADT_A01_INSURANCEBuilder) g = group.build();
    else g = group;
    if (!this.msg.insurance) this.msg.insurance = [];
    this.msg.insurance.push(g);
    return this;
  }

  acc(segment: HL7v2Segment | ACCBuilder | ((builder: ACCBuilder) => ACCBuilder)): this {
    if (typeof segment === "function") this.msg.acc = segment(new ACCBuilder()).build();
    else if (segment instanceof ACCBuilder) this.msg.acc = segment.build();
    else this.msg.acc = segment;
    return this;
  }

  ub1(segment: HL7v2Segment | UB1Builder | ((builder: UB1Builder) => UB1Builder)): this {
    if (typeof segment === "function") this.msg.ub1 = segment(new UB1Builder()).build();
    else if (segment instanceof UB1Builder) this.msg.ub1 = segment.build();
    else this.msg.ub1 = segment;
    return this;
  }

  ub2(segment: HL7v2Segment | UB2Builder | ((builder: UB2Builder) => UB2Builder)): this {
    if (typeof segment === "function") this.msg.ub2 = segment(new UB2Builder()).build();
    else if (segment instanceof UB2Builder) this.msg.ub2 = segment.build();
    else this.msg.ub2 = segment;
    return this;
  }

  pda(segment: HL7v2Segment | PDABuilder | ((builder: PDABuilder) => PDABuilder)): this {
    if (typeof segment === "function") this.msg.pda = segment(new PDABuilder()).build();
    else if (segment instanceof PDABuilder) this.msg.pda = segment.build();
    else this.msg.pda = segment;
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
    if (this.msg.rol) for (const seg of this.msg.rol) segments.push(seg);
    if (this.msg.nk1) for (const seg of this.msg.nk1) segments.push(seg);
    if (this.msg.pv1) segments.push(this.msg.pv1);
    if (this.msg.pv2) segments.push(this.msg.pv2);
    if (this.msg.rol) for (const seg of this.msg.rol) segments.push(seg);
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
