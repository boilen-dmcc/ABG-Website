export type GroupOffice = {
  title: string;
  addressLines: string[];
  phones: string[];
};

export type GroupContact = {
  heading: string;
  body: string;
  email: string;
  offices: GroupOffice[];
};

export type ContactData = {
  heroEyebrow: string;
  heroTitle: string;
  heroBackgroundImage: string;
  groupContact: GroupContact;
  documentTitle: string;
};
