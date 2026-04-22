export type RoleType = "Full-time" | "Contract" | "Internship";

export type Role = {
  slug: string;
  title: string;
  team: string;
  location: string;
  type: RoleType;
  summary: string;
  responsibilities: string[];
  requirements: string[];
};

export type Team = {
  label: string;
  name: string;
  description: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type CareersContact = {
  heading: string;
  body: string;
  email: string;
  phone: string;
  addressLines: string[];
};

export type WhyPrinciple = {
  number: string;
  statement: string;
  caption: string;
};

export type CareersData = {
  heroEyebrow: string;
  heroHeadingLine1: string;
  heroHeadingLine2Prefix: string;
  heroHeadingLine2Accent: string;
  heroHeadingLine2Suffix: string;
  heroSubhead: string;
  heroPrimaryCta: string;
  whyEyebrow: string;
  whyHeading: string;
  whyPrinciples: WhyPrinciple[];
  teamsEyebrow: string;
  teamsHeading: string;
  teamsIntro: string;
  teams: Team[];
  rolesEyebrow: string;
  rolesHeading: string;
  rolesIntro: string;
  roles: Role[];
  processEyebrow: string;
  processHeading: string;
  processSteps: ProcessStep[];
  contact: CareersContact;
  documentTitle: string;
};
