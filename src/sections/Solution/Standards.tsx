import type { Standard } from "./types";

type Props = {
  standards: Standard[];
  intro: string;
};

export const Standards = ({ standards, intro }: Props) => {
  return (
    <section className="relative w-full bg-white text-[#1a1a1a] py-20 sm:py-24 lg:py-32 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-12 lg:mb-16">
          <div className="lg:col-span-4">
            <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-5">
              STANDARDS & COMPLIANCE
            </p>
            <p className="font-apfel_grotezk text-xl lg:text-2xl leading-snug text-[#1a1a1a] max-w-[34ch]">
              {intro}
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 border-t border-gray-200 pt-8">
              {standards.map((std, i) => (
                <div
                  key={std.code}
                  className="flex items-baseline gap-5 py-2"
                >
                  <p className="font-necto_mono text-[10px] uppercase tracking-[0.22em] text-gray-400 whitespace-nowrap">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <p className="font-apfel_grotezk text-lg lg:text-xl font-semibold tracking-tight whitespace-nowrap">
                      {std.code}
                    </p>
                    <p className="mt-1 font-necto_mono text-[11px] uppercase tracking-[0.18em] text-gray-500 leading-snug">
                      {std.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
