import { motion, useScroll, useSpring } from "framer-motion";
import Hero from "./components/sections/Hero";
import TechStack from "./components/sections/TechStack";
// import About from "./components/sections/About";
// import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Footer from "./components/sections/Footer";

export default function App() {
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 transition-colors duration-300">
      {/* Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-violet-400 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Main Content Area: Stacked Sections */}
      <main className="mx-auto max-w-4xl px-6 flex flex-col">
        <Hero />
        <TechStack />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}

