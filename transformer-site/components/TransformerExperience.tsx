"use client";

import { useTransform, motion, type MotionValue } from "framer-motion";
import { HUD_PHASES, SEQUENCE_CONFIG } from "@/data/transformerData";

interface TransformerExperienceProps {
  scrollYProgress: MotionValue<number>;
}

/**
 * HUD overlay that shows phased text content synchronized with scroll progress.
 * pointer-events-none so it never intercepts scroll.
 */
export default function TransformerExperience({
  scrollYProgress,
}: TransformerExperienceProps) {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none select-none overflow-hidden">
      {/* Screen-reader accessible summary (visually hidden) */}
      <div className="sr-only" role="region" aria-label="Optimus Prime transformation sequence">
        <p>
          A cinematic frame-by-frame transformation of Optimus Prime from a
          heavy-duty truck into a heroic Autobot robot. Scroll to control the
          transformation timeline and witness the mechanical precision of this
          legendary leader.
        </p>
      </div>

      {HUD_PHASES.map((phase) => (
        <PhaseBlock
          key={phase.id}
          phase={phase}
          scrollYProgress={scrollYProgress}
        />
      ))}

      {/* Live frame counter */}
      <FrameCounter scrollYProgress={scrollYProgress} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Phase Block                                                         */
/* ------------------------------------------------------------------ */

function PhaseBlock({
  phase,
  scrollYProgress,
}: {
  phase: (typeof HUD_PHASES)[number];
  scrollYProgress: MotionValue<number>;
}) {
  const [start, end] = phase.range;
  const mid = (start + end) / 2;

  // Fade in from start → start+10%, full opacity in the middle, fade out end-10% → end
  const opacity = useTransform(
    scrollYProgress,
    [
      Math.max(start, 0),
      start + (end - start) * 0.1,
      mid,
      end - (end - start) * 0.1,
      Math.min(end, 1),
    ],
    [0, 1, 1, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [start, start + (end - start) * 0.15, end - (end - start) * 0.15, end],
    [30, 0, 0, -20]
  );

  // Position phases at different locations to avoid overlap
  const positionClass =
    phase.id === "hero"
      ? "items-start justify-end pb-24 pl-8 md:pl-16"
      : phase.id === "transformation"
        ? "items-end justify-start pt-24 pr-8 md:pr-16"
        : "items-center justify-center";

  return (
    <motion.div
      className={`absolute inset-0 flex flex-col ${positionClass}`}
      style={{ opacity, y }}
    >
      <div className="max-w-md space-y-3">
        {phase.lines.map((line, i) => (
          <HudLine key={i} text={line.text} style={line.style} index={i} />
        ))}
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* HUD Line                                                            */
/* ------------------------------------------------------------------ */

function HudLine({
  text,
  style = "caption",
  index,
}: {
  text: string;
  style?: "title" | "caption" | "system" | "signature";
  index: number;
}) {
  const baseDelay = index * 0.08;

  const classes: Record<string, string> = {
    title:
      "font-heading text-2xl md:text-4xl lg:text-5xl font-bold tracking-[0.15em] uppercase text-white",
    caption:
      "font-body text-sm md:text-base tracking-[0.12em] uppercase text-white/50",
    system:
      "font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase text-[#B71C1C]/80",
    signature:
      "font-heading text-lg md:text-xl tracking-[0.2em] uppercase text-white/70",
  };

  return (
    <motion.p
      className={classes[style] ?? classes.caption}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: baseDelay,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {text}
    </motion.p>
  );
}

/* ------------------------------------------------------------------ */
/* Frame Counter                                                       */
/* ------------------------------------------------------------------ */

function FrameCounter({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const frameNumber = useTransform(scrollYProgress, [0, 1], [1, SEQUENCE_CONFIG.totalFrames]);

  // We need to round the frame number for display
  const displayFrame = useTransform(frameNumber, (v) =>
    String(Math.round(v)).padStart(3, "0")
  );

  return (
    <motion.div
      className="absolute bottom-6 right-6 md:bottom-10 md:right-10 font-mono text-[10px] md:text-xs tracking-[0.25em] text-white/30"
      style={{ opacity: useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 0.6, 0.6, 0]) }}
    >
      <motion.span>{displayFrame}</motion.span>
      <span className="text-white/15"> / {SEQUENCE_CONFIG.totalFrames}</span>
    </motion.div>
  );
}
