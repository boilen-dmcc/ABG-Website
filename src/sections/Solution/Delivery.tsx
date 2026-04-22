import { useEffect, useRef, useState } from "react";
import type { SolutionData } from "./types";

type Props = { data: SolutionData };

export const Delivery = ({ data }: Props) => {
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
    <section className="relative w-full bg-white text-[#1a1a1a] py-20 sm:py-28 lg:py-36">
      <div
        ref={ref}
        className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14 lg:mb-20">
          <div className="lg:col-span-7">
            <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-5">
              HOW AL BARHAM DELIVERS
            </p>
            <h2 className="font-apfel_grotezk font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight max-w-[20ch]">
              {data.delivery.heading}
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-4">
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-[40ch]">
              {data.delivery.intro}
            </p>
          </div>
        </div>

        <div className="border-t-2 border-[#1a1a1a]">
          <div className="hidden sm:grid grid-cols-[minmax(200px,1fr)_2fr] gap-8 lg:gap-16 pt-5 pb-4 border-b border-gray-200">
            <p className="font-necto_mono text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-400">
              SERVICE
            </p>
            <p className="font-necto_mono text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-400">
              APPLIED TO {data.name.toUpperCase()}
            </p>
          </div>

          {data.delivery.rows.map((r, i) => (
            <div
              key={r.service}
              className="grid grid-cols-1 sm:grid-cols-[minmax(200px,1fr)_2fr] gap-3 sm:gap-8 lg:gap-16 py-8 lg:py-10 border-b border-gray-200 group transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(12px)",
                transitionDelay: `${i * 70}ms`,
              }}
            >
              <div className="flex items-baseline gap-4">
                <span className="font-necto_mono text-[10px] uppercase tracking-[0.22em] text-gray-300 group-hover:text-red-600 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-apfel_grotezk text-2xl lg:text-[28px] font-semibold tracking-tight leading-tight">
                  {r.service}
                </h3>
              </div>
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed max-w-[52ch]">
                {r.application}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
