import { projectData } from "@/data/ProjectData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopList = () => {
  return (
    <div className="w-full max-[1500px]:w-[800px] max-[1060px]:w-[600px] max-[860px]:w-[450px] max-[580px]:w-[400px] max-[1500px]:mx-auto h-[100px] flex items-center px-10 max-[1500px]:px-0 my-5">
      {projectData.map((data) => (
        <Link href={data.link} key={data.id} target="_blank">
          <div className="w-[80px] h-[80px] mr-5 rounded-full border relative overflow-hidden">
            <Image
              src={data.img[0]}
              fill
              sizes="1"
              className="object-cover"
              alt="탑 이미지"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TopList;
