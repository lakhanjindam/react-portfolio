import React from 'react';
import {motion} from 'framer-motion';

const Container =()=>{
    const variants = {
        hidden:{
            opacity: 0,
                y: 500,
                x:500,
                scale:1
        },
        visible:{
            opacity:0.5,
            background:"#ff00b1",
            x:0,
            y:0,
            scale:0.8
        }
    }
    return (
        <motion.div 
        style={{margin:"auto",padding:"20px 50px",height:"200px",width:"200px",color:"blue"}}
            className="Framer-motion" 
            variants={variants}
            whileHover ={{
                scale:0.6
            }}
            transition={{ 
                ease: "backInOut", duration: 1 
                }}
            initial="hidden"
            animate="visible"
            />
    )
}
export default Container