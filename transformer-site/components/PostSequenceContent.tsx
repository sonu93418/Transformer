"use client";

import { SPECS, FEATURES } from "@/data/transformerData";
import { motion } from "framer-motion";

export default function PostSequenceContent() {
  return (
    <div className="relative z-20 bg-[#0b0b0b]">
      {/* ---- Specs Grid ---- */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-24">
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
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-24 border-t border-white/5">
        <motion.h2
          className="font-heading text-xs md:text-sm tracking-[0.3em] uppercase text-[#B71C1C] mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          How It Works
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, i) => (
            <motion.article
              key={feature.title}
              className="border border-white/5 rounded-sm p-6 hover:border-white/15 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <h3 className="font-heading text-sm tracking-[0.15em] uppercase text-white mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-white/50">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ---- Footer ---- */}
      <footer
        id="contact"
        className="border-t border-white/5 py-16 px-6 md:px-12"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-heading text-xs tracking-[0.3em] uppercase text-white/60 mb-2">
              Cinematic Transformer Sequence
            </div>
            <div className="font-body text-xs tracking-[0.1em] text-white/30">
              Built with Next.js · Framer Motion · Canvas 2D
            </div>
          </div>
          <a
            href="mailto:hello@example.com"
            className="font-heading text-[10px] md:text-xs tracking-[0.2em] uppercase px-6 py-3 border border-white/20 rounded-sm text-white/60 hover:text-white hover:border-[#B71C1C] transition-all duration-300 pointer-events-auto"
          >
            Get in Touch
          </a>
        </div>
      </footer>
    </div>
  );
}
