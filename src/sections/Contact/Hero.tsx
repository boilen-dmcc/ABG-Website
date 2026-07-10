import { PageSubHeader } from "@/components/PageSubHeader";
import type { ContactData } from "./types";

type Props = { data: ContactData };

export const Hero = ({ data }: Props) => {
  return (
    <PageSubHeader
      eyebrow={data.heroEyebrow}
      title={data.heroTitle}
      backgroundImage={data.heroBackgroundImage}
    />
  );
};
