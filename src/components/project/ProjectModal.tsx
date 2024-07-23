import Image from "next/image";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { BiSolidRightArrow } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import Link from "next/link";
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

  const [images, setImages] = useState(0);
  const next = () => {
    setImages((prev) => (prev + 1 >= data.img.length ? 0 : prev + 1));
  };

  const prev = () => {
    setImages((prev) => (prev - 1 < 0 ? data.img.length - 1 : prev - 1));
  };

  const handleClicked = (index: number) => {
    setIsClicked((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="absolute w-full z-[9999]">
      <div className="fixed inset-0 flex">
        <div className=" w-full overflow-auto scrollbar-hide text-white transition-all duration-[0.3s] ease-out animate-scale-up">
          <div className="w-full fixed bg-[#5f83b1] h-[90px] top-0 flex justify-end px-10 items-center z-[9999]">
            <div
              className="w-[40px] h-[40px] flex items-center justify-center rounded-full border-[3px] cursor-pointer"
              onClick={() => setIsClick(false)}
            >
              <IoClose className="text-[32px]" />
            </div>
          </div>
          <div className="w-full mx-auto flex flex-col items-center mt-[90px] back_color">
            <div className="w-full flex flex-col items-center back_color p-4">
              <div className="font-bold text-5xl text-white fixed  top-5 z-[10000]">
                {data.title}
              </div>
              <div className="w-[1000px] h-[600px] rounded-xl overflow-hidden relative mt-10">
                <div className="flex z-10 absolute bottom-3 left-1/2 transform -translate-x-1/2">
                  {data.img.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full ml-2 bottom-3 left-[50%] transform -translate-x-1/2 bg-opacity-75 ${
                        index === images
                          ? "bg-[#21277b]"
                          : "bg-[#5f83b1] bg-opacity-15"
                      } `}
                    />
                  ))}
                </div>
                <button
                  className="absolute z-10 top-[50%] left-3 transform translate-y-[-50%] bg-[#5f83b1] bg-opacity-50 hover:bg-opacity-100 w-[30px] h-[30px] rounded-full flex justify-center items-center"
                  onClick={() => prev()}
                >
                  <MdKeyboardArrowLeft className="text-[20px]" />
                </button>
                <button
                  className="absolute z-10 top-[50%] right-3 transform translate-y-[-50%] bg-[#5f83b1] bg-opacity-50 hover:bg-opacity-100 w-[30px] h-[30px] rounded-full flex justify-center items-center"
                  onClick={() => next()}
                >
                  <MdKeyboardArrowRight className="text-[20px]" />
                </button>
                <Image
                  src={data.img[images]}
                  fill
                  sizes="1"
                  alt="프로젝트 이미지"
                />
              </div>
            </div>
            <div className="w-[1000px] text-black text-lg mt-10">
              <p>{data.detail}</p>
              <Link href={data.github} target="_blank">
                <div className="flex flex-col justify-center items-center mt-10">
                  <FaGithub className="text-5xl" />
                  <p className="text-xl text-[#9e9e9e]">Github</p>
                </div>
              </Link>
            </div>
            <div className="w-[1000px] mt-10">
              <div className="mb-10">
                <div className="flex items-center mb-3">
                  <div className="w-[22px] h-[22px] relative mr-2">
                    <Image
                      src={"/images/option.svg"}
                      fill
                      sizes="1"
                      alt="아이콘"
                    />
                  </div>
                  <p className="text-3xl font-bold text-[#5f83b1]">SKILLS</p>
                </div>
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
            <div className="w-[1000px] mt-10">
              <div className="mb-10">
                <div className="flex items-center mb-3">
                  <div className="w-[23px] h-[23px] relative mr-2">
                    <Image
                      src={"/images/people.svg"}
                      fill
                      sizes="1"
                      alt="아이콘"
                    />
                  </div>
                  <p className="text-3xl font-bold text-[#5f83b1]">
                    나의 기여도
                  </p>
                </div>
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
