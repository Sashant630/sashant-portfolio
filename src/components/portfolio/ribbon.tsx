import { Star } from "lucide-react";

export function Ribbon() {
  const items = Array.from({ length: 8 });
  return (
    <section className="overflow-hidden py-12">
      <div className="-rotate-2 border-y-2 border-primary-foreground/20 bg-primary py-5">
        <div className="flex w-max gap-10 ribbon-marquee">
          {[...items, ...items].map((_, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center gap-10 font-display text-2xl font-bold text-primary-foreground sm:text-3xl"
            >
              <span>Ship production UI</span>
              <Star className="h-6 w-6 fill-current" />
              <span className="italic">I'm a Frontend Developer</span>
              <Star className="h-6 w-6 fill-current" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
