"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { GraduationCap, Briefcase, Trophy, Calendar, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const educationItems = [
    {
      title: "B.Tech Computer Science Engineering (AI & ML)",
      institution: "CGC Jhanjeri",
      duration: "2023 - Present",
      description: "Focusing on core computer science fundamentals alongside specialized courses in Artificial Intelligence, Machine Learning, Python programming, and advanced data structures."
    }
  ];

  const experienceItems = [
    {
      title: "Student Developer",
      role: "Independent & Academic Projects",
      duration: "Ongoing",
      description: "Working on academic and personal software development projects. Designed and built machine learning models, custom python scripts, and responsive React/Next.js frontend applications."
    }
  ];

  const achievements = [
    {
      title: "Consistent Technical Skill Development",
      description: "Acquired proficiency in Python, ML libraries, data science frameworks, and modern frontend tools like React/Next.js and Tailwind CSS."
    },
    {
      title: "Multiple Academic Projects Completed",
      description: "Successfully built and deployed end-to-end applications demonstrating AI modeling, workflow automation, and client-side interfaces."
    },
    {
      title: "Strong Programming & AI Foundations",
      description: "Built deep conceptual understandings of object-oriented design, predictive algorithms, model fitting, and software structures."
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] rounded-full glow-spot-maroon filter blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-[350px] h-[350px] rounded-full glow-spot-gold filter blur-[100px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeading title="Experience & Education" subtitle="My Academic & Professional Journey" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
          {/* Left Side: Timeline (Education & Experience) */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Education timeline group */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                <div className="p-2 bg-maroon/20 border border-maroon/40 rounded-lg">
                  <GraduationCap className="w-5 h-5 text-gold" />
                </div>
                Education
              </h3>
              
              <div className="relative border-l-2 border-slate-800 pl-6 ml-4 space-y-8">
                {educationItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative group"
                  >
                    {/* Bullet indicator */}
                    <div className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full bg-slate-950 border-2 border-gold group-hover:border-maroon transition-colors" />
                    
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="text-lg font-bold text-white group-hover:text-gold transition-colors">
                          {item.title}
                        </h4>
                        <span className="inline-flex items-center text-xs font-mono text-gold-light bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">
                          <Calendar className="w-3 h-3 mr-1" /> {item.duration}
                        </span>
                      </div>
                      <p className="text-sm font-mono text-slate-500 font-semibold">{item.institution}</p>
                      <p className="text-sm text-slate-400 leading-relaxed pt-1">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Experience timeline group */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                <div className="p-2 bg-maroon/20 border border-maroon/40 rounded-lg">
                  <Briefcase className="w-5 h-5 text-gold" />
                </div>
                Experience
              </h3>

              <div className="relative border-l-2 border-slate-800 pl-6 ml-4 space-y-8">
                {experienceItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative group"
                  >
                    {/* Bullet indicator */}
                    <div className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full bg-slate-950 border-2 border-gold group-hover:border-maroon transition-colors" />

                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="text-lg font-bold text-white group-hover:text-gold transition-colors">
                          {item.title}
                        </h4>
                        <span className="inline-flex items-center text-xs font-mono text-gold-light bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">
                          <Calendar className="w-3 h-3 mr-1" /> {item.duration}
                        </span>
                      </div>
                      <p className="text-sm font-mono text-slate-500 font-semibold">{item.role}</p>
                      <p className="text-sm text-slate-400 leading-relaxed pt-1">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Key Achievements */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-3">
              <div className="p-2 bg-maroon/20 border border-maroon/40 rounded-lg">
                <Trophy className="w-5 h-5 text-gold" />
              </div>
              Key Achievements
            </h3>

            <div className="space-y-4">
              {achievements.map((ach, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-start space-x-4 hover:border-maroon/40 transition-colors"
                >
                  <CheckCircle2 className="w-5.5 h-5.5 text-gold mt-0.5 shrink-0" />
                  <div className="space-y-1.5">
                    <h4 className="text-sm font-bold text-white tracking-wide">{ach.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{ach.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
