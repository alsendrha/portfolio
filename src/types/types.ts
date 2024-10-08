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

export const backColorList2 = {
  auction: "bg-[#222]",
  quiz: "bg-[#7982E8]",
  market: "bg-[#81cc85]",
  tour: "bg-[#E07039]",
  default: "bg-[#e0dcce]",
};

export const textColorList2 = {
  auction: "text-[#D1B383]",
  quiz: "text-white max-[1050px]:text-gray-400",
  market: "text-white max-[1050px]:text-gray-400",
  tour: "text-white max-[1050px]:text-gray-400",
  default: "text-white max-[1050px]:text-gray-400",
};

export type Project = {
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
  backend: string[];
  myJob: {
    name: string;
    content: string;
  }[];
  tech: string[];
  link: string;
  link2: string;
  techImg: string[];
};
