import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { companies, type CompanyItem } from "@/sections/Page2/Page2Header";
import type { AboutData } from "./types";

type Props = { data: AboutData };

export const TheGroup = ({ data }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const byName = new Map(companies.map((c) => [c.name, c]));

  return (
    <section className="relative w-full bg-white text-[#1a1a1a] py-20 sm:py-28 lg:py-36 border-t border-gray-200">
      <div
        ref={ref}
        className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14 lg:mb-20">
          <div className="lg:col-span-7">
            <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-5">
              {data.groupEyebrow}
            </p>
            <h2 className="font-apfel_grotezk font-semibold text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tight max-w-[20ch]">
              {data.groupHeading}
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-4">
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-[44ch]">
              {data.groupIntro}
            </p>
          </div>
        </div>

        <div className="border-t-2 border-[#1a1a1a]">
          {data.rosterCategories.map((cat, catIndex) => {
            const catCompanies: CompanyItem[] = cat.companyNames
              .map((n) => byName.get(n))
              .filter((c): c is CompanyItem => Boolean(c));

            return (
              <div
                key={cat.label}
                className="py-10 lg:py-14 border-b border-gray-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                  <div className="lg:col-span-3">
                    <p className="font-necto_mono text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-400">
                      {String(catIndex + 1).padStart(2, "0")} / {String(data.rosterCategories.length).padStart(2, "0")}
                    </p>
                    <p className="mt-3 font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.18em] text-[#1a1a1a] leading-snug max-w-[18ch]">
                      {cat.label}
                    </p>
                  </div>
                  <div className="lg:col-span-9">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-5">
                      {catCompanies.map((c, i) => {
                        const globalIndex = catIndex * 3 + i;
                        const Inner = (
                          <>
                            <div className="flex items-center gap-4 mb-5">
                              {c.logo ? (
                                <div className="w-12 h-12 rounded-md bg-white border border-gray-200 flex items-center justify-center overflow-hidden p-1.5 shrink-0">
                                  <img
                                    src={c.logo}
                                    alt={c.name}
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                              ) : (
                                <div
                                  className="w-12 h-12 rounded-md flex items-center justify-center text-white text-lg font-bold shrink-0"
                                  style={{ backgroundColor: c.color }}
                                >
                                  {c.name.charAt(0)}
                                </div>
                              )}
                              <span className="ml-auto w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center transition-all duration-500 group-hover:bg-red-600 group-hover:border-red-600">
                                <ArrowUpRight className="w-4 h-4 text-gray-500 transition-colors duration-500 group-hover:text-white" />
                              </span>
                            </div>
                            <h3 className="font-apfel_grotezk text-lg lg:text-xl font-semibold tracking-tight leading-tight mb-2">
                              {c.name}
                            </h3>
                            <p className="text-sm text-gray-600 leading-snug">
                              {c.description}
                            </p>
                          </>
                        );

                        const cardClass =
                          "group block bg-white border border-gray-200 p-5 lg:p-6 transition-all duration-500 hover:border-[#1a1a1a] hover:-translate-y-1 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:hover:translate-y-0";
                        const style = {
                          opacity: visible ? 1 : 0,
                          transform: visible ? "translateY(0)" : "translateY(14px)",
                          transitionDelay: `${globalIndex * 70}ms`,
                        } as const;

                        return c.url ? (
                          <Link
                            key={c.name}
                            to={c.url}
                            className={cardClass}
                            style={style}
                          >
                            {Inner}
                          </Link>
                        ) : (
                          <div
                            key={c.name}
                            className={cardClass}
                            style={style}
                          >
                            {Inner}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
