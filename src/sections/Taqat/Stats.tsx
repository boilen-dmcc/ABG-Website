import { useEffect, useRef, useState } from "react";
import { stats } from "./data";

export const Stats = () => {
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
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-gray-900 text-white py-16 sm:py-24 lg:py-32 border-y border-white/5">
      <div
        ref={ref}
        className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12"
      >
        <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-red-500 mb-10 sm:mb-14">
          AT A GLANCE
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-10 gap-x-8 items-stretch">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col h-full justify-between gap-6 min-w-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(14px)",
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <p className="font-apfel_grotezk font-bold text-3xl lg:text-4xl leading-[1.05] tracking-tight">
                {stat.value}
              </p>
              <p className="font-necto_mono text-[11px] lg:text-xs font-semibold uppercase tracking-[0.18em] text-white/60 leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
