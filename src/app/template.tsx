"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Route-level enter transition. Runs on every navigation because Next.js
 * remounts `template.tsx` per route. Opacity-only on purpose: animating a
 * transform here would create a containing block and break the homepage's
 * `position: sticky` scroll sections.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
