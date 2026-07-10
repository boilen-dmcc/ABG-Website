import { Page2Header } from "@/sections/Page2/Page2Header";
import { Page2Hero } from "@/sections/Page2/Page2Hero";
import { Page2AboutUs } from "@/sections/Page2/components/Page2AboutUs";
import { Page2GlobalPartners } from "@/sections/Page2/components/Page2GlobalPartners";
import { Page2KeyPartnerships } from "@/sections/Page2/components/Page2KeyPartnerships";
import { Page2Stats } from "@/sections/Page2/components/Page2Stats";
import { Page2Services } from "@/sections/Page2/components/Page2Services";
import { Page2Companies } from "@/sections/Page2/components/Page2Companies";
import { Page2Projects } from "@/sections/Page2/components/Page2Projects";
import { Page2Certificates } from "@/sections/Page2/components/Page2Certificates";
import { Page2Contact } from "@/sections/Page2/components/Page2Contact";
import { Page2CTA } from "@/sections/Page2/components/Page2CTA";
import { Page2Footer } from "@/sections/Page2/Page2Footer";

export const Page2 = () => {
  return (
    <div className="overflow-x-hidden bg-white font-neue_haas_grotesk_display text-foreground antialiased">
      <Page2Header />
      <Page2Hero />
      {/* <Page2AboutUs /> */}
      <Page2Services />
      <Page2Projects />
      <Page2KeyPartnerships />
      <Page2GlobalPartners />

      {/* <Page2Stats /> */}
      {/* <Page2Companies /> */}
      {/* <Page2Certificates /> */}
      {/* <Page2Contact /> */}
      <Page2CTA />
      <Page2Footer />
    </div>
  );
};
