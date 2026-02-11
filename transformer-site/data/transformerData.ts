export const SEQUENCE_CONFIG = {
  totalFrames: 204,
  folder: "/images/transformer-sequence/",
  scrollLength: "500vh",
  fileExtension: "jpg",
} as const;

export interface HudPhase {
  id: string;
  /** scroll progress range [start, end] where 0 = top, 1 = bottom */
  range: [number, number];
  lines: { text: string; style?: "title" | "caption" | "system" | "signature" }[];
}

export const HUD_PHASES: HudPhase[] = [
  {
    id: "hero",
    range: [0, 0.3],
    lines: [
      { text: "TRANSFORMATION SEQUENCE", style: "title" },
      { text: "Frame-by-frame cinematic direction", style: "caption" },
      { text: "SYS: STANDBY — AWAITING INPUT", style: "system" },
    ],
  },
  {
    id: "transformation",
    range: [0.3, 0.75],
    lines: [
      { text: "SYSTEM: SHIFTING — CORE ENGAGED", style: "system" },
      { text: "RECONFIGURING STRUCTURE", style: "caption" },
      { text: "PANELS UNLOCKED • AXES ROTATING", style: "system" },
    ],
  },
  {
    id: "arrival",
    range: [0.75, 1],
    lines: [
      { text: "TRANSFORMATION COMPLETE", style: "title" },
      { text: "Cinematic Transformer Sequence", style: "signature" },
      { text: "SCROLL EXPERIENCE BY [YOUR NAME]", style: "caption" },
    ],
  },
];

export const SPECS = [
  { label: "Frames", value: "204" },
  { label: "Duration", value: "~8 sec" },
  { label: "Resolution", value: "16 : 9" },
  { label: "FPS", value: "24–30" },
  { label: "Format", value: "JPG / WebP" },
  { label: "Engine", value: "Canvas 2D" },
];

export const FEATURES = [
  {
    title: "Scroll-Driven Animation",
    description:
      "Every pixel of scroll maps directly to a frame, giving the user full control over the transformation timeline.",
  },
  {
    title: "Mechanical Fidelity",
    description:
      "Panels split, rotate, slide, and fold with visible hinges, pistons, and interlocking metal components.",
  },
  {
    title: "Cinematic Environment",
    description:
      "The background evolves from a dark industrial garage to a vast outdoor battlefield in perfect sync with the morph.",
  },
  {
    title: "High-DPI Rendering",
    description:
      "Canvas is scaled by devicePixelRatio so every frame stays razor-sharp on Retina and 4K displays.",
  },
  {
    title: "Performance Optimized",
    description:
      "Frames are preloaded progressively. Lightweight HUD overlays won't block paint or scroll.",
  },
  {
    title: "Accessibility First",
    description:
      "Screen-reader summaries, reduced-motion fallback, and keyboard-navigable CTAs are included out of the box.",
  },
];
