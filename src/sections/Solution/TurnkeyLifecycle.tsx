import type { LucideIcon } from "lucide-react";
import {
  Building2,
  ChevronsRight,
  ClipboardList,
  Cog,
  Factory,
  FileText,
  Gauge,
  Scale,
  ShoppingCart,
  Truck,
  Wrench,
} from "lucide-react";
import {
  revealMotionStyle,
  revealTransitionClass,
  useRevealOnScroll,
} from "@/hooks/useRevealOnScroll";
import type { LifecyclePhase, TurnkeyLifecycleContent } from "./types";

type Props = { content: TurnkeyLifecycleContent };

const phaseIcons: Record<string, LucideIcon> = {
  "Feasibility & Planning": Scale,
  "FEED (Front-End Engineering Design)": ClipboardList,
  "Basic Engineering": Cog,
  "Detailed Engineering": FileText,
  Procurement: ShoppingCart,
  Manufacturing: Factory,
  "Transportation & Logistics": Truck,
  "Installation & Site Construction": Building2,
  "Commissioning & Startup Services": Gauge,
  "Operation & Maintenance": Wrench,
};

const PhaseCard = ({
  phase,
  visible,
  delay,
}: {
  phase: LifecyclePhase;
  visible: boolean;
  delay: number;
}) => {
  const Icon = phaseIcons[phase.title] ?? Cog;

  return (
    <article
      className={`group relative flex items-start gap-4 rounded-xl border border-transparent p-3 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[#121e37]/10 hover:bg-[#121e37]/[0.03] hover:shadow-[0_10px_28px_rgba(18,30,55,0.08)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:gap-5 sm:p-4 ${revealTransitionClass}`}
      style={revealMotionStyle(visible, delay, "up")}
    >
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#121e37]/5 transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-red-600 group-hover:shadow-[0_8px_20px_rgba(220,38,38,0.28)] motion-reduce:transition-none motion-reduce:group-hover:scale-100 sm:h-16 sm:w-16">
        <Icon
          className="h-7 w-7 text-[#121e37] transition-all duration-300 ease-out group-hover:rotate-3 group-hover:text-white motion-reduce:transition-none motion-reduce:group-hover:rotate-0 sm:h-8 sm:w-8"
          strokeWidth={1.5}
        />
        <span className="sr-only">{phase.title}</span>
      </div>
      <div className="min-w-0 pt-1">
        <h3 className="font-apfel_grotezk text-base font-bold leading-snug text-[#121e37] transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:text-red-600 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 sm:text-lg">
          {phase.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-700 sm:text-base">
          {phase.description}
        </p>
      </div>
      <span
        aria-hidden
        className="absolute bottom-0 left-3 right-3 h-0.5 origin-left scale-x-0 bg-red-600 transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none sm:left-4 sm:right-4"
      />
    </article>
  );
};

export const TurnkeyLifecycle = ({ content }: Props) => {
  const { ref, visible } = useRevealOnScroll();

  const phasePairs: [LifecyclePhase, LifecyclePhase][] = [];
  for (let i = 0; i < content.phases.length; i += 2) {
    const left = content.phases[i];
    const right = content.phases[i + 1];
    if (left && right) phasePairs.push([left, right]);
  }

  return (
    <section className="home-section-y w-full bg-white text-foreground">
      <div ref={ref} className="home-container">
        <div className="max-w-5xl space-y-5 text-base leading-relaxed text-gray-700 md:space-y-6 md:text-lg">
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

        <div className="mt-14 space-y-10 md:mt-16 md:space-y-12 lg:mt-20">
          {phasePairs.map(([left, right], rowIndex) => (
            <div
              key={left.title}
              className="group/row grid grid-cols-1 items-center gap-8 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-6 lg:gap-10"
            >
              <PhaseCard
                phase={left}
                visible={visible}
                delay={160 + rowIndex * 100}
              />

              <div
                className={`hidden items-center justify-center text-gray-300 transition-all duration-300 ease-out group-hover/row:translate-x-1 group-hover/row:text-red-600 md:flex motion-reduce:transition-none motion-reduce:group-hover/row:translate-x-0 ${revealTransitionClass}`}
                style={revealMotionStyle(visible, 200 + rowIndex * 100, "up")}
                aria-hidden
              >
                <ChevronsRight className="h-8 w-8" strokeWidth={1.25} />
              </div>

              <PhaseCard
                phase={right}
                visible={visible}
                delay={220 + rowIndex * 100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
