import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { BiSolidRightArrow } from "react-icons/bi";
import ModalTitle from "./ModalTitle";
import ModalImage from "./ModalImage";
import ModalContent from "./ModalContent";
import ModalSubTitle from "./ModalSubTitle";
import Image from "next/image";

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
          <div className="w-full fixed bg-[#ffa68b] bg-opacity-70 h-[70px] top-0 flex justify-end px-10 items-center z-[9999]">
            <div
              className="w-[40px] h-[40px] flex items-center justify-center rounded-full border-[3px] cursor-pointer"
              onClick={() => setIsClick(false)}
            >
              <IoClose className="text-[32px]" />
            </div>
          </div>
          <div className="w-full mx-auto flex flex-col items-center pt-[90px] back_color">
            <ModalTitle title={data.title} />
            <ModalImage data={data} />
            <ModalContent data={data} />
            <div className="w-[1000px] max-[1020px]:w-[800px] max-[810px]:w-[600px] max-[610px]:w-[450px] mt-10">
              <div className="mb-10">
                <ModalSubTitle iconUrl="/images/option.svg" title="SKILLS" />
                <div className=" flex max-[810px]:flex-col w-full rounded-xl p-3 ">
                  {data.techImg.map((tech, index) => (
                    <div className="w-[200px] h-[80px] mr-3 relative overflow-hidden">
                      <Image
                        src={tech}
                        fill
                        sizes="1"
                        className="object-contain"
                        alt="스킬 이미지"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-[1000px] max-[1020px]:w-[800px] max-[810px]:w-[600px] max-[610px]:w-[450px] mt-10">
              <div className="mb-10">
                <ModalSubTitle
                  iconUrl="/images/people.svg"
                  title="나의 기여도"
                />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
