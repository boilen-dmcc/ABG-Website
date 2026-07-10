import { useEffect } from "react";
import { Page2Header } from "@/sections/Page2/Page2Header";
import { Page2Footer } from "@/sections/Page2/Page2Footer";
import { Hero } from "./Hero";
import { ExecutionModels } from "./ExecutionModels";
import { TurnkeyLifecycle } from "./TurnkeyLifecycle";
import { RefiningUnits } from "./RefiningUnits";
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
    <div className="bg-white text-foreground font-neue_haas_grotesk_display antialiased">
      <Page2Header />
      <main>
        <Hero data={data} />
        {data.executionModels ? (
          <ExecutionModels content={data.executionModels} />
        ) : data.turnkeyLifecycle ? (
          <TurnkeyLifecycle content={data.turnkeyLifecycle} />
        ) : data.refiningUnits ? (
          <RefiningUnits content={data.refiningUnits} />
        ) : (
          <>
            <Glance data={data} />
            <ValueChain data={data} />
            <Delivery data={data} />
            <GroupCompanies data={data} />
            <Standards standards={data.standards} intro={data.standardsIntro} />
            <ContactCTA data={data} />
          </>
        )}
      </main>
      <Page2Footer />
    </div>
  );
};
