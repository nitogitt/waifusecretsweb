"use client";
import { useEffect, useState } from "react";

interface Point {
  x: number;
  y: number;
  id: number;
}

export default function CursorTrail() {
  const [points, setPoints] = useState<Point[]>([]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const newPoint = { x: e.clientX, y: e.clientY, id: Date.now() };
      setPoints((prev) => [...prev.slice(-20), newPoint]); // mantén máximo 20 partículas
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      {points.map((p) => (
        <span
          key={p.id}
          className="pointer-events-none fixed z-[200]"
          style={{
            left: p.x,
            top: p.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <span
            className="block w-3 h-3 rounded-full bg-pink-300/80 blur-[2px] animate-trail"
          />
        </span>
      ))}
    </>
  );
}
