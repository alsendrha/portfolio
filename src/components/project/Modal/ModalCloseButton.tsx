import React from "react";
import { IoClose } from "react-icons/io5";

type ModalCloseButtonProps = {
  onClick: () => void;
};

const ModalCloseButton = ({ onClick }: ModalCloseButtonProps) => {
  return (
    <div className="w-full sticky top-3 flex justify-end px-3 z-50">
      <div
        className="w-[25px] h-[25px] flex items-center justify-center border-[#ffa68b] rounded-full border-[3px] cursor-pointer"
        onClick={onClick}
      >
        <IoClose className="text-[24px] text-[#ffa68b]" />
      </div>
    </div>
  );
};

export default ModalCloseButton;
