import React from "react";
import ReviewImg from "./ReviewImg";
import ReviewContent from "./ReviewContent";
import { twMerge } from "tailwind-merge";

type ReviewItemProps = {
  src: string;
  title: string;
  content: string;
  mt?: "first" | "all";
  align?: boolean;
};

const ReviewItem = ({
  align = false,
  src,
  title,
  content,
  mt = "all",
}: ReviewItemProps) => {
  const marginTop = {
    first: "mt-5",
    all: "mt-28",
  };

  return (
    <div
      className={twMerge(
        `flex ${
          align ? "max-[1020px]:flex-col-reverse" : "max-[1020px]:flex-col"
        } max-[1020px]:items-center max-[1020px]:px-5`,
        marginTop[mt]
      )}
    >
      {!align ? (
        <ReviewImg src={src} />
      ) : (
        <ReviewContent title={title} content={content} />
      )}
      {!align ? (
        <ReviewContent title={title} content={content} />
      ) : (
        <ReviewImg src={src} />
      )}
    </div>
  );
};

export default ReviewItem;
