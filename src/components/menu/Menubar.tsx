"use client";

import React from "react";
import { IoPersonSharp } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { BiSolidBookContent } from "react-icons/bi";
import { BsFillPersonVcardFill } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menubar = () => {
  const pathName = usePathname();
  const menu = [
    { name: "ABOUT ME", icon: <IoPersonSharp />, link: "/about" },
    { name: "SKILLS", icon: <FaBook />, link: "/skills" },
    { name: "PROJECT", icon: <BiSolidBookContent />, link: "/project" },
    { name: "CAREER", icon: <BsFillPersonVcardFill />, link: "/career" },
  ];

  return (
    <div className="w-[290px] p-1 h-fit sticky top-0">
      <div className="mt-10 px-5">
        <div className="px-2">
          <Link href={"/"}>
            <p className="font-bold text-[24px]">PORTFOLIO</p>
          </Link>
        </div>
        <div className="mt-10 text-[20px]">
          {menu.map((item, index) => (
            <Link key={index} href={item.link} className="">
              <div className="flex items-center p-2 mt-2 rounded-[10px] group hover:bg-gray-100">
                <div className="group-hover:scale-110">{item.icon}</div>
                <p
                  className={`ml-3  ${
                    pathName === item.link ? "font-bold" : "font-light"
                  }`}
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
