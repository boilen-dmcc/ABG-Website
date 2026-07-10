import {
  revealMotionStyle,
  revealTransitionClass,
  useRevealOnScroll,
} from "@/hooks/useRevealOnScroll";
import type { AboutData } from "./types";

type Props = { data: AboutData };

export const ValueProposition = ({ data }: Props) => {
  const { ref, visible } = useRevealOnScroll();

  return (
    <section className="home-section-y bg-[#121e37] text-white">
      <div ref={ref} className="home-container">
        <h2
          className={`heading-section mb-8 text-white xs:mb-10 lg:mb-12 ${revealTransitionClass}`}
          style={revealMotionStyle(visible, 0, "up")}
        >
          {data.valuePropositionHeading}
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {data.valuePropositionItems.map((item, index) => (
            <article
              key={item.title}
              className={`group relative flex h-full flex-col overflow-hidden border border-white/10 bg-white/5 p-6 md:p-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-red-500/35 hover:bg-white/[0.08] hover:shadow-[0_14px_36px_rgba(0,0,0,0.28)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${revealTransitionClass}`}
              style={revealMotionStyle(visible, 80 + index * 90, "up")}
            >
              <span className="mb-5 font-necto_mono text-xs font-bold uppercase tracking-[0.2em] text-red-500 transition-transform duration-300 ease-out group-hover:translate-x-1">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-3 font-extrabold uppercase text-white transition-transform duration-300 ease-out group-hover:translate-x-1">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/70 lg:text-base">
                {item.description}
              </p>
              <span
                aria-hidden
                className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-red-600 transition-transform duration-300 ease-out group-hover:scale-x-100"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
