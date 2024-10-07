import React, { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { BiSolidRightArrow } from "react-icons/bi";
import ModalTitle from "./ModalTitle";
import ModalImage from "./ModalImage";
import ModalContent from "./ModalContent";
import ModalSubTitle from "./ModalSubTitle";
import Image from "next/image";
import ModalSkills from "./ModalSkills";
import ModalContribution from "./ModalContribution";
import { useOnclickOutside } from "@/hooks/useOnClickOutSide";

type ProjectModalProps = {
  setIsClick: React.Dispatch<React.SetStateAction<boolean>>;
  data: {
    id: number;
    img: string[];
    title: string;
    content: string;
    detail: string;
    github: string;
    date: string;
    people: string;
    myJob: {
      name: string;
      content: string;
    }[];
    tech: string[];
    link: string;
    link2: string;
    techImg: string[];
  };
};

const ProjectModal = ({ setIsClick, data }: ProjectModalProps) => {
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

  return (
    <div className="absolute w-full z-[9999]">
      <div className="fixed inset-0 flex">
        <div className="w-full flex justify-center overflow-auto bg-[black] bg-opacity-50 backdrop-blur-[2px] scrollbar-hide animate-opacity-on">
          <div
            ref={backRef}
            className="w-[1100px] m-3 overflow-y-auto rounded-lg scrollbar-hide"
          >
            <div className="w-full mx-auto flex flex-col items-center back_color">
              <div className="w-full sticky top-3 flex justify-end px-3 z-50">
                <div
                  className="w-[25px] h-[25px] flex items-center justify-center border-[#ffa68b] rounded-full border-[3px] cursor-pointer"
                  onClick={() => setIsClick(false)}
                >
                  <IoClose className="text-[24px] text-[#ffa68b]" />
                </div>
              </div>
              {/* <ModalTitle title={data.title} /> */}
              <ModalImage data={data} />
              <ModalContent data={data} />
              <ModalSkills data={data} />
              <ModalContribution
                data={data}
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
