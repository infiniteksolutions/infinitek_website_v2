import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import DotLogo from "./DotLogo";
import Magnetic from "./Magnetic";
import Counter from "./Counter";
import { useScrollTo } from "../lib/SmoothScroll";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero({ started }) {
  const scrollTo = useScrollTo();
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const parallax = useTransform(scrollY, [0, 800], [0, 90]);
  const animateState = started ? "show" : "hidden";

  return (
    <section id="home" className="hero grid-bg">
      <div
        className="glow"
        style={{
          background: "var(--lime)",
          width: 420,
          height: 420,
          top: -120,
          right: -80,
        }}
      />
      <div
        className="glow"
        style={{
          background: "var(--soft)",
          width: 300,
          height: 300,
          bottom: -100,
          left: -80,
          opacity: 0.25,
        }}
      />

      <div className="container hero-grid">
        <motion.div variants={container} initial="hidden" animate={animateState}>
          <motion.div variants={item}>
            <span className="badge">
              <span className="live" /> Available for new projects
            </span>
          </motion.div>

          <motion.h1
            className="h-display"
            variants={item}
            style={{ marginTop: 26 }}
          >
            Building <span className="accent">digital products</span> that work
            as hard as you do.
          </motion.h1>

          <motion.p className="lead" variants={item} style={{ marginTop: 26 }}>
            We design and develop websites, e-commerce platforms, and custom
            CRMs that help businesses sell more, manage smarter, and grow faster.
          </motion.p>

          <motion.div className="hero-cta" variants={item}>
            <Magnetic>
              <button
                className="btn btn-primary"
                onClick={() => scrollTo("contact")}
              >
                Get Started <ArrowRight size={17} className="ic" />
              </button>
            </Magnetic>
            <button
              className="btn btn-ghost"
              onClick={() => scrollTo("services")}
            >
              Explore Services
            </button>
          </motion.div>

          <motion.div className="stats" variants={item}>
            <div className="stat">
              <div className="num">
                <Counter to={5} suffix="+" />
              </div>
              <div className="lab">Years of Experience</div>
            </div>
            <div className="stat">
              <div className="num">
                <Counter to={30} suffix="+" />
              </div>
              <div className="lab">Projects Delivered</div>
            </div>
            <div className="stat">
              <div className="num">
                <Counter to={25} suffix="+" />
              </div>
              <div className="lab">Happy Clients</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div style={reduce ? undefined : { y: parallax }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={started ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div
              className="weave weave-float"
              style={{ color: "var(--lime)" }}
            >
              <DotLogo size={460} anim="pulse" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="scrollcue">
        <ArrowDown size={14} className="ar" /> Scroll to explore
      </div>
    </section>
  );
}
