import React from "react";
import { skills } from "@/data/icons";
const Skills = () => {
  return (
    <div className="w-full">
      <div className="m-0 text-web-white font-montserrats font-thin text-base md:text-3xl">
        Skills
      </div>

      <div className="flex flex-col md:flex-row w-full md:flex-cols md:gap-20 gap-6 mt-2">
        {Object.entries(skills).map(([type, skills], index) => (
          <div key={index}>
            <p className="text-lg font-thin">{type.toUpperCase()}</p>
            {skills.map((techStack, index) => (
              <p className="m-0 mt-2 gap-3 font-anticDidone" key={index}>
                {/* {techIcons[techStack]} */}
                {techStack}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
{
  /* <div className="m-0 text-web-white font-montserrats font-thin text-xs md:text-base"> */
}
{
  /* Lanuages
  <div className="flex-col">C++/C# Python HTML/CSS Javascript Java MySQL
      </div>
</div>
<p className="flex text-web-white font-montserrats font-thin text-xs md:text-base">
  Technologies: React.js Next.js Tailwind CSS Figma Cypress Flask
</p> */
}
