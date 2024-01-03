"Use Client";
import React from "react";
import { experience } from "../data/experience";
import Title from "./Title";
import Experiences from "./Experiences";
const Experience = () => {
  return (
    <section
      id="experience"
      className="justify-center flex flex-col w-11/12 md:w-9/12 my-0"
    >
      <Title text="EXPERIENCE">
        <div className="h-6 w-36 absolute bg-web-cyan -left-4 -bottom-1 z-10" />
      </Title>
      <div className=" w-full">
        {experience.map((exp, idx) => (
          <Experiences key={idx} experience={exp} />
        ))}
      </div>
    </section>
  );
};
export default Experience;
