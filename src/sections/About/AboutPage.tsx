import { useEffect } from "react";
import { Page2Header } from "@/sections/Page2/Page2Header";
import { Page2Footer } from "@/sections/Page2/Page2Footer";
import { Hero } from "./Hero";
import { Intro } from "./Intro";
import { ValueProposition } from "./ValueProposition";
import { History } from "./History";
import type { AboutData } from "./types";

type Props = { data: AboutData };

export const AboutPage = ({ data }: Props) => {
  useEffect(() => {
    document.title = data.documentTitle;
  }, [data.documentTitle]);

  return (
    <div className="bg-white text-foreground font-neue_haas_grotesk_display antialiased">
      <Page2Header />
      <main>
        <Hero data={data} />
        <Intro data={data} />
        <ValueProposition data={data} />
        <History data={data} />
      </main>
      <Page2Footer />
    </div>
  );
};
