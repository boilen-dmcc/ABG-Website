import { useEffect, useRef, useState } from "react";
import { leaders } from "./data";

export const Leadership = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean[]>(() =>
    leaders.map(() => false),
  );

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const items = Array.from(
      container.querySelectorAll<HTMLElement>("[data-leader]"),
    );
    const io = new IntersectionObserver(
      (entries) => {
        setVisible((prev) => {
          const next = [...prev];
          entries.forEach((entry) => {
            const idx = Number((entry.target as HTMLElement).dataset.leader);
            if (entry.isIntersecting) next[idx] = true;
          });
          return next;
        });
      },
      { threshold: 0.25 },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-white text-foreground py-20 sm:py-28 lg:py-36 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-[48rem] mb-14 lg:mb-20">
          <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-5">
            LEADERSHIP
          </p>
          <h2 className="heading-section max-w-[22ch]">
            Lorem ipsum dolor sit amet.
          </h2>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-10"
        >
          {leaders.map((l, i) => (
            <figure
              key={l.name}
              data-leader={i}
              className="flex flex-col transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
              style={{
                opacity: visible[i] ? 1 : 0,
                transform: visible[i] ? "translateY(0)" : "translateY(16px)",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div className="relative w-full aspect-[4/5] bg-[#001f3f] overflow-hidden flex items-center justify-center">
                <span className="font-necto_mono text-xs lg:text-sm uppercase tracking-[0.2em] text-white/80">
                  Headshot Here
                </span>
              </div>
              <figcaption className="mt-6 flex flex-col gap-3">
                <p className="font-apfel_grotezk text-xl lg:text-2xl font-semibold tracking-tight">
                  {l.name}
                </p>
                <p className="font-necto_mono text-[10px] lg:text-[11px] uppercase tracking-[0.2em] text-red-600 font-semibold">
                  {l.title}
                </p>
                <blockquote className="mt-2 font-apfel_grotezk text-base lg:text-lg text-foreground leading-snug max-w-[32ch]">
                  &ldquo;{l.quote}&rdquo;
                </blockquote>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
