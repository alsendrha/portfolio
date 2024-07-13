"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const Sidebar = () => {
  const param = usePathname();
  console.log(param);

  return (
    <div
      className={`${
        param === "/" || param === "/about"
          ? "w-full h-screen flex"
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
                ? "w-[250px] h-[250px] shadow-lg"
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
      <div
        className={`ml-24 mt-10 ${
          param === "/" || param === "/about" ? "block" : "hidden"
        }`}
      >
        <div className="font-bold text-2xl">HI! HOW ARE YOU?</div>
        <h1 className="relative text-[40px]">
          I'M&nbsp;
          <span className="">
            <strong>MIN YOUNG</strong>
            <strong>WEB DEVELOPER</strong>
          </span>
        </h1>
        <div className="mt-3 font-bold">
          <p>안녕하세요, 저는 김민영입니다.</p>
          <p>
            새로운 기술에 관심이 많으며 동료들과의 커뮤니케이션과 상호 피드백 및
            리뷰를
          </p>
          <p>
            좋아합니다. 현재 프론트엔드 개발자로 구직중입니다. 맡은 일에
            자부심을 갖고 도전을
          </p>
          <p>경험할 수 있는 회사에서 일하고 싶습니다.</p>
        </div>
        <div className="mt-20">
          <div className="font-bold text-2xl mb-3">
            <p>PERSONAL INFOS</p>
          </div>
          <div className="flex">
            <div className="mr-32">
              <p className="mb-3">Name: 김민영</p>
              <p className="mb-3">Phone: 010.9898.7069</p>
              <p className="mb-3">Email: alsendrha@naver.com</p>
            </div>
            <div>
              <p className="mb-3">Age: 39, 1986.08</p>
              <p className="mb-3">Address: 서울시 서대문구</p>
            </div>
          </div>
        </div>
        <Link href={"/skills"}>
          <div className="mt-10 font-bold border py-5 px-5 w-fit flex justify-center rounded-full bg-black text-white hover:border hover:bg-white hover:text-black">
            MORE ABOUT ME
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
