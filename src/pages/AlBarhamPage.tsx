import { AlBarhamHeader } from "@/sections/AlBarham/AlBarhamHeader";
import { AlBarhamHero } from "@/sections/AlBarham/AlBarhamHero";
import { AlBarhamAbout } from "@/sections/AlBarham/AlBarhamAbout";
import { AlBarhamStats } from "@/sections/AlBarham/AlBarhamStats";
import { AlBarhamServices } from "@/sections/AlBarham/AlBarhamServices";
import { AlBarhamCompanies } from "@/sections/AlBarham/AlBarhamCompanies";
import { AlBarhamProjectCarousel } from "@/sections/AlBarham/components/AlBarhamProjectCarousel";
import { AlBarhamContact } from "@/sections/AlBarham/AlBarhamContact";
import { AlBarhamDualCTA } from "@/sections/AlBarham/AlBarhamDualCTA";
import { AlBarhamFooter } from "@/sections/AlBarham/AlBarhamFooter";

export const AlBarhamPage = () => {
  return (
    <div className="text-gray-700 text-xl not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[0.0208px] leading-[30px] list-outside list-disc max-w-full overflow-x-hidden overflow-y-auto overscroll-x-auto overscroll-y-auto pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-neue_haas_grotesk_display md:overscroll-x-none md:overscroll-y-none">
      <AlBarhamHeader />
      <AlBarhamHero />
      <AlBarhamAbout />
      <AlBarhamStats />
      <AlBarhamServices />
      <AlBarhamCompanies />
      <AlBarhamProjectCarousel />
      <AlBarhamContact />
      <AlBarhamDualCTA />
      <AlBarhamFooter />
    </div>
  );
};
