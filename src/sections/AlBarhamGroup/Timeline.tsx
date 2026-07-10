import { useEffect, useRef, useState } from "react";
import { milestones } from "./data";

export const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean[]>(() =>
    milestones.map(() => false),
  );

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const items = Array.from(
      container.querySelectorAll<HTMLElement>("[data-milestone]"),
    );
    const io = new IntersectionObserver(
      (entries) => {
        setVisible((prev) => {
          const next = [...prev];
          entries.forEach((entry) => {
            const idx = Number(
              (entry.target as HTMLElement).dataset.milestone,
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
    <section className="relative w-full bg-white text-foreground py-20 sm:py-28 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-[48rem] mb-14 lg:mb-20">
          <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-5">
            HERITAGE
          </p>
          <h2 className="heading-section">
            Lorem ipsum dolor sit amet.
          </h2>
        </div>

        <div ref={ref} className="border-t border-gray-200">
          {milestones.map((m, i) => (
            <div
              key={m.year}
              data-milestone={i}
              className="grid grid-cols-12 gap-6 lg:gap-10 border-b border-gray-200 py-8 lg:py-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
              style={{
                opacity: visible[i] ? 1 : 0,
                transform: visible[i] ? "translateY(0)" : "translateY(12px)",
              }}
            >
              <div className="col-span-12 sm:col-span-3 lg:col-span-2">
                <p className="font-apfel_grotezk font-bold text-3xl sm:text-4xl lg:text-5xl leading-none tracking-tight">
                  {m.year}
                </p>
              </div>
              <div className="col-span-12 sm:col-span-9 lg:col-span-10 lg:pl-6 lg:border-l lg:border-gray-200">
                <h3 className="font-apfel_grotezk text-xl lg:text-2xl font-semibold tracking-tight mb-2">
                  {m.title}
                </h3>
                <p className="text-base lg:text-lg text-foreground leading-relaxed max-w-[62ch]">
                  {m.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
