import ModalSubTitle from "@/components/project/Modal/ModalSubTitle";
import { projectName } from "@/service/detail";
import { backColorList2, Project } from "@/types/types";
import React, { useState } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { twMerge } from "tailwind-merge";

type ProjectContributionsProps = {
  data: Project;
};

const ProjectContributions = ({ data }: ProjectContributionsProps) => {
  const [isClicked, setIsClicked] = useState<boolean[]>(
    Array(data.myJob.length).fill(true)
  );

  const handleClicked = (index: number) => {
    setIsClicked((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="w-full">
      <ModalSubTitle iconUrl="/images/people.svg" title="나의 기여도" />
      <div
        className={twMerge(
          "w-full p-5 rounded-xl bg-opacity-5",
          backColorList2[projectName(data)]
        )}
      >
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
  );
};

export default ProjectContributions;
