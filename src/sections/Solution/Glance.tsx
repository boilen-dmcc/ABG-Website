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
    <section id="glance" className="home-section-y relative w-full bg-white text-foreground">
      <div ref={ref} className="home-container">
        <div className="mb-10 grid grid-cols-1 gap-8 xs:gap-10 lg:mb-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-5">
              INDUSTRY AT A GLANCE
            </p>
            <h2 className="heading-section leading-[1.05]">
              {data.glance.heading}
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <p className="text-base lg:text-lg text-foreground leading-relaxed max-w-[52ch]">
              {data.glance.intro}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
          {data.glance.metrics.map((m, i) => (
            <div
              key={m.label}
              className="flex min-h-[180px] flex-col justify-between gap-8 bg-white px-5 py-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none xs:min-h-[200px] xs:px-6 xs:py-10 sm:min-h-[260px] sm:p-12 lg:p-14"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(14px)",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <p className="font-necto_mono text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-400">
                {String(i + 1).padStart(2, "0")} · {m.label}
              </p>
              <p className="font-apfel_grotezk text-4xl font-bold leading-[0.95] tracking-tight xs:text-5xl sm:text-6xl lg:text-8xl">
                {m.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
