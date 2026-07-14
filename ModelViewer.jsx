import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Center } from '@react-three/drei';

// Component to cleanly load and isolate the GLTF/GLB asset
function Model({ url }) {
  const { scene } = useGLTF(url);
  
  // Optional: Traverses the model to ensure standard materials react dynamically to scene lighting
  scene.traverse((obj) => {
    if (obj.isMesh) {
      obj.castShadow = true;
      obj.receiveShadow = true;
    }
  });

  return <primitive object={scene} />;
}

export default function ModelViewer() {
  return (
    <div className="w-full h-[450px] bg-black/40 rounded-3xl border border-cyan-500/10 backdrop-blur-xl relative overflow-hidden group">
      {/* Subtle background tech grid layout mimicking Magic UI's Retro Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      
      <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
        <pointLight position={[-5, -5, -5]} intensity={0.5} />
        <spotLight position={[0, 8, 0]} intensity={1} angle={0.3} penumbra={1} />
        
        <Suspense fallback={
          // Elegant wireframe fallback geometry while the GLB loads
          <mesh>
            <torusKnotGeometry args={[1, 0.3, 100, 16]} />
            <meshStandardMaterial color="#06b6d4" wireframe />
          </mesh>
        }>
          <Center>
            <Model url="/keychain.glb" />
          </Center>
        </Suspense>
        
        {/* Allows users to pivot, orbit, and inspect the hardware mechanics */}
        <OrbitControls 
          enableZoom={true} 
          maxDistance={8} 
          minDistance={2} 
          autoRotate={true} 
          autoRotateSpeed={0.6} 
        />
      </Canvas>
      
      <div className="absolute bottom-4 left-4 text-xs text-zinc-500 pointer-events-none uppercase tracking-widest font-mono">
        Drag to rotate // Scroll to zoom
      </div>
    </div>
  );
}
