export type FooterColumnProps = {
  title: string;
  titleUrl: string;
  hasSubMenu: boolean;
  subMenuItems?: Array<{
    text: string;
    url: string;
  }>;
  mainMenuItems?: Array<{
    text: string;
    url: string;
  }>;
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <li className="box-border caret-transparent basis-auto grow-0 min-h-0 min-w-0 mt-3 md:basis-[0%] md:grow md:min-h-[auto] md:min-w-[auto] md:mt-0">
      <ul className="box-border caret-transparent pl-0">
        {props.hasSubMenu ? (
          <li className="box-border caret-transparent mt-3 md:mt-0">
            <a
              href={props.titleUrl}
              className="box-border caret-transparent decoration-red-600 underline-offset-4 rounded-sm hover:underline"
            >
              <span className="font-bold box-border caret-transparent tracking-[0.5px] underline-offset-4">
                {props.title}
              </span>
            </a>
            <ul className="box-border caret-transparent pl-0">
              {props.subMenuItems?.map((item, index) => (
                <li
                  key={index}
                  className="box-border caret-transparent mt-3 pl-4 md:mt-4 md:pl-0"
                >
                  <a
                    href={item.url}
                    className="box-border caret-transparent decoration-red-600 underline-offset-4 rounded-sm hover:underline"
                  >
                    <span className="text-base box-border caret-transparent leading-6 underline-offset-4">
                      {item.text}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ) : (
          <>
            {props.mainMenuItems?.map((item, index) => (
              <li
                key={index}
                className={
                  index === 0
                    ? "box-border caret-transparent mt-3 md:mt-0"
                    : "box-border caret-transparent mt-3 md:mt-4"
                }
              >
                <a
                  href={item.url}
                  className="box-border caret-transparent decoration-red-600 underline-offset-4 rounded-sm hover:underline"
                >
                  <span className="font-bold box-border caret-transparent tracking-[0.5px] underline-offset-4">
                    {item.text}
                  </span>
                </a>
              </li>
            ))}
          </>
        )}
      </ul>
    </li>
  );
};
