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
    <div className="flex-shrink-0 w-[800px] h-[550px] max-[1580px]:w-[600px] max-[1580px]:h-[350px] max-[860px]:w-[450px] max-[600px]:w-[350px] max-[550px]:w-[330px] max-[600px]:h-[250px] max-[860px]:h-[300px] overflow-hidden relative rounded-xl transform transition-all duration-[0.3s] ease-out">
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
