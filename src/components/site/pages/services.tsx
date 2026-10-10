"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";
import { SERVICES, type RouteId } from "@/lib/data";
import { EASE, Reveal, SplitChars, Magnetic } from "../anim";
import { WhatsAppPill } from "../whatsapp";

const MODELS = [
  {
    name: "The Consultation",
    price: "from ₹1.5L",
    text: "A focused two-week engagement: layout review, palette direction and a lighting plan you can hand to any contractor.",
  },
  {
    name: "Full-Service",
    price: "from ₹45L",
    text: "Everything from concept boards to the final styling shoot. Our most requested way to work with the atelier.",
  },
  {
    name: "Bespoke Atelier",
    price: "on invitation",
    text: "For flagship homes and hospitality. A dedicated team, custom furniture lines and a 12-month on-call concierge.",
  },
];

function Row({
  s,
  open,
  onToggle,
}: {
  s: (typeof SERVICES)[number];
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      className="border-b border-line"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="group flex w-full items-center gap-5 py-6 text-left md:gap-10 md:py-8"
      >
        <span className="font-editorial text-xs text-bronze md:text-sm">({s.no})</span>
        <h2
          className={`font-display flex-1 text-xl transition-all duration-500 group-hover:translate-x-2 md:text-4xl ${
            open ? "text-bronze-soft" : "text-ivory group-hover:text-bronze-soft"
          }`}
        >
          {s.title}
        </h2>
        <p className="hidden max-w-xs text-sm text-sand lg:block">{s.blurb}</p>
        <motion.span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors duration-500 md:h-12 md:w-12 ${
            open ? "border-bronze/70 bg-bronze/10" : "border-line group-hover:border-bronze/50"
          }`}
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.45, ease: EASE }}
        >
          <Plus className={`h-4 w-4 ${open ? "text-bronze" : "text-ivory"}`} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 gap-6 pb-8 md:grid-cols-[1fr_1.6fr] md:pl-[4.5rem]">
              <div className="flex flex-wrap content-start gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line px-3.5 py-1.5 text-[10px] uppercase tracking-[0.18em] text-sand"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="max-w-2xl text-[15px] leading-relaxed text-sand">{s.detail}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Services({ navigate }: { navigate: (r: RouteId) => void }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 pt-28 md:px-10 md:pt-40">
      <p className="eyebrow mb-5">(Capabilities)</p>
      <h1 className="font-display text-[clamp(2.8rem,9vw,7.5rem)] leading-[0.98] text-ivory">
        <SplitChars text="What we" />{" "}
        <span className="font-editorial text-bronze">
          <SplitChars text="do" delay={0.2} />
        </span>
      </h1>
      <Reveal className="mt-8 max-w-2xl" y={20}>
        <p className="text-[15px] leading-relaxed text-sand md:text-base">
          Six disciplines under one roof — engaged together as a turnkey world,
          or individually as a surgical intervention. Either way, one point of
          contact and zero surprises.
        </p>
      </Reveal>

      <div className="mt-12 border-t border-line md:mt-16">
        {SERVICES.map((s, i) => (
          <Row key={s.no} s={s} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
        ))}
      </div>

      <div className="mt-20 md:mt-28">
        <p className="eyebrow mb-4">(Ways to engage)</p>
        <h2 className="font-display mb-10 text-[clamp(2rem,5vw,3.8rem)] leading-none text-ivory md:mb-14">
          Three doors into <span className="font-editorial text-bronze">the atelier</span>
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {MODELS.map((m, i) => (
            <motion.div
              key={m.name}
              className="group relative overflow-hidden border border-line bg-[#100e0b] p-7 transition-colors duration-500 hover:border-bronze/40 md:p-9"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }}
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-bronze/10 blur-[70px] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              <p className="font-editorial text-sm text-bronze">{m.price}</p>
              <h3 className="font-display mt-3 text-2xl text-ivory md:text-3xl">{m.name}</h3>
              <p className="mt-4 text-sm leading-relaxed text-sand">{m.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <Reveal className="mt-16 flex flex-wrap items-center gap-5 md:mt-24">
        <Magnetic>
          <WhatsAppPill label="Start a conversation" />
        </Magnetic>
        <button
          onClick={() => navigate("projects")}
          className="group relative h-14 rounded-full border border-line px-7 text-[13px] font-semibold uppercase tracking-[0.18em] text-ivory transition-colors duration-500 hover:border-bronze/60 hover:text-bronze-soft"
        >
          See the work first
        </button>
      </Reveal>
    </section>
  );
}
