import React from "react";

type MyInfoTextProps = {
  title: string;
  content: string;
};

const MyInfoText = ({ title, content }: MyInfoTextProps) => {
  return (
    <p className="mb-3 text-[#2C2C2E] text-nowrap">
      <span className="text-[#5D4037]">{title}</span> : {content}
    </p>
  );
};

export default MyInfoText;
