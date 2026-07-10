import { useEffect } from "react";
import { Page2Header } from "@/sections/Page2/Page2Header";
import { Page2Footer } from "@/sections/Page2/Page2Footer";
import { Hero } from "@/sections/Taqat/Hero";
import { Stats } from "@/sections/Taqat/Stats";
import { Mandate } from "@/sections/Taqat/Mandate";
import { Capabilities } from "@/sections/Taqat/Capabilities";
import { Facility } from "@/sections/Taqat/Facility";
import { Certifications } from "@/sections/Taqat/Certifications";
import { ContactCTA } from "@/sections/Taqat/ContactCTA";

export const CompanyTaqat = () => {
  useEffect(() => {
    document.title = "Taqat Kirkuk — Al Barham Group";
  }, []);

  return (
    <div className="bg-white text-foreground font-neue_haas_grotesk_display antialiased">
      <Page2Header />
      <main>
        <Hero />
        <Stats />
        <Mandate />
        <Capabilities />
        <Facility />
        <Certifications />
        <ContactCTA />
      </main>
      <Page2Footer />
    </div>
  );
};
