export const backColor = (item: string) => {
  switch (item) {
    case "React":
      return "bg-[#61DAFB]";
    case "NextJs":
      return "bg-black";
    case "Typescript":
      return "bg-[#3178C6]";
    case "JavaScript":
      return "bg-[#F7DF1E]";
    case "HTML":
      return "bg-[#E34F26]";
    case "CSS":
      return "bg-[#1572B6]";
    case "Tailwindcss":
      return "bg-[#39bef7]";
    case "Axios":
      return "bg-[#6523e8]";
    case "Vanilla-extract/css":
      return " bg-[linear-gradient(to_right,#f78db0,#4adaf0)]";
    case "Zustand":
      return "bg-[#453f38]";
    case "React vite":
      return "bg-[linear-gradient(to_right,#60a9fc,#ffd026,#9e5bfc)]";
    case "React-query":
      return "bg-[linear-gradient(to_right,#ff4252,#fade55)]";
    case "Firebase":
      return "bg-[linear-gradient(to_right,#f5810c,#ffc929)]";
    case "Aws":
      return "bg-[#ff9900]";
    case "Django":
      return "bg-[#092e20]";
    case "Mysql":
      return "bg-[#4479A1]";
    case "Google-map-api":
      return "bg-[linear-gradient(to_right,#f73a00,#f7bb07,#4bab4e,#1872cc)]";
    case "Kakao-web-api":
      return "bg-[#FFCD00]";
    default:
      return "bg-black";
  }
};
