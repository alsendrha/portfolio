"use client";

import React from "react";
import { IoPersonSharp } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { BiSolidBookContent } from "react-icons/bi";
import { BsFillPersonVcardFill } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub } from "react-icons/fa";
const Menubar = () => {
  const pathName = usePathname();
  const menu = [
    { name: "ABOUT ME", icon: <IoPersonSharp />, link: "/about" },
    { name: "SKILLS", icon: <FaBook />, link: "/skills" },
    { name: "PROJECT", icon: <BiSolidBookContent />, link: "/project" },
    {
      name: "GITHUB",
      icon: <FaGithub />,
      link: "https://github.com/alsendrha",
    },
  ];

  return (
    <div className="w-[290px] max-[1200px]:w-fit p-1 h-fit sticky top-0 ">
      <div className="mt-10 px-5">
        <div className="px-2">
          <Link href={"/"}>
            <p className="font-bold text-3xl text-[#21277b] transform transition-all duration-[0.3s] ease-out max-[1200px]:text-[16px]">
              PORTFOLIO
            </p>
          </Link>
        </div>
        <div className="mt-10 text-[20px]">
          {menu.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              target={item.name === "GITHUB" ? "_blank" : "_self"}
              className="max-[1200px]:flex  max-[1200px]:justify-center"
            >
              <div className="flex items-center p-2 mt-2 text-[#5f83b1] rounded-[10px] group hover:bg-[#9ad9ea] hover:bg-opacity-20 max-[1200px]:w-fit max-[1200px]:rounded-full max-[1200px]:p-5 max-[1200px]:bg-white max-[1200px]:mt-5">
                <div className="group-hover:scale-110">{item.icon}</div>
                <p
                  className={`ml-3  ${
                    pathName === item.link ||
                    (pathName === "/" && item.link === "/about")
                      ? "font-bold"
                      : "font-light"
                  } max-[1200px]:hidden`}
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
