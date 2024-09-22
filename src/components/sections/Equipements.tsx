import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { fadeIn, slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { materiels } from "../../constants";
import useInView from "../../hooks/useInView";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const Equipements = () => {
  const coverNames = [
    "Waterboy",
    "Calis",
    "Cascade 50T à 130T",
    "Lame d'eau",
    "Willow",
    "Mur d'eau",
    "SPHERE/ DEMI-SPHERE",
    "Comet 3-3T à 15-20T",
    "Projecteur LED de 3W à 18W",
  ];

  useEffect(() => {
    const handleHashScroll = () => {
      if (window.location.hash) {
        const targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    handleHashScroll();
    window.addEventListener("hashchange", handleHashScroll);

    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, []);

  const [selectedChip, setSelectedChip] = useState("Tout");
  const [hoveredChip, setHoveredChip] = useState<string | null>(null);

  const equipmentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleChangeChip = (chipName: string) => {
    setSelectedChip(chipName);
    setHoveredChip(null);
  };

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

  const getChipStyle = (chipName: string) => ({
    color: "white",
    height: "38px",
    paddingLeft: "17px",
    paddingRight: "17px",
    marginBottom: "15px",
    fontSize: "1.1rem",
    fontWeight: "500",
    borderColor: "#00AAE3",
    borderWidth: "3px",
    marginRight: "8px",
    marginLeft: "0px",
    ...(selectedChip === chipName || hoveredChip === chipName
      ? {
          backgroundImage: "linear-gradient(rgb(0, 170, 227), rgb(0, 90, 227))",
          borderWidth: "0px",
          borderRadius: "15px",
        }
      : {}),
  });

  return (
    <>
      <div className="sm:px-2 pt-40 md:pt-10 pl-6 md:pl-0">
        <Header useMotion={true} {...config.sections.equipements} />
        <div className="flex w-full">
          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeIn("", "", 0.1, 1)}
            className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
          >
            {config.sections.equipements.content}
          </motion.p>
        </div>
      </div>
      <div className="mt-20">
        <div
          className="pl-6 md:pl-0"
          style={{
            width: "fit-content",
            margin: "35px auto",
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            mb={2}
            style={{
              display: "contents",
            }}
          >
            <Chip
              label="Ajutages"
              style={getChipStyle("Les Ajutages")}
              onClick={() => handleChangeChip("Les Ajutages")}
              onMouseEnter={() => setHoveredChip("Les Ajutages")}
              onMouseLeave={() => setHoveredChip(null)}
              variant={selectedChip === "Les Ajutages" ? "filled" : "outlined"}
            />
            <Chip
              label="Projecteurs"
              style={getChipStyle("Projecteurs")}
              onClick={() => handleChangeChip("Projecteurs")}
              onMouseEnter={() => setHoveredChip("Projecteurs")}
              onMouseLeave={() => setHoveredChip(null)}
              variant={selectedChip === "Projecteurs" ? "filled" : "outlined"}
            />
            <Chip
              label="Tout"
              style={getChipStyle("Tout")}
              onClick={() => handleChangeChip("Tout")}
              onMouseEnter={() => setHoveredChip("Tout")}
              onMouseLeave={() => setHoveredChip(null)}
              variant={selectedChip === "Tout" ? "filled" : "outlined"}
            />
          </Stack>
        </div>
        {materiels.map((equipement, index) => {
          const [inView] = useInView({ threshold: 0.1 });

          if (
            (selectedChip === "Les Ajutages" &&
              equipement.category !== "Les Ajutages") ||
            (selectedChip === "Projecteurs" &&
              equipement.category !== "Projecteurs")
          ) {
            return null;
          }

          return (
            <div
              key={index}
              className="mb-10"
              ref={(el) =>
                (equipmentRefs.current[`material-${equipement.name}`] = el)
              } // Store the ref properly
              id={`material-${equipement.name}`}
            >
              <div className="flex justify-between mt-0">
                {index % 2 === 0 ? (
                  <motion.div
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    variants={slideIn("left", "tween", 0.2, 1)}
                    ref={(el) =>
                      (equipmentRefs.current[`material-${equipement.name}`] =
                        el)
                    }
                    style={{
                      width: "100%",
                      borderRadius: "15px",
                      border: "5px solid transparent",
                      backgroundOrigin: "border-box",
                      backgroundClip: "padding-box, border-box",
                      backgroundImage:
                        "linear-gradient(rgba(5, 8, 100, 0.3), rgba(5, 8, 30, 0.9)), linear-gradient(rgb(0, 170, 227), rgb(0, 90, 227))",
                    }}
                  >
                    <div
                      className="flex-1 block md:flex p-3.5 md:p-6 justify-start"
                      style={{
                        width: "100%",
                      }}
                    >
                      <div className="my-auto w-full md:w-[40%]">
                        <h1
                          className="text-4xl font-bold mb-8 underline text-white"
                          style={{
                            textDecorationColor: "rgb(0, 170, 227)",
                            textAlign: "left",
                          }}
                        >
                          {equipement.name}
                        </h1>
                        <h3
                          style={{
                            fontSize: "23px",
                            fontWeight: "600",
                            marginBottom: "15px",
                          }}
                        >
                          Caractéristiques du produit:{" "}
                        </h3>
                        <ul className="flex-1 my-auto">
                          {equipement.caracterestiques.map(
                            (caracterestique, caracterestiqueIndex) => (
                              <li
                                key={caracterestiqueIndex}
                                style={{
                                  transition: "transform 0.5s ease",
                                  fontSize: "18px",
                                  lineHeight: "2rem",
                                  color: "rgb(170 166 195 / 0.9)",
                                }}
                                onMouseEnter={(e) =>
                                  (e.currentTarget.style.transform =
                                    "translateX(30px)")
                                }
                                onMouseLeave={(e) =>
                                  (e.currentTarget.style.transform =
                                    "translateX(0)")
                                }
                              >
                                - {caracterestique}.
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                      <div className="flex-1 block md:flex justify-end">
                        {equipement.materialImages.map((image, imageIndex) => (
                          <img
                            key={imageIndex}
                            src={image}
                            className="h-64 object-contain materialExamples"
                            style={{ margin: "auto 0", marginLeft: "10px" }}
                          />
                        ))}
                      </div>
                    </div>
                    <ImageList
                      sx={{ width: 500, height: 450 }}
                      cols={equipement.materialExamples.length}
                      rowHeight={355}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderBottomLeftRadius: "15px",
                        display: isMediumScreen ? "grid" : "block",
                      }}
                    >
                      {equipement.materialExamples.map((image, index) => (
                        <ImageListItem
                          key={index}
                          style={{
                            overflow: "hidden",
                            display: "inline-block",
                          }}
                          className="block md:inline-block "
                        >
                          <img
                            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            src={`${image}?w=164&h=164&fit=crop&auto=format`}
                            loading="lazy"
                            style={{
                              height: "100%",
                            }}
                            className={
                              coverNames.includes(equipement.name)
                                ? "cover materialExamples"
                                : "scale-down materialExamples"
                            }
                          />
                        </ImageListItem>
                      ))}
                    </ImageList>
                  </motion.div>
                ) : (
                  <motion.div
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    variants={slideIn("right", "tween", 0.2, 1)}
                    ref={(el) =>
                      (equipmentRefs.current[`material-${equipement.name}`] =
                        el)
                    } // Correctly set ref
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      border: "5px solid transparent",
                      backgroundOrigin: "border-box",
                      backgroundClip: "padding-box, border-box",
                      backgroundImage:
                        "linear-gradient(rgba(5, 8, 100, 0.3), rgba(5, 8, 30, 0.9)), linear-gradient(rgb(0, 170, 227), rgb(0, 90, 227))",
                    }}
                  >
                    <div
                      className="flex-1 block md:flex justify-start"
                      style={{
                        width: "100%",
                        padding: "25px",
                      }}
                    >
                      <div className="my-auto w-full md:w-[40%]">
                        <h1
                          className="text-4xl font-bold mb-8 underline text-white"
                          style={{
                            textDecorationColor: "rgb(0, 170, 227)",
                            textAlign: "left",
                          }}
                        >
                          {equipement.name}
                        </h1>
                        <h3
                          style={{
                            fontSize: "23px",
                            fontWeight: "600",
                            marginBottom: "15px",
                          }}
                        >
                          Caractéristiques du produit:{" "}
                        </h3>
                        <ul className="flex-1 my-auto">
                          {equipement.caracterestiques.map(
                            (caracterestique, caracterestiqueIndex) => (
                              <li
                                key={caracterestiqueIndex}
                                style={{
                                  transition: "transform 0.5s ease",
                                  fontSize: "18px",
                                  lineHeight: "2rem",
                                  color: "rgb(170 166 195 / 0.9)",
                                }}
                                onMouseEnter={(e) =>
                                  (e.currentTarget.style.transform =
                                    "translateX(30px)")
                                }
                                onMouseLeave={(e) =>
                                  (e.currentTarget.style.transform =
                                    "translateX(0)")
                                }
                              >
                                - {caracterestique}.
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                      <div className="flex-1 block md:flex justify-end">
                        {equipement.materialImages.map((image, imageIndex) => (
                          <img
                            key={imageIndex}
                            src={image}
                            className="h-64 object-contain materialExamples"
                            style={{
                              marginLeft: isMediumScreen ? "10px" : "auto",
                              marginRight: isMediumScreen ? "0px" : "auto",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    <ImageList
                      sx={{ width: 500, height: 450 }}
                      cols={equipement.materialExamples.length}
                      rowHeight={355}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderBottomRightRadius: "15px",
                        display: isMediumScreen ? "grid" : "block",
                      }}
                    >
                      {equipement.materialExamples.map((image, index) => (
                        <ImageListItem
                          key={index}
                          style={{
                            overflow: "hidden",
                            display: "inline-block",
                          }}
                        >
                          <img
                            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            src={`${image}?w=164&h=164&fit=crop&auto=format`}
                            loading="lazy"
                            style={{
                              height: "100%",
                            }}
                            className={
                              coverNames.includes(equipement.name)
                                ? "cover materialExamples"
                                : "scale-down materialExamples"
                            }
                          />
                        </ImageListItem>
                      ))}
                    </ImageList>
                  </motion.div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Equipements, "equipements");
