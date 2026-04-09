export const TeamSection = () => {
  return (
    <div className="relative text-white items-end box-border caret-transparent flex justify-center min-h-[1000px] overflow-clip bg-center py-[100px] md:min-h-[430px]">
      <span className="absolute bg-stone-900 box-border caret-transparent block opacity-50 z-[1] inset-0"></span>
      <video
        autoplay=""
        muted=""
        loop=""
        playsinline=""
        src="https://www.bechtel.com/wp-content/uploads/2025/02/bechtel-home-people.mp4"
        className="absolute box-border caret-transparent h-full object-cover w-full z-0 inset-0"
      ></video>
      <div className="relative box-border caret-transparent w-full z-[1]">
        <div className="box-border caret-transparent gap-x-8 flex flex-wrap max-w-[1240px] gap-y-8 mx-auto md:flex-nowrap">
          <div className="self-start box-border caret-transparent basis-full grow-0 break-words w-full md:basis-0 md:grow">
            <h2 className="text-5xl box-border caret-transparent leading-[52.8px] break-words mb-12 px-[18.75px] font-apfel_grotezk md:text-[64px] md:leading-[70.4px] md:px-16">
              Defined by the Quality of Our People
            </h2>
            <div className="items-center box-border caret-transparent gap-x-8 flex flex-wrap break-words gap-y-8 mt-10 px-[18.75px] md:px-0">
              <div className="relative box-border caret-transparent isolate break-words before:accent-auto before:bg-red-600 before:caret-transparent before:text-white before:block before:text-xl before:not-italic before:normal-nums before:font-normal before:h-10 before:tracking-[0.0208px] before:leading-[30px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:-translate-y-5 before:visible before:w-10 before:z-10 before:rounded-full before:border-separate before:left-0 before:top-2/4 before:font-neue_haas_grotesk_display before:md:h-12 before:md:-translate-y-6 before:md:w-12">
                <a
                  href="https://www.bechtel.com/people/"
                  className="relative text-base font-semibold content-center box-border caret-transparent inline-block h-full leading-10 break-words text-center text-nowrap w-full z-20 pl-[54px] pr-[23.328px] rounded-full md:text-xl md:leading-[48px] md:pl-[66px] md:pr-[28.66px] before:accent-auto before:caret-transparent before:text-white before:block before:text-xl before:not-italic before:normal-nums before:font-semibold before:tracking-[0.0208px] before:leading-5 before:list-outside before:list-disc before:break-words before:absolute before:text-center before:indent-[0px] before:normal-case before:text-nowrap before:translate-y-[-11px] before:origin-[47%_45%] before:visible before:z-0 before:border-separate before:left-3 before:top-[calc(50%_+_2px)] before:font-neue_haas_grotesk_display before:md:text-2xl before:md:leading-6 before:md:-translate-y-3 before:md:left-[14.4px]"
                >
                  The People Behind the Projects
                </a>
              </div>
            </div>
          </div>
          <div className="self-start box-border caret-transparent basis-full grow-0 break-words w-full md:basis-0 md:grow">
            <p className="box-border caret-transparent break-words px-[18.75px] md:px-16">
              Our people bring technical excellence, ingenuity, drive,
              creativity, and experience to help our customers achieve their
              bold visions. We succeed through partnership and a shared desire
              to make a difference. Motivated by tomorrow’s challenges, we push
              the limits of what’s possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
