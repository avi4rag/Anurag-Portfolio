interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

const AVATAR_COLORS = [
  { bg: "var(--accent-yellow-soft)", border: "var(--accent-yellow)", text: "var(--text-primary)" },
  { bg: "var(--accent-blue-soft)", border: "var(--accent-blue)", text: "var(--text-primary)" },
  { bg: "var(--accent-pink-soft)", border: "var(--accent-pink)", text: "var(--text-primary)" },
  { bg: "var(--accent-peach-soft)", border: "var(--accent-peach)", text: "var(--text-primary)" },
  { bg: "var(--accent-yellow-soft)", border: "var(--accent-yellow)", text: "var(--text-primary)" },
  { bg: "var(--accent-blue-soft)", border: "var(--accent-blue)", text: "var(--text-primary)" },
];

let colorIndex = 0;

export function TestimonialCard({ name, role, quote }: TestimonialCardProps) {
  const initials = getInitials(name);
  const colors = AVATAR_COLORS[colorIndex++ % AVATAR_COLORS.length];

  return (
    <div
      className="card-base flex flex-col gap-5 p-6 h-full"
      style={{ minHeight: "220px" }}
    >
      {/* Quote mark */}
      <span
        className="font-display text-4xl leading-none select-none"
        style={{ color: "var(--accent-primary)", opacity: 0.6 }}
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Quote text */}
      <blockquote
        className="text-sm leading-relaxed flex-1"
        style={{ color: "var(--text-secondary)" }}
      >
        {quote}
      </blockquote>

      {/* Author */}
      <footer className="flex items-center gap-3 mt-auto">
        {/* Initials avatar */}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold border-2"
          style={{
            background: colors.bg,
            borderColor: colors.border,
            color: colors.text,
          }}
          aria-label={`${name}'s avatar`}
        >
          {initials}
        </div>
        <div>
          <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
            {name}
          </p>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            {role}
          </p>
        </div>
      </footer>
    </div>
  );
}
