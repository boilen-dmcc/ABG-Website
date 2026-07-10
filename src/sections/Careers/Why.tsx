import { useEffect, useRef, useState } from "react";
import type { CareersData } from "./types";

type Props = { data: CareersData };

export const Why = ({ data }: Props) => {
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
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-white text-foreground py-20 sm:py-28 lg:py-36">
      <div
        ref={ref}
        className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14 lg:mb-20">
          <div className="lg:col-span-8">
            <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-5">
              {data.whyEyebrow}
            </p>
            <h2 className="heading-section leading-[1.05] max-w-[22ch]">
              {data.whyHeading}
            </h2>
          </div>
        </div>

        <div className="border-t-2 border-[#1a1a1a]">
          {data.whyPrinciples.map((p, i) => (
            <div
              key={p.number}
              className="group grid grid-cols-[56px_1fr_auto] lg:grid-cols-[96px_1fr_auto] items-center gap-4 sm:gap-6 lg:gap-10 py-8 lg:py-12 border-b border-gray-200 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(14px)",
                transitionDelay: `${i * 90}ms`,
              }}
            >
              <span className="font-necto_mono text-xs lg:text-sm font-semibold tracking-[0.22em] text-gray-300 group-hover:text-red-600 transition-colors duration-300">
                {p.number}
              </span>
              <p className="font-apfel_grotezk text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.05]">
                {p.statement}
              </p>
              <span className="hidden sm:inline font-necto_mono text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-400 text-right">
                {p.caption}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
