"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Code, Brain, Globe, Shield, Heart } from "lucide-react";

interface SkillItem {
  name: string;
  level: number; // Percentage (e.g. 85)
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

export default function Skills() {
  const skillsData: SkillCategory[] = [
    {
      title: "Programming",
      icon: <Code className="w-5 h-5 text-gold" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 80 },
        { name: "C++", level: 75 },
        { name: "JavaScript", level: 85 }
      ]
    },
    {
      title: "AI & ML",
      icon: <Brain className="w-5 h-5 text-gold" />,
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "Artificial Intelligence", level: 80 },
        { name: "Data Analysis", level: 85 },
        { name: "Model Building", level: 80 }
      ]
    },
    {
      title: "Web Development",
      icon: <Globe className="w-5 h-5 text-gold" />,
      skills: [
        { name: "React", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML / CSS", level: 95 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Shield className="w-5 h-5 text-gold" />,
      skills: [
        { name: "Git & GitHub", level: 88 },
        { name: "VS Code", level: 90 },
        { name: "Figma", level: 70 },
        { name: "Jupyter Notebook", level: 85 }
      ]
    },
    {
      title: "Soft Skills",
      icon: <Heart className="w-5 h-5 text-gold" />,
      skills: [
        { name: "Problem Solving", level: 90 },
        { name: "Team Collaboration", level: 95 },
        { name: "Communication", level: 88 },
        { name: "Leadership", level: 85 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 bg-slate-950/40 relative overflow-hidden">
      {/* Glow spots */}
      <div className="absolute top-[20%] left-[5%] w-[350px] h-[350px] rounded-full glow-spot-gold filter blur-[100px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[350px] h-[350px] rounded-full glow-spot-maroon filter blur-[100px] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeading title="Skills & Expertise" subtitle="My Toolkit" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-panel glass-panel-hover rounded-2xl p-6 md:p-8 flex flex-col justify-between border border-slate-800"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3.5 mb-6 pb-4 border-b border-slate-800/80">
                <div className="p-2.5 bg-maroon/20 rounded-xl border border-maroon/30 shadow-inner">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide">{category.title}</h3>
              </div>

              {/* Skills Progress list */}
              <div className="space-y-5">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-300 font-medium font-sans">{skill.name}</span>
                      <span className="text-gold font-mono font-semibold">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Track */}
                    <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800/40">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-maroon to-gold rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
