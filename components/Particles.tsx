"use client";
import { motion } from "framer-motion";
import { useState, useEffect, memo } from "react";

interface ParticlesProps {
  className?: string;
}

function ParticlesComponent({ className = "" }: ParticlesProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const particles = Array.from({ length: 25 });

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {particles.map((_, i) => {
        const size = Math.random() * 5 + 2;
        const duration = Math.random() * 10 + 8;
        const delay = Math.random() * 5;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 1, 0], y: [-20, -120] }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "easeInOut"
            }}
            className="absolute rounded-full bg-[#ffb3c6]"
            style={{
              width: size,
              height: size,
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              filter: "blur(1px)"
            }}
          />
        );
      })}
    </div>
  );
}

const Particles = memo(ParticlesComponent);
export default Particles;



