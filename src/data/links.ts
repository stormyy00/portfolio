import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { IconType } from "react-icons";

type Social = {
  path: string;
  title: string;
  icon: IconType;
};

export const Socials: Social[] = [
  {
    path: "https://github.com/stormyy00",
    title: "Github",
    icon: FaGithub,
  },
  {
    path: "https://www.linkedin.com/in/jonathantrujillo-/",
    title: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    path: "https://github.com/stormyy00",
    title: "Resume",
    icon: IoNewspaperOutline,
  },
];
