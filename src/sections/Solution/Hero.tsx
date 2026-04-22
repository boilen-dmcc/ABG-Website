import { ArrowRight } from "lucide-react";
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

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 min-h-screen flex flex-col pt-36 sm:pt-40 lg:pt-44 pb-10 sm:pb-14 lg:pb-16">
        <div className="grid grid-cols-12 gap-4 lg:gap-8 mb-14 sm:mb-20 lg:mb-24 pb-6 border-b border-white/10">
          <div className="col-span-12 lg:col-span-5">
            <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-white/60">
              {data.eyebrow}
            </p>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:text-right flex flex-col lg:items-end gap-1.5">
            <p className="font-necto_mono text-[10px] lg:text-[11px] uppercase tracking-[0.22em] text-white/40">
              Industry Coverage
            </p>
            <p className="font-necto_mono text-[11px] lg:text-xs font-semibold uppercase tracking-[0.18em] text-red-500">
              {data.industryCategory}
            </p>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <h1 className="font-apfel_grotezk font-bold text-6xl sm:text-7xl lg:text-8xl bp1090:text-9xl leading-[0.9] tracking-tight max-w-[18ch]">
            {data.taglinePrefix}
            <span className="text-red-600">{data.taglineAccent}</span>
            {data.taglineSuffix}
          </h1>

          <div className="mt-12 lg:mt-16 grid grid-cols-12 gap-6 lg:gap-12 items-end">
            <p className="col-span-12 lg:col-span-7 text-lg lg:text-xl text-white/70 leading-relaxed">
              {data.heroSubhead}
            </p>
            <div className="col-span-12 lg:col-span-5 flex flex-wrap items-center gap-4 sm:gap-6 lg:justify-end">
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
        </div>

        <div className="mt-14 sm:mt-20 lg:mt-24 pt-7 lg:pt-9 border-t border-white/15 grid grid-cols-1 sm:grid-cols-[auto_1fr_1fr_1fr] gap-8 sm:gap-10 lg:gap-16 items-start">
          <div className="sm:pr-8 lg:pr-12 sm:border-r sm:border-white/10">
            <p className="font-necto_mono text-[10px] lg:text-[11px] uppercase tracking-[0.22em] text-white/40 mb-3">
              Solution
            </p>
            <p className="font-apfel_grotezk text-xl lg:text-[22px] font-semibold tracking-tight leading-snug">
              {data.name}
            </p>
          </div>
          <div>
            <p className="font-necto_mono text-[10px] lg:text-[11px] uppercase tracking-[0.22em] text-white/40 mb-3">
              Demand
            </p>
            <p className="font-apfel_grotezk text-base lg:text-lg font-semibold tracking-tight leading-snug">
              {data.demandChip}
            </p>
          </div>
          <div>
            <p className="font-necto_mono text-[10px] lg:text-[11px] uppercase tracking-[0.22em] text-white/40 mb-3">
              Scale
            </p>
            <p className="font-apfel_grotezk text-base lg:text-lg font-semibold tracking-tight leading-snug">
              {data.scaleChip}
            </p>
          </div>
          <div>
            <p className="font-necto_mono text-[10px] lg:text-[11px] uppercase tracking-[0.22em] text-white/40 mb-3">
              Footprint
            </p>
            <p className="font-apfel_grotezk text-base lg:text-lg font-semibold tracking-tight leading-snug">
              {data.footprintChip}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
