"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const Sidebar = () => {
  const param = usePathname();
  console.log(param);

  return (
    <div
      className={`${
        param === "/" || param === "/about"
          ? "w-full h-screen flex justify-center"
          : param === "/skills"
          ? "w-[300px]"
          : "w-[750px]"
      }  px-5 transition-all duration-[0.3s] ease-out`}
    >
      <div className="mt-10">
        <div
          className={`flex ${
            param === "/" || param === "/about" ? "items-start" : "items-center"
          }`}
        >
          <div
            className={`${
              param === "/" || param === "/about"
                ? "w-[250px] h-[250px]"
                : "w-[80px] h-[80px]"
            }  rounded-full border relative overflow-hidden transition-all duration-[0.3s] ease-out`}
          >
            <Image
              src={"/images/images.png"}
              fill
              sizes="1"
              alt="프로필 이미지"
            />
          </div>
          <div
            className={`${
              param === "/" || param === "/about" ? "hidden" : "block"
            } ml-4 text-[20px]`}
          >
            <p className="font-bold">Frontend</p>
            <p>김민영</p>
          </div>
        </div>
      </div>
      <div className="ml-24 mt-10">
        <div className="font-bold text-2xl">HI! HOW ARE YOU?</div>
        <h1 className="relative">
          I'M
          <span className="">
            <strong>MIN YOUNG</strong>
            <strong>WEB DEVELOPER</strong>
          </span>
        </h1>
        <div>
          <p>안녕하세요, 저는 김민영입니다</p>
          <p>안녕하세요, 저는 김민영입니다</p>
          <p>안녕하세요, 저는 김민영입니다</p>
          <p>안녕하세요, 저는 김민영입니다</p>
          <p>안녕하세요, 저는 김민영입니다</p>
        </div>
        <div>
          <div>
            <p>PERSONAL INFOS</p>
          </div>
          <div>
            <p>Name: 김민영</p>
            <p>Age: 39, 1986.08</p>
            <p>Phone: 010.9898.7069</p>
            <p>Address: 서울시 서대문구</p>
            <p>Email: alsendrha@naver.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
