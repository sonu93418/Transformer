/**
 * extract-webp-frames.mjs
 * 
 * Extracts all frames from an animated WebP file
 * Requires 'sharp' package: npm install sharp
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const INPUT_FILE = 'c:\\Users\\ASUS\\Downloads\\Truck_to_Robot_Transformation_Video-ezgif.com-video-to-webp-converter.webp';
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images', 'transformer-sequence');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

console.log('🎬 Extracting frames from animated WebP...');
console.log(`Input: ${INPUT_FILE}`);
console.log(`Output: ${OUTPUT_DIR}`);

// Use ImageMagick to extract frames (more reliable for animated WebP)
try {
  const { stdout } = await execAsync(
    `magick "${INPUT_FILE}" -coalesce "${OUTPUT_DIR}/%d.jpg"`
  );
  
  console.log('✅ Frames extracted successfully!');
  
  // Count and rename frames to sequential numbers
  const files = fs.readdirSync(OUTPUT_DIR)
    .filter(f => f.endsWith('.jpg'))
    .sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)[0]);
      const numB = parseInt(b.match(/\d+/)[0]);
      return numA - numB;
    });
  
  console.log(`📊 Found ${files.length} frames`);
  
  // Rename to sequential 1.jpg, 2.jpg, etc.
  files.forEach((file, index) => {
    const oldPath = path.join(OUTPUT_DIR, file);
    const newPath = path.join(OUTPUT_DIR, `${index + 1}.jpg`);
    if (oldPath !== newPath) {
      fs.renameSync(oldPath, newPath);
    }
  });
  
  console.log(`✅ Renamed frames to 1.jpg through ${files.length}.jpg`);
  console.log(`\n🎯 Update data/transformerData.ts:`);
  console.log(`   totalFrames: ${files.length},`);
  
} catch (error) {
  console.error('❌ Error extracting frames:', error.message);
  console.log('\n💡 Alternative methods:');
  console.log('1. Use EZGIF online: https://ezgif.com/split');
  console.log('2. Or install ImageMagick: https://imagemagick.org/');
  console.log('3. Then run this script again');
}
