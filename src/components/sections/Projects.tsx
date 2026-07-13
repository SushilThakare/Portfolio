import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'
import { projects } from '../../data/projects'
import type { Project } from '../../data/projects'

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
      staggerChildren: 0.1,
    },
  },
}

const headingVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
}

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
}

// ---------------------------------------------------------------------------
// ProjectCard
// ---------------------------------------------------------------------------

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.a
      // TODO: swap href for project.link once real URLs are added
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      variants={cardVariants}
    whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.2, ease: 'easeOut' } }}
      className={cn(
        'group flex flex-col rounded-xl overflow-hidden',
        'bg-white/5 border border-white/10',
        'hover:border-white/20',
        'transition-colors duration-200',
      )}
    >
      {/* Project image — 16:9 aspect ratio */}
      <div className="w-full aspect-video overflow-hidden rounded-t-xl">
        <img
          // TODO: swap src for real project image (e.g. import stayifyImg from '../../assets/projects/stayify.png')
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 gap-2.5 p-5">
        {/* Year badge */}
        <span className="w-fit rounded-full px-2.5 py-0.5 text-xs font-medium text-slate-400 bg-white/5 border border-white/10 select-none">
          {project.year}
        </span>

        {/* Title */}
        <h3 className="text-base font-semibold text-slate-200 leading-snug">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Read more link */}
        <span className="mt-1 text-sm font-medium text-violet-400 group-hover:text-violet-300 transition-colors duration-150">
          Read more →
        </span>
      </div>
    </motion.a>
  )
}

// ---------------------------------------------------------------------------
// Projects section
// ---------------------------------------------------------------------------

export default function Projects() {
  return (
    <motion.section
      id="projects"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-8 md:py-12"
    >
      {/* ---- Header block ---- */}
      <motion.div
        variants={headingVariants}
        className="flex flex-col gap-5 mb-12"
      >
        {/* Top row: heading block (left) + view-all link (right) */}
        <div className="flex items-start justify-between gap-6 flex-wrap">
          {/* Left: label + heading + subheading */}
          <div className="flex flex-col gap-3 max-w-xl">
            {/* Section label */}
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 select-none">
              Projects
            </span>

            {/* Large heading */}
            <h2 className="text-[clamp(1.75rem,5vw,2.75rem)] font-semibold leading-[1.15] tracking-tight text-slate-200">
              Milestones in the{' '}
              <br />
              <em className="not-italic text-violet-400">learning journey</em>
            </h2>

            {/* Subheading */}
            <p className="text-sm text-slate-400 leading-relaxed">
              A curated collection of things I've built along the way.
              <br />
              Each project taught me something new — about code and beyond.
            </p>
          </div>

          {/* Right: view all link */}
          {/* TODO: swap href with a real /projects route once it exists */}
          <a
            href="#"
            className="shrink-0 self-start mt-1 text-sm font-medium text-slate-400 hover:text-violet-400 transition-colors duration-150"
          >
            View all projects →
          </a>
        </div>
      </motion.div>

      {/* ---- 2-column grid of project cards ---- */}
      <motion.div
        variants={gridVariants}
        className="grid grid-cols-1 sm:grid-cols-2 gap-5"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </motion.section>
  )
}
