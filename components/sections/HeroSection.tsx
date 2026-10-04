"use client";

import { MapPin, Minus, Play, Sun } from "lucide-react";
import { motion } from "framer-motion";

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
      className="reference-hero"
      aria-label="Hero section"
    >
      <div className="reference-location-label"><MapPin size={17} /> VANCOUVER, BC</div>
      <div className="reference-status">FPS&nbsp; N/A&nbsp; | &nbsp;LAT&nbsp; N/A</div>
      <div className="reference-theme-controls"><button aria-label="Reduce motion"><Minus size={20} /></button><button aria-label="Light theme"><Sun size={18} /></button></div>
      <div className="reference-sun" aria-hidden="true" />
      <div className="reference-cloud reference-cloud-top" aria-hidden="true" />
      <div className="reference-cloud reference-cloud-right" aria-hidden="true" />
      <motion.div className="reference-copy" variants={containerVariants} initial="hidden" animate="visible">
        <motion.p variants={itemVariants} className="reference-kicker"><span /> HELLO, I&apos;M ANURAG A —</motion.p>
        <motion.h1 variants={itemVariants}>Designer who<br /><span>Solves</span></motion.h1>
        <motion.div variants={itemVariants} className="reference-player"><div className="reference-reel reference-reel-left" /><div className="reference-player-label">My design journey, rapped<br /><small>0:00 <i /> 2:00</small></div><div className="reference-reel reference-reel-right" /><button aria-label="Play introduction"><Play size={15} fill="currentColor" /></button></motion.div>
        <motion.p variants={itemVariants} className="reference-vertical">DESIGN&nbsp; / &nbsp;DETAILS&nbsp; / &nbsp;CODE</motion.p>
      </motion.div>
      <div className="reference-honors">W.<br /><span>Honors</span></div>
      <div className="reference-wave" aria-hidden="true" />
      <div className="reference-scroll">Scroll</div>
    </section>
  );
}
