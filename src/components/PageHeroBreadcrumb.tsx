import type { CSSProperties } from "react";

type Props = {
  label: string;
  className?: string;
  style?: CSSProperties;
};

export function PageHeroBreadcrumb({ label, className = "", style }: Props) {
  const parts = label.split("·").map((part) => part.trim()).filter(Boolean);
  const primary = parts[0] ?? label.trim();
  const secondary = parts.slice(1).join(" · ");

  return (
    <nav
      aria-label="Breadcrumb"
      className={`inline-flex flex-wrap items-center gap-x-2.5 gap-y-1 ${className}`}
      style={style}
    >
      <span className="inline-block bg-red-600 px-2 py-0.5 text-xs font-semibold uppercase tracking-[0.16em] text-white md:text-sm">
        {primary}
      </span>

      {secondary ? (
        <>
          <span
            className="font-necto_mono text-xs font-bold uppercase tracking-[0.2em] text-white/30 md:text-sm"
            aria-hidden
          >
            ·
          </span>
          <span className="font-necto_mono text-xs font-bold uppercase tracking-[0.2em] text-white/80 md:text-sm">
            {secondary}
          </span>
        </>
      ) : null}
    </nav>
  );
}
