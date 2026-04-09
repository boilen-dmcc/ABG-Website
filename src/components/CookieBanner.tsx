export const CookieBanner = () => {
  return (
    <div className="fixed text-zinc-800 bg-white border-b-zinc-800 border-l-zinc-800 border-r-zinc-800 border-t-slate-400 box-border caret-transparent gap-x-[normal] gap-y-[normal] translate-y-[100.0%] w-full z-50 py-8 border-t left-0 bottom-0 md:gap-x-4 md:gap-y-4">
      <div className="items-center box-border caret-transparent gap-x-16 flex flex-col justify-center max-w-[1240px] gap-y-16 mx-auto px-[18.75px] md:flex-row md:px-0">
        <p className="box-border caret-transparent tracking-[0.2px] text-center md:text-left"></p>
        <p className="box-border caret-transparent my-5">
          This website uses cookies and other tracking technologies to enhance
          navigation, facilitate feedback, analyze usage of our products and
          services, support marketing efforts, and deliver third-party content.{" "}
          <a
            href="https://www.bechtel.com/privacy-policy/"
            className="text-red-600 box-border caret-transparent underline underline-offset-4 hover:text-red-800 hover:border-red-800"
          >
            View our Privacy Policy.
          </a>
        </p>
        <p className="box-border caret-transparent my-5"></p>
        <div className="items-center box-border caret-transparent gap-x-4 flex gap-y-4">
          <button
            aria-label="Accept Cookies"
            className="text-white text-base bg-red-600 caret-transparent block tracking-[normal] leading-6 text-center uppercase text-nowrap px-4 py-2 font-necto_mono hover:bg-red-800"
          >
            Accept All
          </button>
          <button
            aria-label="Decline Cookies"
            className="text-white text-base bg-red-600 caret-transparent block tracking-[normal] leading-6 text-center uppercase text-nowrap px-4 py-2 font-necto_mono hover:bg-red-800"
          >
            Essential Only
          </button>
        </div>
        <button
          aria-label="Decline"
          className="absolute text-white text-[13.3333px] bg-red-600 caret-transparent block h-7 tracking-[normal] leading-[normal] text-center w-7 p-0 rounded-full right-2 top-2 font-arial md:right-4 md:top-4"
        >
          <img
            src="https://c.animaapp.com/mkkxt1y8OC5kKc/assets/icon-1.svg"
            alt="Icon"
            className="absolute text-[16.8px] caret-transparent h-[16.8px] translate-x-[-50.0%] translate-y-[-50.0%] left-2/4 top-2/4"
          />
        </button>
      </div>
    </div>
  );
};
