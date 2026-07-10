import type { Standard } from "./types";

type Props = {
  standards: Standard[];
  intro: string;
};

export const Standards = ({ standards, intro }: Props) => {
  return (
    <section className="home-section-y relative w-full border-t border-gray-200 bg-white text-foreground">
      <div className="home-container">
        <div className="mb-10 grid grid-cols-1 gap-8 xs:gap-10 lg:mb-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-5">
              STANDARDS & COMPLIANCE
            </p>
            <p className="font-apfel_grotezk text-xl lg:text-2xl leading-snug text-foreground max-w-[34ch]">
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
                    <p className="font-apfel_grotezk text-base font-semibold tracking-tight sm:text-lg lg:text-xl">
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
