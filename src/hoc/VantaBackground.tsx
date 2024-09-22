// src/pages/contact/VantaBackground.tsx
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min";

const VantaBackground: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const vantaEffect = WAVES({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x467e,
      THREE: THREE,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        position: "absolute",
        left: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
        zIndex: 2,
      }}
    />
  );
};

export default VantaBackground;
