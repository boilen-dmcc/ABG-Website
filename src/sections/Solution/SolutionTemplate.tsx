import { useEffect } from "react";
import { Page2Header } from "@/sections/Page2/Page2Header";
import { Page2Footer } from "@/sections/Page2/Page2Footer";
import { Hero } from "./Hero";
import { Glance } from "./Glance";
import { ValueChain } from "./ValueChain";
import { Delivery } from "./Delivery";
import { GroupCompanies } from "./GroupCompanies";
import { Standards } from "./Standards";
import { ContactCTA } from "./ContactCTA";
import type { SolutionData } from "./types";

type Props = { data: SolutionData };

export const SolutionTemplate = ({ data }: Props) => {
  useEffect(() => {
    document.title = data.documentTitle;
  }, [data.documentTitle]);

  return (
    <div className="bg-white text-[#1a1a1a] font-neue_haas_grotesk_display antialiased">
      <Page2Header />
      <main>
        <Hero data={data} />
        <Glance data={data} />
        <ValueChain data={data} />
        <Delivery data={data} />
        <GroupCompanies data={data} />
        <Standards standards={data.standards} intro={data.standardsIntro} />
        <ContactCTA data={data} />
      </main>
      <Page2Footer />
    </div>
  );
};
