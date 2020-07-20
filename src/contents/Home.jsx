import React, { Component } from "react";
import "./Contents_css/Home.css";
import Logo from "../Animated_components/logo";
import { motion } from "framer-motion";
import Container from "../Animated_components/container";
import Button from "../Animated_components/button";
import Paths from "../Animated_components/logo_data";
import NavBar from "../components/navBar";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="front-page">
          <NavBar></NavBar>
          <motion.div
            className="user-pic"
            whileHover={
              { borderRadius: "20%", 
                scale: "1.1",
                transition:{
                  ease:"easeInOut",
                  duration:1.5,
                }
                 }}
          ></motion.div>
          <motion.div className="user-name">
            Lakhan Jindam
            <hr></hr>
            <p>
              I am a tech enthusiast, self-learner and <br></br>ecstatic to
              learn new technologies and frameworks
            </p>
          </motion.div>
        </div>
      </div>
    );
  }
}
