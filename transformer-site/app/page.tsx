"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
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
          {/* Canvas layer — z-0 */}
          <TransformerScrollCanvas
            scrollYProgress={scrollYProgress}
            totalFrames={SEQUENCE_CONFIG.totalFrames}
            imageFolderPath={SEQUENCE_CONFIG.folder}
            fileExtension={SEQUENCE_CONFIG.fileExtension}
          />

          {/* HUD overlay — z-10 */}
          <TransformerExperience scrollYProgress={scrollYProgress} />
        </div>
      </section>

      {/* -------- Post-sequence content -------- */}
      <PostSequenceContent />
    </main>
  );
}
