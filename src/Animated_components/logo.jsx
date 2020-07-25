import React from "react";
import { motion } from "framer-motion";
import Paths from "../utils/logo_data";

const Logo = () => {
  const variants = {
    hidden: {
      scale: 1.5,
      rotate: -180,
      x: -100,
    },
    visible: {
      scale: 1,
      rotate: 0,
      x: 0,
      transition: {
        duration: 1.5,
        ease: "easeIn",
      },
    },
  };
  const icon = {
    hidden: {
      scale: 0.8,
      opacity: 0,
      pathLength: 0,
      // x: [300, -100, 0],
      // y: [300, 100, 0],
    },
    visible: {
      scale: 1,
      opacity: 1,
      pathLength: 1,
      transition: {
        type: "tween",
        ease: "easeInOut",
        scale: {
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
      height="100px"
      width="100px"
      variants={variants}
      initial="hidden"
      animate="visible"
      className="motion-svg"
      path="../images/data.svg"
      viewBox="0 0 511.998 511"
    >
      {Object.keys(Paths).map((key, value) => {
        return (
          <motion.path
            key={key}
            fill="#FFFFFF"
            variants={icon}
            initial="hidden"
            animate="visible"
            d={Paths[key]}
          ></motion.path>
        );
      })}
      {/* <motion.path
        d="M196.489 18.773c23.334 0 42.253 98.376 42.253 219.73h33.81c0-130.692-34.059-236.635-76.062-236.635-23.899 0-45.221 31.84-59.163 81.629-13.939-49.789-35.268-81.629-59.165-81.629-42.003 0-76.066 105.943-76.066 236.635H35.91c0-121.354 18.921-219.73 42.252-219.73 23.338 0 42.264 90.809 42.264 202.834h33.802c.001-112.025 18.921-202.834 42.261-202.834M289.475 221.607c4.586 0 8.43 3.631 8.43 8.408 0 4.853-3.844 8.486-8.43 8.486-4.602 0-8.478-3.635-8.478-8.486 0-4.777 3.876-8.408 8.478-8.408m0 15.661c3.884 0 6.9-3.121 6.9-7.25 0-4.057-3.018-7.174-6.9-7.174-3.932 0-6.945 3.117-6.945 7.174-.001 4.128 3.013 7.25 6.945 7.25zm-3.287-12.159h3.809c2.331 0 3.43.928 3.43 2.82 0 1.785-1.114 2.531-2.574 2.686l2.804 4.367h-1.646l-2.672-4.248h-1.616v4.248h-1.533l-.002-9.873zm1.534 4.386h1.597c1.345 0 2.584-.067 2.584-1.632 0-1.313-1.124-1.519-2.157-1.519h-2.022l-.002 3.151z"
        variants={icon}
        fill="#ffc300"
        initial="hidden"
        animate="visible"
      /> */}
    </motion.svg>
  );
};
export default Logo;
