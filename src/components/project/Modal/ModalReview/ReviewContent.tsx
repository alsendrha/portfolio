import React from "react";
import { twMerge } from "tailwind-merge";

type ReviewContentProps = {
  title: string;
  content: string;
  align?: "left" | "right";
};

const ReviewContent = ({
  title,
  content,
  align = "left",
}: ReviewContentProps) => {
  const textLeftAndRight = {
    left: "text-start",
    right: "text-end",
  };

  return (
    <div
      className={twMerge("text-[#2C2C2E] px-5 max-[1020px]:mt-10 ", [
        textLeftAndRight[align],
      ])}
    >
      <p
        className={
          "font-semibold text-xl mb-2 max-[550px]:text-[18px] max-[550px]:leading-[20px]"
        }
      >
        {title}
      </p>
      <p
        dangerouslySetInnerHTML={{ __html: content }}
        className="text-lg whitespace-pre-line max-[550px]:text-[16px] max-[550px]:leading-[20px]"
      />
    </div>
  );
};

export default ReviewContent;
