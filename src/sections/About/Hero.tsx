import { PageSubHeader } from "@/components/PageSubHeader";
import type { AboutData } from "./types";

type Props = { data: AboutData };

export const Hero = ({ data }: Props) => {
  return (
    <PageSubHeader
      eyebrow={data.heroEyebrow}
      title={data.heroTitle}
      backgroundImage={data.heroBackgroundImage}
    />
  );
};
