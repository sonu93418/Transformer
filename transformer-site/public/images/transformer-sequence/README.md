# Frame Images Directory

Place your 204 transformation frames here:

```
1.jpg
2.jpg
3.jpg
...
204.jpg
```

## How to generate frames:

1. Create your transformation video using VEO 3 or similar
2. Convert video to frames using EZGIF (20-30 FPS)
3. Rename files sequentially: 1.jpg, 2.jpg, ... 204.jpg
4. Place them in this directory

## Or generate placeholder frames for testing:

```bash
npm install canvas --save-dev
node scripts/generate-placeholder-frames.mjs
```
