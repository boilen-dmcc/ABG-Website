import { ProjectsPage } from "@/sections/Projects/ProjectsPage";
import { projects, projectsPageData } from "@/sections/Projects/data/projects";

export const Projects = () => {
  return <ProjectsPage data={projectsPageData} projects={projects} />;
};
