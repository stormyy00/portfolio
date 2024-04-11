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

const SKILLS = {
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
    {
      name: "Figma",
      icon: <SiFigma className="text-tech-figma" />,
    },
    {
      name: "Adobe",
      icon: <SiAdobe className="text-red-500" />,
    },
  ],
};

export default SKILLS;
