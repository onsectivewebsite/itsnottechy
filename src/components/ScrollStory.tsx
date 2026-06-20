"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";

export type StoryChapter = {
  eyebrow?: string;
  title: string;
  body: string;
  bullets?: string[];
};

/**
 * Bold scroll-storytelling section: a pinned panel whose chapters scrub and
 * crossfade as the user scrolls. Each chapter owns ~80vh of scroll distance.
 * Transform/opacity only (60fps-friendly). Falls back to a plain stacked list
 * when the user prefers reduced motion.
 */
export function ScrollStory({
  eyebrow,
  heading,
  intro,
  chapters,
}: {
  eyebrow?: string;
  heading: string;
  intro?: string;
  chapters: StoryChapter[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  if (reduce) {
    return (
      <section className="section">
        {eyebrow && (
          <span className="text-xs uppercase tracking-[0.2em] text-brand">
            {eyebrow}
          </span>
        )}
        <h2 className="mt-2 max-w-3xl font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
          {heading}
        </h2>
        {intro && <p className="mt-4 max-w-2xl text-white/70">{intro}</p>}
        <div className="mt-10 space-y-6">
          {chapters.map((c, i) => (
            <div
              key={c.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
            >
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand">
                {String(i + 1).padStart(2, "0")} / {String(chapters.length).padStart(2, "0")}
                {c.eyebrow ? ` · ${c.eyebrow}` : ""}
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold text-white md:text-3xl">
                {c.title}
              </h3>
              <p className="mt-3 text-white/70 md:text-lg">{c.body}</p>
              {c.bullets && (
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-white/70">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    );
  }

  const n = chapters.length;

  return (
    <section ref={ref} style={{ height: `${n * 80 + 20}vh` }} className="relative">
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden">
        <div className="section w-full">
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center md:gap-16">
            <div>
              {eyebrow && (
                <span className="text-xs uppercase tracking-[0.2em] text-brand">
                  {eyebrow}
                </span>
              )}
              <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
                {heading}
              </h2>
              {intro && (
                <p className="mt-5 max-w-md text-white/70">{intro}</p>
              )}
              <div className="mt-10 flex items-center gap-3">
                {chapters.map((c, i) => (
                  <Dot
                    key={c.title}
                    index={i}
                    total={n}
                    progress={scrollYProgress}
                  />
                ))}
              </div>
            </div>

            <div className="relative min-h-[58vh] md:min-h-[420px]">
              {chapters.map((c, i) => (
                <Chapter
                  key={c.title}
                  chapter={c}
                  index={i}
                  total={n}
                  progress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function windowPoints(index: number, total: number) {
  const seg = 1 / total;
  const center = (index + 0.5) * seg;
  // First chapter is fully shown at the very top; last stays through the end.
  const left = index === 0 ? -0.0001 : center - seg;
  const right = index === total - 1 ? 1.0001 : center + seg;
  return { left, center, right };
}

function Chapter({
  chapter,
  index,
  total,
  progress,
}: {
  chapter: StoryChapter;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const { left, center, right } = windowPoints(index, total);
  const opacity = useTransform(
    progress,
    [left, center, right],
    [index === 0 ? 1 : 0, 1, index === total - 1 ? 1 : 0],
  );
  const y = useTransform(
    progress,
    [left, center, right],
    [index === 0 ? 0 : 48, 0, index === total - 1 ? 0 : -48],
  );

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col justify-center"
    >
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        {chapter.eyebrow ? ` · ${chapter.eyebrow}` : ""}
      </span>
      <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-white md:text-5xl">
        {chapter.title}
      </h3>
      <p className="mt-5 max-w-2xl text-white/70 md:text-lg">{chapter.body}</p>
      {chapter.bullets && (
        <ul className="mt-7 grid max-w-2xl gap-2.5 sm:grid-cols-2">
          {chapter.bullets.map((b) => (
            <li key={b} className="flex gap-2 text-sm text-white/75">
              <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
              {b}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

function Dot({
  index,
  total,
  progress,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const { left, center, right } = windowPoints(index, total);
  const width = useTransform(
    progress,
    [left, center, right],
    [index === 0 ? 36 : 12, 36, index === total - 1 ? 36 : 12],
  );
  const opacity = useTransform(
    progress,
    [left, center, right],
    [index === 0 ? 1 : 0.35, 1, index === total - 1 ? 1 : 0.35],
  );
  return (
    <motion.span
      style={{ width, opacity }}
      className="h-1.5 rounded-full bg-brand"
      aria-hidden
    />
  );
}
