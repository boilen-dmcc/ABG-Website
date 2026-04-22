    import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { projects } from "@/sections/Projects/data/projects";

export const Page2Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(projects.length - 1, prev + 1));
  };

  const handleCardClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="box-border caret-transparent py-16 px-0 overflow-hidden bg-white">
    <div className="box-border caret-transparent max-w-[1400px] mx-auto px-6 md:px-12">
      <p className="text-red-600 text-sm box-border caret-transparent tracking-[0.5px] leading-[21px] uppercase mb-4 font-necto_mono">
        Featured Projects
      </p>
        <h2 className="text-5xl box-border caret-transparent leading-[52.8px] mb-12 font-apfel_grotezk md:text-[64px] md:leading-[70.4px]">
          Building Iraq's Future
        </h2>
      </div>

      <div className="relative">
        {/* Carousel Container */}
        <div className="overflow-x-auto overflow-y-visible scrollbar-hide">
          <div 
            className="flex gap-6 transition-transform duration-500 ease-out px-6 md:px-[max(48px,calc((100%-1400px)/2+48px))] pb-6"
            style={{ 
              transform: `translateX(-${currentIndex * 570}px)`,
            }}
          >
            {projects.map((project, index) => {
              const isActive = index === currentIndex;
              
              return (
                <div
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={`flex-shrink-0 w-[540px] transition-all duration-500 cursor-pointer ${
                    isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-60'
                  }`}
                  style={{
                    filter: isActive ? 'none' : 'brightness(0.8)',
                  }}
                >
                  {/* Project Card - Split Layout (Extra Large) */}
                  <div className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-white group h-[460px] md:flex-row md:h-[360px]">
                    {/* Image Section */}
                    <div className="md:w-1/2 h-[220px] md:h-full relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-full object-cover transition-transform duration-500 ${
                          isActive ? 'group-hover:scale-105' : ''
                        }`}
                      />
                    </div>

                    {/* Content Section */}
                    <div className="md:w-1/2 p-7 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="w-2.5 h-2.5 bg-red-600 rounded-full" />
                          <span className="text-sm text-red-600 uppercase tracking-wider font-semibold">
                            {project.category}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 font-apfel_grotezk line-clamp-2">
                          {project.title}
                        </h3>
                        <p className="text-base text-gray-600 mb-4">{project.location}</p>
                        <p className="text-base text-gray-700 leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-5 pt-5 border-t">
                        <span className="text-2xl font-bold text-gray-900">{project.value}</span>
                        {isActive && (
                          <Link
                            to={`/projects/${project.slug}`}
                            className="text-red-600 text-base font-semibold hover:text-red-800 flex items-center gap-2 transition-colors"
                          >
                            Learn More
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Progress Bar */}
          <div className="mt-8 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-red-600 transition-all duration-500 rounded-full"
              style={{ 
                width: `${((currentIndex + 1) / projects.length) * 100}%` 
              }}
            />
          </div>

          {/* Arrows + Counter row */}
          <div className="flex items-center justify-between mt-5">
            <div className="flex items-center gap-3">
              {/* Prev Arrow */}
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="w-10 h-10 bg-gray-900/5 backdrop-blur-sm rounded-full border border-gray-900/10 flex items-center justify-center hover:bg-gray-900/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed text-gray-900"
                aria-label="Previous project"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Next Arrow */}
              <button
                onClick={handleNext}
                disabled={currentIndex === projects.length - 1}
                className="w-10 h-10 bg-gray-900/5 backdrop-blur-sm rounded-full border border-gray-900/10 flex items-center justify-center hover:bg-gray-900/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed text-gray-900"
                aria-label="Next project"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Counter */}
            <span className="text-sm text-gray-500 tabular-nums">
              {currentIndex + 1} / {projects.length}
            </span>
          </div>
        </div>
      </div>

      <div className="box-border caret-transparent max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="box-border caret-transparent mt-12 text-left">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-4 w-fit"
          >
            <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-600 text-white transition-transform duration-300 group-hover:scale-110">
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <span className="text-base md:text-xl font-semibold text-red-600">View All Projects</span>
          </Link>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};
