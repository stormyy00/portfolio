import React from "react";
import { Socials } from "@/data/links.js";
import Link from "next/link";
const Footer = () => {
  return (
    <div
      id="contacts"
      className=" w-full h-full flex justify-center bg-gradient-to-r from-web-cyan/90 to-web-cyan/80 p-3"
    >
      <div className="flex flex-row relative items-center text-white scale-110 md:scale-125">
        {Socials.map((social, index) => (
          <Link
            key={index}
            href={social.path}
            className="text-4xl text-white hover:scale-110 duration-300 px-10 m-1"
          >
            {social.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Footer;
