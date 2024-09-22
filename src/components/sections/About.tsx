import React, { useState, useEffect, RefObject } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { ProgressBar } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import useInView from "../../hooks/useInView";
import { Header } from "../atoms/Header";
import Box from "@mui/material/Box";
import { Categories } from "../";

interface IServiceCard {
  index: number;
  title: string;
  image: string;
  inView: boolean;
}

const ServiceCard: React.FC<IServiceCard> = ({
  index,
  title,
  image,
  inView,
}) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={30}
    tiltMaxAngleY={30}
    glareColor="#aaa6c3"
  >
    <div className="w-full">
      <motion.div
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className=" shadow-card w-full rounded-[20px] p-[1px]"
      >
        <div
          className="flex min-h-[220px] flex-col justify-evenly rounded-[20px] px-8"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <h5
            className="text-center text-[17px] text-white"
            style={{ fontWeight: "500" }}
          >
            {title}
          </h5>
        </div>
      </motion.div>
    </div>
  </Tilt>
);

const About: React.FC = () => {
  // const boxStyles: { [key: string]: string | number } = {
  //   width: "100%",
  //   marginTop: "10px",
  // };
  const [headerRef, headerInView] = useInView({ threshold: 0.1 });
  const [serviceRef, serviceInView] = useInView({ threshold: 0.1 });
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    // Check initial screen size
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getGridColumn = (index: number, total: number): string => {
    if (!isMediumScreen) return "span 12";
    if (index === total - 1) return "span 4";
    return index % 4 === 0 || index % 4 === 3 ? "span 8" : "span 4";
  };

  return (
    <>
      <div className="sm:px-16 pl-6 pr-4 pt-40 md:pt-10">
        <Header useMotion={true} {...config.sections.about} />

        <motion.p
          ref={headerRef as RefObject<HTMLParagraphElement>}
          initial="hidden"
          animate={headerInView ? "show" : "hidden"}
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.about.content}
        </motion.p>
        <div style={{ width: "100%", marginTop: "10px" }}>
          <h3
            style={{
              fontSize: "28px",
              fontWeight: "700",
              marginBottom: "52px",
              textDecoration: "underline",
              textDecorationColor: "#00A8BD",
            }}
          >
            Nos Services & Activités
          </h3>
          <Box
            component="section"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: 2,
            }}
            ref={serviceRef as RefObject<HTMLDivElement>}
          >
            {services.map((service, index) => (
              <Box
                component="section"
                key={service.title ?? `service-${index}`}
                gridColumn={getGridColumn(index, services.length)}
              >
                <ServiceCard
                  index={index}
                  title={service.title ?? ""}
                  image={service.image ?? ""}
                  inView={!!serviceInView}
                />
              </Box>
            ))}
          </Box>
        </div>
      </div>
      <div style={{ marginTop: isMediumScreen ? undefined : "5rem" }}>
        <Categories />
      </div>

      <ProgressBar />
    </>
  );
};

export default SectionWrapper(About, "about");
