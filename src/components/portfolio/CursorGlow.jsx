import { useEffect, useRef } from "react";

// Minimal magnetic cursor — dot + ring follower. Disabled on touch.
export default function CursorGlow() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
    };

    const onOver = (e) => {
      const tag = (e.target.tagName || "").toLowerCase();
      const isInteractive =
        tag === "a" ||
        tag === "button" ||
        e.target.closest?.("[data-cursor='hover']");
      if (isInteractive) {
        ring.style.width = "60px";
        ring.style.height = "60px";
        ring.style.borderColor = "rgba(245,158,11,0.9)";
      } else {
        ring.style.width = "36px";
        ring.style.height = "36px";
        ring.style.borderColor = "rgba(245,158,11,0.5)";
      }
    };

    const raf = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      const w = parseFloat(ring.style.width || "36");
      ring.style.transform = `translate(${rx - w / 2}px, ${ry - w / 2}px)`;
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
