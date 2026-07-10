import { useEffect, useRef, useState } from "react";
import type { AboutData } from "./types";

type Props = { data: AboutData };

export const Origin = ({ data }: Props) => {
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
    <section className="relative w-full bg-gray-50 text-foreground py-16 md:py-20 border-t border-gray-200">
      <div
        ref={ref}
        className="max-w-[1400px] mx-auto px-6 md:px-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-6">
              {data.originEyebrow}
            </p>
            <h2 className="font-extrabold uppercase break-words">
              {data.originHeading}
            </h2>
          </div>

          <div className="lg:col-span-7 relative lg:pl-10">
            <div
              className="hidden lg:block absolute left-0 top-1 bottom-1 w-[2px] bg-red-600"
              aria-hidden
            />
            <div className="flex flex-col gap-6 lg:gap-8">
              {data.originParagraphs.map((para, i) => (
                <p
                  key={i}
                  className="text-base lg:text-lg text-foreground leading-relaxed max-w-[58ch] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(12px)",
                    transitionDelay: `${i * 100}ms`,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
