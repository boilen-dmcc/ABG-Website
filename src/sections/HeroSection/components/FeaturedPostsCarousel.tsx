import { useState, useEffect } from "react";
import { useQuery } from "@animaapp/playground-react-sdk";
import { FeaturedPostCard } from "@/sections/HeroSection/components/FeaturedPostCard";
import { CarouselDots } from "@/components/CarouselDots";
import { CarouselControls } from "@/components/CarouselControls";

const SLIDE_DURATION = 5000; // 5 seconds per slide

export const FeaturedPostsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Fetch featured posts from database
  const { data: posts, isPending, error } = useQuery("FeaturedPost", {
    orderBy: { createdAt: "desc" },
    limit: 5
  });

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
    if (progress >= 100 && posts && posts.length > 0) {
      handleNext();
    }
  }, [progress, posts]);

  const handleNext = () => {
    if (isAnimating || !posts || posts.length === 0) return;
    setIsAnimating(true);
    setProgress(0);
    setCurrentIndex((prev) => (prev + 1) % posts.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handlePrev = () => {
    if (isAnimating || !posts || posts.length === 0) return;
    setIsAnimating(true);
    setProgress(0);
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleDotClick = (index: number) => {
    if (isAnimating || index === currentIndex || !posts) return;
    setIsAnimating(true);
    setProgress(0);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  if (isPending) {
    return (
      <div className="relative bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] box-border caret-transparent isolate max-h-[451px] max-w-[225px] align-bottom ml-auto mr-[18.75px] mt-0 p-6 rounded-lg md:max-w-screen-md md:mt-56 md:mx-0">
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-500">Loading posts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] box-border caret-transparent isolate max-h-[451px] max-w-[225px] align-bottom ml-auto mr-[18.75px] mt-0 p-6 rounded-lg md:max-w-screen-md md:mt-56 md:mx-0">
        <div className="flex items-center justify-center h-64">
          <p className="text-red-600">Error loading posts</p>
        </div>
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="relative bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] box-border caret-transparent isolate max-h-[451px] max-w-[225px] align-bottom ml-auto mr-[18.75px] mt-0 p-6 rounded-lg md:max-w-screen-md md:mt-56 md:mx-0">
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-500">No posts available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] box-border caret-transparent isolate max-h-[451px] max-w-[225px] align-bottom ml-auto mr-[18.75px] mt-0 p-6 rounded-lg md:max-w-screen-md md:mt-56 md:mx-0 after:accent-auto after:bg-zinc-200 after:caret-transparent after:text-white after:block after:text-xl after:not-italic after:normal-nums after:font-normal after:h-[90%] after:tracking-[0.0208px] after:leading-[30px] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:translate-y-[-145.602px] after:visible after:w-5 after:rounded-l-lg after:border-separate after:right-full after:top-2/4 after:font-neue_haas_grotesk_display after:md:translate-y-[-153.953px]">
      <h2 className="absolute text-3xl box-border caret-transparent h-px leading-[45px] w-px overflow-hidden -m-px font-apfel_grotezk">
        Featured Posts
      </h2>
      
      <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        <FeaturedPostCard
          image={posts[currentIndex].image}
          title={posts[currentIndex].title}
          url={posts[currentIndex].url}
        />
      </div>

      <CarouselDots 
        total={posts.length} 
        current={currentIndex} 
        progress={progress}
        onDotClick={handleDotClick}
      />
      <CarouselControls onPrev={handlePrev} onNext={handleNext} />
    </div>
  );
};
