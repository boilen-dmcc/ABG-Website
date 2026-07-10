import { Button } from "@/components/Button";
import {
  revealMotionStyle,
  revealTransitionClass,
  useRevealOnScroll,
} from "@/hooks/useRevealOnScroll";

const ctaItems = [
  {
    eyebrow: "Careers",
    title: "Join Our Team",
    description:
      "We are always looking for passionate, talented, and creative people to join our team.",
    href: "/careers",
    cta: "View Careers",
    image: "/join-our-tem.webp",
  },
  {
    eyebrow: "Contact",
    title: "Let's Collaborate",
    description:
      "Let us assist you in determining the best solution for your project. Start the conversation today.",
    href: "/contact",
    cta: "Contact Us",
    image:
      "https://c.animaapp.com/mkkxt1y8OC5kKc/img/uploaded-asset-1770306699911-0.jpeg",
  },
];

export const Page2CTA = () => {
  const { ref, visible } = useRevealOnScroll();

  return (
    <section className="home-section-y bg-gray-50">
      <div ref={ref} className="home-container">
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 md:gap-6 xl:gap-8">
          {ctaItems.map((item, index) => (
            <div
              key={item.href}
              className={`group relative flex min-h-[340px] overflow-hidden rounded-2xl bg-[#121e37] shadow-lg ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-xl xs:min-h-[380px] sm:min-h-[400px] md:min-h-[420px] ${revealTransitionClass}`}
              style={revealMotionStyle(visible, index * 120, index === 0 ? "left" : "right")}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#121e37] via-[#121e37]/55 to-[#121e37]/20" />

              <div className="relative z-10 mt-auto flex w-full flex-col p-6 xs:p-7 md:p-8 xl:p-10">
                <span className="mb-3 w-fit bg-red-600 px-1.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-white">
                  {item.eyebrow}
                </span>

                <h2 className="mb-3 font-apfel_grotezk text-2xl font-bold leading-tight text-white xs:mb-4 xs:text-3xl md:text-4xl">
                  {item.title}
                </h2>

                <p className="mb-6 max-w-md text-sm leading-relaxed text-white/75 xs:mb-8 xs:text-base">
                  {item.description}
                </p>

                <Button to={item.href} variant="secondary" className="w-fit text-white">
                  {item.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
