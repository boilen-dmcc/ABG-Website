import { useEffect } from "react";
import { Page2Header } from "@/sections/Page2/Page2Header";
import { Page2Footer } from "@/sections/Page2/Page2Footer";
import { Hero } from "./Hero";
import { Stats } from "./Stats";
import { Mandate } from "./Mandate";
import { Capabilities } from "./Capabilities";
import { Facility } from "./Facility";
import { Certifications } from "./Certifications";
import { ContactCTA } from "./ContactCTA";
import type { CompanyData } from "./types";

type Props = { data: CompanyData };

export const CompanyTemplate = ({ data }: Props) => {
  useEffect(() => {
    document.title = data.documentTitle;
  }, [data.documentTitle]);

  return (
    <div className="bg-white text-foreground font-neue_haas_grotesk_display antialiased">
      <Page2Header />
      <main>
        <Hero data={data} />
        <Stats stats={data.stats} />
        <Mandate data={data} />
        <Capabilities
          heading={data.capabilitiesHeading}
          subhead={data.capabilitiesSubhead}
          capabilities={data.capabilities}
        />
        <Facility data={data} />
        <Certifications
          certifications={data.certifications}
          hseStat={data.hseStat}
        />
        <ContactCTA data={data} />
      </main>
      <Page2Footer />
    </div>
  );
};
