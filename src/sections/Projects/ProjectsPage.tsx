import { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Page2Header } from "@/sections/Page2/Page2Header";
import { Page2Footer } from "@/sections/Page2/Page2Footer";
import { Hero } from "./Hero";
import { Stage } from "./Stage";
import { Rail } from "./Rail";
import { Index } from "./Index";
import { Contact } from "./Contact";
import type { Project, ProjectsPageData } from "./types";

type Props = {
  data: ProjectsPageData;
  projects: Project[];
};

export const ProjectsPage = ({ data, projects }: Props) => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug?: string }>();

  const projectBySlug = useMemo(() => {
    const map = new Map<string, Project>();
    projects.forEach((p) => map.set(p.slug, p));
    return map;
  }, [projects]);

  const fallbackSlug = projects[0].slug;
  const focusedSlug =
    slug && projectBySlug.has(slug) ? slug : fallbackSlug;
  const focusedProject = projectBySlug.get(focusedSlug) ?? projects[0];

  useEffect(() => {
    document.title = data.documentTitle;
  }, [data.documentTitle]);

  const handleSelect = (nextSlug: string) => {
    if (nextSlug === focusedSlug) return;
    navigate(`/projects/${nextSlug}`);
  };

  const handleRowSelect = (nextSlug: string) => {
    if (nextSlug !== focusedSlug) {
      navigate(`/projects/${nextSlug}`);
    }
    const el = document.getElementById("portfolio");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-white text-[#1a1a1a] font-neue_haas_grotesk_display antialiased">
      <Page2Header />
      <main>
        <Hero data={data} projects={projects} />

        <section
          id="portfolio"
          className="relative w-full bg-white py-20 sm:py-24 lg:py-28 border-t border-[#1a1a1a]/5 scroll-mt-24"
        >
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="mb-10 lg:mb-12 flex items-end justify-between gap-6 flex-wrap">
              <div>
                <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.22em] text-red-600 mb-4">
                  IN FOCUS
                </p>
                <h2 className="font-apfel_grotezk font-semibold text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
                  {focusedProject.title}
                </h2>
              </div>
              <p className="font-necto_mono text-[10px] lg:text-[11px] uppercase tracking-[0.22em] text-[#1a1a1a]/50 tabular-nums">
                {String(
                  projects.findIndex((p) => p.slug === focusedSlug) + 1,
                ).padStart(2, "0")}
                <span className="mx-2 text-[#1a1a1a]/25">/</span>
                {String(projects.length).padStart(2, "0")}
              </p>
            </div>

            <Stage project={focusedProject} />
            <Rail
              projects={projects}
              focusedSlug={focusedSlug}
              onSelect={handleSelect}
            />
          </div>
        </section>

        <Index
          data={data}
          projects={projects}
          onRowSelect={handleRowSelect}
        />
        <Contact data={data} />
      </main>
      <Page2Footer />
    </div>
  );
};
