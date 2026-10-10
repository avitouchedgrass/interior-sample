"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Sparkle } from "lucide-react";
import {
  IMAGES,
  PROJECTS,
  SERVICES,
  STATS,
  LOCATIONS,
  MARQUEE_WORDS,
  type RouteId,
} from "@/lib/data";
import {
  EASE,
  Reveal,
  SplitChars,
  Magnetic,
  ParallaxImage,
  Marquee,
  Counter,
  ScrollParagraph,
} from "../anim";
import { WhatsAppPill } from "../whatsapp";

function Hero({
  ready,
  navigate,
}: {
  ready: boolean;
  navigate: (r: RouteId) => void;
}) {
  return (
    <section className="relative flex min-h-svh flex-col justify-end overflow-hidden px-5 pb-10 pt-28 md:px-10 md:pb-14">
      <div className="pointer-events-none absolute -left-48 top-16 h-[420px] w-[420px] rounded-full bg-bronze/[0.07] blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-40 h-[380px] w-[380px] rounded-full bg-[#5a4630]/25 blur-[120px]" />

      <motion.p
        className="eyebrow mb-6 flex flex-wrap items-center gap-x-3 gap-y-1"
        initial={{ opacity: 0, y: 18 }}
        animate={ready ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
      >
        <span className="text-bronze">✦</span> Interior Design Atelier
        <span className="text-line">|</span>
        <span>{LOCATIONS.join(" · ")}</span>
      </motion.p>

      <h1 className="font-display relative z-10 text-[clamp(3.1rem,11.5vw,10rem)] leading-[0.98] tracking-[0.01em]">
        <span className="block overflow-hidden">
          <motion.span
            className="block text-ivory"
            initial={{ y: "110%" }}
            animate={ready ? { y: "0%" } : {}}
            transition={{ duration: 1.1, delay: 0.25, ease: EASE }}
          >
            Rooms that
          </motion.span>
        </span>
        <span className="block overflow-hidden">
          <motion.span
            className="block"
            initial={{ y: "110%" }}
            animate={ready ? { y: "0%" } : {}}
            transition={{ duration: 1.1, delay: 0.38, ease: EASE }}
          >
            <span className="font-editorial text-bronze">breathe</span>
            <span className="text-ivory"> in</span>
          </motion.span>
        </span>
        <span className="block overflow-hidden">
          <motion.span
            className="block text-ivory"
            initial={{ y: "110%" }}
            animate={ready ? { y: "0%" } : {}}
            transition={{ duration: 1.1, delay: 0.51, ease: EASE }}
          >
            golden light
          </motion.span>
        </span>
      </h1>

      <div className="mt-7 flex flex-col gap-7 md:mt-9 md:flex-row md:items-end md:justify-between md:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
        >
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-ivory md:text-sm">
            Residential interiors <span className="text-bronze">·</span> Modular
            kitchens <span className="text-bronze">·</span> Renovation
          </p>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ivory/85 md:text-base">
            Thoughtful, end-to-end spaces for homes.
          </p>
        </motion.div>

        <motion.div
          className="hidden items-center gap-4 md:flex"
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <span className="eyebrow">Scroll</span>
          <motion.span
            className="flex h-12 w-12 items-center justify-center rounded-full border border-line"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          >
            <ArrowDown className="h-4 w-4 text-bronze" />
          </motion.span>
        </motion.div>
      </div>

      <motion.div
        className="mt-8 flex flex-wrap items-center gap-3.5 md:mt-10 md:gap-5"
        initial={{ opacity: 0, y: 24 }}
        animate={ready ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.82, ease: EASE }}
      >
        <Magnetic>
          <WhatsAppPill />
        </Magnetic>
        <Magnetic>
          <button
            onClick={() => navigate("projects")}
            data-cursor
            className="group inline-flex h-14 items-center gap-3 rounded-full border border-line bg-ivory/[0.03] px-7 text-[13px] font-semibold uppercase tracking-[0.18em] text-ivory backdrop-blur transition-colors duration-500 hover:border-bronze/60 hover:text-bronze-soft"
          >
            Explore projects
            <ArrowRight className="h-4 w-4 text-bronze transition-transform duration-500 group-hover:translate-x-1.5" />
          </button>
        </Magnetic>
      </motion.div>

      <motion.div
        className="relative z-10 mt-10 aspect-[16/10] w-full overflow-hidden md:ml-auto md:mt-12 md:aspect-[21/9] md:w-[86%]"
        initial={{ clipPath: "inset(100% 0 0 0)" }}
        animate={ready ? { clipPath: "inset(0% 0 0 0)" } : {}}
        transition={{ duration: 1.4, delay: 0.65, ease: EASE }}
      >
        <ParallaxImage
          src={IMAGES.hero}
          alt="A dark, moody luxury living room washed in warm ambient light"
          className="h-full w-full"
          amplitude={9}
        />
        <div className="absolute inset-0 border border-line/40" />
        <motion.div
          className="absolute bottom-4 left-4 flex items-center gap-2 border border-line/60 bg-[#0d0b09]/70 px-4 py-2 backdrop-blur"
          initial={{ opacity: 0, y: 12 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.6, duration: 0.8, ease: EASE }}
        >
          <Sparkle className="h-3 w-3 text-bronze" />
          <span className="text-[10px] uppercase tracking-[0.24em] text-ivory/90">
            The Onyx Penthouse — featured
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Marquees() {
  return (
    <section className="border-y border-line py-6 md:py-8" aria-hidden="true">
      <Marquee duration={38}>
        {MARQUEE_WORDS.map((w) => (
          <span key={w} className="flex items-center">
            <span className="font-display mx-6 text-3xl tracking-[0.06em] text-ivory/90 md:mx-10 md:text-5xl">
              {w}
            </span>
            <Sparkle className="h-4 w-4 shrink-0 text-bronze" />
          </span>
        ))}
      </Marquee>
      <Marquee duration={46} reverse className="mt-4 opacity-60 md:mt-6">
        {["Golden light", "Quiet luxury", "Honest materials", "Soft geometry", "Slow evenings"].map((w) => (
          <span key={w} className="flex items-center">
            <span className="font-editorial mx-6 text-2xl text-bronze/80 md:mx-10 md:text-3xl">
              {w}
            </span>
            <span className="h-1 w-1 shrink-0 rounded-full bg-bronze/60" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 py-20 md:grid-cols-[1fr_2.2fr] md:px-10 md:py-32">
      <Reveal>
        <p className="eyebrow flex items-center gap-3 md:sticky md:top-32">
          <span className="inline-block h-px w-10 bg-bronze" /> The Studio — 01
        </p>
      </Reveal>
      <ScrollParagraph
        className="font-display text-[clamp(1.5rem,3.4vw,2.9rem)] leading-[1.28] tracking-[0.01em]"
        highlight={["light", "material", "silence", "proportion"]}
        text="Maison Élara is a concept atelier for people who feel rooms before they see them. We design in light first, material second and furniture last — because a home is not a list of objects, it is the silence between them, the quality of dusk on a wall, the way a corridor tempts you forward."
      />
    </section>
  );
}

function Featured({ navigate }: { navigate: (r: RouteId) => void }) {
  const featured = [PROJECTS[0], PROJECTS[4], PROJECTS[6]];
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 md:px-10 md:pb-32">
      <div className="mb-12 flex items-end justify-between md:mb-16">
        <div>
          <p className="eyebrow mb-4">(Selected works)</p>
          <h2 className="font-display text-[clamp(2.4rem,6.5vw,5rem)] leading-none text-ivory">
            Featured <span className="font-editorial text-bronze">spaces</span>
          </h2>
        </div>
        <button
          onClick={() => navigate("projects")}
          className="group hidden items-center gap-2 text-sm text-ivory/80 transition-colors hover:text-bronze-soft md:flex"
        >
          All projects
          <ArrowRight className="h-4 w-4 transition-transform duration-400 group-hover:translate-x-1.5" />
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
        {featured.map((p, i) => (
          <motion.button
            key={p.id}
            onClick={() => navigate("projects")}
            data-cursor
            className={`group relative text-left ${
              i === 0 ? "md:col-span-7" : i === 1 ? "md:col-span-5 md:mt-24" : "md:col-span-12"
            }`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: i * 0.12, ease: EASE }}
          >
            <div className={`overflow-hidden ${i === 2 ? "aspect-[21/9]" : "aspect-[4/3] md:aspect-[4/3.4]"}`}>
              <motion.img
                src={p.image}
                alt={`${p.title} — ${p.category} interior in ${p.location}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
              />
            </div>
            <div className="mt-4 flex items-baseline justify-between gap-4 border-b border-line pb-4">
              <div className="flex items-baseline gap-4">
                <span className="font-editorial text-xs text-bronze">({p.index})</span>
                <h3 className="font-display text-xl text-ivory transition-colors duration-400 group-hover:text-bronze-soft md:text-2xl">
                  {p.title}
                </h3>
              </div>
              <p className="hidden text-xs uppercase tracking-[0.2em] text-sand sm:block">
                {p.category} · {p.year}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      <button
        onClick={() => navigate("projects")}
        className="group mx-auto mt-12 flex items-center gap-2 text-sm text-ivory/80 transition-colors hover:text-bronze-soft md:hidden"
      >
        All projects
        <ArrowRight className="h-4 w-4 transition-transform duration-400 group-hover:translate-x-1.5" />
      </button>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-y border-line bg-[#0a0908]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            className={`px-6 py-10 md:px-10 md:py-16 ${
              i % 2 === 1 ? "border-l border-line" : ""
            } ${i > 1 ? "border-t border-line md:border-t-0" : ""} ${
              i > 0 ? "md:border-l md:border-line" : ""
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }}
          >
            <p className="font-display text-4xl text-bronze md:text-6xl">
              <Counter to={s.value} suffix={s.suffix} />
            </p>
            <p className="eyebrow mt-3">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ServicesTeaser({ navigate }: { navigate: (r: RouteId) => void }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-32">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
        <div>
          <p className="eyebrow mb-4">(What we do)</p>
          <h2 className="font-display text-[clamp(2.4rem,6.5vw,5rem)] leading-none text-ivory">
            From concept <span className="font-editorial text-bronze">to keys</span>
          </h2>
        </div>
        <Reveal delay={0.1}>
          <Magnetic>
            <WhatsAppPill label="Book a consult" />
          </Magnetic>
        </Reveal>
      </div>

      <div className="border-t border-line">
        {SERVICES.slice(0, 4).map((s, i) => (
          <motion.button
            key={s.no}
            onClick={() => navigate("services")}
            data-cursor
            className="group flex w-full items-center gap-5 border-b border-line py-6 text-left md:gap-10 md:py-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.06, ease: EASE }}
          >
            <span className="font-editorial text-xs text-bronze md:text-sm">({s.no})</span>
            <h3 className="font-display flex-1 text-xl text-ivory transition-all duration-500 group-hover:translate-x-2 group-hover:text-bronze-soft md:text-3xl">
              {s.title}
            </h3>
            <p className="hidden max-w-xs text-sm text-sand lg:block">{s.blurb}</p>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line transition-all duration-500 group-hover:rotate-45 group-hover:border-bronze/70 group-hover:bg-bronze/10 md:h-12 md:w-12">
              <ArrowRight className="h-4 w-4 -rotate-45 text-bronze" />
            </span>
          </motion.button>
        ))}
      </div>
    </section>
  );
}

function Cta({ navigate }: { navigate: (r: RouteId) => void }) {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 md:px-10 md:pb-36">
      <motion.div
        className="relative overflow-hidden border border-line bg-[#100e0b] px-6 py-16 text-center md:px-12 md:py-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: EASE }}
      >
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[520px] -translate-x-1/2 rounded-full bg-bronze/15 blur-[110px]" />
        <p className="eyebrow mb-6">(Your turn)</p>
        <h2 className="font-display mx-auto max-w-3xl text-[clamp(2.2rem,6vw,4.6rem)] leading-[1.05] text-ivory">
          Have a space{" "}
          <span className="font-editorial text-bronze">waiting</span> for its
          story?
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Magnetic>
            <WhatsAppPill />
          </Magnetic>
          <button
            onClick={() => navigate("contact")}
            className="group relative h-14 rounded-full border border-line px-7 text-[13px] font-semibold uppercase tracking-[0.18em] text-ivory transition-colors duration-500 hover:border-bronze/60 hover:text-bronze-soft"
          >
            Write to the studio
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default function Home({
  navigate,
  ready,
}: {
  navigate: (r: RouteId) => void;
  ready: boolean;
}) {
  return (
    <>
      <Hero ready={ready} navigate={navigate} />
      <Marquees />
      <Manifesto />
      <Featured navigate={navigate} />
      <Stats />
      <ServicesTeaser navigate={navigate} />
      <Cta navigate={navigate} />
    </>
  );
}
