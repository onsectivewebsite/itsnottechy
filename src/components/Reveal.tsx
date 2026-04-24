"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

function useHydrated() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return hydrated;
}

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const hydrated = useHydrated();
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const shouldAnimate = hydrated && !reduceMotion;
  return (
    <motion.div
      ref={ref}
      initial={shouldAnimate ? { opacity: 0, y } : false}
      animate={shouldAnimate && inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.65, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function WordReveal({
  text,
  className = "",
  accentWords = [],
  delay = 0,
}: {
  text: string;
  className?: string;
  accentWords?: string[];
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const hydrated = useHydrated();
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const shouldAnimate = hydrated && !reduceMotion;
  const words = text.split(" ");
  const accentSet = new Set(accentWords.map((w) => w.toLowerCase()));

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => {
        const isAccent = accentSet.has(word.replace(/[.,!?]/g, "").toLowerCase());
        return (
          <motion.span
            key={`${word}-${i}`}
            initial={shouldAnimate ? { opacity: 0, y: 28, filter: "blur(10px)" } : false}
            animate={
              shouldAnimate && inView
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : undefined
            }
            transition={{
              duration: 0.7,
              delay: delay + i * 0.06,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className={`inline-block ${isAccent ? "gradient-text" : ""}`}
          >
            {word}
            {i < words.length - 1 && " "}
          </motion.span>
        );
      })}
    </span>
  );
}

export function StaggerGroup({
  children,
  className = "",
  stagger = 0.06,
  delay = 0,
  y = 24,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const hydrated = useHydrated();
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const shouldAnimate = hydrated && !reduceMotion;
  return (
    <motion.div
      ref={ref}
      initial={shouldAnimate ? "hidden" : false}
      animate={shouldAnimate && inView ? "visible" : undefined}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
      className={className}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] },
                },
              }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}

export function ScrollFloat({
  children,
  className = "",
  distance = 80,
}: {
  children: React.ReactNode;
  className?: string;
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

export function HoverLift({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function CharReveal({
  text,
  className = "",
  delay = 0,
  accentWords = [],
  stagger = 0.025,
}: {
  text: string;
  className?: string;
  delay?: number;
  accentWords?: string[];
  stagger?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const hydrated = useHydrated();
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const shouldAnimate = hydrated && !reduceMotion;
  const words = text.split(" ");
  const accentSet = new Set(accentWords.map((w) => w.toLowerCase()));
  let charIndex = 0;

  return (
    <span ref={ref} className={className}>
      {words.map((word, wi) => {
        const isAccent = accentSet.has(
          word.replace(/[.,!?]/g, "").toLowerCase(),
        );
        const chars = Array.from(word);
        const wordEl = (
          <span
            key={`${word}-${wi}`}
            className={`inline-block whitespace-nowrap ${
              isAccent ? "gradient-text" : ""
            }`}
          >
            {chars.map((ch) => {
              const i = charIndex++;
              return (
                <motion.span
                  key={`${ch}-${i}`}
                  initial={shouldAnimate ? { opacity: 0, y: "0.55em" } : false}
                  animate={
                    shouldAnimate && inView
                      ? { opacity: 1, y: 0 }
                      : undefined
                  }
                  transition={{
                    duration: 0.55,
                    delay: delay + i * stagger,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="inline-block"
                >
                  {ch}
                </motion.span>
              );
            })}
          </span>
        );
        return (
          <span key={`w-${wi}`}>
            {wordEl}
            {wi < words.length - 1 && " "}
          </span>
        );
      })}
    </span>
  );
}

export function Spotlight({
  children,
  className = "",
  color = "rgba(0, 179, 164, 0.18)",
  size = 360,
}: {
  children: React.ReactNode;
  className?: string;
  color?: string;
  size?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);
  const opacity = useMotionValue(0);
  const background = useTransform(
    [mx, my],
    ([x, y]) =>
      `radial-gradient(${size}px circle at ${x}px ${y}px, ${color}, transparent 65%)`,
  );

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
    opacity.set(1);
  }
  function onLeave() {
    opacity.set(0);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`relative ${className}`}
    >
      <motion.div
        aria-hidden
        style={{ background, opacity }}
        transition={{ opacity: { duration: 0.3 } }}
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
      />
      <div className="relative">{children}</div>
    </div>
  );
}

export function Parallax({
  children,
  className = "",
  offset = 60,
  direction = "up",
}: {
  children?: React.ReactNode;
  className?: string;
  offset?: number;
  direction?: "up" | "down" | "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yRange =
    direction === "up" ? [offset, -offset] : direction === "down" ? [-offset, offset] : [0, 0];
  const xRange =
    direction === "left" ? [offset, -offset] : direction === "right" ? [-offset, offset] : [0, 0];
  const y = useTransform(scrollYProgress, [0, 1], yRange);
  const x = useTransform(scrollYProgress, [0, 1], xRange);
  return (
    <motion.div ref={ref} style={{ x, y }} className={className}>
      {children}
    </motion.div>
  );
}

export function ScaleIn({
  children,
  className = "",
  delay = 0,
  from = 0.9,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  from?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const hydrated = useHydrated();
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const shouldAnimate = hydrated && !reduceMotion;
  return (
    <motion.div
      ref={ref}
      initial={shouldAnimate ? { opacity: 0, scale: from } : false}
      animate={shouldAnimate && inView ? { opacity: 1, scale: 1 } : undefined}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function DrawLine({
  className = "",
  delay = 0,
  duration = 0.9,
}: {
  className?: string;
  delay?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const hydrated = useHydrated();
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const shouldAnimate = hydrated && !reduceMotion;
  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div
        initial={shouldAnimate ? { scaleX: 0 } : false}
        animate={shouldAnimate && inView ? { scaleX: 1 } : undefined}
        transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
        style={{ transformOrigin: "left center" }}
        className="h-px w-full bg-gradient-to-r from-brand via-brand/60 to-transparent"
      />
    </div>
  );
}

export function Magnetic({
  children,
  className = "",
  strength = 0.25,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 22 });
  const sy = useSpring(y, { stiffness: 260, damping: 22 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FloatOrb({
  className = "",
  size = 320,
  color = "rgba(0, 179, 164, 0.22)",
  duration = 12,
}: {
  className?: string;
  size?: number;
  color?: string;
  duration?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      aria-hidden
      animate={
        reduceMotion
          ? undefined
          : {
              y: [0, -24, 0, 18, 0],
              x: [0, 14, 0, -12, 0],
              scale: [1, 1.05, 1, 0.97, 1],
            }
      }
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      style={{ width: size, height: size, background: color }}
    />
  );
}

export function ScrollScale({
  children,
  className = "",
  from = 0.85,
  to = 1,
}: {
  children: React.ReactNode;
  className?: string;
  from?: number;
  to?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 10%"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [from, to, from]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);
  return (
    <motion.div ref={ref} style={{ scale, opacity }} className={className}>
      {children}
    </motion.div>
  );
}
