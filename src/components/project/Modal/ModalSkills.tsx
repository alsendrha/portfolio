import Image from "next/image";
import React from "react";
import ModalSubTitle from "./ModalSubTitle";
import { twMerge } from "tailwind-merge";
import { backColorList } from "@/types/types";

type ModalSkillsProps = {
  data: {
    techImg: string[];
  };
  bgType: "auction" | "quiz" | "market" | "default";
};

const ModalSkills = ({ data, bgType }: ModalSkillsProps) => {
  return (
    <div className="my-10 w-[1000px] max-[1020px]:w-[800px] max-[810px]:w-[600px] max-[610px]:w-[450px] max-[550px]:w-full">
      <div className={twMerge("p-2 rounded-xl", backColorList[bgType])}>
        <ModalSubTitle iconUrl="/images/option.svg" title="SKILLS" />
        <div className=" flex max-[810px]:flex-wrap w-full rounded-xl">
          {data.techImg.map((tech, index) => (
            <div
              key={index}
              className="w-[80px] h-[80px] mr-3 relative overflow-hidden"
            >
              <Image
                src={tech}
                fill
                sizes="1"
                className="object-contain"
                alt="스킬 이미지"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalSkills;
