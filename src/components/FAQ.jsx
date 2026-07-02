import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";
import { FAQS } from "../data";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section sec-dark grid-bg">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <Reveal className="eyebrow" style={{ justifyContent: "center" }}>
            <span className="pip" /> FAQ
          </Reveal>
          <Reveal as="h2" className="h2" style={{ marginTop: 18 }}>
            Answers to common questions
          </Reveal>
        </div>

        <div className="faq-list">
          {FAQS.map((f, i) => (
            <Reveal
              key={i}
              className={"faq-item" + (open === i ? " open" : "")}
              delay={i * 0.05}
            >
              <button
                className="faq-q"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <h3>{f.q}</h3>
                <span className="faq-ic">
                  <Plus size={18} />
                </span>
              </button>
              <div className="faq-a">
                <div className="inner">
                  <p>{f.a}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
