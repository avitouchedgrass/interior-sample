"use client";

import { motion, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { EASE, EASE_SNAP } from "./anim";

const BRAND = "MAISON ÉLARA";

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const controls = animate(0, 100, {
      duration: 2.1,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setCount(Math.round(v)),
    });
    const timer = setTimeout(() => {
      document.body.style.overflow = "";
      onDone();
    }, 2600);
    return () => {
      controls.stop();
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[160] flex flex-col items-center justify-center bg-[#0a0908]"
      exit={{ y: "-100%" }}
      transition={{ duration: 1, ease: EASE_SNAP }}
      aria-hidden="true"
    >
      <div className="absolute left-5 top-5 eyebrow">Concept Nº 01</div>
      <div className="absolute right-5 top-5 eyebrow">Ést. MMXXV</div>

      <div className="overflow-hidden px-4">
        <div className="flex flex-wrap justify-center">
          {Array.from(BRAND).map((c, i) => (
            <motion.span
              key={i}
              className="font-display inline-block text-[clamp(2.2rem,9vw,6.5rem)] leading-none tracking-[0.06em] text-ivory"
              initial={{ y: "115%", rotate: 5 }}
              animate={{ y: "0%", rotate: 0 }}
              transition={{ duration: 1, delay: 0.15 + i * 0.045, ease: EASE }}
            >
              {c === " " ? "\u00A0" : c}
            </motion.span>
          ))}
        </div>
      </div>

      <motion.div
        className="font-editorial mt-3 text-[clamp(0.95rem,2.5vw,1.25rem)] text-bronze"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8, ease: EASE }}
      >
        interior design atelier
      </motion.div>

      <div className="absolute bottom-10 left-5 right-5 md:left-10 md:right-10">
        <div className="flex items-end justify-between">
          <span className="eyebrow mb-2">Composing the experience</span>
          <span className="font-display text-3xl tabular-nums text-bronze md:text-4xl">
            {count}%
          </span>
        </div>
        <div className="mt-2 h-px w-full bg-ivory/10">
          <motion.div
            className="h-full bg-bronze"
            style={{ width: `${count}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}
