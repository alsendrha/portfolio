import React from "react";

type ModalTitleProps = {
  title: string;
};

const ModalTitle = ({ title }: ModalTitleProps) => {
  return (
    <div className="font-bold text-5xl mt-5 text-[#5D4037] sticky top-5 max-[810px]:top-[30px] z-[10000]">
      <p className="max-[1020px]:text-text-5xl max-[810px]:text-2xl max-[610px]:text-xl">
        {title}
      </p>
    </div>
  );
};

export default ModalTitle;
