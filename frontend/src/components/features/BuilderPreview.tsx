"use client";

import { useRef, useEffect } from "react";

const VIDEO_SRC = "https://static-cdn.siteground.com/img/home/hover-videos/online_store_en.mp4";
const COVER = "https://static-cdn.siteground.com/img/home/hover-videos/covers/website_builder.jpg";

export default function BuilderPreview() {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const playPromiseRef1 = useRef<Promise<void> | null>(null);
  const playPromiseRef2 = useRef<Promise<void> | null>(null);

  useEffect(() => {
    let card: HTMLElement | null = containerRef.current;
    while (card && !card.classList.contains("group")) {
      card = card.parentElement;
    }
    if (!card) return;

    const play = () => {
      [video1Ref, video2Ref].forEach((ref, i) => {
        const v = ref.current;
        if (!v) return;
        v.currentTime = 0;
        const p = v.play().catch(() => {});
        if (i === 0) playPromiseRef1.current = p;
        else playPromiseRef2.current = p;
      });
    };

    const stop = () => {
      [[video1Ref, playPromiseRef1], [video2Ref, playPromiseRef2]].forEach(([vRef, pRef]) => {
        const v = (vRef as typeof video1Ref).current;
        const p = (pRef as typeof playPromiseRef1).current;
        if (!v) return;
        if (p) {
          p.then(() => { v.pause(); v.currentTime = 0; }).catch(() => {});
        } else {
          v.pause();
          v.currentTime = 0;
        }
        (pRef as typeof playPromiseRef1).current = null;
      });
    };

    card.addEventListener("mouseenter", play);
    card.addEventListener("mouseleave", stop);
    return () => {
      card!.removeEventListener("mouseenter", play);
      card!.removeEventListener("mouseleave", stop);
    };
  }, []);

  return (
    <div ref={containerRef} className="mt-4 relative h-28 sm:h-32 flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity duration-300">
        {/* Card 1 — larger, rotated left */}
        <div className="w-32 h-32 bg-white rounded-lg shadow-md border border-neutral-200 transform -rotate-12 translate-x-4 overflow-hidden">
          <video ref={video1Ref} poster={COVER} muted playsInline preload="auto" className="w-full h-full object-cover">
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>
        </div>
        {/* Card 2 — smaller, rotated right */}
        <div className="w-24 h-24 rounded-lg border border-primary/20 transform rotate-6 -translate-x-4 overflow-hidden">
          <video ref={video2Ref} muted playsInline preload="auto" className="w-full h-full object-cover">
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
