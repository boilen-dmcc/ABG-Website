import { PageSubHeader } from "@/components/PageSubHeader";
import type { SolutionData } from "./types";

type Props = { data: SolutionData };

export const Hero = ({ data }: Props) => {
  return (
    <PageSubHeader
      eyebrow={data.eyebrow}
      title={data.heroTitle ?? data.name}
      backgroundImage={data.heroBackgroundImage}
    />
  );
};
