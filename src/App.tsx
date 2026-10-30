import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import WorkSection from "./components/WorkSection";
import Studio from "./pages/Studio";
import Preloader from "./components/Preloader";
import NoiseOverlay from "./components/NoiseOverlay";

import Contact from "./pages/Contact";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  // Automatically scroll to top when navigating to a new page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/studio"
          element={
            <PageTransition>
              <Studio />
            </PageTransition>
          }
        />
        <Route
          path="/work"
          element={
            <PageTransition>
              <WorkSection />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Basic setup to ensure dark theme and no-curves are applied globally
    document.body.classList.add("bg-black", "text-white", "no-curves");
    return () => {
      document.body.classList.remove("bg-black", "text-white", "no-curves");
    };
  }, []);

  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        {loading && (
          <Preloader onComplete={() => setLoading(false)} key="preloader" />
        )}
      </AnimatePresence>

      <div className="relative w-full min-h-screen selection:bg-white selection:text-black flex flex-col">
        {/* Custom Global Cursor */}
        <Cursor />

        {/* Global Cinematic Noise */}
        <NoiseOverlay />

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow flex flex-col">
          <AnimatedRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
}
