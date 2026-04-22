import { useEffect, useRef, useState } from "react";
import type { Discipline } from "./types";

type Props = {
  heading: string;
  subhead: string;
  disciplines: Discipline[];
};

export const Disciplines = ({ heading, subhead, disciplines }: Props) => {
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
    <section className="relative w-full bg-white text-[#1a1a1a] pb-20 sm:pb-28 lg:pb-36">
      <div
        ref={ref}
        className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12"
      >
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-5">
              DISCIPLINES
            </p>
            <h2 className="font-apfel_grotezk font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight max-w-[20ch]">
              {heading}
            </h2>
          </div>
          <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-[36ch]">
            {subhead}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
          {disciplines.map((d, i) => (
            <article
              key={d.index}
              className="group relative bg-white p-8 lg:p-10 min-h-[280px] flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-gray-50 motion-reduce:transition-none"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(14px)",
                transitionDelay: `${i * 70}ms`,
              }}
            >
              <p className="font-apfel_grotezk font-bold text-5xl lg:text-6xl text-gray-200 leading-none transition-colors duration-500 group-hover:text-red-600">
                {d.index}
              </p>
              <div className="mt-8">
                <h3 className="font-apfel_grotezk text-2xl lg:text-[26px] font-semibold leading-tight mb-3 tracking-tight">
                  {d.title}
                </h3>
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed max-w-[32ch]">
                  {d.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
