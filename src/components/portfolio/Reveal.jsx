import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, delay = 0, as: As = "div", className = "", ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <As
      ref={ref}
      className={`reveal ${shown ? "in-view" : ""} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </As>
  );
}
