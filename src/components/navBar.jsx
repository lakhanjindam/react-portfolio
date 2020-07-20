import React from "react";
import { Link } from "react-router-dom";
import "./components_css/navBar.css";
import Logo from "../Animated_components/logo";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <nav>
        <div className="nav-wrapper">
          <ul className="right show-on-small-and-up">
            <li>
              <Link to="#">Home</Link>
            </li>
            <li>
              <Link to="">About</Link>
            </li>
            <li>
              <Link to="">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
