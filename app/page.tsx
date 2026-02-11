"use client";

import { useRef, useState } from "react";
import { useScroll, motion, useTransform, useMotionValueEvent } from "framer-motion";
import Navbar from "@/components/Navbar";
import TransformerScrollCanvas from "@/components/TransformerScrollCanvas";
import TransformerExperience from "@/components/TransformerExperience";
import PostSequenceContent from "@/components/PostSequenceContent";
import { SEQUENCE_CONFIG } from "@/data/transformerData";

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Track when user starts scrolling
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0 && !hasScrolled) {
      setHasScrolled(true);
    }
  });

  // Hero text parallax
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 0.5, 0]);

  return (
    <main className="bg-[#0b0b0b] relative">
      <Navbar scrollYProgress={scrollYProgress} />

      {/* -------- Scroll-locked sequence (500vh) -------- */}
      <section
        ref={containerRef}
        className="relative"
        style={{ 
          height: SEQUENCE_CONFIG.scrollLength,
          touchAction: 'pan-y',
        }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden will-change-transform">
          {/* Canvas layer — Full screen, z-0 */}
          <div className="absolute inset-0 w-full h-full gpu-accelerated">
            <TransformerScrollCanvas
              scrollYProgress={scrollYProgress}
              totalFrames={SEQUENCE_CONFIG.totalFrames}
              imageFolderPath={SEQUENCE_CONFIG.folder}
              fileExtension={SEQUENCE_CONFIG.fileExtension}
            />
          </div>

          {/* Hero Title — Parallax effect, z-5 */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-[5] px-4 sm:px-6 md:px-8"
            style={{ y: heroY, opacity: heroOpacity }}
          >
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-wider text-white uppercase drop-shadow-2xl leading-tight">
                <span className={`inline-block bg-gradient-to-r from-white via-white to-[#B71C1C] bg-clip-text text-transparent ${hasScrolled ? 'animate-gradient' : ''}`}>
                  Optimus Prime
                </span>
              </h1>
              <div className="relative mt-4 md:mt-6">
                <p className="font-body text-xs sm:text-sm md:text-base lg:text-lg text-white/60 tracking-[0.3em] md:tracking-[0.4em] uppercase">
                  Scroll to Transform
                </p>
                <motion.div
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 sm:w-24 md:w-32 h-px bg-gradient-to-r from-transparent via-[#B71C1C] to-transparent"
                  animate={hasScrolled ? { 
                    scaleX: [1, 1.5, 1], 
                    opacity: [0.5, 1, 0.5] 
                  } : {}}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    repeatType: "reverse"
                  }}
                />
                {/* Scroll hint icon for mobile */}
                <motion.div
                  className="md:hidden mt-8 flex flex-col items-center gap-2"
                  animate={hasScrolled ? { y: [0, 10, 0] } : {}}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg
                    className="w-6 h-6 text-white/40"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* HUD overlay — z-10 */}
          <TransformerExperience 
            scrollYProgress={scrollYProgress} 
            hasScrolled={hasScrolled}
          />
        </div>
      </section>

      {/* -------- Post-sequence content -------- */}
      <PostSequenceContent />
    </main>
  );
}
