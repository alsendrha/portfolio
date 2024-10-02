import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import DateComponent from "./DateComponent";
import Content from "./Content";
import CenterLine from "./CenterLine";
import { twMerge } from "tailwind-merge";

type ContentGroupProps = {
  col?: "col" | "rev";
  children1: ReactNode;
  children2: ReactNode;
  lineOpen?: boolean;
};

const ContentGroup = ({
  col = "col",
  children1,
  children2,
  lineOpen,
}: ContentGroupProps) => {
  const colList = {
    col: "max-[925px]:flex-col",
    rev: "max-[925px]:flex-col-reverse",
  };

  return (
    <div
      className={twMerge("relative flex max-[925px]:flex-col", [colList[col]])}
    >
      <div className="w-[350px]">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col text-[#2C2C2E] items-end mb-16 max-[925px]:mb-8"
        >
          {children1}
        </motion.div>
      </div>
      <CenterLine lineOpen={lineOpen} />
      <div className="w-[350px]">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col text-[#2C2C2E] justify-start mb-16 max-[925px]:mb-8"
        >
          {children2}
        </motion.div>
      </div>
    </div>
  );
};

export default ContentGroup;
