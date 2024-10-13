import { projectName } from "@/service/detail";
import { Project, textColorList2 } from "@/types/types";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import { FaGithub } from "react-icons/fa";
type TitleContainerProps = {
  project: Project;
};

const TitleContainer = ({ project }: TitleContainerProps) => {
  return (
    <div className="max-[1050px]:absolute bottom-3 right-5 z-10">
      <p
        className={twMerge(
          "text-[24px] text-nowrap max-[1050px]:text-[16px]",
          textColorList2[projectName(project)]
        )}
      >
        {project?.content}
      </p>
      <p className="text-white text-nowrap text-[64px] max-[1050px]:text-[24px] max-[1050px]:text-gray-400">
        {project?.title}
      </p>
      <div className="flex mt-10 justify-start items-start w-[475px] transform transition-all duration-[0.3s] ease-out max-[1180px]:w-[300px] max-[1050px]:hidden">
        <p className="text-white text-wrap">{project.detail}</p>
        <Link
          href={project.github}
          target="_blank"
          className="flex flex-col justify-center items-center ml-3"
        >
          <FaGithub className="text-5xl text-white" />
          <p className="text-[#9e9e9e] text-[14px]">Github</p>
        </Link>
      </div>
    </div>
  );
};

export default TitleContainer;
