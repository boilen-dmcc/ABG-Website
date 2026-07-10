import React from "react";
import { Page2FeaturedCarousel } from "@/sections/Page2/components/Page2FeaturedCarousel";
import { HeroTitle } from "@/components/HeroTitle";
import {
  revealMotionStyle,
  revealTransitionClass,
  useRevealOnMount,
} from "@/hooks/useRevealOnScroll";

const HERO_TOP_PADDING =
  "pt-[calc(7rem+env(safe-area-inset-top,0px))] xs:pt-[calc(7.25rem+env(safe-area-inset-top,0px))] sm:pt-[calc(7.5rem+env(safe-area-inset-top,0px))] md:pt-[calc(8rem+env(safe-area-inset-top,0px))] lg:pt-[calc(8.5rem+env(safe-area-inset-top,0px))] xl:pt-[calc(9rem+env(safe-area-inset-top,0px))] 2xl:pt-[calc(9.5rem+env(safe-area-inset-top,0px))]";

export const Page2Hero = () => {
  const visible = useRevealOnMount();
  const [videoOpacity, setVideoOpacity] = React.useState(1);
  const [carouselRight, setCarouselRight] = React.useState(10);
  const [isDesktop, setIsDesktop] = React.useState(true);
  const [taglineWidth, setTaglineWidth] = React.useState<string | undefined>(undefined);

  const overlayDarkness = 0.4;
  const brandBlue = "18, 30, 55";
  const showFeaturedCarousel = false;

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
        setVideoOpacity(Math.max(0, 1 - fadeProgress));
      } else {
        setVideoOpacity(1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsDesktop(width >= 992);

      if (width >= 992) {
        const menuMarginPx = 32;
        setCarouselRight((menuMarginPx / width) * 100);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    if (!showFeaturedCarousel) {
      setTaglineWidth(undefined);
      return;
    }

    const handleCollision = () => {
      if (!isDesktop) {
        setTaglineWidth(undefined);
        return;
      }

      if (taglineRef.current && carouselRef.current) {
        const taglineRect = taglineRef.current.getBoundingClientRect();
        const carouselRect = carouselRef.current.getBoundingClientRect();
        const availableWidth = carouselRect.left - taglineRect.left - 30;
        const maxDesignWidth = 832;
        setTaglineWidth(`${Math.max(0, Math.min(availableWidth, maxDesignWidth))}px`);
      }
    };

    handleCollision();
    window.addEventListener("resize", handleCollision);
    return () => window.removeEventListener("resize", handleCollision);
  }, [isDesktop, carouselRight, showFeaturedCarousel]);

  const overlayDarkness2 = Math.min(1, overlayDarkness * 0.75);

  return (
    <section
      ref={videoRef}
      className="relative isolate flex min-h-[100svh] w-full flex-col overflow-hidden bg-[#121e37]"
    >
      <figure
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden transition-opacity duration-500"
        style={{ opacity: videoOpacity }}
      >
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(${brandBlue},${overlayDarkness}) 0%, rgba(${brandBlue},${overlayDarkness}) 100%),
              linear-gradient(0deg, rgba(${brandBlue},0) 0%, rgba(${brandBlue},${overlayDarkness2}) 88.98%)`,
          }}
        />

        <video
          src="/videos/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute z-0 h-full w-full object-cover"
        />
      </figure>

      <div
        className={`home-container relative z-20 flex w-full flex-1 flex-col justify-end pb-10 xs:pb-12 sm:pb-14 md:pb-16 lg:pb-20 ${HERO_TOP_PADDING}`}
      >
        <div className="max-w-[58rem] space-y-4 text-white xs:space-y-5 sm:space-y-6">
          <div style={revealMotionStyle(visible, 120, "up")}>
            <HeroTitle
              className={`max-w-[58rem] ${revealTransitionClass}`}
              lines={[
                { text: "Built for Industrial" },
                { text: "Excellence", accent: true },
              ]}
            />
          </div>

          <p
            ref={taglineRef}
            style={{ maxWidth: taglineWidth, ...revealMotionStyle(visible, 220, "up") }}
            className={`mt-2 max-w-[52rem] text-base font-light leading-relaxed text-white xs:text-[1.05rem] sm:text-lg md:text-xl lg:leading-[1.65] ${revealTransitionClass}`}
          >
            <span
              className={`mb-4 inline-block bg-gradient-to-r from-[#0039a6] to-[#002b7f] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white xs:mb-5 xs:px-4 xs:py-2 xs:text-xs xs:tracking-[0.2em] ${revealTransitionClass}`}
              style={revealMotionStyle(visible, 180, "left")}
            >
              Engineering. Integrity. Innovation.
            </span>
            <br />
            We deliver integrated EPC, engineering, project development, investment, and
            financing solutions across the energy, industrial, and infrastructure sectors.
            By combining technical expertise, strategic partnerships, and innovative
            execution, we help clients successfully develop, finance, and deliver complex
            projects with the highest standards of quality, safety, and sustainability.
          </p>
        </div>

        {showFeaturedCarousel ? (
          <div
            ref={carouselRef}
            className="mt-8 flex justify-center sm:mt-12 lg:absolute lg:top-[45%] lg:mt-0"
            style={{ right: isDesktop ? `${carouselRight}%` : undefined }}
          >
            <Page2FeaturedCarousel />
          </div>
        ) : null}
      </div>
    </section>
  );
};
