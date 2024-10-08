import { Project } from "@/types/types";
import React from "react";
import MovieContainer from "./MovieContainer";
import NoImageContainer from "./NoImageContainer";
import TitleContainer from "./TitleContainer";

type TopTitleProps = {
  project: Project;
};

const TopTitle = ({ project }: TopTitleProps) => {
  return (
    <div className="w-[1500px] max-[1600px]:w-[1200px] max-[1050px]:w-full max-[1050px]:justify-center p-10 max-[700px]:px-5 z-10 flex items-center justify-between">
      <div className="max-[1050px]:hidden">
        <TitleContainer project={project} />
      </div>
      <div className="p-1 w-[850px] max-[1600px]:w-[600px] h-full rounded-xl bg-white relative">
        <div className="hidden max-[1050px]:block">
          <TitleContainer project={project} />
        </div>
        {project.link ? (
          <MovieContainer project={project} />
        ) : (
          <NoImageContainer project={project} />
        )}
      </div>
    </div>
  );
};

export default TopTitle;
