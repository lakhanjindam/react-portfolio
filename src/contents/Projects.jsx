import React from "react";
import "./Contents_css/project.css";
import projectData from "../utils/project_data";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <div id="project" className="project">
      <div className="project-header">
        <h1>Projects</h1>
        <hr></hr>
      </div>

      <div className="project-content">
        {Object.keys(projectData).map((key, value) => {
          return (
            <motion.div
              key={key}
              initial={{
                x: 800,
              }}
              animate={{
                x: 0,
                transition: {
                  duration: 1.5,
                  ease: "easeInOut",
                },
              }}
              whileHover={{
                scale: 1.02,
              }}
              className="items row"
            >
              <div className="image"></div>
              <motion.div
                whileHover={{
                  backgroundColor: "#ECD5AB",
                }}
                className="items-content"
              >
                <div className="title">
                  <h1>{projectData[key].title}</h1>
                  <hr></hr>
                </div>
                <div className="description">
                  <p>{projectData[key].description}</p>
                </div>
                <motion.div
                  whileHover={{
                    scale: 1.01,
                    rotateX: [20, -20],
                    backgroundColor: "#000000",
                    transition: {
                      duration: 1.5,
                      rotateX: {
                        ease: "backInOut",
                        yoyo: Infinity,
                      },
                    },
                  }}
                  className="project-link row"
                >
                  <div className="github row">
                    <a href={projectData[key].link}>
                      <h3>Go to the project</h3>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
export default Projects;
