import React from "react";
import { motion } from "framer-motion";

const SkillLogo = (props) => {
  const variants = {
    hidden: {
      scale: 1.5,
    },
    visible: {
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeIn",
      },
    },
  };
  const icon = {
    hidden: {
      rotateY: 80,
      scale: 0.6,
      opacity: 0,
      pathLength: 0,

      // x: [300, -100, 0],
      // y: [300, 100, 0],
    },
    visible: {
      rotateY: -80,
      scale: 1,
      opacity: 1,
      pathLength: 1,
      transition: {
        type: "spring",
        ease: "easeIn",
        rotateY: {
          duration: 1.5,
          yoyo: Infinity,
        },
        opacity: {
          duration: 1.5,
          yoyo: Infinity,
        },
        pathLength: {
          duration: 1.5,
          yoyo: Infinity,
        },
      },
    },
  };
  return (
    <motion.svg
      height="150px"
      width="150px"
      variants={variants}
      initial="hidden"
      animate="visible"
      path={`../skills_images/${props.img_path}`}
      viewBox="0 0 50 50"
    >
      <motion.path
        fill="#000000"
        d={props.path}
        variants={icon}
        initial="hidden"
        animate="visible"
      ></motion.path>
    </motion.svg>
  );
};
export default SkillLogo;
