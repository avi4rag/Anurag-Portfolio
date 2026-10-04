"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Menu, X } from "lucide-react";

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

  return (
    <header
      role="banner"
      className={`reference-nav ${scrolled ? "reference-nav-scrolled" : ""}`}
    >
      <nav className="reference-nav-inner" aria-label="Main navigation">
        <Link
          href="/"
          className="reference-location"
          aria-label="Anurag — Home"
        >
          <span className="reference-avatar">A</span>
        </Link>

        {/* Desktop Links */}
        <ul className="reference-links hidden md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`reference-link ${
                  pathname === link.href.split("#")[0] &&
                  !link.href.includes("#")
                    ? "reference-link-active"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a href="mailto:avi4rag@gmail.com" className="reference-contact">
              <Mail size={15} /> Work with me
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="reference-menu md:hidden"
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
        } reference-mobile-menu`}
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
