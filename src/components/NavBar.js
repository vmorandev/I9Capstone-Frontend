import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import logo from "../assets/adpLogo.png";

function NavigationBar() {
  return (
    <Navbar className="Navbar">
      <img src={logo} alt="adplogo" id="logo" />
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <div>
          <Navbar.Text className="name-login">
            Welcome, <a href="#login">James Oneal</a>
          </Navbar.Text>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
