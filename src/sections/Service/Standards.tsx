import type { Standard } from "./types";

type Props = {
  standards: Standard[];
  hseStat: string;
};

export const Standards = ({ standards, hseStat }: Props) => {
  return (
    <section className="relative w-full bg-white text-foreground py-20 sm:py-24 lg:py-32 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-5">
          <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-5">
            STANDARDS & CODES
          </p>
          <p className="font-apfel_grotezk text-xl lg:text-2xl leading-snug text-foreground max-w-[38ch]">
            {hseStat}
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="border-t border-gray-300">
            {standards.map((std, i) => (
              <div
                key={std.code}
                className="grid grid-cols-[40px_1fr] sm:grid-cols-[40px_minmax(140px,200px)_1fr] gap-x-4 sm:gap-x-8 lg:gap-x-12 gap-y-1 items-baseline py-6 lg:py-7 border-b border-gray-200"
              >
                <p className="row-span-2 sm:row-span-1 font-necto_mono text-[10px] uppercase tracking-[0.22em] text-gray-400 self-center sm:self-baseline">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="font-apfel_grotezk text-lg lg:text-xl font-semibold tracking-tight whitespace-nowrap">
                  {std.code}
                </p>
                <p className="col-start-2 sm:col-auto font-necto_mono text-[11px] lg:text-xs uppercase tracking-[0.18em] text-gray-500 leading-snug">
                  {std.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
