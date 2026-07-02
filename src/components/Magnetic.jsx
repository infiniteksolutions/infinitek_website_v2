import { useRef } from "react";
import { useReducedMotion } from "framer-motion";

export default function Magnetic({ children, strength = 0.35 }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const move = (e) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const leave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <span ref={ref} className="magnetic" onMouseMove={move} onMouseLeave={leave}>
      {children}
    </span>
  );
}
