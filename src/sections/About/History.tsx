import {
  revealMotionStyle,
  revealTransitionClass,
  useRevealOnScroll,
} from "@/hooks/useRevealOnScroll";
import type { AboutData } from "./types";

type Props = { data: AboutData };

export const History = ({ data }: Props) => {
  const { ref, visible } = useRevealOnScroll();

  return (
    <section className="home-section-y border-t border-gray-200 bg-white">
      <div ref={ref} className="home-container">
        <h2
          className={`mb-6 font-extrabold uppercase xs:mb-8 ${revealTransitionClass}`}
          style={revealMotionStyle(visible, 0, "up")}
        >
          {data.historyHeading}
        </h2>

        <p
          className={`mb-12 max-w-4xl text-base leading-relaxed lg:text-lg ${revealTransitionClass}`}
          style={revealMotionStyle(visible, 80, "up")}
        >
          {data.historyParagraph}
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6 lg:gap-10">
          {data.historyFacts.map((fact, index) => (
            <div
              key={fact.label}
              className={revealTransitionClass}
              style={revealMotionStyle(visible, 160 + index * 100, "up")}
            >
              <span className="mb-3 inline-block bg-red-600 px-2 py-0.5 text-sm font-semibold uppercase text-white">
                {fact.label}
              </span>
              <p className="font-bold leading-snug lg:text-lg">{fact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
