import { useState, useRef, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { orderedProjects } from "@/sections/Projects/data/projects";
import {
  revealMotionStyle,
  revealTransitionClass,
  useRevealOnScroll,
} from "@/hooks/useRevealOnScroll";

function getCardDimensions(viewportWidth: number) {
  let cardWidth = 440;
  let cardGap = 24;

  if (viewportWidth < 480) {
    cardWidth = Math.max(260, viewportWidth - 32);
    cardGap = 16;
  } else if (viewportWidth < 575) {
    cardWidth = Math.min(300, viewportWidth - 40);
    cardGap = 16;
  } else if (viewportWidth < 768) {
    cardWidth = 320;
    cardGap = 20;
  } else if (viewportWidth < 992) {
    cardWidth = 360;
    cardGap = 20;
  } else if (viewportWidth < 1200) {
    cardWidth = 400;
    cardGap = 24;
  }

  return { cardWidth, cardGap, cardStep: cardWidth + cardGap };
}

function splitHeadingToTwoLines(text: string): [string, string] {
  const words = text.trim().split(/\s+/);
  if (words.length <= 1) return [text, ""];

  const breakAt = Math.ceil(words.length / 2);
  return [words.slice(0, breakAt).join(" "), words.slice(breakAt).join(" ")];
}

function TwoLineHeading({
  lines,
  className,
}: {
  lines: [string, string];
  className?: string;
}) {
  const [firstLine, secondLine] = lines;

  return (
    <span className={className}>
      <span className="block">{firstLine}</span>
      {secondLine ? <span className="block">{secondLine}</span> : null}
    </span>
  );
}

export const Page2Projects = () => {
  const { ref: revealRef, visible } = useRevealOnScroll();
  const [currentIndex, setCurrentIndex] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [viewportWidth, setViewportWidth] = useState(0);

  const { cardWidth, cardGap, cardStep } = useMemo(
    () => getCardDimensions(viewportWidth),
    [viewportWidth],
  );

  const trackWidth = orderedProjects.length * cardWidth + (orderedProjects.length - 1) * cardGap;

  const translateX = useMemo(() => {
    const maxOffset = Math.max(0, trackWidth - viewportWidth);
    return Math.min(currentIndex * cardStep, maxOffset);
  }, [currentIndex, cardStep, trackWidth, viewportWidth]);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const updateWidth = () => setViewportWidth(el.clientWidth);
    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(el);
    window.addEventListener("resize", updateWidth);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, orderedProjects.length - 1));
  }, [cardStep, viewportWidth]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(orderedProjects.length - 1, prev + 1));
  };

  const handleCardClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="home-section-y overflow-hidden bg-white">
      <div ref={revealRef} className="home-container">
        <h2
          className={`mb-8 break-words font-extrabold uppercase leading-[1.1] sm:mb-10 md:mb-12 ${revealTransitionClass}`}
          style={revealMotionStyle(visible, 0, "left")}
        >
          <TwoLineHeading lines={splitHeadingToTwoLines("Building Iraq's Future – Key Projects")} />
        </h2>

        <div
          className={`relative overflow-hidden ${revealTransitionClass}`}
          style={revealMotionStyle(visible, 120, "up")}
        >
          <div ref={viewportRef} className="overflow-hidden">
            <div
              className="flex pb-6 transition-transform duration-500 ease-out"
              style={{
                gap: cardGap,
                transform: `translateX(-${translateX}px)`,
              }}
            >
              {orderedProjects.map((project, index) => (
                <div
                  key={project.slug}
                  onClick={() => handleCardClick(index)}
                  className="flex-shrink-0 cursor-pointer"
                  style={{ width: cardWidth }}
                >
                  <div className="group relative h-[380px] w-full overflow-hidden rounded-lg shadow-lg xs:h-[420px] sm:h-[460px] md:h-[500px] lg:h-[520px]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#121e37]/90 via-[#121e37]/30 to-[#121e37]/10 transition-opacity duration-500 group-hover:from-[#121e37]/95 group-hover:via-[#121e37]/50" />

                    <div className="absolute inset-x-0 bottom-0 p-4 text-white xs:p-5 md:p-6">
                      <div className="transition-transform duration-500 ease-out group-hover:-translate-y-1">
                        <h3 className="font-apfel_grotezk text-lg font-bold leading-snug text-white transition-transform duration-500 ease-out group-hover:-translate-y-1 xs:text-xl">
                          <TwoLineHeading lines={splitHeadingToTwoLines(project.title)} />
                        </h3>

                        <div className="grid grid-rows-[1fr] transition-all duration-500 ease-out lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr]">
                          <div className="overflow-hidden">
                            <div className="space-y-3 pt-3 opacity-100 translate-y-0 transition-all duration-500 lg:pt-4 lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0">
                              <p className="text-sm text-white/80">{project.location}</p>
                              <p className="text-sm leading-relaxed text-white/90 line-clamp-4 xs:line-clamp-none">
                                {project.description}
                              </p>
                              <div className="flex items-center justify-end border-t border-white/20 pt-3">
                                <Link
                                  to={`/projects/${project.slug}`}
                                  onClick={(e) => e.stopPropagation()}
                                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent/80"
                                >
                                  Learn More
                                  <ArrowRight className="h-4 w-4" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 h-1 overflow-hidden rounded-full bg-gray-200 xs:mt-8">
            <div
              className="h-full rounded-full bg-red-600 transition-all duration-500"
              style={{
                width: `${((currentIndex + 1) / orderedProjects.length) * 100}%`,
              }}
            />
          </div>

          <div className="mt-4 flex items-center justify-between xs:mt-5">
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-900/10 bg-gray-900/5 text-foreground backdrop-blur-sm transition-all hover:bg-gray-900/10 disabled:cursor-not-allowed disabled:opacity-30"
                aria-label="Previous project"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={handleNext}
                disabled={currentIndex === orderedProjects.length - 1}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-900/10 bg-gray-900/5 text-foreground backdrop-blur-sm transition-all hover:bg-gray-900/10 disabled:cursor-not-allowed disabled:opacity-30"
                aria-label="Next project"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <span className="text-sm tabular-nums text-gray-500">
              {currentIndex + 1} / {orderedProjects.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
