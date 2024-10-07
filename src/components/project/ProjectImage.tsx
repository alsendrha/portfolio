import Image from "next/image";
import React from "react";

type ProjectImageProps = {
  data: {
    id: number;
    img: string[];
  };
};

const ProjectImage = ({ data }: ProjectImageProps) => {
  return (
    <div className="w-[600px] h-[350px] max-[860px]:w-[450px] max-[600px]:w-[350px] max-[600px]:h-[250px]  max-[860px]:h-[300px]  overflow-hidden relative rounded-xl">
      <Image
        src={data.img[0]}
        fill
        sizes="100vw"
        className="object-fill rounded-xl"
        alt="프로젝트 이미지"
        priority
        quality={75}
      />
    </div>
  );
};

export default ProjectImage;
