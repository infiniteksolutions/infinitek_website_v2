import Reveal from "./Reveal";

const VM = [
  [
    "Our Vision",
    "To become the go-to development partner for businesses that want technology built around their real workflow — not the other way around.",
  ],
  [
    "Our Mission",
    "To deliver fast, reliable, and scalable digital solutions that turn everyday business operations into a competitive advantage.",
  ],
  [
    "Our Values",
    "Transparency, ownership, and clean code — we build things we'd be proud to maintain ourselves.",
  ],
  [
    "Our Expertise",
    "Full-stack development with React, Node, Express & MongoDB — from storefronts to internal management systems.",
  ],
];

export default function About() {
  return (
    <section id="about" className="section sec-dark">
      <div className="container about-grid">
        <div>
          <Reveal className="eyebrow">
            <span className="pip" /> About Us
          </Reveal>
          <Reveal as="h2" className="h2" delay={0.05} style={{ marginTop: 20 }}>
            We help businesses{" "}
            <span className="accent">build, sell, and manage</span> through
            custom web &amp; CRM solutions
          </Reveal>
          <Reveal as="p" className="lead" delay={0.1} style={{ marginTop: 24 }}>
            Infinitek Solutions is a web and software development agency based in
            Islamabad, founded by Kashif Iqbal. We partner with businesses of
            every size to design responsive websites, e-commerce stores, and CRM
            systems built around how they actually operate — not generic
            templates.
          </Reveal>
          <Reveal as="p" className="lead" delay={0.15} style={{ marginTop: 18 }}>
            From the first wireframe to the final deployment, our team handles
            design, development, and integration end-to-end, so you launch with
            a product that's ready to scale.
          </Reveal>
          <Reveal className="chips" delay={0.2}>
            <span className="chip">
              <b>React</b>
            </span>
            <span className="chip">
              <b>Node.js</b>
            </span>
            <span className="chip">
              <b>Express</b>
            </span>
            <span className="chip">
              <b>MongoDB</b>
            </span>
          </Reveal>
        </div>

        <div className="vm-grid">
          {VM.map(([t, d], i) => (
            <Reveal key={t} className="vm" delay={i * 0.08}>
              <div className="t">{t}</div>
              <p>{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
