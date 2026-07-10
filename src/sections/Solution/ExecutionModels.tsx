import type { ReactNode } from "react";
import {
  revealMotionStyle,
  revealTransitionClass,
  useRevealOnScroll,
} from "@/hooks/useRevealOnScroll";
import type { ExecutionModelsContent } from "./types";

type Props = { content: ExecutionModelsContent };

const BulletList = ({
  items,
  variant,
}: {
  items: { key: string; content: ReactNode }[];
  variant: "light" | "dark";
}) => (
  <ul className={variant === "dark" ? "space-y-5 md:space-y-6" : "space-y-4 md:space-y-5"}>
    {items.map((item) => (
      <li
        key={item.key}
        className="grid grid-cols-[auto_1fr] items-start gap-x-4 text-base leading-relaxed md:text-lg lg:text-xl"
      >
        <span
          className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-red-600"
          aria-hidden
        />
        <span
          className={
            variant === "dark"
              ? "font-medium text-white/95"
              : "text-[#121e37]"
          }
        >
          {item.content}
        </span>
      </li>
    ))}
  </ul>
);

export const ExecutionModels = ({ content }: Props) => {
  const { ref, visible } = useRevealOnScroll();

  return (
    <section className="home-section-y w-full bg-white text-foreground">
      <div
        ref={ref}
        className="home-container grid grid-cols-1 gap-8 xs:gap-10 lg:grid-cols-12 lg:gap-16"
      >
        <div className="lg:col-span-6">
          <div
            className={revealTransitionClass}
            style={revealMotionStyle(visible, 0, "up")}
          >
            <BulletList
              variant="light"
              items={content.models.map((model) => ({
                key: model.acronym,
                content: (
                  <>
                    <span className="font-bold">{model.acronym}</span>{" "}
                    <span className="font-normal text-gray-700">
                      ({model.description})
                    </span>
                  </>
                ),
              }))}
            />
          </div>

          <div
            className={`relative mt-14 pt-6 md:mt-16 md:pt-8 ${revealTransitionClass}`}
            style={revealMotionStyle(visible, 120, "up")}
          >
            <div className="relative w-full">
              <div className="relative bg-[#121e37] px-6 pb-10 pt-16 sm:px-8 sm:pb-12 sm:pt-[4.75rem] md:px-10 md:pb-14 md:pt-20">
                <div className="absolute left-0 top-0 z-10 -translate-y-1/2 bg-red-600 px-6 py-3.5 shadow-[0_8px_24px_rgba(220,38,38,0.28)] sm:px-8 sm:py-4">
                  <p className="font-apfel_grotezk text-sm font-bold uppercase tracking-[0.08em] text-white sm:text-base md:text-lg">
                    {content.approachLabel}
                  </p>
                </div>

                <BulletList
                  variant="dark"
                  items={content.benefits.map((benefit) => ({
                    key: benefit,
                    content: benefit,
                  }))}
                />
              </div>
            </div>
          </div>
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
