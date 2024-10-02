import Image from "next/image";
import React from "react";

type ModalSubTitleProps = {
  iconUrl: string;
  title: string;
};

const ModalSubTitle = ({ iconUrl, title }: ModalSubTitleProps) => {
  return (
    <div className="flex items-center mb-3">
      <div className="w-[22px] h-[22px] relative mr-2">
        <Image src={iconUrl} fill sizes="1" alt="아이콘" />
      </div>
      <p className="text-3xl font-bold text-[#ffa68b]">{title}</p>
    </div>
  );
};

export default ModalSubTitle;
