import {
  revealMotionStyle,
  revealTransitionClass,
  useRevealOnScroll,
} from "@/hooks/useRevealOnScroll";
import type { AboutData } from "./types";

type Props = { data: AboutData };

export const Intro = ({ data }: Props) => {
  const { ref, visible } = useRevealOnScroll();

  return (
    <section className="home-section-y bg-white">
      <div
        ref={ref}
        className="home-container grid grid-cols-1 gap-8 xs:gap-10 lg:grid-cols-12 lg:gap-16"
      >
        <div className="lg:col-span-7">
          <h2
            className={`mb-6 max-w-[22ch] break-words font-extrabold uppercase xs:mb-8 ${revealTransitionClass}`}
            style={revealMotionStyle(visible, 0, "left")}
          >
            {data.introHeading}
          </h2>
          <div className="max-w-[62ch] space-y-5 text-base leading-relaxed lg:text-lg">
            {data.introParagraphs.map((paragraph, index) => (
              <p
                key={paragraph.slice(0, 32)}
                className={revealTransitionClass}
                style={revealMotionStyle(visible, 80 + index * 80, "up")}
              >
                {paragraph}
              </p>
            ))}
          </div>
          <blockquote
            className={`mt-8 max-w-[48ch] border-l-2 border-red-600 pl-5 text-xl font-semibold leading-snug lg:text-2xl ${revealTransitionClass}`}
            style={revealMotionStyle(visible, 240, "left")}
          >
            &ldquo;{data.introQuote}&rdquo;
          </blockquote>

          <div
            className={`mt-10 w-full border-t border-gray-200 ${revealTransitionClass}`}
            style={revealMotionStyle(visible, 280, "up")}
            aria-hidden
          />

          <div className="mt-10 max-w-[62ch] space-y-8 text-base leading-relaxed lg:text-lg">
            {data.visionMissionItems.map((item, index) => (
              <div
                key={item.title}
                className={revealTransitionClass}
                style={revealMotionStyle(visible, 320 + index * 100, "up")}
              >
                <h3 className="mb-3 font-extrabold uppercase">
                  {item.title}
                </h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div
            className={`relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-gray-100 ${revealTransitionClass}`}
            style={revealMotionStyle(visible, 120, "right")}
          >
            <img
              src={data.introImage}
              alt={data.introImageAlt}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
