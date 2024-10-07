import { backColorList } from "@/types/types";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

type ModalContentProps = {
  data: {
    detail: string;
    github: string;
  };
  bgType: "auction" | "quiz" | "market" | "default";
};

const ModalContent = ({ data, bgType }: ModalContentProps) => {
  return (
    <div className=" mt-5 w-[1000px] flex items-start max-[1020px]:w-[800px] max-[810px]:w-[600px] max-[610px]:w-[450px] text-black text-lg">
      <div className={twMerge("flex p-2 rounded-xl", backColorList[bgType])}>
        <p>{data.detail}</p>
        <div className="flex flex-col justify-start items-center">
          <Link
            href={data.github}
            target="_blank"
            className="flex flex-col justify-center items-center "
          >
            <FaGithub className="text-5xl" />
            <p className="text-xl text-[#9e9e9e]">Github</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
