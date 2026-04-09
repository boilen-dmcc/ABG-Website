export type AlBarhamFeaturedCardProps = {
  image: string;
  title: string;
  url: string;
};

export const AlBarhamFeaturedCard = ({ image, title, url }: AlBarhamFeaturedCardProps) => {
  return (
    <article className="relative box-border caret-transparent">
      <figure className="relative items-center aspect-video shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent flex justify-center w-full overflow-hidden mb-5 rounded-lg">
        <img
          src={image}
          alt=""
          className="aspect-[auto_1024_/_576] box-border caret-transparent h-full object-cover w-full"
        />
      </figure>
      <h3 className="text-black text-lg box-border caret-transparent leading-[22.5px] my-[18px] font-apfel_grotezk">
        {title}
      </h3>
      <a
        href={url}
        aria-label={`Read more about ${title}`}
        className="text-red-800 items-center aspect-square bg-red-200 box-border caret-transparent flex justify-center opacity-0 underline w-12 ml-auto rounded-full md:opacity-100 after:accent-auto after:caret-transparent after:text-red-800 after:block after:text-xl after:not-italic after:normal-nums after:font-normal after:tracking-[0.0208px] after:leading-[30px] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:inset-0 after:font-neue_haas_grotesk_display hover:bg-red-300 transition-colors"
      >
        <img
          src="https://c.animaapp.com/mkkxt1y8OC5kKc/assets/icon-16.svg"
          alt="Icon"
          className="text-2xl caret-transparent h-6 leading-9 pointer-events-none -rotate-45"
        />
      </a>
    </article>
  );
};
