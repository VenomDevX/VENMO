import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "../data";
import { Code, X, Github, Linkedin } from "lucide-react";

const RedditIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
  </svg>
);

interface ProjectProps {
  project: any;
  index: number;
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  const [showCode, setShowCode] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div 
      className="border border-white/20 group hover:border-white transition-colors duration-500 hover-target relative flex flex-col h-[400px] md:h-[500px] overflow-hidden"
      onMouseEnter={() => videoRef.current?.play().catch(() => {})}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-white/20 group-hover:border-white transition-colors z-10 bg-black">
        <span className="font-mono text-xs tracking-widest text-white/50 group-hover:text-white transition-colors">
          {project.id}
        </span>
      </div>

      {/* Media/Content Area */}
      <div className="flex-1 overflow-hidden relative bg-black">
        {project.video ? (
          <video
            ref={videoRef}
            src={project.video}
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${showCode ? "brightness-50 scale-110" : "group-hover:scale-105"}`}
          />
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${showCode ? "brightness-50 scale-110" : "group-hover:scale-105"}`}
          />
        )}



        {/* Code overlay */}
        <AnimatePresence>
          {showCode && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-md p-6 z-20 flex flex-col"
            >
              <div className="flex justify-between items-center mb-4 pb-2 border-b border-white/20">
                <span className="font-mono text-[10px] tracking-widest text-white/50">
                  SOURCE_CODE
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowCode(false);
                  }}
                  className="hover:text-red-500 transition-colors hover-target z-30"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <pre className="font-mono text-[10px] md:text-xs text-green-400 overflow-auto flex-1">
                <code>{project.code}</code>
              </pre>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Info */}
      <div className="p-6 border-t border-white/20 group-hover:border-white transition-colors z-10 bg-black flex flex-col justify-between">
        <div>
          <h3 className="font-display text-xl md:text-2xl uppercase tracking-tighter truncate">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-white/50 mt-2">
            {project.category}
          </p>
        </div>
        <div className="flex gap-2 w-full mt-6">
          <button
            onClick={() => setShowCode(!showCode)}
            className="font-mono text-[10px] tracking-widest uppercase border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center gap-2 hover-target flex-1"
          >
            <Code className="w-3 h-3" />
            {showCode ? "HIDE CODE" : "SHOW CODE"}
          </button>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-widest uppercase border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center gap-2 hover-target flex-1"
            >
              <Github className="w-3 h-3" />
              GIT REPO
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default function WorkSection() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const categories = [
    "ALL",
    "MOTION GRAPHICS",
    "VFX / COMPOSITING",
    "BRAND IDENT",
    "3D ANIMATION"
  ];

  const filteredProjects =
    activeCategory === "ALL"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="w-full min-h-screen bg-black text-white px-6 md:px-10 pt-32 pb-6 border-grid relative overflow-hidden flex flex-col" id="work">
      <div className="flex-grow flex flex-col lg:flex-row items-start w-full relative z-10 gap-10">
      {/* Mobile Sidebar (Normal Flow) */}
      <div className="lg:hidden w-full flex flex-col gap-6 mb-10 z-10">
        <div className="font-mono text-xs tracking-widest text-white/50 border-b border-white/20 pb-4">
          FILTER BY CATEGORY
        </div>
        <div className="flex flex-row gap-6 overflow-x-auto hide-scrollbar w-full">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`font-mono text-xs tracking-widest text-left uppercase whitespace-nowrap transition-colors hover-target ${
                activeCategory === category
                  ? "text-white"
                  : "text-white/40 hover:text-white/80"
              }`}
            >
              <span
                className={`inline-block mr-2 transition-opacity ${activeCategory === category ? "opacity-100" : "opacity-0"}`}
              >
                [
              </span>
              {category}
              <span
                className={`inline-block ml-2 transition-opacity ${activeCategory === category ? "opacity-100" : "opacity-0"}`}
              >
                ]
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Fixed Sidebar */}
      <div className="hidden lg:flex fixed top-32 left-10 w-64 h-[calc(100vh-8rem)] flex-col gap-6 z-10 overflow-y-auto hide-scrollbar pb-10">
        <div className="font-mono text-xs tracking-widest text-white/50 border-b border-white/20 pb-4">
          FILTER BY CATEGORY
        </div>
        <div className="flex flex-col gap-6 w-full">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`font-mono text-sm tracking-widest text-left uppercase whitespace-nowrap transition-colors hover-target ${
                activeCategory === category
                  ? "text-white"
                  : "text-white/40 hover:text-white/80"
              }`}
            >
              <span
                className={`inline-block mr-2 transition-opacity ${activeCategory === category ? "opacity-100" : "opacity-0"}`}
              >
                [
              </span>
              {category}
              <span
                className={`inline-block ml-2 transition-opacity ${activeCategory === category ? "opacity-100" : "opacity-0"}`}
              >
                ]
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 w-full lg:pl-[300px] flex flex-col">
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/20 pb-10">
          <h2 className="text-sm font-mono tracking-widest text-white/50 mb-4 md:mb-0">
            [ 01 ] SELECTED PROJECTS
          </h2>
          <h3 className="font-display text-4xl md:text-5xl lg:text-7xl uppercase tracking-tighter md:text-right">
            MOTION ARCHIVE
          </h3>
        </div>

        {/* Project Grid */}
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ProjectCard project={project} index={idx} />
                </motion.div>
              ))
            ) : (
              <motion.div
                key="empty-state"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="col-span-1 xl:col-span-2 flex flex-col items-center justify-center py-32 border border-white/10 bg-white/5"
              >
                <h4 className="font-display text-2xl md:text-4xl uppercase tracking-tighter text-white/50 mb-4 text-center">
                  PROJECTS IN DEVELOPMENT
                </h4>
                <p className="font-mono text-xs md:text-sm tracking-widest text-white/30 uppercase text-center">
                  Stay tuned. Releasing soon.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>

      {/* Footer Info at the very bottom */}
      <div className="mt-32 pt-10 border-t border-white/20 flex flex-col md:flex-row justify-between items-center font-mono text-xs tracking-widest text-white/50 uppercase relative z-10 w-full">
        <p className="mt-6 md:mt-0">
          &copy; {new Date().getFullYear()} VENMO STUDIO | BUILT BY{" "}
          <a href="https://github.com/VenomDevX" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors hover-target">
            VENOMDEVX
          </a>
        </p>
        
        {/* Social Links */}
        <div className="flex items-center gap-6 mt-6 md:mt-0 md:-translate-y-1">
          <a href="https://github.com/VenomDevX" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors hover-target" aria-label="GitHub">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/parthsharma-venomdevx/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors hover-target" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://www.reddit.com/user/Venom-DevX/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors hover-target" aria-label="Reddit">
            <RedditIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
