const certificates = [
  {
    src: "/certificate-1.webp",
    alt: "ISO 9001:2015 Quality Management System certificate",
    standard: "ISO 9001:2015",
    title: "Quality Management System",
    description:
      "Ensuring consistent quality, operational efficiency, and customer satisfaction through continuous improvement and performance excellence.",
  },
  {
    src: "/certificate-2.webp",
    alt: "ISO 14001:2015 Environmental Management System certificate",
    standard: "ISO 14001:2015",
    title: "Environmental Management System",
    description:
      "Supporting environmentally responsible practices, sustainability initiatives, and long-term operational performance standards.",
  },
  {
    src: "/certificate-3.webp",
    alt: "ISO 45001:2018 Occupational Health and Safety Management System certificate",
    standard: "ISO 45001:2018",
    title: "Occupational Health & Safety",
    description:
      "Dedicated to maintaining safe workplaces through effective health, safety, and workplace risk management practices.",
  },
];

export const Page2Certificates = () => {
  return (
    <section className="home-section-y bg-white">
      <div className="home-container">
        <div className="grid grid-cols-1 gap-8 xs:gap-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8 xl:gap-10">
          {certificates.map((certificate) => (
            <div key={certificate.src} className="group flex flex-col items-start">
              <div className="w-full overflow-hidden rounded-lg border border-gray-100 shadow-lg">
                <img
                  src={certificate.src}
                  alt={certificate.alt}
                  className="w-full scale-100 transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>

              <div className="mt-6 flex w-full flex-col items-start gap-3">
                <span className="w-fit bg-red-600 px-2.5 py-0.5 text-sm font-semibold uppercase tracking-wide text-white">
                  {certificate.standard}
                </span>

                <h3 className="text-lg font-bold leading-snug text-[#121e37] md:text-xl">
                  {certificate.title}
                </h3>

                <p className="text-base leading-relaxed text-gray-700">
                  {certificate.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
