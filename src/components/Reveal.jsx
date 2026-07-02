import { motion, useReducedMotion } from "framer-motion";

/**
 * Scroll-triggered reveal. Wrap any block to fade + slide it up when
 * it enters the viewport (once). Supports a stagger `delay`.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 30,
  className = "",
  as = "div",
  style,
  ...rest
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} style={style} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.3, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
