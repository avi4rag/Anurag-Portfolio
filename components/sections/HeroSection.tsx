"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Minus, Play, Sun } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

const creatorWords = ["builds", "scales", "deploys"];

function renderHeadlineCharacters(text: string) {
  return [...text].map((character, index) => (
    <span className="headline-char" key={`${character}-${index}`}>
      {character === " " ? "\u00a0" : character}
    </span>
  ));
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -52]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.72]);
  const sunY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const cloudY = useTransform(scrollYProgress, [0, 1], [0, 48]);
  const waveY = useTransform(scrollYProgress, [0, 1], [0, -28]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setWordIndex((currentIndex) => (currentIndex + 1) % creatorWords.length);
    }, 2400);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section ref={heroRef} className="reference-hero" aria-label="Hero section">
      <div className="reference-location-label">
        <MapPin size={17} /> Jaipur, India
      </div>
      <div className="reference-theme-controls">
        <button aria-label="Reduce motion">
          <Minus size={20} />
        </button>
        <button aria-label="Light theme">
          <Sun size={18} />
        </button>
      </div>
      <motion.div
        className="reference-sun"
        style={{ y: sunY }}
        aria-hidden="true"
      />
      <motion.div
        className="reference-cloud reference-cloud-top"
        style={{ y: cloudY }}
        aria-hidden="true"
      />
      <motion.div
        className="reference-cloud reference-cloud-right"
        style={{ y: cloudY }}
        aria-hidden="true"
      />
      <motion.div
        className="reference-copy"
        style={{ y: copyY, opacity: copyOpacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={itemVariants} className="reference-kicker">
          <span /> HELLO, I&apos;M ANURAG A —
        </motion.p>
        <motion.h1 variants={itemVariants}>
          <span className="headline-line">
            {renderHeadlineCharacters("Creator who")}
          </span>
          <br />
          <span className="reference-word-slot" aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={creatorWords[wordIndex]}
                className="headline-word"
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "-100%" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                {renderHeadlineCharacters(creatorWords[wordIndex])}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>
        <motion.div variants={itemVariants} className="reference-player">
          <div className="reference-reel reference-reel-left" />
          <div className="reference-player-label">
            My Soul in audio form
            <br />
            <small>
              0:00 <i /> 2:00
            </small>
          </div>
          <div className="reference-reel reference-reel-right" />
          <button aria-label="Play introduction">
            <Play size={15} fill="currentColor" />
          </button>
        </motion.div>
        <motion.p variants={itemVariants} className="reference-vertical">
          SKETCH&nbsp; / &nbsp;CODE&nbsp; / &nbsp;LAUNCH
        </motion.p>
      </motion.div>
      {/* <div className="reference-honors">
        W.
        <br />
        <span>Honors</span>
      </div> */}
      <motion.div
        className="reference-wave"
        style={{ y: waveY }}
        aria-hidden="true"
      />
      <div className="reference-scroll">Scroll</div>
    </section>
  );
}
