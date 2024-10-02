"use client";

import Section01 from "./section01/Section01";
import Section02 from "./section02/Section02";
import { usePathname } from "next/navigation";

import Link from "next/link";
const Sidebar = () => {
  const param = usePathname();
  return (
    <div
      className={`pb-10 ${
        param === "/" || param === "/about"
          ? "block"
          : param === "/project"
          ? "max-[1500px]:hidden"
          : "max-[860px]:hidden"
      }`}
    >
      <Section01 param={param} />
      <Section02 param={param} />
      <Link
        href={"/skills"}
        className={`max-[1060px]: flex justify-center ${
          param === "/" || param === "/about" ? "block" : "hidden"
        }`}
      >
        <div className="mt-20 font-bold border py-5 px-5 w-fit flex justify-center rounded-full bg-[#e65124] text-white hover:border-[#e65124] hover:bg-white hover:text-[#e65124]">
          MORE ABOUT ME
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
