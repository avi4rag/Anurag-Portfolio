export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-5 focus:py-2.5 focus:rounded-full focus:bg-[var(--text-primary)] focus:text-[var(--text-inverse)] focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] text-sm font-semibold transition-all duration-200"
    >
      Skip to main content
    </a>
  );
}
