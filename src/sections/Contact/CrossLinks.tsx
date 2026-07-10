import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { ContactData } from "./types";

type Props = { data: ContactData };

export const CrossLinks = ({ data }: Props) => {
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
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-gray-900 text-white py-20 sm:py-24 lg:py-32 overflow-hidden isolate">
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
        <div className="text-center mb-14 lg:mb-18">
          <h2 className="heading-section leading-[1.05]">
            {data.crossLinksHeading}
          </h2>
        </div>

        <div className="border-t border-white/20">
          {data.crossLinks.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              className="group grid grid-cols-[1fr_auto] items-center gap-6 py-7 lg:py-9 border-b border-white/15 hover:text-red-600 transition-colors duration-300 motion-reduce:transition-none"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(10px)",
                transitionProperty: "opacity, transform",
                transitionDuration: "700ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: `${i * 70}ms`,
              }}
            >
              <span className="font-necto_mono text-sm lg:text-base font-bold uppercase tracking-[0.22em]">
                {link.label}
              </span>
              <ArrowUpRight className="w-5 h-5 lg:w-6 lg:h-6 transition-transform duration-300 motion-reduce:transition-none group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
