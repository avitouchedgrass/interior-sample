"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { X, ArrowUpRight, MapPin } from "lucide-react";
import { PROJECTS, CATEGORIES, type Category, type RouteId } from "@/lib/data";
import { EASE, SplitChars, Reveal } from "../anim";
import { WhatsAppPill } from "../whatsapp";

const emptySubscribe = () => () => {};
const getMounted = () => true;
const getServerMounted = () => false;
function useMounted() {
  return useSyncExternalStore(emptySubscribe, getMounted, getServerMounted);
}

type Filter = "All" | Category;

function ProjectCard({
  p,
  onOpen,
}: {
  p: (typeof PROJECTS)[number];
  onOpen: () => void;
}) {
  return (
    <motion.button
      layout
      onClick={onOpen}
      data-cursor
      className="group relative mb-6 block w-full break-inside-avoid text-left md:mb-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={p.image}
          alt={`${p.title} — ${p.category} interior, ${p.location}`}
          loading="lazy"
          className="w-full object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b09]/85 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
        <span className="absolute left-4 top-4 border border-line/60 bg-[#0d0b09]/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-ivory backdrop-blur">
          {p.category}
        </span>
        <span className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-bronze text-[#0d0b09] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-5 w-5" />
        </span>
        <div className="absolute bottom-4 left-4 right-16">
          <p className="font-editorial text-xs text-bronze-soft">({p.index})</p>
          <h3 className="font-display text-2xl leading-tight text-ivory md:text-3xl">
            {p.title}
          </h3>
          <p className="mt-1 flex items-center gap-1.5 text-xs text-ivory/70">
            <MapPin className="h-3 w-3" /> {p.location} · {p.year}
          </p>
        </div>
      </div>
    </motion.button>
  );
}

function Lightbox({
  p,
  onClose,
  navigate,
}: {
  p: (typeof PROJECTS)[number];
  onClose: () => void;
  navigate: (r: RouteId) => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[140] flex items-end justify-center bg-[#0a0908]/90 backdrop-blur-md md:items-center md:p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={p.title}
    >
      <motion.div
        className="relative max-h-[92svh] w-full max-w-5xl overflow-y-auto border border-line bg-[#100e0b]"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-[#0d0b09]/80 backdrop-blur transition-colors hover:border-bronze/60 hover:text-bronze"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="relative aspect-[16/9] overflow-hidden md:aspect-[21/9]">
          <motion.img
            layoutId={`project-${p.id}`}
            src={p.image}
            alt={`${p.title} — full view`}
            className="h-full w-full object-cover"
            transition={{ duration: 0.7, ease: EASE }}
          />
        </div>
        <div className="px-6 py-8 md:px-12 md:py-12">
          <p className="font-editorial text-sm text-bronze">({p.index}) — {p.category}</p>
          <h3 className="font-display mt-2 text-3xl text-ivory md:text-5xl">{p.title}</h3>
          <div className="mt-6 grid grid-cols-3 gap-4 border-y border-line py-5 text-center">
            {[
              ["Location", p.location],
              ["Year", p.year],
              ["Area", p.area],
            ].map(([k, v]) => (
              <div key={k}>
                <p className="eyebrow mb-1.5">{k}</p>
                <p className="text-sm text-ivory md:text-base">{v}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-sand">
            {p.description}
          </p>
          <div className="mt-8">
            <WhatsAppPill label="Enquire about a project" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects({ navigate }: { navigate: (r: RouteId) => void }) {
  const [filter, setFilter] = useState<Filter>("All");
  const [active, setActive] = useState<(typeof PROJECTS)[number] | null>(null);
  const mounted = useMounted();

  const list = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 pt-28 md:px-10 md:pt-40">
      <p className="eyebrow mb-5">(The portfolio)</p>
      <h1 className="font-display text-[clamp(2.8rem,9vw,7.5rem)] leading-[0.98] text-ivory">
        <SplitChars text="Selected" />{" "}
        <span className="font-editorial text-bronze">
          <SplitChars text="works" delay={0.2} />
        </span>
        <sup className="ml-2 align-super font-editorial text-lg text-sand md:text-2xl">
          ({list.length})
        </sup>
      </h1>

      <Reveal className="mt-10 md:mt-14" y={20}>
        <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="Filter projects">
          {CATEGORIES.map((c) => {
            const sel = filter === c;
            return (
              <button
                key={c}
                role="tab"
                aria-selected={sel}
                onClick={() => setFilter(c)}
                className={`relative h-11 rounded-full border px-5 text-[11px] uppercase tracking-[0.2em] transition-colors duration-400 ${
                  sel
                    ? "border-bronze/70 text-[#0d0b09]"
                    : "border-line text-sand hover:border-bronze/40 hover:text-ivory"
                }`}
              >
                {sel && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-bronze"
                    transition={{ type: "spring", stiffness: 320, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{c}</span>
              </button>
            );
          })}
        </div>
      </Reveal>

      <motion.div layout className="mt-12 columns-1 sm:columns-2 lg:columns-3 md:mt-16">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <ProjectCard key={`${filter}-${p.id}`} p={p} onOpen={() => setActive(p)} />
          ))}
        </AnimatePresence>
      </motion.div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {active && (
              <Lightbox
                key="lightbox"
                p={active}
                onClose={() => setActive(null)}
                navigate={navigate}
              />
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}
