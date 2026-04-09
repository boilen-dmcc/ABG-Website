export const WeAreBechtelSection = () => {
  return (
    <div className="relative text-white items-end box-border caret-transparent flex justify-center min-h-[1000px] overflow-clip bg-center py-[100px] md:min-h-[430px]">
      <span className="absolute bg-stone-900 box-border caret-transparent block opacity-50 z-[1] inset-0"></span>
      <video
        autoplay=""
        muted=""
        loop=""
        playsinline=""
        src="https://www.bechtel.com/wp-content/uploads/2025/02/bechtel-we-are-bechtel.mp4"
        className="absolute box-border caret-transparent h-full object-cover w-full z-0 inset-0"
      ></video>
      <div className="relative box-border caret-transparent w-full z-[1]">
        <div className="box-border caret-transparent gap-x-8 flex flex-wrap max-w-[1240px] gap-y-8 mx-auto md:flex-nowrap">
          <div className="box-border caret-transparent basis-full grow-0 break-words md:basis-0 md:grow">
            <h2 className="text-5xl box-border caret-transparent leading-[52.8px] break-words mb-12 px-[18.75px] font-apfel_grotezk md:text-[64px] md:leading-[70.4px] md:px-16">
              We Are Bechtel
            </h2>
            <button className="relative text-[13.3333px] items-center bg-transparent caret-transparent gap-x-1 flex h-[72px] isolate justify-start tracking-[normal] leading-[normal] break-words gap-y-1 text-center ml-[18.75px] mt-8 pl-24 pr-6 py-2 font-arial md:ml-0 before:accent-auto before:bg-red-600 before:caret-transparent before:text-white before:block before:text-[13.3333px] before:not-italic before:normal-nums before:font-normal before:h-[72px] before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:w-[72px] before:z-0 before:rounded-full before:border-separate before:left-0 before:inset-y-0 before:font-arial">
              <img
                src="https://c.animaapp.com/mkkxt1y8OC5kKc/assets/icon-19.svg"
                alt="Icon"
                className="absolute text-4xl caret-transparent h-9 translate-y-[-50.0%] left-6 top-2/4"
              />
              <div className="relative box-border caret-transparent gap-x-1 flex flex-col break-words gap-y-1 z-10">
                <p className="text-xl font-medium box-border caret-transparent break-words text-left">
                  Doing What Can’t Be Done
                </p>
                <p className="text-sm box-border caret-transparent break-words text-left">
                  Watch the video (4:45)
                </p>
              </div>
            </button>
            <dialog className="text-black items-center bg-transparent box-border caret-transparent flex h-[950px] justify-center break-words pointer-events-none mt-8 mx-auto p-5"></dialog>
          </div>
          <div className="box-border caret-transparent basis-full grow-0 break-words md:basis-0 md:grow">
            <p className="box-border caret-transparent break-words px-[18.75px] md:px-16">
              Integrity, innovation, and a “never settle” mentality are at the
              core of everything we do. Our people are bold thinkers and skilled
              problem solvers who turn challenges into opportunities to achieve
              the extraordinary. Behind every hardhat and blueprint is a
              relentless drive to achieve what others cannot.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
