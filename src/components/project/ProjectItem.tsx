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
      <div
        className={`flex ${
          data.title === "3-ENG"
            ? "max-[1350px]:flex-col-reverse"
            : "max-[1350px]:flex-col"
        } max-[1350px]:items-center justify-between bg-white bg-opacity-65 px-5 py-[100px] rounded-xl`}
      >
        {children}
        <div className="">{children2}</div>
        {isClick && currentProjectId === data.id && (
          <ProjectModal key={data.id} setIsClick={setIsClick} data={data} />
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
