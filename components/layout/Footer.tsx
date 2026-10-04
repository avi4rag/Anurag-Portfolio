import Link from "next/link";
import {
  Mail,
  Phone,
  ArrowUpRight,
} from "lucide-react";
import { Linkedin, Github, Twitter } from "@/components/ui/Icons";

const socialLinks = [
  {
    href: "mailto:avi4rag@gmail.com",
    icon: Mail,
    label: "Email",
    text: "avi4rag@gmail.com",
  },
  {
    href: "tel:+916205060900",
    icon: Phone,
    label: "Phone",
    text: "+91 6205060900",
  },
  {
    href: "https://www.linkedin.com/in/avi4rag/",
    icon: Linkedin,
    label: "LinkedIn",
    text: "linkedin.com/in/avi4rag",
    external: true,
  },
  {
    href: "https://github.com/avi4rag",
    icon: Github,
    label: "GitHub",
    text: "github.com/avi4rag",
    external: true,
  },
  {
    href: "https://x.com/Avi4rag",
    icon: Twitter,
    label: "X / Twitter",
    text: "@Avi4rag",
    external: true,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      role="contentinfo"
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border-light)",
      }}
      className="section-padding"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-12">
          {/* Left — CTA */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--text-muted)" }}
            >
              Get in touch
            </p>
            <h2
              className="section-heading mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Let&apos;s build something{" "}
              <span style={{ color: "var(--accent-primary)" }}>together.</span>
            </h2>
            <p className="text-base mb-8" style={{ color: "var(--text-secondary)" }}>
              I&apos;m currently looking for a Full-Stack Software Engineering internship.
              If you have an interesting project or opportunity, I&apos;d love to hear
              about it.
            </p>
            <a
              href="mailto:avi4rag@gmail.com"
              className="btn-primary"
              aria-label="Send email to Anurag"
            >
              Say hello <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Right — Links */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ color: "var(--text-muted)" }}
            >
              Connect
            </p>
            <ul className="space-y-4 list-none m-0 p-0">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      aria-label={`${link.label}: ${link.text}`}
                      className="group flex items-center gap-3 text-sm transition-all duration-200"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <span
                        className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 group-hover:scale-110"
                        style={{ background: "var(--bg-primary)", border: "1px solid var(--border-light)" }}
                      >
                        <Icon size={14} />
                      </span>
                      <span className="group-hover:text-[var(--text-primary)] transition-colors duration-200 font-medium">
                        {link.text}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid var(--border-light)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            © {currentYear} Anurag. Built with Next.js & Tailwind CSS.
          </p>
          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-6 list-none m-0 p-0">
              {[
                { href: "/", label: "Home" },
                { href: "/#work", label: "Work" },
                { href: "/about", label: "About" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs font-medium transition-colors duration-200 hover:text-[var(--text-primary)]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
