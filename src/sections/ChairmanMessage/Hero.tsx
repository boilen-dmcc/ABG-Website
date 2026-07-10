import { PageSubHeader } from "@/components/PageSubHeader";
import type { ChairmansMessageData } from "./types";

type Props = { data: ChairmansMessageData };

export const Hero = ({ data }: Props) => {
  return (
    <PageSubHeader
      eyebrow={data.heroEyebrow}
      title={data.heroTitle}
      backgroundImage={data.heroBackgroundImage}
    />
  );
};
