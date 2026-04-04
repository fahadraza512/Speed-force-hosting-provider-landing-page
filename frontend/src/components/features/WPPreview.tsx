"use client";

import { useRef, useEffect } from "react";

const VIDEO_SRC =
  "https://static-cdn.siteground.com/img/home/hover-videos/wordpress_hosting_en.mp4";

export default function WPPreview() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const playPromiseRef = useRef<Promise<void> | null>(null);

  useEffect(() => {
    // Auto-play on mount
    const v = videoRef.current;
    if (v) {
      playPromiseRef.current = v.play().catch(() => {});
    }

    // Find the nearest card ancestor by traversing up
    let card: HTMLElement | null = containerRef.current;
    while (card && !card.classList.contains("group")) {
      card = card.parentElement;
    }
    if (!card) return;

    const play = () => {
      const v = videoRef.current;
      if (!v) return;
      v.currentTime = 0;
      playPromiseRef.current = v.play().catch(() => {});
    };

    const stop = () => {
      const v = videoRef.current;
      if (!v) return;
      const p = playPromiseRef.current;
      if (p) {
        p.then(() => { v.pause(); v.currentTime = 0; }).catch(() => {});
      } else {
        v.pause();
        v.currentTime = 0;
      }
      playPromiseRef.current = null;
    };

    card.addEventListener("mouseenter", play);
    card.addEventListener("mouseleave", stop);
    return () => {
      card!.removeEventListener("mouseenter", play);
      card!.removeEventListener("mouseleave", stop);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute top-4 bottom-4 right-4 w-1/2 hidden md:block"
    >
      <div className="w-full h-full bg-white shadow-2xl rounded-lg transform translate-x-4 group-hover:translate-x-0 transition-transform duration-500 overflow-hidden border border-neutral-200 p-2">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover rounded-lg opacity-90"
          loop
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
