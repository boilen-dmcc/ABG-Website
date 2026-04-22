import { useEffect, useRef, useState } from "react";
import type { ServiceData } from "./types";

type Props = { data: ServiceData };

export const Overview = ({ data }: Props) => {
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
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const pillarCount = data.overview.pillars.length;

  return (
    <section
      id="overview"
      className="relative w-full bg-white text-[#1a1a1a] py-20 sm:py-28 lg:py-36"
    >
      <div
        ref={ref}
        className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12"
      >
        <div className="max-w-[68rem] mb-14 lg:mb-20">
          <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-5">
            SERVICE OVERVIEW
          </p>
          <h2 className="font-apfel_grotezk font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight max-w-[22ch]">
            {data.overview.heading}
          </h2>
          <p className="mt-8 lg:mt-10 max-w-[60ch] text-base lg:text-lg text-gray-600 leading-relaxed">
            {data.overview.intro}
          </p>
        </div>

        <div className="border-t border-gray-200 grid grid-cols-1 md:grid-cols-3">
          {data.overview.pillars.map((p, i) => {
            const notLast = i < pillarCount - 1;
            return (
              <article
                key={p.label}
                className={`py-8 lg:py-10 md:px-6 lg:px-8 md:first:pl-0 md:last:pr-0 ${
                  notLast ? "border-b md:border-b-0 md:border-r border-gray-200" : ""
                } transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none`}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(14px)",
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <p className="font-necto_mono text-[11px] font-semibold uppercase tracking-[0.22em] text-red-600 mb-5">
                  {p.label}
                </p>
                <h3 className="font-apfel_grotezk text-2xl lg:text-[28px] font-semibold tracking-tight leading-tight mb-4">
                  {p.title}
                </h3>
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed max-w-[34ch]">
                  {p.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
