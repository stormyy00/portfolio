// export const icons = [
//   {
//     language: "C++",
//     badgeUrl:
//       "https://img.shields.io/badge/C++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white",
//   },
//   {
//     language: "C#",
//     badgeUrl:
//       "https://img.shields.io/badge/C%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white",
//   },
//   {
//     language: "Python",
//     badgeUrl:
//       "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
//   },
//   {
//     language: "HTML",
//     badgeUrl:
//       "https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
//   },
//   {
//     language: "CSS",
//     badgeUrl:
//       "https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
//   },
//   {
//     language: "JavaScript",
//     badgeUrl:
//       "https://img.shields.io/badge/JavaScript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
//   },
//   {
//     language: "Java",
//     badgeUrl:
//       "https://img.shields.io/badge/Java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white",
//   },
//   {
//     language: "MySQL",
//     badgeUrl:
//       "https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white",
//   },
// ];

import { SiJavascript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { DiJava } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { PiFileSqlDuotone } from "react-icons/pi";
import { SiTailwindcss } from "react-icons/si";

import { SiFirebase } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiCplusplus } from "react-icons/si";

import { SiCypress } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { SiAdobe } from "react-icons/si";
// import { FaGit } from "react-icons/fa";
// import { FaNodeJs } from "react-icons/fa";
// import { SiOpenai } from "react-icons/si";
// import { SiGoogleanalytics } from "react-icons/si";

const skills = {
  Programming: [
    {
      name: "C++",
      icon: <SiCplusplus className="text-tech-cpp" />,
    },
    {
      name: "Python",
      icon: <FaPython className="text-tech-python" />,
    },
    // "HTML/CSS",
    {
      name: "Typescript",
      icon: <SiTypescript className="text-tech-typescript" />,
    },
    {
      name: "Javascript",
      icon: <SiJavascript className="text-tech-javascript" />,
    },
    {
      name: "Java",
      icon: <DiJava className="text-6xl -mt-1 text-red-500" />,
    },
    {
      name: "SQL",
      icon: <PiFileSqlDuotone className="text-tech-cpp" />,
    },
  ],
  "Web Development": [
    {
      name: "ReactJS",
      icon: <SiReact className="text-tech-cpp" />,
    },
    {
      name: "NextJS",
      icon: <TbBrandNextjs className="text-black" />,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-tech-tailwind" />,
    },
    {
      name: "Flask",
      icon: <SiFlask className="text-black" />,
    },
    {
      name: "Framer Motion",
      icon: <TbBrandFramerMotion className="text-black" />,
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-tech-firebase" />,
    },
    {
      name: "Prisma",
      icon: <SiPrisma className="text-tech-prisma" />,
    },
    {
      name: "Cypress.io",
      icon: <SiCypress className="text-tech-cypress" />,
    },
    {
      name: "Postman",
      icon: <SiPostman className="text-tech-postman" />,
    },
  ],
  Design: [
    { name: "Figna", icon: <SiFigma className="text-tech-figma" /> },
    { name: "Adobe", icon: <SiAdobe className="text-red-500" /> },
  ],
};

export default skills;
