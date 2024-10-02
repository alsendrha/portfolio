import React from "react";
import { twMerge } from "tailwind-merge";

type ContentProps = {
  opa?: "true" | "false";
  opa2?: "true" | "false";
  opa3?: "true" | "false";
  opa4?: "true" | "false";
  opa5?: "true" | "false";
  opa6?: "true" | "false";
  opa7?: "true" | "false";
  title: string;
  content: string;
  content2?: string;
  content3?: string;
  content4?: string;
  content5?: string;
  content6?: string;
  content7?: string;
};

const Content = ({
  opa = "false",
  opa2 = "false",
  opa3 = "false",
  opa4 = "false",
  opa5 = "false",
  opa6 = "false",
  opa7 = "false",
  title,
  content,
  content2,
  content3,
  content4,
  content5,
  content6,
  content7,
}: ContentProps) => {
  const opacity = {
    true: "opacity-0",
    false: "opacity-100",
  };

  return (
    <>
      <p className="font-bold mb-2">{title}</p>
      <p>{content}</p>
      {content2 && <p className={twMerge("", opacity[opa2])}>{content2}</p>}
      {content3 && <p className={twMerge("", opacity[opa3])}>{content3}</p>}
      {content4 && <p className={twMerge("", opacity[opa4])}>{content4}</p>}
      {content5 && <p className={twMerge("", opacity[opa5])}>{content5}</p>}
      {content6 && <p className={twMerge("", opacity[opa6])}>{content6}</p>}
      {content7 && <p className={twMerge("", opacity[opa7])}>{content7}</p>}
    </>
  );
};

export default Content;
