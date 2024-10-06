"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const MyTopContent = () => {
  return (
    <div>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="font-bold text-[24px] leading-none text-[#ffa68b]"
      >
        HI! HOW ARE YOU?
      </motion.div>
      <div>
        <span className="font-bold text-[40px] text-red-600 max-[1350px]:text-[30px] max-[680px]:text-[24px]">
          I&apos;M&nbsp;
        </span>
        <TypeAnimation
          sequence={[
            "MIN YOUNG",
            2000,
            "WEB/APP DEVELOPER",
            2000,
            "FRONTEND DEVELOPER",
            2000,
          ]}
          wrapper="span"
          preRenderFirstString={false}
          speed={70}
          className="relative text-[40px] max-[1350px]:text-[30px] max-[680px]:text-[24px] font-bold text-[#5D4037]"
          repeat={Infinity}
        />
      </div>
    </div>
  );
};

export default MyTopContent;
