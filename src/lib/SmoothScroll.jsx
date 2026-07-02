import { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";

const ScrollCtx = createContext({
  scrollTo: () => {},
  stop: () => {},
  start: () => {},
});

export const useLenis = () => useContext(ScrollCtx);
export const useScrollTo = () => useContext(ScrollCtx).scrollTo;

const NAV_OFFSET = -80;

export function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = (target) => {
    const el =
      typeof target === "string" ? document.getElementById(target) : target;
    if (!el) return;
    if (lenisRef.current) {
      lenisRef.current.scrollTo(el, { offset: NAV_OFFSET });
    } else {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const stop = () => lenisRef.current && lenisRef.current.stop();
  const start = () => lenisRef.current && lenisRef.current.start();

  return (
    <ScrollCtx.Provider value={{ scrollTo, stop, start }}>
      {children}
    </ScrollCtx.Provider>
  );
}
