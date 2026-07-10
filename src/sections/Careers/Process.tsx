import { useEffect, useRef, useState } from "react";
import type { CareersData } from "./types";

type Props = { data: CareersData };

export const Process = ({ data }: Props) => {
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
    <section className="relative w-full bg-gray-900 text-white py-20 sm:py-28 lg:py-36 overflow-hidden isolate">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "80px 100%",
        }}
        aria-hidden
      />

      <div
        ref={ref}
        className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12"
      >
        <div className="max-w-[64rem] mb-14 lg:mb-20">
          <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-5">
            {data.processEyebrow}
          </p>
          <h2 className="heading-section leading-[1.05] max-w-[22ch]">
            {data.processHeading}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 lg:divide-x divide-y lg:divide-y-0 divide-white/15 border-t border-b lg:border-b border-white/15">
          {data.processSteps.map((step, i) => (
            <div
              key={step.number}
              className="py-10 lg:py-12 lg:px-8 first:lg:pl-0 last:lg:pr-0 lg:first:pr-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(14px)",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <p className="font-necto_mono text-4xl lg:text-5xl font-bold tracking-tight text-red-600 leading-none tabular-nums">
                {step.number}
              </p>
              <h3 className="mt-6 lg:mt-8 font-apfel_grotezk text-2xl lg:text-3xl font-semibold leading-tight tracking-tight">
                {step.title}
              </h3>
              <p className="mt-4 lg:mt-5 text-sm lg:text-base text-white/70 leading-relaxed max-w-[28ch]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
