import { Nav, Navbar, Container, Image } from "react-bootstrap";
import { imagotipo_s_dark, imagotipo_s_light } from "../assets/index";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  getPreferredTheme,
  setStoredTheme,
  setTheme,
  showActiveTheme,
} from "../helpers/theme.helper";
import { FaSun, FaMoon, FaHouse, FaQuestion } from "react-icons/fa6";

const CustomNavBar = () => {
  const [currentTheme, setCurrentTheme] = useState(getPreferredTheme());
  const [logoUrl, setLogoUrl] = useState(
    currentTheme === "dark" ? imagotipo_s_dark : imagotipo_s_light
  );
  const [themeLogo, setThemeLogo] = useState(
    currentTheme === "dark" ? <FaSun /> : <FaMoon />
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
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <Image src={imagotipo_s} rounded height={50} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link active">
              Home
            </Link>
            <Link to="/info" className="nav-link active">
              Nosotros
            </Link>
            <button
              onClick={toggleTheme}
              className="btn rounded border ms-auto m-2 float-end w-auto"
            >
              {themeLogo}
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavBar;
