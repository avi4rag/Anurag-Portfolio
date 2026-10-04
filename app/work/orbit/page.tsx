import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CaseStudyHeader } from "@/components/ui/CaseStudyHeader";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { CheckCircle2, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Orbit — Case Study | Anurag",
  description:
    "Goal-manifestation app with on-device binaural audio and AI-guided affirmations. Built with React, Node.js, MongoDB, and Web Audio API.",
};

const keyFeatures = [
  "Client-side audio synthesis engine with live frequency tuning via the Web Audio, Web Speech, and MediaSession APIs",
  "ARIA-compliant UI controls",
  "Rule-based filter against unrealistic goal inputs",
];

const LIVE_URL = "https://orbit-self-eight.vercel.app/";

export default function OrbitPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <CaseStudyHeader
          title="Orbit"
          tagline="Goal-manifestation app with on-device binaural audio and AI-guided affirmations"
          role="Solo Developer"
          stack="React, TypeScript, Node.js, Express, MongoDB, JWT, Web Audio API, Web Speech API, MediaSession API"
          status="Live"
          liveUrl={LIVE_URL}
          githubUrl="https://github.com/avi4rag/Orbit"
          accentColor="var(--accent-pink)"
        />

        <div className="section-padding" style={{ background: "var(--bg-primary)" }}>
          <div className="container-custom max-w-3xl">
            <SectionReveal>
              <section className="mb-16" aria-labelledby="problem-heading">
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>Problem</p>
                <h2 id="problem-heading" className="font-display text-3xl font-semibold mb-5" style={{ color: "var(--text-primary)" }}>The challenge</h2>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  Building a consistent mindfulness/manifestation habit is hard without a
                  guided, low-friction tool.
                </p>
              </section>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <section className="mb-16" aria-labelledby="approach-heading">
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>Approach & Architecture</p>
                <h2 id="approach-heading" className="font-display text-3xl font-semibold mb-5" style={{ color: "var(--text-primary)" }}>How I built it</h2>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  Developed an on-device goal-manifestation app with JWT-secured accounts,
                  binaural audio generation, and AI-guided daily affirmations.
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
                      <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" style={{ color: "var(--accent-pink)" }} aria-hidden="true" />
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{feature}</p>
                    </li>
                  ))}
                </ul>
              </section>
            </SectionReveal>

            {/* Live preview section */}
            <SectionReveal delay={0.2}>
              <section className="mb-16" aria-labelledby="demo-heading">
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>Live Preview</p>
                <h2 id="demo-heading" className="font-display text-3xl font-semibold mb-6" style={{ color: "var(--text-primary)" }}>Try it yourself</h2>

                {/* Browser chrome mockup with iframe */}
                <div
                  className="rounded-[var(--radius-xl)] overflow-hidden shadow-xl"
                  style={{ border: "2px solid var(--border-light)" }}
                >
                  {/* Browser chrome bar */}
                  <div
                    className="flex items-center gap-2 px-4 py-3"
                    style={{ background: "var(--bg-secondary)", borderBottom: "1px solid var(--border-light)" }}
                    aria-hidden="true"
                  >
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
                      <div className="w-3 h-3 rounded-full" style={{ background: "#FFBD2E" }} />
                      <div className="w-3 h-3 rounded-full" style={{ background: "#28C840" }} />
                    </div>
                    <div
                      className="flex-1 mx-3 px-3 py-1.5 rounded-full text-xs text-center"
                      style={{ background: "var(--bg-primary)", border: "1px solid var(--border-light)", color: "var(--text-muted)" }}
                    >
                      orbit-self-eight.vercel.app
                    </div>
                  </div>

                  {/* Iframe — with fallback */}
                  <div className="relative" style={{ height: "500px" }}>
                    <iframe
                      src={LIVE_URL}
                      title="Orbit app live preview"
                      className="w-full h-full border-0"
                      loading="lazy"
                      sandbox="allow-scripts allow-same-origin allow-forms"
                    />
                    {/* Fallback overlay — shown only if iframe blocked */}
                    <noscript>
                      <div
                        className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                        style={{ background: "var(--bg-secondary)" }}
                      >
                        <p className="text-base font-medium" style={{ color: "var(--text-secondary)" }}>
                          Preview unavailable — open the live app instead.
                        </p>
                        <a
                          href={LIVE_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary"
                        >
                          <ExternalLink size={16} />
                          Open Live Demo
                        </a>
                      </div>
                    </noscript>
                  </div>
                </div>
              </section>
            </SectionReveal>

            <SectionReveal delay={0.25}>
              <section aria-labelledby="outcome-heading">
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>Outcome</p>
                <h2 id="outcome-heading" className="font-display text-3xl font-semibold mb-5" style={{ color: "var(--text-primary)" }}>Result</h2>
                <div className="p-6 rounded-[var(--radius-lg)]" style={{ background: "var(--accent-pink-soft)", border: "1px solid var(--accent-pink)" }}>
                  <p className="text-base leading-relaxed" style={{ color: "var(--text-primary)" }}>
                    A live, production-deployed mindfulness platform with a client-side
                    audio synthesis engine, ARIA-compliant controls, and JWT-secured
                    accounts — demonstrating command of browser-native APIs and full-stack
                    architecture.
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
