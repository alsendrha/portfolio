import React, { useEffect, useRef, useState } from "react";
import ModalImage from "./ModalImage";
import ModalContent from "./ModalContent";
import ModalSkills from "./ModalSkills";
import ModalContribution from "./ModalContribution";
import { useOnclickOutside } from "@/hooks/useOnClickOutSide";
import ModalReview from "./ModalReview/ModalReview";
import ModalCloseButton from "./ModalCloseButton";
import { ProjectModalProps } from "@/types/types";
import { twMerge } from "tailwind-merge";

const ProjectModal = ({ setIsClick, data, bgType }: ProjectModalProps) => {
  const backRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  useOnclickOutside(backRef, () => {
    setIsClick(false);
  });

  const backgroundList = {
    auction: "bg-[#222]",
    quiz: "bg-[#b8c2f2]",
    market: "bg-[#81cc84]",
    default: "bg-[#e0dcce]",
  };

  return (
    <div className="absolute w-full z-[9999]">
      <div className="fixed inset-0 flex">
        <div className="w-full  flex justify-center overflow-auto bg-[black] bg-opacity-50 backdrop-blur-[2px] scrollbar-hide animate-opacity-on">
          <div
            ref={backRef}
            className={twMerge(
              "w-[1100px] m-3 pb-5 overflow-y-auto rounded-lg scrollbar-hide",
              backgroundList[bgType]
            )}
          >
            <div className="w-full mx-auto flex flex-col items-center">
              <ModalCloseButton onClick={() => setIsClick(false)} />
              <ModalImage data={data} bgType={bgType} />
              <ModalContent data={data} bgType={bgType} />
              <ModalReview data={data} bgType={bgType} />
              <ModalSkills data={data} bgType={bgType} />
              <ModalContribution
                data={data}
                bgType={bgType}
                isClicked={isClicked}
                handleClicked={handleClicked}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
