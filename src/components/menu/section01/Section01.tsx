import Image from "next/image";

import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Title from "../Title";
import Content from "./Content";
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
        <Title numberTitle="01" title="PROFILE" />
      </div>
      <div
        className={`${
          param === "/" || param === "/about"
            ? "flex max-[1060px]:block mt-10 max-[600px]:mt-0 ml-20 max-[1060px]:ml-3 relative"
            : param === "/skills"
            ? "w-[300px]"
            : "w-[300px]"
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
                  ? "w-[250px] h-[300px] rounded-lg max-[1060px]:ml-11 max-[1060px]:mb-10 "
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
              <p className="font-bold text-[#e65124]">FRONTEND</p>
              <p className="text-[#2C2C2E]">김민영</p>
            </div>
          </div>
        </div>
        <Content param={param} />
      </div>
    </section>
  );
};

export default Section01;
