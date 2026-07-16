import { ProjectsPage } from "@/sections/Projects/ProjectsPage";
import { orderedProjects, projectsPageData } from "@/sections/Projects/data/projects";

export const Projects = () => {
  return <ProjectsPage data={projectsPageData} projects={orderedProjects} />;
};
