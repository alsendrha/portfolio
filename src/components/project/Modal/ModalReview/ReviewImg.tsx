import Image from "next/image";
import React from "react";

type ReviewImgProps = {
  src: string;
};

const ReviewImg = ({ src }: ReviewImgProps) => {
  return (
    <div className="w-[750px] max-[1500px]:w-full h-[500px] max-[1500px]:h-[600px] max-[1200px]:h-[500px]  max-[900px]:h-[350px] max-[680px]:h-[250px] max-[550px]:h-[220px] flex-shrink-0 rounded-xl overflow-hidden relative transform transition-all duration-[0.3s] ease-out">
      <Image
        src={src}
        fill
        sizes="1"
        className="object-fill rounded-xl"
        alt="리뷰이미지"
      />
    </div>
  );
};

export default ReviewImg;
