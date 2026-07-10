import { useEffect } from "react";
import { Page2Header } from "@/sections/Page2/Page2Header";
import { Page2Footer } from "@/sections/Page2/Page2Footer";
import { Hero } from "./Hero";
import { OpenRoles } from "./OpenRoles";
import type { CareersData } from "./types";

type Props = { data: CareersData };

export const CareersPage = ({ data }: Props) => {
  useEffect(() => {
    document.title = data.documentTitle;
  }, [data.documentTitle]);

  return (
    <div className="bg-white text-foreground font-neue_haas_grotesk_display antialiased">
      <Page2Header />
      <main>
        <Hero data={data} />
        <OpenRoles data={data} />
      </main>
      <Page2Footer />
    </div>
  );
};
