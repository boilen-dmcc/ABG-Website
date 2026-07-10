import type { ProjectDetailData } from "../types";

export const gasolineProductionComplex: ProjectDetailData = {
  slug: "gasoline-production-complex",
  heroEyebrow: "PROJECT · AL BARHAM GROUP",
  heroTitle: "Gasoline Production Complex",
  heroBackgroundImage:
    "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1920&q=80&fit=crop",
  specs: [
    { label: "Location", value: "Kirkuk, Iraq" },
    { label: "Project Owner", value: "ABG" },
    {
      label: "Project Type",
      value: "Self-financed downstream refining asset",
    },
    { label: "Capacity", value: "12,000 Barrels Per Day (BPD)" },
    { label: "Main Product", value: "EURO V compliant Motor Gasoline" },
    { label: "Licensor", value: "Honeywell UOP" },
    {
      label: "Quality Standard",
      value:
        "EURO V specifications (low sulphur, controlled aromatics, high octane)",
    },
  ],
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
  documentTitle: "Gasoline Production Complex — Al Barham Group",
};

export const projectDetailsBySlug: Record<string, ProjectDetailData> = {
  [gasolineProductionComplex.slug]: gasolineProductionComplex,
};

export function getProjectDetailBySlug(
  slug: string,
): ProjectDetailData | undefined {
  return projectDetailsBySlug[slug];
}
