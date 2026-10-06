import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { ParametricShoe } from './ParametricShoe';

export function FloatingSilhouette({ position, scale = 0.4, color, type, speed = 1, rotationOffset = [0, 0, 0] }) {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.elapsedTime * speed;
      groupRef.current.position.y = position[1] + Math.sin(t) * 0.15;
      groupRef.current.position.x = position[0] + Math.cos(t * 0.7) * 0.08;
      groupRef.current.rotation.y = rotationOffset[1] + Math.sin(t * 0.5) * 0.2;
      groupRef.current.rotation.z = rotationOffset[2] + Math.cos(t * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={[scale, scale, scale]}>
      <ParametricShoe
        color={color}
        type={type}
        roughness={0.4}
        clearcoat={0.4}
        isInteractive={false}
      />
    </group>
  );
}
