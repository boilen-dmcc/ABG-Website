import type { ChairmansMessageData } from "./types";

type Props = { data: ChairmansMessageData };

export const Message = ({ data }: Props) => {
  return (
    <section className="home-section-y border-t border-gray-200 bg-gray-50">
      <div className="home-container">
        <div className="grid grid-cols-1 gap-8 xs:gap-10 lg:grid-cols-12 lg:items-start lg:gap-16">
          <div className="lg:col-span-5 lg:order-2">
            <div className="aspect-[4/5] overflow-hidden rounded-lg bg-gray-200">
              <img
                src={data.messageImage}
                alt={data.messageImageAlt}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>

          <div className="lg:col-span-7 lg:order-1">
            <span className="mb-6 inline-block bg-red-600 px-2 py-0.5 text-sm font-semibold uppercase text-white">
              {data.messageEyebrow}
            </span>

            <div className="max-w-[62ch] space-y-5 text-base leading-relaxed text-foreground/90 lg:text-lg">
              {data.messageParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
              <p className="font-bold leading-snug text-foreground lg:text-xl">
                {data.messageClosing}
              </p>
            </div>

            <div className="mt-10 max-w-[62ch] border-t border-gray-200 pt-8">
              <p className="text-xl font-bold">{data.chairmanName}</p>
              <span className="mt-3 inline-block bg-red-600 px-2 py-0.5 text-sm font-semibold uppercase text-white">
                {data.chairmanTitle}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
