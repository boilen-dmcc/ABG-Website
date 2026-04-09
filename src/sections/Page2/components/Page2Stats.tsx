    import { useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";

const lerp = (start: number, end: number, factor: number) => {
  return start + (end - start) * factor;
};

export const Page2Stats = () => {
  // Hardcoded values replacing DB query
  const yearsOfExcellence = "18";
  const partnerCompanies = "9";
  const projectsDelivered = "50+";
  const operatingCountries = "IRAQ • UAE • TURKEY • GERMANY";
  const operatingLabel = "Operating Across";
  const ctaText = "View Our Global Presence";
  const ctaUrl = "#";

  const containerRef = useRef<HTMLDivElement>(null);
  
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  
  const targetParallaxRef = useRef(0);
  const currentParallaxRef = useRef(0);
  
  const requestRef = useRef<number>();

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Expansion logic
      const startOffset = windowHeight * 0.9; 
      const endOffset = windowHeight * 0.3;
      const rawProgress = (startOffset - rect.top) / (startOffset - endOffset);
      const clampedProgress = Math.max(0, Math.min(1, rawProgress));
      targetProgressRef.current = clampedProgress;

      // Parallax logic
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      // Moves text down as user scrolls down (element moves up)
      targetParallaxRef.current = (viewportCenter - elementCenter) * 0.068;
    };

    const animate = () => {
      // Expansion interpolation
      const newProgress = lerp(currentProgressRef.current, targetProgressRef.current, 0.08);
      if (Math.abs(newProgress - currentProgressRef.current) > 0.0001) {
        currentProgressRef.current = newProgress;
        if (containerRef.current) {
          containerRef.current.style.setProperty('--scroll-progress', newProgress.toString());
        }
      }

      // Parallax interpolation
      const newParallax = lerp(currentParallaxRef.current, targetParallaxRef.current, 0.1);
      if (Math.abs(newParallax - currentParallaxRef.current) > 0.01) {
        currentParallaxRef.current = newParallax;
        if (containerRef.current) {
          containerRef.current.style.setProperty('--parallax-y', `${newParallax}px`);
        }
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    requestRef.current = requestAnimationFrame(animate);
    
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const maxBorderRadius = 50;

  return (
    <div className="w-full flex justify-center bg-white py-8 overflow-hidden">
      <div 
        ref={containerRef}
        className="relative text-white bg-gray-900 box-border caret-transparent py-16 px-[18.75px] md:px-0"
        style={{
          width: `calc(min(1400px, 86%) + var(--scroll-progress, 0) * (100% - min(1400px, 86%)))`,
          borderRadius: `calc(${maxBorderRadius}px * (1 - var(--scroll-progress, 0)))`,
          marginLeft: 'auto',
          marginRight: 'auto',
          willChange: 'width, border-radius',
        }}
      >
        <div className="box-border caret-transparent max-w-[1240px] mx-auto">
          <div 
            className="box-border caret-transparent gap-x-8 grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-16"
            style={{ transform: 'translateY(var(--parallax-y, 0px))', willChange: 'transform' }}
          >
            <div className="box-border caret-transparent text-center">
              <p className="text-6xl font-bold box-border caret-transparent mb-4 font-apfel_grotezk md:text-7xl">
                {yearsOfExcellence}
              </p>
              <p className="text-xl box-border caret-transparent tracking-[0.4px]">
                Years of Excellence
              </p>
            </div>
            <div className="box-border caret-transparent text-center">
              <p className="text-6xl font-bold box-border caret-transparent mb-4 font-apfel_grotezk md:text-7xl">
                {partnerCompanies}
              </p>
              <p className="text-xl box-border caret-transparent tracking-[0.4px]">
                Partner Companies
              </p>
            </div>
            <div className="box-border caret-transparent text-center">
              <p className="text-6xl font-bold box-border caret-transparent mb-4 font-apfel_grotezk md:text-7xl">
                {projectsDelivered}
              </p>
              <p className="text-xl box-border caret-transparent tracking-[0.4px]">
                Projects Delivered
              </p>
            </div>
          </div>
          <div className="box-border caret-transparent mt-16 text-center">
            <p className="text-sm text-gray-400 box-border caret-transparent tracking-[0.5px] leading-[21px] uppercase mb-4 font-necto_mono">
              {operatingLabel}
            </p>
            <p className="text-2xl font-bold box-border caret-transparent mb-8 tracking-[2px] font-apfel_grotezk">
              {operatingCountries}
            </p>
            <a
              href={ctaUrl}
              className="group inline-flex items-center gap-4 w-fit mx-auto"
            >
              <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-600 text-white transition-transform duration-300 group-hover:scale-110">
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <span className="text-base md:text-xl font-semibold">{ctaText}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
