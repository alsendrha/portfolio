import React from "react";

type TitleProps = {
  numberTitle: string;
  title: string;
};

const Title = ({ numberTitle, title }: TitleProps) => {
  return (
    <div className="relative flex items-end">
      <h2 className="text-[120px] max-[1230px]:text-[80px] opacity-25 leading-[108px]  max-[1230px]:leading-[78px] font-bold  transform transition-all duration-[0.3s] ease-out">
        {numberTitle}
      </h2>
      <p className="absolute left-20 max-[1230px]:left-14 text-[28px] text-[#e65124] font-bold  transform transition-all duration-[0.3s] ease-out">
        {title}
      </p>
    </div>
  );
};

export default Title;
