import type { ReactNode } from "react";
import type { ContactData } from "./types";

type Props = { data: ContactData };

const ContactHighlight = ({ children }: { children: ReactNode }) => (
  <span className="block w-fit bg-red-600 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white lg:text-xs">
    {children}
  </span>
);

export const GroupContact = ({ data }: Props) => {
  const { groupContact } = data;

  return (
    <section
      id="contact"
      className="home-section-y relative w-full border-t border-[#1a1a1a]/10 bg-white text-foreground"
    >
      <div className="home-container grid grid-cols-1 gap-8 xs:gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <h2 className="heading-section text-[#121e37] leading-[1.05]">
            {groupContact.heading}
          </h2>
          <p className="mt-5 max-w-[54ch] text-base leading-relaxed text-gray-700 xs:mt-6 lg:mt-8 lg:text-lg">
            {groupContact.body}
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:col-span-5 lg:border-l lg:border-[#1a1a1a]/10 lg:pl-12">
          <div>
            <div className="mb-3">
              <ContactHighlight>Email</ContactHighlight>
            </div>
            <a
              href={`mailto:${groupContact.email}`}
              className="break-all font-apfel_grotezk text-lg font-semibold tracking-tight text-[#121e37] transition-colors hover:text-red-600 xs:text-xl lg:text-2xl"
            >
              {groupContact.email}
            </a>
          </div>

          {groupContact.offices.map((office) => (
            <div key={office.title}>
              <div className="mb-3">
                <ContactHighlight>{office.title}</ContactHighlight>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 lg:text-base">
                {office.addressLines.map((line, index) => (
                  <span key={line}>
                    {line}
                    {index < office.addressLines.length - 1 && <br />}
                  </span>
                ))}
              </p>
              <div className="mt-3 space-y-2">
                {office.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/[\s()-]/g, "")}`}
                    className="block font-apfel_grotezk text-base font-semibold tracking-tight text-[#121e37] transition-colors hover:text-red-600 xs:text-lg lg:text-xl"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
