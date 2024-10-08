import { projectName } from "@/service/detail";
import { Project, textColorList2 } from "@/types/types";
import React from "react";
import { twMerge } from "tailwind-merge";

type TitleContainerProps = {
  project: Project;
};

const TitleContainer = ({ project }: TitleContainerProps) => {
  return (
    <div className="max-[1050px]:absolute bottom-3 right-5">
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
    </div>
  );
};

export default TitleContainer;
