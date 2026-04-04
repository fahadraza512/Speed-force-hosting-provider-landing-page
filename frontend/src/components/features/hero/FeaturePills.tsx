"use client";

import { useEffect, useRef, useState } from "react";

const items = [
  { icon: "local_mall",    label: "Sell online" },
  { icon: "move_to_inbox", label: "Transfer WordPress sites" },
  { icon: "web",           label: "Launch a website" },
  { icon: "auto_awesome",  label: "Code with AI" },
  { icon: "mail",          label: "Send email campaigns" },
  { icon: "speed",         label: "Boost Performance" },
  { icon: "cloud_upload",  label: "Deploy Instantly" },
  { icon: "shield",        label: "Secure Your Site" },
];

const CARD_H  = 52;
const GAP     = 12;
const STEP    = CARD_H + GAP;
const VISIBLE = 5;
const CENTER  = Math.floor(VISIBLE / 2);

export default function FeaturePills() {
  const [index, setIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let t: ReturnType<typeof setInterval>;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          t = setInterval(() => setIndex(p => p + 1), 3000);
        } else {
          clearInterval(t);
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => { clearInterval(t); observer.disconnect(); };
  }, []);

  const containerH = VISIBLE * STEP;

  return (
    <div
      ref={containerRef}
      className="relative w-96 select-none overflow-hidden"
      style={{ height: containerH, paddingRight: "20px", paddingTop: "12px", paddingBottom: "12px" }}
      aria-label="Feature carousel"
      role="region"
    >
      {Array.from({ length: VISIBLE + 2 }, (_, i) => {
        const slotOffset = i - 1;
        const itemIdx    = ((index + slotOffset) % items.length + items.length) % items.length;
        const item       = items[itemIdx];
        const dist       = slotOffset - CENTER;
        const absDist    = Math.abs(dist);
        const isActive   = dist === 0;

        const scale   = isActive ? 1 : absDist === 1 ? 0.84 : 0.68;
        const opacity = isActive ? 1 : absDist === 1 ? 0.7 : absDist === 2 ? 0.4 : 0;
        const topPx   = (CENTER + dist) * STEP + (STEP - CARD_H) / 2;

        return (
          <div
            key={itemIdx}
            className="absolute left-0"
            style={{
              top:             topPx,
              height:          CARD_H,
              width:           "calc(100% - 16px)",
              transform:       `scale(${scale})`,
              transformOrigin: "center center",
              opacity,
              zIndex:          VISIBLE - absDist,
              transition:      "top 0.9s cubic-bezier(0.4,0,0.2,1), transform 0.9s cubic-bezier(0.4,0,0.2,1), opacity 0.7s ease",
            }}
          >
            {/* Card */}
            <div className="absolute inset-0 flex items-center justify-center gap-3 px-4 rounded-xl bg-white/10 border border-white/10 overflow-hidden">
              <span
                className="material-symbols-outlined text-white shrink-0"
                style={{ fontSize: isActive ? "24px" : "18px", transition: "font-size 0.9s cubic-bezier(0.4,0,0.2,1)" }}
              >
                {item.icon}
              </span>
              <span
                className="text-white font-semibold tracking-tight truncate"
                style={{ fontSize: isActive ? "20px" : "16px", transition: "font-size 0.9s cubic-bezier(0.4,0,0.2,1)" }}
              >
                {item.label}
              </span>
            </div>

            {/* Tick */}
            <div
              className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/50 z-20"
              style={{ opacity: isActive ? 1 : 0, transition: "opacity 1s ease" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 -960 960 960" fill="white">
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
}
