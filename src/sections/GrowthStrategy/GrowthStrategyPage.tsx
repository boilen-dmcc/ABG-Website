import { useEffect } from "react";
import { PageContentSection } from "@/components/PageContentSection";
import { Page2Header } from "@/sections/Page2/Page2Header";
import { Page2Footer } from "@/sections/Page2/Page2Footer";
import { Hero } from "./Hero";
import type { GrowthStrategyData } from "./types";

type Props = { data: GrowthStrategyData };

export const GrowthStrategyPage = ({ data }: Props) => {
  useEffect(() => {
    document.title = data.documentTitle;
  }, [data.documentTitle]);

  return (
    <div className="bg-white text-foreground font-neue_haas_grotesk_display antialiased">
      <Page2Header />
      <main>
        <Hero data={data} />
        <PageContentSection
          eyebrow={data.contentEyebrow}
          paragraphs={data.contentParagraphs}
          watermark={data.contentWatermark}
          image={data.contentImage}
          imageAlt={data.contentImageAlt}
        />
      </main>
      <Page2Footer />
    </div>
  );
};
