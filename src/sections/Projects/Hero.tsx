import { ArrowRight } from "lucide-react";
import type { Project, ProjectsPageData } from "./types";

type Props = {
  data: ProjectsPageData;
  projects: Project[];
};

export const Hero = ({ data, projects }: Props) => {
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

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 min-h-screen flex flex-col pt-36 sm:pt-40 lg:pt-44 pb-8 sm:pb-10 lg:pb-12">
        <div>
          <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.22em] text-white/55">
            {data.heroEyebrow}
          </p>
        </div>

        <div className="flex-1 flex flex-col justify-center py-14 lg:py-20">
          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="col-span-12 lg:col-span-7">
              <h1 className="font-apfel_grotezk font-semibold text-5xl sm:text-6xl lg:text-7xl bp1090:text-8xl leading-[1.02] tracking-tight">
                <span className="block">{data.heroHeadingLine1}</span>
                <span className="block text-white/55">
                  {data.heroHeadingLine2}
                </span>
              </h1>

              <p className="mt-8 lg:mt-10 max-w-[40ch] text-base lg:text-lg text-white/70 leading-relaxed">
                {data.heroSubhead}
              </p>

              <a
                href="#portfolio"
                className="group mt-10 lg:mt-12 inline-flex items-center gap-2 hover:gap-3 transition-[gap] duration-300 text-white/80 hover:text-white text-xs lg:text-sm font-semibold uppercase tracking-[0.22em] font-necto_mono"
              >
                <span>{data.heroSecondaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <aside className="col-span-12 lg:col-span-5 lg:mt-2">
              <dl className="flex flex-col">
                {data.heroMetaRows.map((row, i) => (
                  <div
                    key={row.label}
                    className={`flex items-baseline justify-between gap-6 py-5 lg:py-6 ${
                      i === 0 ? "border-t" : ""
                    } border-b border-white/15`}
                  >
                    <dt className="font-necto_mono text-[10px] lg:text-[11px] uppercase tracking-[0.22em] text-white/45">
                      {row.label}
                    </dt>
                    <dd className="font-apfel_grotezk text-2xl lg:text-3xl font-semibold tracking-tight tabular-nums">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </div>

        <div className="pt-6 lg:pt-8 border-t border-white/15">
          <p className="font-necto_mono text-[10px] lg:text-[11px] uppercase tracking-[0.24em] text-white/40 leading-relaxed">
            {projects.map((project, i) => (
              <span key={project.slug}>
                <span className="text-white/60">{project.title}</span>
                {i < projects.length - 1 && (
                  <span className="mx-3 text-white/25">·</span>
                )}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};
