import { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Page2Header } from "@/sections/Page2/Page2Header";
import { Page2Footer } from "@/sections/Page2/Page2Footer";
import { Hero } from "./Hero";
import { Spreads } from "./Spreads";
import { Contact } from "./Contact";
import type { Project, ProjectsPageData } from "./types";

type Props = {
  data: ProjectsPageData;
  projects: Project[];
};

export const ProjectsPage = ({ data, projects }: Props) => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug?: string }>();

  const validSlugs = useMemo(
    () => new Set(projects.map((p) => p.slug)),
    [projects],
  );

  const focusedSlug =
    slug && validSlugs.has(slug) ? slug : projects[0].slug;

  useEffect(() => {
    document.title = data.documentTitle;
  }, [data.documentTitle]);

  useEffect(() => {
    if (!slug || !validSlugs.has(slug)) return;
    const attempt = () => {
      const el = document.getElementById("portfolio");
      if (el) el.scrollIntoView({ behavior: "instant", block: "start" });
    };
    attempt();
    const t = window.setTimeout(attempt, 200);
    return () => window.clearTimeout(t);
  }, [slug, validSlugs]);

  const handleSelect = (nextSlug: string) => {
    if (nextSlug === focusedSlug) return;
    navigate(`/projects/${nextSlug}`);
  };

  return (
    <div className="bg-white text-[#1a1a1a] font-neue_haas_grotesk_display antialiased">
      <Page2Header />
      <main>
        <Hero data={data} projects={projects} />
        <Spreads
          data={data}
          projects={projects}
          focusedSlug={focusedSlug}
          onSelect={handleSelect}
        />
        <Contact data={data} />
      </main>
      <Page2Footer />
    </div>
  );
};
