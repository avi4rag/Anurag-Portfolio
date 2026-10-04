"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function AboutTeaser() {
  return (
    <section
      className="section-padding"
      style={{ background: "var(--bg-primary)" }}
      aria-labelledby="about-teaser-heading"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <SectionReveal direction="left">
            <div className="relative">
              <div
                className="relative w-full aspect-square max-w-sm mx-auto rounded-[var(--radius-xl)] overflow-hidden"
                style={{
                  border: "3px solid var(--border-light)",
                  boxShadow: "var(--shadow-lg)",
                }}
              >
                <Image
                  src="/images/portrait.jpg"
                  alt="Anurag — Full-Stack Developer based in Jaipur, India"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
              </div>
              {/* Floating accent badge */}
              <div
                className="absolute -bottom-4 -right-4 px-5 py-3 rounded-[var(--radius-lg)] shadow-lg"
                style={{
                  background: "var(--accent-yellow-soft)",
                  border: "2px solid var(--accent-yellow)",
                }}
                aria-hidden="true"
              >
                <p className="text-xs font-semibold" style={{ color: "var(--text-primary)" }}>
                  CGPA 9.24 / 10
                </p>
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  JECRC University
                </p>
              </div>
            </div>
          </SectionReveal>

          {/* Text */}
          <SectionReveal direction="right">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--text-muted)" }}
            >
              About me
            </p>
            <h2
              id="about-teaser-heading"
              className="section-heading mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Building real systems,{" "}
              <span style={{ color: "var(--accent-primary)" }}>
                one commit at a time.
              </span>
            </h2>
            <p
              className="text-base mb-4 leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              I&apos;m a Full-Stack Developer and Software Product Engineering student at
              JECRC University (Kalvium program), Jaipur. I&apos;ve designed and deployed
              3 production web applications spanning React, Node.js, Express, MongoDB,
              PostgreSQL, and Prisma — verified by 158+ automated tests, Docker
              containerization, and real-time WebSocket architecture.
            </p>
            <p
              className="text-base mb-8 leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Outside of shipping code, I&apos;ve co-authored 2 peer-reviewed papers on
              LLM prompt-injection guardrails. Currently looking for a Full-Stack Software
              Engineering internship.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["React", "Node.js", "TypeScript", "PostgreSQL", "Docker", "Gemini API"].map(
                (skill) => (
                  <span key={skill} className="tag-pill">
                    {skill}
                  </span>
                )
              )}
            </div>

            <Link href="/about" className="btn-primary">
              Full story <ArrowUpRight size={16} />
            </Link>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
