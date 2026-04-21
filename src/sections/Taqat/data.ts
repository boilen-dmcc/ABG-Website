export type Stat = {
  value: string;
  label: string;
};

export type Capability = {
  index: string;
  title: string;
  description: string;
};

export type FacilitySpec = {
  label: string;
  value: string;
};

export type Certification = {
  code: string;
  name: string;
};

export const taqat = {
  name: "Taqat Kirkuk",
  legalName: "Taqat Kirkuk for Petroleum Products Ltd.",
  sector: "Energy & Downstream — Refining",
  eyebrow: "TAQAT KIRKUK · ENERGY & DOWNSTREAM",
  tagline: "Refining the north.",
  taglineAccent: "north",
  heroSubhead:
    "A 42,000-barrel-per-day gasoline refinery on the Kirkuk plain. Built to specification, operated without pause, and supplying the fuel that moves northern Iraq.",
  locationChip: "KIRKUK, IRAQ",
  foundedChip: "EST. 2011",
  headcountChip: "420 EMPLOYEES",
  heroVideo:
    "https://cdn.jsdelivr.net/gh/SaintFredMax/abg-assets@main/ABG%20Website%20Landing%20Video.mp4",
  heroImage:
    "https://images.unsplash.com/photo-1602056820935-316884c035f8?w=1920&auto=format&q=80",
  heroImageAlt:
    "Taqat Kirkuk refinery complex at dusk, distillation columns and stacks silhouetted against a late-evening sky",
  mandatePortrait:
    "https://images.unsplash.com/photo-1528953030358-b0c7de371f1f?w=1200&auto=format&q=80",
  mandatePortraitAlt:
    "Senior plant operator in blue coveralls at work on the refinery floor",
  mandatePortraitCaption:
    "Kirkuk plant, Unit 2 manifold — photograph by the Taqat operations team, 2025.",
  facilityImage:
    "https://images.unsplash.com/photo-1693847173071-bd6237101335?w=2200&auto=format&q=80",
  facilityImageAlt:
    "Row of floating-roof storage tanks at the Taqat Kirkuk refinery photographed at sunset",
} as const;

export const stats: Stat[] = [
  { value: "2011", label: "OPERATIONAL SINCE" },
  { value: "Kirkuk", label: "FACILITY BASE" },
  { value: "Refining", label: "CORE ACTIVITY" },
  { value: "Downstream", label: "VALUE CHAIN POSITION" },
  { value: "Iraq", label: "PRIMARY MARKET" },
];

export const mandate = {
  eyebrow: "MANDATE",
  heading: "Fuel, made in Kirkuk. Built to standard.",
  body: [
    "Taqat Kirkuk processes crude drawn from the Kirkuk basin into road-ready gasoline, naphtha, LPG, and fuel oil. The plant runs a conventional atmospheric distillation train followed by naphtha reforming and on-site blending — an engineering choice made for yield stability, not for show.",
    "Kirkuk sits inside the consumption corridor it supplies. Fuel leaves the gate on a dedicated tanker fleet and a rail spur to the Baiji line. Lead times to distribution terminals across Baghdad, Sulaymaniyah, and Mosul are measured in hours, not days.",
    "Inside Al Barham Group, Taqat is the downstream anchor. Northern Covenant services the upstream side; Bryar Transport runs the logistics; Taqat converts the barrel into product that customers can pay for on-spec the first time.",
  ],
};

export const capabilities: Capability[] = [
  {
    index: "01",
    title: "Atmospheric distillation",
    description:
      "Two-train crude column rated at 42,000 BPD combined, online since 2011 and rebuilt to API 650 during the 2015 expansion.",
  },
  {
    index: "02",
    title: "Naphtha reforming",
    description:
      "Catalytic reformer producing the octane pool for premium and regular gasoline grades, tied to the downstream blending system.",
  },
  {
    index: "03",
    title: "Gasoline blending",
    description:
      "Inline blending with continuous on-spec monitoring, certifying every batch against Iraqi and regional fuel specifications.",
  },
  {
    index: "04",
    title: "Storage & terminaling",
    description:
      "Twelve floating-roof tanks, 480,000-barrel nameplate storage, truck and rail offtake on a single-pass loading gantry.",
  },
  {
    index: "05",
    title: "Quality assurance",
    description:
      "On-site ISO 17025–aligned laboratory running RVP, distillation, octane, sulfur, and LPG composition on every shift.",
  },
  {
    index: "06",
    title: "Environmental compliance",
    description:
      "Closed-vent flare recovery, continuous emissions monitoring, and water reuse loop commissioned during the 2021 upgrade.",
  },
];

export const facilitySpecs: FacilitySpec[] = [
  { label: "THROUGHPUT", value: "42,000 BPD (crude feed)" },
  { label: "PROCESS UNITS", value: "CDU · Naphtha Reformer · Blending · Storage" },
  { label: "PRODUCT SLATE", value: "Regular · Premium · Naphtha · LPG · Fuel Oil" },
  { label: "DISTRIBUTION RADIUS", value: "Baghdad · Sulaymaniyah · Mosul · Baiji" },
  { label: "RAIL / ROAD", value: "Dedicated tanker fleet · Baiji rail spur" },
  { label: "POWER DRAW", value: "38 MW, dual-fed with on-site cogeneration" },
];

export const certifications: Certification[] = [
  { code: "ISO 9001:2015", name: "Quality management" },
  { code: "ISO 14001:2015", name: "Environmental management" },
  { code: "ISO 45001:2018", name: "Occupational health & safety" },
  { code: "API 650", name: "Welded tanks for oil storage" },
];

export const hseStat =
  "Every shift opens with a documented HSE walk; every batch closes with a certified lab report. Safety is a gate condition, not a campaign.";

export const contactCta = {
  eyebrow: "CONTACT",
  heading: "Partner with Taqat.",
  body:
    "Offtake enquiries, distribution partnerships, and HSE audit requests are handled by the Kirkuk commercial office. We reply within two business days.",
  email: "commercial@taqat-kirkuk.iq",
  phone: "+964 770 000 0000",
};
