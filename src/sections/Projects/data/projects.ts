import type { Project, ProjectsPageData } from "../types";

export type ProjectNavItem = {
  slug: string;
  name: string;
  menuName?: string;
  statusLabel?: string;
  description: string;
  category: string;
  color: string;
  logo?: string;
  url?: string;
};

const projectMenuNames: Partial<Record<string, string>> = {
  "gasoline-production-complex": "12,000 BPD GASOLINE PRODUCTION COMPLEX",
  "petroleum-solvent-production-plant":
    "600 M³/DAY PETROLEUM SOLVENT REFINERY PROJECT",
  "al-barham-depot": "30,000 M³ AL-BARHAM DEPOT",
  "diwaniya-refinery-expansion": "70,000 BPD DIWANYA REFINERY EXPANSION PROJECT",
};

export const projects: Project[] = [
  {
    slug: "gasoline-production-complex",
    title: "GASOLINE PRODUCTION COMPLEX",
    category: "Refining & Production",
    location: "Kirkuk, Iraq",
    year: "Operational",
    description:
      "12,000 BPD EURO V gasoline complex — self-financed downstream refining asset in Kirkuk, Iraq.",
    overview: "",
    highlights: [
      { label: "LOCATION", value: "Kirkuk, Iraq" },
      { label: "PROJECT OWNER", value: "ABG" },
      {
        label: "PROJECT TYPE",
        value: "Self-financed downstream refining asset",
      },
      { label: "CAPACITY", value: "12,000 Barrels Per Day (BPD)" },
      { label: "MAIN PRODUCT", value: "EURO V compliant Motor Gasoline" },
      { label: "LICENSOR", value: "Honeywell UOP" },
      {
        label: "QUALITY STANDARD",
        value:
          "EURO V specifications (low sulphur, controlled aromatics, high octane)",
      },
    ],
    image: "/projects/01/about.webp",
    heroImage: "/projects/01/hero.webp",
    color: "#DC2626",
    processPackage: {
      heading: "Main Process Package:",
      items: [
        "Naphtha Hydrotreater (NHT) — Feed desulphurisation",
        "Isomerization Unit — Light naphtha upgrading for high-octane isomerate",
        "Fixed Bed Platforming Unit — Heavy naphtha catalytic reforming for high-octane reformate",
      ],
      closing:
        "By acting as developer, owner, and EPCC contractor, ABG carried single-point responsibility from concept through to operation, reinforcing its position as an integrated developer-contractor in Iraq's refining and clean-fuels sector.",
    },
  },
  {
    slug: "petroleum-solvent-production-plant",
    title: "PETROLEUM SOLVENT PRODUCTION PLANT",
    category: "Petrochemicals",
    location: "Iraq",
    year: "Operational",
    description:
      "Hydrocarbon processing system producing light solvent and special spirit grades at 600 m³/day.",
    overview:
      "The Petroleum Solvent Production Plant is an EPCC-delivered hydrocarbon processing facility owned by ABG. Designed for petroleum solvent production, the plant manufactures light solvent and special spirit grades for industrial applications at a capacity of 600 m³/day — supporting petrochemical supply chains and downstream manufacturing across the region.",
    highlights: [
      { label: "PROJECT OWNER", value: "ABG" },
      {
        label: "PROJECT SCOPE",
        value: "Hydrocarbon Processing system for petroleum solvent production",
      },
      { label: "CAPACITY", value: "600 m³/day" },
      {
        label: "PROJECT TYPE",
        value: "EPCC (Engineering, Procurement, Construction & Commissioning)",
      },
      {
        label: "MAIN PRODUCT",
        value:
          "Light Solvent and Special Spirit Grades (for industrial applications)",
      },
    ],
    image: "/projects/02/about.webp",
    heroImage: "/projects/02/hero.webp",
    color: "#EA580C",
  },
  {
    slug: "oxidized-asphalt-production",
    title: "OXIDIZED ASPHALT PRODUCTION",
    category: "Asphalt & Materials",
    location: "Iraq",
    year: "2010",
    description:
      "Oxidized asphalt production facility established in 2010, approved by Iraq's Ministry of Industry and Minerals.",
    overview:
      "Established in 2010, the Oxidized Asphalt Production facility manufactures oxidized asphalt under approval from the Directorate of Industrial Development, Ministry of Industry and Minerals. The plant integrates asphalt oxidation with light and heavy gasoline processing to deliver high-quality bitumen for infrastructure and industrial applications across Iraq.",
    highlights: [
      { label: "ESTABLISHMENT YEAR", value: "2010" },
      { label: "PROJECT", value: "Production of oxidized asphalt" },
      {
        label: "APPROVAL AUTHORITY",
        value:
          "Directorate of industrial development Ministry of Industry and Minerals",
      },
    ],
    image: "/projects/03/about.webp",
    heroImage: "/projects/03/hero.webp",
    color: "#D97706",
    processPackage: {
      heading: "Main Process Package:",
      items: [
        "Asphalt Oxidation",
        "Light Gasoline Processing",
        "Heavy Gasoline Processing",
      ],
    },
  },
  {
    slug: "al-barham-depot",
    title: "AL-BARHAM DEPOT",
    category: "Logistics & Storage",
    location: "Iraq",
    year: "Operational",
    description:
      "30,000 m³ petroleum products storage and distribution depot with integrated fuel filling station.",
    overview:
      "Al-Barham Depot is a storage and distribution facility for petroleum products. The depot provides strategic capacity for petroleum product handling and distribution, with a modern fuel filling station integrated within the facility.",
    highlights: [
      {
        label: "PROJECT",
        value: "Storage and Distribution Depot for Petroleum Products",
      },
      { label: "CAPACITY", value: "Total: 30,000 cubic meters" },
      { label: "CAPACITY PER TANK", value: "5,000 cubic meters" },
      { label: "CONFIGURATION", value: "6 storage tanks" },
      {
        label: "ADDITIONAL FACILITY",
        value: "Modern fuel filling station integrated within the depot",
      },
    ],
    image: "/projects/04/about.webp",
    heroImage: "/projects/04/hero.webp",
    color: "#0891B2",
  },
  {
    slug: "diwaniya-refinery-expansion",
    title: "DIWANIYA REFINERY EXPANSION PROJECT",
    category: "Oil & Gas Refining",
    location: "Diwaniya, Iraq",
    year: "Ongoing",
    description:
      "70,000 BPD CDU plus 18,000 BPD EURO V gasoline complex — EPCC delivery for Midland Refineries.",
    overview:
      "Al Barham Group has been selected as the main EPCC contractor for the Diwaniya Refinery Expansion Project. The project converts crude oil into LPG, kerosene, LGO, HGO, atmospheric residue, and EURO V-compliant clean motor gasoline, producing high-quality, low-sulphur products that meet international standards.",
    highlights: [
      {
        label: "PROJECT OWNER",
        value: "Midland Refineries Companies (MRC) / Ministry of Oil (MOO), Iraq",
      },
      {
        label: "LICENSOR",
        value: "Honeywell UOP",
      },
      {
        label: "CAPACITY",
        value: "70,000 BPD CDU + 18,000 BPD Gasoline Complex",
      },
      {
        label: "PROJECT TYPE",
        value: "EPCC (Engineering, Procurement, Construction & Commissioning)",
      },
      {
        label: "MAIN PRODUCT",
        value: "EURO V compliant clean motor gasoline",
      },
      {
        label: "OBJECTIVE",
        value:
          "Conversion of CRUDE OIL into LPG, Kerosene, LGO, HGO, Atmospheric Residue, and Gasoline, producing high-quality, low-sulphur products that meet international standards.",
      },
    ],
    image: "/projects/05/about.webp",
    heroImage: "/projects/05/hero.webp",
    color: "#0284C7",
    statusBadge: "Ongoing",
    processPackage: {
      heading: "Project Scope:",
      items: [
        "Phase 1: Crude Distillation Unit (CDU), LPG Complex, Utilities, Offsites & Gantry Systems",
        "Phase 2: Naphtha Hydrotreater (NHT), Isomerization Unit, and Fixed Bed Platforming (FBP) Unit under license from Honeywell UOP.",
      ],
    },
  },
];

const projectNavOrder = [
  "gasoline-production-complex",
  "diwaniya-refinery-expansion",
  "petroleum-solvent-production-plant",
  "oxidized-asphalt-production",
  "al-barham-depot",
];

export const projectNavItems: ProjectNavItem[] = projectNavOrder
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is Project => project != null)
  .map((project) => ({
    slug: project.slug,
    name: project.title,
    menuName: projectMenuNames[project.slug],
    statusLabel: project.statusBadge,
    description: project.description,
    category: project.category,
    color: project.color ?? "#DC2626",
    logo: project.image,
    url: `/projects/${project.slug}`,
  }));

export const projectsPageData: ProjectsPageData = {
  heroEyebrow: "PROJECTS · AL BARHAM GROUP",
  heroTitle: "Projects",
  heroBackgroundImage:
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80&fit=crop",
  documentTitle: "Projects — Al Barham Group",
};
