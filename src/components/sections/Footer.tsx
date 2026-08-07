import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Icons
const GitHubIcon = ({ size = 20, className }: { size?: number; className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const LinkedInIcon = ({ size = 20, className }: { size?: number; className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const MailIcon = ({ size = 20, className }: { size?: number; className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const GlobeIcon = ({ size = 20, className }: { size?: number; className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
)

const ArrowUpRight = ({ size = 16, className }: { size?: number; className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
)

const CheckIcon = ({ size = 16, className }: { size?: number; className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const ArrowUp = ({ size = 16, className }: { size?: number; className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" />
  </svg>
)

// ---------------------------------------------------------------------------
// Animation variants
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

const EMAIL_ADDRESS = 'sushil.thakare.work@gmail.com'

export default function Footer() {
  const [copied, setCopied] = useState(false)
  const [timeString, setTimeString] = useState<string>('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }
      setTimeString(new Intl.DateTimeFormat('en-US', options).format(now))
    }

    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL_ADDRESS)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contact" className="py-12 md:py-20 border-t border-slate-800/60 mt-4">
      <div className="w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-12"
        >
          {/* Header & CTA Block */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4 text-center md:text-left items-center md:items-start">
            {/* Top pill badge */}
            <div className="flex w-fit items-center rounded-full gap-2 py-1.5 px-3.5 border border-slate-700/50 bg-slate-900/40 backdrop-blur-sm select-none">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-300 tracking-wide uppercase">
                Get In Touch
              </span>
            </div>

            {/* Large Heading */}
            <h2 className="text-[clamp(1.85rem,5vw,3rem)] font-semibold leading-[1.15] tracking-tight text-slate-100">
              Let’s create something <span className="text-violet-400">extraordinary</span>.
            </h2>

            {/* Subtitle */}
            <p className="text-sm md:text-base text-slate-400 max-w-xl leading-relaxed">
              Open for high-impact engineering roles, technical collaborations, and ambitious builds.
            </p>
          </motion.div>

          {/* Interactive Contact Cards Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* 1. Email Card (Interactive Copy + Mailto) */}
            <div className="group relative flex flex-col justify-between p-5 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/40 transition-all duration-200">
              <div className="flex items-start justify-between">
                <div className="p-2.5 rounded-lg bg-violet-500/10 text-violet-400 border border-violet-500/20">
                  <MailIcon size={20} />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 text-slate-300 transition-colors border border-white/10"
                >
                  {copied ? (
                    <>
                      <CheckIcon size={14} className="text-green-400" />
                      <span className="text-green-400">Copied!</span>
                    </>
                  ) : (
                    <span>Copy email</span>
                  )}
                </button>
              </div>

              <div className="mt-6">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email</span>
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="block text-base font-medium text-slate-200 hover:text-violet-300 transition-colors mt-0.5 truncate"
                >
                  {EMAIL_ADDRESS}
                </a>
                <p className="text-xs text-slate-400 mt-1">Drop me a message anytime</p>
              </div>
            </div>

            {/* 2. LinkedIn Card */}
            <a
              href="https://linkedin.com/in/sushilthakare"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between p-5 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/40 transition-all duration-200"
            >
              <div className="flex items-start justify-between">
                <div className="p-2.5 rounded-lg bg-violet-500/10 text-violet-400 border border-violet-500/20">
                  <LinkedInIcon size={20} />
                </div>
                <ArrowUpRight size={18} className="text-slate-400 group-hover:text-violet-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>

              <div className="mt-6">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">LinkedIn</span>
                <div className="text-base font-medium text-slate-200 group-hover:text-violet-300 transition-colors mt-0.5">
                  sushilthakare
                </div>
                <p className="text-xs text-slate-400 mt-1">Let’s connect professionally</p>
              </div>
            </a>

            {/* 3. GitHub Card */}
            <a
              href="https://github.com/SushilThakare"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between p-5 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/40 transition-all duration-200"
            >
              <div className="flex items-start justify-between">
                <div className="p-2.5 rounded-lg bg-violet-500/10 text-violet-400 border border-violet-500/20">
                  <GitHubIcon size={20} />
                </div>
                <ArrowUpRight size={18} className="text-slate-400 group-hover:text-violet-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>

              <div className="mt-6">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">GitHub</span>
                <div className="text-base font-medium text-slate-200 group-hover:text-violet-300 transition-colors mt-0.5">
                  SushilThakare
                </div>
                <p className="text-xs text-slate-400 mt-1">Explore my open-source code</p>
              </div>
            </a>

            {/* 4. Location & Availability Card */}
            <div className="group relative flex flex-col justify-between p-5 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/40 transition-all duration-200">
              <div className="flex items-start justify-between">
                <div className="p-2.5 rounded-lg bg-violet-500/10 text-violet-400 border border-violet-500/20 group-hover:text-violet-300 transition-colors">
                  <GlobeIcon size={20} />
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/60 border border-slate-700/60">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-[11px] font-medium text-slate-300">Available</span>
                </div>
              </div>

              <div className="mt-6">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Location & Status</span>
                <div className="text-base font-medium text-slate-200 group-hover:text-violet-300 transition-colors mt-0.5">
                  Pune, India <span className="text-xs text-slate-400 font-normal font-mono">(IST)</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  {timeString ? `${timeString} • Open for remote roles` : 'Open for remote roles'}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Minimalist Bottom Bar (No Copyright) */}
          <motion.div
            variants={itemVariants}
            className="pt-8 border-t border-slate-800/40 flex items-center justify-end text-xs text-slate-400"
          >
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-violet-300 transition-colors cursor-pointer group"
            >
              <span>Back to top</span>
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

