"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Minus, Pause, Play, Sun } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

const creatorWords = ["builds", "scales", "deploys"];
const audioSource =
  "/audio/There Is a Light That Never Goes Out (2011 Remaster).mp3";

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
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
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

  useEffect(() => {
    const audio = new Audio(audioSource);
    audio.preload = "metadata";
    audioRef.current = audio;

    const handleLoadedMetadata = () => setDuration(audio.duration || 0);
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handlePlay = () => {
      setIsPlaying(true);
      setIsLoading(false);
    };
    const handlePause = () => setIsPlaying(false);
    const handleWaiting = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);
    const handleError = () => {
      setIsPlaying(false);
      setIsLoading(false);
      setAudioError(true);
    };
    const handleEnded = () => {
      setIsPlaying(false);
      setIsLoading(false);
      setCurrentTime(audio.duration || 0);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("waiting", handleWaiting);
    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("error", handleError);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.pause();
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("waiting", handleWaiting);
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("error", handleError);
      audio.removeEventListener("ended", handleEnded);
      audioRef.current = null;
    };
  }, []);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    setAudioError(false);
    if (audio.paused) {
      if (audio.ended) audio.currentTime = 0;
      setIsLoading(true);
      try {
        await audio.play();
      } catch {
        setIsLoading(false);
        setAudioError(true);
      }
    } else {
      audio.pause();
    }
  };

  const seekAudio = (event: React.MouseEvent<HTMLButtonElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const position = Math.min(
      Math.max((event.clientX - bounds.left) / bounds.width, 0),
      1,
    );
    audio.currentTime = position * duration;
    setCurrentTime(audio.currentTime);
  };

  const formatTime = (time: number) => {
    if (!Number.isFinite(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const progress = duration ? Math.min((currentTime / duration) * 100, 100) : 0;

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
        <motion.div
          variants={itemVariants}
          className={`reference-player ${isPlaying ? "is-playing" : ""}`}
          data-audio-error={audioError || undefined}
        >
          <div className="reference-reel reference-reel-left" />
          <div className="reference-player-label">
            <span className="reference-player-title">
              My Soul in audio form
            </span>
            <div className="reference-cassette-content">
              <button
                type="button"
                className="reference-progress"
                onClick={seekAudio}
                role="slider"
                aria-label="Seek audio"
                aria-valuemin={0}
                aria-valuemax={duration || 0}
                aria-valuenow={currentTime}
                aria-valuetext={`${formatTime(currentTime)} of ${formatTime(duration)}`}
              >
                <span className="reference-progress-track" />
                <span
                  className="reference-progress-fill"
                  style={{ width: `${progress}%` }}
                />
                <span
                  className="reference-progress-knob"
                  style={{ left: `${progress}%` }}
                />
              </button>
              <small>{formatTime(currentTime)}</small>
              <small>{formatTime(duration)}</small>
            </div>
          </div>
          <div className="reference-reel reference-reel-right" />
          <button
            type="button"
            className="reference-play-button"
            onClick={togglePlayback}
            aria-label={isPlaying ? "Pause introduction" : "Play introduction"}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="reference-player-loading" aria-hidden="true" />
            ) : isPlaying ? (
              <Pause size={15} fill="currentColor" />
            ) : (
              <Play size={15} fill="currentColor" />
            )}
          </button>
          {audioError && (
            <span className="reference-player-error" role="status">
              Audio unavailable
            </span>
          )}
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
