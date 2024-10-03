"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
import Section01 from "@/components/menu/section01/Section01";
import Section02 from "@/components/menu/section02/Section02";
const Main = () => {
  const param = usePathname();
  return (
    <div className={`pb-10 `}>
      <Section01 param={param} />
      <Section02 param={param} />
      <Link href={"/skills"} className={`flex justify-center`}>
        <div className="mt-20 font-bold border py-5 px-5 w-fit flex justify-center rounded-full bg-[#e65124] text-white hover:border-[#e65124] hover:bg-white hover:text-[#e65124]">
          MORE ABOUT ME
        </div>
      </Link>
    </div>
  );
};

export default Main;
