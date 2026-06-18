"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900/60 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Copyright */}
        <div className="text-slate-500 text-xs md:text-sm font-sans">
          © {new Date().getFullYear()} Kirti Rani. All Rights Reserved.
        </div>

        {/* Center: Tech Stacks */}
        <div className="text-slate-500 text-xs font-mono text-center md:text-right">
          Built with <span className="text-gold">Next.js</span>, <span className="text-gold">Tailwind CSS</span>, & <span className="text-gold">Framer Motion</span>.
        </div>

        {/* Right: Scroll to top */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 bg-slate-900 hover:bg-slate-900 border border-slate-800 hover:border-gold rounded-full text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4.5 h-4.5" />
        </motion.button>
      </div>
    </footer>
  );
}
