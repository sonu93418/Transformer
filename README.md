<div align="center">

# 🤖 OPTIMUS PRIME TRANSFORMATION

<img src="https://readme-typing-svg.demolab.com?font=Orbitron&weight=900&size=35&duration=3000&pause=1000&color=B71C1C&center=true&vCenter=true&width=600&lines=SCROLL-DRIVEN+ANIMATION;192+FRAME+SEQUENCE;AUTOBOT+COMMANDER;FREEDOM+IS+THE+RIGHT" alt="Typing SVG" />

[![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11+-FF0080?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**A cinematic, scroll-driven transformation sequence of Optimus Prime from vehicle to robot mode**

[🚀 View Live Demo](https://transformer.sonuray.me) • [📖 Documentation](#installation) • [🐛 Report Bug](https://github.com/sonu93418/Transformer/issues) • [✨ Request Feature](https://github.com/sonu93418/Transformer/issues)

---

</div>

## 🎬 Features

<div align="center">

```
  ╔═══════════════════════════════════════════════════════════╗
  ║   🎯  192 Frame Transformation Sequence                 ║
  ║   🎨  Scroll-Driven Canvas Animation                    ║
  ║   ⚡  High-DPI Optimized Rendering                      ║
  ║   🎭  Dynamic HUD Overlay System                        ║
  ║   📱  Fully Responsive Design                           ║
  ║   🌊  Smooth Parallax Effects                           ║
  ║   ✨  Animated Background Elements                      ║
  ║   🎪  Interactive Feature Cards                         ║
  ╚═══════════════════════════════════════════════════════════╝
```

</div>

### ✨ Highlights

- **🎥 Frame-by-Frame Animation**: 192 high-quality PNG frames extracted from original transformation sequence
- **📜 Scroll Control**: Natural scrolling controls the animation - scroll down to transform, scroll up to reverse
- **🎨 Canvas 2D Rendering**: Hardware-accelerated canvas with `imageSmoothingQuality: 'high'` for crisp visuals
- **📐 Smart Fitting**: "Contain" algorithm ensures full robot visibility on all screen sizes
- **🎭 HUD Phases**: Three distinct phases with animated text overlays synchronized to scroll position
- **⚡ Performance**: Optimized with `requestAnimationFrame`, image preloading, and efficient state management
- **🎯 Deep Linking**: Navigation with smooth scroll to Specs, Features, Timeline, and Technical Dossier sections

---

## 🛠️ Technology Stack

<div align="center">

| Technology | Purpose | Version |
|------------|---------|---------|
| ![Next.js](https://img.shields.io/badge/Next.js-black?style=flat-square&logo=next.js) | React Framework | 14.2+ |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) | Type Safety | 5.0+ |
| ![Framer Motion](https://img.shields.io/badge/Framer-FF0080?style=flat-square&logo=framer&logoColor=white) | Animation Library | 11.0+ |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) | Styling Framework | 4.0+ |
| ![Canvas API](https://img.shields.io/badge/Canvas_2D-E34F26?style=flat-square&logo=html5&logoColor=white) | Frame Rendering | Native |
| ![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=flat-square&logo=google&logoColor=white) | Typography | Orbitron + Rajdhani |

</div>

---

## 🚀 Installation

### Prerequisites

```bash
Node.js 18.0 or higher
npm / yarn / pnpm / bun
```

### Quick Start

```bash
# Clone the repository
git clone https://github.com/sonu93418/Transformer.git

# Navigate to project directory
cd Transformer/transformer-site

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the transformation in action! 🎉

**Live Demo**: [https://transformer.sonuray.me](https://transformer.sonuray.me)

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

---

## 📂 Project Structure

```
transformer-site/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main page orchestrator with scroll hook
│   └── globals.css         # Design tokens and global styles
├── components/
│   ├── Navbar.tsx          # Navigation with glassmorphism
│   ├── TransformerScrollCanvas.tsx   # Canvas frame renderer
│   ├── TransformerExperience.tsx     # HUD overlay system
│   └── PostSequenceContent.tsx       # Below-fold content
├── data/
│   └── transformerData.ts  # Centralized content and configuration
├── public/
│   └── images/
│       └── transformer-sequence/     # 192 PNG frames (1.png - 192.png)
└── scripts/
    └── extract-webp-frames.mjs       # Frame extraction utility
```

---

## 🎨 Core Architecture

### Single Scroll Source Pattern

```typescript
// app/page.tsx - Single source of truth for scroll
const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ["start start", "end end"]
});

// Pass scrollYProgress to all children
<TransformerScrollCanvas scrollYProgress={scrollYProgress} />
<TransformerExperience scrollYProgress={scrollYProgress} />
```

### Frame Rendering Logic

```typescript
// Canvas 2D with "contain" fit algorithm
const imgRatio = img.naturalWidth / img.naturalHeight;
const canvasRatio = displayW / displayH;

if (imgRatio > canvasRatio) {
  // Letterboxing (bars top/bottom)
  drawW = displayW;
  drawH = displayW / imgRatio;
  drawX = 0;
  drawY = (displayH - drawH) / 2;
} else {
  // Pillarboxing (bars left/right)
  drawH = displayH;
  drawW = displayH * imgRatio;
  drawX = (displayW - drawW) / 2;
  drawY = 0;
}
```

### HUD Phase System

```typescript
// Three scroll-synchronized phases
HUD_PHASES = [
  { range: [0, 0.3], id: "hero" },        // Vehicle mode
  { range: [0.3, 0.75], id: "transformation" },
  { range: [0.75, 1], id: "robot" }       // Robot mode
]
```

---

## 🎯 Key Features Breakdown

### 1. Scroll-Driven Animation
- **500vh container** creates extended scroll region
- **Sticky canvas viewport** locks animation in view
- **Linear interpolation** maps scroll (0-1) to frames (0-191)
- **requestAnimationFrame** ensures smooth 60fps rendering

### 2. High-Quality Rendering
- **devicePixelRatio scaling** for Retina/4K displays
- **imageSmoothingQuality: 'high'** for crisp scaling
- **Async image decoding** for better performance
- **Progressive loading** with fallback to first frame

### 3. Responsive Design
- **Mobile-first approach** with Tailwind breakpoints
- **Dynamic canvas resizing** on viewport changes
- **Touch-friendly** scroll interactions
- **Accessible** with ARIA labels and semantic HTML

### 4. Visual Effects
- **Parallax hero text** fades out as you scroll
- **Animated grid background** with radial masking
- **Floating glow orbs** with organic motion
- **Hover effects** on feature cards with scale + glow

---

## 🎬 Configuration

Edit `data/transformerData.ts` to customize:

```typescript
export const SEQUENCE_CONFIG = {
  totalFrames: 192,              // Number of frames
  scrollLength: "500vh",         // Scroll container height
  folder: "/images/transformer-sequence/",
  fileExtension: "png"
};

export const HUD_PHASES = [
  {
    id: "hero",
    range: [0, 0.3],
    lines: [
      { text: "OPTIMUS PRIME", style: "title" },
      { text: "AUTOBOT COMMANDER", style: "caption" }
    ]
  },
  // ... more phases
];
```

---

## 🖼️ Screenshots

<div align="center">

### 🚗 Vehicle Mode
*Peterbilt 379 semi-truck configuration with combat armor*

### 🔄 Transformation Sequence
*84 frames of mechanical ballet - every gear, piston, and panel*

### 🤖 Robot Mode
*28-foot bipedal warrior with Ion Blaster and Matrix of Leadership*

</div>

---

## 🎓 Learning Resources

This project demonstrates:

- **Single useScroll Source Pattern** - Avoid competing scroll listeners
- **Canvas 2D High-DPI Rendering** - devicePixelRatio scaling
- **Framer Motion Integration** - useTransform, useMotionValueEvent
- **TypeScript Best Practices** - Strong typing for Motion values
- **Performance Optimization** - RAF batching, image preloading
- **Tailwind v4** - Design tokens and new @theme syntax

---

## 🐛 Known Issues & Solutions

### Issue: Frames not loading
**Solution**: Verify `fileExtension` in `transformerData.ts` matches actual files (png/jpg)

### Issue: Blurry images
**Solution**: Ensure `imageSmoothingQuality: 'high'` and proper DPR scaling

### Issue: Choppy scrolling
**Solution**: Check RAF implementation and avoid layout thrashing

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Static Export

```bash
# Build static site
npm run build

# Deploy the 'out' directory to any static host
```

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Transformers Franchise** - Hasbro & Paramount Pictures
- **Optimus Prime Design** - Original character design by Hasbro
- **Inspiration** - Apple's AirPods Pro scroll animation
- **Fonts** - Google Fonts (Orbitron, Rajdhani)

---

<div align="center">

## 👨‍💻 Developed By

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=24&duration=3000&pause=1000&color=B71C1C&center=true&vCenter=true&width=435&lines=SONU+KUMAR+RAY;Full+Stack+Developer;UI%2FUX+Enthusiast;Open+Source+Contributor" alt="Developer" />

### **SONU KUMAR RAY**

[![GitHub](https://img.shields.io/badge/GitHub-sonu93418-181717?style=for-the-badge&logo=github)](https://github.com/sonu93418)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-B71C1C?style=for-the-badge&logo=google-chrome&logoColor=white)](#)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com)

*Crafting immersive web experiences with cutting-edge technologies*

---

### 💫 Project Stats

![GitHub Stars](https://img.shields.io/github/stars/sonu93418/Transformer?style=social)
![GitHub Forks](https://img.shields.io/github/forks/sonu93418/Transformer?style=social)
![GitHub Watchers](https://img.shields.io/github/watchers/sonu93418/Transformer?style=social)

[![GitHub Issues](https://img.shields.io/github/issues/sonu93418/Transformer?style=flat-square)](https://github.com/sonu93418/Transformer/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/sonu93418/Transformer?style=flat-square)](https://github.com/sonu93418/Transformer/pulls)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/sonu93418/Transformer?style=flat-square)](https://github.com/sonu93418/Transformer/commits/main)

---

### ⭐ Show Your Support

If you found this project helpful or inspiring, please consider giving it a ⭐!

**Made with ❤️ and ⚡ by Sonu Kumar Ray**

```
  ╔═══════════════════════════════════════════════════════════╗
  ║                                                           ║
  ║   "Freedom is the right of all sentient beings"         ║
  ║                           — Optimus Prime                ║
  ║                                                           ║
  ╚═══════════════════════════════════════════════════════════╝
```

**© 2026 Sonu Kumar Ray. All Rights Reserved.**

</div>
