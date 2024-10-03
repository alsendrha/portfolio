import Image from "next/image";
import React from "react";

type ProjectTitleProps = {
  data: {
    title: string;
    date: string;
    content: string;
  };
};

const ProjectTitle = ({ data }: ProjectTitleProps) => {
  return (
    <div className="flex items-center">
      <div className="ml-3">
        <div className="flex items-center">
          <p className="font-bold max-[580px]:text-xs">
            {data.title}&nbsp;·&nbsp;
          </p>
          <p className="max-[860px]:text-xs">{data.date}</p>
        </div>
        <p className="text-sm">{data.content}</p>
      </div>
    </div>
  );
};

export default ProjectTitle;
