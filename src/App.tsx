import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "./lib/utils";
import { useActiveSection } from "./hooks/useActiveSection";
import Hero from "./components/sections/Hero";
import TechStack from "./components/sections/TechStack";
// import About from "./components/sections/About";
// import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/sections/Footer";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionIds = ["home", "tech-stack", "projects"];
  const activeSection = useActiveSection(sectionIds);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 transition-colors duration-300">
      {/* Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-violet-400 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Sticky Header Navbar */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "border-b border-zinc-800/50 bg-slate-950/80 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto max-w-4xl flex h-16 items-center justify-between px-6">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("home")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent hover:brightness-110 transition-all duration-300 whitespace-nowrap"
          >
            Sushil Thakare
          </a>
          <Navbar activeSection={activeSection} />
        </div>
      </header>

      {/* Main Content Area: Stacked Sections */}
      <main className="mx-auto max-w-4xl px-6 flex flex-col gap-8">
        <Hero />
        <TechStack />
        <Projects />
      </main>

      {/* Footer — last section on the page */}
      <Footer />
    </div>
  );
}

