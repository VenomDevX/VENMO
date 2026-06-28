import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const capabilities = [
  { id: "01", title: "Motion Design", desc: "Keyframe animation, physics simulations, and kinetic typography." },
  { id: "02", title: "WebGL & 3D", desc: "Interactive environments, custom shaders, and Three.js experiences." },
  { id: "03", title: "Creative Dev", desc: "Frontend architecture, smooth scrolling, and performant interactions." },
  { id: "04", title: "VFX / Comp", desc: "Video compositing, particle systems, and post-production." }
];

export default function Capabilities() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full min-h-screen py-32 px-6 md:px-10 bg-white text-black border-b border-black relative overflow-hidden flex items-center">
      
      {/* Background Hover Reveal Effect */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black/5 font-display text-[40vw] tracking-tighter whitespace-nowrap"
            >
              {capabilities[hoveredIndex].id}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[100rem] mx-auto flex flex-col lg:flex-row items-start gap-10 lg:gap-20 relative z-10 w-full">
        <div className="lg:w-1/3 shrink-0 lg:sticky lg:top-40">
          <h2 className="text-sm font-mono tracking-widest mb-4 uppercase text-black/50">
            [ 02 ] Capabilities
          </h2>
          <h3 className="font-display text-5xl lg:text-7xl uppercase tracking-tighter text-black break-words">
            System<br/>Architecture
          </h3>
        </div>
        
        <div className="flex-1 w-full flex flex-col border-t border-black">
          {capabilities.map((cap, idx) => (
            <div 
              key={cap.id} 
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group border-b border-black/20 hover:border-black py-10 md:py-14 cursor-none hover-target px-4 md:px-8 -mx-4 md:-mx-8 transition-colors duration-300"
            >
              <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6">
                <div className="flex items-center gap-6 md:gap-12">
                  <span className="font-mono text-sm tracking-widest text-black/50">
                    {cap.id}
                  </span>
                  <h4 className="font-sans font-black text-3xl md:text-5xl lg:text-6xl uppercase tracking-tighter group-hover:translate-x-4 transition-all duration-500 text-black">
                    {cap.title}
                  </h4>
                </div>
                <p className="font-mono text-xs md:text-sm tracking-widest max-w-xs text-black/70">
                  {cap.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
