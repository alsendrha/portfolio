import ModalSubTitle from "@/components/project/Modal/ModalSubTitle";
import { projectName } from "@/service/detail";
import { backColorList2, Project } from "@/types/types";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

type ProjectSkillsProps = {
  data: Project;
};

const ProjectSkills = ({ data }: ProjectSkillsProps) => {
  return (
    <div className="my-20 max-[550px]:my-5 w-full">
      <div className="p-2 rounded-xl">
        <ModalSubTitle iconUrl="/images/option.svg" title="SKILLS" />
        <div
          className={twMerge(
            "flex max-[810px]:flex-wrap w-full py-5 justify-center max-[810px]:justify-start  bg-opacity-75 rounded-xl",
            backColorList2[projectName(data)]
          )}
        >
          {data.techImg.map((tech, index) => (
            <div
              key={index}
              className="w-[80px] h-[80px] max-[810px]:w-[50px] max-[810px]:h-[50px] mx-3 relative overflow-hidden"
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

export default ProjectSkills;
