"use client";

import { motion } from "framer-motion";
import { ArrowRight, Brain, Sparkles, Terminal } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [hasImage, setHasImage] = useState(false);

  // Check if profile.jpg is loaded (in a production app, we would verify this,
  // but we fallback gracefully to a high-fidelity AI-themed mesh representation)
  useEffect(() => {
    const img = new Image();
    img.src = "/profile.jpg";
    img.onload = () => setHasImage(true);
    img.onerror = () => setHasImage(false);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-950"
    >
      {/* Background Glowing Ambient Orbs */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full glow-spot-maroon filter blur-[80px] animate-pulse-glow" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full glow-spot-gold filter blur-[100px] animate-pulse-glow" style={{ animationDelay: "-6s" }} />

      {/* Floating Animated Geometric Orbs/Dots */}
      <div className="absolute top-1/4 right-[45%] w-3 h-3 bg-gold rounded-full opacity-30 animate-float-slow" />
      <div className="absolute bottom-1/3 left-[40%] w-4 h-4 bg-maroon rounded-full opacity-40 animate-float-medium" />
      <div className="absolute top-[60%] right-[15%] w-6 h-6 border border-gold/20 rounded-lg animate-float-fast" />
      <div className="absolute top-1/3 left-[15%] w-5 h-5 border border-maroon/30 rounded-full animate-float-slow" />

      {/* Tech grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #7C2D12 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left: Text Content */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 py-1 bg-maroon/20 border border-maroon/40 rounded-full text-gold text-xs font-mono w-max"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Welcome to my Digital Space</span>
          </motion.div>

          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white font-sans"
            >
              Hi, I am <br />
              <span className="bg-gradient-to-r from-white via-gold to-maroon bg-clip-text text-transparent">
                Kirti Rani
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl font-semibold text-slate-300 flex items-center gap-2"
            >
              <span className="text-gold">✦</span> B.Tech CSE (AI & ML) Student
            </motion.p>
          </div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg text-slate-400 font-mono"
          >
            Passionate About Artificial Intelligence, Machine Learning & Software Development
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm md:text-base text-slate-400 leading-relaxed max-w-xl"
          >
            I build innovative solutions using AI, Machine Learning, Python, and modern web technologies while continuously exploring new ways to solve real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button
              onClick={() => handleScrollTo("projects")}
              className="px-8 py-3.5 text-sm font-semibold text-white bg-maroon hover:bg-maroon-light rounded-full border border-maroon hover:border-gold-light shadow-lg shadow-maroon/20 hover:shadow-maroon/40 transition-all duration-300 cursor-pointer flex items-center space-x-2"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4.5 h-4.5" />
            </button>

            <button
              onClick={() => handleScrollTo("contact")}
              className="px-8 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/50 hover:bg-slate-900 border border-slate-700 hover:border-gold rounded-full backdrop-blur-md transition-all duration-300 cursor-pointer"
            >
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* Right: Graphic / Profile Placeholder */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] flex items-center justify-center"
          >
            {/* Ambient gold glow outer ring */}
            <div className="absolute inset-0 rounded-full border border-gold/10 animate-float-slow" />
            
            {/* Spinning accent border */}
            <div 
              className="absolute inset-2 rounded-full border-t border-b border-r border-transparent border-t-maroon border-b-gold border-r-gold/40"
              style={{
                animation: "spin 12s linear infinite"
              }}
            />
            
            {/* Glow backing */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-maroon/20 via-gold/5 to-slate-900 filter blur-xl opacity-60" />

            {/* Content holder */}
            <div className="absolute inset-4 rounded-full glass-panel overflow-hidden flex flex-col items-center justify-center p-6 border border-slate-700/50">
              {hasImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src="/profile.jpg"
                  alt="Kirti Rani"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                /* High-fidelity AI layout illustration */
                <div className="text-center flex flex-col items-center justify-center space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gold/10 filter blur-md animate-pulse" />
                    <Brain className="w-16 h-16 text-gold relative z-10 animate-float-fast" />
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-white font-mono text-sm font-bold tracking-wide">KIRTI RANI</p>
                    <p className="text-slate-400 font-mono text-xxs tracking-wider uppercase">B.Tech CSE (AI & ML)</p>
                  </div>
                  
                  {/* Decorative digital layout console */}
                  <div className="flex items-center space-x-1.5 px-3 py-1 bg-slate-950/80 border border-slate-800 rounded-md font-mono text-xxs text-maroon-light">
                    <Terminal className="w-3.5 h-3.5 text-gold" />
                    <span>sys.init_model()</span>
                  </div>
                </div>
              )}
            </div>

            {/* Floating indicator bubbles */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -right-2 glass-panel px-3 py-1.5 rounded-xl border border-slate-800 shadow-md flex items-center space-x-1"
            >
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-xxs font-mono text-white/90">PyTorch</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 glass-panel px-3 py-1.5 rounded-xl border border-slate-800 shadow-md flex items-center space-x-1"
            >
              <div className="w-2 h-2 rounded-full bg-maroon animate-pulse" />
              <span className="text-xxs font-mono text-white/90">React/Next</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
