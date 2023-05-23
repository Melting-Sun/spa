import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Header() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Elearn</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" style={{ marginLeft: 35, color: "black" }}>
              Home
            </Link>
            <Link to="/courses" style={{ marginLeft: 35, color: "black" }}>
              Courses
            </Link>
            <Link to="/about" style={{ marginLeft: 35, color: "black" }}>
              About
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
