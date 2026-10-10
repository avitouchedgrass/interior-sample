"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState, useSyncExternalStore } from "react";

function subscribeNoop() {
  return () => {};
}

function getCursorEnabled(): boolean {
  return (
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function getServerCursorEnabled(): boolean {
  return false;
}

export default function Cursor() {
  const enabled = useSyncExternalStore(subscribeNoop, getCursorEnabled, getServerCursorEnabled);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const ringX = useSpring(mx, { stiffness: 320, damping: 28, mass: 0.6 });
  const ringY = useSpring(my, { stiffness: 320, damping: 28, mass: 0.6 });

  useEffect(() => {
    if (!enabled) return;
    document.body.classList.add("custom-cursor");

    const move = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      setVisible(true);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      setHovering(
        !!t?.closest("a, button, [role='button'], [data-cursor], input, textarea, select, label")
      );
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      document.body.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [mx, my, enabled]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[200] h-1.5 w-1.5 rounded-full bg-bronze-soft"
        style={{ x: mx, y: my, translateX: "-50%", translateY: "-50%" }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: pressed ? 0.5 : hovering ? 0.6 : 1,
        }}
        transition={{ duration: 0.18 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[199] h-10 w-10 rounded-full border border-bronze/70"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: pressed ? 0.8 : hovering ? 1.9 : 1,
          backgroundColor: hovering ? "rgba(200,162,94,0.10)" : "rgba(200,162,94,0)",
        }}
        transition={{ duration: 0.25 }}
      />
    </>
  );
}
