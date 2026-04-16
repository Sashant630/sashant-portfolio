import { Code2, Sparkles, Rocket } from "lucide-react";

const SERVICES = [
  {
    icon: Code2,
    title: "React & Next.js Development",
    desc: "Scalable, performant web apps with TypeScript, Tailwind, and modern tooling.",
  },
  {
    icon: Sparkles,
    title: "GenAI-Powered Prototyping",
    desc: "Rapid full-stack builds using Lovable, Cursor, and Supabase to ship fast.",
  },
  {
    icon: Rocket,
    title: "SEO & Performance",
    desc: "Healthcare and marketing sites with 90%+ Lighthouse scores out the gate.",
  },
];

export function Services() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-balance text-center text-4xl font-bold sm:text-5xl">
          What I Can Do with <br />
          My <span className="italic text-primary">Frontend Superpowers</span>
        </h2>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-7 transition hover:border-primary/40"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition group-hover:bg-primary/20" />
              <div className="relative">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
