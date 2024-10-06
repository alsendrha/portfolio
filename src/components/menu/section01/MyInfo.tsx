import React from "react";
import MyInfoText from "./MyInfoText";

const MyInfo = () => {
  return (
    <div className="max-[1230px]:mt-16">
      <div className="font-bold text-2xl mb-5">
        <p className="text-[#ffa68b]">PERSONAL INFOS</p>
      </div>
      <div className="flex font-semibold max-[1230px]:flex-col ">
        <div className="mr-10 max-[1230px]:mr-0">
          <MyInfoText title="Name" content="김민영" />
          <MyInfoText title="Phone" content="010.9898.7069" />
          <MyInfoText title="Email" content="alsendrha@naver.com" />
        </div>
        <div>
          <MyInfoText title="Age" content="39, 1986.08" />
          <MyInfoText title="Address" content="서울시 서대문구" />
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
