"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";
import { ProjectCard } from "@/components/ui/ProjectCard";

const projects = [
  {
    slug: "geomonitor",
    title: "GeoMonitor",
    imageSrc: "/project/GeoMonitor_ Image.png",
    description:
      "AI-powered geopolitical intelligence platform turning live news into structured, cross-domain risk analysis",
    tags: ["React", "Node.js", "PostgreSQL", "Docker", "Gemini API"],
    accentColor: "var(--accent-yellow)",
  },
  {
    slug: "studyshield",
    title: "StudyShield",
    imageSrc: "/project/StudyShield.png",
    description:
      "Student early-warning dashboard that flags at-risk students from quiz and login activity",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Auth.js"],
    accentColor: "var(--accent-blue)",
  },
  {
    slug: "orbit",
    title: "Orbit",
    imageSrc: "/project/Orbit.png",
    description:
      "Goal-manifestation app with on-device binaural audio and AI-guided affirmations",
    tags: ["React", "Node.js", "MongoDB", "Web Audio API"],
    accentColor: "var(--accent-pink)",
  },
  {
    slug: "divya-setu",
    title: "Divya Setu",
    imageSrc: "/project/Divya Setu.png",
    description:
      "Smart darshan queue & crowd-management system for Somnath Temple, built at Smart India Hackathon",
    tags: ["React", "TypeScript", "Supabase"],
    accentColor: "var(--accent-mint)",
  },
];

export function WorkSection() {
  return (
    <section
      id="work"
      className="section-padding"
      style={{ background: "var(--bg-primary)" }}
      aria-labelledby="work-heading"
    >
      <div className="container-custom">
        <SectionReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--text-muted)" }}
              >
                Selected work
              </p>
              <h2
                id="work-heading"
                className="section-heading"
                style={{ color: "var(--text-primary)" }}
              >
                Things I&apos;ve{" "}
                <span style={{ color: "var(--accent-primary)" }}>shipped</span>
              </h2>
            </div>
            <p
              className="text-sm max-w-xs text-right hidden sm:block"
              style={{ color: "var(--text-muted)" }}
            >
              4 production projects — each a full case study
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <SectionReveal key={project.slug} delay={index * 0.1}>
              <ProjectCard {...project} index={index} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
