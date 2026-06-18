"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Quote } from "lucide-react";

export default function Introduction() {
  return (
    <section id="introduction" className="py-20 bg-slate-950/40 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full glow-spot-maroon filter blur-[120px] opacity-40 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeading title="Introduction" subtitle="Welcome Note" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl glass-panel p-8 md:p-12 border border-slate-800/80 shadow-2xl overflow-hidden"
        >
          {/* Decorative Gold Top-Right Glow Accent */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gold/10 to-transparent rounded-bl-full pointer-events-none" />
          
          <Quote className="absolute top-6 left-6 text-maroon opacity-10 w-16 h-16 pointer-events-none" />

          <div className="space-y-6 text-slate-300 font-sans text-base md:text-lg leading-relaxed relative z-10">
            <p className="font-semibold text-white text-lg md:text-xl border-l-4 border-gold pl-4 py-1">
              Hi, I&apos;m Kirti Rani, a B.Tech student specializing in Computer Science Engineering (AI & ML) at CGC Jhanjeri.
            </p>
            
            <p>
              I am passionate about technology, problem-solving, and building innovative solutions through programming and artificial intelligence.
            </p>
            
            <p>
              My interests span across Machine Learning, Artificial Intelligence, Python Development, and Web Technologies. I enjoy exploring new technologies, working on real-world projects, and continuously expanding my technical skills.
            </p>
            
            <p>
              Through my academic journey and personal projects, I strive to combine creativity with technology to create impactful and user-friendly solutions.
            </p>
            
            <p className="text-white/95 font-medium italic">
              I am a dedicated learner who believes in continuous growth, collaboration, and turning ideas into reality. My goal is to develop expertise in AI-driven technologies and contribute to meaningful innovations in the tech industry.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
