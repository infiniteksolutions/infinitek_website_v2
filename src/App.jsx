import { useEffect, useState } from "react";
import { AnimatePresence, useReducedMotion } from "framer-motion";

import { useLenis } from "./lib/SmoothScroll";
import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Process from "./components/Process";
import Work from "./components/Work";
import Team from "./components/Team";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const reduce = useReducedMotion();
  const [loading, setLoading] = useState(true);
  const { stop, start } = useLenis();

  // Skip the preloader for users who prefer reduced motion.
  useEffect(() => {
    if (reduce) setLoading(false);
  }, [reduce]);

  // Lock scrolling while the preloader is on screen.
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
      stop();
    } else {
      document.body.style.overflow = "";
      start();
    }
  }, [loading, stop, start]);

  return (
    <>
      <Cursor />
      <ScrollProgress />

      <AnimatePresence>
        {loading && !reduce && (
          <Preloader key="preloader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      <Navbar />

      <main>
        <Hero started={!loading} />
        <Marquee />
        <About />
        <Services />
        <WhyUs />
        <Process />
        <Work />
        <Team />
        <Pricing />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
