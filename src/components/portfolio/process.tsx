import { Search, Settings, Package } from "lucide-react";

const STEPS = [
  {
    icon: Search,
    title: "Discovery",
    desc: "We align on goals, scope, and the tech that fits your timeline and budget.",
  },
  {
    icon: Settings,
    title: "Development",
    desc: "Iterative builds with Lovable + Cursor, regular previews, and clean code.",
  },
  {
    icon: Package,
    title: "Delivery",
    desc: "SEO-ready, production-deployed, and documented — handoff or ongoing care.",
  },
];

export function Process() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-balance text-center text-4xl font-bold sm:text-5xl">
          You're Just <span className="italic text-primary">3 Steps</span> from
          <br />
          Your Online Presence
        </h2>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <div key={s.title} className="rounded-3xl border border-border bg-surface p-7">
              <div className="mb-5 flex items-center justify-between">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <s.icon className="h-7 w-7" />
                </div>
                <span className="font-display text-3xl font-bold text-muted-foreground/30">
                  0{i + 1}
                </span>
              </div>
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
