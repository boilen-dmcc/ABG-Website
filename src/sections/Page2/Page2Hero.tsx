import React from "react";
import { Page2FeaturedCarousel } from "@/sections/Page2/components/Page2FeaturedCarousel";

export const Page2Hero = () => {
  const [videoOpacity, setVideoOpacity] = React.useState(1);
  const [carouselRight, setCarouselRight] = React.useState(10);
  const [isDesktop, setIsDesktop] = React.useState(true);
  const [taglineWidth, setTaglineWidth] = React.useState<string | undefined>(undefined);

  // Single knob: 0 = no darkening, 1 = fully black
  const overlayDarkness = 0.4;

  const videoRef = React.useRef<HTMLElement>(null);
  const taglineRef = React.useRef<HTMLParagraphElement>(null);
  const carouselRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current) return;
      const rect = videoRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const scrollProgress = -rect.top / sectionHeight;

      if (scrollProgress >= 0.5) {
        const fadeProgress = (scrollProgress - 0.5) * 2;
        const newOpacity = Math.max(0, 1 - fadeProgress);
        setVideoOpacity(newOpacity);
      } else {
        setVideoOpacity(1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Desktop/right positioning interpolation
  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      const lgBreakpoint = 1020;
      const maxWidth = 1920;
      const minRight = 3;
      const maxRight = 7;

      setIsDesktop(width >= lgBreakpoint);

      if (width >= lgBreakpoint) {
        // Calculate margin right to match menu margin (32px / 2rem)
        // Convert px to % based on viewport width
        const menuMarginPx = 32;
        const menuMarginPercent = (menuMarginPx / width) * 100;

        // Use the calculated menu margin percentage instead of interpolation
        setCarouselRight(menuMarginPercent);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Collision detection to prevent carousel from overlapping tagline
  React.useEffect(() => {
    const handleCollision = () => {
      if (!isDesktop) {
        setTaglineWidth(undefined);
        return;
      }

      if (taglineRef.current && carouselRef.current) {
        const taglineRect = taglineRef.current.getBoundingClientRect();
        const carouselRect = carouselRef.current.getBoundingClientRect();

        // Calculate available width relative to the tagline's starting position
        // We want a 30px buffer from the carousel
        const availableWidth = carouselRect.left - taglineRect.left - 30;

        // 52rem is approx 832px (assuming 16px root font)
        // We cap at 832px to respect the original design intent
        const maxDesignWidth = 832;

        // Ensure we don't set negative width
        const newWidth = Math.max(0, Math.min(availableWidth, maxDesignWidth));

        setTaglineWidth(`${newWidth}px`);
      }
    };

    // Run on mount, resize, and when layout dependencies change
    handleCollision();
    window.addEventListener("resize", handleCollision);

    return () => window.removeEventListener("resize", handleCollision);
  }, [isDesktop, carouselRight]);

  // Derived alpha for the 2nd gradient layer (keeps the "deeper bottom" feel)
  const overlayDarkness2 = Math.min(1, overlayDarkness * 0.75);

  return (
    <section
      ref={videoRef}
      className="relative bg-gray-900 box-border caret-transparent flex flex-col isolate min-h-screen w-full overflow-hidden"
    >
      {/* Background Video with Overlay */}
      <figure
        className="absolute items-center box-border caret-transparent flex justify-center pointer-events-none overflow-hidden inset-0 transition-opacity duration-500"
        style={{ opacity: videoOpacity }}
      >
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0,0,0,${overlayDarkness}) 0%, rgba(0,0,0,${overlayDarkness}) 100%),
              linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,${overlayDarkness2}) 88.98%)`,
          }}
        />

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

      {/* Content Container */}
      <div className="relative z-20 max-w-[1400px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 pt-24 pb-16 max-[1019px]:pt-32 max-[1019px]:pb-12 bp1020:h-screen bp1020:flex bp1020:items-center bp1020:pt-0 bp1020:pb-20">
        {/* Left: Tagline */}
        <div className="text-white space-y-4 sm:space-y-6 max-w-[52rem]">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl bp1090:text-9xl font-bold leading-[1.1] font-apfel_grotezk max-w-[58rem]">
            Built for Industrial <span className="text-red-600">Excellence</span>
          </h1>

          <p
            ref={taglineRef}
            style={{ maxWidth: taglineWidth }}
            className="text-lg sm:text-xl md:text-2xl max-[1089px]:text-[clamp(1.125rem,2.5vw,1.75rem)] text-white leading-relaxed max-w-[52rem] max-[1265px]:max-w-[calc(52rem-20px)] max-[1235px]:max-w-[calc(52rem-40px)] transition-[max-width] duration-200 ease-out mt-[10px]"
          >
            <span className="block font-necto_mono text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-white/90 mb-4 sm:mb-5">
              Engineering.{" "}
              <span className="text-red-600">Integrity.</span> Innovation.
            </span>
            We deliver world-class engineering, electrical, instrumentation,
            automation, and maintenance solutions for oil refineries, gas
            processing plants, petrochemical facilities, and industrial
            infrastructure. With a commitment to quality, safety, and
            innovation, we help industries operate efficiently and reliably.
          </p>
        </div>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="mt-8 sm:mt-12 flex justify-center bp1020:absolute bp1020:top-[45%] bp1020:mt-0"
          style={{ right: isDesktop ? `${carouselRight}%` : undefined }}
        >
          <Page2FeaturedCarousel />
        </div>
      </div>
    </section>
  );
};
