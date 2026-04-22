import { useEffect, useRef, useState } from "react";
import type { SolutionData } from "./types";

type Props = { data: SolutionData };

export const ValueChain = ({ data }: Props) => {
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
    <section className="relative w-full bg-gray-900 text-white py-20 sm:py-28 lg:py-36 border-y border-white/5">
      <div
        ref={ref}
        className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12"
      >
        <div className="max-w-[62rem] mb-14 lg:mb-20">
          <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-red-500 mb-5">
            ACROSS THE VALUE CHAIN
          </p>
          <h2 className="font-apfel_grotezk font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight max-w-[22ch]">
            {data.valueChain.heading}
          </h2>
          <p className="mt-8 lg:mt-10 max-w-[60ch] text-base lg:text-lg text-white/65 leading-relaxed">
            {data.valueChain.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {data.valueChain.panels.map((p, i) => (
            <div
              key={p.stage}
              className="bg-gray-900 p-7 lg:p-9 flex flex-col min-h-[420px] lg:min-h-[520px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(14px)",
                transitionDelay: `${i * 140}ms`,
              }}
            >
              <div className="flex items-start justify-between mb-10 lg:mb-14">
                <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.22em] text-red-500">
                  {p.stage}
                </p>
                <p className="font-necto_mono text-[10px] uppercase tracking-[0.22em] text-white/30">
                  {String(i + 1).padStart(2, "0")} / {String(data.valueChain.panels.length).padStart(2, "0")}
                </p>
              </div>
              <h3 className="font-apfel_grotezk text-2xl lg:text-[30px] font-semibold tracking-tight leading-tight mb-5 lg:mb-6">
                {p.heading}
              </h3>
              <p className="text-sm lg:text-base text-white/65 leading-relaxed mb-8 lg:mb-10 max-w-[32ch]">
                {p.description}
              </p>
              <div className="mt-auto pt-6 border-t border-white/10">
                <p className="font-necto_mono text-[10px] uppercase tracking-[0.22em] text-white/40 mb-4">
                  ABG TOUCHPOINTS
                </p>
                <ul className="flex flex-wrap gap-2">
                  {p.touchpoints.map((t) => (
                    <li
                      key={t}
                      className="font-necto_mono text-[10px] lg:text-[11px] uppercase tracking-[0.16em] text-white/80 px-2.5 py-1.5 border border-white/20 rounded-sm"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
