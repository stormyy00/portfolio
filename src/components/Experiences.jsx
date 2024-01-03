import React from "react";

const Experiences = ({ experience }) => {
  return (
    <div className="font-poppins m-4 p-4 w-full h-11/12 shadow-md flex flex-col items-start justify-center gap-0">
      <div class="text-white font-bold text-2xl md:text-3xl">
        {experience.title.toUpperCase()}
      </div>
      <div className="-mt-0 text-md text-white font-light md:text-xl">
        {experience.description}
      </div>
    </div>
  );
};
export default Experiences;
