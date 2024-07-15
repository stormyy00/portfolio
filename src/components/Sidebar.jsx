"use client";
import { useState } from "react";
import { navigations } from "@/data/navigation";
import Link from "next/link";

const Sidebar = () => {
  const [selected, setSelected] = useState("HOME");

  return (
    <div className="hidden w-40 lg:flex h-screen items-center left-0 fixed z-50 text-white">
      <div className=" flex flex-col space-y-2 justify-between items-start w-full mx-6">
        {navigations.map((item, index) => (
          <Link
            key={index}
            //   onClick={() => console.log(`Clicked on ${item.name}`howard is a bitch)}
            onClick={() => setSelected(item.text)} // Corrected onClick handler
            href={item.link}
            className={`flex px-2 py-1.5 text-black text-lg items-center no-underline hover:scale-110 cursor-pointer duration-300 ${
              selected === item.text
                ? "bg-blue-400 rounded-[10px] bg-opacity-70 drop-shadow-sm"
                : "hover:bg-gray-300 rounded-[10px] bg-opacity-70 hover:drop-shadow-sm"
            }`}
          >
            <div
              className={`w-4 h-4 mr-2 rounded-full ${
                selected === item.text
                  ? "bg-blue-400"
                  : "border-[1px] border-blue-400"
              }`}
            ></div>
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
