import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import FuturePlans from "@/components/FuturePlans";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950 font-sans overflow-x-hidden select-none">
      {/* Dynamic tech-styled background elements */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Floating ambient spots */}
      <div className="fixed top-0 left-0 right-0 h-screen pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] aspect-square rounded-full glow-spot-maroon filter blur-[140px] opacity-30" />
        <div className="absolute bottom-[10%] right-[-10%] w-[60%] aspect-square rounded-full glow-spot-gold filter blur-[150px] opacity-20" />
      </div>

      <Navbar />

      <main className="relative z-10 w-full flex flex-col">
        <Hero />
        <Introduction />
        <About />
        <Skills />
        <Projects />
        <FuturePlans />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
