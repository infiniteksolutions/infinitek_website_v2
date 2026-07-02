import Reveal from "./Reveal";
import { STEPS } from "../data";

export default function Process() {
  return (
    <section id="process" className="section sec-dark grid-bg">
      <div className="container">
        <div className="head-row">
          <div>
            <Reveal className="eyebrow">
              <span className="pip" /> Our Working Process
            </Reveal>
            <Reveal as="h2" className="h2" style={{ marginTop: 18, maxWidth: "20ch" }}>
              A simple, step-by-step path to launch with{" "}
              <span className="accent">confidence</span>
            </Reveal>
          </div>
          <Reveal as="p" className="lead" style={{ maxWidth: "30ch" }}>
            Roughly 3 weeks for a website, 4–5 for a CRM, ~8 weeks combined —
            adjusted to your scope.
          </Reveal>
        </div>

        <div className="steps">
          {STEPS.map((s, i) => (
            <Reveal key={s.no} className="step" delay={i * 0.06}>
              <div className="sn">{s.no}</div>
              <div>
                <h3 className="h3">{s.title}</h3>
                <p>{s.desc}</p>
              </div>
              <div className="dur">{s.dur}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
