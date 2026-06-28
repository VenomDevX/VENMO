import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Highlights() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);
  
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -360]);
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
        <div className="col-span-1 md:col-span-2 h-[60vh] border border-white/20 relative overflow-hidden group hover-target bg-black">
          <div className="absolute inset-0 flex items-center justify-center p-10">
            <motion.div 
              style={{ rotate: rotate1 }} 
              className="w-full aspect-square max-w-[300px] border border-white/40 flex items-center justify-center"
            >
              <motion.div 
                style={{ rotate: rotate2 }}
                className="w-[60%] aspect-square bg-white mix-blend-difference"
              />
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-end bg-gradient-to-t from-black to-transparent pointer-events-none">
            <div className="font-mono text-xs tracking-widest uppercase text-white/50">
              [01] Geometric Flow
            </div>
            <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform" />
            </div>
          </div>
        </div>

        {/* Graphic Card 2 */}
        <div className="col-span-1 h-[60vh] border border-white/20 relative overflow-hidden group hover-target bg-white text-black">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              animate={{ 
                scale: [1, 1.5, 1],
                borderRadius: ["0%", "50%", "0%"]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1/2 aspect-square bg-black"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-end mix-blend-difference text-white pointer-events-none">
            <div className="font-mono text-xs tracking-widest uppercase">
              [02] Shape Morph
            </div>
            <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform" />
            </div>
          </div>
        </div>

        {/* Graphic Card 3 */}
        <div className="col-span-1 h-[60vh] border border-white/20 relative overflow-hidden group hover-target bg-black">
          <div className="absolute inset-0 flex flex-col justify-center gap-4 p-10">
            {[...Array(7)].map((_, i) => (
              <motion.div 
                key={i}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="h-[2px] w-full bg-white"
                style={{ width: `${100 - i * 12}%` }}
              />
            ))}
          </div>
          <div className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-end pointer-events-none">
            <div className="font-mono text-xs tracking-widest uppercase text-white/50">
              [03] Linear Dynamics
            </div>
            <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform" />
            </div>
          </div>
        </div>

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
