export type PageContentSectionProps = {
  heading?: string | string[];
  eyebrow?: string;
  paragraphs: string[];
  watermark?: string;
  image?: string;
  imageAlt?: string;
  className?: string;
};

export function PageContentSection({
  heading,
  eyebrow,
  paragraphs,
  watermark,
  image,
  imageAlt = "",
  className = "",
}: PageContentSectionProps) {
  const headingLines = heading
    ? Array.isArray(heading)
      ? heading
      : [heading]
    : null;
  const watermarkText = watermark ?? "GROWTH";

  return (
    <section
      className={`home-section-y border-t border-gray-200 bg-gray-50 ${className}`}
    >
      <div className="home-container relative">
        {watermark && (
          <div
            className="pointer-events-none absolute left-4 top-1/2 hidden -translate-y-1/2 select-none xs:left-5 sm:left-6 md:left-8 lg:block lg:left-10 xl:left-12"
            aria-hidden
          >
            <span className="font-extrabold uppercase leading-none text-transparent [-webkit-text-stroke:1px_rgba(18,30,55,0.07)] text-[clamp(3.5rem,12vw,10rem)]">
              {watermarkText}
            </span>
          </div>
        )}

        <div className="relative z-10 grid grid-cols-1 gap-8 xs:gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className={image ? "lg:col-span-7" : "max-w-3xl"}>
            {eyebrow && (
              <span className="mb-5 inline-block bg-red-600 px-2 py-0.5 text-sm font-semibold uppercase text-white xs:mb-6">
                {eyebrow}
              </span>
            )}

            {headingLines && (
              <h2 className="mb-6 max-w-[22ch] font-extrabold uppercase text-[#121e37] xs:mb-8">
                {headingLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
            )}

            <div className="max-w-[62ch] space-y-4 text-base leading-relaxed text-foreground/90 xs:space-y-5 lg:text-lg">
              {paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </div>

          {image && (
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={image}
                  alt={imageAlt}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
