"Use Client";
import React from "react";
import { exper } from "@/data/experience";
import Title from "./Title";
import Experiences from "./Experiences";
import HorizontalLine from "./HorizontalLine";

const Experience = () => {
  return (
    <section
      id="experience"
      className="justify-center flex flex-col w-full max-h-screen md:w-11/12 my-0 gap-6"
    >
      <Title text="EXPERIENCE">
        <div className="w-full h-full">
          <HorizontalLine />
        </div>
        {/* <div className="h-6 w-36 absolute bg-web-cyan -left-4 -bottom-1 z-10" /> */}
      </Title>
      <div className="flex justify-center">
        <div className=" w-11/12 md:w-10/12 bg-blue-400 pb-3 rounded-3xl shadow-lg scroll-smooth">
          <div
            className="flex flex-col items-center gap-2  mt-3 overflow-y-auto max-h-[450px] pr-0 "
            style={{ scrollBehavior: "smooth" }}
          >
            {exper.map((exp, idx) => (
              <Experiences key={idx} experience={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
