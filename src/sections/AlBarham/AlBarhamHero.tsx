import { AlBarhamFeaturedCarousel } from "@/sections/AlBarham/components/AlBarhamFeaturedCarousel";

export const AlBarhamHero = () => {
  return (
    <header className="relative bg-gray-900 box-border caret-transparent flex flex-col isolate justify-center max-w-full min-h-[1000px] w-screen pt-[140px] pb-8 px-[18.75px] md:pt-[140px] md:pb-8 md:px-0 md:min-h-[911px]">
      <div className="relative text-white items-start box-border caret-transparent gap-x-12 flex flex-col grid-cols-none justify-center max-w-[1240px] gap-y-12 w-full z-20 mx-auto md:items-start md:grid md:grid-cols-[1fr_auto] md:gap-x-12">
        <div className="box-border caret-transparent gap-x-4 flex flex-col justify-center gap-y-4 md:max-w-[750px]">
          <h1 className="text-[56.25px] box-border caret-transparent leading-[56.25px] font-apfel_grotezk md:text-[120px] md:leading-[120px]">
            Driven by one standard
          </h1>
          <p className="text-2xl box-border caret-transparent tracking-[0.48px] leading-9 mt-8">
            At Al-Barham Group, we partner with clients across energy, construction, real estate, and investment—delivering integrated solutions through eight specialized companies that turn ambition into lasting results.
          </p>
        </div>
        <AlBarhamFeaturedCarousel />
      </div>
      <figure className="absolute items-center box-border caret-transparent flex justify-center pointer-events-none overflow-hidden inset-0 before:accent-auto before:bg-[linear-gradient(0deg,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.4)_100%),linear-gradient(0deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.3)_88.98%)] before:bg-[position:0%_0%,0%_0%] before:bg-size-[auto,auto] before:caret-transparent before:text-gray-700 before:block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[0.0208px] before:leading-[30px] before:list-outside before:list-disc before:pointer-events-none before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:z-10 before:border-separate before:inset-0 before:font-neue_haas_grotesk_display">
        <video
          src="https://cdn.jsdelivr.net/gh/SaintFredMax/abg-assets@main/ABG%20Website%20Landing%20Video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute box-border caret-transparent h-full object-cover w-full z-0"
        />
      </figure>
    </header>
  );
};
