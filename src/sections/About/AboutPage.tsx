import { useEffect } from "react";
import { Page2Header } from "@/sections/Page2/Page2Header";
import { Page2Footer } from "@/sections/Page2/Page2Footer";
import { Hero } from "./Hero";
import { Manifest } from "./Manifest";
import { Origin } from "./Origin";
import { Timeline } from "./Timeline";
import { TheGroup } from "./TheGroup";
import { Reach } from "./Reach";
import { Contact } from "./Contact";
import type { AboutData } from "./types";

type Props = { data: AboutData };

export const AboutPage = ({ data }: Props) => {
  useEffect(() => {
    document.title = data.documentTitle;
  }, [data.documentTitle]);

  return (
    <div className="bg-white text-[#1a1a1a] font-neue_haas_grotesk_display antialiased">
      <Page2Header />
      <main>
        <Hero data={data} />
        <Manifest data={data} />
        <Origin data={data} />
        <Timeline data={data} />
        <TheGroup data={data} />
        <Reach data={data} />
        <Contact data={data} />
      </main>
      <Page2Footer />
    </div>
  );
};
