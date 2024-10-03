import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import MyInfo from "./MyInfo";

type ContentProps = {
  param: string;
};

const Content = ({ param }: ContentProps) => {
  return (
    <div
      className={`ml-12 ${
        param === "/" || param === "/about" ? "block" : "hidden"
      }`}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="font-bold text-[24px] leading-none text-[#ffa68b]"
      >
        HI! HOW ARE YOU?
      </motion.div>
      <div>
        <span className="font-bold text-[40px] text-red-600 max-[1135px]:text-[30px] max-[680px]:text-[24px] max-[600px]:text-[20px]">
          I&apos;M&nbsp;
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
          className="relative text-[40px] max-[1135px]:text-[30px] max-[680px]:text-[24px] max-[600px]:text-[20px] font-bold text-[#5D4037]"
          repeat={Infinity}
        />
      </div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-3 font-bold text-[#2C2C2E]"
      >
        <p>안녕하세요, 저는 프론트엔드 개발자 김민영입니다.</p>
        <p>
          비전공자이며 코로나로 인해 항공 서비스업에서 개발자로 도전하게
          되었습니다.
        </p>
        <p>
          새로운 기술에 관심이 많으며 동료들과의 커뮤니케이션과 상호 피드백 및
          리뷰를 좋아합니다.
        </p>
        <p>현재 프론트엔드 개발자로 구직중입니다.</p>
        <p>
          맡은 일에 자부심을 갖고 도전을 경험할 수 있는 회사에서 일하고
          싶습니다.
        </p>
      </motion.div>
      <MyInfo />
    </div>
  );
};

export default Content;
