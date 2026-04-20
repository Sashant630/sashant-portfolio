import { Download, FileText, Github, Linkedin } from "lucide-react";
import { MinimalistHero } from "@/components/ui/minimalist-hero";

const PROFILE_IMAGE_SRC =
  "https://ik.imagekit.io/sashant/sashant-profile%20(1).png";

export function Hero() {
  return (
    <section id="top">
      <MinimalistHero
        showHeader={false}
        className="pt-20 md:pt-24"
        logoText="Sashant.in"
        navLinks={[
          { label: "HOME", href: "#top" },
          { label: "WORKS", href: "#works" },
          { label: "CONTACT", href: "#contact" },
        ]}
        mainText="Hi, I'm Sashant — a React, Next.js & TypeScript developer with 4+ years shipping scalable web apps and rapid GenAI prototypes using Lovable, Cursor, and Supabase."
        readMoreLink="#works"
        imageSrc={PROFILE_IMAGE_SRC}
        imageAlt="Sashant Vishwakarma portrait"
        overlayText={{
          part1: "Frontend Developer",
          part2: "Code & AI",
        }}
        socialLinks={[
          { icon: Github, href: "https://github.com/Sashant630" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/sashant-vishwakarma-85423014a/" },
          { icon: FileText, href: "/resume.pdf" },
          { icon: Download, href: "/resume.pdf", download: "sashant-resume-2026.pdf" },
        ]}
        locationText="Goa, India · Available worldwide · Open to freelance & full-time"
        badge={
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Available for new projects
          </div>
        }
        primaryActions={
          <>
            <a
              href="#works"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90 glow-yellow"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-surface"
            >
              Hire Me
            </a>
          </>
        }
        stats={
          <div className="relative flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-16">
            <img
              src={PROFILE_IMAGE_SRC}
              alt=""
              width={192}
              height={192}
              className="absolute left-1/2 top-1/2 -z-10 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-2xl"
              aria-hidden
            />
            <Stat value="4.1+" label="Years Experience" />
            <Divider />
            <Stat value="10+" label="Projects Shipped" />
            <Divider />
            <Stat value="90%+" label="SEO Scores" />
          </div>
        }
      />
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="font-display text-4xl font-bold text-primary sm:text-5xl">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}

function Divider() {
  return <div className="hidden h-12 w-px bg-border sm:block" />;
}
