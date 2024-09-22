import { SectionWrapper } from "../../hoc";
import { Zoom } from "@mui/material";

const CatalogueStele = () => {
  return (
    <div className="pt-64 pb-64 md:pt-10 md:pb-10">
      <Zoom in={true} timeout={1250}>
        <iframe
          src="https://www.flipbookpdf.net/web/site/efa5ffce1737426d675608e723be8a024af92a91202409.pdf.html#page/1"
          width="100%"
          height="450"
          seamless={true}
          scrolling="no"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-read; clipboard-write"
          className="catalogue"
          style={{ top: "-2rem", marginTop: "-3.1rem" }}
        ></iframe>
      </Zoom>
    </div>
  );
};

export default SectionWrapper(CatalogueStele, "cataloguestele");
