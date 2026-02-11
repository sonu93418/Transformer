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
              className="group relative border border-white/5 rounded-sm p-6 hover:border-[#B71C1C]/50 hover:bg-white/[0.02] transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-[#B71C1C] to-transparent group-hover:h-full transition-all duration-500" />
              <h3 className="font-heading text-sm tracking-[0.15em] uppercase text-white mb-3 group-hover:text-[#B71C1C] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-white/50 group-hover:text-white/70 transition-colors duration-300">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ---- Transformation Timeline ---- */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-24 border-t border-white/5">
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
            <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center border-2 border-[#B71C1C] rounded-sm">
              <span className="font-heading text-2xl text-[#B71C1C]">01</span>
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
            <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center border-2 border-[#B71C1C] rounded-sm">
              <span className="font-heading text-2xl text-[#B71C1C]">02</span>
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
            <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center border-2 border-[#B71C1C] rounded-sm">
              <span className="font-heading text-2xl text-[#B71C1C]">03</span>
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

      {/* ---- Footer ---- */}
      <footer
        id="contact"
        className="border-t border-white/5 py-16 px-6 md:px-12"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-heading text-xs tracking-[0.3em] uppercase text-white/60 mb-2">
              Optimus Prime Transformation Sequence
            </div>
            <div className="font-body text-xs tracking-[0.1em] text-white/30">
              Built with Next.js · Framer Motion · Canvas 2D — Autobots Roll Out
            </div>
          </div>
          <a
            href="mailto:autobots@example.com"
            className="font-heading text-[10px] md:text-xs tracking-[0.2em] uppercase px-6 py-3 border border-white/20 rounded-sm text-white/60 hover:text-white hover:border-[#B71C1C] transition-all duration-300 pointer-events-auto"
          >
            Contact Autobots
          </a>
        </div>
      </footer>
    </div>
  );
}
