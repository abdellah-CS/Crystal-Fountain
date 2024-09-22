import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Hero,
  Navbar,
  Works,
  Catalogue,
  Catalogues,
  CatalogueStele,
  Fresque,
  Equipements,
  FicheTechnique,
} from "./components";
import { config } from "./constants/config";
import { SocialBar } from "./hoc";
import Project from "./components/sections/Project";
import { projects } from "./constants/index";
import { ScrollToTop } from "./hoc";

const App = () => {
  useEffect(() => {
    document.title = config.html.title;
  }, []);

  const [sidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-primary relative h-full overflow-hidden">
        <Navbar sidebarOpen={sidebarOpen} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
              </>
            }
          />
          <Route
            path="/à-propos"
            element={
              <>
                <About />
              </>
            }
          />
          <Route path="/realisations" element={<Works />} />
          <Route path="/equipements" element={<Equipements />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/fiche-technique" element={<FicheTechnique />} />
          <Route path="/catalogues" element={<Catalogues />} />
          <Route path="/catalogue-stele" element={<CatalogueStele />} />
          <Route path="/nos-fresques" element={<Fresque />} />
          <Route path="/contact" element={<Contact />} />
          {projects.map((project, index) => (
            <Route
              key={index}
              path={`/realisations/${project.name}`}
              element={<Project />}
            />
          ))}
        </Routes>
        <SocialBar />
      </div>
    </BrowserRouter>
  );
};

export default App;
