import React, { useState } from "react";
import skills from "@/data/icons";
import Image from "next/image";

const Skills = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className="flex flex-col  w-full">
      <div className="flex justify-center flex-col md:flex-row w-auto md:flex-cols md:gap-20 gap-6 mt-2 mb-10">
        {Object.keys(skills).map((type, index) => (
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
          skills[selectedType].map((techStack, index) => (
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
