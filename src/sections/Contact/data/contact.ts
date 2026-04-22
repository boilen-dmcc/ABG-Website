import type { ContactData } from "../types";

export const contact: ContactData = {
  heroEyebrow: "CONTACT · AL BARHAM GROUP",
  heroHeadingPrefix: "We ",
  heroHeadingAccent: "answer",
  heroHeadingSuffix: ".",
  heroSubhead:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  primaryEmail: "info@albarhamgroup.iq",
  primaryPhone: "+964 750 000 0000",
  channelsEyebrow: "CHANNELS",
  channelsHeading: "Route your message to the right desk.",
  channelsIntro:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  channels: [
    {
      slug: "general",
      label: "GENERAL",
      name: "General",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      email: "info@albarhamgroup.iq",
    },
    {
      slug: "projects",
      label: "PROJECTS",
      name: "Projects",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      email: "projects@albarhamgroup.iq",
    },
    {
      slug: "careers",
      label: "CAREERS",
      name: "Careers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      email: "careers@albarhamgroup.iq",
    },
    {
      slug: "procurement",
      label: "PROCUREMENT",
      name: "Procurement",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      email: "procurement@albarhamgroup.iq",
    },
    {
      slug: "media",
      label: "MEDIA & PRESS",
      name: "Media & Press",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      email: "press@albarhamgroup.iq",
    },
  ],
  officesEyebrow: "OFFICES",
  officesHeading: "Where we work from.",
  offices: [
    {
      slug: "kirkuk-hq",
      label: "HEAD OFFICE",
      city: "Kirkuk",
      country: "Iraq",
      addressLines: [
        "Al Barham Group — Head Office",
        "Kirkuk Industrial District",
        "Kirkuk, Iraq",
      ],
      phone: "+964 750 000 0000",
      hours: "Sun–Thu · 08:00 — 17:00 AST",
    },
    {
      slug: "erbil",
      label: "REGIONAL OFFICE",
      city: "Erbil",
      country: "Iraq",
      addressLines: [
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Erbil, Iraq",
      ],
      phone: "+964 750 000 0001",
      hours: "Sun–Thu · 08:00 — 17:00 AST",
    },
    {
      slug: "dmcc-dubai",
      label: "DMCC OFFICE",
      city: "Dubai",
      country: "UAE",
      addressLines: [
        "Al Barham DMCC",
        "Lorem ipsum dolor sit amet",
        "Dubai, United Arab Emirates",
      ],
      phone: "+971 4 000 0000",
      hours: "Mon–Fri · 09:00 — 18:00 GST",
    },
  ],
  responseEyebrow: "HOW WE RESPOND",
  responseHeading: "We reply in one business day.",
  responseBody:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud.",
  responseSpecs: [
    { label: "STANDARD", value: "Within one business day" },
    {
      label: "URGENT",
      value: "Reply within 4 hours, call the Head Office",
    },
    {
      label: "AFTER HOURS",
      value: "Email only — we reply next business day",
    },
  ],
  crossLinksHeading: "Continue looking around.",
  crossLinks: [
    { label: "RETURN TO AL BARHAM GROUP", to: "/" },
    { label: "ALL GROUP COMPANIES", to: "/companies" },
    { label: "SEE OPEN ROLES", to: "/careers" },
    { label: "BROWSE PROJECTS", to: "/projects" },
  ],
  documentTitle: "Contact — Al Barham Group",
};
