import React from "react";
import { IoClose } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

type ModalCloseButtonProps = {
  onClick: () => void;
  bgType: "auction" | "quiz" | "market" | "default";
};

const ModalCloseButton = ({ onClick, bgType }: ModalCloseButtonProps) => {
  const textColorList = {
    auction: "text-[#e0dcce]",
    quiz: "text-white text-opacity-75",
    market: "text-white text-opacity-75",
    default: "text-[#e0dcce]",
  };

  const borderColorList = {
    auction: "border-[#e0dcce]",
    quiz: "border-white border-opacity-75",
    market: "border-white border-opacity-75",
    default: "border-[#e0dcce]",
  };

  return (
    <div className="w-full sticky top-3 flex justify-end px-3 z-50">
      <div
        className={twMerge(
          "w-[25px] h-[25px] flex items-center justify-center rounded-full border-[3px] cursor-pointer",
          [borderColorList[bgType]]
        )}
        onClick={onClick}
      >
        <IoClose className={`text-[24px] ${textColorList[bgType]}`} />
      </div>
    </div>
  );
};

export default ModalCloseButton;
