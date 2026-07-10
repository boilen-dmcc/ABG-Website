import { Button } from "@/components/Button";

const visionMissionItems = [
  {
    title: "Vision",
    description:
      "To become an integrated energy leader, driving the development of the refining, gas processing, and energy sectors in Iraq, Middle East and globally, while achieving economic and environmental sustainability.",
  },
  {
    title: "Mission",
    description:
      "To execute strategic projects according to the highest international standards, maximizing the value of energy resources for the benefit of all stakeholders.",
  },
];

export const Page2AboutUs = () => {
  const videoPreviewMobileHeight = 450;

  const dynamicStyles = [
    `.video-preview { height: ${videoPreviewMobileHeight}px; }`,
    `@media (min-width: 992px) { .video-preview { height: auto !important; aspect-ratio: 1 / 1; } }`,
  ].join("\n");

  const videoUrl = "/videos/abous-us.mp4";
  const posterUrl = "/about-video-poster.webp";

  return (
    <div className="relative box-border caret-transparent isolate before:xl:accent-auto before:xl:bg-[radial-gradient(rgb(229,231,233)_2px,rgba(0,0,0,0)_0px)] before:xl:bg-[position:-18px_0px] before:xl:bg-size-[30px_30px] before:xl:caret-transparent before:xl:text-foreground before:xl:block before:xl:text-xl before:xl:not-italic before:xl:normal-nums before:xl:font-normal before:xl:h-[calc(100%_+_32px)] before:xl:tracking-[0.0208px] before:xl:leading-[30px] before:xl:list-outside before:xl:list-disc before:xl:pointer-events-none before:xl:absolute before:xl:text-start before:xl:no-underline before:xl:indent-[0px] before:xl:normal-case before:xl:visible before:xl:w-[calc(25%_+_374px)] before:xl:z-[-1] before:xl:border-separate before:xl:left-0 before:xl:top-0 before:xl:font-neue_haas_grotesk_display">
      <style dangerouslySetInnerHTML={{ __html: dynamicStyles }} />

      <div className="relative box-border caret-transparent flex flex-wrap w-full z-10 xl:flex-nowrap">
        <div className="w-full xl:w-1/2 pl-0 xl:pl-0 order-1 xl:order-1">
          <div className="video-preview relative box-border caret-transparent w-full overflow-hidden">
            <video
              src={videoUrl}
              poster={posterUrl}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="w-full xl:w-1/2 flex justify-center xl:justify-start order-2 xl:order-2">
          <div className="w-full max-w-[700px] pl-4 sm:pl-6 md:pl-8 lg:pl-12 pr-4 sm:pr-6 md:pr-8 xl:pl-24 xl:pr-12 flex flex-col justify-center">
            <h2 className="box-border caret-transparent break-words mb-3 font-extrabold uppercase">
              About Us
            </h2>
            <p className="font-normal box-border caret-transparent break-words xl:text-lg">
              <span className="bg-red-600 text-white px-1.5 py-0.5">AL-BARHAM GROUP</span> is a leading oil, gas, and energy solutions company, delivering integrated engineering and industrial
              services across global markets. We specialize in providing reliable, innovative, and high-quality solutions that support
              sustainable growth and operational excellence.
            </p>
            <hr className="my-10 border-0 border-t border-gray-200" />

            <div className="space-y-10">
              {visionMissionItems.map(({ title, description }) => (
                <div key={title}>
                  <h3 className="font-bold text-xl sm:text-2xl mb-3">{title}</h3>
                  <p className="font-normal text-base sm:text-lg leading-relaxed text-foreground">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <div className="items-center box-border caret-transparent gap-x-4 flex flex-wrap break-words gap-y-4 mt-10">
              <Button to="/about" variant="secondary">
                LEARN MORE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
