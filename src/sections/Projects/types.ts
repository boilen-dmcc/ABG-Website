export type ProjectHighlight = {
  label: string;
  value: string;
};

export type ProjectProcessPackage = {
  heading: string;
  items: string[];
  closing?: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  overview: string;
  highlights: ProjectHighlight[];
  image: string;
  heroImage?: string;
  color?: string;
  processPackage?: ProjectProcessPackage;
  statusBadge?: string;
};

export type ProjectsPageData = {
  heroEyebrow: string;
  heroTitle: string;
  heroBackgroundImage: string;
  documentTitle: string;
};
