import shipworker from "@/assets/project-shipworker.png";
import frasada from "@/assets/project-frasada.png";
import weshare from "@/assets/project-4weshare.png";
import managing from "@/assets/project-managing.png";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    title: "ShipWorker App",
    category: "AI-Powered SaaS",
    image: shipworker,
    href: "https://shipworkerapp.buildyourai.consulting/",
    stack: ["Lovable", "Supabase", "Stripe"],
  },
  {
    title: "Frasada Dev",
    category: "WordPress + GenAI",
    image: frasada,
    href: "https://frasadadev.buildyourai.consulting/",
    stack: ["WordPress", "Lovable", "Custom CSS"],
  },
  {
    title: "4WeShare",
    category: "Community Platform",
    image: weshare,
    href: "https://4weshare.org/",
    stack: ["WordPress", "Custom UI"],
  },
  {
    title: "Managing Life's Changes",
    category: "Lovable Mockup",
    image: managing,
    href: "https://managinglifeschanges.buildyourai.consulting/",
    stack: ["Lovable", "Cursor"],
  },
];

export function Works() {
  return (
    <section id="works" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold sm:text-5xl">
          Some of My <span className="italic text-primary">Featured</span> Works
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
          Production projects shipped end-to-end — from architecture to deployment.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-3 transition hover:border-primary/40"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={p.image}
                  alt={p.title}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-end justify-between p-4 pt-5">
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    {p.category}
                  </div>
                  <h3 className="mt-1 text-2xl font-semibold">{p.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition group-hover:rotate-45">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
