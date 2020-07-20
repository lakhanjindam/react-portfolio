import React from "react";
import { motion } from "framer-motion";

const Button = () => {
  const buttonVariant = {
    animate: {
      background: "#0BE1EC",
      rotate: 0,
      scale: 1,
      opacity: 1,
      x: [-20, 20],
      y: [0, 0],
      transition: {
        x: {
          yoyo: Infinity,
          duration: 0.5,
        },
        y: {
          yoyo: Infinity,
          duration: 0.5,
        },
      },
    },
  };
  return (
    <motion.button
      style={{
        width: "100px",
        height: "50px",
        margin: "10px 500px",
        color: "black",
        boxShadow: "grey",
      }}
      className="butt"
      whileHover={{
        background: "#F4350C",
        color: "#FFFFFF",
        scale: 1.2,
        borderRadius: "20px",
      }}
      whileTap={{
        scale:0.6,
      }}
      initial={{
        scale: 0.8,
        opacity: 0.5,
        y: 500,
        x: 500,
      }}
      variants={buttonVariant}
      transition={{
        ease: "easeInOut",
        duration: 1.3,
      }}
      animate="animate"
    >
      Click Me
    </motion.button>
  );
};
export default Button;
