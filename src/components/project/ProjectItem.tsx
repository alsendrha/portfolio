import React from "react";
import ProjectModal from "./Modal/ProjectModal";

type ProjectItemProps = {
  data: any;
  isClick: boolean;
  currentProjectId: number;
  setIsClick: any;
  children: React.ReactNode;
};

const ProjectItem = ({
  data,
  isClick,
  currentProjectId,
  setIsClick,
  children,
}: ProjectItemProps) => {
  return (
    <div className="mb-[200px]">
      <div
        className={`flex max-[1350px]:flex-col
         max-[1350px]:items-center justify-between bg-white bg-opacity-65 px-8 max-[640px]:px-2 py-[100px] max-[640px]:py-[20px] rounded-xl`}
      >
        {children}
        {isClick && currentProjectId === data.id && (
          <ProjectModal key={data.id} setIsClick={setIsClick} data={data} />
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
