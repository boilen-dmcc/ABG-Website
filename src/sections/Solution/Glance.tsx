import { useEffect, useRef, useState } from "react";
import type { SolutionData } from "./types";

type Props = { data: SolutionData };

export const Glance = ({ data }: Props) => {
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
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="glance"
      className="relative w-full bg-white text-[#1a1a1a] py-20 sm:py-28 lg:py-36"
    >
      <div
        ref={ref}
        className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14 lg:mb-20">
          <div className="lg:col-span-5">
            <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-5">
              INDUSTRY AT A GLANCE
            </p>
            <h2 className="font-apfel_grotezk font-semibold text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tight">
              {data.glance.heading}
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-[52ch]">
              {data.glance.intro}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
          {data.glance.metrics.map((m, i) => (
            <div
              key={m.label}
              className="bg-white px-6 py-10 sm:p-12 lg:p-14 flex flex-col justify-between gap-10 min-h-[220px] sm:min-h-[260px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(14px)",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <p className="font-necto_mono text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-400">
                {String(i + 1).padStart(2, "0")} · {m.label}
              </p>
              <p className="font-apfel_grotezk font-bold text-6xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
                {m.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
