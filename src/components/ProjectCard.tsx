export type ProjectCardProps = {
  location: string;
  title: string;
  href: string;
  ariaLabel: string;
  iconSrc: string;
  imageSrc: string;
  variant: string;
  figureVariant: string;
};

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div
      className={`relative box-border caret-transparent shrink-0 isolate w-screen overflow-hidden md:w-[500px] ${props.variant}`}
    >
      <div className="absolute text-white box-border caret-transparent gap-x-2 flex flex-col isolate justify-end gap-y-2 z-30 pl-8 pr-24 pt-8 pb-6 inset-0 after:accent-auto after:bg-black/60 after:caret-transparent after:text-white after:block after:text-xl after:not-italic after:normal-nums after:font-normal after:tracking-[0.0208px] after:leading-[30px] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:z-0 after:border-separate after:inset-0 after:font-neue_haas_grotesk_display">
        <span className="relative text-amber-300 text-xs box-border caret-transparent block leading-[18px] uppercase z-10 mb-4 top-[84px] font-necto_mono md:text-[15px] md:leading-[22.5px]">
          {props.location}
        </span>
        <h2 className="relative text-2xl box-border caret-transparent leading-[30px] z-10 top-[84px] font-apfel_grotezk md:text-3xl md:leading-[37.5px]">
          {props.title}
        </h2>
      </div>
      <a
        href={props.href}
        aria-label={props.ariaLabel}
        className="absolute text-blue-700 box-border caret-transparent block underline z-40 inset-0 after:accent-auto after:caret-transparent after:text-blue-700 after:block after:text-xl after:not-italic after:normal-nums after:font-normal after:tracking-[0.0208px] after:leading-[30px] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:inset-0 after:font-neue_haas_grotesk_display"
      >
        <img
          src={props.iconSrc}
          alt="Icon"
          className="absolute text-white bg-red-600 caret-transparent h-8 -rotate-45 w-8 z-40 p-2 rounded-full right-6 bottom-6"
        />
      </a>
      <figure
        className={`absolute items-center box-border caret-transparent flex justify-center inset-0 ${props.figureVariant}`}
      >
        <img
          src={props.imageSrc}
          className="box-border caret-transparent h-full object-cover w-full"
        />
      </figure>
    </div>
  );
};
