export type ProjectHighlight = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  value: string;
  year: string;
  description: string;
  overview: string;
  highlights: ProjectHighlight[];
  image: string;
};

export type ProjectsContact = {
  heading: string;
  body: string;
  email: string;
  phone: string;
  addressLines: string[];
};

export type ProjectsPageData = {
  heroEyebrow: string;
  heroHeadingLine1: string;
  heroHeadingLine2: string;
  heroSubhead: string;
  heroSecondaryCta: string;
  heroMetaRows: { label: string; value: string }[];
  spreadsEyebrow: string;
  spreadsHeading: string;
  spreadsIntro: string;
  contact: ProjectsContact;
  documentTitle: string;
};
