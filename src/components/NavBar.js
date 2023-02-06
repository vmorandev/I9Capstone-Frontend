import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import logo from "../Assets/adpLogo.png";

function NavigationBar() {
  return (
    <Navbar className="navbar">
      <Container>
        <img src={logo} alt="adplogo" id="logo" />
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Welcome, <a href="#login">"Personel"</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavigationBar;
