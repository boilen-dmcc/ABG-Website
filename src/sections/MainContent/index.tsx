import { IntroSection } from "@/sections/MainContent/components/IntroSection";
import { TeamSection } from "@/sections/MainContent/components/TeamSection";
import { BuildingTogetherSection } from "@/sections/MainContent/components/BuildingTogetherSection";
import { WeAreBechtelSection } from "@/sections/MainContent/components/WeAreBechtelSection";
import { ProjectsSection } from "@/sections/MainContent/components/ProjectsSection";
import { FeaturedProjectsCarousel } from "@/sections/MainContent/components/FeaturedProjectsCarousel";
import { HistorySection } from "@/sections/MainContent/components/HistorySection";

export const MainContent = () => {
  return (
    <main className="box-border caret-transparent">
      <IntroSection />
      <TeamSection />
      <BuildingTogetherSection />
      <WeAreBechtelSection />
      <div className="box-border caret-transparent max-w-[800px] min-h-16 mt-8 mx-auto px-[18.75px] md:px-16"></div>
      <ProjectsSection />
      <div className="box-border caret-transparent max-w-[800px] min-h-32 mt-8 mx-auto px-[18.75px] md:px-16"></div>
      <h2 className="text-5xl box-border caret-transparent leading-[52.8px] max-w-[1240px] mt-8 mb-12 mx-auto px-[18.75px] font-apfel_grotezk md:text-[64px] md:leading-[70.4px] md:px-16">
        Featured Projects
      </h2>
      <FeaturedProjectsCarousel />
      <div className="box-border caret-transparent max-w-[800px] min-h-8 mt-8 mx-auto px-[18.75px] md:px-16"></div>
      <HistorySection />
    </main>
  );
};
