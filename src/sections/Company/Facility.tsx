import type { CompanyData } from "./types";

type Props = { data: CompanyData };

export const Facility = ({ data }: Props) => {
  return (
    <section className="relative w-full bg-gray-900 text-white">
      <div className="relative w-full min-h-[70vh] lg:min-h-[85vh] overflow-hidden">
        <img
          src={data.facilityImage}
          alt={data.facilityImageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.75) 100%)",
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-20 sm:py-28 lg:py-36 flex flex-col justify-end min-h-[70vh] lg:min-h-[85vh]">
          <div className="max-w-[64rem]">
            <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-red-500 mb-5">
              FACILITY SPOTLIGHT · {data.facilityCity.toUpperCase()}
            </p>
            <h2 className="font-apfel_grotezk font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight max-w-[20ch]">
              {data.facilityHeading}
            </h2>
          </div>

          <div className="mt-10 lg:mt-14 w-full lg:max-w-[720px] bg-white/10 backdrop-blur-md border border-white/10 p-6 sm:p-8">
            <p className="font-necto_mono text-[10px] lg:text-[11px] uppercase tracking-[0.2em] text-white/60 mb-6">
              TECHNICAL DATA — {data.legalName.toUpperCase()}
            </p>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
              {data.facilitySpecs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex flex-col gap-1.5 border-t border-white/10 pt-4"
                >
                  <dt className="font-necto_mono text-[10px] lg:text-[11px] uppercase tracking-[0.2em] text-white/55">
                    {spec.label}
                  </dt>
                  <dd className="font-neue_haas_grotesk_display text-sm lg:text-base text-white leading-snug">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};
