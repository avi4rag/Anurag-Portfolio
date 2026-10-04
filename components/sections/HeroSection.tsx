"use client";

import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { HeroIllustration } from "@/components/ui/HeroIllustration";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
      aria-label="Hero section"
    >
      {/* Soft radial background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 30% 40%, var(--accent-yellow-soft) 0%, transparent 70%)",
          opacity: 0.5,
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 80% 30%, var(--accent-blue-soft) 0%, transparent 60%)",
          opacity: 0.4,
        }}
        aria-hidden="true"
      />

      <div className="container-custom w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-80px)]">
          {/* Left — Text */}
          <motion.div
            className="flex flex-col justify-center py-12 lg:py-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={itemVariants}
              className="text-xs font-semibold uppercase tracking-widest mb-6 flex items-center gap-2"
              style={{ color: "var(--text-muted)" }}
            >
              <span
                className="inline-block w-2 h-2 rounded-full animate-pulse"
                style={{ background: "var(--accent-mint)" }}
                aria-hidden="true"
              />
              Available for internships
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="display-text mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Hey, I&apos;m{" "}
              <span
                className="relative inline-block"
                style={{ color: "var(--accent-primary)" }}
              >
                Anurag
                <span
                  className="absolute bottom-0 left-0 w-full h-1 rounded-full"
                  style={{ background: "var(--accent-yellow)", opacity: 0.6 }}
                  aria-hidden="true"
                />
              </span>
              .
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl font-medium mb-3"
              style={{ color: "var(--text-secondary)", lineHeight: 1.5 }}
            >
              Backend engineering in progress | Building real systems | Learning by shipping
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base mb-10 max-w-lg"
              style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}
            >
              Full-Stack Developer and Software Product Engineering student who designs,
              ships, and tests real production web apps — from AI-integrated platforms to
              real-time dashboards.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <Link href="/#work" className="btn-primary">
                See my work
                <ArrowDown size={16} />
              </Link>
              <Link href="/about" className="btn-secondary">
                About me
              </Link>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              variants={itemVariants}
              className="mt-12 grid grid-cols-3 gap-6 border-t pt-8"
              style={{ borderColor: "var(--border-light)" }}
            >
              {[
                { value: "3", label: "Production apps" },
                { value: "158+", label: "Automated tests" },
                { value: "2", label: "Research papers" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p
                    className="font-display text-2xl md:text-3xl font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {value}
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Illustration */}
          <motion.div
            className="hidden lg:flex items-center justify-center h-[500px] relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-hidden="true"
      >
        <span className="text-xs" style={{ color: "var(--text-muted)" }}>
          Scroll
        </span>
        <motion.div
          className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5"
          style={{ borderColor: "var(--border-medium)" }}
        >
          <motion.div
            className="w-1 h-2 rounded-full"
            style={{ background: "var(--text-muted)" }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
