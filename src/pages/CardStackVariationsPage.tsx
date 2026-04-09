import { useState, useEffect } from "react";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
    title: "Pennsylvania Chemicals Project Milestone",
    category: "Petrochemicals",
    location: "Pennsylvania, USA"
  },
  {
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=600&fit=crop",
    title: "Basra Refinery Expansion",
    category: "Oil & Gas",
    location: "Basra, Iraq"
  },
  {
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
    title: "Baghdad Power Station",
    category: "Power Generation",
    location: "Baghdad, Iraq"
  },
  {
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=600&fit=crop",
    title: "Kirkuk Pipeline Network",
    category: "Infrastructure",
    location: "Kirkuk, Iraq"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
    title: "Erbil Solar Farm",
    category: "Renewable Energy",
    location: "Erbil, Iraq"
  }
];

// Variation 1: Homepage Style with Auto-Progress
const Variation1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const SLIDE_DURATION = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + (100 / (SLIDE_DURATION / 50));
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      handleNext();
    }
  }, [progress]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setProgress(0);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setProgress(0);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleDotClick = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setProgress(0);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-[18.75px] md:px-0 min-h-screen flex items-center justify-center">
      <div className="max-w-[500px] mx-auto">
        <h2 className="text-4xl leading-tight mb-8 font-apfel_grotezk text-center md:text-5xl">
          Variation 1: Homepage Classic
        </h2>
        <p className="text-gray-600 mb-12 text-center max-w-md mx-auto">
          Exact homepage style with stacked cards, auto-progress, and smooth animations
        </p>

        <div className="relative">
          {/* Stacked Background Cards */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="absolute bg-white rounded-3xl shadow-lg max-w-[420px] w-full"
              style={{
                transform: 'translateY(12px) scale(0.95)',
                zIndex: 1,
                opacity: 0.6
              }}
            >
              <div className="h-[450px]"></div>
            </div>
            
            <div 
              className="absolute bg-white rounded-3xl shadow-md max-w-[420px] w-full"
              style={{
                transform: 'translateY(24px) scale(0.90)',
                zIndex: 0,
                opacity: 0.3
              }}
            >
              <div className="h-[450px]"></div>
            </div>
          </div>

          {/* Main Card */}
          <div className="relative z-10">
            <div
              className={`bg-white rounded-3xl shadow-2xl overflow-hidden max-w-[420px] mx-auto transition-opacity duration-300 ${
                isAnimating ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <div className="relative h-72 overflow-hidden m-6 rounded-2xl">
                <img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-white text-xs uppercase tracking-wider font-semibold">
                    {projects[currentIndex].category}
                  </span>
                </div>
              </div>

              <div className="px-6 pb-6">
                <h3 className="text-2xl font-bold mb-4 font-apfel_grotezk">
                  {projects[currentIndex].title}
                </h3>

                {/* Progress Indicators */}
                <div className="flex items-center gap-2 mb-6">
                  {projects.map((_, index) => {
                    const isActive = index === currentIndex;
                    const isPast = index < currentIndex;
                    
                    return (
                      <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`relative bg-gray-200 box-border caret-transparent block h-2 overflow-hidden rounded-full cursor-pointer hover:bg-gray-300 transition-all ease-in-out ${
                          isActive ? 'w-20 duration-300' : 'w-2 duration-500'
                        }`}
                      >
                        <span 
                          className="absolute bg-red-600 h-full rounded-full left-0 top-0 transition-all ease-linear"
                          style={{ 
                            width: isPast ? '100%' : (isActive ? `${progress}%` : '0%'),
                            transitionDuration: isPast ? '500ms' : (isActive ? '100ms' : '0ms')
                          }}
                        />
                      </button>
                    );
                  })}
                </div>

                <button className="ml-auto w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center hover:bg-pink-300 transition-colors">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all"
            aria-label="Previous"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all"
            aria-label="Next"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

// Variation 2: Minimal with Side Tab
const Variation2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const SLIDE_DURATION = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + (100 / (SLIDE_DURATION / 50));
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      handleNext();
    }
  }, [progress]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setProgress(0);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setProgress(0);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleDotClick = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setProgress(0);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="bg-white py-16 px-[18.75px] md:px-0 min-h-screen flex items-center justify-center">
      <div className="max-w-[500px] mx-auto">
        <h2 className="text-4xl leading-tight mb-8 font-apfel_grotezk text-center md:text-5xl">
          Variation 2: Minimal Side Tab
        </h2>
        <p className="text-gray-600 mb-12 text-center max-w-md mx-auto">
          Clean design with vertical tab indicator and stacked depth
        </p>

        <div className="relative">
          {/* Stacked Background Cards */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="absolute bg-gray-50 rounded-3xl shadow-md max-w-[420px] w-full border border-gray-200"
              style={{
                transform: 'translateY(10px) scale(0.96)',
                zIndex: 1,
                opacity: 0.7
              }}
            >
              <div className="h-[450px]"></div>
            </div>
          </div>

          {/* Main Card with Side Tab */}
          <div className="relative z-10">
            <div
              className={`bg-white rounded-3xl shadow-xl overflow-hidden max-w-[420px] mx-auto transition-opacity duration-300 border border-gray-100 ${
                isAnimating ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {/* Side Tab */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-24 bg-red-600 rounded-r-full" />

              <div className="relative h-72 overflow-hidden m-6 rounded-2xl">
                <img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/95 backdrop-blur-sm text-gray-800 text-xs px-3 py-1.5 rounded-full font-semibold shadow-sm">
                    {projects[currentIndex].category}
                  </span>
                </div>
              </div>

              <div className="px-6 pb-6">
                <h3 className="text-2xl font-bold mb-4 font-apfel_grotezk">
                  {projects[currentIndex].title}
                </h3>

                {/* Progress Indicators */}
                <div className="flex items-center gap-2 mb-6">
                  {projects.map((_, index) => {
                    const isActive = index === currentIndex;
                    const isPast = index < currentIndex;
                    
                    return (
                      <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`relative bg-gray-200 box-border block h-2 overflow-hidden rounded-full cursor-pointer hover:bg-gray-300 transition-all ease-in-out ${
                          isActive ? 'w-20 duration-300' : 'w-2 duration-500'
                        }`}
                      >
                        <span 
                          className="absolute bg-red-600 h-full rounded-full left-0 top-0 transition-all ease-linear"
                          style={{ 
                            width: isPast ? '100%' : (isActive ? `${progress}%` : '0%'),
                            transitionDuration: isPast ? '500ms' : (isActive ? '100ms' : '0ms')
                          }}
                        />
                      </button>
                    );
                  })}
                </div>

                <button className="ml-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center hover:bg-red-200 transition-colors">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all border border-gray-200"
            aria-label="Previous"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all border border-gray-200"
            aria-label="Next"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

// Variation 3: Dark Mode with Glow
const Variation3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const SLIDE_DURATION = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + (100 / (SLIDE_DURATION / 50));
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      handleNext();
    }
  }, [progress]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setProgress(0);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setProgress(0);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleDotClick = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setProgress(0);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="bg-gray-900 py-16 px-[18.75px] md:px-0 min-h-screen flex items-center justify-center">
      <div className="max-w-[500px] mx-auto">
        <h2 className="text-4xl leading-tight mb-8 font-apfel_grotezk text-center md:text-5xl text-white">
          Variation 3: Dark Glow
        </h2>
        <p className="text-gray-400 mb-12 text-center max-w-md mx-auto">
          Dark theme with glowing effects and stacked cards
        </p>

        <div className="relative">
          {/* Stacked Background Cards */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="absolute bg-gray-800 rounded-3xl shadow-2xl max-w-[420px] w-full border border-gray-700"
              style={{
                transform: 'translateY(12px) scale(0.95)',
                zIndex: 1,
                opacity: 0.5
              }}
            >
              <div className="h-[450px]"></div>
            </div>
            
            <div 
              className="absolute bg-gray-800 rounded-3xl shadow-xl max-w-[420px] w-full border border-gray-700"
              style={{
                transform: 'translateY(24px) scale(0.90)',
                zIndex: 0,
                opacity: 0.3
              }}
            >
              <div className="h-[450px]"></div>
            </div>
          </div>

          {/* Main Card with Glow */}
          <div className="relative z-10">
            <div
              className={`bg-gray-800 rounded-3xl shadow-2xl overflow-hidden max-w-[420px] mx-auto transition-opacity duration-300 border border-gray-700 ${
                isAnimating ? 'opacity-0' : 'opacity-100'
              }`}
              style={{
                boxShadow: '0 0 40px rgba(220, 38, 38, 0.3), 0 20px 25px -5px rgba(0, 0, 0, 0.5)'
              }}
            >
              <div className="relative h-72 overflow-hidden m-6 rounded-2xl">
                <img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-red-400 text-xs uppercase tracking-wider font-semibold">
                    {projects[currentIndex].category}
                  </span>
                </div>
              </div>

              <div className="px-6 pb-6">
                <h3 className="text-2xl font-bold mb-4 font-apfel_grotezk text-white">
                  {projects[currentIndex].title}
                </h3>

                {/* Progress Indicators */}
                <div className="flex items-center gap-2 mb-6">
                  {projects.map((_, index) => {
                    const isActive = index === currentIndex;
                    const isPast = index < currentIndex;
                    
                    return (
                      <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`relative bg-gray-700 box-border block h-2 overflow-hidden rounded-full cursor-pointer hover:bg-gray-600 transition-all ease-in-out ${
                          isActive ? 'w-20 duration-300' : 'w-2 duration-500'
                        }`}
                      >
                        <span 
                          className="absolute bg-red-600 h-full rounded-full left-0 top-0 transition-all ease-linear"
                          style={{ 
                            width: isPast ? '100%' : (isActive ? `${progress}%` : '0%'),
                            transitionDuration: isPast ? '500ms' : (isActive ? '100ms' : '0ms'),
                            boxShadow: isActive ? '0 0 10px rgba(220, 38, 38, 0.8)' : 'none'
                          }}
                        />
                      </button>
                    );
                  })}
                </div>

                <button className="ml-auto w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors shadow-lg shadow-red-600/50">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gray-800 border border-gray-700 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-700 transition-all"
            aria-label="Previous"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gray-800 border border-gray-700 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-700 transition-all"
            aria-label="Next"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

// Variation 4: Compact with Counter
const Variation4 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const SLIDE_DURATION = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + (100 / (SLIDE_DURATION / 50));
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      handleNext();
    }
  }, [progress]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setProgress(0);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setProgress(0);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleDotClick = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setProgress(0);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 px-[18.75px] md:px-0 min-h-screen flex items-center justify-center">
      <div className="max-w-[500px] mx-auto">
        <h2 className="text-4xl leading-tight mb-8 font-apfel_grotezk text-center md:text-5xl">
          Variation 4: Compact Counter
        </h2>
        <p className="text-gray-600 mb-12 text-center max-w-md mx-auto">
          Space-efficient design with prominent counter and stacked effect
        </p>

        <div className="relative">
          {/* Stacked Background Cards */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="absolute bg-white rounded-3xl shadow-lg max-w-[420px] w-full"
              style={{
                transform: 'translateY(10px) scale(0.96)',
                zIndex: 1,
                opacity: 0.6
              }}
            >
              <div className="h-[420px]"></div>
            </div>
          </div>

          {/* Main Card */}
          <div className="relative z-10">
            <div
              className={`bg-white rounded-3xl shadow-2xl overflow-hidden max-w-[420px] mx-auto transition-opacity duration-300 ${
                isAnimating ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {/* Counter Badge */}
              <div className="absolute top-6 right-6 z-10 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <span className="text-sm font-bold text-gray-800">
                  {currentIndex + 1} / {projects.length}
                </span>
              </div>

              <div className="relative h-64 overflow-hidden m-6 rounded-2xl">
                <img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-xs uppercase tracking-wider font-semibold bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                    {projects[currentIndex].category}
                  </span>
                </div>
              </div>

              <div className="px-6 pb-6">
                <h3 className="text-xl font-bold mb-4 font-apfel_grotezk">
                  {projects[currentIndex].title}
                </h3>

                {/* Progress Indicators */}
                <div className="flex items-center gap-2 mb-6">
                  {projects.map((_, index) => {
                    const isActive = index === currentIndex;
                    const isPast = index < currentIndex;
                    
                    return (
                      <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`relative bg-gray-200 box-border block h-2 overflow-hidden rounded-full cursor-pointer hover:bg-gray-300 transition-all ease-in-out ${
                          isActive ? 'w-20 duration-300' : 'w-2 duration-500'
                        }`}
                      >
                        <span 
                          className="absolute bg-indigo-600 h-full rounded-full left-0 top-0 transition-all ease-linear"
                          style={{ 
                            width: isPast ? '100%' : (isActive ? `${progress}%` : '0%'),
                            transitionDuration: isPast ? '500ms' : (isActive ? '100ms' : '0ms')
                          }}
                        />
                      </button>
                    );
                  })}
                </div>

                <button className="ml-auto w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center hover:bg-indigo-200 transition-colors">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all"
            aria-label="Previous"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all"
            aria-label="Next"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

// Variation 5: Elegant with Border Accent
const Variation5 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const SLIDE_DURATION = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + (100 / (SLIDE_DURATION / 50));
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      handleNext();
    }
  }, [progress]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setProgress(0);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setProgress(0);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleDotClick = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setProgress(0);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 py-16 px-[18.75px] md:px-0 min-h-screen flex items-center justify-center">
      <div className="max-w-[500px] mx-auto">
        <h2 className="text-4xl leading-tight mb-8 font-apfel_grotezk text-center md:text-5xl">
          Variation 5: Elegant Border
        </h2>
        <p className="text-gray-600 mb-12 text-center max-w-md mx-auto">
          Sophisticated design with colored border accent and stacked cards
        </p>

        <div className="relative">
          {/* Stacked Background Cards */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="absolute bg-white rounded-3xl shadow-lg max-w-[420px] w-full border-2 border-amber-200"
              style={{
                transform: 'translateY(12px) scale(0.95)',
                zIndex: 1,
                opacity: 0.5
              }}
            >
              <div className="h-[450px]"></div>
            </div>
            
            <div 
              className="absolute bg-white rounded-3xl shadow-md max-w-[420px] w-full border-2 border-amber-100"
              style={{
                transform: 'translateY(24px) scale(0.90)',
                zIndex: 0,
                opacity: 0.3
              }}
            >
              <div className="h-[450px]"></div>
            </div>
          </div>

          {/* Main Card with Border */}
          <div className="relative z-10">
            <div
              className={`bg-white rounded-3xl shadow-2xl overflow-hidden max-w-[420px] mx-auto transition-opacity duration-300 border-4 border-amber-400 ${
                isAnimating ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <div className="relative h-72 overflow-hidden m-6 rounded-2xl">
                <img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-400 text-gray-900 text-xs px-3 py-1.5 rounded-full font-bold uppercase tracking-wider">
                    {projects[currentIndex].category}
                  </span>
                </div>
              </div>

              <div className="px-6 pb-6">
                <h3 className="text-2xl font-bold mb-4 font-apfel_grotezk">
                  {projects[currentIndex].title}
                </h3>

                {/* Progress Indicators */}
                <div className="flex items-center gap-2 mb-6">
                  {projects.map((_, index) => {
                    const isActive = index === currentIndex;
                    const isPast = index < currentIndex;
                    
                    return (
                      <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`relative bg-amber-200 box-border block h-2 overflow-hidden rounded-full cursor-pointer hover:bg-amber-300 transition-all ease-in-out ${
                          isActive ? 'w-20 duration-300' : 'w-2 duration-500'
                        }`}
                      >
                        <span 
                          className="absolute bg-amber-600 h-full rounded-full left-0 top-0 transition-all ease-linear"
                          style={{ 
                            width: isPast ? '100%' : (isActive ? `${progress}%` : '0%'),
                            transitionDuration: isPast ? '500ms' : (isActive ? '100ms' : '0ms')
                          }}
                        />
                      </button>
                    );
                  })}
                </div>

                <button className="ml-auto w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors shadow-lg">
                  <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all border-2 border-amber-400"
            aria-label="Previous"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all border-2 border-amber-400"
            aria-label="Next"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export const CardStackVariationsPage = () => {
  const [selectedVariation, setSelectedVariation] = useState(1);

  const variations = [
    { id: 1, name: "Homepage Classic", component: <Variation1 /> },
    { id: 2, name: "Minimal Side Tab", component: <Variation2 /> },
    { id: 3, name: "Dark Glow", component: <Variation3 /> },
    { id: 4, name: "Compact Counter", component: <Variation4 /> },
    { id: 5, name: "Elegant Border", component: <Variation5 /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-[1240px] mx-auto px-[18.75px] py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold font-apfel_grotezk">Card Stack Design Variations</h1>
            <a 
              href="./?page=albarham" 
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "./?page=albarham";
              }}
              className="text-red-600 hover:text-red-800 font-semibold text-sm"
            >
              ← Back to Home
            </a>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {variations.map((variation) => (
              <button
                key={variation.id}
                onClick={() => setSelectedVariation(variation.id)}
                className={`px-6 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-all ${
                  selectedVariation === variation.id
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {variation.id}. {variation.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div>
        {variations.find(v => v.id === selectedVariation)?.component}
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-8">
        <div className="max-w-[1240px] mx-auto px-[18.75px] text-center">
          <p className="text-sm text-gray-400">
            Select a variation above to preview different card stack designs
          </p>
        </div>
      </div>
    </div>
  );
};
