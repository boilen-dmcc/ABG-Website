import { useQuery } from "@animaapp/playground-react-sdk";
import { ProjectCard } from "@/components/ProjectCard";
import { CarouselNavigation } from "@/components/CarouselNavigation";

export const FeaturedProjectsCarousel = () => {
  const { data: projects, isPending, error } = useQuery("Project", {
    orderBy: { createdAt: "desc" },
    limit: 10
  });

  if (isPending) {
    return (
      <div className="box-border caret-transparent max-w-full overscroll-x-none w-full ml-auto mt-8 px-0 md:px-16">
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-500">Loading projects...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="box-border caret-transparent max-w-full overscroll-x-none w-full ml-auto mt-8 px-0 md:px-16">
        <div className="flex items-center justify-center h-64">
          <p className="text-red-600">Error loading projects</p>
        </div>
      </div>
    );
  }

  if (!projects || projects.length === 0) {
    return (
      <div className="box-border caret-transparent max-w-full overscroll-x-none w-full ml-auto mt-8 px-0 md:px-16">
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-500">No projects available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="box-border caret-transparent max-w-full overscroll-x-none w-full ml-auto mt-8 px-0 md:px-16">
      <div className="box-border caret-transparent flex overflow-x-hidden overflow-y-auto">
        <div className="box-border caret-transparent gap-x-8 flex gap-y-8 overflow-auto pb-6 px-[18.75px] md:px-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              location={project.location}
              title={project.title}
              href={project.href}
              ariaLabel={project.ariaLabel}
              iconSrc={project.iconSrc}
              imageSrc={project.imageSrc}
              variant={index === 0 ? "aspect-square rounded-lg" : "aspect-[3_/_4] rounded-l-lg"}
              figureVariant={index === 0 ? "z-0" : "z-10"}
            />
          ))}
        </div>
      </div>
      <CarouselNavigation />
    </div>
  );
};
