"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function IntroLogo() {
  const [startAnim, setStartAnim] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    // Espera 2s antes de mover
    const wait = setTimeout(() => {
      setStartAnim(true);

      // Después de que sube, ocultarlo totalmente
      setTimeout(() => setHide(true), 1500);
    }, 2000);

    return () => clearTimeout(wait);
  }, []);

  if (hide) return null; // remove from DOM

  return (
    <motion.div
      className="fixed inset-0 bg-[#141414] flex items-center justify-center z-[999]"
      initial={{ y: 0 }}
      animate={startAnim ? { y: "-100vh" } : {}}
      transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1] }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/logo.png"
          alt="waifu_secrets"
          width={200}
          height={200}
          className="opacity-90"
        />
      </motion.div>
    </motion.div>
  );
}



