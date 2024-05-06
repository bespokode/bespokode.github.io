import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { imagotipo_s_dark, imagotipo_s_light } from "../assets/index";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  getPreferredTheme,
  setStoredTheme,
  setTheme,
  showActiveTheme,
} from "../helpers/theme.helper";
import { FaSun, FaMoon } from "react-icons/fa6";
import i18next from "../i18n/index";

const CustomNavBar = () => {
  const [currentTheme, setCurrentTheme] = useState(getPreferredTheme());
  const [logoUrl, setLogoUrl] = useState(
    currentTheme === "dark" ? imagotipo_s_dark : imagotipo_s_light,
  );
  const [themeLogo, setThemeLogo] = useState(
    currentTheme === "dark" ? <FaSun /> : <FaMoon />,
  );

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    setStoredTheme(newTheme); // Guarda el tema en localStorage
    setTheme(newTheme); // Aplica el nuevo tema
    showActiveTheme(newTheme, true); // Muestra el tema activo

    setLogoUrl(newTheme === "dark" ? imagotipo_s_dark : imagotipo_s_light);
    setThemeLogo(newTheme === "dark" ? <FaSun /> : <FaMoon />);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-top">
      <Container>
        <Navbar.Brand href="/">
          <img src={logoUrl} height={50} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="nav-toggler" />
        <Navbar.Offcanvas id="basic-navbar-nav">
          <div className="offcanvas-header">
            <h5
              className="offcanvas-title font-astro"
              id="offcanvasNavbarLabel"
            >
              Bespokode
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => document.getElementById("nav-toggler")?.click()}
              aria-label="Close"
            ></button>
          </div>
          <Nav className="me-auto w-100">
            <Link to="/" className="nav-link active m-2">
              {i18next.t("navbar_homeButton")}
            </Link>
            <NavDropdown
              title={i18next.t("navbar_optionsButton")}
              id="basic-nav-dropdown"
              className="ms-auto m-2 float-end h-100"
            >
              <NavDropdown.Header>
                {i18next.t("navbar_themeTitle")}
              </NavDropdown.Header>
              <button
                onClick={toggleTheme}
                className="btn rounded border d-block m-auto w-75 "
              >
                {themeLogo}
              </button>
              <NavDropdown.Divider />
              <NavDropdown.Header>
                {i18next.t("navbar_languageTitle")}
              </NavDropdown.Header>
              <NavDropdown.Item
                onClick={() =>
                  i18next
                    .changeLanguage("es")
                    .then(() => window.location.reload())
                }
              >
                Español
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() =>
                  i18next
                    .changeLanguage("en")
                    .then(() => window.location.reload())
                }
              >
                English
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default CustomNavBar;
