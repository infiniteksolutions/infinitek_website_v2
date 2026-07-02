import { Sparkles } from "lucide-react";

export default function Marquee() {
  return (
    <div className="marq" aria-hidden="true">
      <div className="marq-track">
        {[0, 1].map((k) => (
          <span key={k}>
            Brand Identity <Sparkles size={22} className="star" />
            Web Development <Sparkles size={22} className="star" />
            Mobile Apps <Sparkles size={22} className="star" />
            UI / UX Design <Sparkles size={22} className="star" />
            CRM &amp; Automation <Sparkles size={22} className="star" />
            3D Rendering <Sparkles size={22} className="star" />
          </span>
        ))}
      </div>
    </div>
  );
}
