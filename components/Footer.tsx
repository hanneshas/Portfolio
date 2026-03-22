export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-[var(--color-text-dim)]">
          © 2025 Hannes · Built with Next.js
        </p>
        <div className="flex gap-6">
          <a
            href="#work"
            className="font-mono text-xs text-[var(--color-text-dim)] hover:text-[var(--color-accent)] transition-colors"
          >
            Work
          </a>
          <a
            href="#about"
            className="font-mono text-xs text-[var(--color-text-dim)] hover:text-[var(--color-accent)] transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="font-mono text-xs text-[var(--color-text-dim)] hover:text-[var(--color-accent)] transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
