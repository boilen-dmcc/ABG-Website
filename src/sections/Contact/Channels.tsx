import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import type { ContactData } from "./types";

type Props = { data: ContactData };

export const Channels = ({ data }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);

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

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleCopy = (slug: string, email: string) => {
    if (
      typeof navigator !== "undefined" &&
      navigator.clipboard &&
      typeof navigator.clipboard.writeText === "function"
    ) {
      void navigator.clipboard.writeText(email).catch(() => {});
    }
    setCopiedSlug(slug);
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      setCopiedSlug(null);
      timeoutRef.current = null;
    }, 1600);
  };

  return (
    <section
      id="channels"
      className="relative w-full bg-white text-[#1a1a1a] py-20 sm:py-28 lg:py-36 scroll-mt-24"
    >
      <div
        ref={ref}
        className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14 lg:mb-20">
          <div className="lg:col-span-7">
            <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-5">
              {data.channelsEyebrow}
            </p>
            <h2 className="font-apfel_grotezk font-semibold text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tight max-w-[22ch]">
              {data.channelsHeading}
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-4">
            <p className="max-w-[46ch] text-base lg:text-lg text-[#1a1a1a]/70 leading-relaxed">
              {data.channelsIntro}
            </p>
          </div>
        </div>

        <div className="border-t-2 border-[#1a1a1a]">
          {data.channels.map((channel, i) => {
            const isCopied = copiedSlug === channel.slug;
            return (
              <div
                key={channel.slug}
                className="border-b border-gray-200 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible
                    ? "translateY(0)"
                    : "translateY(14px)",
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <div className="grid grid-cols-[1fr_auto] lg:grid-cols-12 items-center gap-4 sm:gap-6 lg:gap-10 py-7 lg:py-10">
                  <div className="col-span-1 lg:col-span-3 order-1 lg:order-1">
                    <p className="font-necto_mono text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.22em] text-red-600">
                      {channel.label}
                    </p>
                    <p className="mt-2 text-sm text-[#1a1a1a]/60 leading-relaxed max-w-[32ch]">
                      {channel.description}
                    </p>
                  </div>

                  <div className="col-span-2 lg:col-span-8 order-3 lg:order-2 min-w-0">
                    <a
                      href={`mailto:${channel.email}`}
                      onClick={() => handleCopy(channel.slug, channel.email)}
                      className="block font-apfel_grotezk font-semibold text-2xl sm:text-3xl lg:text-5xl leading-tight tracking-tight hover:text-red-600 transition-colors duration-300 motion-reduce:transition-none break-all"
                    >
                      {channel.email}
                    </a>
                  </div>

                  <div className="col-span-1 lg:col-span-1 order-2 lg:order-3 lg:justify-self-end">
                    <button
                      type="button"
                      onClick={() =>
                        handleCopy(channel.slug, channel.email)
                      }
                      aria-label={`Copy ${channel.email} to clipboard`}
                      className="group/copy relative block rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                    >
                      <span
                        className={`relative w-10 h-10 lg:w-11 lg:h-11 rounded-full border flex items-center justify-center transition-all duration-300 motion-reduce:transition-none ${
                          isCopied
                            ? "bg-red-600 border-red-600 text-white"
                            : "bg-white border-gray-300 text-[#1a1a1a] group-hover/copy:border-[#1a1a1a]"
                        }`}
                      >
                        <ArrowUpRight
                          className={`absolute w-4 h-4 transition-all duration-300 motion-reduce:transition-none ${
                            isCopied
                              ? "opacity-0 scale-75"
                              : "opacity-100 scale-100"
                          }`}
                          aria-hidden
                        />
                        <Check
                          className={`absolute w-4 h-4 transition-all duration-300 motion-reduce:transition-none ${
                            isCopied
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-75"
                          }`}
                          aria-hidden
                        />
                      </span>
                    </button>
                    <span
                      aria-live="polite"
                      className={`block mt-2 font-necto_mono text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.22em] text-red-600 text-right transition-opacity duration-300 motion-reduce:transition-none ${
                        isCopied ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      COPIED
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
