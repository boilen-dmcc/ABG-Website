import { PageSubHeader } from "@/components/PageSubHeader";
import type { Project, ProjectsPageData } from "./types";

type Props = {
  data: ProjectsPageData;
  project?: Project;
};

export const Hero = ({ data, project }: Props) => {
  return (
    <PageSubHeader
      eyebrow={project ? "PROJECT · AL BARHAM GROUP" : data.heroEyebrow}
      title={project ? project.title : data.heroTitle}
      backgroundImage={project?.heroImage ?? project?.image ?? data.heroBackgroundImage}
    />
  );
};
