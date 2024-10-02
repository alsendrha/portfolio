import React from "react";
import { BiMessageRounded } from "react-icons/bi";

type ReplyButtonProps = {
  onClick: () => void;
};

const ReplyButton = ({ onClick }: ReplyButtonProps) => {
  return (
    <div className="mt-5 ">
      <BiMessageRounded
        className="text-[32px] cursor-pointer"
        onClick={onClick}
      />
    </div>
  );
};

export default ReplyButton;
