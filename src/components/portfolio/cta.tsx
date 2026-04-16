import { Mail, Phone } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="font-display text-7xl font-bold leading-none tracking-tighter sm:text-8xl md:text-9xl">
          LET'S <span className="text-primary">WORK</span>
          <br />
          TOGE<span className="text-primary">THER</span>
        </h2>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="mailto:sashant630@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium transition hover:border-primary/40"
          >
            <Mail className="h-4 w-4 text-primary" />
            sashant630@gmail.com
          </a>
          <a
            href="tel:+918459496833"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium transition hover:border-primary/40"
          >
            <Phone className="h-4 w-4 text-primary" />
            +91 84594 96833
          </a>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Goa, India · Available worldwide · Open to freelance & full-time
        </p>
      </div>
    </section>
  );
}
