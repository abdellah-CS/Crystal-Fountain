import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { FaExpand } from "react-icons/fa";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import useInView from "../../hooks/useInView";
import { Header } from "../atoms/Header";
import styled from "styled-components";
import { fresque1, fresque2, fresque3, fresque4, fresque5 } from "../../assets";

const FullscreenImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const FullscreenImageContent = styled.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 15px;
`;

const Fresque = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.1 }); // Removed type argument
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const openFullscreen = (image: string) => {
    setFullscreenImage(image);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial screen size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  const fresqueImages = [fresque1, fresque2, fresque3, fresque4, fresque5];

  return (
    <>
      <div className="sm:px-16 pl-6 pr-4 pt-40 md:pt-10">
        <Header useMotion={true} {...config.sections.fresque} />
        {fullscreenImage && (
          <FullscreenImage onClick={closeFullscreen}>
            <FullscreenImageContent src={fullscreenImage} alt="Fullscreen" />
          </FullscreenImage>
        )}
        <motion.p
          ref={headerRef as React.Ref<HTMLParagraphElement>} // Ensure correct ref type
          initial="hidden"
          animate={headerInView ? "show" : "hidden"}
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.fresque.content}
          <p style={{ display: "none" }}>{isMediumScreen}</p>
        </motion.p>
        <div
          className="flex flex-wrap"
          style={{
            borderRadius: "15px",
            overflow: "hidden",
            gap: "8px",
            marginTop: "25px",
          }}
        >
          {fresqueImages.map((image, index) => (
            <div
              className="w-full sm:w-[32%]"
              style={{ position: "relative" }}
              key={index}
            >
              <img
                style={{ width: "100%", height: "19rem", cursor: "pointer" }}
                onClick={() => openFullscreen(image)}
                src={image}
                alt={`Project image ${index + 1}`}
              />
              <FaExpand
                onClick={() => openFullscreen(image)}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  color: "white",
                  cursor: "pointer",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  borderRadius: "50%",
                  padding: "5px",
                  zIndex: 10,
                  display: "none",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Fresque, "fresque");
