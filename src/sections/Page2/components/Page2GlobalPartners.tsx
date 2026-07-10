import { GlobalPartnersMap } from "@/sections/Page2/components/GlobalPartnersMap";
import {
  revealMotionStyle,
  revealTransitionClass,
  useRevealOnScroll,
} from "@/hooks/useRevealOnScroll";

export const Page2GlobalPartners = () => {
  const { ref, visible } = useRevealOnScroll({ threshold: 0.1 });

  return (
    <section className="relative z-0 w-full overflow-hidden bg-white">
      <div
        ref={ref}
        className={`relative h-[50vh] min-h-[280px] w-full xs:min-h-[320px] xs:h-[55vh] sm:min-h-[380px] md:min-h-[440px] md:h-[60vh] lg:min-h-[520px] lg:h-[68vh] xl:min-h-[600px] xl:h-[76vh] 2xl:min-h-[680px] 2xl:h-[84vh] ${revealTransitionClass}`}
        style={revealMotionStyle(visible, 0, "up")}
      >
        <GlobalPartnersMap fullHeight />
      </div>
    </section>
  );
};
