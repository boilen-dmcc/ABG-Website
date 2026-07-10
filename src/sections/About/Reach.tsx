import { useEffect, useRef, useState } from "react";
import type { AboutData } from "./types";

type Props = { data: AboutData };

export const Reach = ({ data }: Props) => {
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
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-gray-900 text-white py-16 md:py-20 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "80px 100%",
        }}
        aria-hidden
      />
      <div
        ref={ref}
        className="relative max-w-[1400px] mx-auto px-6 md:px-12"
      >
        <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-red-500 mb-8 lg:mb-10">
          {data.reachEyebrow}
        </p>
        <h2 className="font-extrabold uppercase break-words text-white max-w-[24ch]">
          {data.reachHeading}
        </h2>

        <div className="mt-14 lg:mt-20 pt-8 lg:pt-10 border-t border-white/15">
          <p className="font-necto_mono text-[10px] lg:text-[11px] uppercase tracking-[0.22em] text-white/40 mb-6 lg:mb-8">
            WHERE WE OPERATE
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {data.reachChips.map((chip, i) => (
              <div
                key={chip}
                className="bg-gray-900 px-6 py-8 lg:px-8 lg:py-10 flex items-center gap-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(12px)",
                  transitionDelay: `${i * 120}ms`,
                }}
              >
                <span className="font-necto_mono text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.2em] text-red-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-necto_mono text-xs lg:text-sm font-bold uppercase tracking-[0.18em] text-white">
                  {chip}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
