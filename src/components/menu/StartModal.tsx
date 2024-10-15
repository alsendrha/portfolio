"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const StartModal = () => {
  const [isClose, setIsClose] = useState(false);
  useEffect(() => {
    const startBack = setTimeout(() => {
      setIsClose(true);
    }, 4000);
    return () => {
      clearTimeout(startBack);
    };
  }, []);

  return (
    <motion.div
      whileInView={{ opacity: 0 }}
      transition={{ duration: 1, delay: 3 }}
      className={`w-full h-full left-0 top-0  backdrop-blur-sm bg-black bg-opacity-80 z-[1000] items-center absolute ${
        isClose ? "hidden" : "block"
      }`}
    >
      <div className="sticky w-full top-[50%] transform -translate-y-[50%] flex justify-center">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-[500px] h-[20px] bg-white"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-white text-[64px]"
          >
            PORTFOLIO
          </motion.p>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-[500px] h-[20px] bg-white"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default StartModal;
