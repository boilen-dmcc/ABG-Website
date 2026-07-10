import { useEffect } from "react";
import { PageSubHeader } from "@/components/PageSubHeader";
import { Page2Header } from "@/sections/Page2/Page2Header";
import { Page2Footer } from "@/sections/Page2/Page2Footer";
import { Page2Certificates } from "@/sections/Page2/components/Page2Certificates";

export const Certifications = () => {
  useEffect(() => {
    document.title = "Certifications — Al Barham Group";
  }, []);

  return (
    <div className="bg-white text-foreground font-neue_haas_grotesk_display antialiased">
      <Page2Header />
      <main>
        <PageSubHeader
          eyebrow="COMPANY · AL BARHAM GROUP"
          title="Certifications"
          backgroundImage="/certification-hero.webp"
        />
        <Page2Certificates />
      </main>
      <Page2Footer />
    </div>
  );
};
