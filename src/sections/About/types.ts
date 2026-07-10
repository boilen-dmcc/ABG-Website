export type ManifestPrinciple = {
  number: string;
  statement: string;
};

export type TimelineMilestone = {
  year: string;
  title: string;
  description: string;
};

export type RosterCategory = {
  label: string;
  companyNames: string[];
};

export type AboutContact = {
  heading: string;
  body: string;
  email: string;
  phone: string;
  addressLines: string[];
};

export type ValuePropositionItem = {
  title: string;
  description: string;
};

export type VisionMissionItem = {
  title: string;
  description: string;
};

export type HistoryFact = {
  label: string;
  value: string;
};

export type AboutData = {
  slug: string;
  heroEyebrow: string;
  heroTitle: string;
  heroBackgroundImage: string;
  introHeading: string;
  introParagraphs: string[];
  introQuote: string;
  introImage: string;
  introImageAlt: string;
  visionMissionItems: VisionMissionItem[];
  valuePropositionHeading: string;
  valuePropositionItems: ValuePropositionItem[];
  historyHeading: string;
  historyParagraph: string;
  historyFacts: HistoryFact[];
  manifestEyebrow: string;
  manifestHeading: string;
  manifestPrinciples: ManifestPrinciple[];
  originEyebrow: string;
  originHeading: string;
  originParagraphs: string[];
  timelineEyebrow: string;
  timelineHeading: string;
  timelineMilestones: TimelineMilestone[];
  groupEyebrow: string;
  groupHeading: string;
  groupIntro: string;
  rosterCategories: RosterCategory[];
  reachEyebrow: string;
  reachHeading: string;
  reachChips: string[];
  contact: AboutContact;
  documentTitle: string;
};
