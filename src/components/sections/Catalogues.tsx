import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { catalogue, cStele, cFiche } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";

const Catalogues = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const catalogues = [
    {
      name: "Notre Catalogue Stele",
      image: cStele,
    },
    {
      name: "Notre Catalogue Générale",
      image: catalogue,
    },
    {
      name: "Notre Fiche Technique",
      image: cFiche,
    },
  ];

  const handleCategoryClick = (categoryName: string | number) => {
    if (categoryName === "Notre Catalogue Stele") {
      navigate("/catalogue-stele");
    } else if (categoryName === "Notre Fiche Technique") {
      navigate("/fiche-technique");
    } else {
      navigate(`/catalogue`);
    }
  };

  return (
    <div className="flex flex-wrap gap-0 max-sm:justify-center mt-2 pt-48 md:pt-0 pl-5 md:pl-28 pr-5 md:pr-28">
      <h3
        style={{
          fontSize: "28px",
          fontWeight: "700",
          textDecoration: "underline",
          textDecorationColor: "#00A8BD",
          paddingLeft: "16px",
        }}
      >
        Explorez Nos Catalogues
      </h3>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full z-1000 "
      >
        <CarouselContent>
          {catalogues.map((category, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/3 lg:basis-1/3"
              onClick={() => handleCategoryClick(category.name)}
              style={{ cursor: "pointer" }}
            >
              <div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Card
                  style={{
                    backgroundImage:
                      hoveredIndex === index
                        ? `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${category.image})`
                        : `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${category.image})`,
                    backgroundPosition: "center",
                    height: "100%",
                    width: "100%",
                    borderColor: "black",
                    backgroundSize: "cover !important",
                    transition: "background 0.3s ease-in-out",
                  }}
                  className="bg-cover"
                >
                  <CardContent className="flex aspect-square items-end justify-center p-6">
                    <span
                      className="text-3xl font-semibold"
                      style={{
                        textAlign: "center",
                        color: "white",
                        background: "rgba(5, 8, 88, 0.5)",
                        borderRadius: "10px",
                      }}
                    >
                      {category.name}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default SectionWrapper(Catalogues, "catalogues");
