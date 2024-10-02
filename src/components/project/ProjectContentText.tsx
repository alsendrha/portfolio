import Link from "next/link";
import React from "react";

type ProjectContentTextProps = {
  data: {
    people: string;
    tech: string[];
    myJob: {
      name: string;
    }[];
    link: string;
    title: string;
    link2: string;
  };
};

const ProjectContentText = ({ data }: ProjectContentTextProps) => {
  return (
    <div>
      <div className="flex items-center mt-3">
        <p className="font-bold text-nowrap">개발 인원&nbsp;:&nbsp;</p>
        <p>{data.people}</p>
      </div>
      <div className="flex items-center mt-3">
        <p className="font-bold text-nowrap">사용 기술&nbsp;:&nbsp;</p>
        <p>{data.tech}</p>
      </div>
      <div className="flex mt-3">
        <p className="text-nowrap font-bold">
          업&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;무&nbsp;:&nbsp;
        </p>
        <p>
          {data.myJob.map((tech, index) => (
            <span key={index}>{tech.name},&nbsp;</span>
          ))}
        </p>
      </div>
      <div className="flex mt-3">
        <p className="text-nowrap font-bold">
          영&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;상&nbsp;:&nbsp;
        </p>
        <p className="text-blue-500">
          <Link href={data.link} target="_blank">
            {data.title}
          </Link>
        </p>
      </div>
      <div className="flex mt-3">
        <p className="text-nowrap font-bold">
          링&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;크&nbsp;:&nbsp;
        </p>
        <p className="text-blue-500">
          <Link href={data.link2} target="_blank">
            {data.title}&nbsp;
            {data.title === "우리동네 경매장" || data.title === "3-ENG"
              ? "(백엔드 서버 내림)"
              : ""}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ProjectContentText;
