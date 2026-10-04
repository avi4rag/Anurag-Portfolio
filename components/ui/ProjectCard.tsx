"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  slug: string;
  title: string;
  imageSrc: string;
  description: string;
  tags: string[];
  accentColor?: string;
  index?: number;
}

const TAG_COLORS = [
  { bg: "var(--accent-yellow-soft)", color: "var(--text-primary)" },
  { bg: "var(--accent-blue-soft)", color: "var(--text-primary)" },
  { bg: "var(--accent-pink-soft)", color: "var(--text-primary)" },
  { bg: "var(--accent-peach-soft)", color: "var(--text-primary)" },
];

export function ProjectCard({
  slug,
  title,
  imageSrc,
  description,
  tags,
  accentColor = "var(--accent-yellow-soft)",
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] as const }}
      className="group h-full"
    >
      <Link
        href={`/work/${slug}`}
        className="card-base flex flex-col h-full p-0 overflow-hidden no-underline block"
        aria-label={`View ${title} case study`}
      >
        {/* Color accent bar */}
        <div
          className="h-1.5 w-full"
          style={{ background: accentColor }}
          aria-hidden="true"
        />

        {/* Card top — decorative area */}
        <div
          className="relative h-44 flex items-center justify-center overflow-hidden"
          style={{ background: accentColor + "80" }}
        >
          <img
            src={imageSrc}
            alt={`${title} project preview`}
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="lazy"
            decoding="async"
          />
          {/* Project number */}
          <span
            className="relative z-10 font-display font-700 text-6xl opacity-10 select-none"
            style={{ color: "var(--text-primary)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Card content */}
        <div className="flex flex-col flex-1 p-6 gap-4">
          <div className="flex items-start justify-between gap-2">
            <h3
              className="font-display text-xl font-semibold leading-tight"
              style={{ color: "var(--text-primary)" }}
            >
              {title}
            </h3>
            <span
              className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 group-hover:bg-[var(--text-primary)] group-hover:text-[var(--text-inverse)]"
              style={{
                background: "var(--bg-secondary)",
                color: "var(--text-muted)",
              }}
              aria-hidden="true"
            >
              <ArrowUpRight size={14} />
            </span>
          </div>

          <p
            className="text-sm leading-relaxed flex-1"
            style={{ color: "var(--text-secondary)" }}
          >
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
            {tags.map((tag, i) => {
              const colorSet = TAG_COLORS[i % TAG_COLORS.length];
              return (
                <span
                  key={tag}
                  className="tag-pill"
                  style={{
                    background: colorSet.bg,
                    color: colorSet.color,
                    border: "none",
                  }}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
