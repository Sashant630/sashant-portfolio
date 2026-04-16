const TECH = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "Lovable",
  "Cursor",
  "Vue.js",
  "WordPress",
  "Stripe",
];

export function TechStrip() {
  return (
    <section className="border-y border-border bg-surface/40 py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6">
        {TECH.map((t) => (
          <span
            key={t}
            className="font-display text-lg font-medium text-muted-foreground transition hover:text-primary"
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
