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
            className="w-[280px] h-[300px] border m-3 rounded-xl overflow-hidden relative
            hover:before:absolute hover:before:top-[-50%] hover:before:bottom-[-50%] hover:before:left-[-50%] hover:before:right-[-50%] hover:before:bg-gradient-conic hover:before:from-transparent hover:before:to-black before:animate-spin-slow"
          >
            <div className="absolute top-1 left-1 right-1 bottom-1 p-3 rounded-lg bg-white">
              <div className="flex items-center">
                <div className="w-[100px] h-[50px] relative">
                  <Image
                    src={item.img}
                    fill
                    sizes="1"
                    className="object-contain object-left"
                    alt="스킬 이미지"
                  />
                </div>
                <p className="ml-5 text-xl">{item.name}</p>
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
