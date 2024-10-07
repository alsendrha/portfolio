import Image from "next/image";
import React from "react";

const MyImage = () => {
  return (
    <div className="w-full flex max-[1230px]:justify-center">
      <div className="mt-8 w-[200px] h-[260px] rounded-lg relative overflow-hidden transition-all duration-[0.3s] ease-out">
        <Image
          src={"/images/my_photo.jpg"}
          fill
          sizes="1"
          alt="프로필 이미지"
          className="object-cover"
          quality={75}
        />
      </div>
    </div>
  );
};

export default MyImage;
