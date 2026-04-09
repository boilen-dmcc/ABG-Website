import { HistoryTimeline } from "@/sections/MainContent/components/HistoryTimeline";

export const HistorySection = () => {
  return (
    <div className="relative box-border caret-transparent mt-8 rounded-lg">
      <div className="box-border caret-transparent max-w-[800px] min-h-16 mx-auto"></div>
      <div className="box-border caret-transparent gap-x-8 flex flex-wrap max-w-[calc(50%_+_620px)] gap-y-8 ml-auto mt-8 md:gap-x-16 md:flex-nowrap md:gap-y-16">
        <div className="self-center box-border caret-transparent basis-full grow-0 max-w-none break-words w-full pr-0 md:basis-0 md:grow md:max-w-[588px] md:pr-8">
          <h2 className="text-5xl box-border caret-transparent leading-[52.8px] break-words mb-12 px-[18.75px] font-apfel_grotezk md:text-[64px] md:leading-[70.4px] md:px-16">
            Creating a Lasting Legacy
          </h2>
          <p className="box-border caret-transparent break-words mt-4 px-[18.75px] md:px-16">
            In 1898, Warren A. Bechtel left Peabody, Kansas in search of
            construction work and opportunity out West. It was the first chapter
            in a history that would go on to span 126 years, 160 countries, and
            25,000 projects. What began as a small construction outfit evolved
            alongside the needs of a growing nation and a rapidly changing
            world. 
          </p>
          <p className="box-border caret-transparent break-words mt-8 px-[18.75px] md:px-16">
            While much has changed at Bechtel, the desire to explore new
            frontiers has remained a driving force. Our history is a history of
            being first to market, providing proof of concept, and going where
            no one has. 
          </p>
          <p className="box-border caret-transparent break-words mt-8 px-[18.75px] md:px-16">
            We built the first nuclear power plant to produce electricity. We
            constructed the first pipeline under the Arctic. We were one of the
            first American construction companies to establish a presence in
            Saudi Arabia. We built the facilities that produced the first U.S.
            LNG exports in more than 40 years.  
          </p>
          <p className="box-border caret-transparent break-words mt-8 px-[18.75px] md:px-16">
            We’re one of the only companies in the world to lay railroad track
            and fiber optic cable; to build shipyards and semiconductor
            factories; to support NASA’s moonshot in the early 1960s and now,
            its latest mission to send humans to Mars. And we’re just getting
            started. Our history is best understood by the incredible projects
            that have shaped it. Take a journey through our most iconic work by{" "}
            <a
              href="https://waateekaa.com/"
              className="text-red-600 box-border caret-transparent break-words underline underline-offset-4 hover:text-red-800 hover:border-red-800"
            >
              visiting WaaTeeKaa
            </a>
            , our company’s virtual museum experience. 
          </p>
          <div className="items-center box-border caret-transparent gap-x-8 flex flex-wrap break-words gap-y-8 mt-10 px-[18.75px] md:px-0">
            <div className="relative box-border caret-transparent isolate break-words before:accent-auto before:bg-red-600 before:caret-transparent before:text-gray-700 before:block before:text-xl before:not-italic before:normal-nums before:font-normal before:h-10 before:tracking-[0.0208px] before:leading-[30px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:-translate-y-5 before:visible before:w-10 before:z-10 before:rounded-full before:border-separate before:left-0 before:top-2/4 before:font-neue_haas_grotesk_display before:md:h-12 before:md:-translate-y-6 before:md:w-12">
              <a
                href="https://waateekaa.com/"
                className="relative text-red-600 text-base font-semibold content-center box-border caret-transparent inline-block h-full leading-10 break-words text-center text-nowrap w-full z-20 pl-[54px] pr-[23.328px] rounded-full md:text-xl md:leading-[48px] md:pl-[66px] md:pr-[28.66px] before:accent-auto before:caret-transparent before:text-white before:block before:text-xl before:not-italic before:normal-nums before:font-semibold before:tracking-[0.0208px] before:leading-5 before:list-outside before:list-disc before:break-words before:absolute before:text-center before:indent-[0px] before:normal-case before:text-nowrap before:translate-y-[-11px] before:origin-[47%_45%] before:visible before:z-0 before:border-separate before:left-3 before:top-[calc(50%_+_2px)] before:font-neue_haas_grotesk_display before:md:text-2xl before:md:leading-6 before:md:-translate-y-3 before:md:left-[14.4px]"
              >
                Back to the Beginning
              </a>
            </div>
          </div>
        </div>
        <div className="self-center box-border caret-transparent basis-full grow-0 break-words w-full md:basis-0 md:grow">
          <HistoryTimeline />
        </div>
      </div>
      <div className="box-border caret-transparent max-w-[800px] min-h-16 mt-8 mx-auto"></div>
    </div>
  );
};
