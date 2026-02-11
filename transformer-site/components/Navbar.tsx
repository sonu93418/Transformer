"use client";

import { useState } from "react";
import { motion, type MotionValue, useMotionValueEvent } from "framer-motion";

interface NavbarProps {
  scrollYProgress: MotionValue<number>;
}

export default function Navbar({ scrollYProgress }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setScrolled(v > 0.01);
  });

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 transition-colors duration-500 ${
        scrolled
          ? "bg-[#0b0b0b]/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Left: logo / title */}
      <div className="font-heading text-xs md:text-sm tracking-[0.3em] uppercase text-white/80">
        Optimus
      </div>

      {/* Right: CTA */}
      <a
        href="#contact"
        className="font-heading text-[10px] md:text-xs tracking-[0.2em] uppercase px-4 py-2 border border-white/20 rounded-sm text-white/70 hover:text-white hover:border-[#B71C1C] transition-all duration-300"
      >
        Inquire
      </a>
    </motion.nav>
  );
}
