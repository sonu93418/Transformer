/**
 * webp-frame-extractor.mjs
 * Simple WebP frame extractor using Node.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const INPUT_FILE = 'c:\\Users\\ASUS\\Downloads\\Truck_to_Robot_Transformation_Video-ezgif.com-video-to-webp-converter.webp';
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images', 'transformer-sequence');

console.log('🎬 WebP Frame Extractor\n');
console.log('Input:', INPUT_FILE);
console.log('Output:', OUTPUT_DIR, '\n');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Try using anim_dump from webp tools if available
console.log('⚠️  This requires webp tools to be installed.');
console.log('📥 Download from: https://developers.google.com/speed/webp/download\n');
console.log('Or use the online method at: https://ezgif.com/split-webp\n');

// Attempt extraction if webpmux is available
const webpmux = spawn('webpmux', ['-info', INPUT_FILE]);

webpmux.on('error', () => {
  console.log('❌ webpmux not found.');
  console.log('\n🌐 EASIEST METHOD: Use EZGIF Online');
  console.log('1. Visit: https://ezgif.com/split-webp');
  console.log('2. Upload your WebP file');
  console.log('3. Click "Split to frames"');
  console.log('4. Download ZIP of frames');
  console.log('5. Extract and copy to:', OUTPUT_DIR);
  console.log('\n💡 Then update data/transformerData.ts with the frame count');
});

webpmux.stdout.on('data', (data) => {
  const info = data.toString();
  const frameMatch = info.match(/Number of frames: (\d+)/);
  if (frameMatch) {
    console.log(`✅ Found ${frameMatch[1]} frames in WebP`);
  }
});
