import { useEffect, useRef, useState } from "react";
import { mandate, taqat } from "./data";

export const Mandate = () => {
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
    <section
      id="mandate"
      className="relative w-full bg-white text-foreground py-20 sm:py-28 lg:py-36"
    >
      <div
        ref={ref}
        className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16"
      >
        <div
          className="lg:col-span-7 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(14px)",
          }}
        >
          <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-5">
            {mandate.eyebrow}
          </p>
          <h2 className="heading-section max-w-[22ch]">
            {mandate.heading}
          </h2>
          <div className="mt-8 lg:mt-10 space-y-5 max-w-[62ch] text-base lg:text-lg text-foreground leading-[1.7]">
            {mandate.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <figure
          className="lg:col-span-5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(18px)",
            transitionDelay: "120ms",
          }}
        >
          <div className="relative w-full aspect-[4/5] bg-gray-100 overflow-hidden">
            <img
              src={taqat.mandatePortrait}
              alt={taqat.mandatePortraitAlt}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <figcaption className="mt-4 font-necto_mono text-[10px] lg:text-[11px] uppercase tracking-[0.18em] text-gray-500 leading-relaxed">
            {taqat.mandatePortraitCaption}
          </figcaption>
        </figure>
      </div>
    </section>
  );
};
