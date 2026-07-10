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

  return (
    <section
      id="portfolio"
      className="home-section-y relative w-full scroll-mt-[calc(6rem+env(safe-area-inset-top,0px))] border-t border-[#1a1a1a]/5 bg-white"
    >
      <div className="home-container">
        <header className="mb-8 grid grid-cols-1 gap-6 xs:mb-10 lg:mb-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.22em] text-red-600 mb-5">
              {data.spreadsEyebrow}
            </p>
            <h2 className="heading-section leading-[1.05]">
              {data.spreadsHeading}
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-4">
            <p className="max-w-[52ch] text-base lg:text-lg text-foreground/70 leading-relaxed">
              {data.spreadsIntro}
            </p>
          </div>
        </header>

        <nav
          aria-label="Project selector"
          className="mb-10 border-t border-[#1a1a1a]/15 lg:mb-20"
        >
          <div className="overflow-x-auto scrollbar-hide lg:overflow-visible">
            <ol className="flex w-full items-stretch lg:min-h-[6.25rem]">
              {projects.map((p, i) => {
                const isFocused = p.slug === focusedSlug;
                return (
                  <li
                    key={p.slug}
                    className={`flex w-1/2 shrink-0 self-stretch border-r border-[#1a1a1a]/10 transition-colors duration-200 last:border-r-0 motion-reduce:transition-none lg:min-w-0 lg:flex-1 lg:shrink ${
                      isFocused
                        ? "bg-[#1a1a1a]/[0.03]"
                        : "hover:bg-[#1a1a1a]/[0.02]"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => onSelect(p.slug)}
                      aria-pressed={isFocused}
                      className="group relative flex h-full min-h-[5.5rem] w-full flex-col justify-center px-3 py-4 text-left outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-red-600 xs:min-h-[6rem] xs:px-4 lg:min-h-0 lg:px-5 lg:py-6"
                    >
                      <span
                        className={`absolute inset-x-0 top-0 h-[2px] transition-colors duration-200 motion-reduce:transition-none ${
                          isFocused ? "bg-red-600" : "bg-transparent group-hover:bg-red-600/30"
                        }`}
                        aria-hidden
                      />
                      <p className="flex items-baseline gap-2.5 font-necto_mono text-[10px] uppercase tracking-[0.22em] lg:text-[11px]">
                        <span
                          className={`font-bold tabular-nums ${
                            isFocused ? "text-red-600" : "text-foreground"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-foreground/30">/</span>
                        <span className="tabular-nums text-foreground/55">
                          {p.year}
                        </span>
                      </p>
                      <p
                        className={`mt-2 font-apfel_grotezk text-sm font-semibold leading-snug tracking-tight transition-colors duration-200 motion-reduce:transition-none lg:text-base ${
                          isFocused
                            ? "text-foreground"
                            : "text-foreground/65 group-hover:text-foreground"
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
          className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${isEntering
              ? "opacity-0 translate-y-2"
              : "opacity-100 translate-y-0"
            }`}
        >
          <div className="grid grid-cols-1 items-start gap-6 gap-y-8 lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-6 lg:col-start-1 lg:pt-4">
              <div className="flex items-baseline gap-3 mb-5 font-necto_mono text-[11px] lg:text-xs uppercase tracking-[0.22em]">
                <span className="font-bold tabular-nums text-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-foreground/25">/</span>
                <span className="tabular-nums text-foreground/55">
                  {project.year}
                </span>
                <span className="text-foreground/25">/</span>
                <span className="text-red-600 font-semibold">
                  {project.category}
                </span>
              </div>

              <h3 className="font-apfel_grotezk text-2xl font-semibold leading-[1.02] tracking-tight xs:text-3xl sm:text-4xl lg:text-5xl">
                {project.title}
              </h3>

              <p className="mt-3 font-necto_mono text-[11px] lg:text-xs uppercase tracking-[0.2em] text-foreground/55">
                {project.location}
              </p>

              {project.overview ? (
                <p className="mt-6 lg:mt-7 text-base lg:text-lg text-foreground/75 leading-relaxed">
                  {project.overview}
                </p>
              ) : null}

              {project.processPackage ? (
                <div className="mt-8 lg:mt-10">
                  <h4 className="font-apfel_grotezk text-lg font-semibold text-[#121e37] lg:text-xl">
                    {project.processPackage.heading}
                  </h4>
                  <ul className="mt-4 space-y-3">
                    {project.processPackage.items.map((item) => (
                      <li
                        key={item}
                        className="grid grid-cols-[auto_1fr] items-start gap-x-3 text-sm leading-relaxed text-foreground/75 lg:text-base"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600"
                          aria-hidden
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {project.processPackage.closing ? (
                    <p className="mt-6 text-sm leading-relaxed text-foreground/75 lg:text-base">
                      {project.processPackage.closing}
                    </p>
                  ) : null}
                </div>
              ) : null}

              <dl className="mt-8 lg:mt-10 border-t border-[#1a1a1a]/15">
                {project.highlights.map((h) => (
                  <div
                    key={h.label}
                    className="grid grid-cols-1 gap-1 border-b border-[#1a1a1a]/10 py-3.5 xs:grid-cols-[120px_1fr] xs:items-baseline xs:gap-4 lg:grid-cols-[140px_1fr] lg:py-4"
                  >
                    <dt className="font-necto_mono text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/50">
                      {h.label}
                    </dt>
                    <dd className="text-sm lg:text-base text-foreground/85 leading-snug">
                      {h.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="group relative overflow-hidden bg-gray-100">
                <img
                  key={project.slug}
                  src={project.image}
                  alt={project.title}
                  className="block h-auto w-full transition-transform duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02] motion-reduce:transition-none"
                />
                <div className="absolute top-5 left-5 lg:top-6 lg:left-6">
                  <span className="inline-block px-3 py-1.5 bg-white/90 backdrop-blur-sm font-necto_mono text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.2em] text-red-600">
                    {project.category}
                  </span>
                </div>
              </div>
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
