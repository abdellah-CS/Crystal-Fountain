import { useMediaQuery } from "react-responsive";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../layout/Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.glb");

  return (
    <primitive
      object={earth.scene}
      scale={1.2}
      position-y={-2}
      rotation-x={0}
    />
  );
};

const EarthCanvas = () => {
  const isWideScreen = useMediaQuery({ minWidth: 1280 });

  return (
    <div style={{ height: isWideScreen ? 630 : "100%" }}>
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 7, 6], // Adjusted to raise the view (increase y-position)
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          {/* Add lights */}
          <ambientLight intensity={0.5} />
          <directionalLight intensity={1.5} position={[5, 5, 5]} castShadow />
          <Earth />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default EarthCanvas;
