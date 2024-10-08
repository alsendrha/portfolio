import React from "react";
import ReviewImg from "./ReviewImg";
import ReviewContent from "./ReviewContent";
import { twMerge } from "tailwind-merge";
import ProjectAppImg from "@/components/detail/ProjectReview/ProjectAppImg";

type ReviewItemProps = {
  src: string;
  dataTitle: string;
  title: string;
  content: string;
  mt?: "first" | "all";
  align?: boolean;
};

const ReviewItem = ({
  align = false,
  dataTitle,
  src,
  title,
  content,
  mt = "all",
}: ReviewItemProps) => {
  const marginTop = {
    first: "mt-5",
    all: "mt-28 max-[550px]mt-10",
  };
  console.log(dataTitle);
  return (
    <div
      className={twMerge(
        `flex ${
          align ? "max-[1500px]:flex-col-reverse" : "max-[1500px]:flex-col"
        } max-[1500px]:items-center max-[1500px]:px-5`,
        marginTop[mt]
      )}
    >
      {!align ? (
        <>
          {dataTitle === "Korea Tour" ? (
            <ProjectAppImg align={align} src={src} />
          ) : (
            <ReviewImg src={src} />
          )}
        </>
      ) : (
        <div
          className={twMerge(
            "",
            dataTitle === "Korea Tour" && "ml-[50px]  max-[1500px]:ml-0"
          )}
        >
          <ReviewContent title={title} content={content} />
        </div>
      )}
      {!align ? (
        <div
          className={twMerge(
            "",
            dataTitle === "Korea Tour" &&
              src !== "/images/project/appImg/koreaTour01.png" &&
              "mr-[50px]  max-[1500px]:mr-0"
          )}
        >
          <ReviewContent title={title} content={content} />
        </div>
      ) : (
        <>
          {dataTitle === "Korea Tour" ? (
            <ProjectAppImg align={align} src={src} />
          ) : (
            <ReviewImg src={src} />
          )}
        </>
      )}
    </div>
  );
};

export default ReviewItem;
