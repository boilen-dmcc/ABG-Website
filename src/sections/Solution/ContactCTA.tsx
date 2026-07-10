import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { SolutionData } from "./types";

type Props = { data: SolutionData };

export const ContactCTA = ({ data }: Props) => {
  const { contact } = data;
  return (
    <section
      id="contact"
      className="home-section-y relative w-full border-t border-white/5 bg-gray-900 text-white"
    >
      <div className="home-container grid grid-cols-1 gap-8 xs:gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="mb-5 font-necto_mono text-[11px] font-bold uppercase tracking-[0.2em] text-red-500 xs:mb-6 lg:text-xs">
            CONTACT · {data.name.toUpperCase()} DESK
          </p>
          <h2 className="heading-section text-white leading-[1.05]">
            {contact.heading}
          </h2>
          <p className="mt-6 lg:mt-8 max-w-[54ch] text-base lg:text-lg text-white/70 leading-relaxed">
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
                Open a commercial dialogue
              </span>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-12">
          <div>
            <p className="font-necto_mono text-[10px] lg:text-[11px] uppercase tracking-[0.2em] text-white/50 mb-3">
              EMAIL
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="font-apfel_grotezk text-xl lg:text-2xl font-semibold tracking-tight hover:text-red-500 transition-colors break-all"
            >
              {contact.email}
            </a>
          </div>
          <div>
            <p className="font-necto_mono text-[10px] lg:text-[11px] uppercase tracking-[0.2em] text-white/50 mb-3">
              PHONE
            </p>
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="font-apfel_grotezk text-xl lg:text-2xl font-semibold tracking-tight hover:text-red-500 transition-colors"
            >
              {contact.phone}
            </a>
          </div>
          <div>
            <p className="font-necto_mono text-[10px] lg:text-[11px] uppercase tracking-[0.2em] text-white/50 mb-3">
              ADDRESS
            </p>
            <p className="text-sm lg:text-base text-white/80 leading-relaxed">
              {contact.addressLines.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < contact.addressLines.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>

          <div className="mt-4 pt-8 border-t border-white/10 flex flex-col gap-4">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors font-necto_mono text-[11px] lg:text-xs font-semibold uppercase tracking-widest"
            >
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span>Return to Al Barham Group</span>
            </Link>
            <Link
              to="/companies"
              className="group inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors font-necto_mono text-[11px] lg:text-xs font-semibold uppercase tracking-widest"
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
