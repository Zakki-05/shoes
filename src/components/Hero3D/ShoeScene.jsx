import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';
import { ParametricShoe } from './ParametricShoe';
import { FloatingSilhouette } from './FloatingSilhouette';
import { StudioLighting } from './StudioLighting';

function CameraRig({ mousePosition, scrollProgress }) {
  useFrame((state) => {
    // Lerp camera target based on mouse & scroll
    const targetX = mousePosition.x * 0.8;
    const targetY = mousePosition.y * 0.6 + scrollProgress * -1.2;
    const targetZ = 5.2 + scrollProgress * 1.5;

    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY + 0.4, 0.05);
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.05);

    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

function MainHeroShoe({ mousePosition, scrollProgress, onClickHero }) {
  const shoeContainerRef = useRef();

  useFrame((state) => {
    if (shoeContainerRef.current) {
      // Continuous slow rotation + mouse response + scroll response
      const baseRotation = state.clock.elapsedTime * 0.15;
      const mouseRotY = mousePosition.x * 0.4;
      const mouseRotX = -mousePosition.y * 0.2;
      const scrollRotY = scrollProgress * Math.PI * 1.5;

      shoeContainerRef.current.rotation.y = baseRotation + mouseRotY + scrollRotY;
      shoeContainerRef.current.rotation.x = mouseRotX + Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
    }
  });

  return (
    <group ref={shoeContainerRef} position={[0, 0, 0]}>
      <ParametricShoe
        color="#3B2317"
        accentColor="#C7A46A"
        soleColor="#1A0F0A"
        roughness={0.3}
        clearcoat={0.8}
        type="oxford"
        hasCapToe={true}
        onClick={onClickHero}
      />
    </group>
  );
}

export function ShoeScene({ mousePosition, scrollProgress, onClickHero }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0.4, 5.2], fov: 45 }}
        dpr={isMobile ? [1, 1.2] : [1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <CameraRig mousePosition={mousePosition} scrollProgress={scrollProgress} />
        <StudioLighting mousePosition={mousePosition} />

        {/* Studio Atmospheric Dust / Golden Sparks */}
        {!isMobile && (
          <Sparkles
            count={40}
            scale={8}
            size={2.5}
            speed={0.4}
            opacity={0.35}
            color="#E5C992"
          />
        )}

        {/* Hero Shoe Core */}
        <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.3}>
          <MainHeroShoe
            mousePosition={mousePosition}
            scrollProgress={scrollProgress}
            onClickHero={onClickHero}
          />
        </Float>

        {/* Floating Silhouette Products surrounding main hero */}
        {!isMobile && (
          <group position={[0, 0, 0]}>
            {/* Top Left - Suede Tassel Loafer */}
            <FloatingSilhouette
              position={[-3.2, 1.8, -2.5]}
              scale={0.4}
              color="#3D2B1F"
              type="loafer"
              speed={0.8}
              rotationOffset={[0, 0.8, -0.2]}
            />
            {/* Bottom Left - Chelsea Boot */}
            <FloatingSilhouette
              position={[-3.8, -1.6, -2]}
              scale={0.45}
              color="#121214"
              type="boot"
              speed={1.1}
              rotationOffset={[0, -0.5, 0.1]}
            />
            {/* Top Right - Double Monk Strap */}
            <FloatingSilhouette
              position={[3.4, 2.0, -2.8]}
              scale={0.42}
              color="#8A4925"
              type="monk"
              speed={0.9}
              rotationOffset={[0, -1.1, 0.2]}
            />
            {/* Bottom Right - Leather Sneaker */}
            <FloatingSilhouette
              position={[3.6, -1.5, -1.8]}
              scale={0.38}
              color="#F5F3EF"
              type="sneaker"
              speed={1.2}
              rotationOffset={[0, 0.6, -0.15]}
            />
          </group>
        )}

        {/* Preset Environment Reflection for Metallic and Leather Realism */}
        <Environment preset="city" environmentIntensity={0.7} />
      </Canvas>
    </div>
  );
}
