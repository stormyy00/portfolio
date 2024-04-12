import React, { useState } from "react";
// import SKILLS from "@/data/icons";
// import Image from "next/image";

const Skills = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className="flex flex-col  w-full">
      <div className="flex justify-center flex-col md:flex-row w-auto md:flex-cols md:gap-20 gap-6 mt-2 mb-10">
        {Object.keys(SKILLS).map((type, index) => (
          <div key={index}>
            <button
              className={`text-3xl font-bold ${
                selectedType === type ? "text-black" : "text-gray-400"
              }`}
              onClick={() => setSelectedType(type)}
            >
              {type.toUpperCase()}
            </button>
          </div>
        ))}
      </div>

      <div className="grid md:flex grid-cols-4 md:flex-row gap-4 justify-center w-auto md:relative">
        {selectedType &&
          SKILLS[selectedType].map((techStack, index) => (
            <div
              onMouseEnter={() => setHoveredTech(techStack)}
              onMouseLeave={() => setHoveredTech(null)}
              className="m-0 mt-2 gap-3 text-5xl font-anticDidone"
              key={index}
            >
              {techStack.icon}
              {hoveredTech === techStack && (
                <div className="absolute bg-black text-xs mt-2 p-2 rounded shadow-md">
                  {techStack.name}
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Skills;

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
    { name: "Figma", icon: <SiFigma className="text-tech-figma" /> },
    { name: "Adobe", icon: <SiAdobe className="text-red-500" /> },
  ],
};

// import React, { useState } from "react";
// import { skill } from "@/data/icons";
// import Image from "next/image";

// const Skills = () => {
//   const [selectedType, setSelectedType] = useState(null);

//   return (
//     <div className="flex flex-col justify-center items-center w-full mb-20">
//       <div className="flex flex-col md:flex-row w-full md:flex-cols md:gap-20 gap-6 mt-2 mb-5">
//       {skill.map((category, index) => (
//           <button key={index} onClick={() => setSelectedType(category.name)}
//           className="text-2xl">{category.name}</button>
//         ))}
//         </div>
//       <div className="flex gap-10 absolute mt-[10%]">
//         {skill.find((category) => category.name === selectedType)?.icons.map((icon, index) => (
//           <div key={index} className="text-5xl">{icon}</div>
//           ))}
//           </div>
//     </div>
//   );
// };

// export default Skills;
