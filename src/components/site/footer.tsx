"use client";

import { motion } from "framer-motion";
import { ArrowUp, Sparkles } from "lucide-react";
import { NAV_LINKS, type RouteId } from "@/lib/data";
import { EASE, Magnetic, SplitChars } from "./anim";
import { WhatsAppPill } from "./whatsapp";

export default function Footer({ navigate }: { navigate: (r: RouteId) => void }) {
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-line bg-[#0a0908]">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-bronze/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 pt-16 md:px-10 md:pt-24">
        <p className="eyebrow mb-6">(Begin the conversation)</p>
        <h2 className="font-display text-[clamp(2.6rem,8vw,6.5rem)] leading-[1.02] tracking-[0.02em] text-ivory">
          <SplitChars text="Let's craft a space" />
          <br />
          <span className="font-editorial text-bronze">
            <SplitChars text="that remembers you." delay={0.25} />
          </span>
        </h2>
        <motion.div
          className="mt-10 flex flex-wrap items-center gap-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
        >
          <Magnetic>
            <WhatsAppPill />
          </Magnetic>
          <a
            href="mailto:hello@maisonelara.com"
            className="group relative text-sm text-ivory/80 transition-colors hover:text-bronze-soft"
          >
            or write to hello@maisonelara.com
            <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 bg-line" />
            <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-bronze transition-transform duration-500 group-hover:scale-x-100" />
          </a>
        </motion.div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-5 py-14 md:grid-cols-4 md:px-10 md:py-20">
        <div className="col-span-2 md:col-span-1">
          <p className="font-display text-2xl tracking-[0.12em] text-ivory">
            MAISON <span className="text-bronze">ÉLARA</span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand">
            A concept interior design studio crafting residential interiors,
            modular kitchens and renovations — thoughtful, end-to-end spaces
            for homes.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.22em] text-ivory/70">
            Vadodara · Ahmedabad · Mumbai
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="eyebrow mb-5">Navigate</p>
          <ul className="space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => navigate(l.id)}
                  className="group relative text-sm text-ivory/85 transition-colors hover:text-bronze-soft"
                >
                  {l.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-bronze transition-transform duration-400 group-hover:scale-x-100" />
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="eyebrow mb-5">Socials</p>
          <ul className="space-y-3">
            {["Instagram", "Behance", "Pinterest", "LinkedIn"].map((s) => (
              <li key={s}>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="group relative text-sm text-ivory/85 transition-colors hover:text-bronze-soft"
                >
                  {s}
                  <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-bronze transition-transform duration-400 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-5">Studio</p>
          <address className="text-sm not-italic leading-relaxed text-ivory/85">
            14, Rampart Row
            <br />
            Fort, Mumbai 400001
            <br />
            <span className="text-ivory/60">Vadodara · Ahmedabad · Mumbai</span>
            <br />
            <a href="mailto:hello@maisonelara.com" className="mt-3 inline-block text-bronze hover:text-bronze-soft">
              hello@maisonelara.com
            </a>
          </address>
        </div>
      </div>

      <div className="select-none overflow-hidden px-2" aria-hidden="true">
        <motion.p
          className="text-stroke-bronze font-display whitespace-nowrap text-center text-[clamp(4rem,17.5vw,17rem)] leading-[0.85] tracking-[0.04em]"
          initial={{ y: "45%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: EASE }}
        >
          ÉLARA
        </motion.p>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 md:flex-row md:px-10">
          <p className="text-xs text-sand">© MMXXVI Maison Élara. All rooms reserved.</p>

          <motion.div
            className="inline-flex items-center gap-2.5 rounded-full border border-bronze/45 bg-bronze/10 px-5 py-2.5 shadow-[0_0_28px_rgba(200,162,94,0.18)]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            title="This website is a design concept"
          >
            <Sparkles className="h-3.5 w-3.5 text-bronze" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-bronze-soft">
              A conceptual representation by Avi
            </span>
            <Sparkles className="h-3.5 w-3.5 text-bronze" />
          </motion.div>

          <button
            onClick={toTop}
            className="group flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-sand transition-colors hover:text-bronze-soft"
            aria-label="Back to top"
          >
            Back to top
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line transition-all duration-400 group-hover:-translate-y-1 group-hover:border-bronze/60">
              <ArrowUp className="h-4 w-4" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
