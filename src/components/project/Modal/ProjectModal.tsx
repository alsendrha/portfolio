import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { BiSolidRightArrow } from "react-icons/bi";
import ModalTitle from "./ModalTitle";
import ModalImage from "./ModalImage";
import ModalContent from "./ModalContent";
import ModalSubTitle from "./ModalSubTitle";
import Image from "next/image";
import ModalSkills from "./ModalSkills";
import ModalContribution from "./ModalContribution";

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

  return (
    <div className="absolute bg-white w-full z-[9999]">
      <div className="fixed inset-0 flex">
        <div className=" w-full overflow-auto scrollbar-hide text-white transition-all duration-[0.3s] ease-out animate-scale-up">
          <div className="w-full fixed  bg-opacity-70 h-[70px] top-0 flex justify-end px-10 items-center z-[9999]">
            <div
              className="w-[40px] h-[40px] flex items-center justify-center border-[#ffa68b] rounded-full border-[3px] cursor-pointer"
              onClick={() => setIsClick(false)}
            >
              <IoClose className="text-[32px] text-[#ffa68b]" />
            </div>
          </div>
          <div className="w-full mx-auto flex flex-col items-center back_color">
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
  );
};

export default ProjectModal;
