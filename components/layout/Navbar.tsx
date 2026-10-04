"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen || !isHome
          ? "bg-[var(--bg-overlay)] backdrop-blur-md shadow-sm border-b border-[var(--border-light)]"
          : "bg-transparent"
      }`}
    >
      <nav
        className="container-custom flex items-center justify-between h-16 md:h-20"
        aria-label="Main navigation"
      >
        {/* Logo / Name */}
        <Link
          href="/"
          className="font-display text-xl font-700 text-[var(--text-primary)] tracking-tight hover:opacity-80 transition-opacity"
          aria-label="Anurag — Home"
        >
          <span className="font-sans font-semibold text-lg">Anurag</span>
          <span
            className="ml-1 inline-block w-2 h-2 rounded-full bg-[var(--accent-primary)] align-middle"
            aria-hidden="true"
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-2 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  pathname === link.href.split("#")[0] && !link.href.includes("#")
                    ? "bg-[var(--text-primary)] text-[var(--text-inverse)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="mailto:avi4rag@gmail.com"
              className="btn-primary text-sm ml-2"
            >
              Say hello
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } bg-[var(--bg-overlay)] backdrop-blur-md border-t border-[var(--border-light)]`}
      >
        <ul className="container-custom py-4 flex flex-col gap-1 list-none m-0 p-0 px-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block px-4 py-3 rounded-xl text-base font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-all"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="mailto:avi4rag@gmail.com"
              className="btn-primary text-sm w-full justify-center"
              onClick={() => setMenuOpen(false)}
            >
              Say hello
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
