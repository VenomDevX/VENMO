import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const bootSequence = [
  "INITIALIZING KERNEL...",
  "LOADING CORE MODULES...",
  "MOUNTING FILE SYSTEM...",
  "ESTABLISHING SECURE CONNECTION...",
  "BYPASSING FIREWALL...",
  "SYNCING PROTOCOLS...",
  "ACCESS GRANTED.",
];

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    let currentLine = 0;

    const interval = setInterval(() => {
      if (currentLine < bootSequence.length) {
        setLines((prev) => [...prev, bootSequence[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 800); // Wait a bit after "ACCESS GRANTED" before dismissing
      }
    }, 200); // 200ms per line

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-black text-white flex flex-col justify-end p-6 md:p-12 font-mono text-sm tracking-widest uppercase"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="max-w-2xl w-full flex flex-col gap-2">
        {lines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-4"
          >
            <span className="text-white/50">
              [
              {String(index * 0.133)
                .substring(0, 5)
                .padEnd(5, "0")}
              ]
            </span>
            <span
              className={
                index === bootSequence.length - 1
                  ? "text-white font-bold glitch glitch-stroked"
                  : "text-white/80"
              }
            >
              {line}
            </span>
          </motion.div>
        ))}
        {/* Blinking Cursor */}
        <motion.div
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
          className="w-3 h-5 bg-white mt-4"
        />
      </div>
    </motion.div>
  );
}
