import { useEffect } from "react";
import { Page2Header } from "@/sections/Page2/Page2Header";
import { Page2Footer } from "@/sections/Page2/Page2Footer";
import { SubHeader } from "./SubHeader";
import { Hero } from "./Hero";
import type { ProjectDetailData } from "./types";

type Props = { data: ProjectDetailData };

export const ProjectDetailPage = ({ data }: Props) => {
  useEffect(() => {
    document.title = data.documentTitle;
  }, [data.documentTitle]);

  return (
    <div className="bg-white text-foreground font-neue_haas_grotesk_display antialiased">
      <Page2Header />
      <main>
        <SubHeader data={data} />
        <Hero data={data} />
      </main>
      <Page2Footer />
    </div>
  );
};
