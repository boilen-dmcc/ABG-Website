export type Stat = {
  value: string;
  label: string;
};

export type OverviewPillar = {
  label: string;
  title: string;
  description: string;
};

export type Discipline = {
  index: string;
  title: string;
  description: string;
};

export type PracticeColumn = {
  label: string;
  heading: string;
  items: string[];
};

export type Standard = {
  code: string;
  name: string;
};

export type ServiceData = {
  slug: string;
  name: string;
  serviceIndex: string;
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
  stats: Stat[];
  overview: {
    heading: string;
    intro: string;
    pillars: OverviewPillar[];
  };
  disciplinesHeading: string;
  disciplinesSubhead: string;
  disciplines: Discipline[];
  practice: {
    heading: string;
    intro: string;
    columns: PracticeColumn[];
  };
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
