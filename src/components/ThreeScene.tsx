"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Environment,
  Sparkles,
  Stars,
  MeshTransmissionMaterial,
  ContactShadows,
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Group, Mesh } from "three";

function HeroSphere() {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.12;
    ref.current.rotation.y = state.clock.elapsedTime * 0.18;
    const s = 1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.03;
    ref.current.scale.setScalar(s);
  });
  return (
    <Float speed={1.2} rotationIntensity={0.5} floatIntensity={1.6}>
      <mesh ref={ref} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.5, 16]} />
        <MeshDistortMaterial
          color="#00b3a4"
          distort={0.55}
          speed={2.2}
          roughness={0.08}
          metalness={0.75}
          emissive="#00b3a4"
          emissiveIntensity={0.45}
        />
      </mesh>
    </Float>
  );
}

function GlassCube({ position }: { position: [number, number, number] }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.3;
    ref.current.rotation.y = state.clock.elapsedTime * 0.4;
  });
  return (
    <Float speed={0.9} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref} position={position} scale={0.5}>
        <boxGeometry args={[1, 1, 1]} />
        <MeshTransmissionMaterial
          thickness={0.4}
          roughness={0.05}
          chromaticAberration={0.08}
          ior={1.4}
          transmission={0.95}
          color="#ffffff"
          backside
        />
      </mesh>
    </Float>
  );
}

function Torus({
  position,
  color = "#ffffff",
  scale = 0.55,
}: {
  position: [number, number, number];
  color?: string;
  scale?: number;
}) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.4;
    ref.current.rotation.z = state.clock.elapsedTime * 0.25;
  });
  return (
    <Float speed={0.8} rotationIntensity={0.6} floatIntensity={1.4}>
      <mesh ref={ref} position={position} scale={scale}>
        <torusGeometry args={[0.9, 0.24, 32, 128]} />
        <meshStandardMaterial
          color={color}
          metalness={0.95}
          roughness={0.08}
          emissive={color === "#00b3a4" ? "#00b3a4" : "#000"}
          emissiveIntensity={color === "#00b3a4" ? 0.3 : 0}
        />
      </mesh>
    </Float>
  );
}

function SceneGroup() {
  const group = useRef<Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    const { pointer } = state;
    group.current.rotation.y = pointer.x * 0.15;
    group.current.rotation.x = -pointer.y * 0.08;
  });
  return (
    <group ref={group}>
      <HeroSphere />
      <Torus position={[-2.8, 1.3, -1]} color="#00b3a4" scale={0.55} />
      <Torus position={[2.5, -1.4, -0.5]} color="#ffffff" scale={0.45} />
      <GlassCube position={[2.8, 1.5, -1]} />
      <GlassCube position={[-2.4, -1.5, -0.8]} />
    </group>
  );
}

export function ThreeScene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.8]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.35} />
          <directionalLight position={[5, 6, 5]} intensity={1.2} />
          <pointLight position={[-4, -2, -4]} color="#00b3a4" intensity={4} />
          <pointLight position={[4, 4, 2]} color="#ffffff" intensity={1.5} />
          <SceneGroup />
          <Sparkles count={80} scale={8} size={3} speed={0.5} color="#66e7da" />
          <Stars radius={50} depth={40} count={1200} factor={2} fade speed={0.6} />
          <ContactShadows
            position={[0, -2, 0]}
            opacity={0.3}
            scale={8}
            blur={2.5}
            far={4}
          />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
