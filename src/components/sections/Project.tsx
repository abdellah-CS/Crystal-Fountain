import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SectionWrapper } from "../../hoc";
import { styles } from "../../constants/styles";
import styled from "styled-components";
import { FaExpand } from "react-icons/fa";

// Styled component for fullscreen image
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

// Styled component for image inside fullscreen view
const FullscreenImageContent = styled.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 15px;
`;

const Project = () => {
  const location = useLocation();
  const project = location.state?.project;
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  // Handle screen resize
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openFullscreen = (image: string) => {
    setFullscreenImage(image);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div
      className={`${styles.padding} h-full overflow-hidden relative z-0 mx-auto max-w-7xl relative`}
      style={{
        paddingTop: "1rem",
        position: "relative",
        bottom: isMediumScreen ? "15rem" : "-7rem",
      }}
    >
      {/* Fullscreen Image */}
      {fullscreenImage && (
        <FullscreenImage onClick={closeFullscreen}>
          <FullscreenImageContent src={fullscreenImage} alt="Fullscreen" />
        </FullscreenImage>
      )}

      {/* Main Project Image */}
      <div
        style={{ display: "flex", borderRadius: "15px", overflow: "hidden" }}
      >
        <img
          style={{
            width: isMediumScreen ? "73%" : "100%",
            height: isMediumScreen ? "30rem" : "auto",
            borderRadius: "15px",
            margin: isMediumScreen ? "auto" : "0",
          }}
          src={project.images[0]}
          alt={`realisation image`}
        />
      </div>

      {/* Project Details and Map */}
      <div className="block md:flex" style={{ marginTop: "30px" }}>
        <div className="w-full md:w-[50%]" style={{ paddingRight: "20px" }}>
          <h1
            className="text-4xl font-bold underline text-white"
            style={{
              textDecorationColor: "rgb(0, 170, 227)",
              textAlign: "left",
              marginBottom: "10px",
            }}
          >
            {project.name}
          </h1>
          <p style={{ fontSize: "18px", fontWeight: "500" }}>
            {project.description}
          </p>
          <p
            style={{
              fontSize: "18px",
              background: "#00AAE3",
              padding: "10px 20px",
              borderRadius: "36px",
              fontWeight: "500",
              marginTop: "2rem",
            }}
          >
            <span style={{ fontWeight: "600", fontSize: "20px" }}>
              Category:{" "}
            </span>
            {project.category}
          </p>
        </div>

        {/* Google Maps Iframe */}
        <div className="w-full md:w-[50%] md:pl-5">
          <iframe
            src={project.googleMapsUrl}
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
            style={{ borderRadius: "20px", border: "none" }}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {project.video && (
        <div style={{ marginTop: "30px" }}>
          <iframe
            src={`${project.video}?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0`}
            width="100%"
            height="400"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            style={{ borderRadius: "15px", border: "none" }}
          ></iframe>
        </div>
      )}

      <div
        className="flex flex-wrap"
        style={{
          borderRadius: "15px",
          overflow: "hidden",
          gap: "8px",
          marginTop: "25px",
        }}
      >
        {project.images.map((image: string, index: number) => (
          <div
            className="w-full sm:w-[32%] flex"
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
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Project, "equipements");
