"use client";

import { useRef, useEffect, ReactNode } from "react";

export default function ScaleToFit({ children }: { children: ReactNode }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fit = () => {
      const outer = outerRef.current;
      const inner = innerRef.current;
      if (!outer || !inner) return;

      // Reset first to get true natural size
      inner.style.transform = "none";
      inner.style.height = "auto";

      const availH = window.innerHeight;
      const naturalH = inner.getBoundingClientRect().height;

      if (naturalH > availH) {
        const scale = availH / naturalH;
        inner.style.transform = `scale(${scale})`;
        inner.style.transformOrigin = "top center";
        // Collapse the extra space so next section isn't pushed down
        inner.style.height = `${naturalH * scale}px`;
      }
    };

    // Wait for fonts/images to load before measuring
    const timer = setTimeout(fit, 100);
    window.addEventListener("resize", fit);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", fit);
    };
  }, []);

  return (
    <div ref={outerRef} className="overflow-hidden">
      <div ref={innerRef}>
        {children}
      </div>
    </div>
  );
}
