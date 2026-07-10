import { Link } from "react-router-dom";
import { SocialLinks } from "@/components/SocialLinks";
import { contact } from "@/sections/Contact/data/contact";
import type { ReactNode } from "react";

const menuLinks = [
  { label: "About Us", to: "/about" },
  { label: "Chairman's Message", to: "/chairmans-message" },
  { label: "Growth & Expansion", to: "/growth-expansion-strategy" },
  { label: "Projects", to: "/projects" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

const FooterNavLink = ({ to, children }: { to: string; children: ReactNode }) => (
  <Link
    to={to}
    className="group relative inline-flex max-w-full text-base text-white/75"
  >
    <span className="relative inline-block py-0.5 transition-transform duration-300 ease-out group-hover:translate-x-1">
      {children}
      <span
        aria-hidden
        className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-red-600 transition-transform duration-300 ease-out group-hover:scale-x-100"
      />
    </span>
  </Link>
);

const FooterContactLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => (
  <a href={href} className="group relative inline-flex max-w-full text-white/75">
    <span className="relative inline-block py-0.5 transition-transform duration-300 ease-out group-hover:translate-x-1">
      {children}
      <span
        aria-hidden
        className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-red-600 transition-transform duration-300 ease-out group-hover:scale-x-100"
      />
    </span>
  </a>
);

export const Page2Footer = () => {
  const { email, offices } = contact.groupContact;

  return (
    <footer className="bg-[#0b1a33] text-white">
      <div className="home-container pt-12 pb-8 sm:pt-14 md:pt-16 md:pb-10">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 md:gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block">
              <img
                src="https://c.animaapp.com/mkkxt1y8OC5kKc/img/uploaded-asset-1770304013454-0.png"
                alt="Al-Barham Group"
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-6 max-w-[20rem] text-base leading-relaxed text-white/65">
              <span className="block font-semibold text-white/85">
                Engineering. Integrity. Innovation.
              </span>
              Delivering world-class oil, gas, and industrial solutions across Iraq
              and the region.
            </p>
            <div className="mt-6">
              <div className="mb-3">
                <span className="block w-fit bg-red-600 px-1.5 py-0.5 text-sm font-semibold uppercase tracking-wide text-white">
                  Email
                </span>
              </div>
              <FooterContactLink href={`mailto:${email}`}>
                <span className="block text-base text-white/80">{email}</span>
              </FooterContactLink>
            </div>
            <SocialLinks variant="footer" className="mt-6" />
          </div>

          <div className="lg:col-span-3">
            <span className="mb-4 inline-block w-fit bg-red-600 px-1.5 py-0.5 text-sm font-semibold uppercase tracking-wide text-white">
              Menu
            </span>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <FooterNavLink to={link.to}>{link.label}</FooterNavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:col-span-2 lg:col-span-5">
            <span className="mb-5 inline-block w-fit bg-red-600 px-1.5 py-0.5 text-sm font-semibold uppercase tracking-wide text-white">
              Offices
            </span>

            <div className="w-full">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
                {offices.map((office) => (
                  <div key={office.title} className="w-full min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                      {office.title}
                    </p>
                    <p className="mt-2 block w-full text-base leading-relaxed text-white/75">
                      {office.addressLines.join(" ")}
                    </p>
                    <ul className="mt-2 w-full space-y-1.5">
                      {office.phones.map((phone) => (
                        <li key={phone} className="min-w-0">
                          <FooterContactLink
                            href={`tel:${phone.replace(/[\s()-]/g, "")}`}
                          >
                            <span className="block text-base text-white/80">
                              {phone}
                            </span>
                          </FooterContactLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="home-container flex flex-col items-center justify-between gap-3 py-5 sm:flex-row">
          <p className="text-xs text-white/45 sm:text-sm">
            © 2026 Al-Barham Group. All rights reserved.
          </p>
          <p className="font-necto_mono text-[10px] uppercase tracking-[0.18em] text-white/35">
            Built for Industrial Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};
