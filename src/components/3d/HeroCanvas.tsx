import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sparkles, Icosahedron, TorusKnot } from '@react-three/drei';
import * as THREE from 'three';

/** Group that gently drifts to follow the pointer, giving parallax depth. */
const PointerRig = ({ children }: { children: React.ReactNode }) => {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const { pointer } = state;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, pointer.x * 0.4, 0.03);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -pointer.y * 0.25, 0.03);
  });

  return <group ref={group}>{children}</group>;
};

const CoreShape = () => {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * 0.08;
    mesh.current.rotation.y += delta * 0.12;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <Icosahedron ref={mesh} args={[1.6, 2]}>
        <MeshDistortMaterial
          color="#f97316"
          attach="material"
          distort={0.45}
          speed={2}
          roughness={0.15}
          metalness={0.6}
          emissive="#c2410c"
          emissiveIntensity={0.25}
        />
      </Icosahedron>
    </Float>
  );
};

const AccentRing = () => {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.z -= delta * 0.06;
    mesh.current.rotation.x += delta * 0.03;
  });

  return (
    <TorusKnot ref={mesh} args={[2.6, 0.05, 200, 16]} position={[0, 0, -1]}>
      <meshStandardMaterial color="#fb923c" roughness={0.4} metalness={0.7} wireframe />
    </TorusKnot>
  );
};

const Scene = () => (
  <>
    <ambientLight intensity={0.5} />
    <directionalLight position={[4, 4, 4]} intensity={1.2} color="#fdba74" />
    <pointLight position={[-4, -2, -2]} intensity={0.8} color="#f97316" />

    <PointerRig>
      <CoreShape />
      <AccentRing />
    </PointerRig>

    <Sparkles count={90} scale={[10, 6, 6]} size={2.5} speed={0.3} color="#fed7aa" opacity={0.6} />
  </>
);

/** Client-only 3D hero backdrop: distorted core, wireframe ring, ambient sparkles. */
const HeroCanvas = () => (
  <Canvas
    dpr={[1, 1.75]}
    gl={{ antialias: true, alpha: true }}
    camera={{ position: [0, 0, 6], fov: 45 }}
    className="!absolute inset-0"
  >
    <Suspense fallback={null}>
      <Scene />
    </Suspense>
  </Canvas>
);

export default HeroCanvas;
