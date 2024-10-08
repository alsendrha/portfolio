import { Project } from "@/types/types";
import React from "react";

type MovieContainerProps = {
  project: Project;
};

const MovieContainer = ({ project }: MovieContainerProps) => {
  return (
    <iframe
      className="w-full h-full rounded-xl"
      allow="fullscreen"
      allowFullScreen
      src={`https://www.youtube.com/embed/${project?.link}?controls=1&autoplay=1&mute=1&loop=1&playlist=${project?.link}`}
    />
  );
};

export default MovieContainer;
