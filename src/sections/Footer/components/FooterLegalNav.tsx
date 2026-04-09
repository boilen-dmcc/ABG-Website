export const FooterLegalNav = () => {
  return (
    <nav
      aria-label="legal navigation"
      className="box-border caret-transparent basis-[0%] grow min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
    >
      <ul className="box-border caret-transparent gap-x-[normal] block grid-cols-none list-none gap-y-[normal] my-5 pl-0 md:gap-x-20 md:grid md:grid-cols-[repeat(2,1fr)] md:gap-y-4">
        <li className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          <a
            href="https://www.bechtel.com/privacy-policy/"
            className="text-sm box-border caret-transparent tracking-[0.14px] leading-[21px] decoration-red-600 underline-offset-4 rounded-sm hover:underline"
          >
            <span className="box-border caret-transparent underline-offset-4">
              Privacy Policy
            </span>
          </a>
        </li>
        <li className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          <a
            href="https://www.bechtel.com/australian-privacy-policy/"
            className="text-sm box-border caret-transparent tracking-[0.14px] leading-[21px] decoration-red-600 underline-offset-4 rounded-sm hover:underline"
          >
            <span className="box-border caret-transparent underline-offset-4">
              Australia Privacy Policy
            </span>
          </a>
        </li>
        <li className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          <a
            href="https://www.bechtel.com/modern-slavery-act-statement/"
            className="text-sm box-border caret-transparent tracking-[0.14px] leading-[21px] decoration-red-600 underline-offset-4 rounded-sm hover:underline"
          >
            <span className="box-border caret-transparent underline-offset-4">
              Modern Slavery Act Statement
            </span>
          </a>
        </li>
        <li className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          <a
            href="https://www.bechtel.com/terms-of-use/"
            className="text-sm box-border caret-transparent tracking-[0.14px] leading-[21px] decoration-red-600 underline-offset-4 rounded-sm hover:underline"
          >
            <span className="box-border caret-transparent underline-offset-4">
              Terms of Use
            </span>
          </a>
        </li>
        <li className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          <a
            href="https://www.bechtel.com/approach/ethics/"
            className="text-sm box-border caret-transparent tracking-[0.14px] leading-[21px] decoration-red-600 underline-offset-4 rounded-sm hover:underline"
          >
            <span className="box-border caret-transparent underline-offset-4">
              Ethics
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
