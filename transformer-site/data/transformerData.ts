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
      { text: "AUTOBOT COMMANDER", style: "caption" },
      { text: "SYSTEMS ONLINE • AWAITING DEPLOYMENT", style: "system" },
    ],
  },
  {
    id: "transformation",
    range: [0.3, 0.75],
    lines: [
      { text: "TRANSFORMATION SEQUENCE ACTIVE", style: "system" },
      { text: "CONVERTING: VEHICLE → BIPEDAL MODE", style: "caption" },
      { text: "ENERGON LEVELS: 100% • MATRIX STABLE", style: "system" },
    ],
  },
  {
    id: "arrival",
    range: [0.75, 1],
    lines: [
      { text: "TRANSFORMATION COMPLETE", style: "title" },
      { text: "Freedom is the right of all sentient beings", style: "signature" },
      { text: "PRIME STATUS: OPERATIONAL", style: "caption" },
    ],
  },
];

export const SPECS = [
  { label: "Designation", value: "PRIME" },
  { label: "Faction", value: "AUTOBOT" },
  { label: "Alt Mode", value: "PETERBILT" },
  { label: "Height", value: "28 FT" },
  { label: "Frames", value: "192" },
  { label: "Status", value: "ACTIVE" },
];

export const ROBOT_SPECS = [
  { category: "Physical Attributes", specs: [
    { label: "Height (Robot Mode)", value: "28 feet / 8.5 meters" },
    { label: "Weight", value: "4.3 metric tons" },
    { label: "Armor", value: "Cybertronian alloy composite" },
    { label: "Optics", value: "Blue (Autobot designation)" },
  ]},
  { category: "Combat Systems", specs: [
    { label: "Primary Weapon", value: "Ion Blaster" },
    { label: "Secondary Weapon", value: "Energon Blade" },
    { label: "Defensive System", value: "Energy Shield Matrix" },
    { label: "Combat Rating", value: "10/10 Elite Class" },
  ]},
  { category: "Technical Specifications", specs: [
    { label: "Power Source", value: "Energon Core" },
    { label: "Special Ability", value: "Matrix of Leadership" },
    { label: "Transformation Time", value: "4.2 seconds" },
    { label: "Max Speed (Vehicle)", value: "120 mph" },
  ]},
  { category: "Leadership Protocols", specs: [
    { label: "Rank", value: "Supreme Commander" },
    { label: "Unit", value: "Autobot Alliance" },
    { label: "Mission Directive", value: "Protect all sentient life" },
    { label: "Core Programming", value: "Freedom • Justice • Honor" },
  ]},
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
