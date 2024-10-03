import React from "react";

type TitleBarProps = {
  title: string;
};

const TitleBar = ({ title }: TitleBarProps) => {
  return (
    <div className="mt-10">
      <p className="text-4xl text-[#5D4037] font-bold">{title}</p>
    </div>
  );
};

export default TitleBar;
