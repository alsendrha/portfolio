import React from "react";

type TitleProps = {
  numberTitle: string;
  title: string;
};

const Title = ({ numberTitle, title }: TitleProps) => {
  return (
    <div className="relative flex items-end">
      <h2 className="text-[80px] opacity-25 leading-[78px] font-bold">
        {numberTitle}
      </h2>
      <p className="absolute left-12 text-[28px] text-[#e65124] font-bold">
        {title}
      </p>
    </div>
  );
};

export default Title;
