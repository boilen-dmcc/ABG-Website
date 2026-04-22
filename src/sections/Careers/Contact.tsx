import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { CareersData } from "./types";

type Props = { data: CareersData };

export const Contact = ({ data }: Props) => {
  const { contact } = data;
  return (
    <section
      id="contact"
      className="relative w-full bg-white text-[#1a1a1a] py-20 sm:py-28 lg:py-36 border-t border-[#1a1a1a]/10"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-6">
            CONTACT · CAREERS TEAM
          </p>
          <h2 className="font-apfel_grotezk font-semibold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            {contact.heading}
          </h2>
          <p className="mt-6 lg:mt-8 max-w-[54ch] text-base lg:text-lg text-[#1a1a1a]/70 leading-relaxed">
            {contact.body}
          </p>

          <div className="mt-10 lg:mt-12">
            <a
              href={`mailto:${contact.email}`}
              className="group inline-flex items-center gap-4"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white transition-transform duration-300 group-hover:scale-110">
                <ArrowRight className="w-5 h-5" />
              </span>
              <span className="text-base lg:text-lg font-semibold">
                Write to the careers team
              </span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 lg:border-l lg:border-[#1a1a1a]/10 lg:pl-12 flex flex-col gap-8">
          <div>
            <p className="font-necto_mono text-[10px] lg:text-[11px] uppercase tracking-[0.2em] text-[#1a1a1a]/50 mb-3">
              EMAIL
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="font-apfel_grotezk text-xl lg:text-2xl font-semibold tracking-tight hover:text-red-600 transition-colors break-all"
            >
              {contact.email}
            </a>
          </div>
          <div>
            <p className="font-necto_mono text-[10px] lg:text-[11px] uppercase tracking-[0.2em] text-[#1a1a1a]/50 mb-3">
              PHONE
            </p>
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="font-apfel_grotezk text-xl lg:text-2xl font-semibold tracking-tight hover:text-red-600 transition-colors"
            >
              {contact.phone}
            </a>
          </div>
          <div>
            <p className="font-necto_mono text-[10px] lg:text-[11px] uppercase tracking-[0.2em] text-[#1a1a1a]/50 mb-3">
              ADDRESS
            </p>
            <p className="text-sm lg:text-base text-[#1a1a1a]/80 leading-relaxed">
              {contact.addressLines.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < contact.addressLines.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>

          <div className="mt-4 pt-8 border-t border-[#1a1a1a]/10 flex flex-col gap-4">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-colors font-necto_mono text-[11px] lg:text-xs font-semibold uppercase tracking-widest"
            >
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span>Return to Al Barham Group</span>
            </Link>
            <Link
              to="/companies"
              className="group inline-flex items-center gap-2 text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-colors font-necto_mono text-[11px] lg:text-xs font-semibold uppercase tracking-widest"
            >
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span>All group companies</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
