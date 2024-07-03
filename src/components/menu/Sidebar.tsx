"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const param = usePathname();
  console.log(param);

  return (
    <div
      className={`${
        param === "/" || param === "/about"
          ? "w-full h-screen"
          : param === "/skills"
          ? "w-[300px]"
          : "w-[750px]"
      }  px-5 transition-all duration-[0.3s] ease-out`}
    >
      <div className="mt-10">
        <div
          className={`flex ${
            param === "/" || param === "/about"
              ? "items-start"
              : " items-center"
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
          <div className="ml-4 text-[20px]">
            <p className="font-bold">Frontend</p>
            <p>김민영</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
