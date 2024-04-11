import React from "react";
import { Socials } from "@/data/links.js";
import Link from "next/link";
const Footer = () => {
  return (
    <div
      id="contacts"
      className=" w-fit h-fit flex flex-col items-center justify-center gap-0 p-3"
    >
      <div className="flex items-center text-white  ">
        {Socials.map((social, index) => (
          <Link
            key={index}
            href={social.path}
            className="text-5xl text-black hover:scale-110 duration-300 px-10  m-1"
          >
            {social.icon}
          </Link>
        ))}
      </div>
      <div className="text-black mt-3">Copyright @ Jonathan Trujillo</div>
    </div>
  );
};
export default Footer;
