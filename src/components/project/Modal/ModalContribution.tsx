import React from "react";
import ModalSubTitle from "./ModalSubTitle";
import { BiSolidRightArrow } from "react-icons/bi";
type ModalContributionProps = {
  data: {
    myJob: {
      name: string;
      content: string;
    }[];
  };
  handleClicked: (index: number) => void;
  isClicked: boolean[];
};

const ModalContribution = ({
  data,
  handleClicked,
  isClicked,
}: ModalContributionProps) => {
  return (
    <div className=" my-5 w-[1000px] max-[1020px]:w-[800px] max-[810px]:w-[600px] max-[610px]:w-[450px]">
      <ModalSubTitle iconUrl="/images/people.svg" title="나의 기여도" />
      <div className="w-full rounded-xl">
        {data.myJob.map((tech, index: any) => (
          <div
            key={index}
            className="flex flex-col"
            onClick={() => handleClicked(index)}
          >
            <div className="w-full p-3 text-xl flex items-center text-white  bg-[#e65124] rounded-xl my-2 cursor-pointer">
              <BiSolidRightArrow
                className={`text-sm mr-4 transform transition-all duration-[0.3s] ease-out  ${
                  isClicked[index] ? "rotate-90" : ""
                }`}
              />
              {tech.name}
            </div>
            {isClicked[index] && (
              <div className="text-black p-1">
                <p>{tech.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModalContribution;
