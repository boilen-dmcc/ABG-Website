import { FooterNav } from "@/sections/Footer/components/FooterNav";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const Footer = () => {
  return (
    <footer className="text-white bg-gray-800 box-border caret-transparent px-[18.75px] py-12 md:px-0">
      <div className="box-border caret-transparent gap-x-16 flex flex-col max-w-[1240px] gap-y-16 mx-auto">
        <FooterNav />
        <hr className="text-zinc-500 bg-white/20 box-border caret-transparent h-px w-full mx-auto" />
        <FooterBottom />
      </div>
    </footer>
  );
};
