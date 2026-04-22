import { useEffect, useRef, useState } from "react";
import type { Project } from "./types";

type Props = { project: Project };

export const Stage = ({ project }: Props) => {
  const [displayed, setDisplayed] = useState(project);
  const [isEntering, setIsEntering] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (displayed.slug === project.slug) return;

    setIsEntering(true);
    if (timerRef.current) window.clearTimeout(timerRef.current);

    timerRef.current = window.setTimeout(() => {
      setDisplayed(project);
      setIsEntering(false);
    }, 180);

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [project, displayed.slug]);

  return (
    <div className="relative w-full">
      <div
        className={`relative w-full aspect-[16/9] overflow-hidden bg-gray-100 transition-opacity duration-500 motion-reduce:transition-none ${
          isEntering ? "opacity-0" : "opacity-100"
        }`}
      >
        <img
          key={displayed.slug}
          src={displayed.image}
          alt={displayed.title}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
            isEntering ? "scale-[1.02]" : "scale-100"
          }`}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 45%, transparent 70%)",
          }}
          aria-hidden
        />

        <div
          className={`absolute bottom-5 left-5 sm:bottom-8 sm:left-8 lg:bottom-10 lg:left-10 max-w-[44ch] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
            isEntering
              ? "opacity-0 translate-y-3"
              : "opacity-100 translate-y-0"
          }`}
        >
          <div className="bg-black/40 backdrop-blur-md border border-white/15 p-5 sm:p-6 lg:p-7 text-white">
            <p className="font-necto_mono text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.22em] text-red-400 mb-3">
              {displayed.category}
            </p>
            <h3 className="font-apfel_grotezk font-semibold text-3xl sm:text-4xl lg:text-5xl leading-[1.02] tracking-tight">
              {displayed.title}
            </h3>
            <p className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-1 font-necto_mono text-[11px] lg:text-xs uppercase tracking-[0.18em] text-white/70">
              <span>{displayed.location}</span>
              <span className="text-white/30">·</span>
              <span className="text-white tabular-nums">{displayed.value}</span>
            </p>
            <p className="mt-4 text-sm lg:text-base text-white/80 leading-relaxed">
              {displayed.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
