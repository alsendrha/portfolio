"use client";

import Image from "next/image";
import React, { useState } from "react";
import { SlOptions } from "react-icons/sl";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { projectData } from "@/data/ProjectData";

const Project = () => {
  const [imageIndices, setImageIndices] = useState(projectData.map(() => 0));

  const next = (projectId: number) => {
    setImageIndices((prevIndices) =>
      prevIndices.map((imgIndex, index) =>
        index === projectId
          ? (imgIndex + 1) % projectData[projectId].img.length
          : imgIndex
      )
    );
  };

  const prev = (projectId: number) => {
    setImageIndices((prevIndices) =>
      prevIndices.map((imgIndex, index) =>
        index === projectId
          ? (imgIndex - 1 + projectData[projectId].img.length) %
            projectData[projectId].img.length
          : imgIndex
      )
    );
  };

  return (
    <div className="w-full border-gray-300">
      <div className="border w-full h-[100px]">
        <p>ddd</p>
      </div>
      <div className="px-10 my-10">
        {projectData.map((data) => (
          <div
            key={data.id}
            className="w-full my-5 relative border-b pb-10 last:border-b-0"
          >
            <div
              className="flex justify-between items-center
                "
            >
              <div className="flex items-center">
                <div className="w-[50px] h-[50px] rounded-full bg-[gray]" />
                <div className="ml-3">
                  <div className="flex items-center">
                    <p className="font-bold">{data.title}&nbsp;·&nbsp;</p>
                    <p className="">{data.date}</p>
                  </div>
                  <p className="text-sm">{data.content}</p>
                </div>
              </div>
              <div>
                <SlOptions />
              </div>
            </div>
            <div className="mt-3">
              <div className="w-full h-[500px] relative">
                <div className="flex z-10 absolute bottom-3 left-1/2 transform -translate-x-1/2">
                  {data.img.map((img, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full ml-2 bottom-3 left-[50%] transform -translate-x-1/2 bg-opacity-75 ${
                        imageIndices[data.id] === index
                          ? "bg-gray-200"
                          : "bg-gray-500"
                      } `}
                    />
                  ))}
                </div>
                <button
                  className="absolute z-10 top-[50%] left-3 transform translate-y-[-50%] bg-white bg-opacity-50 hover:bg-opacity-100 w-[30px] h-[30px] rounded-full flex justify-center items-center"
                  onClick={() => prev(data.id)}
                >
                  <MdKeyboardArrowLeft className="text-[20px]" />
                </button>
                <button
                  className="absolute z-10 top-[50%] right-3 transform translate-y-[-50%] bg-white bg-opacity-50 hover:bg-opacity-100 w-[30px] h-[30px] rounded-full flex justify-center items-center"
                  onClick={() => next(data.id)}
                >
                  <MdKeyboardArrowRight className="text-[20px]" />
                </button>

                <Image
                  src={data.img[imageIndices[data.id]]}
                  fill
                  sizes="1"
                  className="object-cover -z-10"
                  alt="프로젝트 이미지"
                />
              </div>
              {/* <div className="mt-5">
                <p>d</p>
              </div> */}
              <div>
                <div className="flex items-center mt-3">
                  <p className="font-bold text-nowrap">
                    개발 인원&nbsp;:&nbsp;
                  </p>
                  <p>{data.people}</p>
                </div>
                <div className="flex items-center mt-3">
                  <p className="font-bold text-nowrap">
                    사용 기술&nbsp;:&nbsp;
                  </p>
                  {/* <p>{data.tech}</p> */}
                  {data.techImg.map((img, index) => (
                    <div key={index} className="w-full flex items-center">
                      <div className="w-full max-w-[90px] h-[40px] relative">
                        <Image
                          src={img}
                          fill
                          className="object-contain"
                          sizes="1"
                          alt="이미지"
                        />
                      </div>
                      <div>&nbsp;</div>
                    </div>
                  ))}
                </div>
                <div className="flex mt-3">
                  <p className="text-nowrap font-bold">
                    업&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;무&nbsp;:&nbsp;
                  </p>
                  <p>{data.myJob}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
