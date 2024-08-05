import React from "react";

type ButtonType = {
  ButtonSt: "default" | "card";
};

const Button = ({ ButtonSt }: ButtonType) => {
  const ButtonType = {
    default:
      "mt-20 font-bold border py-5 px-5 w-fit flex justify-center rounded-full bg-[#21277b] text-white hover:border-[#21277b] hover:bg-white hover:text-[#21277b]",
    card: "border max-[580px]:hidden text-nowrap border-[#21277b] rounded-2xl bg-[#21277b] hover:bg-white text-white max-[860px]:text-xs hover:text-[#21277b] px-3 max-[860px]:px-1 py-2 cursor-pointer",
  };

  return <button className={`${ButtonType[ButtonSt]}`}>Button</button>;
};

export default Button;
