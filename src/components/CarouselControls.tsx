export const CarouselControls = () => {
  return (
    <div className="absolute items-center box-border caret-transparent flex justify-between z-[-1] inset-0">
      <button
        aria-label="Previous slide"
        className="relative text-[32px] bg-transparent caret-transparent block tracking-[normal] leading-[normal] opacity-70 text-center px-0 -left-14 font-arial hover:text-red-600"
      >
        <img
          src="https://c.animaapp.com/mkkxt1y8OC5kKc/assets/icon-17.svg"
          alt="Icon"
          className="caret-transparent inline-block h-8"
        />
      </button>
      <button
        aria-label="Next slide"
        className="relative text-[32px] bg-transparent caret-transparent block tracking-[normal] leading-[normal] opacity-70 text-center px-0 -right-9 font-arial hover:text-red-600"
      >
        <img
          src="https://c.animaapp.com/mkkxt1y8OC5kKc/assets/icon-18.svg"
          alt="Icon"
          className="caret-transparent inline-block h-8"
        />
      </button>
    </div>
  );
};
