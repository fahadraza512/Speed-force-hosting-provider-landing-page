"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  baseVx: number; baseVy: number;
  radius: number; color: string; opacity: number;
}

const COLORS = [
  "183, 18, 42", "220, 60, 60", "200, 80, 40",
  "150, 30, 80", "120, 60, 180", "255, 120, 80", "255, 255, 255",
];

const REPEL_RADIUS = 120;
const REPEL_STRENGTH = 3;

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef  = useRef({ x: -9999, y: -9999 });
  const activeRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: Particle[] = [];

    const isMobile = window.innerWidth < 768;
    const COUNT = isMobile ? 80 : 200;

    const spawn = (): Particle => {
      const bvx = (Math.random() - 0.5) * 1.2;
      const bvy = (Math.random() - 0.5) * 1.2;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: bvx, vy: bvy, baseVx: bvx, baseVy: bvy,
        radius: Math.random() * 2.5 + 0.5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        opacity: Math.random() * 0.6 + 0.1,
      };
    };

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: COUNT }, spawn);
    };

    const draw = () => {
      if (!activeRef.current) { animId = requestAnimationFrame(draw); return; }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { x: mx, y: my } = mouseRef.current;

      for (const p of particles) {
        const dx   = p.x - mx;
        const dy   = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < REPEL_RADIUS && dist > 0) {
          const force = (REPEL_RADIUS - dist) / REPEL_RADIUS;
          p.vx += (dx / dist) * force * REPEL_STRENGTH * 0.15;
          p.vy += (dy / dist) * force * REPEL_STRENGTH * 0.15;
        }

        // Spring back to base velocity
        p.vx += (p.baseVx - p.vx) * 0.04;
        p.vy += (p.baseVy - p.vy) * 0.04;

        // Cap speed
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 8) { p.vx = (p.vx / speed) * 8; p.vy = (p.vy / speed) * 8; }

        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    // Track mouse on window so it works across the full fixed hero
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onMouseLeave = () => { mouseRef.current = { x: -9999, y: -9999 }; };

    // Pause when tab is hidden
    const onVisibility = () => { activeRef.current = !document.hidden; };

    const timer = setTimeout(() => { resize(); draw(); }, 50);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("resize", resize, { passive: true });

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full hero-zoom-in delay-100"
    />
  );
}
