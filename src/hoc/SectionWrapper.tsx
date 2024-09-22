import { motion } from "framer-motion";
import { styles } from "../constants/styles";
import React, { useRef, useEffect } from "react";
import WAVES from "vanta/dist/vanta.waves.min";

interface Props {
  Component: React.ElementType;
  idName: string;
}

const SectionWrapper = (
  Component: Props["Component"],
  idName: Props["idName"]
) => {
  return function HOC() {
    const vantaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      let vantaEffect: any;
      const initVanta = () => {
        if (!vantaEffect) {
          vantaEffect = WAVES({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            color: 0x008bcf,
            shininess: 30,
            waveHeight: 15,
            waveSpeed: 1,
            zoom: 0.7,
            scale: 1,
            scaleMobile: 1,
          });
        }
      };

      if (vantaRef.current) {
        initVanta();
      }

      return () => {
        if (vantaEffect) {
          vantaEffect.destroy();
        }
      };
    }, []);

    const isVantaEffectNeeded = [
      "contact",
      "catalogue",
      "cataloguestele",
      "catalogues",
      "fichetechnique",
    ].includes(idName);

    return (
      <motion.section
        ref={isVantaEffectNeeded ? vantaRef : null}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} ${
          isVantaEffectNeeded ? "sm:pt-0 pt-0 z-100" : "max-w-7xl"
        } relative mx-auto ${
          idName !== "projects" && idName !== "equipements" ? "z-[1000000]" : ""
        }`}
        id={idName}
        style={{
          ...(isVantaEffectNeeded && idName !== "contact"
            ? {
                width: "100%",
                height: "100vh",
                overflow: "hidden",
                position: "relative",
                margin: "auto",
              }
            : {}),
          ...(isVantaEffectNeeded && idName === "contact"
            ? {
                width: "100%",
                paddingBottom: "15%",
                overflow: "hidden",
                position: "relative",
                margin: "auto",
              }
            : {}),
        }}
      >
        <span className="hash-span">&nbsp;</span>
        <Component />
      </motion.section>
    );
  };
};

export default SectionWrapper;
