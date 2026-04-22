import type { Standard } from "./types";

type Props = {
  standards: Standard[];
  hseStat: string;
};

export const Standards = ({ standards, hseStat }: Props) => {
  return (
    <section className="relative w-full bg-white text-[#1a1a1a] py-16 sm:py-20 lg:py-24 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-5">
          <p className="font-necto_mono text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-5">
            STANDARDS & CODES
          </p>
          <p className="font-apfel_grotezk text-xl lg:text-2xl leading-snug text-[#1a1a1a] max-w-[38ch]">
            {hseStat}
          </p>
        </div>
        <div className="lg:col-span-7">
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
            {standards.map((std) => (
              <li
                key={std.code}
                className="bg-white p-6 lg:p-7 flex flex-col gap-2 min-h-[120px]"
              >
                <p className="font-apfel_grotezk text-base lg:text-lg font-semibold tracking-tight">
                  {std.code}
                </p>
                <p className="font-necto_mono text-[10px] lg:text-[11px] uppercase tracking-[0.18em] text-gray-500 leading-snug">
                  {std.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
