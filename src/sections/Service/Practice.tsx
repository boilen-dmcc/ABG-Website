import { useEffect, useRef, useState } from "react";
import type { ServiceData } from "./types";

type Props = { data: ServiceData };

export const Practice = ({ data }: Props) => {
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
        <div className="max-w-[62rem] mb-14 lg:mb-20">
          <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-red-500 mb-5">
            THE PRACTICE · AL BARHAM GROUP {data.name.toUpperCase()}
          </p>
          <h2 className="font-apfel_grotezk font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight max-w-[22ch]">
            {data.practice.heading}
          </h2>
          <p className="mt-8 lg:mt-10 max-w-[60ch] text-base lg:text-lg text-white/65 leading-relaxed">
            {data.practice.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {data.practice.columns.map((c, i) => (
            <div
              key={c.label}
              className="bg-gray-900 p-7 lg:p-9 flex flex-col transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(14px)",
                transitionDelay: `${i * 120}ms`,
              }}
            >
              <p className="font-necto_mono text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.22em] text-red-500 mb-6">
                {c.label}
              </p>
              <h3 className="font-apfel_grotezk text-2xl lg:text-[26px] font-semibold tracking-tight leading-snug mb-6 lg:mb-8">
                {c.heading}
              </h3>
              <ul className="mt-auto flex flex-col gap-3 border-t border-white/10 pt-5">
                {c.items.map((item) => (
                  <li
                    key={item}
                    className="font-necto_mono text-[11px] lg:text-xs uppercase tracking-[0.18em] text-white/75 leading-snug"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
