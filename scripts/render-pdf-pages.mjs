import fs from "fs";
import path from "path";
import { createCanvas, Image } from "canvas";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";

globalThis.Image = Image;

class NodeCanvasFactory {
  create(width, height) {
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");
    return { canvas, context };
  }

  reset({ canvas }, width, height) {
    canvas.width = width;
    canvas.height = height;
  }

  destroy({ canvas }) {
    canvas.width = 0;
    canvas.height = 0;
  }
}

const canvasFactory = new NodeCanvasFactory();

const pdfPath = process.argv[2] ?? "C:/Users/Dell/Downloads/Final Profile.pdf";
const outDir = process.argv[3] ?? "D:/nextjs/ABG/tmp/pdf-pages";
const scale = Number(process.argv[4] ?? 1.5);
const startPage = Number(process.argv[5] ?? 1);
const endPage = process.argv[6] ? Number(process.argv[6]) : undefined;

fs.mkdirSync(outDir, { recursive: true });

const data = new Uint8Array(fs.readFileSync(pdfPath));
const doc = await getDocument({ data, useSystemFonts: true, canvasFactory }).promise;

const last = endPage ?? doc.numPages;
console.log(`Pages: ${doc.numPages}, rendering ${startPage}-${last}`);

for (let i = startPage; i <= last; i++) {
  const page = await doc.getPage(i);
  const viewport = page.getViewport({ scale });
  const { canvas, context } = canvasFactory.create(viewport.width, viewport.height);

  await page.render({ canvasContext: context, viewport, canvasFactory }).promise;

  const outPath = path.join(outDir, `page-${String(i).padStart(2, "0")}.png`);
  fs.writeFileSync(outPath, canvas.toBuffer("image/png"));
  canvasFactory.destroy({ canvas, context });
  console.log(`Wrote ${outPath}`);
}
