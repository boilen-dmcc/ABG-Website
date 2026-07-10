import type { ContactData } from "../types";

export const contact: ContactData = {
  heroEyebrow: "GET IN TOUCH · AL BARHAM GROUP",
  heroTitle: "Contact Us",
  heroBackgroundImage: "/chairman-msg-heor.webp",
  groupContact: {
    heading: "Get in touch with Al Barham Group.",
    body: "Reach our Head Office in Kirkuk or our UAE office in Dubai. We welcome enquiries on projects, partnerships, and general group matters.",
    email: "info@albarhamgroup.com",
    offices: [
      {
        title: "HEAD OFFICE",
        addressLines: [
          "Tisin Plot 39m285/10,",
          "Baghdad Road,",
          "Kirkuk, Iraq.",
        ],
        phones: ["+964 770 159 9397", "+964 777 150 0090"],
      },
      {
        title: "UAE OFFICE",
        addressLines: [
          "Office 2703, JBC2 Tower,",
          "Cluster V, Jumeirah Lake Towers (JLT),",
          "Shk. Zayed Road, Dubai, UAE.",
        ],
        phones: ["+971 6 715 8280", "+971 4 572 8952", "+971 4 557 0078"],
      },
    ],
  },
  documentTitle: "Contact — Al Barham Group",
};
