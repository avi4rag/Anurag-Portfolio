import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CaseStudyHeader } from "@/components/ui/CaseStudyHeader";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "GeoMonitor — Case Study | Anurag",
  description:
    "AI-powered geopolitical intelligence platform turning live news into structured, cross-domain risk analysis. Built with React, Node.js, PostgreSQL, Docker, and Gemini API.",
};

const keyFeatures = [
  "Scheduled news ingestion every 2 hours, verified by 158 automated tests across 8 test suites",
  "12-concept engineering suite shipped in one release: Prisma/PostgreSQL with 1NF–3NF normalization and ACID transactions, a Redis cache-aside layer, Socket.IO real-time broadcasts, Multer file uploads, and SQL/NoSQL/XSS input sanitization — backed by a dedicated 10/10 test suite",
  "Containerized with multi-stage Docker builds and Docker Compose across Postgres, Redis, and MongoDB services",
  "Shipped via GitHub Actions CI across 37 commits",
];

export default function GeoMonitorPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <CaseStudyHeader
          title="GeoMonitor"
          tagline="AI-powered geopolitical intelligence platform turning live news into structured, cross-domain risk analysis"
          role="Solo Developer"
          stack="React, Vite, Tailwind CSS, Node.js, Express, MongoDB Atlas, Prisma, PostgreSQL, Docker, Redis, Socket.IO, Gemini API, JWT"
          status="Live"
          liveUrl="https://geopolitical-moniter.vercel.app/"
          githubUrl="https://github.com/avi4rag/Geopolitical-Moniter"
          accentColor="var(--accent-yellow)"
        />

        <div
          className="section-padding"
          style={{ background: "var(--bg-primary)" }}
        >
          <div className="container-custom max-w-3xl">
            {/* Problem */}
            <SectionReveal>
              <section className="mb-16" aria-labelledby="problem-heading">
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "var(--text-muted)" }}
                >
                  Problem
                </p>
                <h2
                  id="problem-heading"
                  className="font-display text-3xl font-semibold mb-5"
                  style={{ color: "var(--text-primary)" }}
                >
                  The challenge
                </h2>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Global news is scattered and unstructured — there&apos;s no single place
                  to see what happened, who&apos;s affected, and which sectors face risk or
                  opportunity.
                </p>
              </section>
            </SectionReveal>

            {/* Approach */}
            <SectionReveal delay={0.1}>
              <section className="mb-16" aria-labelledby="approach-heading">
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "var(--text-muted)" }}
                >
                  Approach & Architecture
                </p>
                <h2
                  id="approach-heading"
                  className="font-display text-3xl font-semibold mb-5"
                  style={{ color: "var(--text-primary)" }}
                >
                  How I built it
                </h2>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Built a full-stack intelligence platform ingesting real-time news from
                  The Guardian, NewsAPI, Reuters, and AP, using Gemini-based extraction to
                  compute deterministic cross-domain impacts across 13 economic and
                  strategic domains. Engineered a swappable Gemini/OpenAI provider layer
                  with Zod-validated LLM output and multi-source credibility scoring.
                </p>
              </section>
            </SectionReveal>

            {/* Key Features */}
            <SectionReveal delay={0.15}>
              <section className="mb-16" aria-labelledby="features-heading">
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "var(--text-muted)" }}
                >
                  Key Features
                </p>
                <h2
                  id="features-heading"
                  className="font-display text-3xl font-semibold mb-6"
                  style={{ color: "var(--text-primary)" }}
                >
                  What ships
                </h2>
                <ul className="space-y-4 list-none m-0 p-0">
                  {keyFeatures.map((feature, i) => (
                    <li
                      key={i}
                      className="flex gap-3 p-4 rounded-[var(--radius-md)]"
                      style={{
                        background: "var(--bg-secondary)",
                        border: "1px solid var(--border-light)",
                      }}
                    >
                      <CheckCircle2
                        size={18}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: "var(--accent-primary)" }}
                        aria-hidden="true"
                      />
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {feature}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            </SectionReveal>

            {/* Outcome */}
            <SectionReveal delay={0.2}>
              <section aria-labelledby="outcome-heading">
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "var(--text-muted)" }}
                >
                  Outcome
                </p>
                <h2
                  id="outcome-heading"
                  className="font-display text-3xl font-semibold mb-5"
                  style={{ color: "var(--text-primary)" }}
                >
                  Result
                </h2>
                <div
                  className="p-6 rounded-[var(--radius-lg)]"
                  style={{
                    background: "var(--accent-yellow-soft)",
                    border: "1px solid var(--accent-yellow)",
                  }}
                >
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "var(--text-primary)" }}
                  >
                    A fully deployed, production-grade intelligence platform with 158
                    automated tests across 8 suites, 37 commits through GitHub Actions CI,
                    and a 12-concept engineering suite demonstrating mastery of full-stack
                    architecture from ACID transactions to real-time WebSocket broadcasts.
                  </p>
                </div>
              </section>
            </SectionReveal>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
