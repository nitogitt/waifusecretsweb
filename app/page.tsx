"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Inter, DM_Serif_Display } from "next/font/google";

import Particles from "@/components/Particles";
import IntroLogo from "@/components/IntroLogo";
import CursorAura from "@/components/CursorAura";
import CursorTrail from "@/components/CursorTrail";

/* =======================
   FONTS
======================= */
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
});

type LinkItem = {
  name: string;
  url: string;
  type?: "primary" | "support" | "normal";
};

export default function Home() {
  const links: LinkItem[] = [
    {
      name: "Patreon",
      url: "https://patreon.com/Waifu_Winks?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink",
      type: "primary",
    },
    { name: "Throne", url: "https://throne.com/waifusecrets", type: "support" },
    { name: "Instagram", url: "https://www.instagram.com/waifu_secrets/", type: "normal" },
    { name: "Twitter / X", url: "https://x.com/waifu_winks", type: "normal" },
    { name: "DeviantArt", url: "https://www.deviantart.com/waifusecrets", type: "normal" },
  ];

  return (
    <main className={`${inter.className} relative min-h-screen text-white overflow-hidden`}>
      <IntroLogo />
      <CursorAura />
      <CursorTrail />

      {/* fondo */}
      <div className="absolute inset-0 -z-20 bg-[#0b0b0f]" />
      <div className="absolute inset-0 -z-10 opacity-70 bg-[radial-gradient(circle_at_50%_20%,rgba(134,20,56,0.35),transparent_55%)]" />
      <div className="absolute inset-0 -z-10 opacity-40 bg-[radial-gradient(circle_at_20%_80%,rgba(245,169,154,0.18),transparent_55%)]" />

      <Particles className="pointer-events-none absolute inset-0 z-50" />

      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5"
        >
          <Image src="/logo.png" alt="Waifu Secrets Logo" width={190} height={190} className="mx-auto" priority />
        </motion.div>

        {/* TAGLINE */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className={`${dmSerif.className} text-[#f5a99a] text-2xl md:text-3xl mb-10 italic`}
        >
          You found paradise
        </motion.p>

        {/* LINKS */}
        <div className="flex flex-col gap-5 w-full sm:w-96">
          {links.map((link, i) => {
            /* 🔥 PATREON — con fix de seam */
            if (link.type === "primary") {
              return (
                <motion.a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 220, damping: 14 }}
                  className="
                    group relative overflow-hidden rounded-2xl
                    border border-[#ffd1c866]
                    shadow-[0_0_32px_#ff6a8899]
                    bg-[#140a10]
                    text-left
                    transform-gpu
                  "
                >
                  {/* TOP IMAGE AREA */}
                  <div className="relative h-36 sm:h-40 w-full bg-[#140a10] overflow-hidden">
                    <Image src="/ivy.png" alt="" fill className="object-cover" priority={false} />

                    {/* overlays muy suaves */}
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#140a10] to-transparent" />

                    {/* ✅ tapa la unión (anti white line) */}
                    <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#140a10]" />

                    {/* Badge */}
                    <div className="absolute top-3 right-3 text-[11px] px-2.5 py-1 rounded-full bg-black/60 border border-white/20">
                      MAIN
                    </div>
                  </div>

                  {/* BOTTOM CONTENT */}
                  <div className="px-5 py-4">
                    <div className="flex flex-col gap-1.5">
                      <span className="text-xs uppercase tracking-[0.35em] text-[#ffe3dc]">
                        Exclusive content
                      </span>

                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-white">Join my Patreon</span>
                        <span className="text-xs text-[#ffd1c8]">→</span>
                      </div>

                      <span className="text-sm text-[#ffd1c8]">Videos · Comics · NSFW</span>
                    </div>

                    {/* mini barra sexy abajo */}
                    <div className="mt-4 h-[2px] w-full rounded-full bg-gradient-to-r from-[#ff6a88] via-[#ff3d68] to-[#861438] opacity-80" />
                  </div>
                </motion.a>
              );
            }

            /* 💖 THRONE */
            if (link.type === "support") {
              return (
                <motion.a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="
                    rounded-2xl py-4 px-5 text-center font-medium text-lg
                    bg-white/5 border border-white/10
                    backdrop-blur-md
                  "
                >
                  💖 Support me on Throne
                </motion.a>
              );
            }

            /* NORMAL */
            return (
              <motion.a
                key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="
                    rounded-2xl py-4 px-5 text-center font-medium text-lg
                    bg-white/5 border border-white/10
                    backdrop-blur-md
                  "
                >
                  {link.name}
                </motion.a>
              );
            })}
        </div>

        <footer className="mt-12 text-neutral-400 text-sm">
© {new Date().getFullYear()} waifu_secrets — All rights reserved. v2
        </footer>
      </section>
    </main>
  );
}











