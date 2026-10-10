"use client";

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";
import { NAV_LINKS, IMAGES, type RouteId } from "@/lib/data";
import { EASE, EASE_SNAP, Magnetic } from "./anim";

const SOCIALS = ["Instagram", "Behance", "Pinterest", "LinkedIn"];

function LiveClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "Asia/Kolkata",
        }).format(new Date())
      );
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="tabular-nums" aria-hidden="true">
      Vadodara — {time} IST
    </span>
  );
}

export default function Navbar({
  route,
  navigate,
  ready,
}: {
  route: RouteId;
  navigate: (r: RouteId) => void;
  ready: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [preview, setPreview] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 160 && !open);
    setScrolled(y > 40);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: RouteId) => {
    setOpen(false);
    navigate(id);
  };

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-[130]"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: ready && !hidden ? 0 : -80, opacity: ready ? 1 : 0 }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <div
          className={`flex items-center justify-between px-5 py-4 transition-colors duration-500 md:px-10 md:py-5 ${
            scrolled && !open
              ? "border-b border-line bg-[#0d0b09]/80 backdrop-blur-md"
              : "border-b border-transparent"
          }`}
        >
          <button
            onClick={() => go("home")}
            className="group flex items-baseline gap-2 text-left"
            aria-label="Maison Élara — home"
          >
            <span className="font-display text-xl tracking-[0.14em] text-ivory md:text-2xl">
              MAISON <span className="text-bronze transition-colors duration-300 group-hover:text-bronze-soft">ÉLARA</span>
            </span>
            <span className="hidden text-[9px] uppercase tracking-[0.3em] text-sand sm:inline">
              atelier
            </span>
          </button>

          <div className="eyebrow hidden lg:block">
            <LiveClock />
          </div>

          <Magnetic strength={0.25}>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="group relative flex h-11 items-center gap-3 rounded-full border border-line px-5 transition-colors duration-300 hover:border-bronze/60 md:h-12"
            >
              <span className="relative flex h-3 w-6 flex-col justify-between">
                <motion.span
                  className="block h-px w-full bg-ivory"
                  animate={open ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                />
                <motion.span
                  className="block h-px w-full bg-ivory"
                  animate={open ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                />
              </span>
              <span className="text-[11px] uppercase tracking-[0.28em] text-ivory transition-colors group-hover:text-bronze-soft">
                {open ? "Close" : "Menu"}
              </span>
            </button>
          </Magnetic>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[120] flex flex-col bg-[#0a0908]"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.85, ease: EASE_SNAP }}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            <div className="pointer-events-none absolute -right-40 top-1/3 h-[480px] w-[480px] rounded-full bg-bronze/10 blur-[140px]" />

            <div className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 gap-8 px-5 pb-6 pt-24 md:px-10 lg:grid-cols-[1.4fr_1fr] lg:pt-32">
              <nav className="flex flex-col justify-center" aria-label="Primary">
                {NAV_LINKS.map((link, i) => (
                  <div key={link.id} className="overflow-hidden border-b border-line/60">
                    <motion.button
                      onClick={() => go(link.id)}
                      className="group flex w-full items-baseline gap-4 py-3 text-left md:gap-6 md:py-4"
                      initial={{ y: "110%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      exit={{ y: "110%", opacity: 0, transition: { duration: 0.4, delay: 0 } }}
                      transition={{ duration: 0.9, delay: 0.25 + i * 0.07, ease: EASE }}
                      onMouseEnter={() => setPreview(i)}
                      aria-current={route === link.id ? "page" : undefined}
                    >
                      <span className="font-editorial text-xs text-bronze md:text-sm">
                        ({link.no})
                      </span>
                      <span
                        className={`font-display text-[clamp(2.4rem,7.5vw,5.2rem)] leading-[1.02] tracking-[0.02em] transition-all duration-500 group-hover:translate-x-3 ${
                          route === link.id
                            ? "text-bronze"
                            : "text-ivory group-hover:text-bronze-soft"
                        }`}
                      >
                        {link.label}
                      </span>
                      <motion.span
                        className="ml-auto hidden text-2xl text-bronze opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 md:block -translate-x-3"
                        aria-hidden="true"
                      >
                        →
                      </motion.span>
                    </motion.button>
                  </div>
                ))}
              </nav>

              <div className="hidden flex-col justify-center gap-6 lg:flex">
                <motion.div
                  className="relative aspect-[4/3] overflow-hidden"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
                >
                  <AnimatePresence mode="popLayout">
                    <motion.img
                      key={preview}
                      src={IMAGES.menuPreview[preview]}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                      initial={{ opacity: 0, scale: 1.08 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.7, ease: EASE }}
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 border border-line/50" />
                </motion.div>
                <motion.div
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.55, duration: 0.7, ease: EASE }}
                >
                  <div>
                    <p className="eyebrow mb-1">New business</p>
                    <a href="mailto:hello@maisonelara.com" className="text-sm text-ivory/90 hover:text-bronze-soft">
                      hello@maisonelara.com
                    </a>
                  </div>
                  <div className="text-right">
                    <p className="eyebrow mb-1">Studio</p>
                    <p className="text-sm text-ivory/90">Fort, Mumbai</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="mx-auto w-full max-w-7xl px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] md:px-10"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: EASE }}
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {SOCIALS.map((s) => (
                    <a
                      key={s}
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="text-[11px] uppercase tracking-[0.24em] text-sand transition-colors hover:text-bronze-soft"
                    >
                      {s}
                    </a>
                  ))}
                </div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-sand/70">
                  A conceptual representation by Avi
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
