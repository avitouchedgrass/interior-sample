"use client";

import { motion } from "framer-motion";
import { IMAGES, VALUES, PROCESS, AWARDS, type RouteId } from "@/lib/data";
import {
  EASE,
  Reveal,
  SplitChars,
  ParallaxImage,
  ScrollParagraph,
  Counter,
} from "../anim";

function Process() {
  return (
    <section className="border-y border-line bg-[#0a0908]">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <p className="eyebrow mb-4">(The method)</p>
        <h2 className="font-display mb-12 text-[clamp(2.2rem,5.5vw,4.2rem)] leading-none text-ivory md:mb-16">
          Four movements, <span className="font-editorial text-bronze">one score</span>
        </h2>
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step, i) => (
            <motion.div
              key={step.no}
              className="group relative bg-[#0d0b09] p-7 transition-colors duration-500 hover:bg-[#14110e] md:p-9"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }}
            >
              <span className="font-display text-4xl text-stroke-bronze md:text-5xl">
                {step.no}
              </span>
              <h3 className="font-display mt-6 text-2xl text-ivory transition-colors duration-400 group-hover:text-bronze-soft">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-sand">{step.text}</p>
              <span className="mt-6 block h-px w-full bg-line">
                <motion.span
                  className="block h-px bg-bronze"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease: EASE }}
                />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Studio({ navigate }: { navigate: (r: RouteId) => void }) {
  return (
    <div className="pt-28 md:pt-40">
      <section className="mx-auto max-w-7xl px-5 md:px-10">
        <p className="eyebrow mb-5">(The atelier)</p>
        <h1 className="font-display text-[clamp(2.8rem,9vw,7.5rem)] leading-[0.98] text-ivory">
          <SplitChars text="A studio built" />
          <br />
          <span className="font-editorial text-bronze">
            <SplitChars text="on stillness" delay={0.25} />
          </span>
        </h1>
        <div className="mt-10 grid grid-cols-1 gap-10 md:mt-14 md:grid-cols-[1.4fr_1fr]">
          <ScrollParagraph
            className="font-display text-[clamp(1.35rem,2.8vw,2.2rem)] leading-[1.3]"
            highlight={["silence", "dusk", "hand"]}
            text="Élara began as a contradiction we liked: a design practice that moves slowly in a fast city. We keep a small client roster, draw everything twice, and spend as much time with electricians and carpenters as with marble suppliers. The result is rooms that feel inevitable — as if they had always been waiting, and we simply uncovered them."
          />
          <Reveal delay={0.2}>
            <div className="border border-line bg-[#100e0b] p-6 md:p-8">
              <p className="font-editorial text-xl leading-relaxed text-bronze-soft">
                “Design the light, and the room will design itself.”
              </p>
              <p className="eyebrow mt-5">Avi — Founder & Creative Director</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 px-5 md:mt-24 md:grid-cols-12 md:gap-8 md:px-10">
        <Reveal className="md:col-span-7">
          <ParallaxImage
            src={IMAGES.studioPalette}
            alt="Material palette of stone, wood and fabric samples curated by the studio"
            className="aspect-[4/3] w-full"
            amplitude={8}
          />
          <p className="eyebrow mt-3">Material tray nº 47 — Calacatta, oak, bouclé</p>
        </Reveal>
        <Reveal delay={0.15} className="md:col-span-5 md:mt-20">
          <ParallaxImage
            src={IMAGES.studioMood}
            alt="Warm textured interior moodboard detail"
            className="aspect-[3/4] w-full"
            amplitude={10}
          />
          <p className="eyebrow mt-3">Mood study — dusk tones</p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-32">
        <p className="eyebrow mb-4">(What we believe)</p>
        <h2 className="font-display mb-12 text-[clamp(2.2rem,5.5vw,4.2rem)] leading-none text-ivory md:mb-16">
          Three <span className="font-editorial text-bronze">convictions</span>
        </h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.no}
              className="border-t border-line pt-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: EASE }}
            >
              <span className="font-editorial text-sm text-bronze">({v.no})</span>
              <h3 className="font-display mt-3 text-2xl text-ivory md:text-3xl">{v.title}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-sand">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <ParallaxImage
            src={IMAGES.studioWide}
            alt="A wide living room with layered warm lighting designed by the atelier"
            className="aspect-[16/10] w-full md:aspect-[21/9]"
            amplitude={9}
          />
        </Reveal>
      </section>

      <Process />

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 py-20 md:grid-cols-[1fr_1.3fr] md:px-10 md:py-28">
        <div>
          <p className="eyebrow mb-4">(Recognition)</p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-tight text-ivory">
            Quietly <span className="font-editorial text-bronze">decorated</span>
          </h2>
          <div className="mt-10 flex gap-10">
            <div>
              <p className="font-display text-5xl text-bronze">
                <Counter to={14} suffix="" />
              </p>
              <p className="eyebrow mt-2">Awards</p>
            </div>
            <div>
              <p className="font-display text-5xl text-bronze">
                <Counter to={9} suffix="" />
              </p>
              <p className="eyebrow mt-2">Cities</p>
            </div>
          </div>
        </div>
        <div className="border-t border-line">
          {AWARDS.map((a, i) => (
            <motion.div
              key={a.title}
              className="group flex items-baseline justify-between gap-4 border-b border-line py-5 transition-colors duration-400 hover:bg-muted"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
            >
              <div className="flex items-baseline gap-5">
                <span className="font-editorial text-sm text-bronze">{a.year}</span>
                <p className="text-[15px] text-ivory transition-transform duration-500 group-hover:translate-x-1.5">
                  {a.title}
                </p>
              </div>
              <p className="hidden text-xs uppercase tracking-[0.18em] text-sand sm:block">
                {a.org}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
