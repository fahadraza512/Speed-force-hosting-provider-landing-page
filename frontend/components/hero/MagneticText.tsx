"use client";

import { useRef, useEffect } from "react";

interface Props {
  children: React.ReactNode;
  strength?: number;
}

export default function MagneticText({ children, strength = 25 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId: number;

    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = Math.max(rect.width, rect.height);

        if (dist < maxDist && dist > 0) {
          const factor = (1 - dist / maxDist) * strength;
          el.style.transform = `translate(${(-dx / dist) * factor}px, ${(-dy / dist) * factor * 0.5}px)`;
        } else {
          el.style.transform = "translate(0px, 0px)";
        }
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, [strength]);

  return (
    <div
      ref={ref}
      style={{ transition: "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)", willChange: "transform", display: "inline-block" }}
    >
      {children}
    </div>
  );
}
