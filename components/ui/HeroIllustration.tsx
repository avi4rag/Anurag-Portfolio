"use client";

import { motion } from "framer-motion";

export function HeroIllustration() {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 480 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-sm"
        role="img"
        aria-label="Decorative illustration with sun, moon and clouds"
      >
        {/* === SUN === */}
        <motion.g
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "130px 150px" }}
        >
          {/* Sun rays */}
          {Array.from({ length: 10 }).map((_, i) => {
            const angle = (i * 36 * Math.PI) / 180;
            const r1 = 52;
            const r2 = 68;
            const cx = 130;
            const cy = 150;
            const x1 = cx + r1 * Math.cos(angle);
            const y1 = cy + r1 * Math.sin(angle);
            const x2 = cx + r2 * Math.cos(angle);
            const y2 = cy + r2 * Math.sin(angle);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#F5C842"
                strokeWidth="4"
                strokeLinecap="round"
              />
            );
          })}
        </motion.g>

        {/* Sun circle body */}
        <motion.circle
          cx="130"
          cy="150"
          r="40"
          fill="#F5C842"
          initial={{ scale: 0.9 }}
          animate={{ scale: [0.9, 1.02, 0.9] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "130px 150px" }}
        />
        {/* Sun face dots */}
        <circle cx="120" cy="145" r="4" fill="#E8A455" />
        <circle cx="140" cy="145" r="4" fill="#E8A455" />
        <path
          d="M 118 158 Q 130 167 142 158"
          stroke="#E8A455"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />

        {/* === CRESCENT MOON === */}
        <motion.g
          initial={{ y: 0, rotate: -5 }}
          animate={{ y: [-6, 6, -6], rotate: [-5, 5, -5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "360px 130px" }}
        >
          {/* Moon outer arc */}
          <circle cx="360" cy="130" r="44" fill="#7EC8E3" />
          {/* Moon cutout (crescent shape) */}
          <circle cx="378" cy="120" r="36" fill="#FAF8F4" />
          {/* Star near moon */}
          <circle cx="320" cy="100" r="5" fill="#F5C842" opacity="0.8" />
          <circle cx="310" cy="155" r="3.5" fill="#F5C842" opacity="0.6" />
          <circle cx="400" cy="175" r="4" fill="#F5C842" opacity="0.7" />
        </motion.g>

        {/* === CLOUDS === */}
        {/* Large cloud left */}
        <motion.g
          initial={{ x: 0 }}
          animate={{ x: [-8, 8, -8] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <ellipse cx="80" cy="280" rx="48" ry="28" fill="#F2F0FF" />
          <ellipse cx="110" cy="265" rx="38" ry="26" fill="#F2F0FF" />
          <ellipse cx="52" cy="272" rx="30" ry="22" fill="#F2F0FF" />
          <ellipse cx="130" cy="278" rx="28" ry="20" fill="#F2F0FF" />
        </motion.g>

        {/* Cloud right-center */}
        <motion.g
          initial={{ x: 0 }}
          animate={{ x: [8, -8, 8] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <ellipse cx="340" cy="300" rx="52" ry="26" fill="#FCE4E4" opacity="0.85" />
          <ellipse cx="370" cy="285" rx="36" ry="24" fill="#FCE4E4" opacity="0.85" />
          <ellipse cx="316" cy="294" rx="28" ry="20" fill="#FCE4E4" opacity="0.85" />
          <ellipse cx="392" cy="296" rx="24" ry="18" fill="#FCE4E4" opacity="0.85" />
        </motion.g>

        {/* Small cloud top-right */}
        <motion.g
          initial={{ x: 0, y: 0 }}
          animate={{ x: [-5, 5, -5], y: [2, -2, 2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <ellipse cx="400" cy="55" rx="34" ry="18" fill="#D6F0FA" opacity="0.9" />
          <ellipse cx="420" cy="44" rx="24" ry="16" fill="#D6F0FA" opacity="0.9" />
          <ellipse cx="382" cy="49" rx="20" ry="15" fill="#D6F0FA" opacity="0.9" />
        </motion.g>

        {/* Floating stars / sparkles */}
        {[
          { cx: 220, cy: 50, r: 4, delay: 0 },
          { cx: 245, cy: 340, r: 3, delay: 0.5 },
          { cx: 460, cy: 220, r: 5, delay: 1 },
          { cx: 30, cy: 180, r: 3.5, delay: 1.5 },
          { cx: 200, cy: 240, r: 2.5, delay: 0.8 },
        ].map((star, i) => (
          <motion.circle
            key={i}
            cx={star.cx}
            cy={star.cy}
            r={star.r}
            fill="#F5C842"
            opacity={0.7}
            initial={{ scale: 0.6, opacity: 0.4 }}
            animate={{ scale: [0.6, 1.2, 0.6], opacity: [0.4, 0.9, 0.4] }}
            transition={{
              duration: 2.5 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.delay,
            }}
            style={{ transformOrigin: `${star.cx}px ${star.cy}px` }}
          />
        ))}
      </svg>
    </div>
  );
}
