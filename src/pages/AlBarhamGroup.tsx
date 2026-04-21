import { useEffect } from "react";
import { Page2Header } from "@/sections/Page2/Page2Header";
import { Page2Footer } from "@/sections/Page2/Page2Footer";
import { Hero } from "@/sections/AlBarhamGroup/Hero";
import { Positioning } from "@/sections/AlBarhamGroup/Positioning";
import { Story } from "@/sections/AlBarhamGroup/Story";
import { Sectors } from "@/sections/AlBarhamGroup/Sectors";
import { Portfolio } from "@/sections/AlBarhamGroup/Portfolio";
import { Footprint } from "@/sections/AlBarhamGroup/Footprint";
import { Timeline } from "@/sections/AlBarhamGroup/Timeline";
import { Leadership } from "@/sections/AlBarhamGroup/Leadership";
import { Principles } from "@/sections/AlBarhamGroup/Principles";
import { ContactCTA } from "@/sections/AlBarhamGroup/ContactCTA";

export const AlBarhamGroup = () => {
  useEffect(() => {
    document.title = "Al Barham Group — An Iraqi holding";
  }, []);

  return (
    <div className="bg-white text-[#1a1a1a] font-neue_haas_grotesk_display antialiased">
      <Page2Header />
      <main>
        <Hero />
        <Positioning />
        <Story />
        <Sectors />
        <Portfolio />
        <Footprint />
        <Timeline />
        <Leadership />
        <Principles />
        <ContactCTA />
      </main>
      <Page2Footer />
    </div>
  );
};
