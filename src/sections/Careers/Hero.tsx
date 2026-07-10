import { PageSubHeader } from "@/components/PageSubHeader";
import type { CareersData } from "./types";

type Props = { data: CareersData };

export const Hero = ({ data }: Props) => {
  return (
    <PageSubHeader
      eyebrow={data.heroEyebrow}
      title={data.heroTitle}
      backgroundImage={data.heroBackgroundImage}
    />
  );
};
