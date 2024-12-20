"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { useEffect, Suspense } from "react";
import { Object3D, Mesh } from "three";

function Model({ onLoad }: { onLoad: () => void }) {
  const { scene } = useGLTF("/shoe.glb");

  useEffect(() => {
    scene.traverse((child: Object3D) => {
      if (child instanceof Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    // Call onLoad when the model is ready
    onLoad();
  }, [scene, onLoad]);

  return <primitive object={scene} scale={0.5} position={[0, -1, 0]} />;
}

interface HeroShoeModelProps {
  onLoadingComplete: () => void;
}

export default function HeroShoeModel({
  onLoadingComplete,
}: HeroShoeModelProps) {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Suspense fallback={null}>
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 45, position: [0, 0, 15] }}>
          <Stage environment="city" intensity={0.5}>
            <Model onLoad={onLoadingComplete} />
          </Stage>
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={4}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
