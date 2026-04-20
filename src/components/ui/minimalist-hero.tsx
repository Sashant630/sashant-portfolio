import * as React from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface MinimalistHeroNavLink {
  label: string;
  href: string;
}

export interface MinimalistHeroSocialLink {
  icon: LucideIcon;
  href: string;
  /** When set, renders as a same-origin download (e.g. resume PDF). */
  download?: string;
}

export interface MinimalistHeroProps {
  logoText: string;
  navLinks: MinimalistHeroNavLink[];
  mainText: string;
  readMoreLink: string;
  imageSrc: string;
  imageAlt: string;
  overlayText: {
    part1: string;
    part2: string;
    /** Optional third line (e.g. “Code & AI”) so the headline stays readable. */
    part3?: string;
  };
  socialLinks: MinimalistHeroSocialLink[];
  locationText: string;
  /** Hide built-in header when using a global fixed nav (recommended for this site). */
  showHeader?: boolean;
  badge?: React.ReactNode;
  primaryActions?: React.ReactNode;
  stats?: React.ReactNode;
  className?: string;
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-sm font-medium tracking-widest text-muted-foreground transition-colors hover:text-foreground"
  >
    {children}
  </a>
);

const SocialIcon = ({
  href,
  icon: Icon,
  download,
}: {
  href: string;
  icon: LucideIcon;
  download?: string;
}) => {
  const openInNewTab = !download && (/^https?:\/\//.test(href) || href.endsWith(".pdf"));
  return (
    <a
      href={href}
      download={download}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      className="text-muted-foreground transition-colors hover:text-foreground"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
};

export function MinimalistHero({
  logoText,
  navLinks,
  mainText,
  readMoreLink,
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  locationText,
  showHeader = true,
  badge,
  primaryActions,
  stats,
  className,
}: MinimalistHeroProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-screen w-full flex-col items-center justify-between overflow-x-hidden bg-background px-5 pb-10 pt-4 font-sans text-foreground sm:px-8 md:px-10 md:pb-14 lg:px-16",
        className,
      )}
    >
      {showHeader ? (
        <header className="z-30 flex w-full max-w-[1400px] items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold tracking-wider"
          >
            {logoText}
          </motion.div>
          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <NavLink key={link.label} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </div>
          <motion.button
            type="button"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-1.5 md:hidden"
            aria-label="Open menu"
          >
            <span className="block h-0.5 w-6 bg-foreground" />
            <span className="block h-0.5 w-6 bg-foreground" />
            <span className="block h-0.5 w-5 bg-foreground" />
          </motion.button>
        </header>
      ) : null}

      <div className="relative isolate grid w-full max-w-[1400px] flex-grow grid-cols-1 items-center gap-y-10 gap-x-2 py-2 md:grid-cols-[minmax(0,1fr)_minmax(280px,420px)_minmax(0,1fr)] md:items-center md:gap-x-0 md:gap-y-6 md:py-2 lg:grid-cols-[minmax(0,1fr)_minmax(320px,480px)_minmax(0,1fr)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="relative z-30 order-2 self-center text-center md:order-1 md:max-w-sm md:text-left lg:max-w-md"
        >
          {badge ? <div className="mx-auto mb-4 md:mx-0">{badge}</div> : null}
          <p className="mx-auto max-w-md text-sm leading-relaxed text-muted-foreground md:mx-0">
            {mainText}
          </p>
          <a
            href={readMoreLink}
            className="mt-4 inline-block text-sm font-medium text-foreground underline decoration-from-font underline-offset-4"
          >
            Read More
          </a>
          {primaryActions ? (
            <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
              {primaryActions}
            </div>
          ) : null}
        </motion.div>

        <div className="relative z-0 order-1 flex min-h-[280px] items-center justify-center overflow-visible md:order-2 md:min-h-[360px] lg:min-h-[420px]">
          <div className="relative flex aspect-square w-[min(100%,280px)] items-end justify-center overflow-visible pb-0 pt-4 md:w-[min(100%,340px)] lg:w-[min(100%,400px)]">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="pointer-events-none absolute inset-0 rounded-full bg-primary/30"
            />
            <motion.img
              src={imageSrc}
              alt={imageAlt}
              className="relative z-10 h-full max-h-[min(52vh,480px)] w-auto max-w-[110%] object-contain object-bottom"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "https://placehold.co/400x600/eab308/ffffff?text=Image+Not+Found";
              }}
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="relative z-40 order-3 flex w-full items-start justify-center text-center md:-ml-1 md:justify-end md:pr-0 md:text-left lg:-ml-2"
        >
          <h1 className="w-full max-w-[min(100%,26ch)] translate-x-0 text-balance font-display text-4xl font-extrabold leading-[0.98] tracking-tighter text-foreground sm:text-5xl md:ml-auto md:-translate-x-3 md:text-6xl md:leading-[0.94] lg:-translate-x-6 lg:text-7xl xl:-translate-x-8 xl:text-8xl">
            {overlayText.part3 ? (
              <>
                <span className="block text-foreground">
                  {overlayText.part1}
                  <br />
                  {overlayText.part2}
                </span>
                <span className="mt-1 block text-primary">{overlayText.part3}</span>
              </>
            ) : (
              <>
                <span className="block text-foreground">{overlayText.part1}</span>
                <span className="mt-2 block text-primary">{overlayText.part2}</span>
              </>
            )}
          </h1>
        </motion.div>
      </div>

      {stats ? (
        <div className="z-20 mt-6 w-full max-w-[1400px] flex-shrink-0 border-t border-border/60 py-8 md:mt-8 md:py-10">
          {stats}
        </div>
      ) : null}

      <footer className="z-30 flex w-full max-w-[1400px] flex-shrink-0 items-center justify-between gap-4 pt-2 pb-2 md:pt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex items-center space-x-4"
        >
          {socialLinks.map((link, index) => (
            <SocialIcon
              key={`${link.href}-${index}`}
              href={link.href}
              icon={link.icon}
              download={link.download}
            />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="text-sm font-medium text-muted-foreground"
        >
          {locationText}
        </motion.div>
      </footer>
    </div>
  );
}
