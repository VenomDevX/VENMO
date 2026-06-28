import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full px-6 md:px-10 flex justify-between items-center z-50 text-white uppercase font-sans font-bold tracking-widest text-xs md:text-sm transition-all duration-500 ${
        scrolled 
          ? "py-6 bg-black border-b border-white/20" 
          : "py-6 md:py-10 bg-transparent border-b border-transparent mix-blend-difference"
      }`}
    >
      <Link to="/" className="hover-target relative overflow-hidden group">
        <span className="block group-hover:-translate-y-full transition-transform duration-300">VENMO</span>
        <span className="absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">VENMO</span>
      </Link>
      
      <div className="flex gap-8">
        {[
          { name: 'Home', path: '/' },
          { name: 'Motion', path: '/work' },
          { name: 'Studio', path: '/studio' },
          { name: 'Contact', path: '/contact' }
        ].map((item) => (
          <Link key={item.name} to={item.path} className="hover-target relative overflow-hidden group hidden md:block">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">{item.name}</span>
            <span className="absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">{item.name}</span>
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}

