import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Reveal from "./Reveal";
import DotLogo from "./DotLogo";
import { workFilters, works } from "../data";

export default function Work() {
  const [filter, setFilter] = useState("all");

  const filtered = works.filter((w) => w.category.includes(filter));

  return (
    <section id="work" className="section sec-soft">
      <div className="container">
        <div className="head-row">
          <div>
            <Reveal className="eyebrow">
              <span className="pip" /> Our Success Stories
            </Reveal>
            <Reveal as="h2" className="h2" style={{ marginTop: 18 }}>
              See the results we've delivered
            </Reveal>
          </div>
        </div>

        <Reveal className="work-filters">
          {workFilters.map((f) => (
            <button
              key={f.value}
              className={"wf-btn" + (filter === f.value ? " active" : "")}
              onClick={() => setFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        {filtered.length === 0 ? (
          <div className="work-empty">
            No projects in this category yet — check back soon.
          </div>
        ) : (
          <motion.div layout className="work-grid">
            <AnimatePresence mode="popLayout">
              {filtered.map((w) => (
                <motion.div
                  layout
                  key={w.id || w.title}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 260, damping: 30 }}
                  className="work-card2"
                >
                  <div className="wc-media">
                    <div className="wc-fallback">
                      <DotLogo size={46} />
                      <span>{w.title}</span>
                    </div>
                    {w.cover && (
                      <img
                        src={w.cover}
                        alt={w.title}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    )}
                  </div>
                  <div className="wc-body">
                    <div className="wc-tags">
                      {w.category
                        .filter((c) => c !== "all")
                        .map((c) => (
                          <span key={c}>{c}</span>
                        ))}
                    </div>
                    <h3>{w.title}</h3>
                    <p>{w.description}</p>
                    {(w.preview || w.codeBase) && (
                      <div className="wc-links">
                        {w.preview && (
                          <a href={w.preview} target="_blank" rel="noreferrer">
                            View Live <ArrowUpRight size={15} />
                          </a>
                        )}
                        {w.codeBase && (
                          <a href={w.codeBase} target="_blank" rel="noreferrer">
                            Source <Github size={15} />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
