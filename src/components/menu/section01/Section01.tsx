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
      <Title numberTitle="01" title="PROFILE" />
      <div className="flex max-[1060px]:block mt-10 max-[600px]:mt-0 ml-20 max-[1060px]:ml-3 relative px-5 transition-all duration-[0.3s] ease-out">
        <div>
          <div className="flex">
            <div className="w-[240px] h-[300px]  rounded-lg max-[1060px]:ml-11 max-[1060px]:mb-10 relative overflow-hidden transition-all duration-[0.3s] ease-out">
              <Image
                src={"/images/my_photo.jpg"}
                fill
                sizes="1"
                alt="프로필 이미지"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <Content param={param} />
      </div>
    </section>
  );
};

export default Section01;
