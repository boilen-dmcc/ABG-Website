import { ProjectsPage } from "@/sections/Projects/ProjectsPage";
import { projects, projectsPageData } from "@/sections/Projects/data/projects";

export const Projects = () => (
  <ProjectsPage data={projectsPageData} projects={projects} />
);
