export type ProjectModalProps = {
  setIsClick: React.Dispatch<React.SetStateAction<boolean>>;
  data: {
    id: number;
    img: string[];
    imgReview: {
      title: string;
      content: string;
    }[];
    title: string;
    content: string;
    detail: string;
    github: string;
    date: string;
    people: string;
    myJob: {
      name: string;
      content: string;
    }[];
    tech: string[];
    link: string;
    link2: string;
    techImg: string[];
  };
  bgType: "auction" | "quiz" | "market" | "default";
};

export const backColorList = {
  auction: "bg-[#e0dcce]",
  quiz: "bg-white bg-opacity-75",
  market: "bg-white bg-opacity-75",
  default: "bg-[#e0dcce]",
};