import React from "react";
import { twMerge } from "tailwind-merge";

type DateComponentProps = {
  title: string;
  subTitle: string;
};

const DateComponent = ({ title, subTitle }: DateComponentProps) => {
  return (
    <>
      <h2 className="text-[42px] text-[#2C2C2E] leading-none font-semibold z-10">
        {title}
      </h2>
      <h2 className="text-[24px] text-[#5D4037]">{subTitle}</h2>
    </>
  );
};

export default DateComponent;
