import { skillData } from "@/data/ProjectData";
import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div className="w-full px-4">
      <div className="mt-10">
        <p className="text-4xl font-bold">SKILLS</p>
      </div>
      <div className="w-full border my-2" />
      <div className="flex justify-center flex-wrap">
        {skillData.map((item, index) => (
          <div
            key={index}
            className="w-[300px] h-[330px] shadow-lg hover:shadow border mx-7 my-3 rounded-xl overflow-hidden relative
            hover:before:absolute hover:before:top-[-50%] hover:before:bottom-[-50%] hover:before:left-[-50%] hover:before:right-[-50%] hover:before:bg-gradient-conic hover:before:from-transparent hover:before:to-[#5f83b1] before:animate-spin-slow"
          >
            <div className="absolute top-[3px] left-[3px] right-[3px] bottom-[3px] p-4 rounded-lg bg-white">
              <div className="flex flex-col items-center">
                <div className="w-[100px] h-[50px] relative">
                  <Image
                    src={item.img}
                    fill
                    sizes="1"
                    className="object-contain"
                    alt="스킬 이미지"
                  />
                </div>
                <p className="mt-3 text-xl text-[#21277b] font-semibold">
                  {item.name}
                </p>
              </div>
              <div className="mt-4">
                <p className="whitespace-pre-wrap">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
