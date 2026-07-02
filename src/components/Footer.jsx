import { Linkedin, Facebook, Instagram } from "lucide-react";
import DotLogo from "./DotLogo";
import { useScrollTo } from "../lib/SmoothScroll";
import { NAV } from "../data";

export default function Footer() {
  const scrollTo = useScrollTo();

  return (
    <footer className="footer">
      <div className="container">
        <div className="foot-big">INFINITEK</div>

        <div className="foot-cols">
          <div>
            <div className="brand" style={{ marginBottom: 4 }}>
              <span style={{ color: "var(--lime)", display: "inline-flex" }}>
                <DotLogo size={34} />
              </span>
              <span className="bn">
                INFINITEK<small>SOLUTIONS</small>
              </span>
            </div>
            <p className="foot-tag">
              Building digital products that grow with your business — websites,
              e-commerce &amp; custom CRMs from Islamabad.
            </p>
            <div className="socials">
              <a href="#" onClick={(e) => e.preventDefault()} aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4>Explore</h4>
            {NAV.slice(1, 6).map(([label, id]) => (
              <a key={id} onClick={() => scrollTo(id)} style={{ cursor: "pointer" }}>
                {label}
              </a>
            ))}
          </div>

          <div>
            <h4>Services</h4>
            <a onClick={() => scrollTo("services")} style={{ cursor: "pointer" }}>
              Creative &amp; Design
            </a>
            <a onClick={() => scrollTo("services")} style={{ cursor: "pointer" }}>
              Web Development
            </a>
            <a onClick={() => scrollTo("services")} style={{ cursor: "pointer" }}>
              Mobile &amp; App Development
            </a>
            <a onClick={() => scrollTo("services")} style={{ cursor: "pointer" }}>
              Business &amp; Infrastructure
            </a>
          </div>
        </div>

        <div className="foot-bot">
          <p>© {new Date().getFullYear()} Infinitek Solutions. All rights reserved.</p>
          <p className="made">
            Crafted with <b>precision</b> in Islamabad.
          </p>
        </div>
      </div>
    </footer>
  );
}
