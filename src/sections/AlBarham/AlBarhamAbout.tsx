import { useQuery } from "@animaapp/playground-react-sdk";
import { Play } from "lucide-react";
import { useState, useEffect } from "react";

// ===========================================
// FONT SIZE CONTROLS (in pixels)
// ===========================================
// Mobile Layout (video below text)
const MOBILE_HEADING_SIZE = 48;        // "About us" heading
const MOBILE_BOLD_TEXT_SIZE = 16;      // Bold paragraph
const MOBILE_BODY_TEXT_SIZE = 16;      // Regular paragraph

// Desktop Layout (video beside text) - breakpoint at 768px
const DESKTOP_HEADING_SIZE = 64;       // "About us" heading
const DESKTOP_BOLD_TEXT_SIZE = 18;     // Bold paragraph
const DESKTOP_BODY_TEXT_SIZE = 18;     // Regular paragraph
// ===========================================

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);
  
  return isDesktop;
};

export const AlBarhamAbout = () => {
  const isDesktop = useIsDesktop();
  
  const headingSize = isDesktop ? DESKTOP_HEADING_SIZE : MOBILE_HEADING_SIZE;
  const boldTextSize = isDesktop ? DESKTOP_BOLD_TEXT_SIZE : MOBILE_BOLD_TEXT_SIZE;
  const bodyTextSize = isDesktop ? DESKTOP_BODY_TEXT_SIZE : MOBILE_BODY_TEXT_SIZE;

  const {
    data: videoData,
    isPending,
    error,
  } = useQuery("AboutUsVideoPreview", {
    limit: 1,
  });

  const videoPreview = videoData?.[0];

  const handleVideoClick = () => {
    if (videoPreview?.youtubeUrl) {
      window.open(videoPreview.youtubeUrl, "_blank");
    }
  };

  return (
    <div className="relative box-border caret-transparent isolate rounded-lg before:md:accent-auto before:md:bg-[radial-gradient(rgb(229,231,233)_2px,rgba(0,0,0,0)_0px)] before:md:bg-[position:-18px_0px] before:md:bg-size-[30px_30px] before:md:caret-transparent before:md:text-gray-700 before:md:block before:md:text-xl before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-[calc(100%_+_32px)] before:md:tracking-[0.0208px] before:md:leading-[30px] before:md:list-outside before:md:list-disc before:md:pointer-events-none before:md:absolute before:md:text-start before:md:no-underline before:md:indent-[0px] before:md:normal-case before:md:visible before:md:w-[calc(25%_+_374px)] before:md:z-[-1] before:md:border-separate before:md:right-0 before:md:top-0 before:md:font-neue_haas_grotesk_display">
      <div className="relative box-border caret-transparent max-w-[800px] min-h-16 z-10 mx-auto"></div>
      <div className="relative box-border caret-transparent gap-x-8 flex flex-wrap max-w-[calc(70%_+_620px)] gap-y-8 z-10 ml-auto mt-8 md:gap-x-16 md:flex-nowrap md:gap-y-16">
        <div className="self-center box-border caret-transparent basis-full grow-0 max-w-none break-words w-full pr-0 md:basis-0 md:grow md:max-w-[588px] md:pr-8">
          <h2
            className="box-border caret-transparent leading-[1.1] break-words mb-12 px-[18.75px] font-apfel_grotezk md:px-16"
            style={{ fontSize: headingSize }}
          >
            About us
          </h2>
          <p
            className="font-bold box-border caret-transparent break-words mt-4 px-[18.75px] md:px-16"
            style={{ fontSize: boldTextSize }}
          >
            We provide engineering expertise to help companies strengthen
            operations through reliable execution and partnerships built for
            trust plus.
          </p>
          <p
            className="box-border caret-transparent break-words mt-8 px-[18.75px] md:px-16"
            style={{ fontSize: bodyTextSize }}
          >
            We oversee project lifecycles with structured planning, disciplined
            coordination, and precise control to ensure timely dependable results
            in sectors where reliability and performance are key to success.
          </p>
          <div className="items-center box-border caret-transparent gap-x-8 flex flex-wrap break-words gap-y-8 mt-10 px-[18.75px] md:px-0">
            <div className="relative box-border caret-transparent isolate break-words before:accent-auto before:bg-red-600 before:caret-transparent before:text-gray-700 before:block before:text-xl before:not-italic before:normal-nums before:font-normal before:h-10 before:tracking-[0.0208px] before:leading-[30px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:-translate-y-5 before:visible before:w-10 before:z-10 before:rounded-full before:border-separate before:left-0 before:top-2/4 before:font-neue_haas_grotesk_display before:md:h-12 before:md:-translate-y-6 before:md:w-12">
              <a
                href="#"
                className="relative text-red-600 text-base font-semibold content-center box-border caret-transparent inline-block h-full leading-10 break-words text-center text-nowrap w-full z-20 pl-[54px] pr-[23.328px] rounded-full md:text-xl md:leading-[48px] md:pl-[66px] md:pr-[28.66px] before:accent-auto before:caret-transparent before:text-white before:block before:text-xl before:not-italic before:normal-nums before:font-semibold before:tracking-[0.0208px] before:leading-5 before:list-outside before:list-disc before:break-words before:absolute before:text-center before:indent-[0px] before:normal-case before:text-nowrap before:translate-y-[-11px] before:origin-[47%_45%] before:visible before:z-0 before:border-separate before:left-3 before:top-[calc(50%_+_2px)] before:font-neue_haas_grotesk_display before:md:text-2xl before:md:leading-6 before:md:-translate-y-3 before:md:left-[14.4px]"
              >
                More Information
              </a>
            </div>
          </div>
        </div>

        <div className="self-center box-border caret-transparent basis-full grow-0 break-words w-full md:basis-0 md:grow">
          {isPending ? (
            <div className="items-center aspect-square box-border caret-transparent flex justify-center break-words w-full overflow-hidden rounded-r-lg bg-gray-200">
              <p className="text-gray-500">Loading video...</p>
            </div>
          ) : error ? (
            <div className="items-center aspect-square box-border caret-transparent flex justify-center break-words w-full overflow-hidden rounded-r-lg bg-gray-200">
              <p className="text-red-600">Error loading video</p>
            </div>
          ) : (
            <button
              onClick={handleVideoClick}
              className="relative aspect-square box-border caret-transparent flex flex-col justify-end break-words w-full overflow-hidden rounded-r-lg group cursor-pointer"
              style={{
                backgroundImage: `url(${
                  videoPreview?.thumbnailUrl ||
                  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=800&fit=crop"
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              aria-label="Play video about Al-Barham Group"
            >
              <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

              <div className="relative z-10 flex flex-col gap-3 sm:gap-4 md:gap-6 p-4 sm:p-5 md:p-8">
                <div className="flex flex-col gap-2 sm:gap-3 md:flex-row md:items-end md:gap-8">
                  <h3 className="text-xl sm:text-2xl md:text-[36px] md:leading-[1.15] font-bold text-white font-apfel_grotezk shrink-0 md:max-w-[45%] leading-tight">
                    {videoPreview?.overlayTitle || "Our Vision"}
                  </h3>

                  {videoPreview?.overlayDescription && (
                    <p className="text-xs sm:text-sm md:text-sm text-white/90 leading-relaxed md:max-w-[50%]">
                      {videoPreview.overlayDescription}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-red-600 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                    <Play className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white fill-white ml-0.5" />
                  </div>

                  <div className="flex flex-col text-left">
                    <span className="text-white text-xs sm:text-sm md:text-sm font-semibold leading-snug">
                      {videoPreview?.ctaTitle || "Doing What Can't Be Done"}
                    </span>
                    <span className="text-white/70 text-[10px] sm:text-xs md:text-xs leading-snug">
                      {videoPreview?.ctaSubtitle || "Watch the video"}
                      {videoPreview?.duration ? ` (${videoPreview.duration})` : ""}
                    </span>
                  </div>
                </div>
              </div>
            </button>
          )}
        </div>
      </div>
      <div className="relative box-border caret-transparent max-w-[800px] min-h-32 z-10 mt-8 mx-auto"></div>
    </div>
  );
};
