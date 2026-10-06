import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function ParametricShoe({
  color = "#3B2317",
  accentColor = "#C7A46A",
  soleColor = "#1A0F0A",
  roughness = 0.3,
  clearcoat = 0.8,
  type = "oxford",
  hasCapToe = true,
  hasBrogue = false,
  bootStyle = null,
  loaferType = null,
  hasBuckle = false,
  isInteractive = true,
  onClick
}) {
  const shoeGroupRef = useRef();
  const upperRef = useRef();

  // Create custom leather texture bump map procedurally via canvas for maximum realism without external asset fetch dependencies
  const bumpTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#808080';
    ctx.fillRect(0, 0, 512, 512);

    // Fine leather grain noise
    for (let i = 0; i < 40000; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 512;
      const val = Math.floor(Math.random() * 40) + 100;
      ctx.fillStyle = `rgb(${val},${val},${val})`;
      ctx.fillRect(x, y, 1.5, 1.5);
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(4, 4);
    return texture;
  }, []);

  // Stitching texture pattern
  const stitchTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, 256, 64);
    ctx.strokeStyle = '#E5C992';
    ctx.lineWidth = 4;
    ctx.setLineDash([8, 8]);
    ctx.beginPath();
    ctx.moveTo(0, 32);
    ctx.lineTo(256, 32);
    ctx.stroke();
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(8, 1);
    return texture;
  }, []);

  useFrame((state, delta) => {
    if (shoeGroupRef.current && isInteractive) {
      // Subtle organic breathing animation
      shoeGroupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.08;
    }
  });

  const mainColorObj = useMemo(() => new THREE.Color(color), [color]);
  const accentColorObj = useMemo(() => new THREE.Color(accentColor), [accentColor]);
  const soleColorObj = useMemo(() => new THREE.Color(soleColor), [soleColor]);

  // Adjust geometry scale depending on style (Boots higher ankle, Loafers lower collar)
  const isBoot = type === "boot" || bootStyle !== null;
  const isLoafer = type === "loafer";

  return (
    <group
      ref={shoeGroupRef}
      onClick={onClick}
      cursor="pointer"
      scale={[1.1, 1.1, 1.1]}
      rotation={[0.1, -0.4, 0.05]}
    >
      {/* --- SHOE SOLE & STACKED HEEL --- */}
      <group position={[0, -0.2, 0]}>
        {/* Main Outsole */}
        <mesh position={[0, -0.1, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.3, 0.16, 3.4]} />
          <meshStandardMaterial
            color={soleColorObj}
            roughness={0.7}
            metalness={0.1}
          />
        </mesh>

        {/* Midsole Layer */}
        <mesh position={[0, -0.01, 0]}>
          <boxGeometry args={[1.34, 0.06, 3.44]} />
          <meshStandardMaterial
            color="#2B160A"
            roughness={0.5}
            bumpMap={bumpTexture}
            bumpScale={0.02}
          />
        </mesh>

        {/* Goodyear Stitched Welt Rim */}
        <mesh position={[0, 0.03, 0]}>
          <boxGeometry args={[1.38, 0.04, 3.48]} />
          <meshStandardMaterial
            color="#8C7043"
            roughness={0.4}
            map={stitchTexture}
          />
        </mesh>

        {/* Stacked Leather Heel */}
        <mesh position={[0, -0.22, -1.0]} castShadow receiveShadow>
          <boxGeometry args={[1.28, 0.28, 1.2]} />
          <meshStandardMaterial
            color={soleColorObj}
            roughness={0.8}
            metalness={0.05}
          />
        </mesh>

        {/* Rubber Heel Toplift */}
        <mesh position={[0, -0.37, -1.0]}>
          <boxGeometry args={[1.26, 0.04, 1.18]} />
          <meshStandardMaterial color="#0A0A0C" roughness={0.9} />
        </mesh>
      </group>

      {/* --- SHOE UPPER BODY --- */}
      <group ref={upperRef} position={[0, 0.4, 0]}>
        {/* Main Foot Bed / Vamp & Quarters */}
        <mesh position={[0, 0.1, 0.3]} castShadow receiveShadow>
          <coneGeometry args={[0.78, 2.2, 32, 1, false, 0, Math.PI * 2]} />
          <meshPhysicalMaterial
            color={mainColorObj}
            roughness={roughness}
            metalness={0.15}
            clearcoat={clearcoat}
            clearcoatRoughness={0.15}
            bumpMap={bumpTexture}
            bumpScale={0.03}
            reflectivity={0.9}
          />
        </mesh>

        {/* Tapered Toe Box / Sleek Italian Last Contour */}
        <mesh position={[0, -0.05, 1.15]} rotation={[0.22, 0, 0]} castShadow receiveShadow>
          <sphereGeometry args={[0.66, 32, 24, 0, Math.PI * 2, 0, Math.PI * 0.65]} />
          <meshPhysicalMaterial
            color={mainColorObj}
            roughness={roughness * 0.85}
            metalness={0.2}
            clearcoat={clearcoat + 0.1}
            bumpMap={bumpTexture}
            bumpScale={0.02}
          />
        </mesh>

        {/* Sleek Hand-Burnished Cap Toe Detail */}
        {hasCapToe && !isLoafer && (
          <mesh position={[0, -0.04, 1.22]} rotation={[0.22, 0, 0]} castShadow>
            <sphereGeometry args={[0.67, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.45]} />
            <meshPhysicalMaterial
              color={mainColorObj}
              roughness={roughness * 0.6}
              metalness={0.25}
              clearcoat={1.0}
              clearcoatRoughness={0.05}
            />
          </mesh>
        )}

        {/* Ankle Collar & Heel Counter */}
        <mesh position={[0, isBoot ? 0.7 : 0.35, -0.6]} rotation={[-0.15, 0, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.65, 0.72, isBoot ? 1.6 : 0.9, 32]} />
          <meshPhysicalMaterial
            color={mainColorObj}
            roughness={roughness}
            metalness={0.1}
            clearcoat={clearcoat}
            bumpMap={bumpTexture}
            bumpScale={0.03}
          />
        </mesh>

        {/* Glove Leather Interior Lining */}
        <mesh position={[0, isBoot ? 0.75 : 0.38, -0.6]}>
          <cylinderGeometry args={[0.58, 0.62, isBoot ? 1.55 : 0.85, 32, 1, true]} />
          <meshStandardMaterial
            color="#7E4727"
            roughness={0.8}
            side={THREE.BackSide}
          />
        </mesh>

        {/* Instep Tongue & Facing */}
        {!isLoafer && (
          <mesh position={[0, 0.42, 0.2]} rotation={[-0.45, 0, 0]}>
            <boxGeometry args={[0.54, 0.08, 1.1]} />
            <meshPhysicalMaterial
              color={mainColorObj}
              roughness={roughness * 1.1}
              metalness={0.1}
            />
          </mesh>
        )}

        {/* Lacing System & Eyelet Rows */}
        {type !== "loafer" && type !== "monk" && (
          <group position={[0, 0.46, 0.25]} rotation={[-0.45, 0, 0]}>
            {[-0.35, -0.15, 0.05, 0.25].map((z, idx) => (
              <group key={idx} position={[0, 0.05, z]}>
                {/* Brass Eyelets */}
                <mesh position={[-0.22, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
                  <torusGeometry args={[0.045, 0.02, 16, 24]} />
                  <meshStandardMaterial color={accentColorObj} metalness={0.9} roughness={0.2} />
                </mesh>
                <mesh position={[0.22, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
                  <torusGeometry args={[0.045, 0.02, 16, 24]} />
                  <meshStandardMaterial color={accentColorObj} metalness={0.9} roughness={0.2} />
                </mesh>
                {/* Woven Waxed Laces */}
                <mesh position={[0, 0.015, 0]}>
                  <boxGeometry args={[0.42, 0.03, 0.04]} />
                  <meshStandardMaterial color="#1A1A1A" roughness={0.9} />
                </mesh>
              </group>
            ))}
          </group>
        )}

        {/* Double Monk Strap Buckles */}
        {(type === "monk" || hasBuckle) && (
          <group position={[0.3, 0.45, -0.1]} rotation={[0, 0.2, -0.3]}>
            <mesh position={[0, 0.1, 0.1]}>
              <boxGeometry args={[0.1, 0.18, 0.25]} />
              <meshStandardMaterial color={accentColorObj} metalness={0.95} roughness={0.15} />
            </mesh>
            <mesh position={[0, -0.1, -0.1]}>
              <boxGeometry args={[0.1, 0.18, 0.25]} />
              <meshStandardMaterial color={accentColorObj} metalness={0.95} roughness={0.15} />
            </mesh>
          </group>
        )}

        {/* Loafer Tassels or Saddle Strap */}
        {isLoafer && (
          <group position={[0, 0.32, 0.55]} rotation={[-0.2, 0, 0]}>
            {loaferType === "tassel" ? (
              <group>
                <mesh position={[-0.08, -0.1, 0]}>
                  <cylinderGeometry args={[0.04, 0.06, 0.26, 16]} />
                  <meshStandardMaterial color={mainColorObj} roughness={roughness} />
                </mesh>
                <mesh position={[0.08, -0.1, 0]}>
                  <cylinderGeometry args={[0.04, 0.06, 0.26, 16]} />
                  <meshStandardMaterial color={mainColorObj} roughness={roughness} />
                </mesh>
              </group>
            ) : (
              /* Penny Loafer Leather Saddle Strap */
              <mesh position={[0, 0.04, -0.1]}>
                <boxGeometry args={[0.82, 0.06, 0.28]} />
                <meshPhysicalMaterial color={mainColorObj} roughness={roughness * 0.9} clearcoat={clearcoat} />
              </mesh>
            )}
          </group>
        )}
      </group>

      {/* Gold Heel Aurelius Crest Badge */}
      <mesh position={[0, 0.25, -1.25]} rotation={[Math.PI, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.02, 24]} />
        <meshStandardMaterial
          color={accentColorObj}
          metalness={0.95}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}
