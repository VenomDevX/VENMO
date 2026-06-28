import { motion } from "motion/react";
import { Github, Linkedin } from "lucide-react";

const RedditIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
  </svg>
);

export default function Studio() {
  return (
    <div className="w-full min-h-screen bg-black text-white px-6 md:px-10 pt-32 pb-6 border-grid relative overflow-hidden flex flex-col">
      <div className="flex-grow max-w-[100rem] mx-auto w-full relative z-10">
        <h2 className="text-sm font-mono tracking-widest text-white/50 mb-10 uppercase">
          [ 02 ] The Studio
        </h2>
        <h1 className="font-display text-[12vw] lg:text-[8vw] leading-[0.8] tracking-tighter uppercase mb-20 glitch" data-text="PHILOSOPHY">
          PHILOSOPHY
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Column: Mission */}
          <div className="font-mono text-lg md:text-xl leading-relaxed text-white/80">
            <p className="mb-8">
              WE ARE A DIGITAL DESIGN AND MOTION STUDIO. WE DON'T JUST BUILD WEBSITES; WE ENGINEER KINETIC EXPERIENCES THAT LIVE, BREATHE, AND REACT TO USER INPUT. OUR DESIGNS ARE FUNCTIONAL ARTWORKS SCULPTED IN CODE AND MOTION.
            </p>
            <p>
              OUR APPROACH MERGES COMPUTATIONAL LOGIC WITH AVANT-GARDE AESTHETICS, CREATING SYSTEMS THAT PUSH THE BOUNDARIES OF MODERN WEB BROWSERS AND REDEFINE DIGITAL INTERACTION. WE SPECIALIZE IN HIGH-PERFORMANCE WEBGL, IMMERSIVE 3D ENVIRONMENTS, AND COMPLEX ANIMATION CHOREOGRAPHY TO DELIVER UNFORGETTABLE DIGITAL JOURNEYS.
            </p>
          </div>

          {/* Right Column: Details */}
          <div className="flex flex-col gap-16">
            <div className="border-t border-white/20 pt-6">
              <h3 className="font-mono text-xs tracking-widest text-white/50 mb-6">[ CORE DISCIPLINES ]</h3>
              <ul className="font-sans font-black text-3xl md:text-4xl uppercase flex flex-col gap-4">
                <li className="hover:text-transparent transition-colors cursor-default" style={{ WebkitTextStroke: "1px white" }}>CREATIVE DIRECTION</li>
                <li className="hover:text-transparent transition-colors cursor-default" style={{ WebkitTextStroke: "1px white" }}>WEBGL & 3D EXPERIENCES</li>
                <li className="hover:text-transparent transition-colors cursor-default" style={{ WebkitTextStroke: "1px white" }}>MOTION GRAPHICS</li>
                <li className="hover:text-transparent transition-colors cursor-default" style={{ WebkitTextStroke: "1px white" }}>SYSTEMS ENGINEERING</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Methodology Section */}
        <div className="mt-32 pt-10 border-t border-white/20">
          <h3 className="font-mono text-xs tracking-widest text-white/50 mb-12">[ METHODOLOGY ]</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="flex flex-col gap-4 group cursor-default border-l border-white/10 pl-6 hover:border-white/50 transition-colors">
              <span className="font-mono text-xs tracking-widest text-white/30 group-hover:text-white transition-colors">01</span>
              <h4 className="font-sans font-black text-2xl xl:text-3xl uppercase tracking-tighter group-hover:text-transparent transition-colors" style={{ WebkitTextStroke: "1px white" }}>DISCOVERY</h4>
              <p className="font-mono text-[10px] sm:text-xs leading-relaxed text-white/60 group-hover:text-white/90 transition-colors">MAPPING THE TERRAIN AND DEFINING THE PARAMETERS OF THE DIGITAL EXPERIENCE. WE EXTRACT CORE OBJECTIVES AND ESTABLISH THE TECHNICAL FOUNDATION.</p>
            </div>
            <div className="flex flex-col gap-4 group cursor-default border-l border-white/10 pl-6 hover:border-white/50 transition-colors">
              <span className="font-mono text-xs tracking-widest text-white/30 group-hover:text-white transition-colors">02</span>
              <h4 className="font-sans font-black text-2xl xl:text-3xl uppercase tracking-tighter group-hover:text-transparent transition-colors" style={{ WebkitTextStroke: "1px white" }}>ARCHITECTURE</h4>
              <p className="font-mono text-[10px] sm:text-xs leading-relaxed text-white/60 group-hover:text-white/90 transition-colors">STRUCTURING THE COMPUTATIONAL LOGIC AND WIREFRAMING THE KINETIC INTERACTIONS. CREATING BLUEPRINTS FOR SCALABLE PERFORMANCE.</p>
            </div>
            <div className="flex flex-col gap-4 group cursor-default border-l border-white/10 pl-6 hover:border-white/50 transition-colors">
              <span className="font-mono text-xs tracking-widest text-white/30 group-hover:text-white transition-colors">03</span>
              <h4 className="font-sans font-black text-2xl xl:text-3xl uppercase tracking-tighter group-hover:text-transparent transition-colors" style={{ WebkitTextStroke: "1px white" }}>DEVELOPMENT</h4>
              <p className="font-mono text-[10px] sm:text-xs leading-relaxed text-white/60 group-hover:text-white/90 transition-colors">FORGING THE CODE. MERGING WEBGL, SHADERS, AND COMPLEX MOTION PHYSICS INTO A SEAMLESS, OPTIMIZED DIGITAL ENTITY.</p>
            </div>
            <div className="flex flex-col gap-4 group cursor-default border-l border-white/10 pl-6 hover:border-white/50 transition-colors">
              <span className="font-mono text-xs tracking-widest text-white/30 group-hover:text-white transition-colors">04</span>
              <h4 className="font-sans font-black text-2xl xl:text-3xl uppercase tracking-tighter group-hover:text-transparent transition-colors" style={{ WebkitTextStroke: "1px white" }}>DEPLOYMENT</h4>
              <p className="font-mono text-[10px] sm:text-xs leading-relaxed text-white/60 group-hover:text-white/90 transition-colors">LAUNCHING THE SYSTEM INTO THE WILD. WE ENSURE THE FINAL PRODUCT IS IMMACULATE, SECURE, AND BLAZING FAST ACROSS ALL NODES.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info at the very bottom */}
      <div className="mt-32 pt-10 border-t border-white/20 flex flex-col md:flex-row justify-between items-center font-mono text-xs tracking-widest text-white/50 uppercase relative z-10 w-full">
        <p className="mt-6 md:mt-0">&copy; {new Date().getFullYear()} VENMO STUDIO</p>

        {/* Social Links */}
        <div className="flex items-center gap-6 mt-6 md:mt-0 md:-translate-y-1">
          <a href="https://github.com/VenomDevX" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors hover-target" aria-label="GitHub">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/parth-sharma-b96661245/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors hover-target" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://www.reddit.com/user/Venom-DevX/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors hover-target" aria-label="Reddit">
            <RedditIcon className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Abstract geometric background elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/4 -right-1/4 w-[100vw] h-[100vw] border border-white/[0.02] rounded-full pointer-events-none mix-blend-overlay"
      />
    </div>
  );
}
