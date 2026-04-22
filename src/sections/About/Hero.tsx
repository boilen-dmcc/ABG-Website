import { ArrowRight } from "lucide-react";
import type { AboutData } from "./types";

type Props = { data: AboutData };

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
        <div className="flex items-start">
          <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.22em] text-white/55">
            {data.heroEyebrow}
          </p>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center py-16 lg:py-24">
          <h1 className="font-apfel_grotezk font-semibold text-5xl sm:text-6xl lg:text-7xl bp1090:text-8xl leading-[1.02] tracking-tight max-w-[22ch]">
            <span className="block">{data.heroStatementLine1}</span>
            <span className="block text-white/55">{data.heroStatementLine2}</span>
          </h1>

          <p className="mt-10 lg:mt-12 max-w-[56ch] text-base lg:text-lg text-white/70 leading-relaxed">
            {data.heroSubhead}
          </p>

          <a
            href="#contact"
            className="group mt-10 lg:mt-12 inline-flex items-center gap-2 hover:gap-3 transition-[gap] duration-300 text-white/80 hover:text-white text-xs lg:text-sm font-semibold uppercase tracking-[0.22em] font-necto_mono"
          >
            <span>{data.heroSecondaryCta}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="pt-6 lg:pt-8 border-t border-white/15">
          <ul className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-6">
            {data.heroFooterLabels.map((label, i) => (
              <li
                key={label}
                className="font-necto_mono text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.24em] text-white/55 flex items-center gap-6"
              >
                <span>{label}</span>
                {i < data.heroFooterLabels.length - 1 && (
                  <span className="hidden sm:inline text-white/25">·</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
