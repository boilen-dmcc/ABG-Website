import { useEffect, useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Page2Header } from "@/sections/Page2/Page2Header";
import { Page2Footer } from "@/sections/Page2/Page2Footer";
import { Hero } from "./Hero";
import { Spreads } from "./Spreads";
import type { Project, ProjectsPageData } from "./types";

type Props = {
  data: ProjectsPageData;
  projects: Project[];
};

type ProjectsLocationState = {
  fromProjectTab?: boolean;
};

function scrollToPortfolio(behavior: ScrollBehavior = "smooth") {
  document.getElementById("portfolio")?.scrollIntoView({
    behavior,
    block: "start",
  });
}

function isPortfolioVisible() {
  const el = document.getElementById("portfolio");
  if (!el) return false;

  const rect = el.getBoundingClientRect();
  const headerOffset = 96;
  return rect.top <= headerOffset + 24 && rect.bottom > headerOffset;
}

export const ProjectsPage = ({ data, projects }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { slug } = useParams<{ slug?: string }>();

  const validSlugs = useMemo(
    () => new Set(projects.map((p) => p.slug)),
    [projects],
  );

  const focusedSlug =
    slug && validSlugs.has(slug) ? slug : projects[0].slug;

  const focusedProject = useMemo(
    () => projects.find((p) => p.slug === focusedSlug) ?? projects[0],
    [projects, focusedSlug],
  );

  useEffect(() => {
    document.title = slug && validSlugs.has(slug)
      ? `${focusedProject.title} — Al Barham Group`
      : data.documentTitle;
  }, [slug, validSlugs, focusedProject.title, data.documentTitle]);

  // External deep link to /projects/:slug — smooth scroll once after paint
  useEffect(() => {
    const state = location.state as ProjectsLocationState | null;

    if (!slug || !validSlugs.has(slug) || state?.fromProjectTab) {
      return;
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToPortfolio("smooth");
      });
    });
  }, [slug, validSlugs, location.state]);

  const showProjectHero = Boolean(slug && validSlugs.has(slug));

  const handleSelect = (nextSlug: string) => {
    if (nextSlug === focusedSlug) return;

    const shouldScroll = !isPortfolioVisible();

    navigate(`/projects/${nextSlug}`, {
      state: { fromProjectTab: true },
    });

    if (!shouldScroll) return;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToPortfolio("smooth");
      });
    });
  };

  return (
    <div className="bg-white text-foreground font-neue_haas_grotesk_display antialiased">
      <Page2Header />
      <main>
        <Hero
          data={data}
          project={showProjectHero ? focusedProject : undefined}
        />
        <Spreads
          data={data}
          projects={projects}
          focusedSlug={focusedSlug}
          onSelect={handleSelect}
        />
      </main>
      <Page2Footer />
    </div>
  );
};
