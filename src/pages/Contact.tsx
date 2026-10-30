import { motion } from "motion/react";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";

const RedditIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
  </svg>
);

export default function Contact() {
  return (
    <div className="w-full min-h-screen bg-black text-white px-6 md:px-10 pt-32 pb-6 border-grid relative overflow-hidden flex flex-col">
      <div className="flex-grow flex flex-col lg:flex-row gap-20 z-10">
        {/* Left Column */}
        <div className="lg:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-sm font-mono tracking-widest text-white/50 mb-10 uppercase">
              [ 03 ] Initiate Sequence
            </h2>
            <h1
              className="font-display text-[12vw] lg:text-[8vw] leading-[0.8] tracking-tighter uppercase mb-8 glitch"
              data-text="TRANSMIT"
            >
              TRANSMIT
            </h1>
            <p className="font-mono text-sm md:text-base text-white/70 max-w-md leading-relaxed">
              ENTER DATA INTO THE TERMINAL BELOW TO ESTABLISH A CONNECTION WITH
              VENMO STUDIO SECURE SERVERS.
            </p>
          </div>

          <div className="mt-20 lg:mt-0 flex flex-col gap-6 font-mono text-sm tracking-widest uppercase">
            <div className="flex flex-col gap-2">
              <span className="text-white/50">DIRECT LINK</span>
              <a
                href="https://www.venomdevx.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/70 transition-colors inline-flex items-center gap-2 w-fit hover-target"
              >
                WWW.VENOMDEVX.DEV <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-white/50">COORDINATES</span>
              <span>
                28.5355° N, 77.3910° E<br />
                NCR, INDIA
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-white/50">COMMUNICATION FREQUENCIES</span>
              <div className="flex gap-4">
                <a
                  href="https://github.com/VenomDevX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/70 transition-colors hover-target"
                >
                  GITHUB
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <form
            className="flex flex-col gap-12 w-full max-w-xl mx-auto lg:mx-0 lg:ml-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-4 relative group">
              <label
                htmlFor="name"
                className="font-mono text-xs tracking-widest text-white/50 uppercase"
              >
                [ ID ] NAME
              </label>
              <input
                type="text"
                id="name"
                className="bg-transparent border-b border-white/20 pb-4 text-xl font-mono focus:outline-none focus:border-white transition-colors hover-target rounded-none"
                placeholder="ENTER NAME"
                required
              />
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-500 group-focus-within:w-full" />
            </div>

            <div className="flex flex-col gap-4 relative group">
              <label
                htmlFor="email"
                className="font-mono text-xs tracking-widest text-white/50 uppercase"
              >
                [ COMMS ] EMAIL
              </label>
              <input
                type="email"
                id="email"
                className="bg-transparent border-b border-white/20 pb-4 text-xl font-mono focus:outline-none focus:border-white transition-colors hover-target rounded-none"
                placeholder="ENTER EMAIL"
                required
              />
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-500 group-focus-within:w-full" />
            </div>

            <div className="flex flex-col gap-4 relative group">
              <label
                htmlFor="message"
                className="font-mono text-xs tracking-widest text-white/50 uppercase"
              >
                [ DATA ] MESSAGE
              </label>
              <textarea
                id="message"
                rows={4}
                className="bg-transparent border-b border-white/20 pb-4 text-xl font-mono focus:outline-none focus:border-white transition-colors hover-target resize-none rounded-none"
                placeholder="ENTER MESSAGE PROTOCOL"
                required
              />
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-500 group-focus-within:w-full" />
            </div>

            <button
              type="submit"
              className="mt-8 group flex items-center justify-between font-mono text-lg tracking-widest border border-white px-8 py-6 hover:bg-white hover:text-black transition-all duration-500 hover-target"
            >
              <span>SEND TRANSMISSION</span>
              <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform duration-500" />
            </button>
          </form>
        </div>
      </div>

      {/* Footer Info at the very bottom */}
      <div className="mt-24 pt-10 border-t border-white/20 flex flex-col md:flex-row justify-between items-center font-mono text-xs tracking-widest text-white/50 uppercase relative z-10 w-full">
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

      {/* Abstract geometric background elements */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] border border-white/[0.03] rounded-none pointer-events-none mix-blend-overlay"
      />
    </div>
  );
}
