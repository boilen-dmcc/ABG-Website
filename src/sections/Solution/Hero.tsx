import { ArrowRight, ChevronDown } from "lucide-react";
import type { SolutionData } from "./types";

type Props = { data: SolutionData };

export const Hero = ({ data }: Props) => {
  return (
    <section className="relative w-full min-h-screen bg-gray-900 text-white overflow-hidden isolate">
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "80px 100%",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 min-h-screen flex flex-col justify-between pt-36 sm:pt-40 lg:pt-44 pb-12 sm:pb-16 lg:pb-20">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          <div className="col-span-12 lg:col-span-8 order-2 lg:order-1">
            <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-6 lg:mb-10">
              {data.eyebrow}
            </p>
            <h1 className="font-apfel_grotezk font-bold text-6xl sm:text-7xl lg:text-8xl bp1090:text-9xl leading-[0.95] tracking-tight">
              {data.taglinePrefix}
              <span className="text-red-600">{data.taglineAccent}</span>
              {data.taglineSuffix}
            </h1>
            <p className="mt-8 lg:mt-10 max-w-[46rem] text-lg lg:text-xl text-white/70 leading-relaxed">
              {data.heroSubhead}
            </p>

            <div className="mt-10 lg:mt-12 flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="#glance"
                className="group inline-flex items-center gap-4"
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white transition-transform duration-300 group-hover:scale-110">
                  <ArrowRight className="w-5 h-5" />
                </span>
                <span className="text-base lg:text-lg font-semibold">
                  {data.heroPrimaryCta}
                </span>
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 hover:gap-3 transition-[gap] duration-300 text-white/80 hover:text-white text-sm font-semibold uppercase tracking-widest font-necto_mono"
              >
                <span>{data.heroSecondaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <aside className="col-span-12 lg:col-span-4 order-1 lg:order-2 lg:mt-2">
            <div className="border border-white/20 bg-white/[0.04] backdrop-blur-sm p-6 sm:p-7 flex flex-col gap-6">
              <div>
                <p className="font-necto_mono text-[10px] font-semibold uppercase tracking-[0.22em] text-red-500 mb-3">
                  INDUSTRY SOLUTION
                </p>
                <h2 className="font-apfel_grotezk font-semibold text-3xl sm:text-[32px] tracking-tight leading-[1.05]">
                  {data.name}
                </h2>
                <p className="mt-3 font-necto_mono text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
                  {data.industryCategory}
                </p>
              </div>
              <div className="pt-5 border-t border-white/10 flex flex-col gap-5">
                <div>
                  <p className="font-necto_mono text-[10px] uppercase tracking-[0.22em] text-white/40 mb-1.5">
                    Demand
                  </p>
                  <p className="font-necto_mono text-[11px] uppercase tracking-[0.18em] text-white/85 leading-snug">
                    {data.demandChip}
                  </p>
                </div>
                <div>
                  <p className="font-necto_mono text-[10px] uppercase tracking-[0.22em] text-white/40 mb-1.5">
                    Scale
                  </p>
                  <p className="font-necto_mono text-[11px] uppercase tracking-[0.18em] text-white/85 leading-snug">
                    {data.scaleChip}
                  </p>
                </div>
                <div>
                  <p className="font-necto_mono text-[10px] uppercase tracking-[0.22em] text-white/40 mb-1.5">
                    Footprint
                  </p>
                  <p className="font-necto_mono text-[11px] uppercase tracking-[0.18em] text-white/85 leading-snug">
                    {data.footprintChip}
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div className="hidden sm:flex flex-col items-center gap-2 text-white/40 self-end">
          <span className="font-necto_mono text-[10px] uppercase tracking-[0.2em]">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
