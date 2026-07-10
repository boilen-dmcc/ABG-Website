import { projectExecutionModel } from "@/sections/Solution/data/projectExecutionModel";
import { oilGas } from "@/sections/Solution/data/oilGas";
import { gasProcessing } from "@/sections/Solution/data/gasProcessing";
import { epccExecutionFramework } from "@/sections/Solution/data/epccExecutionFramework";
import type { SolutionData } from "@/sections/Solution/types";

export const solutionPages: SolutionData[] = [
  projectExecutionModel,
  oilGas,
  gasProcessing,
  epccExecutionFramework,
];

export type SolutionsNavItem = {
  name: string;
  description?: string;
  url: string;
};

export const solutionsNav: SolutionsNavItem[] = solutionPages.map((solution) => ({
  name: solution.heroTitle ?? solution.name,
  description: solution.heroSubhead,
  url: `/solutions/${solution.slug}`,
}));
