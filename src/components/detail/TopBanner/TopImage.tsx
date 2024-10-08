import Image from "next/image";
import React from "react";

type TopImageProps = {
  src: string;
};

const TopImage = ({ src }: TopImageProps) => {
  return (
    <>
      <Image
        src={src}
        fill
        sizes="1"
        className="object-fill blur-sm opacity-10"
        alt="프로젝트 이미지"
      />
    </>
  );
};

export default TopImage;
