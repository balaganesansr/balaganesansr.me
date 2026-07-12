"use client";

import { useEffect } from "react";

/** Cursor-following ambient light. Writes CSS vars, zero re-renders. */
export function Spotlight() {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let x = innerWidth / 2;
    let y = innerHeight * 0.3;
    let tx = x;
    let ty = y;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const loop = () => {
      x += (tx - x) * 0.08;
      y += (ty - y) * 0.08;
      document.documentElement.style.setProperty("--spot-x", `${x}px`);
      document.documentElement.style.setProperty("--spot-y", `${y}px`);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <div className="spotlight" aria-hidden />;
}
