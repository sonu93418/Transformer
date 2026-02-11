/**
 * generate-placeholder-frames.mjs
 *
 * Run with: node scripts/generate-placeholder-frames.mjs
 *
 * Creates 204 placeholder JPEG images (colored squares with frame numbers)
 * so you can test the scroll animation before adding real frames.
 *
 * NOTE: This uses a Canvas polyfill. Install `canvas` first:
 *   npm install canvas --save-dev
 *
 * Or simply place your real frames (1.jpg … 204.jpg) into
 * public/images/transformer-sequence/ and skip this script.
 */

import { createCanvas } from "canvas";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(
  __dirname,
  "..",
  "public",
  "images",
  "transformer-sequence"
);
const TOTAL_FRAMES = 204;
const WIDTH = 1280;
const HEIGHT = 720;

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

for (let i = 1; i <= TOTAL_FRAMES; i++) {
  const t = (i - 1) / (TOTAL_FRAMES - 1); // 0 → 1

  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext("2d");

  // Gradient from dark blue (truck / garage) to dark red (robot / battlefield)
  const r = Math.round(11 + t * (183 - 11));
  const g = Math.round(11 + t * (28 - 11));
  const b = Math.round(40 + t * (28 - 40));
  ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Frame number
  ctx.fillStyle = "rgba(255,255,255,0.7)";
  ctx.font = "bold 80px monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(`Frame ${String(i).padStart(3, "0")}`, WIDTH / 2, HEIGHT / 2);

  // Subtitle
  ctx.font = "28px monospace";
  ctx.fillStyle = "rgba(255,255,255,0.35)";
  ctx.fillText(
    t < 0.3 ? "TRUCK — GARAGE" : t < 0.75 ? "TRANSFORMING…" : "ROBOT — BATTLEFIELD",
    WIDTH / 2,
    HEIGHT / 2 + 60
  );

  const buffer = canvas.toBuffer("image/jpeg", { quality: 0.85 });
  fs.writeFileSync(path.join(OUTPUT_DIR, `${i}.jpg`), buffer);
}

console.log(`✅ Generated ${TOTAL_FRAMES} placeholder frames in ${OUTPUT_DIR}`);
