import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CaseStudyHeader } from "@/components/ui/CaseStudyHeader";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Divya Setu — Case Study | Anurag",
  description:
    "Smart darshan queue & crowd-management system for Somnath Temple, built at Smart India Hackathon 2025.",
};

const keyFeatures = [
  "Analytics dashboard for crowd density and footfall",
  "7-language support",
  "Role-based access across temple staff and admin roles",
];

export default function DivyaSetuPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        {/* Note: No GitHub button on this page — repo not public */}
        <CaseStudyHeader
          title="Divya Setu"
          tagline="Smart darshan queue & crowd-management system for Somnath Temple, built at Smart India Hackathon"
          role="Core Developer, Smart India Hackathon 2025 (collaborative team)"
          stack="React, TypeScript, Supabase (PostgreSQL), TanStack Query"
          status="Hackathon build — Live demo"
          liveUrl="https://projectsomnath.netlify.app/"
          /* githubUrl intentionally omitted — repo not public */
          accentColor="var(--accent-mint)"
        />

        <div className="section-padding" style={{ background: "var(--bg-primary)" }}>
          <div className="container-custom max-w-3xl">
            <SectionReveal>
              <section className="mb-16" aria-labelledby="problem-heading">
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>Problem</p>
                <h2 id="problem-heading" className="font-display text-3xl font-semibold mb-5" style={{ color: "var(--text-primary)" }}>The challenge</h2>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  Somnath Temple deals with heavy, unpredictable crowds for darshan — long
                  queues and no visibility for staff into wait times or bottlenecks.
                </p>
              </section>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <section className="mb-16" aria-labelledby="approach-heading">
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>Approach & Architecture</p>
                <h2 id="approach-heading" className="font-display text-3xl font-semibold mb-5" style={{ color: "var(--text-primary)" }}>How we built it</h2>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  Spearheaded Divya Setu, a smart darshan queue and crowd-management
                  system, as part of a collaborative hackathon team.
                </p>
              </section>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <section className="mb-16" aria-labelledby="features-heading">
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>Key Features</p>
                <h2 id="features-heading" className="font-display text-3xl font-semibold mb-6" style={{ color: "var(--text-primary)" }}>What ships</h2>
                <ul className="space-y-4 list-none m-0 p-0">
                  {keyFeatures.map((feature, i) => (
                    <li key={i} className="flex gap-3 p-4 rounded-[var(--radius-md)]" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-light)" }}>
                      <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" style={{ color: "var(--accent-mint)" }} aria-hidden="true" />
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{feature}</p>
                    </li>
                  ))}
                </ul>
              </section>
            </SectionReveal>

            {/* Context badge */}
            <SectionReveal delay={0.18}>
              <div
                className="flex items-start gap-3 p-5 rounded-[var(--radius-lg)] mb-16"
                style={{
                  background: "var(--accent-yellow-soft)",
                  border: "1px solid var(--accent-yellow)",
                }}
              >
                <span className="text-xl" aria-hidden="true">🏆</span>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                    Smart India Hackathon 2025
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    Built collaboratively under hackathon conditions. The GitHub repository
                    is not public; a live demo is available via the button above.
                  </p>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <section aria-labelledby="outcome-heading">
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>Outcome</p>
                <h2 id="outcome-heading" className="font-display text-3xl font-semibold mb-5" style={{ color: "var(--text-primary)" }}>Result</h2>
                <div className="p-6 rounded-[var(--radius-lg)]" style={{ background: "#a8d8b920", border: "1px solid var(--accent-mint)" }}>
                  <p className="text-base leading-relaxed" style={{ color: "var(--text-primary)" }}>
                    A deployed crowd-management system with multi-language support,
                    role-based access, and a real-time analytics dashboard — built and
                    presented within hackathon timeframes at Smart India Hackathon 2025.
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
