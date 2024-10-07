import React from "react";

type SubTitleTextProps = {
  title: string;
};

const SubTitleText = ({ title }: SubTitleTextProps) => {
  return (
    <p className="font-bold text-nowrap max-[550px]:text-[14px] text-[#5D4037]">
      {title}&nbsp;:&nbsp;
    </p>
  );
};

export default SubTitleText;
