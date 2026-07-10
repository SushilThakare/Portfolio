import Navbar from "./Navbar";
import Footer from "./Footer";

interface SidebarProps {
  activeSection: string;
}

export default function Sidebar({ activeSection }: SidebarProps) {
  return (
    <aside className="flex flex-col justify-between h-full py-12 md:py-24">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
          John Doe
        </h1>
        <h2 className="text-lg md:text-xl font-medium mt-3 text-gray-800 dark:text-gray-200">
          Senior Software Engineer
        </h2>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 max-w-xs leading-relaxed">
          I build accessible, pixel-perfect digital experiences for the web.
        </p>
        <Navbar activeSection={activeSection} />
      </div>
      <Footer />
    </aside>
  );
}
