import { useEffect, useRef, useState, type CSSProperties } from "react";

type RevealAxis = "up" | "left" | "right";

type RevealOptions = {
  threshold?: number;
  rootMargin?: string;
};

const REVEAL_DURATION_MS = 1200;
const REVEAL_DELAY_SCALE = 1.5;
const REVEAL_EASING = "cubic-bezier(0.22, 1, 0.36, 1)";

export const revealTransitionClass =
  "transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";

export function revealMotionStyle(
  visible: boolean,
  delayMs = 0,
  axis: RevealAxis = "up",
): CSSProperties {
  const hiddenTransform =
    axis === "left"
      ? "translateX(-14px)"
      : axis === "right"
        ? "translateX(14px)"
        : "translateY(12px)";

  return {
    opacity: visible ? 1 : 0,
    transform: visible ? "translate(0)" : hiddenTransform,
    transitionDuration: `${REVEAL_DURATION_MS}ms`,
    transitionTimingFunction: REVEAL_EASING,
    transitionDelay: `${Math.round(delayMs * REVEAL_DELAY_SCALE)}ms`,
  };
}

export function useRevealOnScroll<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions = {},
) {
  const ref = useRef<T>(null);
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
      {
        threshold: options.threshold ?? 0.12,
        rootMargin: options.rootMargin ?? "0px 0px -20px 0px",
      },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [options.threshold, options.rootMargin]);

  return { ref, visible };
}

export function useRevealOnMount() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(true), 80);
    return () => window.clearTimeout(timeout);
  }, []);

  return visible;
}
