import type { Project } from "./types";

type Props = {
  projects: Project[];
  focusedSlug: string;
  onSelect: (slug: string) => void;
};

export const Rail = ({ projects, focusedSlug, onSelect }: Props) => {
  return (
    <div className="mt-8 lg:mt-10">
      <div
        className="overflow-x-auto scrollbar-hide"
        style={{ scrollSnapType: "x mandatory" }}
      >
        <div className="flex gap-4 lg:gap-5 pb-2">
          {projects.map((project, i) => {
            const isFocused = project.slug === focusedSlug;
            return (
              <button
                key={project.slug}
                type="button"
                onClick={() => onSelect(project.slug)}
                style={{ scrollSnapAlign: "start" }}
                className={`flex-shrink-0 w-[200px] lg:w-[220px] text-left group transition-all duration-300 motion-reduce:transition-none ${
                  isFocused ? "opacity-100" : "opacity-70 hover:opacity-95"
                }`}
                aria-label={`Focus ${project.title}`}
                aria-pressed={isFocused}
              >
                <div
                  className={`relative aspect-[4/3] overflow-hidden bg-gray-100 border-t-2 transition-colors duration-300 motion-reduce:transition-none ${
                    isFocused ? "border-red-600" : "border-transparent"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-500 motion-reduce:transition-none ${
                      isFocused ? "scale-[1.03]" : "scale-100 group-hover:scale-[1.02]"
                    }`}
                  />
                </div>
                <div className="mt-3">
                  <p
                    className={`font-apfel_grotezk font-semibold text-base lg:text-lg leading-tight tracking-tight transition-colors duration-200 motion-reduce:transition-none ${
                      isFocused ? "text-[#1a1a1a]" : "text-[#1a1a1a]/80"
                    }`}
                  >
                    <span className="font-necto_mono text-[10px] tabular-nums text-[#1a1a1a]/40 mr-2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {project.title}
                  </p>
                  <p className="mt-1 font-necto_mono text-[10px] lg:text-[11px] uppercase tracking-[0.2em] text-[#1a1a1a]/55">
                    {project.category}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};
