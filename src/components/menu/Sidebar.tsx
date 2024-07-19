"use client";

import Section01 from "./section01/Section01";
import Section02 from "./section02/Section02";
import { usePathname } from "next/navigation";

import Link from "next/link";
const Sidebar = () => {
  const param = usePathname();
  console.log(param);
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
        className={`ml-20 max-[1060px]:ml-10 flex justify-center ${
          param === "/" || param === "/about" ? "block" : "hidden"
        }`}
      >
        <div className="mt-20 font-bold border py-5 px-5 w-fit flex justify-center rounded-full bg-[#21277b] text-white hover:border-[#21277b] hover:bg-white hover:text-[#21277b]">
          MORE ABOUT ME
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
