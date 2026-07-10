import {
  revealMotionStyle,
  revealTransitionClass,
  useRevealOnScroll,
} from "@/hooks/useRevealOnScroll";
import type { RefiningUnitsContent } from "./types";

type Props = { content: RefiningUnitsContent };

export const RefiningUnits = ({ content }: Props) => {
  const { ref, visible } = useRevealOnScroll();

  return (
    <section className="home-section-y w-full bg-white text-foreground">
      <div
        ref={ref}
        className="home-container grid grid-cols-1 gap-8 xs:gap-10 lg:grid-cols-12 lg:gap-16"
      >
        <div className="lg:col-span-6">
          {content.introParagraphs && content.introParagraphs.length > 0 ? (
            <div className="mb-10 space-y-5 text-base leading-relaxed text-gray-700 md:mb-12 md:space-y-6 md:text-lg">
              {content.introParagraphs.map((paragraph, index) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className={revealTransitionClass}
                  style={revealMotionStyle(visible, index * 80, "up")}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ) : null}

          <ul className="space-y-3 md:space-y-3.5">
            {content.units.map((unit, index) => (
              <li
                key={unit}
                className={`grid grid-cols-[auto_1fr] items-start gap-x-3 text-sm leading-relaxed sm:text-base md:text-lg ${revealTransitionClass}`}
                style={revealMotionStyle(
                  visible,
                  (content.introParagraphs?.length ?? 0) * 80 + 40 + index * 35,
                  "up",
                )}
              >
                <span
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-600"
                  aria-hidden
                />
                <span className="text-[#121e37]">{unit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`lg:col-span-6 ${revealTransitionClass}`}
          style={revealMotionStyle(visible, 80, "right")}
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-gray-100 lg:sticky lg:top-28">
            <img
              src={content.image}
              alt={content.imageAlt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
