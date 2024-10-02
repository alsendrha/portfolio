import Image from "next/image";
import React, { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

type ProjectImageProps = {
  projectData: {
    img: string[];
  }[];
  data: {
    id: number;
    img: string[];
  };
};

const ProjectImage = ({ projectData, data }: ProjectImageProps) => {
  const [imageIndices, setImageIndices] = useState(projectData.map(() => 0));
  const next = (projectId: number) => {
    setImageIndices((prevIndices) =>
      prevIndices.map((imgIndex, index) =>
        index === projectId
          ? (imgIndex + 1) % projectData[projectId].img.length
          : imgIndex
      )
    );
  };

  const prev = (projectId: number) => {
    setImageIndices((prevIndices) =>
      prevIndices.map((imgIndex, index) =>
        index === projectId
          ? (imgIndex - 1 + projectData[projectId].img.length) %
            projectData[projectId].img.length
          : imgIndex
      )
    );
  };

  return (
    <div className="w-full h-[500px] max-[1060px]:h-[400px] max-[860px]:h-[300px] max-[580px]:h-[250px] relative">
      <div className="flex z-10 absolute bottom-3 left-1/2 transform -translate-x-1/2">
        {data.img.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ml-2 bottom-3 left-[50%] transform -translate-x-1/2 bg-opacity-75 ${
              imageIndices[data.id] === index
                ? "bg-[#e65124]"
                : "bg-[#ffa68b] bg-opacity-15"
            } `}
          />
        ))}
      </div>
      <button
        className="absolute z-10 top-[50%] left-3 transform translate-y-[-50%] bg-[#ffa68b] bg-opacity-50 hover:bg-opacity-100 w-[30px] h-[30px] rounded-full flex justify-center items-center"
        onClick={() => prev(data.id)}
      >
        <MdKeyboardArrowLeft className="text-[20px] text-white" />
      </button>
      <button
        className="absolute z-10 top-[50%] right-3 transform translate-y-[-50%] bg-[#ffa68b] bg-opacity-50 hover:bg-opacity-100 w-[30px] h-[30px] rounded-full flex justify-center items-center"
        onClick={() => next(data.id)}
      >
        <MdKeyboardArrowRight className="text-[20px] text-white" />
      </button>

      <Image
        src={data.img[imageIndices[data.id]]}
        fill
        sizes="1"
        className="object-cover max-[1060px]:object-contain"
        alt="프로젝트 이미지"
      />
    </div>
  );
};

export default ProjectImage;
