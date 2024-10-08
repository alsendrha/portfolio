import ReviewItem from "@/components/project/Modal/ModalReview/ReviewItem";
import ModalSubTitle from "@/components/project/Modal/ModalSubTitle";
import { projectName } from "@/service/detail";
import { backColorList2, Project } from "@/types/types";
import React from "react";
import { twMerge } from "tailwind-merge";

type ProjectReviewProps = {
  data: Project;
};

const ProjectReview = ({ data }: ProjectReviewProps) => {
  return (
    <div
      className={twMerge(
        "mt-20 p-5 max-[550px]:mt-5 w-full rounded-xl bg-opacity-5",
        backColorList2[projectName(data)]
      )}
    >
      <div>
        <ModalSubTitle iconUrl="/images/review.svg" title="PAGE REVIEW" />
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

export default ProjectReview;
