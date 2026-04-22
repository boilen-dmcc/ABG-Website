import { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";
import type { Discipline } from "./types";

type Props = {
  heading: string;
  subhead: string;
  disciplines: Discipline[];
};

export const Disciplines = ({ heading, subhead, disciplines }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
    <section className="relative w-full bg-white text-[#1a1a1a] pb-20 sm:pb-28 lg:pb-36">
      <div
        ref={ref}
        className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12"
      >
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-5">
              DISCIPLINES
            </p>
            <h2 className="font-apfel_grotezk font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight max-w-[20ch]">
              {heading}
            </h2>
          </div>
          <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-[36ch]">
            {subhead}
          </p>
        </div>

        <div className="border-t border-gray-200">
          {disciplines.map((d, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={d.index}
                className="border-b border-gray-200 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(14px)",
                  transitionDelay: `${i * 70}ms`,
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full grid grid-cols-[56px_1fr_auto] lg:grid-cols-[96px_1fr_auto] items-center gap-4 sm:gap-6 lg:gap-10 py-7 lg:py-9 group text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <p
                    className={`font-apfel_grotezk font-bold text-4xl lg:text-5xl leading-none transition-colors duration-500 ${
                      isOpen
                        ? "text-red-600"
                        : "text-gray-300 group-hover:text-red-600"
                    }`}
                  >
                    {d.index}
                  </p>
                  <h3 className="font-apfel_grotezk text-2xl lg:text-3xl font-semibold leading-tight tracking-tight">
                    {d.title}
                  </h3>
                  <span
                    className={`relative w-9 h-9 lg:w-10 lg:h-10 rounded-full border flex items-center justify-center transition-all duration-500 ${
                      isOpen
                        ? "bg-red-600 border-red-600 rotate-45"
                        : "border-gray-300 group-hover:border-gray-800"
                    }`}
                    aria-hidden
                  >
                    <Plus
                      className={`w-4 h-4 transition-colors duration-500 ${
                        isOpen ? "text-white" : "text-gray-700"
                      }`}
                    />
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="pl-[72px] sm:pl-20 lg:pl-[136px] pr-10 pb-8 lg:pb-10 max-w-[64ch]">
                      <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                        {d.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
