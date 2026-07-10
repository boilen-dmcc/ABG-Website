import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { SolutionData } from "./types";

type Props = { data: SolutionData };

export const GroupCompanies = ({ data }: Props) => {
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
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="home-section-y relative w-full border-t border-gray-200 bg-gray-50 text-foreground">
      <div ref={ref} className="home-container">
        <div className="mb-10 flex flex-col gap-6 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-5">
              GROUP COMPANIES IN ACTION
            </p>
            <h2 className="heading-section max-w-[20ch]">
              {data.groupCompaniesHeading}
            </h2>
          </div>
          <p className="text-base lg:text-lg text-foreground leading-relaxed max-w-[36ch]">
            {data.groupCompaniesIntro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {data.groupCompanies.map((c, i) => (
            <Link
              key={c.name}
              to={c.url}
              className="group block bg-white border border-gray-200 p-6 lg:p-7 transition-all duration-500 hover:border-[#1a1a1a] hover:-translate-y-1 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(14px)",
                transitionDelay: `${i * 90}ms`,
              }}
            >
              <div className="flex items-start justify-between mb-8 lg:mb-10">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-md bg-white border border-gray-200 flex items-center justify-center overflow-hidden p-2">
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center transition-all duration-500 group-hover:bg-red-600 group-hover:border-red-600">
                  <ArrowUpRight className="w-4 h-4 text-gray-500 transition-colors duration-500 group-hover:text-white" />
                </span>
              </div>
              <h3 className="font-apfel_grotezk text-xl lg:text-[22px] font-semibold tracking-tight leading-tight mb-3">
                {c.name}
              </h3>
              <p className="font-necto_mono text-[10px] lg:text-[11px] uppercase tracking-[0.18em] text-gray-500 leading-snug">
                {c.role}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
