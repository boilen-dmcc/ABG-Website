import { PageSubHeader } from "@/components/PageSubHeader";
import type { ProjectDetailData } from "./types";

type Props = { data: ProjectDetailData };

export const SubHeader = ({ data }: Props) => {
  return (
    <PageSubHeader
      eyebrow={data.heroEyebrow}
      title={data.heroTitle}
      backgroundImage={data.heroBackgroundImage}
    />
  );
};
