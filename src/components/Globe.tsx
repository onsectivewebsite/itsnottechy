"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

function SpinningGlobe() {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.18;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
  });
  return (
    <group>
      <Float speed={0.6} rotationIntensity={0.2} floatIntensity={0.4}>
        <mesh ref={ref}>
          <icosahedronGeometry args={[1.6, 4]} />
          <meshStandardMaterial
            color="#1C1F26"
            wireframe
            emissive="#00b3a4"
            emissiveIntensity={0.7}
          />
        </mesh>
      </Float>
      <mesh>
        <sphereGeometry args={[1.58, 48, 48]} />
        <meshBasicMaterial color="#0d0e13" />
      </mesh>
    </group>
  );
}

export function Globe() {
  return (
    <div className="aspect-square w-full max-w-lg">
      <Canvas camera={{ position: [0, 0, 4.2], fov: 45 }} dpr={[1, 1.6]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[4, 4, 4]} intensity={2} color="#00b3a4" />
          <SpinningGlobe />
          <Stars radius={40} depth={30} count={800} factor={3} fade speed={0.6} />
        </Suspense>
      </Canvas>
    </div>
  );
}
