import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DotLogo from "./DotLogo";

export default function Preloader({ onComplete, duration = 2200 }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 2);
      setProgress(Math.round(eased * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else if (onComplete) {
        setTimeout(onComplete, 320);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [duration, onComplete]);

  return (
    <motion.div
      className="preload"
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="mark" style={{ color: "var(--lime)" }}>
        <DotLogo size={64} anim="build" />
      </div>
      <div className="pl-name">Infinitek Solutions</div>
      <div className="pl-bar">
        <div className="pl-fill" style={{ width: progress + "%" }} />
      </div>
      <div className="pl-num">
        {progress}
        <span className="pct">%</span>
      </div>
    </motion.div>
  );
}
