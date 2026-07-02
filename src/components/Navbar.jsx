import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import DotLogo from "./DotLogo";
import Magnetic from "./Magnetic";
import { useScrollTo } from "../lib/SmoothScroll";
import { NAV } from "../data";

export default function Navbar() {
  const scrollTo = useScrollTo();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const secs = document.querySelectorAll("section[id]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    secs.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const go = (id) => {
    setMenu(false);
    scrollTo(id);
  };

  return (
    <>
      <header className={"nav" + (scrolled ? " scrolled" : "")}>
        <div className="container row">
          <button
            className="brand"
            onClick={() => go("home")}
            aria-label="Infinitek Solutions home"
          >
            <span style={{ color: "var(--lime)", display: "inline-flex" }}>
              <DotLogo size={34} />
            </span>
            <span className="bn">
              INFINITEK<small>SOLUTIONS</small>
            </span>
          </button>

          <nav className="nav-links">
            {NAV.map(([label, id]) => (
              <a
                key={id}
                onClick={() => go(id)}
                className={active === id ? "active" : ""}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="nav-cta">
            <Magnetic>
              <button className="btn btn-primary" onClick={() => go("contact")}>
                Get a Free Quote <ArrowUpRight size={17} className="ic" />
              </button>
            </Magnetic>
            <button
              className="burger"
              onClick={() => setMenu(true)}
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <div className={"mobile" + (menu ? " open" : "")}>
        <button
          className="m-close"
          onClick={() => setMenu(false)}
          aria-label="Close menu"
        >
          <X size={20} />
        </button>
        {NAV.map(([label, id], i) => (
          <a key={id} onClick={() => go(id)}>
            {label}
            <span>0{i + 1}</span>
          </a>
        ))}
        <button
          className="btn btn-primary"
          style={{ marginTop: 30, justifyContent: "center" }}
          onClick={() => go("contact")}
        >
          Get a Free Quote <ArrowUpRight size={17} />
        </button>
      </div>
    </>
  );
}
