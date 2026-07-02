import Reveal from "./Reveal";
import { PILLARS } from "../data";

export default function WhyUs() {
  return (
    <section className="section sec-dark">
      <div className="container">
        <div className="head-row">
          <div>
            <Reveal className="eyebrow">
              <span className="pip" /> What Makes Us Different
            </Reveal>
            <Reveal as="h2" className="h2" style={{ marginTop: 18, maxWidth: "18ch" }}>
              We focus on{" "}
              <span className="accent">results, transparency</span>, and clean
              engineering
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="pillar">
                <div className="pi">
                  <p.Icon size={22} />
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
