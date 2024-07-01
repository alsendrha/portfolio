"use client";

import Image from "next/image";
import { IoPersonSharp } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { BiSolidBookContent } from "react-icons/bi";
import { BsFillPersonVcardFill } from "react-icons/bs";
const Main = () => {
  return (
    <>
      <div className="w-full flex">
        <div className="w-[290px] h-[100vh] p-1">
          <div className="mt-10 ml-5">
            <div>
              <p className="font-bold text-[24px]">PORTFOLIO</p>
            </div>
            <div className="mt-10 text-[20px]">
              <div className="flex items-center">
                <IoPersonSharp />
                <p className="ml-3">ABOUT ME</p>
              </div>
              <div className="flex items-center mt-6">
                <FaBook />
                <p className="ml-3">SKILLS</p>
              </div>
              <div className="flex items-center mt-6">
                <BiSolidBookContent />
                <p className="ml-3">PROJECT</p>
              </div>
              <div className="flex items-center mt-6">
                <BsFillPersonVcardFill />
                <p className="ml-3">CAREER</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex">
          <div className="w-full h-[100vh] border-l border-gray-300">
            <div className="border w-full h-[100px]">
              <p>ddd</p>
            </div>
            <div className="px-10 mt-10">
              <div className="border w-full h-[500px]"></div>
            </div>
          </div>
          <div className="w-[750px] h-[100vh] bg-green-500 px-5">
            <div className="mt-10">
              <div className="flex items-center">
                <div className="w-[80px] h-[80px] rounded-full bg-gray-500" />
                <div className="ml-4 text-[20px]">
                  <p className="font-bold">Frontend</p>
                  <p>김민영</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
