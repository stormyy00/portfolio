import React from "react";
import { navigations } from "@/data/navigation";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="hidden z-50 md:flex justify-center bg-gradient-to-r from-web-cyan/80 to-web-black/80 backdrop-blur-md fixed top-0 w-full">
      {navigations.map((nav, index) => (
        <Link
          key={index}
          className="font-montserrat text-white text-base md:text-lg no-underline m-3 p-0 font-thin hover:cursor-pointer hover:opacity-60 hover:scale-110 duration-300"
          href={nav.link}
        >
          {nav.text}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
