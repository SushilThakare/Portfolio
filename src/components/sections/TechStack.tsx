import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { skills } from "../../data/skills";

export default function TechStack() {
  const duplicatedSkills = [...skills, ...skills];

  return (
      <section id="tech-stack" className="py-16 md:py-24 flex flex-col gap-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.39, 0.575, 0.565, 1] }}
        className="flex flex-col gap-2"
      >
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-200">
          Tech stack
        </h2>
        <p className="text-slate-400">
          Tech stacks I'm familiar with
        </p>
      </motion.div>

      
<div className="marquee-container w-full mt-4 overflow-hidden">
        <div className="animate-marquee flex w-max gap-4 items-center py-4">
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className={cn(
                "flex items-center gap-3 px-4 py-2 rounded-xl",
                "bg-white/5 border border-white/10",
                "transition-colors hover:bg-white/10"
              )}
            >
              {/* TODO: Swap emoji placeholders for real SVG icons */}
              <span className="text-xl leading-none">{skill.icon}</span>
              <span className="text-sm font-medium text-slate-300 tracking-wide">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
