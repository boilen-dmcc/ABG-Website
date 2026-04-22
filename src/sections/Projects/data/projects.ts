import type { Project, ProjectsPageData } from "../types";

export const projects: Project[] = [
  {
    slug: "basra-refinery-expansion",
    location: "Basra, Iraq",
    title: "Basra Refinery Expansion",
    category: "Oil & Gas",
    value: "$2.1B",
    year: "2022",
    description:
      "Expanding refining capacity by 140,000 bpd with state-of-the-art hydrocracking units.",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    highlights: [
      { label: "SCOPE", value: "Lorem ipsum consectetur adipiscing" },
      { label: "TIMELINE", value: "Lorem 2020 — 2023" },
      { label: "ROLE", value: "Lorem ipsum dolor sit amet" },
    ],
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1400&h=1050&fit=crop",
  },
  {
    slug: "baghdad-power-station",
    location: "Baghdad, Iraq",
    title: "Baghdad Power Station",
    category: "Power Generation",
    value: "$1.8B",
    year: "2021",
    description:
      "Combined cycle gas turbine plant delivering 1,500 MW to the national grid.",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    highlights: [
      { label: "SCOPE", value: "Lorem ipsum adipiscing elit" },
      { label: "TIMELINE", value: "Lorem 2019 — 2022" },
      { label: "ROLE", value: "Lorem consectetur adipiscing" },
    ],
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1400&h=1050&fit=crop",
  },
  {
    slug: "karbala-petrochemical-complex",
    location: "Karbala, Iraq",
    title: "Karbala Petrochemical Complex",
    category: "Petrochemicals",
    value: "$3.5B",
    year: "2023",
    description:
      "Integrated facility producing polyethylene and polypropylene for domestic market.",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    highlights: [
      { label: "SCOPE", value: "Lorem ipsum tempor incididunt" },
      { label: "TIMELINE", value: "Lorem 2021 — 2024" },
      { label: "ROLE", value: "Lorem ipsum sed do eiusmod" },
    ],
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1400&h=1050&fit=crop",
  },
  {
    slug: "kirkuk-pipeline-network",
    location: "Kirkuk, Iraq",
    title: "Kirkuk Pipeline Network",
    category: "Infrastructure",
    value: "$1.2B",
    year: "2020",
    description:
      "Modern pipeline infrastructure connecting northern oil fields to export terminals.",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    highlights: [
      { label: "SCOPE", value: "Lorem consectetur ullamco laboris" },
      { label: "TIMELINE", value: "Lorem 2018 — 2020" },
      { label: "ROLE", value: "Lorem ipsum ut aliquip" },
    ],
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1400&h=1050&fit=crop",
  },
  {
    slug: "baghdad-solar-farm",
    location: "Baghdad, Iraq",
    title: "Baghdad Solar Farm",
    category: "Renewable Energy",
    value: "$900M",
    year: "2024",
    description:
      "Large-scale solar installation providing clean energy to the central Iraqi grid.",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    highlights: [
      { label: "SCOPE", value: "Lorem ipsum perspiciatis unde" },
      { label: "TIMELINE", value: "Lorem 2022 — 2024" },
      { label: "ROLE", value: "Lorem ipsum dolor laudantium" },
    ],
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1400&h=1050&fit=crop",
  },
  {
    slug: "mosul-dam-rehabilitation",
    location: "Mosul, Iraq",
    title: "Mosul Dam Rehabilitation",
    category: "Infrastructure",
    value: "$1.5B",
    year: "2019",
    description:
      "Critical infrastructure project ensuring water security for millions of Iraqis.",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    highlights: [
      { label: "SCOPE", value: "Lorem ipsum aspernatur fugit" },
      { label: "TIMELINE", value: "Lorem 2017 — 2019" },
      { label: "ROLE", value: "Lorem ipsum voluptas quia" },
    ],
    image:
      "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1400&h=1050&fit=crop",
  },
];

export const projectsPageData: ProjectsPageData = {
  heroEyebrow: "PORTFOLIO · 2008 — PRESENT",
  heroHeadingLine1: "The work, on the ground.",
  heroHeadingLine2: "Six projects, in detail.",
  heroSubhead:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  heroSecondaryCta: "Browse the portfolio",
  heroMetaRows: [
    { label: "PROJECTS", value: "6" },
    { label: "SECTORS", value: "5" },
  ],
  spreadsEyebrow: "THE PORTFOLIO",
  spreadsHeading: "Every build, up close.",
  spreadsIntro:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.",
  contact: {
    heading: "Start a project with Al Barham Group.",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.",
    email: "projects@albarhamgroup.iq",
    phone: "+964 750 000 0000",
    addressLines: [
      "Al Barham Group — Head Office",
      "Kirkuk Industrial District",
      "Kirkuk, Iraq",
    ],
  },
  documentTitle: "Projects — Al Barham Group",
};
