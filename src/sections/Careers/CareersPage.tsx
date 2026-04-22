import { useEffect } from "react";
import { Page2Header } from "@/sections/Page2/Page2Header";
import { Page2Footer } from "@/sections/Page2/Page2Footer";
import { Hero } from "./Hero";
import { Why } from "./Why";
import { Teams } from "./Teams";
import { OpenRoles } from "./OpenRoles";
import { Process } from "./Process";
import { Contact } from "./Contact";
import type { CareersData } from "./types";

type Props = { data: CareersData };

export const CareersPage = ({ data }: Props) => {
  useEffect(() => {
    document.title = data.documentTitle;
  }, [data.documentTitle]);

  return (
    <div className="bg-white text-[#1a1a1a] font-neue_haas_grotesk_display antialiased">
      <Page2Header />
      <main>
        <Hero data={data} rolesCount={data.roles.length} />
        <Why data={data} />
        <Teams data={data} />
        <OpenRoles data={data} />
        <Process data={data} />
        <Contact data={data} />
      </main>
      <Page2Footer />
    </div>
  );
};
