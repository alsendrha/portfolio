import React from "react";

type CenterLineProps = {
  lineOpen?: boolean;
};

const CenterLine = ({ lineOpen = true }: CenterLineProps) => {
  return (
    <div className="relative flex mx-20">
      <div
        className={`absolute ${
          lineOpen ? "-left-[5px]" : "-left-[8px]"
        } w-[15px] h-[15px] rounded-full bg-[#e65124] max-[925px]:bg-[#ffa68b] max-[925px]:left-[46%]  max-[925px]:bottom-[85px]  max-[925px]:opacity-90`}
      ></div>
      {lineOpen && (
        <div className="w-[5px] flex-grow bg-[#e65124] max-[925px]:bg-gray-300" />
      )}
    </div>
  );
};

export default CenterLine;
