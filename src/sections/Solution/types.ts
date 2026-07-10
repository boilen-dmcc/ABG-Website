export type GlanceMetric = {
  value: string;
  label: string;
};

export type ValueChainPanel = {
  stage: string;
  heading: string;
  description: string;
  touchpoints: string[];
};

export type DeliveryRow = {
  service: string;
  application: string;
};

export type GroupCompany = {
  name: string;
  role: string;
  logo: string;
  url: string;
};

export type Standard = {
  code: string;
  name: string;
};

export type ExecutionModelItem = {
  acronym: string;
  description: string;
};

export type ExecutionModelsContent = {
  image: string;
  imageAlt: string;
  models: ExecutionModelItem[];
  approachLabel: string;
  benefits: string[];
};

export type LifecyclePhase = {
  title: string;
  description: string;
};

export type TurnkeyLifecycleContent = {
  introParagraphs: string[];
  phases: LifecyclePhase[];
};

export type RefiningUnitsContent = {
  image: string;
  imageAlt: string;
  introParagraphs?: string[];
  units: string[];
};

export type SolutionData = {
  slug: string;
  name: string;
  heroTitle?: string;
  heroBackgroundImage: string;
  industryCategory: string;
  eyebrow: string;
  taglinePrefix: string;
  taglineAccent: string;
  taglineSuffix: string;
  heroSubhead: string;
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  demandChip: string;
  scaleChip: string;
  footprintChip: string;
  glance: {
    heading: string;
    intro: string;
    metrics: GlanceMetric[];
  };
  valueChain: {
    heading: string;
    intro: string;
    panels: ValueChainPanel[];
  };
  delivery: {
    heading: string;
    intro: string;
    rows: DeliveryRow[];
  };
  groupCompaniesHeading: string;
  groupCompaniesIntro: string;
  groupCompanies: GroupCompany[];
  standardsIntro: string;
  standards: Standard[];
  contact: {
    heading: string;
    body: string;
    email: string;
    phone: string;
    addressLines: string[];
  };
  documentTitle: string;
  executionModels?: ExecutionModelsContent;
  turnkeyLifecycle?: TurnkeyLifecycleContent;
  refiningUnits?: RefiningUnitsContent;
};
