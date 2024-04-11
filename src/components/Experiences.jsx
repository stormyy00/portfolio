import React from "react";

const Experiences = ({ experience }) => {
  return (
    <div className="font-poppins m-0 p-4 w-11/12 h-full flex items-center  gap-1 bg-gray-400 rounded-3xl">
      <div className="text-white font-bold text-base md:text-xl w-8/12 bg-red">
        {experience.title.toUpperCase()}
      </div>
      <div className="mt-0 text-sm text-white font-light md:text-lg items-start flex flex-col w-full bg-green-">
        {experience.description.map((description, index) => (
          <div key={index} className="mb-2">
            {description}
          </div>
        ))}
        <div className="text-gray-700">{experience.time}</div>
      </div>
    </div>
  );
};
export default Experiences;
