import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { ContactShadows } from '@react-three/drei';

export function StudioLighting({ mousePosition }) {
  const spotLightRef = useRef();

  useFrame(() => {
    if (spotLightRef.current && mousePosition) {
      // Dynamic subtle light shift with lerp based on mouse movement
      spotLightRef.current.position.x = 5 + mousePosition.x * 2.5;
      spotLightRef.current.position.y = 8 + mousePosition.y * 1.5;
    }
  });

  return (
    <>
      {/* Soft Studio Ambient Light */}
      <ambientLight intensity={0.6} color="#F4EFE7" />

      {/* Main Studio Key Spotlight */}
      <spotLight
        ref={spotLightRef}
        position={[5, 9, 5]}
        angle={0.4}
        penumbra={0.8}
        intensity={2.8}
        color="#FFF6E5"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />

      {/* Warm Golden Luxury Rim Light */}
      <directionalLight
        position={[-6, 4, -5]}
        intensity={2.2}
        color="#C7A46A"
      />

      {/* Cool Specular Accent Highlight Light */}
      <directionalLight
        position={[6, 3, -4]}
        intensity={1.5}
        color="#D4E4F7"
      />

      {/* Soft Ground Bounce Light */}
      <directionalLight
        position={[0, -5, 2]}
        intensity={0.4}
        color="#8C7043"
      />

      {/* Soft Realistic Contact Shadow on Floor */}
      <ContactShadows
        position={[0, -1.2, 0]}
        opacity={0.7}
        scale={10}
        blur={2.5}
        far={4}
        color="#050507"
      />
    </>
  );
}
