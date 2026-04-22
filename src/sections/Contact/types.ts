export type Channel = {
  slug: string;
  label: string;
  name: string;
  description: string;
  email: string;
};

export type Office = {
  slug: string;
  label: string;
  city: string;
  country: string;
  addressLines: string[];
  phone: string;
  hours: string;
};

export type ResponseSpec = {
  label: string;
  value: string;
};

export type CrossLink = {
  label: string;
  to: string;
};

export type ContactData = {
  heroEyebrow: string;
  heroHeadingPrefix: string;
  heroHeadingAccent: string;
  heroHeadingSuffix: string;
  heroSubhead: string;
  primaryEmail: string;
  primaryPhone: string;
  channelsEyebrow: string;
  channelsHeading: string;
  channelsIntro: string;
  channels: Channel[];
  officesEyebrow: string;
  officesHeading: string;
  offices: Office[];
  responseEyebrow: string;
  responseHeading: string;
  responseBody: string;
  responseSpecs: ResponseSpec[];
  crossLinksHeading: string;
  crossLinks: CrossLink[];
  documentTitle: string;
};
