import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, useGLTF, Html } from '@react-three/drei';
import { ParametricShoe } from './Hero3D/ParametricShoe';

function GLBModelLoader({ url, scale, position, rotation }) {
  try {
    const { scene } = useGLTF(url);
    return (
      <primitive
        object={scene}
        scale={scale || [1, 1, 1]}
        position={position || [0, 0, 0]}
        rotation={rotation || [0, 0, 0]}
      />
    );
  } catch (err) {
    console.warn("GLB model failed to load. Falling back to parametric 3D shoe model.", err);
    return null;
  }
}

function LoadingSpinner() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center p-6 glass-panel rounded-2xl border border-amber-500/30 text-amber-100 min-w-[220px]">
        <div className="w-10 h-10 border-2 border-amber-400 border-t-transparent rounded-full animate-spin mb-3"></div>
        <p className="text-xs uppercase tracking-widest font-mono text-amber-300">Rendering 3D Model...</p>
      </div>
    </Html>
  );
}

export function Product3DViewer({
  model = null,
  scale = 1,
  position = [0, -0.2, 0],
  rotation = [0.1, -0.4, 0.05],
  cameraSettings = { position: [0, 0.5, 4.2], fov: 42 },
  productParams = {},
  enableOrbit = true,
  autoRotate = false
}) {
  const controlsRef = useRef();

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={cameraSettings}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.7} />
        <spotLight position={[5, 8, 5]} angle={0.4} intensity={2.5} castShadow />
        <directionalLight position={[-5, 3, -4]} intensity={1.8} color="#C7A46A" />

        <Suspense fallback={<LoadingSpinner />}>
          <group position={position} scale={[scale, scale, scale]} rotation={rotation}>
            {model ? (
              <GLBModelLoader url={model} scale={scale} position={position} rotation={rotation} />
            ) : (
              <ParametricShoe
                color={productParams.baseColor || "#3B2317"}
                accentColor={productParams.accentColor || "#C7A46A"}
                soleColor={productParams.soleColor || "#1A0F0A"}
                roughness={productParams.roughness || 0.3}
                clearcoat={productParams.clearcoat || 0.8}
                type={productParams.type || "oxford"}
                hasCapToe={productParams.hasCapToe !== false}
                loaferType={productParams.loaferType}
                bootStyle={productParams.bootStyle}
                hasBuckle={productParams.hasBuckle}
                isInteractive={false}
              />
            )}
          </group>

          <ContactShadows position={[0, -0.9, 0]} opacity={0.65} scale={8} blur={2} />
          <Environment preset="studio" environmentIntensity={0.8} />
        </Suspense>

        {enableOrbit && (
          <OrbitControls
            ref={controlsRef}
            autoRotate={autoRotate}
            autoRotateSpeed={1.5}
            enablePan={true}
            enableZoom={true}
            minDistance={2.0}
            maxDistance={7.0}
            maxPolarAngle={Math.PI / 2 + 0.1}
          />
        )}
      </Canvas>
    </div>
  );
}
