import { useEffect } from "react";
import { Page2Header } from "@/sections/Page2/Page2Header";
import { Page2Footer } from "@/sections/Page2/Page2Footer";
import { Hero } from "./Hero";
import { Stats } from "./Stats";
import { Overview } from "./Overview";
import { Disciplines } from "./Disciplines";
import { Methodology } from "./Methodology";
import { Standards } from "./Standards";
import { ContactCTA } from "./ContactCTA";
import type { ServiceData } from "./types";

type Props = { data: ServiceData };

export const ServiceTemplate = ({ data }: Props) => {
  useEffect(() => {
    document.title = data.documentTitle;
  }, [data.documentTitle]);

  return (
    <div className="bg-white text-[#1a1a1a] font-neue_haas_grotesk_display antialiased">
      <Page2Header />
      <main>
        <Hero data={data} />
        <Stats stats={data.stats} />
        <Overview data={data} />
        <Disciplines
          heading={data.disciplinesHeading}
          subhead={data.disciplinesSubhead}
          disciplines={data.disciplines}
        />
        <Methodology data={data} />
        <Standards standards={data.standards} hseStat={data.hseStat} />
        <ContactCTA data={data} />
      </main>
      <Page2Footer />
    </div>
  );
};
