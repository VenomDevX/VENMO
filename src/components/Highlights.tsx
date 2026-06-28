import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import vid1 from '../../1.mp4';
import vid2 from '../../2.mp4';
import vid3 from '../../3.mp4';

export default function Highlights() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={containerRef} className="w-full py-32 md:py-48 bg-black text-white overflow-hidden relative border-b border-white/20">
      
      {/* Background Abstract Grid that scales */}
      <motion.div 
        style={{ scale }}
        className="absolute inset-0 border-grid opacity-10 pointer-events-none"
      />

      {/* Marquee 1 */}
      <div className="flex whitespace-nowrap overflow-hidden mb-24 md:mb-40 mix-blend-difference z-10 relative">
        <motion.div style={{ x: x1 }} className="flex gap-10 md:gap-20 items-center">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-10 md:gap-20">
              <h2 className="text-[12vw] font-display uppercase tracking-tighter leading-none">
                MOTION HIGHLIGHTS
              </h2>
              <div className="w-[8vw] h-[8vw] border-[3px] border-white" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10 max-w-[100rem] mx-auto">
        {/* Graphic Card 1 */}
        <Link to="/work" className="col-span-1 md:col-span-2 h-[60vh] border border-white/20 relative overflow-hidden group hover-target bg-black block cursor-pointer">
          <video src={vid1} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" />
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-end bg-gradient-to-t from-black to-transparent pointer-events-none z-10">
            <div className="font-mono text-xs tracking-widest uppercase text-white/80 group-hover:text-white transition-colors">
              [01] DARK SMOKE BACKGROUND
            </div>
            <div className="w-12 h-12 border border-white/20 flex items-center justify-center bg-black/50 backdrop-blur-sm">
              <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform" />
            </div>
          </div>
        </Link>

        {/* Graphic Card 2 */}
        <Link to="/work" className="col-span-1 h-[60vh] border border-white/20 relative overflow-hidden group hover-target bg-black block cursor-pointer text-white">
          <video src={vid2} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" />
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-end bg-gradient-to-t from-black to-transparent pointer-events-none z-10">
            <div className="font-mono text-xs tracking-widest uppercase text-white/80 group-hover:text-white transition-colors">
              [02] LIGHT SMOKE BACKGROUND
            </div>
            <div className="w-12 h-12 border border-white/20 flex items-center justify-center bg-black/50 backdrop-blur-sm">
              <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform" />
            </div>
          </div>
        </Link>

        {/* Graphic Card 3 */}
        <Link to="/work" className="col-span-1 h-[60vh] border border-white/20 relative overflow-hidden group hover-target bg-black block cursor-pointer">
          <video src={vid3} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" />
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-end bg-gradient-to-t from-black to-transparent pointer-events-none z-10">
            <div className="font-mono text-xs tracking-widest uppercase text-white/80 group-hover:text-white transition-colors">
              [03] VERTICAL GLITCH
            </div>
            <div className="w-12 h-12 border border-white/20 flex items-center justify-center bg-black/50 backdrop-blur-sm">
              <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform" />
            </div>
          </div>
        </Link>

        {/* Graphic Card 4 */}
        <div className="col-span-1 md:col-span-2 h-[60vh] border border-white/20 relative overflow-hidden group hover-target bg-black">
          <div className="absolute inset-0 flex items-center justify-center gap-[2px]">
            {[...Array(40)].map((_, i) => (
              <motion.div 
                key={i}
                animate={{ 
                  height: ["20%", "80%", "20%"]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  delay: i * 0.05,
                  ease: "easeInOut"
                }}
                className="w-1 md:w-2 bg-white/30"
              />
            ))}
          </div>
          <div className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-end bg-gradient-to-t from-black to-transparent pointer-events-none">
            <div className="font-mono text-xs tracking-widest uppercase text-white/50">
              [04] Audio Visualizer
            </div>
            <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform" />
            </div>
          </div>
        </div>
      </div>

      {/* Marquee 2 */}
      <div className="flex whitespace-nowrap overflow-hidden mt-24 md:mt-40 mix-blend-difference z-10 relative">
        <motion.div style={{ x: x2 }} className="flex gap-10 md:gap-20 items-center">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-10 md:gap-20">
              <div className="w-[8vw] h-[8vw] bg-white rounded-full" />
              <h2 className="text-[12vw] font-display uppercase tracking-tighter leading-none">
                EXPERIENCE DESIGN
              </h2>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
