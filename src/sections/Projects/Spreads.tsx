import { useEffect, useMemo, useRef, useState } from "react";
import type { Project, ProjectsPageData } from "./types";

type Props = {
  data: ProjectsPageData;
  projects: Project[];
  focusedSlug: string;
  onSelect: (slug: string) => void;
};

export const Spreads = ({ data, projects, focusedSlug, onSelect }: Props) => {
  const projectIndex = useMemo(() => {
    const map = new Map<string, { project: Project; index: number }>();
    projects.forEach((p, i) => map.set(p.slug, { project: p, index: i }));
    return map;
  }, [projects]);

  const current = projectIndex.get(focusedSlug) ?? {
    project: projects[0],
    index: 0,
  };

  const [displayed, setDisplayed] = useState(current);
  const [isEntering, setIsEntering] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (displayed.project.slug === current.project.slug) return;
    setIsEntering(true);
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setDisplayed(current);
      setIsEntering(false);
    }, 220);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [current, displayed.project.slug]);

  const { project, index } = displayed;
  const flipped = index % 2 === 1;

  return (
    <section
      id="portfolio"
      className="relative w-full bg-white py-20 sm:py-24 lg:py-28 border-t border-[#1a1a1a]/5 scroll-mt-24"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <header className="grid grid-cols-12 gap-8 lg:gap-12 mb-10 lg:mb-12">
          <div className="col-span-12 lg:col-span-5">
            <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.22em] text-red-600 mb-5">
              {data.spreadsEyebrow}
            </p>
            <h2 className="font-apfel_grotezk font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              {data.spreadsHeading}
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 lg:pt-4">
            <p className="max-w-[52ch] text-base lg:text-lg text-[#1a1a1a]/70 leading-relaxed">
              {data.spreadsIntro}
            </p>
          </div>
        </header>

        <nav
          aria-label="Project selector"
          className="border-t border-[#1a1a1a]/15 mb-14 lg:mb-20"
        >
          <div className="overflow-x-auto scrollbar-hide">
            <ol className="flex min-w-full">
              {projects.map((p, i) => {
                const isFocused = p.slug === focusedSlug;
                return (
                  <li
                    key={p.slug}
                    className="flex-1 min-w-[170px] lg:min-w-0 border-r border-[#1a1a1a]/10 last:border-r-0"
                  >
                    <button
                      type="button"
                      onClick={() => onSelect(p.slug)}
                      aria-pressed={isFocused}
                      className={`group relative w-full text-left py-5 lg:py-6 px-4 lg:px-5 transition-colors duration-200 motion-reduce:transition-none ${
                        isFocused
                          ? "bg-[#1a1a1a]/[0.03]"
                          : "hover:bg-[#1a1a1a]/[0.02]"
                      }`}
                    >
                      <span
                        className={`absolute top-0 left-0 right-0 h-[2px] transition-colors duration-200 motion-reduce:transition-none ${
                          isFocused ? "bg-red-600" : "bg-transparent"
                        }`}
                        aria-hidden
                      />
                      <p className="flex items-baseline gap-2.5 font-necto_mono text-[10px] lg:text-[11px] uppercase tracking-[0.22em]">
                        <span
                          className={`font-bold tabular-nums ${
                            isFocused ? "text-red-600" : "text-[#1a1a1a]"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[#1a1a1a]/30">/</span>
                        <span className="tabular-nums text-[#1a1a1a]/55">
                          {p.year}
                        </span>
                      </p>
                      <p
                        className={`mt-2 font-apfel_grotezk text-sm lg:text-base font-semibold leading-snug tracking-tight transition-colors duration-200 motion-reduce:transition-none ${
                          isFocused ? "text-[#1a1a1a]" : "text-[#1a1a1a]/65 group-hover:text-[#1a1a1a]"
                        }`}
                      >
                        {p.title}
                      </p>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </nav>

        <article
          className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
            isEntering
              ? "opacity-0 translate-y-2"
              : "opacity-100 translate-y-0"
          }`}
        >
          <div className="grid grid-cols-12 gap-y-8 gap-x-6 lg:gap-x-12 items-start">
            <div
              className={`col-span-12 lg:col-span-7 ${
                flipped ? "lg:col-start-6" : "lg:col-start-1"
              }`}
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-gray-100 group">
                <img
                  key={project.slug}
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02] motion-reduce:transition-none"
                />
                <div className="absolute top-5 left-5 lg:top-6 lg:left-6">
                  <span className="inline-block px-3 py-1.5 bg-white/90 backdrop-blur-sm font-necto_mono text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.2em] text-red-600">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>

            <div
              className={`col-span-12 lg:col-span-5 lg:pt-4 ${
                flipped ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-8"
              }`}
            >
              <div className="flex items-baseline gap-3 mb-5 font-necto_mono text-[11px] lg:text-xs uppercase tracking-[0.22em]">
                <span className="font-bold tabular-nums text-[#1a1a1a]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[#1a1a1a]/25">/</span>
                <span className="tabular-nums text-[#1a1a1a]/55">
                  {project.year}
                </span>
                <span className="text-[#1a1a1a]/25">/</span>
                <span className="text-red-600 font-semibold">
                  {project.category}
                </span>
              </div>

              <h3 className="font-apfel_grotezk font-semibold text-3xl sm:text-4xl lg:text-5xl leading-[1.02] tracking-tight">
                {project.title}
              </h3>

              <p className="mt-3 font-necto_mono text-[11px] lg:text-xs uppercase tracking-[0.2em] text-[#1a1a1a]/55">
                {project.location}
              </p>

              <p className="mt-6 lg:mt-7 text-base lg:text-lg text-[#1a1a1a]/75 leading-relaxed max-w-[48ch]">
                {project.overview}
              </p>

              <dl className="mt-8 lg:mt-10 border-t border-[#1a1a1a]/15">
                {project.highlights.map((h) => (
                  <div
                    key={h.label}
                    className="py-3.5 lg:py-4 border-b border-[#1a1a1a]/10 grid grid-cols-[120px_1fr] lg:grid-cols-[140px_1fr] gap-4 items-baseline"
                  >
                    <dt className="font-necto_mono text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1a1a1a]/50">
                      {h.label}
                    </dt>
                    <dd className="text-sm lg:text-base text-[#1a1a1a]/85 leading-snug">
                      {h.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </article>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};
