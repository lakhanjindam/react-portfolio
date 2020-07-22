import React, { Component } from "react";
import Screen from "./screen";
import Skills from "./Skills";
import About from "./About";

export default class Home extends Component {
  render() {
    return (
      <div className="main" style={{}}>
        <Screen></Screen>
        <Skills></Skills>
        <About></About>
      </div>
    );
  }
}
