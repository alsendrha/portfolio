import Link from "next/link";
import React from "react";
import SubTitleText from "./SubTitleText";
import Content from "./Content";
import MoreButton from "../MoreButton";
import { twMerge } from "tailwind-merge";
import { backColor } from "@/service/skillColor";

type ProjectContentTextProps = {
  data: {
    id: number;
    people: string;
    tech: string[];
    backend: string[];
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
    <div className="px-3 ml-10 max-[1350px]:px-0 max-[550px]:px-2 w-full max-[600px]:w-[350px] max-[550px]:w-full max-[1350px]:mt-10">
      <div className="flex items-center mb-10">
        <p className="text-2xl text-nowrap font-bold text-[#5D4037]">
          {data.title}
        </p>
        <MoreButton
          setCurrentProjectId={setCurrentProjectId}
          setIsClick={setIsClick}
          data={data}
        />
      </div>
      <div>
        <div className="flex mt-1 max-[550px]:text-[14px]">
          <SubTitleText title="개발 인원" />
          <Content content={data.people} />
        </div>
        <div className="flex mt-2 max-[550px]:text-[14px]">
          <SubTitleText title="사용 기술" />
          <div className="flex flex-wrap">
            {data.tech.map((item, index) => (
              <div
                key={index}
                className={twMerge(
                  "border rounded-full text-white text-[14px] px-2 mr-1 mb-1",
                  [backColor(item)]
                )}
              >
                <Content content={item} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex mt-2 max-[550px]:text-[14px]">
          <SubTitleText title="백엔드&nbsp;&nbsp;&nbsp;&nbsp;" />
          <div className="flex flex-wrap">
            {data.backend.map((item, index) => (
              <div
                key={index}
                className={twMerge(
                  "border rounded-full text-white text-[14px] px-2 mr-1 mb-1",
                  [backColor(item)]
                )}
              >
                <Content content={item} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex mt-2 max-[550px]:text-[14px]">
          <SubTitleText title="담당 업무" />
          <p>
            {data.myJob.map((item, index) => (
              <span key={index}>{item.name},&nbsp;</span>
            ))}
          </p>
        </div>
        {/* <div className="flex mt-2">
          <SubTitleText title="구현 영상" />
          <Link href={data.link} target="_blank">
            <Content content={data.title} textColor="link" />
          </Link>
        </div> */}
        <div className="flex mt-2 max-[550px]:text-[14px]">
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
