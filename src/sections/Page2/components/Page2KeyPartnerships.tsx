import {
  revealMotionStyle,
  revealTransitionClass,
  useRevealOnScroll,
} from "@/hooks/useRevealOnScroll";

const partnerLogos = [
  { src: "/partners/honey-well.jpg", alt: "Honeywell UOP" },
  { src: "/partners/abg-group.jpg", alt: "Al-Barham Group" },
  { src: "/partners/kbr.jpg", alt: "Kellogg Brown & Root (KBR)" },
];

export const Page2KeyPartnerships = () => {
  const { ref, visible } = useRevealOnScroll({ threshold: 0.1 });

  return (
    <section className="home-section-y bg-white">
      <div ref={ref} className="home-container">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          <div className="lg:col-span-7">
            <div
              className={`mb-8 sm:mb-10 md:mb-12 lg:mb-14 ${revealTransitionClass}`}
              style={revealMotionStyle(visible, 0, "up")}
            >
              <h2 className="mb-4 font-extrabold uppercase leading-[1.1] sm:mb-6">
                Key Partnerships
              </h2>
              <p className="max-w-[800px] text-base sm:text-lg">
                Global technology and engineering alliances that strengthen
                ABG&apos;s delivery across refining, gas processing, and energy
                infrastructure.
              </p>
            </div>

            <div
              className={`max-w-4xl ${revealTransitionClass}`}
              style={revealMotionStyle(visible, 120, "up")}
            >
              <article className="space-y-4 text-left text-base leading-relaxed text-[#121e37] sm:space-y-5 sm:text-lg md:space-y-6">
                <h3 className="text-lg font-bold uppercase tracking-wide text-[#121e37] sm:text-xl md:text-2xl">
                  ABG x Honeywell UOP
                </h3>

                <p>
                  ABG has established a strategic collaboration with{" "}
                  <strong className="font-semibold">Honeywell UOP</strong> to
                  explore advanced refining, petrochemical, and gas processing
                  opportunities in Iraq.
                </p>

                <p>
                  The partnership focuses on world-class process technologies,
                  including{" "}
                  <strong className="font-semibold">
                    hydrotreating, gasoline upgrading, hydrocracking, jet fuel
                    production, and gas processing solutions
                  </strong>
                  , supporting the development of modern and efficient energy
                  infrastructure.
                </p>

                <p>
                  This collaboration reinforces ABG&apos;s commitment to
                  innovation, operational excellence, and the growth of
                  Iraq&apos;s downstream energy sector.
                </p>
              </article>

              <div className="my-8 flex flex-wrap items-center justify-start gap-6 sm:my-10 sm:gap-8 md:my-12 md:gap-12 lg:my-14 lg:gap-16">
                {partnerLogos.map((logo) => (
                  <img
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-10 w-auto max-w-[140px] object-contain opacity-90 transition-opacity duration-300 hover:opacity-100 xs:h-12 xs:max-w-[160px] sm:h-14 md:h-16"
                  />
                ))}
              </div>

              <article className="space-y-4 text-left text-base leading-relaxed text-[#121e37] sm:space-y-5 sm:text-lg md:space-y-6">
                <h3 className="text-lg font-bold uppercase tracking-wide text-[#121e37] sm:text-xl md:text-2xl">
                  ABG x Kellogg Brown & Root (KBR)
                </h3>

                <p>
                  ABG collaborates with{" "}
                  <strong className="font-semibold">
                    Kellogg Brown & Root (KBR)
                  </strong>{" "}
                  to support strategic refining, gas processing, and energy
                  infrastructure projects across Iraq.
                </p>

                <p>
                  The cooperation includes{" "}
                  <strong className="font-semibold">
                    technical advisory services, feasibility studies, and project
                    development planning
                  </strong>{" "}
                  under internationally recognized execution models, such as{" "}
                  <strong className="font-semibold">
                    BOO, BOOT, EPC, EPCF and EPCM
                  </strong>
                  .
                </p>

                <p>
                  Through global engineering expertise, ABG continues to deliver
                  sustainable and high-value energy solutions that contribute to
                  Iraq&apos;s industrial development and energy security.
                </p>
              </article>
            </div>
          </div>

          <div
            className={`lg:sticky lg:top-28 lg:col-span-5 ${revealTransitionClass}`}
            style={revealMotionStyle(visible, 180, "right")}
          >
            <img
              src="/abg-kpr.webp"
              alt="ABG strategic partnerships with Honeywell UOP and KBR"
              className="mx-auto w-full max-w-sm object-contain xs:max-w-md lg:ml-auto lg:max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
