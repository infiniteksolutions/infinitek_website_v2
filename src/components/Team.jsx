import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { team } from "../data";

const initials = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

function MemberIntro({ text }) {
  const pRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [overflowing, setOverflowing] = useState(false);

  useEffect(() => {
    const el = pRef.current;
    if (el && !expanded) {
      setOverflowing(el.scrollHeight > el.clientHeight + 1);
    }
  }, [text, expanded]);

  return (
    <>
      <p ref={pRef} className={expanded ? "" : "clamp-3"}>
        {text}
      </p>
      {(overflowing || expanded) && (
        <button
          type="button"
          className="m-readmore"
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
    </>
  );
}

export default function Team() {
  return (
    <section className="section sec-dark">
      <div className="container">
        <div className="head-row">
          <div>
            <Reveal className="eyebrow">
              <span className="pip" /> Our Team
            </Reveal>
            <Reveal as="h2" className="h2" style={{ marginTop: 18 }}>
              Meet the people behind your project
            </Reveal>
          </div>
        </div>

        <div className="team-grid2">
          {team.map((m, i) => (
            <Reveal key={m.name + i} delay={i * 0.08}>
              <div className="member2">
                <div className="m-photo">
                  <div className="m-init">
                    <b>{initials(m.name)}</b>
                  </div>
                  {m.photo && (
                    <img
                      src={m.photo}
                      alt={m.name}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  )}
                </div>
                <div className="m-body">
                  <h3>{m.name}</h3>
                  <div className="role">{m.role}</div>
                  <MemberIntro text={m.intro} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
