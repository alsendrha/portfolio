import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

type ModalContentProps = {
  data: {
    detail: string;
    github: string;
  };
};

const ModalContent = ({ data }: ModalContentProps) => {
  return (
    <div className="w-[1000px] max-[1020px]:w-[800px] max-[810px]:w-[600px] max-[610px]:w-[450px] text-black text-lg mt-10">
      <p>{data.detail}</p>
      <div className="mt-10 flex flex-col justify-center items-center">
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
  );
};

export default ModalContent;
