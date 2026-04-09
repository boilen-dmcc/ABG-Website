export const CarouselNavigation = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-3 flex gap-y-3 pt-3 px-[18.75px] md:px-5">
      <button
        aria-label="previous"
        className="text-red-600 text-base items-center aspect-square bg-red-200 caret-transparent flex justify-center tracking-[normal] leading-[normal] opacity-50 text-center w-8 rounded-full font-arial"
      >
        <img
          src="https://c.animaapp.com/mkkxt1y8OC5kKc/assets/icon-22.svg"
          alt="Icon"
          className="caret-transparent h-4"
        />
      </button>
      <div className="items-center box-border caret-transparent gap-x-1 flex gap-y-1">
        <span className="text-red-600 text-sm box-border caret-transparent block leading-[21px] font-necto_mono">
          1
        </span>
        <span className="text-red-600 text-sm box-border caret-transparent block leading-[21px] font-necto_mono">
          —
        </span>
        <span className="text-red-600 text-sm box-border caret-transparent block leading-[21px] font-necto_mono">
          2
        </span>
        <span className="text-red-600 text-sm box-border caret-transparent block leading-[21px] font-necto_mono">
          of
        </span>
        <span className="text-red-600 text-sm box-border caret-transparent block leading-[21px] font-necto_mono">
          10
        </span>
      </div>
      <button
        aria-label="next"
        className="text-red-600 text-base items-center aspect-square bg-red-200 caret-transparent flex justify-center tracking-[normal] leading-[normal] text-center w-8 rounded-full font-arial"
      >
        <img
          src="https://c.animaapp.com/mkkxt1y8OC5kKc/assets/icon-23.svg"
          alt="Icon"
          className="caret-transparent h-4"
        />
      </button>
    </div>
  );
};
