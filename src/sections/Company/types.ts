export type Stat = {
  value: string;
  label: string;
};

export type Capability = {
  index: string;
  title: string;
  description: string;
};

export type FacilitySpec = {
  label: string;
  value: string;
};

export type Certification = {
  code: string;
  name: string;
};

export type CompanyData = {
  slug: string;
  name: string;
  legalName: string;
  sector: string;
  eyebrow: string;
  taglinePrefix: string;
  taglineAccent: string;
  taglineSuffix: string;
  heroSubhead: string;
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  locationChip: string;
  foundedChip: string;
  headcountChip: string;
  heroImage: string;
  heroImageAlt: string;
  mandatePortrait: string;
  mandatePortraitAlt: string;
  mandatePortraitCaption: string;
  facilityCity: string;
  facilityHeading: string;
  facilityImage: string;
  facilityImageAlt: string;
  stats: Stat[];
  mandate: {
    heading: string;
    body: string[];
  };
  capabilitiesHeading: string;
  capabilitiesSubhead: string;
  capabilities: Capability[];
  facilitySpecs: FacilitySpec[];
  certifications: Certification[];
  hseStat: string;
  contact: {
    heading: string;
    body: string;
    email: string;
    phone: string;
    addressLines: string[];
  };
  documentTitle: string;
};
