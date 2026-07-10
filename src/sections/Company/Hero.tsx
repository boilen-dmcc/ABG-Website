import { ArrowRight, ChevronDown } from "lucide-react";
import type { CompanyData } from "./types";

type Props = { data: CompanyData };

export const Hero = ({ data }: Props) => {
  return (
    <section className="relative isolate min-h-[100svh] w-full overflow-hidden bg-gray-900">
      <img
        src={data.heroImage}
        alt={data.heroImageAlt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      <div className="home-container relative z-10 flex min-h-[100svh] flex-col justify-end pb-10 pt-[calc(7rem+env(safe-area-inset-top,0px))] xs:pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-[56rem] text-white">
          <p className="mb-5 font-necto_mono text-[11px] font-bold uppercase tracking-[0.2em] text-white/80 xs:mb-6 lg:mb-8 lg:text-xs">
            {data.eyebrow}
          </p>
          <h1 className="hero-title max-w-[16ch] text-white">
            {data.taglinePrefix}
            <span className="text-red-600">{data.taglineAccent}</span>
            {data.taglineSuffix}
          </h1>
          <p className="mt-5 max-w-[42rem] text-base leading-relaxed text-white/85 xs:mt-6 sm:mt-8 sm:text-lg lg:text-xl">
            {data.heroSubhead}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 xs:mt-8 sm:mt-10 sm:gap-6">
            <a href="#mandate" className="group inline-flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-red-600 text-white transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12">
                <ArrowRight className="h-5 w-5" />
              </span>
              <span className="text-base font-semibold lg:text-lg">
                {data.heroPrimaryCta}
              </span>
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 font-necto_mono text-sm font-semibold uppercase tracking-widest text-white/85 transition-[gap] duration-300 hover:gap-3 hover:text-white"
            >
              <span>{data.heroSecondaryCta}</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-necto_mono text-[11px] tracking-[0.2em] text-white/70 xs:mt-12 sm:mt-16 lg:mt-20 lg:text-xs">
          <span>{data.locationChip}</span>
          <span className="h-1 w-1 rounded-full bg-white/40" aria-hidden />
          <span>{data.foundedChip}</span>
          <span className="h-1 w-1 rounded-full bg-white/40" aria-hidden />
          <span>{data.headcountChip}</span>
        </div>
      </div>

      <div className="absolute bottom-6 right-4 z-10 hidden flex-col items-center gap-2 text-white/60 sm:right-8 sm:flex lg:right-12">
        <span className="font-necto_mono text-[10px] uppercase tracking-[0.2em]">
          Scroll
        </span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </div>
    </section>
  );
};
