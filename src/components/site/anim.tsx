"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useInView,
  animate,
  type MotionValue,
} from "framer-motion";
import {
  useRef,
  useEffect,
  useState,
  type ReactNode,
  type CSSProperties,
} from "react";

export const EASE = [0.16, 1, 0.3, 1] as const;
export const EASE_SNAP = [0.76, 0, 0.24, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 36,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function SplitChars({
  text,
  className,
  charClassName,
  delay = 0,
  stagger = 0.028,
  duration = 0.9,
  once = true,
}: {
  text: string;
  className?: string;
  charClassName?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  once?: boolean;
}) {
  const chars = Array.from(text);
  return (
    <motion.span
      className={className}
      style={{ display: "inline-block" }}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-40px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      aria-label={text}
    >
      {chars.map((c, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom"
          aria-hidden="true"
        >
          <motion.span
            className={`inline-block ${charClassName ?? ""}`}
            variants={{
              hidden: { y: "115%", rotate: 4 },
              show: { y: "0%", rotate: 0, transition: { duration, ease: EASE } },
            }}
          >
            {c === " " ? "\u00A0" : c}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export function Magnetic({
  children,
  strength = 0.35,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 180, damping: 14, mass: 0.4 });

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className ?? ""}`}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxImage({
  src,
  alt,
  className,
  imgClassName,
  amplitude = 10,
  scale = 1.15,
  style,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  amplitude?: number;
  scale?: number;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${amplitude}%`, `${amplitude}%`]);

  return (
    <div ref={ref} className={`overflow-hidden ${className ?? ""}`} style={style}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        className={`h-full w-full object-cover ${imgClassName ?? ""}`}
        style={{ y, scale }}
      />
    </div>
  );
}

export function Marquee({
  children,
  duration = 32,
  reverse = false,
  className,
}: {
  children: ReactNode;
  duration?: number;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <div
        className={`flex w-max ${reverse ? "animate-marquee marquee-reverse" : "animate-marquee"}`}
        style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

export function Counter({
  to,
  suffix = "",
  className,
  duration = 2,
}: {
  to: number;
  suffix?: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: EASE,
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {val}
      {suffix}
    </span>
  );
}

export function ScrollParagraph({
  text,
  className,
  highlight = [],
}: {
  text: string;
  className?: string;
  highlight?: string[];
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });
  const words = text.split(" ");
  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <Word
          key={i}
          progress={scrollYProgress}
          range={[i / words.length, (i + 1) / words.length]}
          word={word}
          accent={highlight.includes(word.replace(/[^a-zA-Z'’]/g, ""))}
        />
      ))}
    </p>
  );
}

function Word({
  progress,
  range,
  word,
  accent,
}: {
  progress: MotionValue<number>;
  range: [number, number];
  word: string;
  accent: boolean;
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  const color = useTransform(progress, range, ["#4a443b", accent ? "#c8a25e" : "#efe9dd"]);
  return (
    <motion.span style={{ opacity, color }} className="inline-block mr-[0.28em]">
      {word}
    </motion.span>
  );
}

