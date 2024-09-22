import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { styles } from "../../constants/styles";
import { close, logo } from "../../assets/index";
import SegmentIcon from "@mui/icons-material/Segment";
import { BallCanvas } from "../canvas";

const Navbar = ({ sidebarOpen }: { sidebarOpen: boolean }) => {
  const [active, setActive] = useState<string | null>(null);
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive(null);
      }

      if (scrollTop > lastScrollTop) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    };

    window.addEventListener("scroll", handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        // @ts-ignore
        const sectionHeight = current.offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", navbarHighlighter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 5) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav
      className={`${
        styles.paddingX
      } sm:px-32  fixed top-0 z-[10000000] flex w-full items-center pb-4 transition-transform duration-300 ${
        scrolled && isMediumScreen ? "bg-transparent" : "bg-transparent"
      } ${
        navbar
          ? "navbar active fixed-top navbar-expand-lg"
          : "navbar fixed-top navbar-expand-lg"
      } ${showNavbar ? "translate-y-0" : "-translate-y-full"} ${
        isMediumScreen
          ? "navbar-background-transparent"
          : "navbar-background-default"
      } ${sidebarOpen ? "hidden" : "block"}`}
    >
      <Link
        to="/"
        className="flex items-center gap-2"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <div
          style={{
            padding: isMediumScreen ? "0px" : undefined,
            borderRadius: "50%",
            height: isMediumScreen ? "168px" : undefined,
            width: isMediumScreen ? "200px" : "122px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BallCanvas iconTexture={logo} />
        </div>
      </Link>
      <div
        className="mx-auto flex max-w-7xl bg-transparent md:bg-gray-100 items-center justify-center"
        style={{
          padding: "14px 12px 14px 36px",
          borderRadius: "100px",
          width: "79%",
        }}
      >
        <ul className="hidden list-none flex-row gap-10 lg:flex">
          <li
            className={`cursor-pointer text-[18px] font-semibold relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-current before:transition-all before:duration-300 before:ease-in-out before:content-[''] block hover:before:w-full ${
              location.pathname === "/à-propos" ? "text-black" : "text-cyan-600"
            }`}
          >
            <Link to="/à-propos" onClick={() => window.scrollTo(0, 0)}>
              à Propos
            </Link>
            <p style={{ display: "none" }}>{active}</p>
          </li>
          <li
            className={`cursor-pointer text-[18px] font-semibold relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-current before:transition-all before:duration-300 before:ease-in-out before:content-[''] block hover:before:w-full ${
              location.pathname === "/catalogue"
                ? "text-black"
                : "text-cyan-600"
            }`}
          >
            <Link to="/catalogues" onClick={() => window.scrollTo(0, 0)}>
              Nos Catalogues
            </Link>
          </li>
          <li
            className={`cursor-pointer text-[18px] font-semibold relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-current before:transition-all before:duration-300 before:ease-in-out before:content-[''] block hover:before:w-full ${
              location.pathname === "/equipements"
                ? "text-black"
                : "text-cyan-600"
            }`}
          >
            <Link to="/equipements" onClick={() => window.scrollTo(0, 0)}>
              Nos Equipements
            </Link>
          </li>
          <li
            className={`cursor-pointer text-[18px] font-semibold relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-current before:transition-all before:duration-300 before:ease-in-out before:content-[''] block hover:before:w-full ${
              location.pathname === "/realisations"
                ? "text-black"
                : "text-cyan-600"
            }`}
          >
            <Link to="/realisations" onClick={() => window.scrollTo(0, 0)}>
              Nos Réalisations
            </Link>
          </li>
          <li
            className={`cursor-pointer hover:text-black text-[18px] font-semibold relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-current before:transition-all before:duration-300 before:ease-in-out before:content-[''] block hover:before:w-full ${
              location.pathname === "/contact" ? "text-black" : "text-cyan-600"
            }`}
          >
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex flex-1 items-center justify-end lg:hidden">
          <SegmentIcon
            className="object-contain text-white md:text-primary"
            onClick={() => setToggle(!toggle)}
            style={{
              fontSize: "xxx-large",
              color: isMediumScreen ? "rgb(5, 8, 88)" : "white",
            }}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } transition-transform absolute right-0 top-0 p-6 z-150  h-screen lg:hidden ${
              toggle ? "max-h-screen" : "max-h-0 overflow-hidden"
            } duration-500 ease-in-out transform ${
              toggle ? "translate-y-0" : "-translate-y-full"
            }`}
            style={{
              background: "#00A8BD",
              width: !isMediumScreen ? "119%" : undefined,
              margin: !isMediumScreen ? "-13px -34px" : undefined,
            }}
          >
            <img
              src={close}
              alt="menu"
              className="h-[28px] w-[28px] object-contain absolute"
              style={{ top: "2.5rem", right: "3rem" }}
              onClick={() => setToggle(!toggle)}
            />
            <ul className="flex flex-1 list-none flex-col items-center justify-center gap-4">
              <li className="font-poppins cursor-pointer text-[32px] font-medium text-white">
                <Link
                  to="/à-propos"
                  onClick={() => {
                    setToggle(!toggle);
                    window.scrollTo(0, 0);
                  }}
                >
                  à Propos
                </Link>
              </li>
              <li className="font-poppins cursor-pointer text-[32px] font-medium text-white">
                <Link
                  to="/catalogues"
                  onClick={() => {
                    setToggle(!toggle);
                    window.scrollTo(0, 0);
                  }}
                >
                  Nos Catalogues
                </Link>
              </li>
              <li className="font-poppins cursor-pointer text-[32px] font-medium text-white">
                <Link
                  to="/equipements"
                  onClick={() => {
                    setToggle(!toggle);
                    window.scrollTo(0, 0);
                  }}
                >
                  Nos Equipements
                </Link>
              </li>
              <li className="font-poppins cursor-pointer text-[32px] font-medium text-white">
                <Link
                  to="/realisations"
                  onClick={() => {
                    setToggle(!toggle);
                    window.scrollTo(0, 0);
                  }}
                >
                  Nos Réalisations
                </Link>
              </li>
              <li className="font-poppins cursor-pointer text-[32px] font-medium text-white">
                <Link
                  to="/contact"
                  onClick={() => {
                    setToggle(!toggle);
                    window.scrollTo(0, 0);
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
