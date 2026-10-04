import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CaseStudyHeader } from "@/components/ui/CaseStudyHeader";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "StudyShield — Case Study | Anurag",
  description:
    "Student early-warning dashboard that flags at-risk students from quiz and login activity. Built with Next.js, Prisma, PostgreSQL, and Auth.js.",
};

const keyFeatures = [
  "Explainable 0–100 student risk score from quiz completion and login inactivity, categorizing each student as Healthy, Medium, or High risk",
  "Role-gated API access — 401 unauthenticated, 403 unauthorized, 200 for educator/admin — returning verified error states instead of fake empty data on failure",
  "Interactive educator dashboard for cohort risk analysis, student search, and outreach",
];

export default function StudyShieldPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <CaseStudyHeader
          title="StudyShield"
          tagline="Student early-warning dashboard that flags at-risk students from quiz and login activity"
          role="Core Contributor"
          team="Team of 3"
          stack="Next.js (App Router), TypeScript, Prisma, PostgreSQL, Auth.js, Google OAuth 2.0, Neon, Tailwind CSS"
          status="Live"
          liveUrl="https://sw-2627-next-js-study-shield.vercel.app/dashboard"
          githubUrl="https://github.com/kalviumcommunity/SW2627-Next.js-StudyShield"
          accentColor="var(--accent-blue)"
        />

        <div className="section-padding" style={{ background: "var(--bg-primary)" }}>
          <div className="container-custom max-w-3xl">
            <SectionReveal>
              <section className="mb-16" aria-labelledby="problem-heading">
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>Problem</p>
                <h2 id="problem-heading" className="font-display text-3xl font-semibold mb-5" style={{ color: "var(--text-primary)" }}>The challenge</h2>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  Educators often don&apos;t notice a struggling student until it&apos;s too
                  late — there&apos;s no early, data-driven signal.
                </p>
              </section>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <section className="mb-16" aria-labelledby="approach-heading">
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>Approach & Architecture</p>
                <h2 id="approach-heading" className="font-display text-3xl font-semibold mb-5" style={{ color: "var(--text-primary)" }}>How we built it</h2>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  Architected a student-retention early-warning platform for educators using
                  Next.js App Router, Prisma, and PostgreSQL, with role-aware Auth.js
                  sessions supporting both Google OAuth and email/password sign-in.
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
                      <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" style={{ color: "var(--accent-blue)" }} aria-hidden="true" />
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{feature}</p>
                    </li>
                  ))}
                </ul>
              </section>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <section aria-labelledby="outcome-heading">
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>Outcome</p>
                <h2 id="outcome-heading" className="font-display text-3xl font-semibold mb-5" style={{ color: "var(--text-primary)" }}>Result</h2>
                <div className="p-6 rounded-[var(--radius-lg)]" style={{ background: "var(--accent-blue-soft)", border: "1px solid var(--accent-blue)" }}>
                  <p className="text-base leading-relaxed" style={{ color: "var(--text-primary)" }}>
                    A production-deployed student retention platform with role-gated API
                    security, explainable risk scoring, and an interactive educator dashboard
                    — enabling data-driven early intervention before students fall behind.
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
