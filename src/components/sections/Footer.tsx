import { motion } from 'framer-motion'
// import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { cn } from '../../lib/utils'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number | string;
}

// Replace the Github icon with:
const GitHubIcon = ({ size = 18, strokeWidth, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const LinkedInIcon = ({ size = 18, strokeWidth, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const XIcon = ({ size = 18, strokeWidth, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const MailIcon = ({ size = 18, strokeWidth = 2, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth} {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

// TODO: replace with your real social URLs
const socialLinks = [
  { icon: GitHubIcon, label: 'GitHub', href: 'https://github.com/SushilThakare' },
  { icon: LinkedInIcon, label: 'LinkedIn', href: 'https://linkedin.com/sushilthakare' },
  { icon: MailIcon, label: 'Mail', href: 'mailto:sushil.thakare.work@gmail.com' },
  { icon: XIcon, label: 'Twitter / X', href: 'https://x.com' },
] as const

const navGroups = [
  {
    title: 'Me',
    links: [
      { label: 'Projects', href: '#projects' },
      { label: 'Blog', href: '#' }, // TODO: add real blog URL
      { label: 'Bookmarks', href: '#' }, // TODO: add real bookmarks URL
    ],
  },
  {
    title: 'This site',
    links: [
      { label: 'Source code', href: 'https://github.com' }, // TODO: replace with real repo URL
      { label: 'RSS', href: '#' }, // TODO: add real RSS feed URL
    ],
  },
  {
    title: 'Elsewhere',
    links: [
      { label: 'Twitter / X', href: 'https://x.com' }, // TODO: replace with real URL
      { label: 'LinkedIn', href: 'https://linkedin.com' }, // TODO: replace with real URL
    ],
  },
] as const

// TODO: replace with your real name
const name = 'Sushil '

// TODO: replace with real last-updated date
const lastUpdated = 'July 2, 2026'

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

const containerVariants = {
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

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut' as const,
    },
  },
}

export default function Footer() {
  return (
    <footer className={cn('border-t border-white/10 pt-8 pb-6 mt-4')}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* -------- Two-column layout -------- */}
          <div className="flex flex-row justify-between gap-12 flex-wrap">
            {/* LEFT COLUMN */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4 max-w-xs">
              {/* TODO: replace with your real name */}
              <h2 className="text-xl font-bold tracking-tight text-slate-100">
                {name}
              </h2>

              <p className="text-sm text-slate-400 leading-relaxed">
                A dedicated problem-solver who thrives on learning and building.
              </p>

              {/* Social icon row */}
              <div className="flex items-center gap-2">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={cn(
                      'p-2 rounded-lg',
                      'border border-white/10 text-slate-400',
                      'hover:bg-white/10 hover:text-slate-200',
                      'transition-colors duration-150',
                    )}
                  >
                    <Icon size={16} strokeWidth={1.75} />
                  </a>
                ))}
              </div>

              {/* Copyright */}
              <p className="text-xs text-slate-500 mt-2">
                {/* TODO: replace with your real name */}
                © 2025 {name}. All rights reserved.
              </p>
            </motion.div>

            {/* RIGHT COLUMN — Nav link groups */}
            <motion.div variants={itemVariants} className="flex flex-row gap-12">
              {navGroups.map((group) => (
                <div key={group.title} className="flex flex-col">
                  <span
                    className={cn(
                      'text-xs font-semibold uppercase tracking-widest',
                      'text-slate-500 mb-3 select-none',
                    )}
                  >
                    {group.title}
                  </span>

                  <ul className="flex flex-col gap-2">
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target={
                            link.href.startsWith('#') ? undefined : '_blank'
                          }
                          rel={
                            link.href.startsWith('#')
                              ? undefined
                              : 'noopener noreferrer'
                          }
                          className={cn(
                            'text-sm text-slate-400',
                            'hover:text-slate-200',
                            'transition-colors duration-150',
                          )}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>

          {/* -------- Bottom row -------- */}
          <motion.div variants={itemVariants} className="border-t border-white/10 mt-10 pt-4 flex justify-end">
            <span className="text-xs text-slate-500">
              {/* TODO: replace with your real name and date */}
              Last updated by {name} on {lastUpdated}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
