import { useEffect, useMemo, useRef, useState } from "react";
import type { CareersData } from "./types";

type Props = { data: CareersData };

export const Teams = ({ data }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const countsByTeam = useMemo(() => {
    const map = new Map<string, number>();
    for (const role of data.roles) {
      map.set(role.team, (map.get(role.team) ?? 0) + 1);
    }
    return map;
  }, [data.roles]);

  return (
    <section className="relative w-full bg-gray-900 text-white py-20 sm:py-28 lg:py-36 overflow-hidden isolate">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "80px 100%",
        }}
        aria-hidden
      />

      <div
        ref={ref}
        className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14 lg:mb-20">
          <div className="lg:col-span-7">
            <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-5">
              {data.teamsEyebrow}
            </p>
            <h2 className="heading-section leading-[1.05] max-w-[20ch]">
              {data.teamsHeading}
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-4">
            <p className="max-w-[46ch] text-base lg:text-lg text-white/70 leading-relaxed">
              {data.teamsIntro}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {data.teams.map((team, i) => {
            const count = countsByTeam.get(team.name) ?? 0;
            return (
              <div
                key={team.name}
                className="relative bg-gray-900 p-7 lg:p-9 flex flex-col min-h-[240px] lg:min-h-[280px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(14px)",
                  transitionDelay: `${i * 70}ms`,
                }}
              >
                <p className="font-necto_mono text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.22em] text-red-600">
                  {team.label}
                </p>
                <h3 className="mt-4 font-apfel_grotezk font-semibold text-2xl lg:text-3xl leading-tight tracking-tight">
                  {team.name}
                </h3>
                <p className="mt-3 text-sm lg:text-base text-white/65 leading-relaxed flex-1">
                  {team.description}
                </p>
                <div className="mt-6 pt-5 border-t border-white/15">
                  <span className="font-necto_mono text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60 tabular-nums">
                    {count} {count === 1 ? "OPEN ROLE" : "OPEN ROLES"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
