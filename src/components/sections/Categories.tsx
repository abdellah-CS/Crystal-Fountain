import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const Categories = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName: string) => {
    if (categoryName === "Nos Steles") {
      navigate("/catalogue-stele");
    } else if (categoryName === "Nos Fresques") {
      navigate("/nos-fresques");
    } else {
      navigate(`/realisations?category=${categoryName}`);
    }
  };

  return (
    <div className="flex flex-wrap gap-10 max-sm:justify-center -mt-12">
      <h3
        style={{
          fontSize: "28px",
          fontWeight: "700",
          textDecoration: "underline",
          textDecorationColor: "#00A8BD",
        }}
      >
        Explorez Notre Gamme de Fontaines
      </h3>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full z-1000"
      >
        <CarouselContent>
          {categories.map((category, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/3 lg:basis-1/3"
              onClick={() =>
                category.name && handleCategoryClick(category.name)
              }
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
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span
                      className="text-3xl font-semibold"
                      style={{ textAlign: "center", color: "white" }}
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

export default SectionWrapper(Categories, "categories");
