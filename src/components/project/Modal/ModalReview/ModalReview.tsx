import React from "react";
import ModalSubTitle from "../ModalSubTitle";
import ReviewItem from "./ReviewItem";
import { twMerge } from "tailwind-merge";
import { backColorList } from "@/types/types";

type ModalReviewProps = {
  data: {
    img: string[];
    imgReview: {
      title: string;
      content: string;
    }[];
  };
  bgType: "auction" | "quiz" | "market" | "default";
};

const ModalReview = ({ data, bgType }: ModalReviewProps) => {
  return (
    <div className="mt-10 w-[1000px] max-[1020px]:w-[800px] max-[810px]:w-[600px] max-[610px]:w-[450px] ">
      <div className={twMerge("p-2 rounded-xl", backColorList[bgType])}>
        <ModalSubTitle iconUrl="/images/review.svg" title="REVIEW" />
        <ReviewItem
          mt="first"
          src={data.img[0]}
          title={data.imgReview[0].title}
          content={data.imgReview[0].content}
        />
        <ReviewItem
          align={true}
          src={data.img[1]}
          title={data.imgReview[1].title}
          content={data.imgReview[1].content}
        />
        <ReviewItem
          src={data.img[2]}
          title={data.imgReview[2].title}
          content={data.imgReview[2]?.content}
        />
        {data.img[3] && data.imgReview[3]?.content && (
          <ReviewItem
            align={true}
            src={data.img[3]}
            title={data.imgReview[3]?.title}
            content={data.imgReview[3]?.content}
          />
        )}
        {data.img[4] && data.imgReview[4]?.content && (
          <ReviewItem
            src={data.img[4]}
            title={data.imgReview[4]?.title}
            content={data.imgReview[4]?.content}
          />
        )}
        {data.img[5] && data.imgReview[5]?.content && (
          <ReviewItem
            align={true}
            src={data?.img[5]}
            title={data.imgReview[5]?.title}
            content={data.imgReview[5]?.content}
          />
        )}
        {data.img[6] && data.imgReview[6]?.content && (
          <ReviewItem
            src={data?.img[6]}
            title={data.imgReview[6]?.title}
            content={data.imgReview[6]?.content}
          />
        )}
        {data?.img[7] && data.imgReview[7]?.content && (
          <ReviewItem
            align={true}
            src={data?.img[7]}
            title={data.imgReview[7]?.title}
            content={data.imgReview[7]?.content}
          />
        )}
        {data?.img[8] && data.imgReview[8]?.content && (
          <ReviewItem
            src={data?.img[8]}
            title={data.imgReview[8]?.title}
            content={data.imgReview[8]?.content}
          />
        )}
      </div>
    </div>
  );
};

export default ModalReview;
