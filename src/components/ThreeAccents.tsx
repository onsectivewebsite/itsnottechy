"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  MeshDistortMaterial,
  MeshTransmissionMaterial,
  Sparkles,
  Stars,
  Torus,
} from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import type { Group, InstancedMesh, Mesh, Points } from "three";
import { Color, MathUtils, Object3D } from "three";

function TorusKnot() {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.2;
    ref.current.rotation.y = state.clock.elapsedTime * 0.28;
  });
  return (
    <Float speed={1.1} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref}>
        <torusKnotGeometry args={[1.1, 0.32, 180, 32]} />
        <MeshDistortMaterial
          color="#00b3a4"
          distort={0.25}
          speed={1.6}
          roughness={0.08}
          metalness={0.85}
          emissive="#00b3a4"
          emissiveIntensity={0.35}
        />
      </mesh>
    </Float>
  );
}

function FloatingRings() {
  const group = useRef<Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.25;
    group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
  });
  return (
    <group ref={group}>
      <Torus args={[1.8, 0.03, 16, 160]} rotation={[Math.PI / 2.2, 0, 0]}>
        <meshStandardMaterial color="#00b3a4" emissive="#00b3a4" emissiveIntensity={0.8} />
      </Torus>
      <Torus args={[2.2, 0.02, 16, 160]} rotation={[Math.PI / 2.6, Math.PI / 6, 0]}>
        <meshStandardMaterial color="#66e7da" emissive="#66e7da" emissiveIntensity={0.6} />
      </Torus>
      <Torus args={[2.6, 0.015, 16, 160]} rotation={[Math.PI / 1.7, -Math.PI / 8, 0]}>
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.25} />
      </Torus>
    </group>
  );
}

export function OrbitAccent({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute -z-10 ${className}`}>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.6]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[4, 4, 4]} intensity={2.2} color="#00b3a4" />
          <TorusKnot />
          <FloatingRings />
          <Sparkles count={60} scale={8} size={2.2} speed={0.4} color="#66e7da" />
        </Suspense>
      </Canvas>
    </div>
  );
}

function InstancedCubes({ count = 32 }: { count?: number }) {
  const ref = useRef<InstancedMesh>(null);
  const dummy = useMemo(() => new Object3D(), []);
  const seeds = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        x: MathUtils.randFloatSpread(8),
        y: MathUtils.randFloatSpread(6),
        z: MathUtils.randFloatSpread(6),
        scale: MathUtils.randFloat(0.08, 0.28),
        speed: MathUtils.randFloat(0.3, 0.9),
        phase: Math.random() * Math.PI * 2,
      })),
    [count],
  );

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    seeds.forEach((s, i) => {
      dummy.position.set(
        s.x + Math.sin(t * s.speed + s.phase) * 0.3,
        s.y + Math.cos(t * s.speed + s.phase) * 0.3,
        s.z,
      );
      dummy.rotation.set(t * s.speed, t * s.speed * 0.8, 0);
      dummy.scale.setScalar(s.scale);
      dummy.updateMatrix();
      ref.current!.setMatrixAt(i, dummy.matrix);
    });
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, count]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color="#00b3a4"
        emissive="#00b3a4"
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.12}
      />
    </instancedMesh>
  );
}

export function CubeField({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute -z-10 ${className}`}>
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[4, 5, 4]} intensity={2} color="#00b3a4" />
          <pointLight position={[-4, -2, 3]} intensity={1.5} color="#66e7da" />
          <InstancedCubes count={40} />
          <Stars radius={30} depth={30} count={400} factor={2} fade speed={0.4} />
        </Suspense>
      </Canvas>
    </div>
  );
}

function CrystalGroup() {
  const group = useRef<Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.2;
  });
  return (
    <group ref={group}>
      <Float speed={1.0} rotationIntensity={0.8} floatIntensity={1.0}>
        <mesh position={[0, 0.3, 0]} scale={1.1}>
          <octahedronGeometry args={[1, 0]} />
          <MeshTransmissionMaterial
            thickness={0.5}
            roughness={0.05}
            chromaticAberration={0.1}
            ior={1.5}
            transmission={0.95}
            color="#66e7da"
            backside
          />
        </mesh>
      </Float>
      <Float speed={0.8} rotationIntensity={0.5} floatIntensity={0.9}>
        <mesh position={[1.6, -0.6, -0.5]} scale={0.55}>
          <tetrahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#00b3a4"
            emissive="#00b3a4"
            emissiveIntensity={0.6}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </Float>
      <Float speed={0.9} rotationIntensity={0.7} floatIntensity={1.1}>
        <mesh position={[-1.7, -0.8, -0.3]} scale={0.45}>
          <dodecahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#ffffff"
            metalness={0.7}
            roughness={0.18}
          />
        </mesh>
      </Float>
    </group>
  );
}

export function CrystalCluster({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute -z-10 ${className}`}>
      <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }} dpr={[1, 1.7]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.45} />
          <pointLight position={[4, 4, 4]} intensity={2.4} color="#00b3a4" />
          <pointLight position={[-3, -2, -2]} intensity={1.6} color="#66e7da" />
          <CrystalGroup />
          <Sparkles count={50} scale={8} size={2} speed={0.5} color="#66e7da" />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}

function ParticleSwirl({ count = 600 }: { count?: number }) {
  const ref = useRef<Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = MathUtils.randFloat(1.5, 3.5);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.08;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color={new Color("#66e7da")}
        sizeAttenuation
        transparent
        opacity={0.85}
      />
    </points>
  );
}

export function ParticleField({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute -z-10 ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 55 }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <ParticleSwirl count={700} />
        </Suspense>
      </Canvas>
    </div>
  );
}

function PrismCluster() {
  const group = useRef<Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.x = state.clock.elapsedTime * 0.12;
    group.current.rotation.y = state.clock.elapsedTime * 0.18;
  });
  return (
    <group ref={group}>
      <Float speed={0.7} rotationIntensity={0.4}>
        <mesh>
          <icosahedronGeometry args={[1.35, 1]} />
          <meshStandardMaterial
            color="#0d0e13"
            wireframe
            emissive="#00b3a4"
            emissiveIntensity={0.6}
          />
        </mesh>
      </Float>
      <mesh>
        <icosahedronGeometry args={[1.2, 0]} />
        <MeshTransmissionMaterial
          thickness={0.6}
          roughness={0.06}
          chromaticAberration={0.12}
          ior={1.5}
          transmission={0.9}
          color="#66e7da"
          backside
        />
      </mesh>
    </group>
  );
}

export function PrismAccent({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute -z-10 ${className}`}>
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }} dpr={[1, 1.6]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[3, 4, 3]} intensity={2} color="#00b3a4" />
          <pointLight position={[-3, -3, -2]} intensity={1.5} color="#66e7da" />
          <PrismCluster />
          <Sparkles count={40} scale={6} size={2} speed={0.5} color="#66e7da" />
        </Suspense>
      </Canvas>
    </div>
  );
}

