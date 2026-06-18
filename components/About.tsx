"use client";

import { useState, useEffect } from "react";
import { motion as m } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { User, GraduationCap, MapPin, Target, Cpu, CheckCircle } from "lucide-react";

export default function About() {
  const [hasImage, setHasImage] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/profile.jpg";
    img.onload = () => setHasImage(true);
    img.onerror = () => setHasImage(false);
  }, []);

  const profileDetails = [
    { icon: <User className="w-5 h-5 text-gold" />, label: "Name", value: "Kirti Rani" },
    { icon: <GraduationCap className="w-5 h-5 text-gold" />, label: "Degree", value: "B.Tech CSE (AI & ML)" },
    { icon: <GraduationCap className="w-5 h-5 text-gold" />, label: "College", value: "CGC Jhanjeri" },
    { icon: <MapPin className="w-5 h-5 text-gold" />, label: "Location", value: "India" },
  ];

  const focusAreas = [
    "Artificial Intelligence",
    "Machine Learning",
    "Python Development",
    "Web Development",
    "Problem Solving"
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[40%] right-[5%] w-[350px] h-[350px] rounded-full glow-spot-maroon filter blur-[90px] opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeading title="About Me" subtitle="My Profile" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Placeholder */}
          <m.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[360px] aspect-square rounded-2xl overflow-hidden glass-panel p-3 border border-slate-800 shadow-2xl">
              {/* Outer decorative gold corners */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gold rounded-tl-xl" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-gold rounded-tr-xl" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-gold rounded-bl-xl" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gold rounded-br-xl" />

              <div className="w-full h-full rounded-xl overflow-hidden bg-slate-950 flex flex-col items-center justify-center relative group">
                {hasImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src="/profile.jpg"
                    alt="Kirti Rani Profile"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="text-center p-6 space-y-4">
                    <div className="relative inline-flex items-center justify-center p-4 bg-maroon/20 rounded-full border border-maroon/40">
                      <Cpu className="w-12 h-12 text-gold animate-pulse" />
                    </div>
                    <div>
                      <p className="text-slate-200 font-mono text-sm font-semibold">Kirti Rani</p>
                      <p className="text-slate-500 font-mono text-xs mt-1">Student / AI-ML Specialist</p>
                    </div>
                    <div className="text-xxs font-mono text-maroon/80 border border-maroon/30 px-3 py-1 rounded bg-maroon/5 inline-block">
                      IMAGE_PLACEHOLDER
                    </div>
                  </div>
                )}
                
                {/* Overlay hover effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          </m.div>

          {/* Right Column: Bio Details */}
          <m.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Target className="w-6 h-6 text-maroon-light" />
                Innovating at the Intersection of AI and Software Development
              </h3>
              <p className="text-slate-300 leading-relaxed">
                I am a technology enthusiast who enjoys building innovative digital solutions and continuously learning emerging technologies. My goal is to create impactful products that combine creativity, functionality, and intelligent systems.
              </p>
            </div>

            {/* Profile Fields Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profileDetails.map((detail, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3.5 p-4 rounded-xl bg-slate-900/40 border border-slate-800/60"
                >
                  <div className="p-2 bg-maroon/20 rounded-lg border border-maroon/30">
                    {detail.icon}
                  </div>
                  <div>
                    <p className="text-slate-500 font-mono text-xxs tracking-wider uppercase">{detail.label}</p>
                    <p className="text-white font-medium text-sm mt-0.5">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Focus Areas List */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold tracking-wider uppercase text-gold font-mono">Focus Areas</h4>
              <div className="flex flex-wrap gap-2.5">
                {focusAreas.map((area, index) => (
                  <m.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-maroon/10 border border-maroon/30 hover:border-gold/30 hover:bg-maroon/20 transition-all duration-300"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span className="text-slate-200 text-xs font-medium">{area}</span>
                  </m.div>
                ))}
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
