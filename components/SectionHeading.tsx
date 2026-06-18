"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({ title, subtitle, center = true }: SectionHeadingProps) {
  return (
    <div className={`mb-16 flex flex-col ${center ? "items-center text-center" : "items-start text-left"}`}>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-gold text-xs font-semibold uppercase tracking-widest mb-2"
      >
        {subtitle || "Discover"}
      </motion.span>
      
      <div className="relative inline-block">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white z-10 relative"
        >
          {title}
        </motion.h2>
        
        {/* Glow effect under heading */}
        <div className="absolute -inset-1 glow-spot-maroon rounded-lg filter blur-md opacity-30 -z-10" />
      </div>
      
      {/* Decorative accent lines */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="h-[3px] bg-gradient-to-r from-maroon to-gold mt-4 rounded-full"
      />
    </div>
  );
}
