import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Mail, Phone, ArrowUpRight, MapPin } from "lucide-react";
import { Linkedin, Github, Twitter } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Contact — Anurag | Full-Stack Developer",
  description:
    "Get in touch with Anurag. Full-Stack Developer based in Jaipur, India. Open for software engineering internships and collaborative projects.",
};

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "avi4rag@gmail.com",
    href: "mailto:avi4rag@gmail.com",
    description: "Best way to reach me for opportunities or collaborations.",
    action: "Send email",
    accent: "var(--accent-yellow-soft)",
  },
  
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/avi4rag",
    href: "https://www.linkedin.com/in/avi4rag/",
    description: "Connect with me professionally and view my experience.",
    action: "Connect",
    accent: "var(--accent-pink-soft)",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/avi4rag",
    href: "https://github.com/avi4rag",
    description: "Explore my open-source repositories and commit activity.",
    action: "View profile",
    accent: "var(--accent-peach-soft)",
  },
  {
    icon: Twitter,
    label: "X / Twitter",
    value: "@Avi4rag",
    href: "https://x.com/Avi4rag",
    description: "Casual thoughts on tech, building, and learning.",
    action: "Follow",
    accent: "var(--accent-mint)",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        {/* Header */}
        <div
          className="pt-32 pb-16 relative overflow-hidden"
          style={{ background: "var(--accent-yellow-soft)" }}
          aria-label="Contact page header"
        >
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-30 blur-3xl pointer-events-none"
            style={{
              background: "var(--accent-yellow)",
              transform: "translate(30%,-30%)",
            }}
            aria-hidden="true"
          />
          <div className="container-custom relative z-10">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--text-muted)" }}
            >
              Get in touch
            </p>
            <h1
              className="display-text mb-6"
              style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
            >
              Let&apos;s talk 👋
            </h1>
            <p
              className="text-xl font-medium max-w-2xl"
              style={{ color: "var(--text-secondary)" }}
            >
              Open to Full-Stack Software Engineering internships, technical
              collaborations, and conversations about systems and AI.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <section
          className="section-padding"
          style={{ background: "var(--bg-primary)" }}
          aria-labelledby="contact-options-heading"
        >
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              {/* Left Column: Info card */}
              <SectionReveal direction="left">
                <div
                  className="card-base p-8 space-y-6"
                  style={{ background: "var(--bg-card)" }}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-block w-2.5 h-2.5 rounded-full animate-pulse"
                      style={{ background: "var(--accent-mint)" }}
                      aria-hidden="true"
                    />
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Available for internships
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin
                      size={20}
                      className="flex-shrink-0 mt-1"
                      style={{ color: "var(--accent-primary)" }}
                      aria-hidden="true"
                    />
                    <div>
                      <p
                        className="text-sm font-bold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        Location
                      </p>
                      <p
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        Jaipur, Rajasthan, India
                      </p>
                    </div>
                  </div>

                  <hr style={{ borderColor: "var(--border-light)" }} />

                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-wider mb-2"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Education
                    </p>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      B.Tech, Computer Science
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      JECRC University (Kalvium) · CGPA: 9.24
                    </p>
                  </div>

                  <hr style={{ borderColor: "var(--border-light)" }} />

                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-wider mb-2"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Response Time
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Usually responds within 24 hours on email &amp; LinkedIn.
                    </p>
                  </div>
                </div>
              </SectionReveal>

              {/* Right Column: Contact methods grid */}
              <div className="lg:col-span-2 space-y-4">
                <SectionReveal>
                  <h2
                    id="contact-options-heading"
                    className="font-display text-2xl md:text-3xl font-semibold mb-6"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Direct Channels
                  </h2>
                </SectionReveal>

                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  const isExternal = method.href.startsWith("http");
                  return (
                    <SectionReveal key={method.label} delay={index * 0.08}>
                      <a
                        href={method.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="card-base p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group no-underline block hover:translate-y-[-2px] transition-all"
                        style={{
                          background: "var(--bg-card)",
                          borderLeft: `4px solid ${method.accent}`,
                        }}
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{ background: method.accent }}
                          >
                            <Icon
                              size={22}
                              style={{ color: "var(--text-primary)" }}
                            />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <p
                                className="font-semibold text-base"
                                style={{ color: "var(--text-primary)" }}
                              >
                                {method.label}
                              </p>
                              <span
                                className="text-xs px-2 py-0.5 rounded-full"
                                style={{
                                  background: "var(--bg-secondary)",
                                  color: "var(--text-muted)",
                                }}
                              >
                                {method.value}
                              </span>
                            </div>
                            <p
                              className="text-xs mt-1"
                              style={{ color: "var(--text-secondary)" }}
                            >
                              {method.description}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-1 text-sm font-semibold flex-shrink-0 group-hover:translate-x-1 transition-transform" style={{ color: "var(--accent-primary)" }}>
                          <span>{method.action}</span>
                          <ArrowUpRight size={16} />
                        </div>
                      </a>
                    </SectionReveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
