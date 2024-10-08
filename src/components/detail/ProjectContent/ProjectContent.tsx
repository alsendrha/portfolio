import { projectName } from "@/service/detail";
import { backColorList2, Project } from "@/types/types";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

type ContentProps = {
  project: Project;
};

const ProjectContent = ({ project }: ContentProps) => {
  return (
    <div
      className={twMerge("p-5 flex items-center bg-[#222] rounded-2xl", [
        backColorList2[projectName(project)],
      ])}
    >
      <p className="text-white text-[18px]">{project.detail}</p>
      <div className="flex flex-col justify-start items-center">
        <Link
          href={project.github}
          target="_blank"
          className="flex flex-col justify-center items-center "
        >
          <FaGithub className="text-5xl text-white ml-1" />
          <p className="text-[#9e9e9e]">Github</p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectContent;
