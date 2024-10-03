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
  const [imageIndices] = useState(projectData.map(() => 0));
  return (
    <div className="w-[600px] max-[860px]:w-[450px] max-[580px]:w-[400px] h-[350px] max-[860px]:h-[300px] max-[580px]:h-[250px] overflow-hidden relative rounded-xl">
      <Image
        src={data.img[imageIndices[data.id]]}
        fill
        sizes="1"
        className="object-contain"
        alt="프로젝트 이미지"
        priority
      />
    </div>
  );
};

export default ProjectImage;
