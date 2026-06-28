import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, Github } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div ref={containerRef} className="relative h-screen w-full flex flex-col justify-center overflow-hidden border-b border-white/20 bg-black border-grid">


      <motion.div 
        style={{ y: y1, opacity }} 
        className="px-6 md:px-10 z-10 font-display uppercase tracking-tighter max-w-[100vw] overflow-hidden"
      >
        <motion.h1 
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-[14vw] md:text-[12vw] leading-[0.75] whitespace-nowrap -ml-[1vw] glitch"
          data-text="MOTION"
        >
          MOTION
        </motion.h1>
        <motion.div 
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="flex items-center gap-4 md:gap-8 ml-[15vw] mt-[2vw]"
        >
          <span className="text-[14vw] md:text-[12vw] leading-[0.75] text-transparent glitch glitch-stroked" data-text="&" style={{ WebkitTextStroke: "1px white" }}>&</span>
          <span className="text-[14vw] md:text-[12vw] leading-[0.75] glitch" data-text="CODE">CODE</span>
        </motion.div>
      </motion.div>

      <motion.div 
        style={{ y: y2, opacity }}
        className="absolute bottom-10 left-6 md:left-10 font-mono text-xs tracking-widest uppercase flex flex-col gap-4"
      >
        <span className="text-white/50 border-b border-white/20 pb-2">SCROLL TO EXPLORE</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-10 h-10 border border-white/50 flex items-center justify-center"
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>

      {/* Progress Line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        className="absolute bottom-10 right-0 w-1/3 h-[1px] bg-white origin-right"
      />

      {/* Hero-specific GitHub Button */}
      <a 
        href="https://github.com/VenomDevX"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-14 right-4 z-50 bg-black text-white border border-white/20 p-4 hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center hover-target shadow-[0_0_15px_rgba(0,0,0,0.5)]"
        aria-label="GitHub Profile"
      >
        <Github className="w-5 h-5" />
      </a>
    </div>
  );
}
