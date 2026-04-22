import type { Project, ProjectsPageData } from "./types";

type Props = {
  data: ProjectsPageData;
  projects: Project[];
  onRowSelect: (slug: string) => void;
};

export const Index = ({ data, projects, onRowSelect }: Props) => {
  return (
    <section className="relative w-full bg-gray-900 text-white py-20 sm:py-28 lg:py-32 border-t border-white/5">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "80px 100%",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 mb-12 lg:mb-16">
          <div className="col-span-12 lg:col-span-5">
            <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.22em] text-red-500 mb-5">
              {data.indexEyebrow}
            </p>
            <h2 className="font-apfel_grotezk font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              {data.indexHeading}
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 lg:pt-4">
            <p className="max-w-[52ch] text-base lg:text-lg text-white/70 leading-relaxed">
              {data.indexIntro}
            </p>
          </div>
        </div>

        <div className="border-t-2 border-white/90">
          <div className="hidden lg:grid grid-cols-[60px_minmax(0,2.4fr)_minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,0.7fr)] gap-6 py-4 font-necto_mono text-[10px] uppercase tracking-[0.22em] text-white/40 border-b border-white/15">
            <span>No.</span>
            <span>Project</span>
            <span>Sector</span>
            <span>Location</span>
            <span className="text-right">Value</span>
          </div>

          <ul>
            {projects.map((project, i) => (
              <li key={project.slug} className="border-b border-white/10">
                <button
                  type="button"
                  onClick={() => onRowSelect(project.slug)}
                  className="w-full text-left group py-6 lg:py-7 grid grid-cols-12 lg:grid-cols-[60px_minmax(0,2.4fr)_minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,0.7fr)] gap-x-6 gap-y-2 items-baseline hover:bg-white/5 transition-colors duration-200 motion-reduce:transition-none px-2 -mx-2"
                  aria-label={`Focus ${project.title} on stage`}
                >
                  <span className="col-span-2 lg:col-span-1 font-necto_mono text-[11px] tabular-nums text-white/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="col-span-10 lg:col-span-1 font-apfel_grotezk text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight tracking-tight group-hover:text-red-400 transition-colors duration-200 motion-reduce:transition-none">
                    {project.title}
                  </span>
                  <span className="col-span-6 lg:col-span-1 font-necto_mono text-[11px] lg:text-xs uppercase tracking-[0.18em] text-white/65">
                    {project.category}
                  </span>
                  <span className="col-span-6 lg:col-span-1 text-sm lg:text-base text-white/75">
                    {project.location}
                  </span>
                  <span className="col-span-12 lg:col-span-1 lg:text-right font-apfel_grotezk text-lg lg:text-xl font-semibold tabular-nums text-white">
                    {project.value}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
