"use client";

import { useTransform, motion, type MotionValue } from "framer-motion";
import { HUD_PHASES, SEQUENCE_CONFIG } from "@/data/transformerData";

interface TransformerExperienceProps {
  scrollYProgress: MotionValue<number>;
  hasScrolled: boolean;
}

/**
 * HUD overlay that shows phased text content synchronized with scroll progress.
 * pointer-events-none so it never intercepts scroll.
 */
export default function TransformerExperience({
  scrollYProgress,
  hasScrolled,
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
          hasScrolled={hasScrolled}
        />
      ))}

      {/* Live frame counter */}
      <FrameCounter scrollYProgress={scrollYProgress} hasScrolled={hasScrolled} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Phase Block                                                         */
/* ------------------------------------------------------------------ */

function PhaseBlock({
  phase,
  scrollYProgress,
  hasScrolled,
}: {
  phase: (typeof HUD_PHASES)[number];
  scrollYProgress: MotionValue<number>;
  hasScrolled: boolean;
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
      ? "items-start justify-end pb-32 pl-10 md:pl-20 lg:pl-24"
      : phase.id === "transformation"
        ? "items-end justify-start pt-32 pr-10 md:pr-20 lg:pr-24"
        : "items-center justify-center";

  return (
    <motion.div
      className={`absolute inset-0 flex flex-col ${positionClass}`}
      style={{ opacity, y }}
    >
      <div className="max-w-2xl lg:max-w-3xl space-y-4 md:space-y-5 lg:space-y-6">
        {phase.lines.map((line, i) => (
          <HudLine key={i} text={line.text} style={line.style} index={i} hasScrolled={hasScrolled} />
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
  hasScrolled,
}: {
  text: string;
  style?: "title" | "caption" | "system" | "signature";
  index: number;
  hasScrolled: boolean;
}) {
  const baseDelay = index * 0.08;

  const classes: Record<string, string> = {
    title:
      "font-heading text-3xl md:text-5xl lg:text-7xl font-bold tracking-[0.15em] uppercase text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]",
    caption:
      "font-body text-base md:text-lg lg:text-xl tracking-[0.12em] uppercase text-white/70 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]",
    system:
      "font-mono text-xs md:text-sm lg:text-base tracking-[0.2em] uppercase text-[#B71C1C] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]",
    signature:
      "font-heading text-xl md:text-2xl lg:text-3xl tracking-[0.2em] uppercase text-white/80 drop-shadow-[0_3px_15px_rgba(0,0,0,0.9)]",
  };

  return (
    <motion.p
      className={classes[style] ?? classes.caption}
      initial={{ opacity: 0, x: -10 }}
      animate={hasScrolled ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
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
  hasScrolled,
}: {
  scrollYProgress: MotionValue<number>;
  hasScrolled: boolean;
}) {
  const frameNumber = useTransform(scrollYProgress, [0, 1], [1, SEQUENCE_CONFIG.totalFrames]);

  // We need to round the frame number for display
  const displayFrame = useTransform(frameNumber, (v) =>
    String(Math.round(v)).padStart(3, "0")
  );

  // Only show frame counter when scrolling has started
  const opacity = useTransform(
    scrollYProgress, 
    [0, 0.05, 0.95, 1], 
    hasScrolled ? [0, 0.8, 0.8, 0] : [0, 0, 0, 0]
  );

  return (
    <motion.div
      className="absolute bottom-8 right-8 md:bottom-12 md:right-12 font-mono text-sm md:text-base lg:text-lg tracking-[0.25em] text-white/50 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
      style={{ opacity }}
    >
      <motion.span className="text-white/70 font-bold">{displayFrame}</motion.span>
      <span className="text-white/30"> / {SEQUENCE_CONFIG.totalFrames}</span>
    </motion.div>
  );
}
