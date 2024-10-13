import { projectName } from "@/service/detail";
import { backColorList2, Project } from "@/types/types";
import Link from "next/link";
import React from "react";

import { twMerge } from "tailwind-merge";

type ContentProps = {
  project: Project;
};

const ProjectContent = ({ project }: ContentProps) => {
  return (
    <div
      className={twMerge("p-5 flex items-start bg-opacity-70 rounded-2xl", [
        backColorList2[projectName(project)],
      ])}
    >
      <p
        className="text-white text-[18px]"
        dangerouslySetInnerHTML={{
          __html: project.retrospect.replace(/\n/g, "<br />"),
        }}
      />
    </div>
  );
};

export default ProjectContent;
