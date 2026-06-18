"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ExternalLink, Brain, Globe, Cpu, FolderGit } from "lucide-react";

interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  icon: React.ReactNode;
  themeGradient: string; // CSS gradient class
  graphicRepresentation: React.ReactNode;
}

export default function Projects() {
  const projectsData: ProjectItem[] = [
    {
      title: "AI/ML Project",
      description:
        "Developed an intelligent machine learning solution focused on solving practical real-world problems through predictive analysis, dataset preprocessing, and automated evaluation.",
      technologies: ["Python", "Machine Learning", "Data Science", "Scikit-Learn"],
      githubUrl: "https://github.com",
      liveUrl: "https://github.com",
      icon: <Brain className="w-5 h-5 text-gold" />,
      themeGradient: "from-maroon/40 to-slate-950",
      graphicRepresentation: (
        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-45">
          <Brain className="w-20 h-20 text-gold animate-pulse-glow" />
          <span className="font-mono text-xxs text-slate-500 mt-2">PREDICTIVE_MODEL.fit()</span>
        </div>
      )
    },
    {
      title: "Web Development Project",
      description:
        "Designed and developed a responsive modern web application with an emphasis on lightning-fast rendering, fluid animations, premium user experience, and responsive design systems.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://github.com",
      icon: <Globe className="w-5 h-5 text-gold" />,
      themeGradient: "from-gold/20 to-slate-950",
      graphicRepresentation: (
        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-45">
          <Globe className="w-20 h-20 text-white animate-float-medium" />
          <span className="font-mono text-xxs text-slate-500 mt-2">npm run dev --port 3000</span>
        </div>
      )
    },
    {
      title: "Python Automation Project",
      description:
        "Built a modular Python-based automation pipeline that optimizes workflows, conducts scheduled jobs, simplifies repetitive file tasks, and sends real-time system alerts.",
      technologies: ["Python", "Automation", "Scripts", "APIs"],
      githubUrl: "https://github.com",
      liveUrl: "https://github.com",
      icon: <Cpu className="w-5 h-5 text-gold" />,
      themeGradient: "from-maroon-dark/40 to-slate-950",
      graphicRepresentation: (
        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-45">
          <Cpu className="w-20 h-20 text-gold animate-float-fast" />
          <span className="font-mono text-xxs text-slate-500 mt-2">python main.py --daemon</span>
        </div>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="projects" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background radial overlays */}
      <div className="absolute top-[30%] left-[10%] w-[450px] h-[450px] rounded-full glow-spot-maroon filter blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full glow-spot-gold filter blur-[120px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeading title="Projects" subtitle="My Creative Works" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group rounded-2xl glass-panel overflow-hidden border border-slate-800 flex flex-col justify-between"
              style={{ minHeight: "440px" }}
            >
              {/* Card visual header (image placeholder representation) */}
              <div className={`relative h-48 w-full bg-gradient-to-b ${project.themeGradient} border-b border-slate-900 overflow-hidden flex items-center justify-center p-6`}>
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                {project.graphicRepresentation}
                
                {/* Visual Category Label */}
                <div className="absolute top-4 left-4 flex items-center space-x-2 px-2.5 py-1 bg-slate-950/80 border border-slate-800 rounded-md">
                  {project.icon}
                  <span className="text-white text-2xs font-bold tracking-wider font-mono uppercase">PROJECT {idx + 1}</span>
                </div>
              </div>

              {/* Card Description Area */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                </div>

                {/* Tags and Buttons */}
                <div className="space-y-6 pt-6">
                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-slate-800/80 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links Row */}
                  <div className="flex items-center space-x-3 pt-2 border-t border-slate-900">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-maroon rounded-lg transition-all duration-300 cursor-pointer"
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      <span>GitHub</span>
                    </a>
                    
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 py-2 text-xs font-semibold text-white bg-maroon/80 hover:bg-maroon hover:shadow-md hover:shadow-maroon/10 border border-maroon-light rounded-lg transition-all duration-300 cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
