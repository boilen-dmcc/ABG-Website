import { useEffect, useRef, useState } from "react";
import { principles } from "./data";

export const Principles = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean[]>(() =>
    principles.map(() => false),
  );

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const items = Array.from(
      container.querySelectorAll<HTMLElement>("[data-principle]"),
    );
    const io = new IntersectionObserver(
      (entries) => {
        setVisible((prev) => {
          const next = [...prev];
          entries.forEach((entry) => {
            const idx = Number(
              (entry.target as HTMLElement).dataset.principle,
            );
            if (entry.isIntersecting) next[idx] = true;
          });
          return next;
        });
      },
      { threshold: 0.4 },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-white text-foreground py-20 sm:py-28 lg:py-36 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-4">
          <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-5">
            HOW WE WORK
          </p>
          <h2 className="heading-section max-w-[14ch]">
            Lorem ipsum.
          </h2>
          <p className="mt-6 lg:mt-8 text-base lg:text-lg text-foreground leading-relaxed max-w-[32ch]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
          </p>
        </div>

        <div ref={ref} className="lg:col-span-8 border-t border-gray-200">
          {principles.map((p, i) => (
            <div
              key={p.index}
              data-principle={i}
              className="grid grid-cols-12 gap-6 border-b border-gray-200 py-7 lg:py-9 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
              style={{
                opacity: visible[i] ? 1 : 0,
                transform: visible[i] ? "translateY(0)" : "translateY(10px)",
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <div className="col-span-2 sm:col-span-1">
                <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-red-600 pt-2">
                  {p.index}
                </p>
              </div>
              <div className="col-span-10 sm:col-span-11">
                <p className="font-apfel_grotezk text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight leading-[1.2] max-w-[28ch]">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
