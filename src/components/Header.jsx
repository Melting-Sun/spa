import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './style.css'


function Header() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Elearn</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/" style={{ marginLeft: 35, color: "black" }}>
              Home
            </NavLink>
            <NavLink to="/courses" style={{ marginLeft: 35, color: "black" }}
              className={(link) => link.isActive ? 'active' : ''}
            >
              Courses
            </NavLink>
            <NavLink to="/about" style={{ marginLeft: 35, color: "black" }}>
              About
            </NavLink>
            <NavLink to="/login" style={{ marginLeft: 35, color: "black" }}>
              Login
            </NavLink>
            <NavLink to="/panel" style={{ marginLeft: 35, color: "black" }}>
              Panel
            </NavLink>
            <NavLink to="/dashboard" style={{ marginLeft: 35, color: "black" }}>
              dashboard
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
