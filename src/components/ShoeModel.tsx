"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { css } from "../../styled-system/css";
import { useEffect } from "react";

function Model() {
  const { scene } = useGLTF("/shoe.glb");

  useEffect(() => {
    // Ensure the model casts and receives shadows
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  return <primitive object={scene} scale={0.5} position={[0, -1, 0]} />;
}

export default function ShoeModel() {
  return (
    <div
      className={css({
        w: "full",
        h: "full",
        position: "relative",
        aspectRatio: "1",
      })}
    >
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 45, position: [0, 0, 15] }}>
        <Stage environment="city" intensity={0.5}>
          <Model />
        </Stage>
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={8}
          maxDistance={20}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={2}
        />
      </Canvas>
    </div>
  );
}
