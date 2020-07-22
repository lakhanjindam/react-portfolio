import React from "react";
import "./Contents_css/about.css";
import { motion } from "framer-motion";
const About = () => {
  const cards = {
    1: {
      board: "SSC",
      college: "All India Education of society and high school",
      name: "Lakhan Jindam",
      percentage: 84.2,
      year: 2014,
    },
    2: {
      board: "HSC",
      college: "K.J Somaiya College of Science and Commerce",
      name: "Lakhan Jindam",
      percentage: 72.92,
      year: 2016,
    },
    3: {
      board: "MU",
      college: "Xavier Institute of Engineering",
      name: "Lakhan Jindam",
      percentage: 7.8,
      year: 2020,
    },
  };
  return (
    <div className="about">
      <div className="about-header">
        <h1>About</h1>
        <hr></hr>
      </div>
      <div className="about-items">
        {Object.keys(cards).map((key, value) => {
          return (
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
              key={key}
              className="card"
            >
              <div className="card-details">
                <div className="name">{cards[key].college}</div>

                <div className="card-about">
                  <div className="item">
                    <span className="label">Board</span>
                    <span className="value">{cards[key].board}</span>
                  </div>
                  <div className="item">
                    <span className="label">Examination Year</span>
                    <span className="value">{cards[key].year}</span>
                  </div>
                  <div className="item">
                    <span className="label">Percentage</span>
                    <span className="value">{cards[key].percentage}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
export default About;
