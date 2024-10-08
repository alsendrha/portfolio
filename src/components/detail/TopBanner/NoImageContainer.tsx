import { Project } from "@/types/types";
import Image from "next/image";
import React from "react";

type NoImageContainerProps = {
  project: Project;
};

const NoImageContainer = ({ project }: NoImageContainerProps) => {
  return (
    <div className="w-full h-full rounded-xl relative overflow-hidden">
      <Image src={project!.img[0]} fill sizes="1" alt="프로젝트 이미지" />
    </div>
  );
};

export default NoImageContainer;
