import React from "react";
import MoreButton from "./MoreButton";
import ProjectModal from "./Modal/ProjectModal";

type ProjectItemProps = {
  data: any;
  isClick: boolean;
  currentProjectId: number;
  setIsClick: any;
  children: React.ReactNode;
  children2: React.ReactNode;
};

const ProjectItem = ({
  data,
  isClick,
  currentProjectId,
  setIsClick,
  children,
  children2,
}: ProjectItemProps) => {
  return (
    <div className="mb-[200px]">
      <div className="flex bg-white bg-opacity-80 px-5 py-[100px] rounded-xl">
        {children}
        <div className="ml-20">{children2}</div>
        {isClick && currentProjectId === data.id && (
          <ProjectModal key={data.id} setIsClick={setIsClick} data={data} />
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
