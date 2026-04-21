import { ArrowRight, ChevronDown } from "lucide-react";
import type { CompanyData } from "./types";

type Props = { data: CompanyData };

export const Hero = ({ data }: Props) => {
  return (
    <section className="relative w-full min-h-screen bg-gray-900 overflow-hidden isolate">
      <img
        src={data.heroImage}
        alt={data.heroImageAlt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 min-h-screen flex flex-col justify-end pt-32 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-[56rem] text-white">
          <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-white/80 mb-6 lg:mb-8">
            {data.eyebrow}
          </p>
          <h1 className="font-apfel_grotezk font-bold text-6xl sm:text-7xl lg:text-8xl bp1090:text-9xl leading-[1.02] tracking-tight">
            {data.taglinePrefix}
            <span className="text-red-600">{data.taglineAccent}</span>
            {data.taglineSuffix}
          </h1>
          <p className="mt-6 sm:mt-8 max-w-[42rem] text-lg lg:text-xl text-white/85 leading-relaxed">
            {data.heroSubhead}
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="#mandate"
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
              className="group inline-flex items-center gap-2 hover:gap-3 transition-[gap] duration-300 text-white/85 hover:text-white text-sm font-semibold uppercase tracking-widest font-necto_mono"
            >
              <span>{data.heroSecondaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20 flex flex-wrap items-center gap-x-6 gap-y-3 font-necto_mono text-[11px] lg:text-xs tracking-[0.2em] text-white/70">
          <span>{data.locationChip}</span>
          <span className="w-1 h-1 rounded-full bg-white/40" aria-hidden />
          <span>{data.foundedChip}</span>
          <span className="w-1 h-1 rounded-full bg-white/40" aria-hidden />
          <span>{data.headcountChip}</span>
        </div>
      </div>

      <div className="absolute bottom-6 right-4 sm:right-8 lg:right-12 z-10 hidden sm:flex flex-col items-center gap-2 text-white/60">
        <span className="font-necto_mono text-[10px] uppercase tracking-[0.2em]">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
};
