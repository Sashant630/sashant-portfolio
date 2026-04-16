export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
        <span>© {new Date().getFullYear()} Sashant Vishwakarma. All rights reserved.</span>
        <span>Built with React, TanStack & Lovable.</span>
      </div>
    </footer>
  );
}
