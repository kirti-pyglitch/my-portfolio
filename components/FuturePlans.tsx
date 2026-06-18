"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Brain, Code, Globe, Briefcase, Cpu, Award } from "lucide-react";

interface PlanItem {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FuturePlans() {
  const plansData: PlanItem[] = [
    {
      number: "01",
      icon: <Brain className="w-5 h-5 text-gold" />,
      title: "AI & ML Specialization",
      description: "Advance my expertise in Artificial Intelligence and Machine Learning, studying deep learning algorithms, neural network design, and natural language processing models."
    },
    {
      number: "02",
      icon: <Code className="w-5 h-5 text-gold" />,
      title: "Open-Source & Real-World Projects",
      description: "Build more high-impact real-world projects and actively contribute to global open-source communities to collaborate on cutting-edge software solutions."
    },
    {
      number: "03",
      icon: <Globe className="w-5 h-5 text-gold" />,
      title: "Full-Stack Mastery",
      description: "Master full-stack development technologies, integrating advanced backend infrastructures (Node.js, databases, cloud server deployments) with modern frontend frameworks."
    },
    {
      number: "04",
      icon: <Briefcase className="w-5 h-5 text-gold" />,
      title: "Industry Engagement",
      description: "Gain valuable industry experience through professional internships and collaborative enterprise projects to understand scale, codebases, and deployment pipelines."
    },
    {
      number: "05",
      icon: <Cpu className="w-5 h-5 text-gold" />,
      title: "AI-Powered Products",
      description: "Develop innovative AI-powered applications that target and solve practical everyday problems, combining user experience designs with intelligent backend predictions."
    },
    {
      number: "06",
      icon: <Award className="w-5 h-5 text-gold" />,
      title: "Continuous Learning",
      description: "Pursue continuous learning, professional certifications, and active research to keep pace with emerging tech trends like Generative AI and Quantum Computing."
    }
  ];

  return (
    <section id="future-plans" className="py-24 bg-slate-950/40 relative overflow-hidden">
      {/* Background radial overlays */}
      <div className="absolute top-[50%] left-[10%] w-[350px] h-[350px] rounded-full glow-spot-maroon filter blur-[100px] opacity-25 pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full glow-spot-gold filter blur-[100px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeading title="Future Plans" subtitle="My Roadmap" />

        {/* Timeline Layout Container */}
        <div className="relative mt-12 max-w-5xl mx-auto">
          {/* Vertical central divider line (hidden on small screens, shown on md+) */}
          <div className="absolute left-[50%] -translate-x-[50%] top-0 bottom-0 w-[2px] bg-gradient-to-b from-maroon via-gold/40 to-slate-900 hidden md:block" />

          {/* Timeline Nodes */}
          <div className="space-y-12 md:space-y-20">
            {plansData.map((plan, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-center justify-between ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Empty Spacer Column for Desktop */}
                  <div className="w-full md:w-[45%] hidden md:block" />

                  {/* Central Node Indicator */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                    className="z-10 w-12 h-12 rounded-full bg-slate-950 border-2 border-gold flex items-center justify-center shadow-lg shadow-maroon/20 mb-6 md:mb-0 shrink-0"
                  >
                    {plan.icon}
                  </motion.div>

                  {/* Card Content Column */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-[45%] glass-panel rounded-2xl p-6 md:p-8 border border-slate-800 shadow-xl relative"
                  >
                    {/* Floating Number Overlay */}
                    <div className="absolute top-4 right-4 text-3xl font-mono font-extrabold text-slate-800/40 select-none">
                      {plan.number}
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-lg md:text-xl font-bold text-white tracking-wide">
                        {plan.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {plan.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
