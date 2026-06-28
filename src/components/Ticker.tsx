import { motion } from "motion/react";

const stack = [
  "REACT",
  "THREE.JS",
  "FRAMER MOTION",
  "WEBGL",
  "GLSL",
  "GSAP",
  "TYPESCRIPT",
  "TAILWIND",
];

export default function Ticker() {
  return (
    <div className="w-full py-16 md:py-24 bg-black text-white border-b border-white/20 overflow-hidden flex whitespace-nowrap relative z-10">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-12 md:gap-20 items-center"
      >
        {[...stack, ...stack, ...stack, ...stack].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-12 md:gap-20 hover-target"
          >
            <span
              className="font-display text-4xl md:text-6xl lg:text-8xl uppercase tracking-normal text-transparent hover:text-white transition-colors"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.5)" }}
            >
              {item}
            </span>
            <span className="w-4 h-4 md:w-6 md:h-6 bg-white rotate-45" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
