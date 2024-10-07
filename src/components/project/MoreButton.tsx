import React from "react";

type MoreButtonProps = {
  setCurrentProjectId: (id: number) => void;
  setIsClick: (isClick: boolean) => void;
  data: {
    id: number;
  };
};

const MoreButton = ({
  setCurrentProjectId,
  setIsClick,
  data,
}: MoreButtonProps) => {
  return (
    <div
      className=" ml-2 border border-[#e65124] rounded-2xl bg-[#e65124] hover:bg-white text-white max-[860px]:text-[12px] hover:text-[#e65124] px-2 flex items-center cursor-pointer"
      onClick={() => {
        setCurrentProjectId(data.id);
        setIsClick(true);
      }}
    >
      <p>더보기</p>
    </div>
  );
};

export default MoreButton;
