import React from "react";

type TitleProps = {
  numberTitle: string;
  title: string;
};

const Title = ({ numberTitle, title }: TitleProps) => {
  return (
    <div className="relative flex items-end  ml-20 max-[1060px]:ml-6">
      <h2 className="text-[150px] max-[600px]:text-[100px] opacity-25 leading-[160px] font-bold">
        {numberTitle}
      </h2>
      <p className="absolute left-24 text-[50px] text-[#e65124] max-[600px]:text-[30px] max-[600px]:left-[65px] max-[600px]:bottom-7 font-bold">
        {title}
      </p>
    </div>
  );
};

export default Title;
