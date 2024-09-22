import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload, Decal } from "@react-three/drei";
import * as THREE from "three";

// const IconSphere = (props: { iconTexture: string }) => {
//   const sphereRef = useRef<THREE.Mesh>(null);
//   const [decal] = useTexture([props.iconTexture]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (sphereRef.current) {
//         sphereRef.current.rotation.x += 0.05; // Increased speed
//         sphereRef.current.rotation.y += 0.05; // Increased speed
//         sphereRef.current.rotation.z += 0.05; // Increased speed
//       }
//     }, 16); // 16ms = ~60fps

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <mesh
//       ref={sphereRef}
//       castShadow
//       receiveShadow
//       position-y={0}
//       rotation-y={0}
//     >
//       <sphereGeometry args={[2.5, 100, 100]} />
//       <meshStandardMaterial
//         color="#ffffff"
//         roughness={0}
//         metalness={-0.7}
//         flatShading={false}
//       />
//       <Decal
//         position={[0, 0, 3]}
//         rotation={[0, 0, 0]}
//         scale={4.5}
//         map={decal}
//         flatShading
//       />
//     </mesh>
//   );
// };

const BallCanvas: React.FC<{ iconTexture: string }> = ({ iconTexture }) => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const decal = useLoader(THREE.TextureLoader, iconTexture);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sphereRef.current) {
        sphereRef.current.rotation.y += 0.02;
      }
    }, 16);

    return () => clearInterval(interval);
  }, [iconTexture]);

  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 1,
        far: 100,
        position: [0, 0, 8],
      }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight
          castShadow
          position={[4, 4, 4]}
          intensity={2}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={1}
          shadow-camera-far={15}
        />
        <mesh ref={sphereRef} castShadow receiveShadow>
          <sphereGeometry args={[2.5, 100, 100]} />
          <meshStandardMaterial
            color="#ffffff"
            roughness={0}
            metalness={-0.7}
            flatShading={false}
          />
          <Decal
            position={[0, 0, 3]}
            rotation={[0, 0, 0]}
            scale={4.5}
            map={decal}
            // flatShading
          />
          {/* Back decal */}
          <Decal
            position={[0, 0, -3]}
            rotation={[0, Math.PI, 0]} // Rotate 180 degrees
            scale={4.5}
            map={decal}
            // flatShading
          />
        </mesh>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default BallCanvas;
