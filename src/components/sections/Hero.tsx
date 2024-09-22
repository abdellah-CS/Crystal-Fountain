import React from "react";
import Link from "@mui/material/Link";
import { styles } from "../../constants/styles";
import {
  aboutus,
  realisations,
  hero1,
  hero2,
  hero3,
  hero4,
  hero5,
} from "../../assets/index";
import { config } from "../../constants/config";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";

interface HighlightProps {
  children: React.ReactNode;
  className?: string;
}

const Highlight: React.FC<HighlightProps> = ({ children, className }) => {
  return (
    <motion.span
      initial={{ backgroundSize: "0% 100%" }}
      animate={{ backgroundSize: "100% 100%" }}
      transition={{ duration: 2, ease: "linear", delay: 0.5 }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 dark:from-indigo-500 dark:to-purple-500 text-white`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slides = [hero1, hero2, hero3, hero4, hero5];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 bg-cover md:bg-contain bg-repeat-space md:bg-repeat-round w-screen h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide})`,
          }}
        />
      ))}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0" />
      <div className="relative z-10 h-full ml-4">
        <div
          className={`mx-auto max-w-7xl h-full flex flex-col justify-center px-8 sm:px-16 pt-32`}
        >
          <h1
            className={`${styles.heroHeadText} text-white mb-6`}
            style={{
              textAlign: "left",
              fontWeight: "700",
              lineHeight: "55px",
            }}
          >
            Transformez Votre Espace avec{" "}
            <Highlight className="text-black dark:text-white">
              <span style={{ color: "rgb(5 8 88)" }}>{config.hero.name}</span>
            </Highlight>
          </h1>
          <p
            className={`${styles.heroSubText} text-white mt-2`}
            style={{
              lineHeight: "35px",
              color: "white",
              fontWeight: "600",
            }}
          >
            Conception et Réalisation de{" "}
            <Highlight className="text-black dark:text-white">
              <span style={{ color: "rgb(5 8 88)" }}>
                Fontaines et Jets d'Eau
              </span>
            </Highlight>{" "}
            Innovantes pour Tous Vos Besoins <br className="hidden sm:block" />
          </p>
          <ul className="list-none flex flex-col sm:flex-row gap-6 mt-12">
            <li className="text-white z-20 cursor-pointer text-[20px] sm:text-[24px] font-semibold hover:text-white">
              <LinkPreview
                isStatic={true}
                imageSrc={aboutus}
                url="/à-propos"
                className="block"
              >
                <Link
                  href="/à-propos"
                  sx={{ color: "white" }}
                  className="relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-white before:transition-width before:duration-300 before:ease-in-out before:content-[''] flex items-center hover:before:w-full text-white"
                >
                  <ArrowForwardIcon className="mr-2" />
                  <span>Pourquoi Nous Choisir ?</span>
                </Link>
              </LinkPreview>
            </li>
            <li className="text-white z-20 cursor-pointer text-[20px] sm:text-[24px] font-semibold hover:text-white">
              <LinkPreview
                isStatic={true}
                imageSrc={realisations}
                url="/realisations"
                className="block"
              >
                <Link
                  href="/realisations"
                  sx={{ color: "white" }}
                  className="relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-white before:transition-width before:duration-300 before:ease-in-out before:content-[''] flex items-center hover:before:w-full text-white"
                >
                  <ArrowForwardIcon className="mr-2" />
                  <span>Découvrez nos realisations</span>
                </Link>
              </LinkPreview>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
