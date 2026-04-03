"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let rafId: number;
    let moved = false;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      moved = true;
    };

    const animate = () => {
      if (moved && ringRef.current) {
        ringX += (mouseX - ringX) * 0.35;
        ringY += (mouseY - ringY) * 0.35;
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    const onEnter = () => ringRef.current?.classList.add("cursor-hover");
    const onLeave = () => ringRef.current?.classList.remove("cursor-hover");

    document.addEventListener("mousemove", onMove, { passive: true });
    document.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    animate();
    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={ringRef}
      className="cursor-ring fixed top-0 left-0 z-9998 pointer-events-none"
      style={{ willChange: "transform", mixBlendMode: "difference" }}
    >
      <div className="w-6 h-6 rounded-full border-2 border-white -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-white" />
      </div>
    </div>
  );
}
