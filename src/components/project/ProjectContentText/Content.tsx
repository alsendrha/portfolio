import React from "react";
import { twMerge } from "tailwind-merge";

type ContentProps = {
  content: string;
  textColor?: "none" | "link";
};

const Content = ({ content, textColor = "none" }: ContentProps) => {
  const textColorList = {
    none: "#2C2C2E",
    link: "text-blue-500",
  };
  return <p className={twMerge("", [textColorList[textColor]])}>{content}</p>;
};

export default Content;
