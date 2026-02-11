"use client";

import { SPECS, FEATURES, ROBOT_SPECS } from "@/data/transformerData";
import { motion } from "framer-motion";

export default function PostSequenceContent() {
  return (
    <div className="relative z-20 bg-[#0b0b0b] overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(183,28,28,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(183,28,28,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
      </div>

      {/* Floating Glow Orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-[#B71C1C] opacity-10 rounded-full blur-[120px] pointer-events-none"
        animate={{
          y: [0, -50, 0],
          x: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#B71C1C] opacity-10 rounded-full blur-[120px] pointer-events-none"
        animate={{
          y: [0, 50, 0],
          x: [0, -30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* ---- Specs Grid ---- */}
      <section id="specs" className="max-w-6xl mx-auto px-6 md:px-12 py-24 scroll-mt-20">
        <motion.h2
          className="font-heading text-xs md:text-sm tracking-[0.3em] uppercase text-[#B71C1C] mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Technical Specs
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {SPECS.map((spec, i) => (
            <motion.div
              key={spec.label}
              className="border border-white/10 rounded-sm p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <div className="font-heading text-xl md:text-2xl font-bold text-white mb-1">
                {spec.value}
              </div>
              <div className="font-body text-xs tracking-[0.15em] uppercase text-white/40">
                {spec.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---- Features / Case Study ---- */}
      <section id="features" className="max-w-6xl mx-auto px-6 md:px-12 py-24 border-t border-white/5 scroll-mt-20">
        <motion.h2
          className="font-heading text-xs md:text-sm tracking-[0.3em] uppercase text-[#B71C1C] mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Transformation Details
        </motion.h2>
        <motion.p
          className="font-body text-base md:text-lg text-white/60 mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Witness the legendary conversion sequence of Optimus Prime, leader of the Autobots. 
          Every panel, hinge, and mechanical component has been captured frame-by-frame to showcase 
          the intricate engineering that transforms a heavy-duty combat truck into the most powerful 
          warrior in the galaxy.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, i) => (
            <motion.article
              key={feature.title}
              className="group relative border border-white/5 rounded-sm p-6 hover:border-[#B71C1C]/50 hover:bg-white/[0.02] transition-all duration-500 hover:shadow-[0_0_30px_rgba(183,28,28,0.15)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-[#B71C1C] to-transparent group-hover:h-full transition-all duration-500" />
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#B71C1C] opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-500 rounded-full" />
              <h3 className="font-heading text-sm tracking-[0.15em] uppercase text-white mb-3 group-hover:text-[#B71C1C] transition-colors duration-300 relative z-10">
                {feature.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-white/50 group-hover:text-white/70 transition-colors duration-300 relative z-10">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ---- Transformation Timeline ---- */}
      <section id="timeline" className="max-w-6xl mx-auto px-6 md:px-12 py-24 border-t border-white/5 scroll-mt-20">
        <motion.h2
          className="font-heading text-xs md:text-sm tracking-[0.3em] uppercase text-[#B71C1C] mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          The 192-Frame Journey
        </motion.h2>

        <div className="space-y-8">
          <motion.div
            className="flex gap-6 pb-8 border-b border-white/5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center border-2 border-[#B71C1C] rounded-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#B71C1C]/20 to-transparent" />
              <span className="font-heading text-2xl text-[#B71C1C] relative z-10">01</span>
            </div>
            <div>
              <h3 className="font-heading text-base tracking-[0.15em] uppercase text-white mb-2">
                Vehicle Mode — Frames 1-60
              </h3>
              <p className="font-body text-sm text-white/50 leading-relaxed">
                Optimus Prime in his iconic Peterbilt 379 semi-truck form. Battle-hardened armor plating, 
                weapon turrets mounted on the cab, and the distinctive Autobot insignia clearly visible. 
                The pre-transformation stance shows a warrior ready to engage.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex gap-6 pb-8 border-b border-white/5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center border-2 border-[#B71C1C] rounded-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#B71C1C]/20 to-transparent" />
              <span className="font-heading text-2xl text-[#B71C1C] relative z-10">02</span>
            </div>
            <div>
              <h3 className="font-heading text-base tracking-[0.15em] uppercase text-white mb-2">
                Transformation Sequence — Frames 61-144
              </h3>
              <p className="font-body text-sm text-white/50 leading-relaxed">
                The mechanical ballet begins. Watch as the chassis splits, wheels fold into legs, 
                the truck cab unfolds to reveal the torso, and arms extend from concealed panels. 
                Every gear, piston, and connector moves with precision engineering that defines 
                Cybertronian technology.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center border-2 border-[#B71C1C] rounded-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#B71C1C]/20 to-transparent" />
              <span className="font-heading text-2xl text-[#B71C1C] relative z-10">03</span>
            </div>
            <div>
              <h3 className="font-heading text-base tracking-[0.15em] uppercase text-white mb-2">
                Robot Mode — Frames 145-192
              </h3>
              <p className="font-body text-sm text-white/50 leading-relaxed">
                The legendary Autobot leader stands tall. The transformation complete, Optimus Prime 
                in his full bipedal glory — ion blaster ready, energon sword at the hip, and the 
                Matrix of Leadership glowing within his chest. A protector, a warrior, a leader. 
                Freedom is the right of all sentient beings.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---- Detailed Robot Specifications ---- */}
      <section id="dossier" className="max-w-6xl mx-auto px-6 md:px-12 py-24 border-t border-white/5 bg-gradient-to-b from-transparent via-[#0b0b0b] to-transparent scroll-mt-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-xs md:text-sm tracking-[0.3em] uppercase text-[#B71C1C] mb-4">
            Technical Dossier
          </h2>
          <p className="font-heading text-2xl md:text-4xl font-bold text-white tracking-wide">
            OPTIMUS PRIME
          </p>
          <div className="font-body text-sm text-white/40 mt-2 tracking-[0.2em] uppercase">
            Autobot Supreme Commander • Matrix Bearer
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {ROBOT_SPECS.map((section, idx) => (
            <motion.div
              key={section.category}
              className="relative border border-white/10 rounded-lg p-6 bg-gradient-to-br from-white/[0.02] to-transparent hover:border-[#B71C1C]/30 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#B71C1C] opacity-5 blur-3xl rounded-full" />
              <h3 className="font-heading text-sm tracking-[0.2em] uppercase text-[#B71C1C] mb-6 relative z-10">
                {section.category}
              </h3>
              <div className="space-y-4 relative z-10">
                {section.specs.map((spec, i) => (
                  <div key={i} className="flex justify-between items-start gap-4 pb-3 border-b border-white/5 last:border-0">
                    <span className="font-body text-xs text-white/40 uppercase tracking-wider">
                      {spec.label}
                    </span>
                    <span className="font-heading text-xs text-white font-semibold text-right">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---- Footer ---- */}
      {/* ---- Developer Credit ---- */}
      <section className="border-t border-white/5 py-16 px-6 md:px-12 bg-gradient-to-b from-transparent to-[#0b0b0b]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#B71C1C] blur-xl opacity-20" />
              <div className="relative border-2 border-[#B71C1C] rounded-lg p-8 bg-[#0b0b0b]">
                <div className="font-heading text-xs tracking-[0.3em] uppercase text-[#B71C1C] mb-2">
                  Engineered By
                </div>
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3 tracking-[0.1em]">
                  SONU KUMAR RAY
                </h3>
                <div className="font-body text-sm text-white/50 mb-4">
                  Full-Stack Developer • Creative Engineer • Digital Craftsman
                </div>
                <div className="flex items-center justify-center gap-4 text-xs text-white/30">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-[#B71C1C] rounded-full animate-pulse" />
                    Next.js 14
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-[#B71C1C] rounded-full animate-pulse" />
                    Framer Motion
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-[#B71C1C] rounded-full animate-pulse" />
                    Canvas 2D
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.p
            className="font-body text-sm text-white/40 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Crafted with attention to detail, cinematic precision, and a passion for
            immersive web experiences. Every frame tells a story of mechanical
            transformation and heroic purpose.
          </motion.p>
        </div>
      </section>

      <footer
        id="contact"
        className="border-t border-white/5 py-12 px-6 md:px-12"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-heading text-xs tracking-[0.3em] uppercase text-white/60 mb-2">
              Optimus Prime Transformation Sequence
            </div>
            <div className="font-body text-xs tracking-[0.1em] text-white/30">
              © 2026 Sonu Kumar Ray  •  Autobots Roll Out
            </div>
          </div>
          <a
            href="https://github.com/sonu93418/Transformer"
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading text-[10px] md:text-xs tracking-[0.2em] uppercase px-6 py-3 border border-white/20 rounded-sm text-white/60 hover:text-white hover:border-[#B71C1C] hover:bg-[#B71C1C]/10 transition-all duration-300 pointer-events-auto"
          >
            View on GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
