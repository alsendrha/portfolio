import Image from "next/image";
import React from "react";

type ReviewImgProps = {
  src: string;
};

const ReviewImg = ({ src }: ReviewImgProps) => {
  return (
    <div className="w-[600px] max-[1020px]:w-full h-[380px] max-[1020px]:h-[480px] max-[810px]:h-[350px] max-[610px]:h-[250px] flex-shrink-0 rounded-xl overflow-hidden relative transform transition-all duration-[0.3s] ease-out">
      <Image
        src={src}
        fill
        sizes="100vw"
        className="object-fill rounded-xl"
        alt="리뷰이미지"
      />
    </div>
  );
};

export default ReviewImg;
