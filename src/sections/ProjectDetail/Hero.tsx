import type { ProjectDetailData } from "./types";

type Props = { data: ProjectDetailData };

export const Hero = ({ data }: Props) => {
  const { processPackage } = data;

  return (
    <section className="w-full border-t border-gray-200 bg-white py-16 text-foreground md:py-20">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-6 lg:gap-10 lg:items-start">
          <div className="order-2 col-span-12 lg:order-1 lg:col-span-7">
            <h2 className="text-xl font-bold text-[#121e37] md:text-2xl">
              {processPackage.heading}
            </h2>

            <ul className="mt-6 space-y-4">
              {processPackage.items.map((item) => (
                <li
                  key={item}
                  className="grid grid-cols-[auto_1fr] items-start gap-x-3 text-base leading-relaxed text-gray-700 md:text-lg"
                >
                  <span
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 max-w-[62ch] text-base leading-relaxed text-gray-700 md:text-lg">
              {processPackage.closing}
            </p>
          </div>

          <aside className="order-1 col-span-12 lg:order-2 lg:col-span-5 lg:mt-2">
            <div className="flex flex-col border border-gray-200 bg-gray-50 p-6 sm:p-7">
              <dl className="flex flex-col gap-4">
                {data.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1.2fr)] items-start gap-x-3 gap-y-1"
                  >
                    <dt className="text-sm font-medium leading-snug text-[#121e37] lg:text-base">
                      {spec.label}
                    </dt>
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600"
                      aria-hidden
                    />
                    <dd className="text-sm font-normal leading-snug text-gray-600 lg:text-base">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
