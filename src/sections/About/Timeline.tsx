import { useEffect, useRef, useState } from "react";
import type { AboutData } from "./types";

type Props = { data: AboutData };

export const Timeline = ({ data }: Props) => {
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
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const count = data.timelineMilestones.length;

  return (
    <section className="relative w-full bg-gray-900 text-white py-20 sm:py-28 lg:py-36 border-y border-white/5 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "80px 100%",
        }}
        aria-hidden
      />
      <div
        ref={ref}
        className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12"
      >
        <div className="max-w-[62rem] mb-14 lg:mb-20">
          <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-red-500 mb-5">
            {data.timelineEyebrow}
          </p>
          <h2 className="font-apfel_grotezk font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight max-w-[22ch]">
            {data.timelineHeading}
          </h2>
        </div>

        <div className="hidden lg:block">
          <div
            className="relative grid gap-6"
            style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}
          >
            <div
              className="absolute left-0 right-0 h-px bg-white/20"
              style={{ top: "48px" }}
              aria-hidden
            />
            {data.timelineMilestones.map((m, i) => (
              <div
                key={m.year}
                className="relative flex flex-col transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(14px)",
                  transitionDelay: `${i * 110}ms`,
                }}
              >
                <p className="font-necto_mono text-xs font-semibold uppercase tracking-[0.22em] text-red-500 mb-5 h-5">
                  {m.year}
                </p>
                <div className="relative flex justify-start">
                  <span className="block w-3 h-3 rounded-full bg-red-600 ring-4 ring-gray-900" />
                </div>
                <h3 className="font-apfel_grotezk text-xl xl:text-[22px] font-semibold tracking-tight leading-tight mt-6">
                  {m.title}
                </h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed max-w-[22ch]">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:hidden -mx-4 sm:-mx-6 md:-mx-8 px-4 sm:px-6 md:px-8 overflow-x-auto">
          <div className="relative flex gap-6 pb-4" style={{ minWidth: "max-content" }}>
            <div
              className="absolute left-0 right-0 h-px bg-white/20"
              style={{ top: "48px" }}
              aria-hidden
            />
            {data.timelineMilestones.map((m, i) => (
              <div
                key={m.year}
                className="relative flex flex-col w-[220px] shrink-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(14px)",
                  transitionDelay: `${i * 110}ms`,
                }}
              >
                <p className="font-necto_mono text-xs font-semibold uppercase tracking-[0.22em] text-red-500 mb-5 h-5">
                  {m.year}
                </p>
                <div className="relative flex justify-start">
                  <span className="block w-3 h-3 rounded-full bg-red-600 ring-4 ring-gray-900" />
                </div>
                <h3 className="font-apfel_grotezk text-xl font-semibold tracking-tight leading-tight mt-6">
                  {m.title}
                </h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
