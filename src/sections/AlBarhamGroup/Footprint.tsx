import { useEffect, useRef, useState } from "react";
import { countries, footprint } from "./data";

export const Footprint = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean[]>(() =>
    countries.map(() => false),
  );

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const items = Array.from(
      container.querySelectorAll<HTMLElement>("[data-country]"),
    );
    const io = new IntersectionObserver(
      (entries) => {
        setVisible((prev) => {
          const next = [...prev];
          entries.forEach((entry) => {
            const idx = Number((entry.target as HTMLElement).dataset.country);
            if (entry.isIntersecting) next[idx] = true;
          });
          return next;
        });
      },
      { threshold: 0.3 },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-gray-900 text-white overflow-hidden">
      <img
        src={footprint.image}
        alt={footprint.imageAlt}
        className="absolute inset-0 w-full h-full object-cover opacity-35"
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(17,24,39,0.92) 0%, rgba(17,24,39,0.75) 50%, rgba(17,24,39,0.95) 100%)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-20 sm:py-28 lg:py-36">
        <div className="max-w-[48rem] mb-14 lg:mb-20">
          <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-red-500 mb-5">
            {footprint.eyebrow}
          </p>
          <h2 className="heading-section">
            {footprint.heading}
          </h2>
        </div>

        <div ref={ref} className="border-t border-white/10">
          {countries.map((c, i) => (
            <div
              key={c.name}
              data-country={i}
              className="grid grid-cols-12 gap-6 lg:gap-10 border-b border-white/10 py-8 lg:py-12 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
              style={{
                opacity: visible[i] ? 1 : 0,
                transform: visible[i] ? "translateY(0)" : "translateY(12px)",
              }}
            >
              <div className="col-span-12 lg:col-span-6">
                <p className="font-apfel_grotezk font-bold text-4xl sm:text-5xl lg:text-6xl leading-none tracking-tight">
                  {c.name}
                </p>
                <p className="mt-4 font-necto_mono text-[10px] lg:text-[11px] uppercase tracking-[0.2em] text-red-500/90">
                  {c.hub}
                </p>
              </div>
              <div className="col-span-12 lg:col-span-6 lg:pl-10 lg:border-l lg:border-white/10 flex items-center">
                <p className="text-base lg:text-lg text-white/75 leading-relaxed max-w-[48ch]">
                  {c.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
