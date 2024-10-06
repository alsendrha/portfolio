import Image from "next/image";
import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

type ModalImageProps = {
  data: {
    img: string[];
  };
};

const ModalImage = ({ data }: ModalImageProps) => {
  const [images, setImages] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const next = () => {
    setImages((prev) => (prev + 1 >= data.img.length ? 0 : prev + 1));
  };

  const prev = () => {
    setImages((prev) => (prev - 1 < 0 ? data.img.length - 1 : prev - 1));
  };

  return (
    <div className="w-full flex bg-white flex-col items-center back_color p-4">
      <div className="w-[1000px] max-[1020px]:w-[800px] max-[810px]:w-[600px] max-[610px]:w-[450px] h-[600px] rounded-xl overflow-hidden relative mt-10">
        <div className="flex z-10 absolute bottom-3 left-1/2 transform -translate-x-1/2">
          {data.img.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ml-2 bottom-3 left-[50%] transform -translate-x-1/2 bg-opacity-75 ${
                index === images ? "bg-[#e65124]" : "bg-[#ffa68b] bg-opacity-15"
              } `}
            />
          ))}
        </div>
        <button
          className="absolute z-10 top-[50%] left-3 transform translate-y-[-50%] bg-[#ffa68b] bg-opacity-50 hover:bg-opacity-100 w-[30px] h-[30px] rounded-full flex justify-center items-center"
          onClick={() => prev()}
        >
          <MdKeyboardArrowLeft className="text-[20px]" />
        </button>
        <button
          className="absolute z-10 top-[50%] right-3 transform translate-y-[-50%] bg-[#ffa68b] bg-opacity-50 hover:bg-opacity-100 w-[30px] h-[30px] rounded-full flex justify-center items-center"
          onClick={() => next()}
        >
          <MdKeyboardArrowRight className="text-[20px]" />
        </button>
        <Image src={data.img[images]} fill sizes="1" alt="프로젝트 이미지" />
      </div>
    </div>
  );
};

export default ModalImage;
