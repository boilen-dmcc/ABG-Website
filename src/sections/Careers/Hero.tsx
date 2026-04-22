import { ArrowRight } from "lucide-react";
import type { CareersData } from "./types";

type Props = {
  data: CareersData;
  rolesCount: number;
};

export const Hero = ({ data, rolesCount }: Props) => {
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

        <div className="flex-1 flex flex-col justify-center py-10 lg:py-16">
          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="col-span-12 lg:col-span-7">
              <h1 className="font-apfel_grotezk font-semibold text-5xl sm:text-6xl lg:text-7xl bp1090:text-8xl leading-[1.02] tracking-tight">
                <span className="block">{data.heroHeadingLine1}</span>
                <span className="block">
                  {data.heroHeadingLine2Prefix}
                  <span className="text-red-600">
                    {data.heroHeadingLine2Accent}
                  </span>
                  {data.heroHeadingLine2Suffix}
                </span>
              </h1>
            </div>

            <aside className="col-span-12 lg:col-span-5 flex lg:justify-end">
              <div className="relative">
                <span
                  className="block font-apfel_grotezk font-semibold text-[8rem] sm:text-[10rem] lg:text-[12rem] leading-[0.82] tracking-tight tabular-nums"
                >
                  {String(rolesCount).padStart(2, "0")}
                </span>
                <p className="mt-4 font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.24em] text-white/55">
                  ROLES OPEN
                </p>
              </div>
            </aside>
          </div>
        </div>

        <div className="pt-8 lg:pt-10 border-t border-white/15 grid grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="col-span-12 lg:col-span-7">
            <p className="max-w-[40ch] text-base lg:text-lg text-white/70 leading-relaxed">
              {data.heroSubhead}
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:flex lg:justify-end">
            <a
              href="#roles"
              className="group inline-flex items-center gap-4"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white transition-transform duration-300 group-hover:scale-110">
                <ArrowRight className="w-5 h-5" />
              </span>
              <span className="text-base lg:text-lg font-semibold">
                {data.heroPrimaryCta}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
