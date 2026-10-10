"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Clock3, Send } from "lucide-react";
import { IMAGES, LOCATIONS, type RouteId } from "@/lib/data";
import { EASE, Reveal, SplitChars, Magnetic, ParallaxImage } from "../anim";
import { WhatsAppIcon, WhatsAppPill, bookOnWhatsApp } from "../whatsapp";
import { toast } from "sonner";

const PROJECT_TYPES = ["A home", "A restaurant", "A workspace", "Styling only", "Something else"];

export default function Contact({ navigate }: { navigate: (r: RouteId) => void }) {
  const [type, setType] = useState(PROJECT_TYPES[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast("Concept form", {
      description:
        "This is a conceptual representation by Avi — the form isn't wired to a mailbox yet.",
    });
  };

  const field =
    "w-full border-b border-line bg-transparent py-4 text-[15px] text-ivory placeholder:text-sand/60 outline-none transition-colors duration-400 focus:border-bronze";

  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 pt-28 md:px-10 md:pt-40">
      <p className="eyebrow mb-5">(Correspondence)</p>
      <h1 className="font-display text-[clamp(2.8rem,9vw,7rem)] leading-[0.98] text-ivory">
        <SplitChars text="Say hello to" />
        <br />
        <span className="font-editorial text-bronze">
          <SplitChars text="your new space" delay={0.25} />
        </span>
      </h1>

      <div className="mt-14 grid grid-cols-1 gap-14 md:mt-20 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
        <Reveal>
          <form onSubmit={submit} className="space-y-8" aria-label="Project enquiry form">
            <p className="text-sm text-sand">
              Tell us about the room that's waiting. We reply within one working
              day — usually with more questions than answers, the good kind.
            </p>

            <div>
              <p className="eyebrow mb-3">I'm dreaming of</p>
              <div className="flex flex-wrap gap-2.5">
                {PROJECT_TYPES.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setType(t)}
                    aria-pressed={type === t}
                    className={`relative h-11 rounded-full border px-5 text-[11px] uppercase tracking-[0.18em] transition-colors duration-400 ${
                      type === t
                        ? "border-bronze bg-bronze text-[#0d0b09]"
                        : "border-line text-sand hover:border-bronze/40 hover:text-ivory"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <label className="block">
                <span className="eyebrow">Your name</span>
                <input
                  className={field}
                  placeholder="Ava Kapoor"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label className="block">
                <span className="eyebrow">Email</span>
                <input
                  type="email"
                  className={field}
                  placeholder="ava@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>

            <label className="block">
              <span className="eyebrow">The story so far</span>
              <textarea
                rows={4}
                className={`${field} resize-none`}
                placeholder="A 3BHK in Bandra that needs to feel like a Sunday morning…"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>

            <Magnetic strength={0.2}>
              <button
                type="submit"
                className="group inline-flex h-14 items-center gap-3 rounded-full bg-bronze px-8 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#0d0b09] transition-all duration-500 hover:brightness-110 active:scale-95"
              >
                Send the brief
                <Send className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </button>
            </Magnetic>
          </form>
        </Reveal>

        <div className="space-y-8">
          <Reveal delay={0.1}>
            <motion.button
              onClick={bookOnWhatsApp}
              data-cursor
              className="group relative block w-full overflow-hidden rounded-sm border border-whatsapp/40 bg-[#0f1a12] p-7 text-left md:p-8"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4, ease: EASE }}
              aria-label="Book on WhatsApp"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-whatsapp/15 blur-[60px]" />
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp text-[#07230f]">
                  <WhatsAppIcon className="h-6 w-6" />
                </span>
                <span className="wa-pulse relative h-2.5 w-2.5 rounded-full bg-whatsapp" aria-hidden="true" />
              </div>
              <h2 className="font-display mt-6 text-2xl text-ivory md:text-3xl">
                Book on WhatsApp
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-sand">
                The fastest door into the studio. Share your floor plan, a few
                references and a budget range — we'll take it from there.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-whatsapp transition-all duration-500 group-hover:gap-3.5">
                Start a chat <span aria-hidden="true">→</span>
              </span>
            </motion.button>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="grid grid-cols-1 gap-6 border border-line bg-[#100e0b] p-7 sm:grid-cols-2 md:p-8">
              <div>
                <p className="eyebrow mb-3 flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-bronze" /> Email
                </p>
                <a href="mailto:hello@maisonelara.com" className="text-sm text-ivory hover:text-bronze-soft">
                  hello@maisonelara.com
                </a>
              </div>
              <div>
                <p className="eyebrow mb-3 flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-bronze" /> Studio
                </p>
                <p className="text-sm leading-relaxed text-ivory">
                  14 Rampart Row, Fort
                  <br />
                  Mumbai 400001
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-ivory/60">
                  {LOCATIONS.join(" · ")}
                </p>
              </div>
              <div className="sm:col-span-2">
                <p className="eyebrow mb-3 flex items-center gap-2">
                  <Clock3 className="h-3.5 w-3.5 text-bronze" /> Hours
                </p>
                <p className="text-sm text-ivory">
                  Mon — Sat, 10:00 to 19:00 IST · Site visits by appointment
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <ParallaxImage
              src={IMAGES.contactSide}
              alt="A warmly lit reading corner designed by the atelier"
              className="aspect-[16/10] w-full"
              amplitude={8}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
