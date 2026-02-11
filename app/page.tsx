"use client";

import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import TransformerScrollCanvas from "@/components/TransformerScrollCanvas";
import TransformerExperience from "@/components/TransformerExperience";
import PostSequenceContent from "@/components/PostSequenceContent";
import { SEQUENCE_CONFIG } from "@/data/transformerData";

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Hero text parallax
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 0.5, 0]);

  return (
    <main className="bg-[#0b0b0b]">
      <Navbar scrollYProgress={scrollYProgress} />

      {/* -------- Scroll-locked sequence (500vh) -------- */}
      <section
        ref={containerRef}
        className="relative"
        style={{ height: SEQUENCE_CONFIG.scrollLength }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Canvas layer — Full screen, z-0 */}
          <div className="absolute inset-0 w-full h-full">
            <TransformerScrollCanvas
              scrollYProgress={scrollYProgress}
              totalFrames={SEQUENCE_CONFIG.totalFrames}
              imageFolderPath={SEQUENCE_CONFIG.folder}
              fileExtension={SEQUENCE_CONFIG.fileExtension}
            />
          </div>

          {/* Hero Title — Parallax effect, z-5 */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-[5]"
            style={{ y: heroY, opacity: heroOpacity }}
          >
            <div className="text-center px-6">
              <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black tracking-wider text-white uppercase drop-shadow-2xl">
                <span className="inline-block bg-gradient-to-r from-white via-white to-[#B71C1C] bg-clip-text text-transparent">
                  Optimus Prime
                </span>
              </h1>
              <div className="relative">
                <p className="font-body text-sm md:text-base text-white/60 tracking-[0.3em] uppercase mt-4">
                  Scroll to Transform
                </p>
                <motion.div
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#B71C1C] to-transparent"
                  animate={{ scaleX: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </div>
          </motion.div>

          {/* HUD overlay — z-10 */}
          <TransformerExperience scrollYProgress={scrollYProgress} />
        </div>
      </section>

      {/* -------- Post-sequence content -------- */}
      <PostSequenceContent />
    </main>
  );
}
