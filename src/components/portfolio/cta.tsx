import { Download, FileText, Github, Linkedin, Mail, Phone } from "lucide-react";

export function CTA() {
  const chipClassName =
    "inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium transition hover:border-primary/40 sm:w-auto";

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="font-display text-7xl font-bold leading-none tracking-tighter sm:text-8xl md:text-9xl">
          LET'S <span className="text-primary">WORK</span>
          <br />
          TOGE<span className="text-primary">THER</span>
        </h2>

        <div className="mx-auto mt-12 grid w-full max-w-4xl gap-4 text-left">
          <div className="grid gap-3 sm:grid-cols-2">
            <a href="mailto:sashant630@gmail.com" className={chipClassName}>
              <Mail className="h-4 w-4 text-primary" />
              sashant630@gmail.com
            </a>
            <a href="tel:+918459496833" className={chipClassName}>
              <Phone className="h-4 w-4 text-primary" />
              +91 84594 96833
            </a>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="https://github.com/Sashant630"
              target="_blank"
              rel="noreferrer"
              className={chipClassName}
            >
              <Github className="h-4 w-4 text-primary" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sashant-vishwakarma-85423014a/"
              target="_blank"
              rel="noreferrer"
              className={chipClassName}
            >
              <Linkedin className="h-4 w-4 text-primary" />
              LinkedIn
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className={chipClassName}>
              <FileText className="h-4 w-4 text-primary" />
              View Resume
            </a>
            <a href="/resume.pdf" download="sashant-resume-2026.pdf" className={chipClassName}>
              <Download className="h-4 w-4 text-primary" />
              Download Resume
            </a>
          </div>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Goa, India · Available worldwide · Open to freelance & full-time
        </p>
      </div>
    </section>
  );
}
