"use client";
import React from "react";
import Title from "./Title";
import Project from "./Project";
import { projects } from "@/data/projects";
import Link from "next/link";

const Projects = () => {
  return (
    <section
      id="projects"
      className="justify-between flex flex-col w-full md:w-9/12 my-0"
    >
      <Title text="PROJECTS">
        <div className="h-6 w-11/12 absolute bg-web-cyan -left-4 -bottom-1 z-10" />
      </Title>
      <div className="mt-8 pr-10 md:pr-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-0">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
      <div className="w-full h-10 flex justify-center my-3">
        <Link
          href="https://github.com/stormyy00"
          className="mt-1 md:w-2/12 flex justify-center items-center rounded-xl
       bg-gray-50 px-1.5 py-0.5 text-xs font-semibold text-gray-600 ring-1 ring-inset ring-black/70"
        >
          View More
        </Link>
      </div>
    </section>
  );
};
export default Projects;
