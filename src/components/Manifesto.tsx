import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const Word = ({ children, progress, range, isOutlined }: any) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  const y = useTransform(progress, range, [40, 0]);

  return (
    <motion.span
      style={{
        opacity,
        y,
        ...(isOutlined
          ? {
              WebkitTextStroke: "1px white",
              WebkitTextFillColor: "transparent",
            }
          : {}),
      }}
      className={`inline-block ${isOutlined ? "text-transparent" : "text-white"}`}
    >
      {children}
    </motion.span>
  );
};

export default function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 40%"],
  });

  const text =
    "We exist at the intersection of kinetic energy and computational logic. Crafting digital experiences that defy the static nature of the web.";
  const words = text.split(" ");

  return (
    <section
      ref={containerRef}
      className="w-full min-h-screen py-32 md:py-48 px-6 md:px-10 bg-black text-white border-b border-white/20 flex flex-col justify-center relative"
    >
      <div className="absolute inset-0 border-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <h2 className="text-sm font-mono tracking-widest text-white/50 mb-16 md:mb-24 uppercase border-l-2 border-white pl-6">
          [ 00 ] The Manifesto
        </h2>
        <div className="font-sans font-black text-4xl md:text-6xl lg:text-8xl xl:text-[7.5rem] leading-none uppercase flex flex-wrap gap-x-4 gap-y-2 md:gap-x-6 md:gap-y-4 lg:gap-x-8 lg:gap-y-6">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            // Words to outline for emphasis
            const isOutlined = [
              "kinetic",
              "energy",
              "computational",
              "logic.",
              "static",
            ].includes(word.toLowerCase());

            return (
              <Word
                key={i}
                progress={scrollYProgress}
                range={[start, end]}
                isOutlined={isOutlined}
              >
                {word}
              </Word>
            );
          })}
        </div>
      </div>
    </section>
  );
}
