import { PageSubHeader } from "@/components/PageSubHeader";
import type { GrowthStrategyData } from "./types";

type Props = { data: GrowthStrategyData };

export const Hero = ({ data }: Props) => {
  return (
    <PageSubHeader
      eyebrow={data.heroEyebrow}
      title={data.heroTitle}
      backgroundImage={data.heroBackgroundImage}
    />
  );
};
