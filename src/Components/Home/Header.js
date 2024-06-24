import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar
        expand="lg"
        className="bg-body-tertiary  top-0 z-99999
"
      >
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex ">
              <Link to="/">Home</Link>
              <Link to="/props">Props</Link>
              <Link to="/state">State</Link>
              <Link to="/reducter">Reducer</Link>
              <Link to="/cart">Card</Link>
              <Link to="/ref">Ref</Link>
              <Link to="/customhook">CustomHook</Link>
              <Link to="/form">Form</Link>
              <Link to="/ref">Ref</Link>
              <Link to="/context">Context</Link>
              <Link to="/advanced">Advanced</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
