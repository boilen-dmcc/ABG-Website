import { copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const indexPath = join("dist", "index.html");
const fallbackPath = join("dist", "404.html");

if (!existsSync(indexPath)) {
  console.error("dist/index.html not found. Run vite build first.");
  process.exit(1);
}

copyFileSync(indexPath, fallbackPath);
console.log("Created dist/404.html for GitHub Pages client-side routing.");
