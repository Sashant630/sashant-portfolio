import portrait from "@/assets/portrait.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.88_0.18_95_/_0.08),_transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl text-center">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          Available for new projects
        </div>
        <h1 className="text-balance text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl">
          Frontend Developer with{" "}
          <span className="italic text-primary">Background in</span> Code & AI
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg">
          Hi, I'm Sashant — a React, Next.js & TypeScript developer with 4+ years
          shipping scalable web apps and rapid GenAI prototypes using Lovable, Cursor,
          and Supabase.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
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
        </div>

        {/* Stats */}
        <div className="relative mt-20 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-16">
          <img
            src={portrait}
            alt="Sashant Vishwakarma portrait"
            width={192}
            height={192}
            className="absolute left-1/2 top-1/2 -z-10 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-2xl"
          />
          <Stat value="4.1+" label="Years Experience" />
          <Divider />
          <Stat value="10+" label="Projects Shipped" />
          <Divider />
          <Stat value="90%+" label="SEO Scores" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="font-display text-4xl font-bold text-primary sm:text-5xl">
        {value}
      </div>
      <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

function Divider() {
  return <div className="hidden h-12 w-px bg-border sm:block" />;
}
