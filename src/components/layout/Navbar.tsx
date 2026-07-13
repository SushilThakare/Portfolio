import { cn } from "../../lib/utils";

interface NavbarProps {
  activeSection: string;
}

const navItems = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
];

export default function Navbar({ activeSection }: NavbarProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav>
      <ul className="flex items-center gap-5 sm:gap-8 text-[10px] sm:text-xs font-bold tracking-widest uppercase">
        {navItems.map((item) => {
          const isActive =
            activeSection === item.id ||
            (item.id === "home" && activeSection === "tech-stack");
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={cn(
                  "group relative py-2 transition-all duration-300 block select-none",
                  isActive
                    ? "text-violet-400"
                    : "text-zinc-400 hover:text-zinc-100"
                )}
              >
                <span>{item.label}</span>
                {/* Horizontal sliding indicator line */}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-[2px] bg-violet-400 transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
