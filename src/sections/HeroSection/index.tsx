import { HeroContent } from "@/sections/HeroSection/components/HeroContent";

export const HeroSection = () => {
  return (
    <header className="relative bg-gray-900 box-border caret-transparent flex flex-col isolate justify-center max-w-full min-h-[1000px] w-screen pt-[115px] pb-8 px-[18.75px] md:pt-[93px] md:px-0">
      <HeroContent />
      <figure className="absolute items-center box-border caret-transparent flex justify-center pointer-events-none overflow-hidden inset-0 before:accent-auto before:bg-[linear-gradient(0deg,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.4)_100%),linear-gradient(0deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.3)_88.98%)] before:bg-[position:0%_0%,0%_0%] before:bg-size-[auto,auto] before:caret-transparent before:text-gray-700 before:block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[0.0208px] before:leading-[30px] before:list-outside before:list-disc before:pointer-events-none before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:z-10 before:border-separate before:inset-0 before:font-neue_haas_grotesk_display">
        <video
          src="https://www.bechtel.com/wp-content/uploads/2024/10/d87d-4b9c-b68c-117a0309cbf8.mp4"
          poster="https://www.bechtel.com/"
          autoplay=""
          loop=""
          muted=""
          playsinline=""
          preload="auto"
          className="absolute box-border caret-transparent h-full object-cover w-full z-0"
        ></video>
      </figure>
    </header>
  );
};
