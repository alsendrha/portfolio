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
    <>
      <div
        className="hidden text-white text-[8px] w-[30px] h-[30px] cursor-pointer rounded-full bg-[#e65124] max-[580px]:flex justify-center items-center"
        onClick={() => {
          setCurrentProjectId(data.id);
          setIsClick(true);
        }}
      >
        자세히
      </div>
      <div
        className="border max-[580px]:hidden text-nowrap border-[#e65124] rounded-2xl bg-[#e65124] hover:bg-white text-white max-[860px]:text-xs hover:text-[#e65124] px-3 max-[860px]:px-1 py-2 cursor-pointer"
        onClick={() => {
          setCurrentProjectId(data.id);
          setIsClick(true);
        }}
      >
        자세히 보기
      </div>
    </>
  );
};

export default MoreButton;
