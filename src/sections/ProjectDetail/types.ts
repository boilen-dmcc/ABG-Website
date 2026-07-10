export type ProjectSpec = {
  label: string;
  value: string;
};

export type ProcessPackage = {
  heading: string;
  items: string[];
  closing: string;
};

export type ProjectDetailData = {
  slug: string;
  heroEyebrow: string;
  heroTitle: string;
  heroBackgroundImage: string;
  specs: ProjectSpec[];
  processPackage: ProcessPackage;
  documentTitle: string;
};
