import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Anurag | Full-Stack Developer",
  description:
    "Full-Stack Developer and Software Product Engineering student at JECRC University (Kalvium). 3 production apps, 158+ automated tests, 2 research papers on LLM guardrails.",
};

const skillGroups = [
  {
    label: "Languages",
    skills: ["Java", "Python", "SQL", "JavaScript (ES6+)", "TypeScript"],
    color: "var(--accent-yellow-soft)",
  },
  {
    label: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "React Router",
      "TanStack Query",
      "Recharts",
      "i18next",
    ],
    color: "var(--accent-blue-soft)",
  },
  {
    label: "Backend & APIs",
    skills: [
      "Node.js",
      "Express.js",
      "REST API Development",
      "JWT Authentication",
      "Google OAuth 2.0",
      "Socket.IO",
      "Zod",
    ],
    color: "var(--accent-pink-soft)",
  },
  {
    label: "Databases & ORM",
    skills: ["MongoDB (Mongoose)", "PostgreSQL", "Prisma ORM", "Supabase"],
    color: "var(--accent-peach-soft)",
  },
  {
    label: "Concepts",
    skills: [
      "Database Normalization (1NF–3NF)",
      "ACID Transactions",
      "Input Sanitization",
      "Role-Based Access Control (RBAC)",
      "Redis Caching",
      "Real-Time Systems",
    ],
    color: "var(--accent-yellow-soft)",
  },
  {
    label: "Tools & DevOps",
    skills: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "Docker",
      "Docker Compose",
      "Vercel",
      "Vitest",
      "Supertest",
      "Figma",
    ],
    color: "var(--accent-blue-soft)",
  },
  {
    label: "AI & LLMs",
    skills: [
      "Gemini API",
      "OpenAI API",
      "Prompt Engineering",
      "LLM Guardrails",
    ],
    color: "var(--accent-pink-soft)",
  },
];

const education = [
  {
    degree: "B.Tech, Computer Science Engineering — Software Product Engineering (Kalvium)",
    institution: "JECRC University, Jaipur",
    grade: "CGPA(1st Year): 9.24/10.00",
    year: "2025–2029",
  },
  {
    degree: "Class XII",
    institution: "Kids Camp International School",
    year: "2023-2024",
  },
  {
    degree: "Class X",
    institution: "Kendriya Vidyalaya",
    year: "2021-2022",
  },
];

const hobbies = [
  "Football",
  "Table Tennis",
  "Reading & Philosophy",
  "Creative Writing",
  "Cinema",
  "Travelling",
];

const placeholderImages = [
  { seed: "anurag-1", alt: "Placeholder lifestyle photo 1" },
  { seed: "anurag-2", alt: "Placeholder lifestyle photo 2" },
  { seed: "anurag-3", alt: "Placeholder lifestyle photo 3" },
  { seed: "anurag-4", alt: "Placeholder lifestyle photo 4" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        {/* Hero */}
        <div
          className="about-hero pt-32 pb-16 relative overflow-hidden"
          style={{
            background:
              "radial-gradient(circle at 82% 8%, rgba(255, 244, 199, 0.72), transparent 34%), radial-gradient(circle at 8% 82%, rgba(220, 236, 244, 0.34), transparent 42%), linear-gradient(135deg, #faf7f0 0%, #f8f4ea 56%, #f5f4ec 100%)",
          }}
          aria-label="About page header"
        >
          <div
                "radial-gradient(circle at 80% 12%, rgba(246, 230, 163, 0.58), transparent 29%), radial-gradient(circle at 10% 78%, rgba(207, 231, 243, 0.5), transparent 38%), radial-gradient(circle at 58% 67%, rgba(244, 217, 210, 0.2), transparent 31%), radial-gradient(circle at 94% 76%, rgba(221, 233, 220, 0.36), transparent 32%), linear-gradient(135deg, #faf7f0 0%, #f8f5ec 58%, #f6f3ea 100%)",
            style={{ background: "#fff4c7", opacity: 0.18, transform: "translate(30%,-30%)" }}
            aria-hidden="true"
          />
          <div className="about-hero-sun" aria-hidden="true" />
          <div className="about-hero-cloud about-hero-cloud-top" aria-hidden="true" />
          <div className="about-hero-cloud about-hero-cloud-right" aria-hidden="true" />
          <div className="about-hero-doodle about-hero-doodle-left" aria-hidden="true" />
            <div className="about-hero-shape about-hero-shape-cream" aria-hidden="true" />
          <div className="about-hero-doodle about-hero-doodle-right" aria-hidden="true" />
          <div className="about-hero-dot about-hero-dot-blue" aria-hidden="true" />
          <div className="about-hero-dot about-hero-dot-yellow" aria-hidden="true" />
          <div className="about-hero-shape about-hero-shape-blue" aria-hidden="true" />
          <div className="about-hero-shape about-hero-shape-sage" aria-hidden="true" />
          <div className="about-hero-wave" aria-hidden="true" />
          <div className="container-custom relative z-10">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--text-muted)" }}
            >
              About me
            </p>
            <h1
              className="display-text mb-6"
              style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
            >
              Hey again 👋
            </h1>
            <p
              className="text-xl font-medium max-w-2xl"
              style={{ color: "var(--text-secondary)" }}
            >
              Full-Stack Developer. Student. Researcher. Hobbyist.
            </p>
          </div>
        </div>

        {/* Bio + Photo */}
        <section
          className="section-padding"
          style={{ background: "var(--bg-primary)" }}
          aria-labelledby="bio-heading"
        >
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Photo grid */}
              <SectionReveal direction="left">
                <div className="grid grid-cols-2 gap-4">
                  {/* Real portrait — large */}
                  <div
                    className="col-span-2 relative aspect-[4/3] rounded-[var(--radius-xl)] overflow-hidden"
                    style={{ border: "2px solid var(--border-light)" }}
                  >
                    <Image
                      src="/images/portrait.jpg"
                      alt="Anurag — Full-Stack Developer based in Jaipur, India"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 500px"
                      priority
                    />
                  </div>
                  {/* Placeholder lifestyle images */}
                  {placeholderImages.map((img) => (
                    <div
                      key={img.seed}
                      className="relative aspect-square rounded-[var(--radius-lg)] overflow-hidden"
                      style={{ border: "2px solid var(--border-light)" }}
                    >
                      <Image
                        src={`https://picsum.photos/seed/${img.seed}/800/600`}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        sizes="200px"
                      />
                    </div>
                  ))}
                </div>
              </SectionReveal>

              {/* Bio text */}
              <SectionReveal direction="right">
                <h2
                  id="bio-heading"
                  className="font-display text-3xl font-semibold mb-6"
                  style={{ color: "var(--text-primary)" }}
                >
                  The story so far
                </h2>
                <div
                  className="space-y-4 text-base leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <p>
                    I&apos;m a Full-Stack Developer and Software Product Engineering student
                    at JECRC University (Kalvium program), Jaipur. I&apos;ve designed and
                    deployed 3 production web applications — spanning React, Node.js,
                    Express, MongoDB, PostgreSQL, and Prisma — verified by 158+ automated
                    tests, Docker containerization, and real-time WebSocket architecture.
                  </p>
                  <p>
                    I&apos;m proficient in REST API design, JWT/OAuth authentication,
                    database normalization, and LLM-integrated systems. Outside of shipping
                    code, I&apos;ve co-authored 2 peer-reviewed papers on LLM
                    prompt-injection guardrails.
                  </p>
                  <p>
                    Currently looking for a{" "}
                    <strong>Full-Stack Software Engineering internship.</strong>
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="mailto:avi4rag@gmail.com"
                    className="btn-primary"
                    aria-label="Email Anurag"
                  >
                    Get in touch
                  </a>
                  <a
                    href="https://www.linkedin.com/in/avi4rag/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    aria-label="View LinkedIn profile"
                  >
                    LinkedIn
                  </a>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* Education */}
        <section
          className="section-padding"
          style={{ background: "var(--bg-secondary)" }}
          aria-labelledby="education-heading"
        >
          <div className="container-custom">
            <SectionReveal>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--text-muted)" }}
              >
                Education
              </p>
              <h2
                id="education-heading"
                className="section-heading mb-10"
                style={{ color: "var(--text-primary)" }}
              >
                Academic background
              </h2>
            </SectionReveal>

            <div className="space-y-4">
              {education.map((edu, i) => (
                <SectionReveal key={edu.institution} delay={i * 0.1}>
                  <div
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-6 rounded-[var(--radius-lg)]"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border-light)",
                    }}
                  >
                    <div>
                      <p
                        className="font-semibold text-base"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {edu.degree}
                      </p>
                      <p
                        className="text-sm mt-0.5"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {edu.institution}
                      </p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                      <span
                        className="tag-pill font-semibold"
                        style={{
                          background: "var(--accent-yellow-soft)",
                          border: "none",
                        }}
                      >
                        {edu.grade}
                      </span>
                      <span
                        className="text-xs"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {edu.year}
                      </span>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section
          className="section-padding"
          style={{ background: "var(--bg-primary)" }}
          aria-labelledby="skills-heading"
        >
          <div className="container-custom">
            <SectionReveal>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--text-muted)" }}
              >
                Skills
              </p>
              <h2
                id="skills-heading"
                className="section-heading mb-10"
                style={{ color: "var(--text-primary)" }}
              >
                What I work with
              </h2>
            </SectionReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillGroups.map((group, i) => (
                <SectionReveal key={group.label} delay={i * 0.07}>
                  <div
                    className="p-6 rounded-[var(--radius-lg)]"
                    style={{
                      background: group.color + "80",
                      border: "1px solid var(--border-light)",
                    }}
                  >
                    <p
                      className="text-xs font-bold uppercase tracking-widest mb-4"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {group.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="tag-pill"
                          style={{
                            background: "var(--bg-primary)",
                            border: "1px solid var(--border-light)",
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications + Research */}
        <section
          className="section-padding"
          style={{ background: "var(--bg-secondary)" }}
          aria-labelledby="certs-heading"
        >
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Certifications */}
              <SectionReveal direction="left">
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "var(--text-muted)" }}
                >
                  Certifications
                </p>
                <h2
                  id="certs-heading"
                  className="font-display text-3xl font-semibold mb-6"
                  style={{ color: "var(--text-primary)" }}
                >
                  Recognition
                </h2>
                <div
                  className="p-6 rounded-[var(--radius-lg)]"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-light)",
                  }}
                >
                  <p
                    className="font-semibold text-sm mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    DSMD-2.0 Conference Certificate
                  </p>
                  <p
                    className="text-xs mb-1"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    International Conference on Dynamics of Sustainability Management
                    through Digitisation
                  </p>
                  <p
                    className="text-xs mb-4"
                    style={{ color: "var(--text-muted)" }}
                  >
                    JECRC University · March 2026
                  </p>
                  <a
                    href="https://drive.google.com/file/d/1VZFsYRN-vOk0HRO7s_lghXgSAGSa1Vpu/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs"
                    aria-label="View DSMD-2.0 certificate on Google Drive"
                  >
                    <ExternalLink size={13} />
                    View Certificate
                  </a>
                </div>
              </SectionReveal>

              {/* Research */}
              <SectionReveal direction="right">
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "var(--text-muted)" }}
                >
                  Research
                </p>
                <h2
                  className="font-display text-3xl font-semibold mb-6"
                  style={{ color: "var(--text-primary)" }}
                >
                  Published papers
                </h2>
                <div className="space-y-4">
                  {[
                    "Understanding the Limitations of AI Guardrails: Behavioral Analysis of Prompt Injection Attacks in Large Language Models",
                    "Evaluating the Effectiveness of AI Guardrails Against Prompt Injection Attacks in Large Language Models",
                  ].map((paper, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-[var(--radius-md)]"
                      style={{
                        background: "var(--bg-card)",
                        border: "1px solid var(--border-light)",
                      }}
                    >
                      <p
                        className="text-sm font-medium mb-2 leading-relaxed"
                        style={{ color: "var(--text-primary)" }}
                      >
                        &ldquo;{paper}&rdquo;
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: "var(--text-muted)" }}
                      >
                        DSMD-2.0, JECRC University · March 2026
                      </p>
                    </div>
                  ))}
                  <a
                    href="https://drive.google.com/drive/folders/1CbNV0nQWIbsFqddXbwuEdIgIz1-gJ13Q?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs inline-flex"
                    aria-label="View research papers folder on Google Drive"
                  >
                    <ExternalLink size={13} />
                    View Research Folder
                  </a>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* Currently strip */}
        <section
          className="section-padding"
          style={{ background: "var(--bg-primary)" }}
          aria-labelledby="currently-heading"
        >
          <div className="container-custom">
            <SectionReveal>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--text-muted)" }}
              >
                Currently
              </p>
              <h2
                id="currently-heading"
                className="section-heading mb-10"
                style={{ color: "var(--text-primary)" }}
              >
                What&apos;s on
              </h2>
            </SectionReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Currently listening */}
              <SectionReveal delay={0}>
                <div
                  className="p-6 rounded-[var(--radius-lg)] h-full"
                  style={{
                    background: "var(--accent-pink-soft)",
                    border: "1px solid var(--accent-pink)",
                  }}
                >
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-3"
                    style={{ color: "var(--text-muted)" }}
                  >
                    🎵 Currently listening
                  </p>
                  <p
                    className="text-sm font-medium italic"
                    style={{
                      color: "var(--text-muted)",
                      border: "1px dashed var(--border-medium)",
                      padding: "12px",
                      borderRadius: "var(--radius-md)",
                    }}
                  >
                    Add your favorite track here
                  </p>
                  <p
                    className="text-xs mt-2"
                    style={{ color: "var(--text-muted)" }}
                  >
                    — editable placeholder
                  </p>
                </div>
              </SectionReveal>

              {/* Currently playing — Orbit */}
              <SectionReveal delay={0.1}>
                <div
                  className="p-6 rounded-[var(--radius-lg)] h-full"
                  style={{
                    background: "var(--accent-blue-soft)",
                    border: "1px solid var(--accent-blue)",
                  }}
                >
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-3"
                    style={{ color: "var(--text-muted)" }}
                  >
                    🎮 Currently playing
                  </p>
                  <p
                    className="font-semibold text-sm mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Orbit
                  </p>
                  <p
                    className="text-xs mb-4"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    My goal-manifestation + binaural audio app
                  </p>
                  <a
                    href="https://orbit-self-eight.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs"
                    aria-label="Open Orbit live demo"
                  >
                    <ExternalLink size={13} />
                    Open Orbit
                  </a>
                </div>
              </SectionReveal>

              {/* Currently reading/learning */}
              <SectionReveal delay={0.2}>
                <div
                  className="p-6 rounded-[var(--radius-lg)] h-full"
                  style={{
                    background: "var(--accent-yellow-soft)",
                    border: "1px solid var(--accent-yellow)",
                  }}
                >
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-3"
                    style={{ color: "var(--text-muted)" }}
                  >
                    📚 Currently learning
                  </p>
                  <p
                    className="font-semibold text-sm mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    System Design & Advanced DSA
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    2026 focus — deepening architecture knowledge and competitive problem-solving
                  </p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* Hobbies */}
        <section
          className="section-padding"
          style={{ background: "var(--bg-secondary)" }}
          aria-labelledby="hobbies-heading"
        >
          <div className="container-custom">
            <SectionReveal>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--text-muted)" }}
              >
                Beyond the code
              </p>
              <h2
                id="hobbies-heading"
                className="section-heading mb-8"
                style={{ color: "var(--text-primary)" }}
              >
                When I&apos;m not shipping
              </h2>
              <div className="flex flex-wrap gap-3">
                {hobbies.map((hobby) => (
                  <span
                    key={hobby}
                    className="tag-pill text-sm py-2 px-4"
                    style={{
                      background: "var(--bg-primary)",
                      border: "2px solid var(--border-light)",
                      borderRadius: "var(--radius-full)",
                    }}
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </SectionReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
