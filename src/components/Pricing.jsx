import { Check } from "lucide-react";
import Reveal from "./Reveal";
import { useScrollTo } from "../lib/SmoothScroll";
import { PLANS } from "../data";

export default function Pricing() {
  const scrollTo = useScrollTo();

  return (
    <section id="pricing" className="section sec-white">
      <div className="container">
        <div className="head-row">
          <div>
            <Reveal className="eyebrow">
              <span className="pip" /> Our Pricing
            </Reveal>
            <Reveal as="h2" className="h2" style={{ marginTop: 18 }}>
              Transparent pricing, tailored to your project
            </Reveal>
          </div>
          <Reveal as="p" className="lead" style={{ maxWidth: "32ch" }}>
            Pick a starting point — every plan can be scoped up or down to fit
            exactly what you need.
          </Reveal>
        </div>

        <div className="price-grid">
          {PLANS.map((pl, i) => (
            <Reveal key={pl.name} delay={i * 0.08} style={{ height: "100%" }}>
              <div className={"plan" + (pl.pop ? " pop" : "")}>
                {pl.pop && <div className="tag">Most Popular</div>}
                <div className="pname">{pl.name}</div>
                <div className="pbest">{pl.best}</div>
                <div className="pp">
                  {pl.price}
                  <small>/ project</small>
                </div>
                <div className="feats">
                  {pl.feats.map((f) => (
                    <div key={f} className="feat">
                      <span className="ck">
                        <Check size={12} />
                      </span>
                      {f}
                    </div>
                  ))}
                </div>
                <button
                  className={"btn " + (pl.pop ? "btn-primary" : "btn-dark")}
                  onClick={() => scrollTo("contact")}
                >
                  {pl.cta}
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="price-note">
          Need something custom?{" "}
          <a
            onClick={() => scrollTo("contact")}
            style={{
              color: "#0c0c0c",
              fontWeight: 600,
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Request a custom quote →
          </a>
        </p>
      </div>
    </section>
  );
}
