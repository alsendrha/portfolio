"use client";

import { projectData } from "@/data/ProjectData";
import { backColorList2, Project } from "@/types/types";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";
import TopImage from "../../components/detail/TopBanner/TopImage";
import { twMerge } from "tailwind-merge";
import TopTitle from "../../components/detail/TopBanner/TopTitle";
import { projectName } from "@/service/detail";
import Link from "next/link";
import { Content } from "next/font/google";
import ProjectContent from "@/components/detail/ProjectContent/ProjectContent";
import ModalSubTitle from "@/components/project/Modal/ModalSubTitle";
import ReviewItem from "@/components/project/Modal/ModalReview/ReviewItem";
import ProjectReview from "@/components/detail/ProjectReview/ProjectReview";
import ProjectSkills from "@/components/detail/ProjectSkills/ProjectSkills";
import ProjectContributions from "@/components/detail/ProjectContributions/ProjectContributions";

const Detail = () => {
  const params = useSearchParams();
  const projectId = params.get("project");
  const project = projectData.find(
    (item: Project) => item!.id.toString() === projectId
  );

  return (
    <div className="w-full h-full bg-white">
      <div
        className={twMerge(
          "w-full h-[600px] max-[1600px]:h-[450px]  max-[700px]:h-[400px] flex justify-center relative",
          backColorList2[projectName(project!)]
        )}
      >
        {/* <TopImage src={project!.img[0]} /> */}
        <TopTitle project={project!} />
      </div>
      <div className="w-full px-60 max-[1600px]:px-32 max-[1050px]:px-5 my-10">
        <ProjectContent project={project!} />
        <ProjectReview data={project!} />
        <ProjectSkills data={project!} />
        <ProjectContributions data={project!} />
      </div>
    </div>
  );
};

export default Detail;
