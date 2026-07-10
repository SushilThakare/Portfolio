import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

// Custom SVG components matching the reference site's layout perfectly
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
      <path d="M10 20.568c-3.429 1.157-6.286 0-8-3.568"></path>
      <path d="M10 22v-3.242c0-.598.184-1.118.48-1.588.204-.322.064-.78-.303-.88C7.134 15.452 5 14.107 5 9.645c0-1.16.38-2.25 1.048-3.2.166-.236.25-.354.27-.46.02-.108-.015-.247-.085-.527c-.283-1.136-.264-2.343.16-3.43c0 0 .877-.287 2.874.96.456.285.684.428.885.46s.469-.035 1.005-.169A9.5 9.5 0 0 1 13.5 3a9.6 9.6 0 0 1 2.343.28c.536.134.805.2 1.006.169c.2-.032.428-.175.884-.46c1.997-1.247 2.874-.96 2.874-.96c.424 1.087.443 2.294.16 3.43c-.07.28-.104.42-.084.526s.103.225.269.461c.668.95 1.048 2.04 1.048 3.2c0 4.462-2.134 5.807-5.177 6.643c-.367.101-.507.559-.303.88c.296.47.48.99.48 1.589V22"></path>
    </g>
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M4.5 9.5H4c-.943 0-1.414 0-1.707.293S2 10.557 2 11.5V20c0 .943 0 1.414.293 1.707S3.057 22 4 22h.5c.943 0 1.414 0 1.707-.293S6.5 20.943 6.5 20v-8.5c0-.943 0-1.414-.293-1.707S5.443 9.5 4.5 9.5m2-5.25a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0m5.826 5.25H11.5c-.943 0-1.414 0-1.707.293S9.5 10.557 9.5 11.5V20c0 .943 0 1.414.293 1.707S10.557 22 11.5 22h.5c.943 0 1.414 0 1.707-.293S14 20.943 14 20v-3.5c0-1.657.528-3 2.088-3c.78 0 1.412.672 1.412 1.5v4.5c0 .943 0 1.414.293 1.707s.764.293 1.707.293h.499c.942 0 1.414 0 1.707-.293c.292-.293.293-.764.293-1.706L22 14c0-2.486-2.364-4.5-4.703-4.5c-1.332 0-2.52.652-3.297 1.673c0-.63 0-.945-.137-1.179a1 1 0 0 0-.358-.358c-.234-.137-.549-.137-1.179-.137"
    ></path>
  </svg>
);

const ResumeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M5.975 16.987V6.532c0-1.345.057-2.906 1.065-3.8C7.866 2 9.034 2 10.14 2h7.31c1.027 0 2.092.018 3.012.47q.112.055.213.115C22.042 3.388 22 5.302 22 6.885v10.532c0 1.041-.048 2.111-.48 3.059c-.414.907-.98 1.314-2.024 1.506M5.975 16.987h8.83c.413 0 .785.253.93.638c.126.337.23.627.323.9c.323.958.607 1.969 1.287 2.717c.409.45.838.678 1.41.74m-12.78-4.995H2.969c-.553 0-1.011.447-.966.997c.047.576.15 1.078.34 1.615c.336.95.92 1.911 1.88 2.225c.354.115.746.153 1.251.158h13.28m.742 0a4 4 0 0 1-.742 0m.742 0h-.742M10.469 7h7m-7 4h3.5"
    ></path>
  </svg>
);

const EmailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
      <path d="m2 6l6.913 3.917c2.549 1.444 3.625 1.444 6.174 0L22 6"></path>
      <path d="M2.016 13.476c.065 3.065.098 4.598 1.229 5.733c1.131 1.136 2.705 1.175 5.854 1.254c1.94.05 3.862.05 5.802 0c3.149-.079 4.723-.118 5.854-1.254c1.131-1.135 1.164-2.668 1.23-5.733c.02-.986.02-1.966 0-2.952c-.066-3.065-.099-4.598-1.23-5.733c-1.131-1.136-2.705-1.175-5.854-1.254a115 115 0 0 0-5.802 0c-3.149.079-4.723.118-5.854 1.254c-1.131 1.135-1.164 2.668-1.23 5.733a69 69 0 0 0 0 2.952"></path>
    </g>
  </svg>
);

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  resume: ResumeIcon,
  email: EmailIcon,
};

export interface SocialLink {
  label: string;
  href: string;
  iconName: keyof typeof iconMap;
}

interface HeroProps {
  statusText?: string;
  isAvailable?: boolean;
  name?: string;
  role?: string;
  subheading?: string;
  socialLinks?: SocialLink[];
  nextSectionId?: string;
}

export default function Hero({
  statusText = "Available for projects",
  isAvailable = true,
  name = "Sushil",
  role = "software engineer",
  subheading = "Mainly working in the JavaScript ecosystem, I’m a dedicated problem-solver who thrives on learning and building.",
  socialLinks = [
    { label: "Github", href: "https://github.com/sushilthakare", iconName: "github" },
    { label: "LinkedIn", href: "nkedin.com/in/sushilthakare", iconName: "linkedin" },
    { label: "Resume", href: "https://read.cv/sushilthakare", iconName: "resume" },
    { label: "Email", href: "mailto:sushil.thakar.work@gamil.com", iconName: "email" },
  ],
  nextSectionId = "about",
}: HeroProps) {
  // Container animation configuration for staggered children entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // Individual item entrance variants matching the reference site's upward fade-in slide
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.39, 0.575, 0.565, 1] as const, // Cast to read-only tuple for Framer Motion typings
      },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-[85vh] flex flex-col justify-center py-16 md:py-24"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-8 items-start"
      >
        {/* Status Badge */}
        <motion.div variants={itemVariants}>
          <div className="flex w-fit items-center rounded-full gap-3 py-1.5 pl-3 pr-4 border border-zinc-700/50 bg-slate-900/40 backdrop-blur-sm">
            <div className="relative size-3">
              {isAvailable && (
                <div className="absolute size-full animate-ping rounded-full bg-green-400 opacity-65"></div>
              )}
              <div
                className={cn(
                  "size-full rounded-full",
                  isAvailable ? "bg-green-400 drop-shadow-green" : "bg-zinc-500"
                )}
              ></div>
            </div>
            <h3 className="text-sm font-medium text-slate-200 tracking-wide select-none">
              {statusText}
            </h3>
          </div>
        </motion.div>

        {/* Large Heading */}
        <motion.div variants={itemVariants}>
          <h1 className="text-[clamp(2.25rem,6.5vw,3.75rem)] font-medium leading-[1.1] tracking-tight text-slate-300">
            Hi, I’m <span className="text-white font-semibold">{name}</span>.
            <br />
            A <span className="text-violet-500 font-semibold dark:text-violet-400">{role}</span>.
          </h1>
        </motion.div>

        {/* Subheading Paragraph */}
        <motion.div variants={itemVariants} className="max-w-xl">
          <p className="leading-relaxed text-slate-400 text-base md:text-lg">
            {subheading}
          </p>
        </motion.div>

        {/* Interactive Keyboard Row of Social Links & CTA Button */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-6 mt-4 max-sm:gap-8"
        >
          {/* Keyboard Keys Board */}
          <div className="keyboard-board">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.iconName];
              return (
                <div key={link.label} className="key-position">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="key-3d"
                  >
                    {Icon && <Icon className="size-6 sm:size-7 text-slate-100" />}
                  </a>
                </div>
              );
            })}
          </div>

          {/* Explore Button as a CTA Spacebar/Key */}
          <div className="key-position">
            <a
              href={`#${nextSectionId}`}
              className="key-3d call-to-action text-white"
              onClick={(e) => {
                const target = document.getElementById(nextSectionId);
                if (target) {
                  e.preventDefault();
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <span className="call-to-action-content">Explore more</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
