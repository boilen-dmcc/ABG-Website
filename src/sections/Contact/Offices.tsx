import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { ContactData } from "./types";

type Props = { data: ContactData };

export const Offices = ({ data }: Props) => {
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
        <div className="max-w-[64rem] mb-14 lg:mb-20">
          <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-5">
            {data.officesEyebrow}
          </p>
          <h2 className="font-apfel_grotezk font-semibold text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tight max-w-[22ch]">
            {data.officesHeading}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {data.offices.map((office, i) => {
            const query = encodeURIComponent(
              `${office.city}, ${office.country}`,
            );
            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
            const telHref = `tel:${office.phone.replace(/[\s-]/g, "")}`;
            return (
              <article
                key={office.slug}
                className="relative bg-gray-900 p-8 lg:p-12 flex flex-col transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(14px)",
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <p className="font-necto_mono text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.22em] text-red-600">
                  {office.label}
                </p>
                <h3 className="mt-4 lg:mt-5 font-apfel_grotezk font-semibold text-3xl lg:text-4xl leading-tight tracking-tight">
                  {office.city}
                </h3>
                <p className="mt-1 font-necto_mono text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">
                  {office.country}
                </p>

                <dl className="mt-8 lg:mt-10 flex flex-col">
                  <div className="py-4 border-t border-white/15">
                    <dt className="font-necto_mono text-[10px] uppercase tracking-[0.22em] text-white/45 mb-2">
                      ADDRESS
                    </dt>
                    <dd className="text-sm lg:text-base text-white/80 leading-relaxed">
                      {office.addressLines.map((line, idx) => (
                        <span key={line}>
                          {line}
                          {idx < office.addressLines.length - 1 && <br />}
                        </span>
                      ))}
                    </dd>
                  </div>
                  <div className="py-4 border-t border-white/15">
                    <dt className="font-necto_mono text-[10px] uppercase tracking-[0.22em] text-white/45 mb-2">
                      PHONE
                    </dt>
                    <dd>
                      <a
                        href={telHref}
                        className="text-sm lg:text-base text-white/80 hover:text-red-600 transition-colors duration-300 motion-reduce:transition-none"
                      >
                        {office.phone}
                      </a>
                    </dd>
                  </div>
                  <div className="py-4 border-t border-b border-white/15">
                    <dt className="font-necto_mono text-[10px] uppercase tracking-[0.22em] text-white/45 mb-2">
                      HOURS
                    </dt>
                    <dd className="text-sm lg:text-base text-white/80 leading-relaxed">
                      {office.hours}
                    </dd>
                  </div>
                </dl>

                <div className="mt-8 lg:mt-10">
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 font-necto_mono text-[11px] lg:text-xs font-semibold uppercase tracking-[0.22em] text-white/70 hover:text-white transition-colors duration-300 motion-reduce:transition-none"
                  >
                    <span>View on Google Maps</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
