import Link from "next/link";
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
    <Link
      className="flex w-fit"
      href={{
        pathname: "/detail",
        query: {
          project: data.id,
        },
      }}
    >
      <div
        className="mt-5 border border-[#e65124] p-3 rounded-2xl bg-[#e65124] hover:bg-white text-white max-[860px]:text-[12px] hover:text-[#e65124] flex items-center cursor-pointer"
        // onClick={() => {
        //   setCurrentProjectId(data.id);
        //   setIsClick(true);
        // }}
      >
        <p className="text-nowrap">자세히 보기</p>
      </div>
    </Link>
  );
};

export default MoreButton;
