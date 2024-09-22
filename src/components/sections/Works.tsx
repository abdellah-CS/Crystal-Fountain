import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Empty from "./Empty";
import { Grid, Link, IconButton } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import type { TProject } from "@/types";
import TuneIcon from "@mui/icons-material/Tune";
import CloseIcon from "@mui/icons-material/Close";

const categories = [
  { name: "tout", description: "" },
  {
    name: "Fontaine Classique",
    description:
      "<span style='text-decoration: underline; font-size: 19px;'>Les Fontaines Classiques</span> se caractérisent par leur design traditionnel inspiré par l'architecture ancienne, souvent en pierre ou marbre, avec statues et bassins sculptés.",
  },
  {
    name: "Fontaine Cybernetique",
    description:
      "<span style='text-decoration: underline; font-size: 19px;'>Les Fontaines Cybernétiques</span> intègrent des technologies modernes pour créer des jeux d'eau dynamiques et interactifs, souvent synchronisés avec des lumières et de la musique pour des spectacles impressionnants.",
  },
  {
    name: "Fontaine Séche",
    description:
      "<span style='text-decoration: underline; font-size: 19px;'>Les Fontaines Sèches</span> sont conçues sans bassins apparents, avec l'eau jaillissant directement du sol. Elles sont idéales pour les espaces publics où les passants peuvent interagir avec les jets d'eau.",
  },
  {
    name: "Fontaine Musicale",
    description:
      "<span style='text-decoration: underline; font-size: 19px;'>Les Fontaines Musicales</span> combinent les jets d'eau avec des compositions musicales pour offrir des spectacles aquatiques harmonieux, où l'eau danse au rythme de la musique.",
  },
  {
    name: "Cascade D'eau",
    description:
      "<span style='text-decoration: underline; font-size: 19px;'>Les Cascades D'eau</span> offrent un flux d'eau continu qui dévale les rochers ou des structures artificielles, créant un effet apaisant et naturel. Elles ajoutent une touche de nature et sérénité à tout espace.",
  },
  {
    name: "Lame D'eau",
    description:
      "<span style='text-decoration: underline; font-size: 19px;'>Les Lames D'eau</span> sont des cascades fines et régulières d'eau qui tombent d'une hauteur, créant un mur liquide continu. Elles sont souvent utilisées pour des effets visuels élégants et apaisants.",
  },
];

const sidebarVariants = {
  hidden: { y: "100%" },
  visible: { y: "0%" },
  exit: { y: "100%" },
};

// interface WorksProps {
//   setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
// }

const Works: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get("category") || "tout";
  const [selectedChip, setSelectedChip] = useState(initialCategory);
  const [hoveredChip, setHoveredChip] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpenState] = useState(false);
  const navigate = useNavigate();
  console.log("projects: ", projects);

  const handleChangeChip = (chipName: string) => {
    setSelectedChip(chipName);
    setHoveredChip(null);
    setSidebarOpenState(false);
    // setSidebarOpen(false);
  };

  const handleCardClick = (project: TProject) => {
    navigate(`/realisations/${project.name}`, { state: { project } });
  };

  const getChipStyle = (chipName: string) => ({
    color: "white",
    height: "38px",
    paddingLeft: "17px",
    paddingRight: "17px",
    fontSize: "1.1rem",
    fontWeight: "500",
    borderColor: "#00AAE3",
    borderWidth: "3px",
    marginBottom: "15px",
    marginRight: "8px",
    marginLeft: "0px",
    ...(sidebarOpen && selectedChip !== chipName ? { color: "#00AAE3" } : {}),
    ...(selectedChip === chipName || hoveredChip === chipName
      ? {
          backgroundImage: "linear-gradient(rgb(0, 170, 227), rgb(0, 90, 227))",
          paddingLeft: "20px",
          paddingRight: "20px",
          borderRadius: "15px",
          borderWidth: "0px",
        }
      : {}),
  });

  const filteredProjects =
    selectedChip === "tout"
      ? projects
      : projects.filter((project) => project.category === selectedChip);

  const selectedCategory = categories.find(
    (category) => category.name === selectedChip
  );

  return (
    <div className="sm:px-16 pt-40 md:pt-10">
      <div className="pl-6 md:pl-0">
        <Header useMotion={true} {...config.sections.works} />
      </div>
      <div className="flex w-full pl-6 md:pl-0">
        <motion.p className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]">
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-12 w-full">
        <div className="pl-6 md:pl-0 flex md:contents justify-end">
          <IconButton
            onClick={() => {
              setSidebarOpenState(true);
              // setSidebarOpen(true);
            }}
            sx={{
              display: { xs: "block", md: "none" },
              background: "white",
              padding: "3px 11px 6px 11px",
            }}
          >
            <TuneIcon style={{ fill: "#00AAE3" }} />
          </IconButton>

          <Stack
            direction="row"
            spacing={1}
            mb={2}
            sx={{
              display: { xs: "none", md: "contents" },
              margin: "35px auto",
              padding: "10px",
            }}
          >
            {categories.map((category) => {
              return (
                <Chip
                  key={category.name}
                  label={category.name}
                  style={getChipStyle(category.name)}
                  onClick={() => handleChangeChip(category.name)}
                  onMouseEnter={() => setHoveredChip(category.name)}
                  onMouseLeave={() => setHoveredChip(null)}
                  variant={
                    selectedChip === category.name ? "filled" : "outlined"
                  }
                />
              );
            })}
          </Stack>
        </div>

        <AnimatePresence>
          {sidebarOpen && (
            <motion.div
              className="fixed top-0 left-0 w-full bg-white p-4 z-[1000000]"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={sidebarVariants}
              style={{
                height: "calc(100vh - 9rem)",
                top: "9rem",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
              }}
            >
              <div
                style={{
                  overflowY: "auto",
                  height: "100%",
                  position: "relative",
                }}
              >
                <IconButton
                  onClick={() => {
                    setSidebarOpenState(false);
                    // setSidebarOpen(false);
                  }}
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: "#00AAE3",
                  }}
                >
                  <CloseIcon style={{ fill: "white" }} />
                </IconButton>
                <Stack spacing={1} mb={2} style={{ paddingTop: "4rem" }}>
                  {categories.map((category) => (
                    <Chip
                      key={category.name}
                      label={category.name}
                      style={getChipStyle(category.name)}
                      onClick={() => handleChangeChip(category.name)}
                      onMouseEnter={() => setHoveredChip(category.name)}
                      onMouseLeave={() => setHoveredChip(null)}
                      variant={
                        selectedChip === category.name ? "filled" : "outlined"
                      }
                    />
                  ))}
                </Stack>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex w-full mt-4 pl-6 md:pl-0">
          <motion.p
            className="text-secondary mt-3 font-semibold text-[17px] leading-[30px]"
            dangerouslySetInnerHTML={{
              __html: selectedCategory?.description || "",
            }}
          ></motion.p>
        </div>

        <Grid container spacing={4} sx={{ marginTop: "0.1rem" }}>
          {filteredProjects.length === 0 ? (
            <Empty />
          ) : (
            filteredProjects.map((project, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                key={index}
                className="z-[100000]"
              >
                <Link
                  onClick={() => handleCardClick(project as TProject)}
                  style={{ textDecoration: "none" }}
                >
                  <div style={{ cursor: "pointer" }}>
                    <CardContainer className="inter-var">
                      <CardBody className="bg-gradient-to-b from-[#00AAE3] to-[#005AE3] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                        <CardItem
                          translateZ="50"
                          className="text-xl font-bold text-white dark:text-white"
                        >
                          {project.name}
                        </CardItem>
                        <CardItem
                          as="p"
                          translateZ="60"
                          className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                          {project.description}
                        </CardItem>
                        <div className="block md:flex items-center mt-5">
                          <CardItem
                            as="p"
                            translateZ="60"
                            className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300"
                            style={{
                              background: "white",
                              padding: "4px 32px",
                              justifyContent: "space-between",
                              display: "flex",
                              borderRadius: "81px",
                              color: "#00AAE3",
                              fontWeight: "600",
                              alignItems: "center",
                              marginRight: "10px",
                            }}
                          >
                            <LocationOnIcon style={{ marginRight: "5px" }} />
                            {project.lieux}
                          </CardItem>
                          <CardItem
                            as="p"
                            translateZ="60"
                            className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300"
                            style={{
                              background: "white",
                              padding: "6px 32px",
                              justifyContent: "space-between",
                              display: "flex",
                              borderRadius: "81px",
                              color: "#00AAE3",
                              fontWeight: "600",
                            }}
                          >
                            {project.category}
                          </CardItem>
                        </div>
                        <CardItem translateZ="100" className="w-full mt-4">
                          <img
                            src={project.images[0]}
                            className="w-full bg-white object-cover rounded-xl group-hover/card:shadow-xl"
                            alt={project.name}
                            style={{ height: "12.5rem" }}
                          />
                        </CardItem>

                        <div className="block md:flex justify-between items-center mt-10">
                          <CardItem
                            translateZ="20"
                            translateX="-40"
                            className="text-white text-sm hidden max-w-sm mt-2 dark:text-neutral-300"
                          >
                            wiw
                          </CardItem>
                        </div>
                      </CardBody>
                    </CardContainer>
                  </div>
                </Link>
              </Grid>
            ))
          )}
        </Grid>
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "projects");
