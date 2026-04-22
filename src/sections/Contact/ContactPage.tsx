import { useEffect } from "react";
import { Page2Header } from "@/sections/Page2/Page2Header";
import { Page2Footer } from "@/sections/Page2/Page2Footer";
import { Hero } from "./Hero";
import { Channels } from "./Channels";
import { Offices } from "./Offices";
import { Response } from "./Response";
import { CrossLinks } from "./CrossLinks";
import type { ContactData } from "./types";

type Props = { data: ContactData };

export const ContactPage = ({ data }: Props) => {
  useEffect(() => {
    document.title = data.documentTitle;
  }, [data.documentTitle]);

  return (
    <div className="bg-white text-[#1a1a1a] font-neue_haas_grotesk_display antialiased">
      <Page2Header />
      <main>
        <Hero data={data} />
        <Channels data={data} />
        <Offices data={data} />
        <Response data={data} />
        <CrossLinks data={data} />
      </main>
      <Page2Footer />
    </div>
  );
};
