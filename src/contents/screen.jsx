import React from "react";
import { motion } from "framer-motion";
import "./Contents_css/screen.css";
import NavBar from "../components/navBar";
const Screen = () => {
  const variants = {
    hidden: {
      x: 300,
      y: -400,
    },
    visible: {
      x: 0,
      y: 0,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };
  return (
    <section className="home">
      <iframe
        title="dex"
        src="https://harbor.naker.io/back/5f1961ea71461a00040e30f2/"
      ></iframe>

      <div className="content">
        <NavBar></NavBar>
        <div className="user">
          <motion.div className="user-name">
            <h1 style={{ letterSpacing: "1px" }}>
              Lakhan Jindam
              <span></span>
            </h1>
            <hr></hr>
            <p style={{ letterSpacing: "1.5px" }}>
              I am a tech enthusiast, self-learner and <br></br>ecstatic to
              learn new technologies and frameworks
            </p>
          </motion.div>
          <motion.div
            className="user-pic"
            variants={variants}
            initial="hidden"
            animate="visible"
            whileHover={{
              borderRadius: "20%",
              scale: "1.1",
              transition: {
                ease: "easeInOut",
                duration: 1.5,
              },
            }}
          />
        </div>
      </div>
    </section>
  );
};
export default Screen;
