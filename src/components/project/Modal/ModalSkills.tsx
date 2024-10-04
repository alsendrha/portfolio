import Image from "next/image";
import React from "react";
import ModalSubTitle from "./ModalSubTitle";

type ModalSkillsProps = {
  data: {
    techImg: string[];
  };
};

const ModalSkills = ({ data }: ModalSkillsProps) => {
  return (
    <div className="my-5 w-[1000px] max-[1020px]:w-[800px] max-[810px]:w-[600px] max-[610px]:w-[450px]">
      <ModalSubTitle iconUrl="/images/option.svg" title="SKILLS" />
      <div className=" flex max-[810px]:flex-col w-full rounded-xl p-2">
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
  );
};

export default ModalSkills;
