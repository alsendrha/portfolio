"use client";

import React from "react";
import { motion } from "framer-motion";

const Content = () => {
  return (
    <div className="mt-10">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="font-bold text-[#2C2C2E]"
      >
        <p>
          저는 비전공자이며 코로나로 인해 항공 서비스업에서 개발자로 도전하게
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
    </div>
  );
};

export default Content;
