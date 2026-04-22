import type { ContactData } from "./types";

type Props = { data: ContactData };

export const Hero = ({ data }: Props) => {
  const telHref = `tel:${data.primaryPhone.replace(/\s/g, "")}`;
  return (
    <section className="relative w-full min-h-screen bg-gray-900 text-white overflow-hidden isolate">
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "80px 100%",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 min-h-screen flex flex-col pt-36 sm:pt-40 lg:pt-44 pb-10 sm:pb-14 lg:pb-16">
        <div>
          <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.22em] text-white/55">
            {data.heroEyebrow}
          </p>
        </div>

        <div className="flex-1 flex flex-col justify-center py-12 lg:py-20">
          <h1 className="font-apfel_grotezk font-semibold text-5xl sm:text-6xl lg:text-7xl bp1090:text-8xl leading-[1.02] tracking-tight max-w-[22ch]">
            {data.heroHeadingPrefix}
            <span className="text-red-600">{data.heroHeadingAccent}</span>
            {data.heroHeadingSuffix}
          </h1>

          <div className="mt-12 lg:mt-16 max-w-[28ch]">
            <a
              href={`mailto:${data.primaryEmail}`}
              className="block font-apfel_grotezk font-semibold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] hover:text-red-600 transition-colors duration-300 motion-reduce:transition-none break-all"
            >
              {data.primaryEmail}
            </a>
            <a
              href={telHref}
              className="mt-4 lg:mt-5 block font-necto_mono text-2xl lg:text-3xl tracking-tight leading-tight text-white/75 hover:text-red-600 transition-colors duration-300 motion-reduce:transition-none"
            >
              {data.primaryPhone}
            </a>
          </div>

          <p className="mt-10 lg:mt-12 max-w-[40ch] text-base lg:text-lg text-white/70 leading-relaxed">
            {data.heroSubhead}
          </p>
        </div>

        <div className="pt-6 lg:pt-8 border-t border-white/15">
          <p className="font-necto_mono text-[10px] lg:text-[11px] uppercase tracking-[0.24em] text-white/45 leading-relaxed">
            {data.channels.map((channel, i) => (
              <span key={channel.slug}>
                <span className="text-white/70">{channel.label}</span>
                {i < data.channels.length - 1 && (
                  <span className="mx-3 text-white/25">·</span>
                )}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};
