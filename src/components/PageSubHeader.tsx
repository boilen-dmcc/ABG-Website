import type { CSSProperties } from "react";
import {
  revealMotionStyle,
  revealTransitionClass,
  useRevealOnMount,
} from "@/hooks/useRevealOnScroll";
import { PageHeroBreadcrumb } from "@/components/PageHeroBreadcrumb";

type Props = {
  eyebrow: string;
  title: string;
  backgroundImage: string;
  imageClassName?: string;
  imageStyle?: CSSProperties;
  eyebrowClassName?: string;
  eyebrowStyle?: CSSProperties;
  titleClassName?: string;
  titleStyle?: CSSProperties;
};

export function PageSubHeader({
  eyebrow,
  title,
  backgroundImage,
  imageClassName = "",
  imageStyle,
  eyebrowClassName = "",
  eyebrowStyle,
  titleClassName = "",
  titleStyle,
}: Props) {
  const visible = useRevealOnMount();

  const resolvedImageClassName = imageClassName || revealTransitionClass;
  const resolvedImageStyle =
    imageStyle ??
    ({
      opacity: 1,
      transform: visible ? "scale(1)" : "scale(1.06)",
      transitionDuration: "1400ms",
      transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    } satisfies CSSProperties);

  const resolvedEyebrowStyle =
    eyebrowStyle ?? revealMotionStyle(visible, 80, "up");
  const resolvedTitleStyle =
    titleStyle ?? revealMotionStyle(visible, 180, "up");

  return (
    <section className="relative min-h-[280px] overflow-hidden bg-[#121e37] xs:min-h-[320px] sm:min-h-[360px] md:min-h-[420px] lg:min-h-[480px]">
      <img
        src={backgroundImage}
        alt=""
        className={`absolute inset-0 h-full w-full object-cover ${resolvedImageClassName}`}
        style={resolvedImageStyle}
        aria-hidden
      />

      <div
        className="absolute inset-0 bg-gradient-to-b from-[#121e37]/70 via-[#121e37]/45 to-[#121e37]/30"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "72px 100%",
        }}
        aria-hidden
      />

      <div className="home-container relative z-10 flex min-h-[280px] items-end pb-10 pt-[calc(7rem+env(safe-area-inset-top,0px))] xs:min-h-[320px] xs:pb-12 sm:min-h-[360px] sm:pb-14 md:min-h-[420px] md:pb-16 lg:min-h-[480px] lg:pb-20">
        <div className="flex flex-col items-start gap-4 xs:gap-5 md:gap-6">
          <PageHeroBreadcrumb
            label={eyebrow}
            className={`${revealTransitionClass} ${eyebrowClassName}`.trim()}
            style={resolvedEyebrowStyle}
          />

          <div
            className={`flex flex-col items-start gap-3 xs:gap-4 ${revealTransitionClass} ${titleClassName}`.trim()}
            style={resolvedTitleStyle}
          >
            <h1 className="max-w-[18ch] font-apfel_grotezk text-[clamp(2rem,5.5vw,4.5rem)] font-bold uppercase leading-[1.05] tracking-tight text-white">
              {title}
            </h1>
            <span className="block h-1 w-12 bg-red-600" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
