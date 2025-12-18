"use client"
import { useEffect, useState } from "react";

export default function CursorAura() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[9999] translate-x-[-50%] translate-y-[-50%]"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
      }}
    >
      <div className="w-8 h-8 rounded-full bg-[#ff7bbf40] blur-md animate-pulse"></div>
    </div>
  );
}
