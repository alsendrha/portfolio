import React from "react";
import Title from "../Title";
import Content from "./Content";
import MyImage from "./MyImage";
import MyTopContent from "./MyTopContent";
import MySkills from "./MySkills";
import MyInfo from "./MyInfo";

const Section01 = () => {
  return (
    <section className="">
      <Title numberTitle="01" title="PROFILE" />
      <div className="w-full flex justify-between max-[1060px]:text-center max-[1060px]:flex-col max-[1060px]:items-center mt-10 relative transition-all duration-[0.3s] ease-out">
        <div>
          <MyTopContent />
          <MyImage />
          <Content />
        </div>
        <div className="">
          <MyInfo />
          <MySkills />
        </div>
      </div>
    </section>
  );
};

export default Section01;
