import { FooterContact } from "@/sections/Footer/components/FooterContact";
import { FooterLegalNav } from "@/sections/Footer/components/FooterLegalNav";
import { FooterSocial } from "@/sections/Footer/components/FooterSocial";

export const FooterBottom = () => {
  return (
    <div className="[align-items:normal] box-border caret-transparent gap-x-[normal] block gap-y-[normal] md:items-start md:gap-x-24 md:flex md:gap-y-24">
      <FooterContact />
      <FooterLegalNav />
      <FooterSocial />
    </div>
  );
};
