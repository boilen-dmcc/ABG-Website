import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonProps = {
  to?: string;
  href?: string;
  fullWidth?: boolean;
  variant?: "primary" | "secondary";
  className?: string;
  children: ReactNode;
  "aria-label"?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

const variantClasses = {
  primary:
    "group relative overflow-hidden text-white bg-red-600 hover:bg-red-700 border-2 border-transparent",
  secondary:
    "group relative overflow-hidden text-foreground bg-transparent border-2 border-red-600 hover:bg-red-600 hover:text-white",
};

function ButtonContent({ children }: { children: ReactNode }) {
  return (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full motion-reduce:transition-none motion-reduce:transform-none"
      />
      <span className="relative z-[1]">{children}</span>
      <span
        aria-hidden
        className="relative z-[1] inline-flex h-4 w-4 shrink-0 items-center justify-center overflow-visible"
      >
        <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:transform-none" />
      </span>
    </>
  );
}

export function Button({
  to,
  href,
  fullWidth = false,
  variant = "primary",
  className = "",
  children,
  disabled,
  "aria-label": ariaLabel,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = [
    "font-semibold rounded-full text-sm transition-colors duration-300 ease-out motion-reduce:transition-none",
    variantClasses[variant],
    fullWidth
      ? "flex w-full items-center justify-center gap-2 px-6 py-3"
      : "inline-flex items-center justify-center gap-2 px-6 py-3",
    disabled ? "opacity-50 pointer-events-none cursor-not-allowed" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
        <ButtonContent>{children}</ButtonContent>
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel} onClick={onClick}>
        <ButtonContent>{children}</ButtonContent>
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      <ButtonContent>{children}</ButtonContent>
    </button>
  );
};
