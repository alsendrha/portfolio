import React from "react";
import ModalSubTitle from "./ModalSubTitle";
import { BiSolidRightArrow } from "react-icons/bi";
import { twMerge } from "tailwind-merge";
import { backColorList } from "@/types/types";
type ModalContributionProps = {
  data: {
    myJob: {
      name: string;
      content: string;
    }[];
  };
  bgType: "auction" | "quiz" | "market" | "default";
  handleClicked: (index: number) => void;
  isClicked: boolean[];
};

const ModalContribution = ({
  data,
  handleClicked,
  isClicked,
  bgType,
}: ModalContributionProps) => {
  return (
    <div className="w-[1000px] max-[1020px]:w-[800px] max-[810px]:w-[600px] max-[610px]:w-[450px] max-[550px]:w-full">
      <div className={twMerge("p-2 rounded-xl", backColorList[bgType])}>
        <ModalSubTitle iconUrl="/images/people.svg" title="나의 기여도" />
        <div className="w-full rounded-xl">
          {data.myJob.map((tech, index: any) => (
            <div
              key={index}
              className="flex flex-col mb-5"
              onClick={() => handleClicked(index)}
            >
              <div className="py-2 text-xl flex items-center self-start text-[#e65124] rounded-xl  cursor-pointer">
                <BiSolidRightArrow
                  className={`text-sm mr-2 transform transition-all duration-[0.3s] ease-out  ${
                    isClicked[index] ? "rotate-90" : ""
                  }`}
                />
                {tech.name}
              </div>
              {isClicked[index] && (
                <div className="text-[#2C2C2E]">
                  <p>{tech.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalContribution;
