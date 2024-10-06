import { skillData } from "@/data/ProjectData";
import Image from "next/image";
import React from "react";

const MySkills = () => {
  return (
    <div className="mt-16">
      <div className="font-bold text-2xl mb-5">
        <p className="text-[#ffa68b]">SKILLS</p>
      </div>
      <div className="flex flex-wrap max-[685px]:justify-center w-[450px] max-[685px]:w-[350px]">
        {skillData.map((item, index) => (
          <div key={index} className="flex flex-wrap">
            {item.img.map((img, index) => (
              <div key={index} className="w-[50px] h-[50px] mr-3 mb-3 relative">
                <Image src={img.img} fill sizes="1" alt="스킬이미지" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
