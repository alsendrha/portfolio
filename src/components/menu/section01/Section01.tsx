import Image from "next/image";

import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

type Section01Props = {
  param: string;
};

const Section01 = ({ param }: Section01Props) => {
  return (
    <section>
      <div
        className={`${
          param === "/" || param === "/about" ? "block" : "hidden"
        }`}
      >
        <div className="relative flex items-end ml-20 max-[1060px]:ml-6">
          <h2 className="text-[150px] max-[600px]:text-[100px] opacity-25 leading-[160px] font-bold">
            01
          </h2>
          <p className="absolute left-24 text-[50px] max-[600px]:text-[30px] max-[600px]:left-[65px] max-[600px]:bottom-7 font-bold">
            PROFILE
          </p>
        </div>
      </div>
      <div
        className={`${
          param === "/" || param === "/about"
            ? "flex max-[1060px]:block mt-10 max-[600px]:mt-0 ml-20 max-[1060px]:ml-3 relative"
            : param === "/skills"
            ? "w-[300px]"
            : "w-[450px]"
        }  px-5 transition-all duration-[0.3s] ease-out`}
      >
        <div
          className={` ${param === "/" || param === "/about" ? "" : "mt-10"}`}
        >
          <div
            className={`flex ${
              param === "/" || param === "/about"
                ? "items-start"
                : "items-center"
            }`}
          >
            <div
              className={`${
                param === "/" || param === "/about"
                  ? "w-[250px] h-[300px] shadow-lg rounded-lg max-[1060px]:ml-11 max-[1060px]:mb-10 "
                  : "w-[80px] h-[80px] rounded-full border"
              }    relative overflow-hidden transition-all duration-[0.3s] ease-out`}
            >
              <Image
                src={"/images/my_photo.jpg"}
                fill
                sizes="1"
                alt="프로필 이미지"
                className="object-cover"
              />
            </div>

            <div
              className={`${
                param === "/" || param === "/about" ? "hidden" : "block"
              } ml-4 text-[20px]`}
            >
              <p className="font-bold text-[#21277b]">FRONTEND</p>
              <p>김민영</p>
            </div>
          </div>
        </div>
        <div
          className={`ml-12 ${
            param === "/" || param === "/about" ? "block" : "hidden"
          }`}
        >
          <div className="font-bold text-[24px] leading-none text-[#5f83b1]">
            HI! HOW ARE YOU?
          </div>
          <div>
            <span className="font-bold text-[40px] text-red-600 max-[1135px]:text-[30px] max-[680px]:text-[24px] max-[600px]:text-[20px]">
              I'M{" "}
            </span>
            <TypeAnimation
              sequence={[
                "MIN YOUNG",
                2000,
                "WEB DEVELOPER",
                2000,
                "FRONTEND DEVELOPER",
                2000,
              ]}
              wrapper="span"
              preRenderFirstString={false}
              speed={70}
              className="relative text-[40px] max-[1135px]:text-[30px] max-[680px]:text-[24px] max-[600px]:text-[20px] font-bold text-[#21277b]"
              repeat={Infinity}
            />
          </div>
          {/* <h1 className="relative text-[40px]">
          I'M&nbsp;
          <span className="">
            <strong>MIN YOUNG</strong>
            <strong>WEB DEVELOPER</strong>
          </span>
        </h1> */}
          <div className="mt-3 font-bold max-[1350px]:">
            <p>안녕하세요, 저는 김민영입니다.</p>
            <p>
              비전공자이며 코로나로 인해 서비스업에서 개발자로 전향하였습니다.
            </p>
            <p>
              새로운 기술에 관심이 많으며 동료들과의 커뮤니케이션과 상호 피드백
              및 리뷰를 좋아합니다.
            </p>
            <p>현재 프론트엔드 개발자로 구직중입니다.</p>
            <p>
              {" "}
              맡은 일에 자부심을 갖고 도전을 경험할 수 있는 회사에서 일하고
              싶습니다.
            </p>
          </div>
          <div className="mt-32 max-[1060px]:mt-10">
            <div className="font-bold text-2xl mb-5">
              <p className="text-[#5f83b1]">PERSONAL INFOS</p>
            </div>
            <div className="flex font-semibold max-[1060px]:block">
              <div className="mr-32">
                <p className="mb-3">
                  <span className="text-[#21277b]">Name</span> : 김민영
                </p>
                <p className="mb-3">
                  <span className="text-[#21277b]">Phone</span> : 010.9898.7069
                </p>
                <p className="mb-3">
                  <span className="text-[#21277b]">Email</span> :
                  alsendrha@naver.com
                </p>
              </div>
              <div>
                <p className="mb-3">
                  <span className="text-[#21277b]">Age</span> : 39, 1986.08
                </p>
                <p className="mb-3">
                  <span className="text-[#21277b]">Address</span> : 서울시
                  서대문구
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section01;
