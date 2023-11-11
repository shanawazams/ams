import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import {BiCodeAlt} from "react-icons/bi"

import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0,1,],
    opacity: [0,1,],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    },
  },
};
const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app_flex">
            <span><BiCodeAlt /></span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Welcome to </p>
              <h1 className="head-text"> Renderr </h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Creativity <span className="meets">meets</span></p>
            <p className="p-text">Commerce</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
        </motion.div>
        <motion.div 
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles"
        >
          {[images.python, images.react, images.sass].map((circle, index)=>(
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="circle" />

            </div>
          ))}
          
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, 'home');
