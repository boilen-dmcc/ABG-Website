export const FooterContact = () => {
  return (
    <section className="items-center box-border caret-transparent gap-x-8 flex min-h-0 min-w-0 gap-y-8 md:min-h-[auto] md:min-w-[auto]">
      <div className="box-border caret-transparent">
        <a
          href="https://www.bechtel.com/"
          aria-label="Return to homepage"
          className="text-red-600 box-border caret-transparent underline underline-offset-4 hover:text-red-800 hover:border-red-800"
        >
          <img
            src="https://c.animaapp.com/mkkxt1y8OC5kKc/assets/icon-25.svg"
            alt="Icon"
            className="aspect-square box-border caret-transparent h-24 w-24"
          />
        </a>
      </div>
      <div className="box-border caret-transparent">
        <p className="box-border caret-transparent my-5">+1 571-392-6300</p>
        <p className="box-border caret-transparent my-5">
          <a
            href="mailto://webmas@bechtel.com"
            className="box-border caret-transparent hover:text-red-600 hover:underline hover:border-red-600"
          >
            webmas@bechtel.com
          </a>
        </p>
      </div>
    </section>
  );
};
