import { useActiveSection } from "./hooks/useActiveSection";
import Hero from "./components/sections/Hero";
import TechStack from "./components/sections/TechStack";
// import About from "./components/sections/About";
// import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/sections/Footer";

export default function App() {
  const sectionIds = ["hero", "about", "experience", "projects", "contact"];
  const activeSection = useActiveSection(sectionIds);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 transition-colors duration-300">
      {/* Sticky Header Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800/50 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto max-w-4xl flex h-16 items-center justify-between px-6">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent hover:brightness-110 transition-all duration-300"
          >
            JD.
          </a>
          <Navbar activeSection={activeSection} />
        </div>
      </header>

      {/* Main Content Area: Stacked Sections */}
      <main className="mx-auto max-w-4xl px-6 flex flex-col gap-12">
        <Hero />
        <TechStack />
        <Projects />
        <Contact />
      </main>

      {/* Footer — last section on the page */}
      <Footer />
    </div>
  );
}
