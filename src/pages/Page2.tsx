import { Page2Header } from "@/sections/Page2/Page2Header";
import { Page2Hero } from "@/sections/Page2/Page2Hero";
import { Page2AboutUs } from "@/sections/Page2/components/Page2AboutUs";
import { Page2Stats } from "@/sections/Page2/components/Page2Stats";
import { Page2Services } from "@/sections/Page2/components/Page2Services";
import { Page2Companies } from "@/sections/Page2/components/Page2Companies";
import { Page2Projects } from "@/sections/Page2/components/Page2Projects";
import { Page2Contact } from "@/sections/Page2/components/Page2Contact";
import { Page2CTA } from "@/sections/Page2/components/Page2CTA";
import { Page2Footer } from "@/sections/Page2/Page2Footer";

export const Page2 = () => {
  return (
    <div className="text-gray-700 text-xl not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[0.0208px] leading-[30px] list-outside list-disc max-w-full pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-neue_haas_grotesk_display">
      <Page2Header />
      <Page2Hero />
      <Page2AboutUs />
      <Page2Stats />
      <Page2Services />
      <Page2Companies />
      <Page2Projects />
      <Page2Contact />
      <Page2CTA />
      <Page2Footer />
    </div>
  );
};
