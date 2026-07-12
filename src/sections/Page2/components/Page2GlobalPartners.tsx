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
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10">
          <div className="home-container pt-8 sm:pt-10 md:pt-12 lg:pt-14">
            <h2 className="font-extrabold uppercase leading-[1.1] text-[#121e37]">
              Global Supply Network
            </h2>
          </div>
        </div>
        <GlobalPartnersMap fullHeight />
      </div>
    </section>
  );
};
