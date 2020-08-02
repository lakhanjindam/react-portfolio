import React, { Component } from "react";
import Screen from "./screen";
import Skills from "./Skills";
import About from "./About";
import Footer from "../components/footer";
import Projects from "./Projects";

export default class Home extends Component {
  render() {
    return (
      <div className="main" style={{}}>
        <Screen></Screen>
        <Skills></Skills>
        <About></About>
        <Projects></Projects>
        <Footer></Footer>
      </div>
    );
  }
}
