import { IconType } from "react-icons";
import { StaticImageData } from "next/image";
export type ProjectType = {
  title: string;
  description: string;
  techStack: string[];
  link: string;
  image: StaticImageData;
  links: {
    text: IconType;
    url: string;
  }[];
};
