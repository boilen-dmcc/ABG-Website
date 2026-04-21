export type Tile = {
  value: string;
  label: string;
};

export type Sector = {
  index: string;
  name: string;
  line: string;
  companies: string[];
};

export type CompanyEntry = {
  name: string;
  sector: string;
  line: string;
  href: string | null;
  image: string;
  imageAlt: string;
};

export type Country = {
  name: string;
  role: string;
  hub: string;
};

export type Milestone = {
  year: string;
  title: string;
  body: string;
};

export type Leader = {
  name: string;
  title: string;
  quote: string;
};

export type Principle = {
  index: string;
  body: string;
};

export const group = {
  name: "Al Barham Group",
  legalName: "Al Barham Group Holding Ltd.",
  founded: "2008",
  hq: "Kirkuk, Kurdistan Region, Iraq",
  eyebrow: "AL BARHAM GROUP · IRAQ",
  taglinePrefix: "Lorem ipsum dolor ",
  taglineAccent: "sit",
  taglineSuffix: " amet.",
  heroSubhead:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  heroImage:
    "https://images.unsplash.com/photo-1678532685208-54acdd41187d?w=2400&auto=format&q=80",
  heroImageAlt:
    "A refining complex at sunset with the mountains of northern Iraq rising behind the distillation columns",
  chips: [
    "EST. 2008",
    "8 COMPANIES",
    "IRAQ · UAE · TURKEY · GERMANY",
  ],
} as const;

export const tiles: Tile[] = [
  { value: "Lorem", label: "STRUCTURE" },
  { value: "Ipsum", label: "PORTFOLIO" },
  { value: "Dolor", label: "OPERATIONAL REACH" },
  { value: "Sit amet", label: "INVESTMENT HORIZON" },
];

export const story = {
  eyebrow: "THE GROUP",
  heading: "Lorem ipsum dolor sit amet consectetur.",
  body: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
  ],
  image:
    "https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=1600&auto=format&q=80",
  imageAlt:
    "Aerial black-and-white view of an industrial refinery complex, stacks and pipe racks rendered as a graphic weave",
  caption:
    "LOREM IPSUM — DOLOR SIT AMET, CONSECTETUR.",
};

export const sectors: Sector[] = [
  {
    index: "01",
    name: "Lorem ipsum dolor",
    line: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    companies: ["Taqat Kirkuk", "Northern Covenant", "Bryar Transport"],
  },
  {
    index: "02",
    name: "Sit amet consectetur adipiscing",
    line: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    companies: ["Barham Black Gold", "Rahand Company", "Binaa Al Sahraa"],
  },
  {
    index: "03",
    name: "Elit sed do eiusmod",
    line: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    companies: ["Gashbin GmbH", "Al Barham DMCC"],
  },
];

export const companies: CompanyEntry[] = [
  {
    name: "Taqat Kirkuk",
    sector: "LOREM IPSUM",
    line: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "/companies/taqat",
    image:
      "https://images.unsplash.com/photo-1587637970934-a09453665678?w=1400&auto=format&q=80",
    imageAlt:
      "Daytime panorama of the Taqat Kirkuk refinery — pipe racks and distillation columns under a clear sky",
  },
  {
    name: "Northern Covenant",
    sector: "LOREM IPSUM",
    line: "Sed do eiusmod tempor incididunt ut labore et dolore magna.",
    href: "/companies/northern-covenant",
    image:
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=1400&auto=format&q=80",
    imageAlt:
      "Black-and-white aerial of a refinery complex, a graphic weave of pipe racks and stacks",
  },
  {
    name: "Bryar Transport",
    sector: "LOREM IPSUM",
    line: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    href: "/companies/bryar-transport",
    image:
      "https://images.unsplash.com/photo-1708296964763-2112b796177f?w=1400&auto=format&q=80",
    imageAlt:
      "A yellow petroleum tanker truck parked on a bright service yard, ready for dispatch",
  },
  {
    name: "Barham Black Gold",
    sector: "DOLOR SIT AMET",
    line: "Duis aute irure dolor in reprehenderit in voluptate velit.",
    href: "/companies/barham-black-gold",
    image:
      "https://images.unsplash.com/photo-1518704618243-b719e5d5f2b8?w=1400&auto=format&q=80",
    imageAlt:
      "Refinery chimneys at dusk under a low cloud ceiling, stacks dark against the sky",
  },
  {
    name: "Rahand Company",
    sector: "DOLOR SIT AMET",
    line: "Excepteur sint occaecat cupidatat non proident sunt in culpa.",
    href: "/companies/rahand",
    image:
      "https://images.unsplash.com/photo-1575891528081-44d2442b7e38?w=1400&auto=format&q=80",
    imageAlt:
      "A concrete building facade at dusk, windows set into a raw concrete block wall",
  },
  {
    name: "Binaa Al Sahraa",
    sector: "DOLOR SIT AMET",
    line: "Officia deserunt mollit anim id est laborum sed perspiciatis.",
    href: "/companies/binaa-al-sahraa",
    image:
      "https://images.unsplash.com/photo-1645091086071-f427999fc321?w=1400&auto=format&q=80",
    imageAlt:
      "High-rise towers under construction, cranes silhouetted against a morning sky",
  },
  {
    name: "Gashbin GmbH",
    sector: "CONSECTETUR ADIPISCING",
    line: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
    href: "/companies/gashbin",
    image:
      "https://images.unsplash.com/photo-1678182451047-196f22a4143e?w=1400&auto=format&q=80",
    imageAlt:
      "Hamburg port at golden hour — container stacks, gantry cranes, and intermodal yards",
  },
  {
    name: "Al Barham DMCC",
    sector: "CONSECTETUR ADIPISCING",
    line: "Quasi architecto beatae vitae dicta sunt explicabo nemo enim.",
    href: "/companies/al-barham-dmcc",
    image:
      "https://images.unsplash.com/photo-1633432121690-d9bbcaca0ec6?w=1400&auto=format&q=80",
    imageAlt:
      "Dubai skyline with the Burj Khalifa rising above adjacent towers at golden hour",
  },
];

export const footprint = {
  eyebrow: "PRESENCE",
  heading: "Lorem ipsum dolor sit.",
  image:
    "https://images.unsplash.com/photo-1527615020922-3c670eed3407?w=2400&auto=format&q=80",
  imageAlt:
    "A stone village set into a mountainside, the valley floor stretching below at midday",
};

export const countries: Country[] = [
  {
    name: "Iraq",
    role: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    hub: "KIRKUK · BAGHDAD",
  },
  {
    name: "United Arab Emirates",
    role: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    hub: "DUBAI · DMCC",
  },
  {
    name: "Turkey",
    role: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    hub: "GAZIANTEP · HABUR GATE",
  },
  {
    name: "Germany",
    role: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
    hub: "HAMBURG",
  },
];

export const milestones: Milestone[] = [
  {
    year: "2008",
    title: "Lorem ipsum",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    year: "2011",
    title: "Dolor sit amet",
    body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.",
  },
  {
    year: "2013",
    title: "Consectetur adipiscing",
    body: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    year: "2016",
    title: "Sed do eiusmod",
    body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    year: "2019",
    title: "Tempor incididunt",
    body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.",
  },
  {
    year: "2022",
    title: "Quis nostrud",
    body: "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    year: "2025",
    title: "Aliquip ex ea",
    body: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
  },
];

export const leaders: Leader[] = [
  {
    name: "Lorem Ipsum",
    title: "Chairman",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
    name: "Dolor Sit Amet",
    title: "Chief Executive Officer",
    quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    name: "Consectetur Adipiscing",
    title: "Group Chief Operating Officer",
    quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
  },
];

export const principles: Principle[] = [
  { index: "01", body: "Lorem ipsum dolor sit amet consectetur." },
  { index: "02", body: "Adipiscing elit sed do eiusmod tempor." },
  { index: "03", body: "Incididunt ut labore et dolore magna aliqua." },
  { index: "04", body: "Ut enim ad minim veniam quis nostrud." },
  { index: "05", body: "Exercitation ullamco laboris nisi ut aliquip." },
];

export const contact = {
  eyebrow: "CONTACT",
  heading: "Lorem ipsum dolor.",
  body:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  email: "group@albarhamgroup.iq",
  phone: "+964 750 000 0000",
  address: [
    "Al Barham Group Holding",
    "Lorem Ipsum 2, Villa 451",
    "Kirkuk 36001, Kirkuk Governorate, Iraq",
  ],
};
