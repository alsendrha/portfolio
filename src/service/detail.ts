import { Project } from "@/types/types";

export const projectName = (project: Project) => {
  switch (project?.title) {
    case "3-ENG":
      return "quiz";
    case "우리동네 경매장":
      return "auction";
    case "배추마켓":
      return "market";
    case "Korea Tour":
      return "tour";
    default:
      return "default";
  }
};
