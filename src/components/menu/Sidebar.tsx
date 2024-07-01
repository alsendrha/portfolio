import React from "react";

const Sidebar = () => {
  return (
    <div className="w-[750px] bg-green-500 px-5">
      <div className="mt-10">
        <div className="flex items-center">
          <div className="w-[80px] h-[80px] rounded-full bg-gray-500" />
          <div className="ml-4 text-[20px]">
            <p className="font-bold">Frontend</p>
            <p>김민영</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
