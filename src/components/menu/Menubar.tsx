"use client";

import React from "react";
import { IoPersonSharp } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { BiSolidBookContent } from "react-icons/bi";
import { BsFillPersonVcardFill } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import MenuTitle from "./MenuTitle";
const Menubar = () => {
  const pathName = usePathname();
  const menu = [
    { name: "ABOUT ME", icon: <IoPersonSharp />, link: "/about" },
    //{ name: "SKILLS", icon: <FaBook />, link: "/skills" },
    { name: "PROJECT", icon: <BiSolidBookContent />, link: "/project" },
    {
      name: "GITHUB",
      icon: <FaGithub />,
      link: "https://github.com/alsendrha",
    },
  ];

  return (
    <div className="w-[200px] max-[1230px]:w-fit h-fit sticky top-0">
      <div className="mt-10 px-5 flex flex-col items-center max-[1230px]:px-2">
        <MenuTitle />
        <div className="mt-10 text-[20px]">
          {menu.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              target={item.name === "GITHUB" ? "_blank" : "_self"}
              className="max-[1230px]:flex max-[1230px]:justify-center"
            >
              <div className="flex relative items-center p-2 text-[#ffa68b] rounded-[10px] group hover:bg-[#9ad9ea] hover:bg-opacity-20 max-[1230px]:w-fit max-[1230px]:rounded-full max-[1230px]:p-5 max-[1230px]:bg-white max-[1230px]:mt-3">
                <div className="group-hover:scale-110 group-hover:max-[1230px]:opacity-0">
                  {item.icon}
                </div>
                <div className="hidden absolute text-[11px] font-bold w-[65px] items-center justify-center  rounded-full group-hover:max-[1230px]:flex left-1/2 transform -translate-x-1/2">
                  {item.name}
                </div>
                <p
                  className={`ml-3  ${
                    pathName === item.link ||
                    (pathName === "/" && item.link === "/about")
                      ? "font-bold"
                      : "font-light"
                  } max-[1230px]:hidden`}
                >
                  {item.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menubar;
