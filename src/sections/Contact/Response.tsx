import { useEffect, useRef, useState } from "react";
import type { ContactData } from "./types";

type Props = { data: ContactData };

export const Response = ({ data }: Props) => {
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
    <section className="relative w-full bg-white text-foreground py-20 sm:py-24 lg:py-32">
      <div
        ref={ref}
        className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14 lg:mb-18">
          <div className="lg:col-span-7">
            <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-5">
              {data.responseEyebrow}
            </p>
            <h2 className="heading-section leading-[1.05] max-w-[22ch]">
              {data.responseHeading}
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-4">
            <p className="max-w-[56ch] text-base lg:text-lg text-foreground/70 leading-relaxed">
              {data.responseBody}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:divide-x divide-y lg:divide-y-0 divide-gray-200 border-t-2 border-b border-[#1a1a1a]">
          {data.responseSpecs.map((spec, i) => (
            <div
              key={spec.label}
              className="py-8 lg:py-10 lg:px-10 first:lg:pl-0 last:lg:pr-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(14px)",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <p className="font-necto_mono text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.24em] text-red-600">
                {spec.label}
              </p>
              <p className="mt-5 lg:mt-6 font-apfel_grotezk text-xl lg:text-2xl font-semibold leading-tight tracking-tight max-w-[22ch]">
                {spec.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
