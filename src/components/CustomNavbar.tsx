import {
  Nav,
  Navbar,
  Container,
  Image,
} from "react-bootstrap";
import { imagotipo_s } from "../assets/index";
import React from "react";
import { Link } from "react-router-dom";

const CustomNavBar = () => {
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavBar;
