import type { Project, ProjectsPageData } from "../types";

export const projects: Project[] = [
  {
    slug: "basra-refinery-expansion",
    location: "Basra, Iraq",
    title: "Basra Refinery Expansion",
    category: "Oil & Gas",
    value: "$2.1B",
    description:
      "Expanding refining capacity by 140,000 bpd with state-of-the-art hydrocracking units.",
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=600&fit=crop",
  },
  {
    slug: "baghdad-power-station",
    location: "Baghdad, Iraq",
    title: "Baghdad Power Station",
    category: "Power Generation",
    value: "$1.8B",
    description:
      "Combined cycle gas turbine plant delivering 1,500 MW to the national grid.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
  },
  {
    slug: "karbala-petrochemical-complex",
    location: "Karbala, Iraq",
    title: "Karbala Petrochemical Complex",
    category: "Petrochemicals",
    value: "$3.5B",
    description:
      "Integrated facility producing polyethylene and polypropylene for domestic market.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
  },
  {
    slug: "kirkuk-pipeline-network",
    location: "Kirkuk, Iraq",
    title: "Kirkuk Pipeline Network",
    category: "Infrastructure",
    value: "$1.2B",
    description:
      "Modern pipeline infrastructure connecting northern oil fields to export terminals.",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=600&fit=crop",
  },
  {
    slug: "baghdad-solar-farm",
    location: "Baghdad, Iraq",
    title: "Baghdad Solar Farm",
    category: "Renewable Energy",
    value: "$900M",
    description:
      "Large-scale solar installation providing clean energy to the central Iraqi grid.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
  },
  {
    slug: "mosul-dam-rehabilitation",
    location: "Mosul, Iraq",
    title: "Mosul Dam Rehabilitation",
    category: "Infrastructure",
    value: "$1.5B",
    description:
      "Critical infrastructure project ensuring water security for millions of Iraqis.",
    image:
      "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=600&fit=crop",
  },
];

export const projectsPageData: ProjectsPageData = {
  heroEyebrow: "PORTFOLIO · 2008 — PRESENT",
  heroHeadingLine1: "The work, on the ground.",
  heroHeadingLine2: "Six projects in focus.",
  heroSubhead:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  heroSecondaryCta: "Browse the portfolio",
  heroMetaRows: [
    { label: "PROJECTS", value: "6" },
    { label: "COMBINED VALUE", value: "$11.0B" },
    { label: "SECTORS", value: "5" },
  ],
  indexEyebrow: "ALL PROJECTS",
  indexHeading: "Every build, in one list.",
  indexIntro:
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
