import React from "react";
import Title from "../Title";
import Content from "./Content";
import MyImage from "./MyImage";
import MyTopContent from "./MyTopContent";
import MySkills from "./MySkills";
import MyInfo from "./MyInfo";

const Section01 = () => {
  return (
    <section>
      <Title numberTitle="01" title="PROFILE" />
      <div className="w-full px-20 max-[1230px]:px-0 flex justify-between max-[1230px]:text-center max-[1230px]:flex-col max-[1230px]:items-center mt-20  max-[1230px]:mt-10 relative transition-all duration-[0.3s] ease-out">
        <div>
          <MyTopContent />
          <MyImage />
          <Content />
        </div>
        <div>
          <MyInfo />
          <MySkills />
        </div>
      </div>
    </section>
  );
};

export default Section01;
