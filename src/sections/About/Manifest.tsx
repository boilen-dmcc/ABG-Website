import { useEffect, useRef, useState } from "react";
import type { AboutData } from "./types";

type Props = { data: AboutData };

export const Manifest = ({ data }: Props) => {
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

  const half = Math.ceil(data.manifestPrinciples.length / 2);
  const leftCol = data.manifestPrinciples.slice(0, half);
  const rightCol = data.manifestPrinciples.slice(half);

  return (
    <section className="relative w-full bg-white text-[#1a1a1a] py-20 sm:py-28 lg:py-36">
      <div
        ref={ref}
        className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12"
      >
        <div className="max-w-[64rem] mb-14 lg:mb-20">
          <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-5">
            {data.manifestEyebrow}
          </p>
          <h2 className="font-apfel_grotezk font-semibold text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tight max-w-[22ch]">
            {data.manifestHeading}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 lg:gap-x-20 border-t border-[#1a1a1a]">
          {[leftCol, rightCol].map((col, colIndex) => (
            <div key={colIndex} className="flex flex-col">
              {col.map((p, i) => {
                const globalIndex = colIndex * half + i;
                return (
                  <div
                    key={p.number}
                    className="group py-8 lg:py-10 border-b border-gray-200 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateY(0)" : "translateY(14px)",
                      transitionDelay: `${globalIndex * 80}ms`,
                    }}
                  >
                    <div className="flex items-baseline gap-6 lg:gap-8">
                      <span className="font-necto_mono text-xs lg:text-sm font-semibold tracking-[0.2em] text-gray-300 group-hover:text-red-600 transition-colors duration-300">
                        {p.number}
                      </span>
                      <p className="font-apfel_grotezk text-2xl sm:text-3xl lg:text-[32px] font-semibold tracking-tight leading-[1.15]">
                        {p.statement}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
