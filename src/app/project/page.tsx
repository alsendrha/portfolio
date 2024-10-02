"use client";

import React, { useState } from "react";
import { projectData } from "@/data/ProjectData";

import ReplyInsert from "@/components/project/ReplyInsert";
import ReplyList from "@/components/project/ReplyList";
import Link from "next/link";
import TopList from "@/components/project/TopList";
import ProjectTitle from "@/components/project/ProjectTitle";
import MoreButton from "@/components/project/MoreButton";
import ProjectModal from "@/components/project/Modal/ProjectModal";
import ProjectImage from "@/components/project/ProjectImage";
import ReplyButton from "@/components/project/ReplyButton";
import ProjectContentText from "@/components/project/ProjectContentText";

const Project = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [count, setCount] = useState(0);
  const [currentProjectId, setCurrentProjectId] = useState(0);

  return (
    <div className="w-full border-gray-300">
      <TopList />
      <div className="px-10 max-[780px]:px-0 my-5">
        {projectData.map((data) => (
          <div
            key={data.id}
            className="w-full max-[1500px]:w-[800px] max-[1060px]:w-[600px] max-[860px]:w-[450px] max-[580px]:w-[400px] max-[1500px]:mx-auto my-5 relative border-b rounded-lg pb-3 max-[1060px]:pb-1 last:border-b-0 bg-white p-4 shadow-xl"
          >
            {isClick && currentProjectId === data.id && (
              <ProjectModal setIsClick={setIsClick} data={data} />
            )}
            <div className="flex justify-between items-center">
              <ProjectTitle data={data} />
              <MoreButton
                setCurrentProjectId={setCurrentProjectId}
                setIsClick={setIsClick}
                data={data}
              />
            </div>
            <div className="mt-3">
              <ProjectImage projectData={projectData} data={data} />
              <ReplyButton
                onClick={() => {
                  setIsOpen(!isOpen);
                  setCurrentProjectId(data.id);
                }}
              />
              <ProjectContentText data={data} />
              {isOpen && currentProjectId === data.id && (
                <ReplyInsert
                  id={data.id}
                  setIsOpen={setIsOpen}
                  setCount={setCount}
                />
              )}
            </div>
            <ReplyList id={data.id} count={count} setCount={setCount} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
