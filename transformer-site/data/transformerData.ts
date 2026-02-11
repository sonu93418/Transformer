export const SEQUENCE_CONFIG = {
  totalFrames: 192, // Actual frame count from extracted WebP
  folder: "/images/transformer-sequence/",
  scrollLength: "500vh",
  fileExtension: "png",
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
      { text: "OPTIMUS PRIME", style: "title" },
      { text: "Autobots roll out", style: "caption" },
      { text: "SYSTEMS: ONLINE — STANDBY MODE", style: "system" },
    ],
  },
  {
    id: "transformation",
    range: [0.3, 0.75],
    lines: [
      { text: "TRANSFORMATION INITIATED", style: "system" },
      { text: "MECHANICAL RECONFIGURATION IN PROGRESS", style: "caption" },
      { text: "ENERGON CORE: ACTIVE • ALLSPARK ENGAGED", style: "system" },
    ],
  },
  {
    id: "arrival",
    range: [0.75, 1],
    lines: [
      { text: "TRANSFORMATION COMPLETE", style: "title" },
      { text: "Freedom is the right of all sentient beings", style: "signature" },
      { text: "OPTIMUS PRIME — AUTOBOT LEADER", style: "caption" },
    ],
  },
];

export const SPECS = [
  { label: "Frames", value: "192" },
  { label: "Faction", value: "AUTOBOT" },
  { label: "Resolution", value: "16 : 9" },
  { label: "Alt Mode", value: "TRUCK" },
  { label: "Robot", value: "PRIME" },
  { label: "Engine", value: "Canvas" },
];

export const FEATURES = [
  {
    title: "Scroll-Driven Transformation",
    description:
      "Control Optimus Prime's transformation timeline with scroll. Every pixel maps to a frame, giving you complete control over the conversion from vehicle to robot mode.",
  },
  {
    title: "Mechanical Precision",
    description:
      "Watch as panels split, rotate, slide, and fold with visible hinges and interlocking components — true to the authentic Transformer design philosophy.",
  },
  {
    title: "Battle-Ready Environment",
    description:
      "The background transitions from a peaceful garage to an intense battlefield, synced perfectly with the transformation sequence.",
  },
  {
    title: "High-DPI Rendering",
    description:
      "Every detail of Optimus Prime is rendered crystal-clear on Retina and 4K displays using devicePixelRatio canvas scaling.",
  },
  {
    title: "Performance Optimized",
    description:
      "Progressive frame preloading ensures smooth 60fps scrubbing. Lightweight HUD overlays that never block the transformation action.",
  },
  {
    title: "Autobot Accessibility",
    description:
      "Screen-reader summaries, reduced-motion fallback, and keyboard navigation — making the experience accessible to all.",
  },
];
