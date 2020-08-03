import React from "react";
import "./components_css/navBar.css";
import Logo from "../Animated_components/logo";

const NavBar = () => {
  return (
    <div className="header center row">
      <div className="logo">
        <Logo></Logo>
      </div>
      <div className="nav-bar">
        <nav>
          <div className="nav-wrapper row">
            <ul className="right show-on-small-and-up">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skill">Skills</a>
              </li>
              <li>
                <a href="#project">Project</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
