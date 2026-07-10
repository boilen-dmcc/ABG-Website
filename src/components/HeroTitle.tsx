import type { CSSProperties } from "react";

export type HeroTitleLine = {
  text: string;
  accent?: boolean;
};

type Props = {
  lines: HeroTitleLine[];
  className?: string;
  style?: CSSProperties;
};

/** Two-line homepage hero title only. */
export function HeroTitle({ lines, className = "", style }: Props) {
  return (
    <h1 className={`hero-title text-white ${className}`.trim()} style={style}>
      {lines.map((line, index) => (
        <span
          key={`${line.text}-${index}`}
          className={`block ${line.accent ? "text-red-600" : ""}`.trim()}
        >
          {line.text}
        </span>
      ))}
    </h1>
  );
}
