export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  value: string;
  description: string;
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
  indexEyebrow: string;
  indexHeading: string;
  indexIntro: string;
  contact: ProjectsContact;
  documentTitle: string;
};
