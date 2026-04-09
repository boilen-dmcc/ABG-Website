import { useQuery } from "@animaapp/playground-react-sdk";
import { Play } from "lucide-react";

export const Page2AboutUs = () => {
	// ─── "About us" title font sizes ───
	const aboutUsBigFont = 48;
	const aboutUsSmallFont = 56;

	// ─── Video preview height on mobile (before bp1200) ───
	const videoPreviewMobileHeight = 450;

	// ─── "Our Vision" title font size (px) ───
	const visionFontSizeSmall = 42;
	const visionFontSizeLarge = 36;

	// ─── Gap below "Our Vision" section (px) ───
	const visionGapBelowSmall = 16;
	const visionGapBelowLarge = 18;

	// ─── Red circle size (width = height) (px) ───
	const playCircleSizeSmall = 80;
	const playCircleSizeLarge = 60;

	// ─── White play triangle size (width = height) (px) ───
	const playIconSizeSmall = 40;
	const playIconSizeLarge = 30;

	// ─── "Doing What Can't Be Done" font size (px) ───
	const ctaTitleFontSizeSmall = 20;
	const ctaTitleFontSizeLarge = 18;

	// ─── "Watch the video" font size (px) ───
	const ctaSubtitleFontSizeSmall = 18;
	const ctaSubtitleFontSizeLarge = 16;

	const dynamicStyles = [
		`.about-us-title { font-size: ${aboutUsBigFont}px; line-height: 1.1; }`,
		`@media (min-width: 1065px) { .about-us-title { font-size: ${aboutUsSmallFont}px !important; } }`,
		`.video-preview { height: ${videoPreviewMobileHeight}px; }`,
		`@media (min-width: 1065px) { .video-preview { height: auto !important; aspect-ratio: 1 / 1; } }`,
		`.vision-title { font-size: ${visionFontSizeSmall}px; line-height: 1.15; }`,
		`.vision-gap { gap: ${visionGapBelowSmall}px; }`,
		`.play-circle { width: ${playCircleSizeSmall}px; height: ${playCircleSizeSmall}px; }`,
		`.play-icon { width: ${playIconSizeSmall}px; height: ${playIconSizeSmall}px; }`,
		`.cta-title { font-size: ${ctaTitleFontSizeSmall}px; }`,
		`.cta-subtitle { font-size: ${ctaSubtitleFontSizeSmall}px; }`,
		`@media (min-width: 1065px) {`,
		`  .vision-title { font-size: ${visionFontSizeLarge}px !important; }`,
		`  .vision-gap { gap: ${visionGapBelowLarge}px !important; }`,
		`  .play-circle { width: ${playCircleSizeLarge}px !important; height: ${playCircleSizeLarge}px !important; }`,
		`  .play-icon { width: ${playIconSizeLarge}px !important; height: ${playIconSizeLarge}px !important; }`,
		`  .cta-title { font-size: ${ctaTitleFontSizeLarge}px !important; }`,
		`  .cta-subtitle { font-size: ${ctaSubtitleFontSizeLarge}px !important; }`,
		`}`,
	].join("\n");

  // Fetch preview data
  const {
    data: videoData,
    isPending,
    error,
  } = useQuery("AboutUsVideoPreview", {
    limit: 1,
  });

    const videoPreview = videoData?.[0];
    // We use a direct CDN link here for maximum efficiency. 
    // Google Drive links are slow because they are not optimized for streaming.
    // ⚡️ MOST EFFICIENT SOLUTION (FOR PRODUCTION):
    // 1. Place your 'vision.mp4' file in the 'public/videos/' folder of your project.
    // 2. Uncomment the line below and comment out the dynamic videoUrl line.
    // const videoUrl = "/videos/vision.mp4";

    // ---------------------------------------------------------------------------
    // 🎥 VIDEO SOURCE CONFIGURATION
    // ---------------------------------------------------------------------------
    
    // OPTION 1: GitHub / External URL (Best for Preview)
    // Replace this with your CDN link: https://cdn.jsdelivr.net/gh/USER/REPO@BRANCH/PATH/TO/VIDEO.mp4
    const GITHUB_VIDEO_URL = "https://cdn.jsdelivr.net/gh/SaintFredMax/abg-assets@main/ABG%20Video%20Preview.mp4"; 

    // OPTION 2: Local File (Best for Production/Export)
    // When you download the code, put your file in 'public/videos/' and uncomment this:
    // const LOCAL_VIDEO_URL = "/videos/vision.mp4";

    // OPTION 3: Database (CMS Managed)
    // This allows you to change the video without editing code
    const CMS_VIDEO_URL = videoPreview?.videoUrl;

    // FALLBACK: Default Bechtel video so the site doesn't break
    const FALLBACK_VIDEO_URL = "https://www.bechtel.com/wp-content/uploads/2025/02/bechtel-we-are-bechtel.mp4";

    // LOGIC: Pick the first available source
    const videoUrl = GITHUB_VIDEO_URL || CMS_VIDEO_URL || FALLBACK_VIDEO_URL;
    
    // A poster image loads instantly, improving perceived performance
    const posterUrl = videoPreview?.thumbnailUrl || "https://www.bechtel.com/getmedia/8d8d8d8d-8d8d-8d8d-8d8d-8d8d8d8d8d8d/hero-bg.jpg";

    return (
    <div className="relative box-border caret-transparent isolate before:bp1200:accent-auto before:bp1200:bg-[radial-gradient(rgb(229,231,233)_2px,rgba(0,0,0,0)_0px)] before:bp1200:bg-[position:-18px_0px] before:bp1200:bg-size-[30px_30px] before:bp1200:caret-transparent before:bp1200:text-gray-700 before:bp1200:block before:bp1200:text-xl before:bp1200:not-italic before:bp1200:normal-nums before:bp1200:font-normal before:bp1200:h-[calc(100%_+_32px)] before:bp1200:tracking-[0.0208px] before:bp1200:leading-[30px] before:bp1200:list-outside before:bp1200:list-disc before:bp1200:pointer-events-none before:bp1200:absolute before:bp1200:text-start before:bp1200:no-underline before:bp1200:indent-[0px] before:bp1200:normal-case before:bp1200:visible before:bp1200:w-[calc(25%_+_374px)] before:bp1200:z-[-1] before:bp1200:border-separate before:bp1200:right-0 before:bp1200:top-0 before:bp1200:font-neue_haas_grotesk_display">
      <style dangerouslySetInnerHTML={{ __html: dynamicStyles }} />
      <div className="relative box-border caret-transparent max-w-[800px] min-h-16 z-10 mx-auto"></div>
      
      {/* Modified Container: Full width, no max-w, no auto margin */}
      <div className="relative box-border caret-transparent flex flex-wrap w-full z-10 mt-8 bp1200:flex-nowrap">
        
        {/* Left Column: Aligned to right of left half */}
        <div className="w-full bp1200:w-1/2 flex justify-center bp1200:justify-end">
            <div className="w-full max-w-[700px] pl-4 sm:pl-6 md:pl-8 lg:pl-12 pr-4 sm:pr-6 md:pr-8 bp1200:pr-8 flex flex-col justify-center">
                <h2 className="about-us-title box-border caret-transparent break-words mb-12 font-apfel_grotezk">
                  About us
                </h2>
                <p className="font-bold box-border caret-transparent break-words mt-4 bp1200:text-2xl">
                  We provide engineering expertise to help companies strengthen operations through reliable execution and partnerships built for trust plus.
                </p>
                <p className="box-border caret-transparent break-words mt-8 bp1200:text-xl">
                  We oversee project lifecycles with structured planning, disciplined coordination, and precise control to ensure timely dependable results in sectors where reliability and performance are key to success.
                </p>
                <div className="items-center box-border caret-transparent gap-x-8 flex flex-wrap break-words gap-y-8 mt-10">
                  <a href="#" className="group inline-flex items-center gap-4 mb-8 bp1200:mb-0">
                    <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-600 text-white group-hover:animate-bounce">
                      <svg 
                        className="w-5 h-5 md:w-6 md:h-6" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <span className="text-red-600 text-base font-semibold md:text-xl">More Information</span>
                  </a>
                </div>
            </div>
        </div>

        {/* Right Column: Full bleed to right */}
        <div className="w-full bp1200:w-1/2 pl-0 pr-0 bp1200:pl-8 bp1200:pr-0">
          {isPending ? (
            <div className="video-preview items-center box-border caret-transparent flex justify-center break-words w-full overflow-hidden bg-gray-200">
              <p className="text-gray-500">Loading video...</p>
            </div>
          ) : error ? (
            <div className="video-preview items-center box-border caret-transparent flex justify-center break-words w-full overflow-hidden bg-gray-200">
              <p className="text-red-600">Error loading video</p>
            </div>
          ) : (
            <div
              className="video-preview relative box-border caret-transparent flex flex-col justify-end break-words w-full overflow-hidden"
            >
              <video
                src={videoUrl}
                poster={posterUrl}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent z-10" />

              <div className="vision-gap relative z-20 flex flex-col p-5 sm:p-6 md:p-10">
                <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-end md:gap-10 mt-2">
                  <h3 className="vision-title text-white font-apfel_grotezk shrink-0 leading-tight whitespace-nowrap">
                    {videoPreview?.overlayTitle || "Our Vision"}
                  </h3>

                  {videoPreview?.overlayDescription && (
                    <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed md:max-w-[50%]">
                      {videoPreview.overlayDescription}
                    </p>
                  )}
                </div>

                <a 
                  href="https://www.youtube.com/watch?v=hM5Jn7j-GLk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 group cursor-pointer"
                  aria-label="Watch video on YouTube"
                >
                  <div className="play-circle bg-red-600 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <Play className="play-icon text-white fill-white ml-0.5" />
                  </div>

                  <div className="flex flex-col text-left">
                    <span className="cta-title text-white font-semibold leading-snug">
                      {videoPreview?.ctaTitle || "Making reliability the only option"}
                    </span>
                    <span className="cta-subtitle text-white/70 leading-snug">
                      {videoPreview?.ctaSubtitle || "Watch the video"}
                      {videoPreview?.duration
                        ? ` (${videoPreview.duration})`
                        : ""}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="relative box-border caret-transparent max-w-[800px] min-h-32 z-10 mt-8 mx-auto"></div>
    </div>
  );
};
