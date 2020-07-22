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
      <NavBar></NavBar>
      <div className="user">
        <motion.div className="user-name">
          <h1>
            Lakhan Jindam
            <span></span>
          </h1>
          <hr></hr>
          <p>
            I am a tech enthusiast, self-learner and <br></br>ecstatic to learn
            new technologies and frameworks
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
    </section>
  );
};
export default Screen;
