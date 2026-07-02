import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { SERVICES } from "../data";

export default function Services() {
  return (
    <section id="services" className="section sec-dark grid-bg">
      <div className="container">
        <div className="head-row">
          <div>
            <Reveal className="eyebrow">
              <span className="pip" /> What We Offer
            </Reveal>
            <Reveal as="h2" className="h2" style={{ marginTop: 18, maxWidth: "18ch" }}>
              Everything you need to{" "}
              <span className="accent">design, build &amp; launch</span>
            </Reveal>
          </div>
          <Reveal as="p" className="lead" style={{ maxWidth: "34ch" }}>
            Four service tracks, one end-to-end team — design, web, mobile, and
            infrastructure handled in-house.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => (
            <Reveal key={s.no} delay={i * 0.08}>
              <div className="svc-card" data-hover>
                <ArrowUpRight className="arrow" size={20} />
                <div className="no">{s.no}</div>
                <div className="ico">
                  <s.Icon size={26} />
                </div>
                <h3 className="h3">{s.title}</h3>
                <p
                  style={{
                    fontSize: ".93rem",
                    color: "var(--muted)",
                    lineHeight: 1.6,
                    marginBottom: 16,
                  }}
                >
                  {s.desc}
                </p>
                {s.points.map((p) => (
                  <div key={p} className="li">
                    <span className="dot" />
                    {p}
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
