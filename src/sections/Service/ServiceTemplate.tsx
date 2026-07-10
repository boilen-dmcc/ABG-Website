import { useEffect } from "react";
import { Page2Header } from "@/sections/Page2/Page2Header";
import { Page2Footer } from "@/sections/Page2/Page2Footer";
import { Hero } from "./Hero";
import { Stats } from "./Stats";
import { Overview } from "./Overview";
import { Disciplines } from "./Disciplines";
import { Practice } from "./Practice";
import { Standards } from "./Standards";
import { ContactCTA } from "./ContactCTA";
import type { ServiceData } from "./types";

type Props = { data: ServiceData };

export const ServiceTemplate = ({ data }: Props) => {
  useEffect(() => {
    document.title = data.documentTitle;
  }, [data.documentTitle]);

  return (
    <div className="bg-white text-foreground font-neue_haas_grotesk_display antialiased">
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
        <Practice data={data} />
        <Standards standards={data.standards} hseStat={data.hseStat} />
        <ContactCTA data={data} />
      </main>
      <Page2Footer />
    </div>
  );
};
