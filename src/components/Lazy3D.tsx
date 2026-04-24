"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

/**
 * Skip mounting 3D payloads on mobile (< 1024px) and respect prefers-reduced-motion.
 * Desktop users get dynamic-imported components so three.js ships off the critical path.
 */
function useDesktopCapable() {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const prm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setOk(mq.matches && !prm.matches);
    sync();
    mq.addEventListener("change", sync);
    prm.addEventListener("change", sync);
    return () => {
      mq.removeEventListener("change", sync);
      prm.removeEventListener("change", sync);
    };
  }, []);
  return ok;
}

type AccentProps = { className?: string };

const GlobeInner = dynamic<AccentProps>(
  () => import("@/components/Globe").then((m) => m.Globe),
  { ssr: false },
);

const OrbitAccentInner = dynamic<AccentProps>(
  () => import("@/components/ThreeAccents").then((m) => m.OrbitAccent),
  { ssr: false },
);
const CrystalClusterInner = dynamic<AccentProps>(
  () => import("@/components/ThreeAccents").then((m) => m.CrystalCluster),
  { ssr: false },
);
const CubeFieldInner = dynamic<AccentProps>(
  () => import("@/components/ThreeAccents").then((m) => m.CubeField),
  { ssr: false },
);
const ParticleFieldInner = dynamic<AccentProps>(
  () => import("@/components/ThreeAccents").then((m) => m.ParticleField),
  { ssr: false },
);
const PrismAccentInner = dynamic<AccentProps>(
  () => import("@/components/ThreeAccents").then((m) => m.PrismAccent),
  { ssr: false },
);

export function LazyGlobe(props: { className?: string }) {
  const ok = useDesktopCapable();
  if (!ok) return null;
  return <GlobeInner {...props} />;
}

export function LazyOrbitAccent(props: { className?: string }) {
  const ok = useDesktopCapable();
  if (!ok) return null;
  return <OrbitAccentInner {...props} />;
}

export function LazyCrystalCluster(props: { className?: string }) {
  const ok = useDesktopCapable();
  if (!ok) return null;
  return <CrystalClusterInner {...props} />;
}

export function LazyCubeField(props: { className?: string }) {
  const ok = useDesktopCapable();
  if (!ok) return null;
  return <CubeFieldInner {...props} />;
}

export function LazyParticleField(props: { className?: string }) {
  const ok = useDesktopCapable();
  if (!ok) return null;
  return <ParticleFieldInner {...props} />;
}

export function LazyPrismAccent(props: { className?: string }) {
  const ok = useDesktopCapable();
  if (!ok) return null;
  return <PrismAccentInner {...props} />;
}
