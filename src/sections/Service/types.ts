export type Stat = {
  value: string;
  label: string;
};

export type Discipline = {
  index: string;
  title: string;
  description: string;
};

export type MethodologySpec = {
  label: string;
  value: string;
};

export type Standard = {
  code: string;
  name: string;
};

export type ServiceData = {
  slug: string;
  name: string;
  serviceCategory: string;
  eyebrow: string;
  taglinePrefix: string;
  taglineAccent: string;
  taglineSuffix: string;
  heroSubhead: string;
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  scopeChip: string;
  stageChip: string;
  reachChip: string;
  heroImage: string;
  heroImageAlt: string;
  overviewPortrait: string;
  overviewPortraitAlt: string;
  overviewPortraitCaption: string;
  methodologyImage: string;
  methodologyImageAlt: string;
  methodologyHeading: string;
  stats: Stat[];
  overview: {
    heading: string;
    body: string[];
  };
  disciplinesHeading: string;
  disciplinesSubhead: string;
  disciplines: Discipline[];
  methodologySpecs: MethodologySpec[];
  standards: Standard[];
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
