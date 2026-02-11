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
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-5 md:py-6 transition-all duration-500 ${
        scrolled
          ? "bg-[#0b0b0b]/90 backdrop-blur-xl border-b border-[#B71C1C]/20 shadow-[0_4px_30px_rgba(183,28,28,0.1)]"
          : "bg-transparent"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Left: Logo / Brand */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 border-2 border-[#B71C1C] rounded-sm flex items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-[#B71C1C] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          <span className="font-heading text-lg font-bold text-[#B71C1C] relative z-10">OP</span>
        </div>
        <div>
          <div className="font-heading text-sm md:text-base tracking-[0.25em] uppercase text-white font-bold">
            Optimus Prime
          </div>
          <div className="font-body text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-white/40">
            Autobot Commander
          </div>
        </div>
      </div>

      {/* Center: Navigation Links */}
      <div className="hidden md:flex items-center gap-8">
        <a
          href="#specs"
          className="font-heading text-xs tracking-[0.2em] uppercase text-white/60 hover:text-[#B71C1C] transition-colors duration-300 relative group"
        >
          Specs
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#B71C1C] group-hover:w-full transition-all duration-300" />
        </a>
        <a
          href="#features"
          className="font-heading text-xs tracking-[0.2em] uppercase text-white/60 hover:text-[#B71C1C] transition-colors duration-300 relative group"
        >
          Features
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#B71C1C] group-hover:w-full transition-all duration-300" />
        </a>
        <a
          href="#timeline"
          className="font-heading text-xs tracking-[0.2em] uppercase text-white/60 hover:text-[#B71C1C] transition-colors duration-300 relative group"
        >
          Timeline
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#B71C1C] group-hover:w-full transition-all duration-300" />
        </a>
        <a
          href="#dossier"
          className="font-heading text-xs tracking-[0.2em] uppercase text-white/60 hover:text-[#B71C1C] transition-colors duration-300 relative group"
        >
          Dossier
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#B71C1C] group-hover:w-full transition-all duration-300" />
        </a>
      </div>

      {/* Right: CTA Button */}
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/sonu93418/Transformer"
          target="_blank"
          rel="noopener noreferrer"
          className="font-heading text-xs md:text-sm tracking-[0.2em] uppercase px-5 md:px-6 py-2.5 md:py-3 border-2 border-[#B71C1C]/50 rounded-sm text-white/90 hover:text-white hover:bg-[#B71C1C]/10 hover:border-[#B71C1C] transition-all duration-300 hover:shadow-[0_0_20px_rgba(183,28,28,0.3)] relative overflow-hidden group"
        >
          <span className="relative z-10">View Project</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#B71C1C]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </a>
      </div>
    </motion.nav>
  );
}

