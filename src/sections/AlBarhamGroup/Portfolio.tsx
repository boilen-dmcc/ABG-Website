import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { companies } from "./data";

export const Portfolio = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean[]>(() =>
    companies.map(() => false),
  );

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const items = Array.from(
      container.querySelectorAll<HTMLElement>("[data-company]"),
    );
    const io = new IntersectionObserver(
      (entries) => {
        setVisible((prev) => {
          const next = [...prev];
          entries.forEach((entry) => {
            const idx = Number((entry.target as HTMLElement).dataset.company);
            if (entry.isIntersecting) next[idx] = true;
          });
          return next;
        });
      },
      { threshold: 0.2 },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
      className="relative w-full bg-white text-foreground py-20 sm:py-28 lg:py-36 border-t border-gray-200"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-5">
              PORTFOLIO
            </p>
            <h2 className="heading-section max-w-[20ch]">
              Lorem ipsum dolor.
            </h2>
          </div>
          <p className="text-base lg:text-lg text-foreground leading-relaxed max-w-[40ch]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200"
        >
          {companies.map((c, i) => {
            const content = (
              <>
                <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.imageAlt}
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
                      c.href ? "group-hover:scale-[1.03]" : "grayscale opacity-90"
                    }`}
                  />
                </div>
                <div className="flex flex-col gap-3 p-6 lg:p-7 flex-1">
                  <p className="font-necto_mono text-[10px] lg:text-[11px] uppercase tracking-[0.2em] text-gray-500">
                    {c.sector}
                  </p>
                  <h3 className="font-apfel_grotezk text-xl lg:text-2xl font-semibold tracking-tight leading-tight">
                    {c.name}
                  </h3>
                  <p className="text-sm lg:text-base text-foreground leading-relaxed">
                    {c.line}
                  </p>
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    {c.href ? (
                      <>
                        <span className="font-necto_mono text-[10px] lg:text-[11px] uppercase tracking-[0.2em] text-red-600 font-semibold">
                          Lorem ipsum
                        </span>
                        <ArrowUpRight className="w-5 h-5 text-red-600 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    ) : (
                      <>
                        <span className="font-necto_mono text-[10px] lg:text-[11px] uppercase tracking-[0.2em] text-gray-400 font-semibold">
                          Lorem ipsum dolor sit
                        </span>
                        <ArrowUpRight className="w-5 h-5 text-gray-300" />
                      </>
                    )}
                  </div>
                </div>
              </>
            );

            const cardClass = `group relative bg-white flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
              c.href ? "hover:bg-gray-50 cursor-pointer" : "cursor-default"
            }`;

            return (
              <article
                key={c.name}
                data-company={i}
                className={cardClass}
                style={{
                  opacity: visible[i] ? 1 : 0,
                  transform: visible[i] ? "translateY(0)" : "translateY(16px)",
                  transitionDelay: `${(i % 4) * 80}ms`,
                }}
              >
                {c.href ? (
                  <Link
                    to={c.href}
                    className="flex flex-col h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                    aria-label={`${c.name} — visit company page`}
                  >
                    {content}
                  </Link>
                ) : (
                  <div
                    className="flex flex-col h-full"
                    aria-label={`${c.name} — dedicated page coming soon`}
                  >
                    {content}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
