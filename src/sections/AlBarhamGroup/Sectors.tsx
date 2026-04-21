import { useEffect, useRef, useState } from "react";
import { sectors } from "./data";

export const Sectors = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean[]>(() =>
    sectors.map(() => false),
  );

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const items = Array.from(
      container.querySelectorAll<HTMLElement>("[data-sector]"),
    );
    const io = new IntersectionObserver(
      (entries) => {
        setVisible((prev) => {
          const next = [...prev];
          entries.forEach((entry) => {
            const idx = Number((entry.target as HTMLElement).dataset.sector);
            if (entry.isIntersecting) next[idx] = true;
          });
          return next;
        });
      },
      { threshold: 0.35 },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-white text-[#1a1a1a] pt-4 pb-20 sm:pb-28 lg:pb-36">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-[48rem] mb-14 lg:mb-20">
          <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-5">
            SECTORS
          </p>
          <h2 className="font-apfel_grotezk font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight max-w-[22ch]">
            Lorem ipsum dolor sit amet consectetur.
          </h2>
        </div>

        <div ref={ref} className="border-t border-gray-200">
          {sectors.map((s, i) => (
            <div
              key={s.index}
              data-sector={i}
              className="group grid grid-cols-12 gap-6 lg:gap-10 border-b border-gray-200 py-10 lg:py-14 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
              style={{
                opacity: visible[i] ? 1 : 0,
                transform: visible[i] ? "translateY(0)" : "translateY(12px)",
              }}
            >
              <div className="col-span-12 sm:col-span-2 lg:col-span-2">
                <p className="font-apfel_grotezk font-bold text-5xl sm:text-6xl lg:text-7xl text-gray-200 leading-none tracking-tight transition-colors duration-500 group-hover:text-red-600 motion-reduce:transition-none">
                  {s.index}
                </p>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                <h3 className="font-apfel_grotezk text-2xl sm:text-3xl lg:text-[34px] font-semibold tracking-tight leading-[1.15] mb-4 max-w-[22ch]">
                  {s.name}
                </h3>
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-[40ch]">
                  {s.line}
                </p>
              </div>
              <div className="col-span-12 sm:col-span-4 lg:col-span-4 lg:pl-6 lg:border-l lg:border-gray-200">
                <p className="font-necto_mono text-[10px] lg:text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-4">
                  LOREM
                </p>
                <ul className="flex flex-col gap-2">
                  {s.companies.map((c) => (
                    <li
                      key={c}
                      className="font-apfel_grotezk text-base lg:text-lg font-semibold tracking-tight"
                    >
                      {c}
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
