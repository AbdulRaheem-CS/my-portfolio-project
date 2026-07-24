import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';

interface ParticleFieldProps {
  color?: string;
  count?: number;
  className?: string;
}

/** Lightweight ambient particle backdrop for non-hero sections. */
const ParticleField = ({ color = '#f97316', count = 60, className = '' }: ParticleFieldProps) => (
  <Canvas
    dpr={[1, 1.5]}
    gl={{ antialias: false, alpha: true }}
    camera={{ position: [0, 0, 6], fov: 45 }}
    className={`!absolute inset-0 ${className}`}
  >
    <Suspense fallback={null}>
      <Sparkles count={count} scale={[9, 5, 5]} size={2} speed={0.25} color={color} opacity={0.5} />
    </Suspense>
  </Canvas>
);

export default ParticleField;
