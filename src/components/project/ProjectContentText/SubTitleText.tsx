import React from "react";

type SubTitleTextProps = {
  title: string;
};

const SubTitleText = ({ title }: SubTitleTextProps) => {
  return (
    <p className="font-bold text-nowrap text-[#5D4037]">{title}&nbsp;:&nbsp;</p>
  );
};

export default SubTitleText;
