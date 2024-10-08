import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

type ProjectAppImgProps = {
  src: string;
  align?: boolean;
};

const ProjectAppImg = ({ src, align }: ProjectAppImgProps) => {
  return (
    <div className="w-full flex justify-center">
      {src !== "/images/project/appImg/koreaTour01.png" ? (
        <div
          className={twMerge(
            "h-[666px] relative shrink-0 w-[730px] max-[1500px]:w-[550px] max-[1500px]:h-[500px]  max-[700px]:w-full max-[700px]:h-[350px]  max-[500px]:h-[250px] mb-5  max-[600px]:mb-0 transform transition-all duration-[0.3s] ease-out",
            [
              align
                ? "mr-[50px] max-[1500px]:mr-0"
                : "ml-[50px]  max-[1500px]:ml-0",
            ]
          )}
        >
          <Image src={src} fill sizes="1" alt="앱 이미지" />
        </div>
      ) : (
        <div className="relative w-[750px] max-[1500px]:w-full h-[500px] max-[1500px]:h-[550px] max-[1100px]:h-[450px] max-[850px]:h-[350px]  max-[550px]:h-[250px] shrink-0 rounded-xl overflow-hidden transform transition-all duration-[0.3s] ease-out">
          <Image src={src} fill sizes="1" alt="앱 이미지" />
        </div>
      )}
    </div>
  );
};

export default ProjectAppImg;
