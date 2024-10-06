import Link from "next/link";
import React from "react";

const MenuTitle = () => {
  return (
    <Link href={"/"} className="text-center">
      <p className="font-bold text-3xl text-[#e65124] transform transition-all duration-[0.3s] ease-out max-[1230px]:hidden">
        PORTFOLIO
      </p>
      <p className="font-bold text-3xl max-[1230px]:text-[16px] max-[1230px]:leading-[16px] text-[#e65124] transform transition-all duration-[0.3s] ease-out hidden max-[1230px]:inline">
        {`PORT\nFOLIO`}
      </p>
    </Link>
  );
};

export default MenuTitle;
