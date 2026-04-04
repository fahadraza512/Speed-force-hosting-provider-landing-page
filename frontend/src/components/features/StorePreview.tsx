"use client";

import { useRef, useEffect } from "react";

const VIDEO_SRC = "https://static-cdn.siteground.com/img/home/hover-videos/online_store_en.mp4";

export default function StorePreview() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const playPromiseRef = useRef<Promise<void> | null>(null);

  useEffect(() => {
    // Auto-play on mount (muted autoplay is allowed)
    const v = videoRef.current;
    if (v) {
      playPromiseRef.current = v.play().catch(() => {});
    }

    // Also re-play on card hover
    let card: HTMLElement | null = containerRef.current;
    while (card && !card.classList.contains("group")) {
      card = card.parentElement;
    }
    if (!card) return;

    const play = () => {
      if (!videoRef.current) return;
      videoRef.current.currentTime = 0;
      playPromiseRef.current = videoRef.current.play().catch(() => {});
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
      className="mt-4 relative h-40 md:absolute md:inset-x-5 md:bottom-5 md:top-[160px] md:h-auto rounded-xl overflow-hidden"
    >
      <video
        ref={videoRef}
        muted
        playsInline
        loop
        preload="auto"
        className="w-full h-full object-cover"
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>
    </div>
  );
}
