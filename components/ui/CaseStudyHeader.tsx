import { ExternalLink, Github } from "lucide-react";

interface CaseStudyHeaderProps {
  title: string;
  tagline: string;
  role: string;
  team?: string;
  stack: string;
  status: string;
  liveUrl?: string;
  githubUrl?: string;
  accentColor?: string;
}

export function CaseStudyHeader({
  title,
  tagline,
  role,
  team,
  stack,
  status,
  liveUrl,
  githubUrl,
  accentColor = "var(--accent-yellow-soft)",
}: CaseStudyHeaderProps) {
  const quickFacts = [
    { label: "Role", value: role },
    ...(team ? [{ label: "Team", value: team }] : []),
    { label: "Status", value: status },
  ];

  return (
    <div
      className="relative pt-32 pb-16 overflow-hidden"
      style={{ background: `${accentColor}60` }}
    >
      {/* Decorative blob */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: accentColor, transform: "translate(30%, -30%)" }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        {/* Back link */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium mb-8 hover:opacity-70 transition-opacity"
          style={{ color: "var(--text-muted)" }}
        >
          ← Back to work
        </a>

        <div className="max-w-3xl">
          <h1
            className="display-text mb-4"
            style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
          >
            {title}
          </h1>
          <p
            className="text-xl font-medium mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            {tagline}
          </p>

          {/* Quick facts row */}
          <div className="flex flex-wrap gap-6 mb-8">
            {quickFacts.map(({ label, value }) => (
              <div key={label}>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  {label}
                </p>
                <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  {value}
                </p>
              </div>
            ))}
          </div>

          {/* Stack */}
          <div className="mb-8">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--text-muted)" }}
            >
              Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {stack.split(",").map((tech) => (
                <span key={tech.trim()} className="tag-pill">
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                aria-label={`View live demo of ${title}`}
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                aria-label={`View ${title} source code on GitHub`}
              >
                <Github size={16} />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
