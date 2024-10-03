import Link from "next/link";
import React from "react";
import SubTitleText from "./SubTitleText";
import Content from "./Content";
import MoreButton from "../MoreButton";

type ProjectContentTextProps = {
  data: {
    id: number;
    people: string;
    tech: string[];
    myJob: {
      name: string;
    }[];
    link: string;
    title: string;
    link2: string;
  };
  setCurrentProjectId: (id: number) => void;
  setIsClick: (isClick: boolean) => void;
};

const ProjectContentText = ({
  data,
  setCurrentProjectId,
  setIsClick,
}: ProjectContentTextProps) => {
  return (
    <div className="w-[400px] max-[1350px]:mt-10">
      <div className="flex mb-10">
        <p className="text-2xl font-bold text-[#5D4037]">{data.title}</p>
        <MoreButton
          setCurrentProjectId={setCurrentProjectId}
          setIsClick={setIsClick}
          data={data}
        />
      </div>
      <div>
        <div className="flex mt-1">
          <SubTitleText title="개발 인원" />
          <Content content={data.people} />
        </div>
        <div className="flex mt-2">
          <SubTitleText title="사용 기술" />
          <p>{data.tech}</p>
        </div>
        <div className="flex mt-2">
          <SubTitleText title="담당 업무" />
          <p>
            {data.myJob.map((tech, index) => (
              <span key={index}>{tech.name},&nbsp;</span>
            ))}
          </p>
        </div>
        <div className="flex mt-2">
          <SubTitleText title="구현 영상" />
          <Link href={data.link} target="_blank">
            <Content content={data.title} textColor="link" />
          </Link>
        </div>
        <div className="flex mt-2">
          <SubTitleText title="홈페이지 " />
          <Link href={data.link2} target="_blank">
            <Content
              content={`${data.title}
            ${
              data.title === "우리동네 경매장" || data.title === "3-ENG"
                ? "(백엔드 서버 내림)"
                : ""
            }`}
              textColor="link"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectContentText;
