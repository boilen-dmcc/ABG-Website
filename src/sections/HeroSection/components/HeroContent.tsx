import { FeaturedPostsCarousel } from "@/sections/HeroSection/components/FeaturedPostsCarousel";

export const HeroContent = () => {
  return (
    <div className="relative text-white items-start box-border caret-transparent gap-x-12 flex flex-col grid-cols-none justify-center max-w-[1240px] gap-y-12 w-full z-20 mx-auto md:items-center md:grid md:grid-cols-[3fr_1fr]">
      <div className="box-border caret-transparent gap-x-4 flex flex-col justify-center gap-y-4">
        <h1 className="text-[56.25px] box-border caret-transparent leading-[56.25px] max-w-[1968.34px] font-apfel_grotezk md:text-[120px] md:leading-[120px] md:max-w-[4199.12px]">
          We Live for a Challenge
        </h1>
        <p className="text-2xl box-border caret-transparent tracking-[0.48px] leading-9 max-w-[839.824px] mt-8">
          At Bechtel, we partner with our customers to bring their ambitions to
          life, delivering projects that make a lasting, meaningful difference
          for people and communities around the world.
        </p>
        <div className="items-center box-border caret-transparent gap-x-4 flex gap-y-4 mt-10"></div>
      </div>
      <FeaturedPostsCarousel />
    </div>
  );
};
