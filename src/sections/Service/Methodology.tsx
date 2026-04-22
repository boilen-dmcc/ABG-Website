import { useEffect, useRef, useState } from "react";
import type { ServiceData } from "./types";

type Props = { data: ServiceData };

export const Methodology = ({ data }: Props) => {
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

  return (
    <section className="relative w-full bg-gray-900 text-white py-20 sm:py-28 lg:py-36 border-y border-white/5">
      <div
        ref={ref}
        className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12"
      >
        <div className="max-w-[56rem] mb-16 lg:mb-24">
          <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-red-500 mb-5">
            METHODOLOGY · DESIGN TO DELIVERY
          </p>
          <h2 className="font-apfel_grotezk font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight max-w-[22ch]">
            {data.methodologyHeading}
          </h2>
        </div>

        <div className="relative">
          <div
            className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-white/10"
            aria-hidden
          />

          <ol className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-6 relative">
            {data.methodologyPhases.map((p, i) => (
              <li
                key={p.phase}
                className="relative transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(14px)",
                  transitionDelay: `${i * 120}ms`,
                }}
              >
                <div className="flex items-center gap-4 mb-6 lg:mb-8">
                  <span className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 border border-red-600">
                    <span className="font-necto_mono text-xs font-semibold text-red-500">
                      {p.phase}
                    </span>
                  </span>
                  <span className="font-necto_mono text-[10px] lg:text-[11px] uppercase tracking-[0.22em] text-white/40">
                    Phase {p.phase}
                  </span>
                </div>

                <h3 className="font-apfel_grotezk text-2xl lg:text-[28px] font-semibold tracking-tight mb-4 lg:mb-5">
                  {p.title}
                </h3>
                <p className="text-sm lg:text-base text-white/65 leading-relaxed max-w-[34ch]">
                  {p.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
