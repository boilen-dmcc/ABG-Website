const companies = [
  {
    name: "TAQAT KIRKUK",
    description: "Downstream / refinery-adjacent gasoline production",
    category: "Energy & Downstream Operations"
  },
  {
    name: "Northern Covenant",
    description: "Oilfield / oil services, technical and operational support",
    category: "Energy & Downstream Operations"
  },
  {
    name: "Bryar Transport",
    description: "Oil logistics (land transport) + oil marketing / trading",
    category: "Energy & Downstream Operations"
  },
  {
    name: "Barham Black Gold",
    description: "Asphalt / bitumen production for roads and infrastructure",
    category: "Asphalt, Construction & Building Materials"
  },
  {
    name: "Rahand Company",
    description: "Technical / concrete blocks and building materials",
    category: "Asphalt, Construction & Building Materials"
  },
  {
    name: "Binaa Al Sahraa",
    description: "General contracting + trading of construction / industrial materials",
    category: "Asphalt, Construction & Building Materials"
  },
  {
    name: "Gashbin GmbH",
    description: "Real estate / property investment (Germany / EU positioning)",
    category: "Real Estate & Investment"
  },
  {
    name: "Al Barham DMCC",
    description: "Group investment / holding vehicle, financial and strategic investments",
    category: "Real Estate & Investment"
  }
];

export const AlBarhamCompanies = () => {
  return (
    <div className="relative bg-gray-50 box-border caret-transparent py-16 px-[18.75px] md:px-0">
      <div className="box-border caret-transparent max-w-[1240px] mx-auto">
        <h2 className="text-5xl box-border caret-transparent leading-[52.8px] mb-6 font-apfel_grotezk md:text-[64px] md:leading-[70.4px]">
          Our Companies
        </h2>
        <p className="text-xl box-border caret-transparent tracking-[0.4px] leading-8 max-w-[800px] mb-12">
          A diverse portfolio of specialized companies working together to deliver comprehensive energy solutions
        </p>
        <div className="box-border caret-transparent gap-x-6 grid grid-cols-1 gap-y-6 md:grid-cols-2 lg:grid-cols-4 max-w-[1240px]">
          {companies.map((company, index) => (
            <div
              key={index}
              className="relative bg-white box-border caret-transparent p-6 rounded-lg shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] transition-shadow"
            >
              <p className="text-xs text-red-600 box-border caret-transparent tracking-[0.5px] leading-[18px] uppercase mb-3 font-necto_mono">
                Portfolio Company
              </p>
              <h3 className="text-xl font-bold box-border caret-transparent mb-3 font-apfel_grotezk">
                {company.name}
              </h3>
              <p className="text-sm box-border caret-transparent leading-6 mb-4">
                {company.description}
              </p>
              <a
                href="#"
                className="text-red-600 text-sm font-semibold box-border caret-transparent hover:text-red-800 hover:underline"
              >
                Explore Company →
              </a>
            </div>
          ))}
        </div>
        <div className="box-border caret-transparent mt-12 text-center">
          <div className="relative box-border caret-transparent isolate inline-block before:accent-auto before:bg-red-600 before:caret-transparent before:text-gray-700 before:block before:text-xl before:not-italic before:normal-nums before:font-normal before:h-10 before:tracking-[0.0208px] before:leading-[30px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:-translate-y-5 before:visible before:w-10 before:z-10 before:rounded-full before:border-separate before:left-0 before:top-2/4 before:font-neue_haas_grotesk_display before:md:h-12 before:md:-translate-y-6 before:md:w-12">
            <a
              href="#"
              className="relative text-red-600 text-base font-semibold content-center box-border caret-transparent inline-block h-full leading-10 text-center text-nowrap w-full z-20 pl-[54px] pr-[23.328px] rounded-full md:text-xl md:leading-[48px] md:pl-[66px] md:pr-[28.66px] before:accent-auto before:caret-transparent before:text-white before:block before:text-xl before:not-italic before:normal-nums before:font-semibold before:tracking-[0.0208px] before:leading-5 before:list-outside before:list-disc before:absolute before:text-center before:indent-[0px] before:normal-case before:text-nowrap before:translate-y-[-11px] before:origin-[47%_45%] before:visible before:z-0 before:border-separate before:left-3 before:top-[calc(50%_+_2px)] before:font-neue_haas_grotesk_display before:md:text-2xl before:md:leading-6 before:md:-translate-y-3 before:md:left-[14.4px]"
            >
              View All Companies
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
