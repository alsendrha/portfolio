"use client";

import React, { useState } from "react";
import { projectData } from "@/data/ProjectData";
import ProjectImage from "@/components/project/ProjectImage";
import ProjectContentText from "@/components/project/ProjectContentText/ProjectContentText";
import TitleBar from "@/components/skills/TitleBar";
import ProjectItem from "@/components/project/ProjectItem";

const Project = () => {
  const [isClick, setIsClick] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState(0);

  return (
    <div className="w-full max-w-[1300px] px-4">
      <TitleBar title="PROJECT" />
      <div className="w-full border my-2" />
      <div className="px-10 max-[780px]:px-0 my-5 ">
        {projectData.map((data) => (
          <ProjectItem
            data={data}
            isClick={isClick}
            currentProjectId={currentProjectId}
            setIsClick={setIsClick}
            key={data.id}
          >
            {data.title === "3-ENG" ? (
              <ProjectContentText
                data={data}
                setCurrentProjectId={setCurrentProjectId}
                setIsClick={setIsClick}
              />
            ) : (
              <ProjectImage projectData={projectData} data={data} />
            )}
            {data.title === "3-ENG" ? (
              <ProjectImage projectData={projectData} data={data} />
            ) : (
              <ProjectContentText
                data={data}
                setCurrentProjectId={setCurrentProjectId}
                setIsClick={setIsClick}
              />
            )}
          </ProjectItem>
        ))}
      </div>
    </div>
  );
};

export default Project;
