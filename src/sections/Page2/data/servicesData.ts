import { solutionPages } from "@/sections/Page2/data/solutionsNav";

function getSolutionImage(index: number): string {
  return `/solutions/${String(index + 1).padStart(2, "0")}/about.webp`;
}

export const services = solutionPages.map((solution, index) => ({
  id: index + 1,
  number: String(index + 1).padStart(2, "0"),
  title: solution.heroTitle ?? solution.name,
  subtitle: solution.industryCategory,
  description: solution.heroSubhead,
  image: getSolutionImage(index),
  link: `/solutions/${solution.slug}`,
}));
