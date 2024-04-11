"use client";
import React from "react";
import Title from "./Title";
import Project from "./Project";
import { projects } from "@/data/projects";
import Link from "next/link";
import HorizontalLine from "./HorizontalLine";

const Projects = () => {
  return (
    <section
      id="projects"
      className="justify-between flex flex-col w-full md:w-11/12 my-0"
    >
      <Title text="PROJECTS">
        <div className="w-full m-full">
          <HorizontalLine />
        </div>
      </Title>

      <div className="mt-8 pr-8 md:pr-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-0 gap-10">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
      <div className="w-full h-10 flex justify-center my-12">
        <Link
          href="https://github.com/stormyy00"
          className="no-underline mt-1 w-3/12 md:w-2/12 flex justify-center items-center rounded-xl
       bg-gray-50 px-1.5 py-0.5 text-xs font-semibold text-gray-600
 hover:scale-105 duration-300"
        >
          View More
        </Link>
      </div>
    </section>
  );
};
export default Projects;
