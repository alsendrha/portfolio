import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { BiSolidRightArrow } from "react-icons/bi";
import ModalTitle from "./ModalTitle";
import ModalImage from "./ModalImage";
import ModalContent from "./ModalContent";
import ModalSubTitle from "./ModalSubTitle";

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
    Array(data.myJob.length).fill(false)
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
    <div className="absolute w-full z-[9999]">
      <div className="fixed inset-0 flex">
        <div className=" w-full overflow-auto scrollbar-hide text-white transition-all duration-[0.3s] ease-out animate-scale-up">
          <div className="w-full fixed bg-[#ffa68b] h-[90px] top-0 flex justify-end px-10 items-center z-[9999]">
            <div
              className="w-[40px] h-[40px] flex items-center justify-center rounded-full border-[3px] cursor-pointer"
              onClick={() => setIsClick(false)}
            >
              <IoClose className="text-[32px]" />
            </div>
          </div>
          <div className="w-full mx-auto flex flex-col items-center mt-[90px] back_color">
            <ModalTitle title={data.title} />
            <ModalImage data={data} />
            <ModalContent data={data} />
            <div className="w-[1000px] max-[1020px]:w-[800px] max-[810px]:w-[600px] max-[610px]:w-[450px] mt-10">
              <div className="mb-10">
                <ModalSubTitle iconUrl="/images/option.svg" title="SKILLS" />
                <div className="w-full bg-[#c6c6c6] rounded-xl p-3 ">
                  {data.tech.map((tech, index) => (
                    <div
                      key={index}
                      className="w-full p-3 text-xl text-black rounded-xl bg-white my-5"
                    >
                      {index + 1}.&nbsp;{tech.replace(/,/g, "")}
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
                      <div className="w-full p-3 text-xl flex items-center text-black  bg-[#c6c6c6] rounded-xl my-2 cursor-pointer">
                        <BiSolidRightArrow
                          className={`text-sm transform transition-all duration-[0.3s] ease-out  ${
                            isClicked[index] ? "rotate-90" : ""
                          }`}
                        />
                        &nbsp;
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
