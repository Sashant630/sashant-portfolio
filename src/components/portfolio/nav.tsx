export function Nav() {
  return (
    <nav className="fixed left-1/2 top-6 z-50 -translate-x-1/2 rounded-full border border-border bg-surface/80 px-2 py-2 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <span className="ml-3 mr-2 flex items-center gap-2 text-sm font-semibold">
          <span className="inline-block h-2 w-2 rounded-full bg-primary" />
          Sashant.in
        </span>
        <a
          href="#contact"
          className="rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground transition hover:opacity-90"
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
}
