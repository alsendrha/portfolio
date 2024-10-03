import React from "react";
import MoreButton from "./MoreButton";
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
        className={`flex ${
          data.title === "3-ENG"
            ? "max-[1350px]:flex-col-reverse"
            : "max-[1350px]:flex-col"
        } max-[1350px]:items-center justify-between bg-white bg-opacity-65 px-8 py-[100px] rounded-xl`}
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
