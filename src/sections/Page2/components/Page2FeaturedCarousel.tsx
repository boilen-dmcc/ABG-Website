import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { orderedProjects } from "@/sections/Projects/data/projects";

const SLIDE_DURATION = 5000;

// layout breakpoint where the carousel drops under the text (lg: 992px)
const DROP_BP = 992;

// ====== VARIABLES YOU TUNE ======
const CARD_DESKTOP_MAX_W = 320; // px (right-side desktop)
const CARD_STACKED_MAX_W = 420; // px (when it drops below, make it bigger)
const CARD_STACKED_MIN_W = 340; // px (for small phones)

const IMG_DESKTOP_H = 192; // px
const IMG_STACKED_H = 240; // px

const PLACEHOLDER_DESKTOP_H = 360; // px (background stacked card dummy height)
const PLACEHOLDER_STACKED_H = 460; // px

// Optional: desktop shrink band (your old behavior)
const DESKTOP_SHRINK_MAX_W = 1257;
const DESKTOP_SHRINK_MIN_W = 1220;
const DESKTOP_SCALE_MAX = 1;
const DESKTOP_SCALE_MIN = 0.85;

// ====== helpers ======
const clamp = (v: number, min: number, max: number) =>
  Math.max(min, Math.min(max, v));

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

type CardDims = {
  maxW: number; // px
  scale: number; // unitless
  imgH: number; // px
  placeholderH: number; // px
};

export const Page2FeaturedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const [dims, setDims] = useState<CardDims>({
    maxW: CARD_DESKTOP_MAX_W,
    scale: 1,
    imgH: IMG_DESKTOP_H,
    placeholderH: PLACEHOLDER_DESKTOP_H,
  });

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;

      // --- STACKED MODE (card dropped under text) ---
      if (w < DROP_BP) {
        // Make width grow with screen, but bounded.
        // At ~360px screen -> ~CARD_STACKED_MIN_W
        // At ~DROP_BP screen -> ~CARD_STACKED_MAX_W
        const t = clamp((w - 360) / (DROP_BP - 360), 0, 1);
        const maxW = lerp(CARD_STACKED_MIN_W, CARD_STACKED_MAX_W, t);

        setDims({
          maxW,
          scale: 1, // don't shrink when stacked
          imgH: IMG_STACKED_H,
          placeholderH: PLACEHOLDER_STACKED_H,
        });
        return;
      }

      // --- DESKTOP MODE (card on right) ---
      // Keep your old shrink band near 1257->1220
      let scale = DESKTOP_SCALE_MAX;

      if (w <= DESKTOP_SHRINK_MAX_W && w >= DESKTOP_SHRINK_MIN_W) {
        const t =
          (DESKTOP_SHRINK_MAX_W - w) /
          (DESKTOP_SHRINK_MAX_W - DESKTOP_SHRINK_MIN_W);
        scale = DESKTOP_SCALE_MAX - t * (DESKTOP_SCALE_MAX - DESKTOP_SCALE_MIN);
      } else if (w < DESKTOP_SHRINK_MIN_W) {
        scale = DESKTOP_SCALE_MIN;
      }

      setDims({
        maxW: CARD_DESKTOP_MAX_W,
        scale,
        imgH: IMG_DESKTOP_H,
        placeholderH: PLACEHOLDER_DESKTOP_H,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const posts = orderedProjects.map((project) => ({
    id: project.slug,
    image: project.image,
    title: project.title
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase()),
    url: `/projects/${project.slug}`,
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 100 / (SLIDE_DURATION / 50);
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) handleNext();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setProgress(0);
    setCurrentIndex((prev) => (prev + 1) % posts.length);
    setTimeout(() => setIsAnimating(false), 400);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setProgress(0);
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
    setTimeout(() => setIsAnimating(false), 400);
  };

  const handleDotClick = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setProgress(0);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 400);
  };

  return (
    <div
      className="w-full relative mx-auto"
      style={{ maxWidth: `${dims.maxW}px` }}
    >
      {/* Stacked Cards Effect */}
      <div className="relative">
        {/* Background Cards */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="absolute bg-white/5 backdrop-blur-sm rounded-2xl w-full border border-white/10"
            style={{
              transform: `translateY(10px) scale(${0.94 * dims.scale})`,
              zIndex: 1,
              opacity: 0.4,
              transition: "transform 300ms ease-out",
            }}
          >
            <div style={{ height: `${dims.placeholderH}px` }} />
          </div>

          <div
            className="absolute bg-white/5 backdrop-blur-sm rounded-2xl w-full border border-white/10"
            style={{
              transform: `translateY(5px) scale(${0.97 * dims.scale})`,
              zIndex: 2,
              opacity: 0.6,
              transition: "transform 300ms ease-out",
            }}
          >
            <div style={{ height: `${dims.placeholderH}px` }} />
          </div>
        </div>

        {/* Main Card */}
        <div
          className="relative z-10"
          style={{
            transform: `scale(${dims.scale})`,
            transition: "transform 300ms ease-out",
          }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 shadow-2xl transition-all duration-500 ease-in-out">
            {/* Image */}
            <div
              className="relative overflow-hidden transition-all duration-500 ease-in-out"
              style={{ height: `${dims.imgH}px` }}
            >
              <div
                className={`transition-opacity duration-400 ${
                  isAnimating ? "opacity-0" : "opacity-100"
                }`}
              >
                <img
                  src={posts[currentIndex].image}
                  alt={posts[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <div
                  data-media-overlay
                  className="absolute inset-0 bg-gradient-to-t from-[#121e37]/80 via-[#121e37]/20 to-transparent"
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-4.5 space-y-3.5 sm:space-y-4 transition-all duration-500 ease-in-out">
              <div
                className={`transition-opacity duration-400 ${
                  isAnimating ? "opacity-0" : "opacity-100"
                }`}
              >
                <h3 className="text-white text-base sm:text-lg font-bold leading-tight font-apfel_grotezk line-clamp-2">
                  {posts[currentIndex].title}
                </h3>
              </div>

              {/* Progress Indicators */}
              <div className="flex items-center gap-1 sm:gap-1.5">
                {posts.map((_, index) => {
                  const isActive = index === currentIndex;
                  const isPast = index < currentIndex;

                  return (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      className={`relative bg-white/20 block h-1 overflow-hidden rounded-full cursor-pointer hover:bg-white/30 transition-all ${
                        isActive ? "w-12 sm:w-14 duration-300" : "w-1 duration-500"
                      }`}
                    >
                      <span
                        className="absolute bg-red-500 h-full rounded-full left-0 top-0 transition-all ease-linear"
                        style={{
                          width: isPast
                            ? "100%"
                            : isActive
                            ? `${progress}%`
                            : "0%",
                          transitionDuration: isPast
                            ? "500ms"
                            : isActive
                            ? "100ms"
                            : "0ms",
                        }}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Bottom Row: Action Button and Navigation Arrows */}
              <div className="flex items-center justify-between">
                <div
                  className={`transition-opacity duration-400 ${
                    isAnimating ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <Link
                    to={posts[currentIndex].url}
                    className="group inline-flex items-center gap-1.5 sm:gap-2 text-white text-xs sm:text-sm font-semibold hover:text-red-400 transition-colors"
                  >
                    <span>Read More</span>
                    <svg
                      className="w-4 h-4 sm:w-4.5 sm:h-4.5 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>

                {/* Navigation Arrows */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
                    aria-label="Previous"
                  >
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={handleNext}
                    className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
                    aria-label="Next"
                  >
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
