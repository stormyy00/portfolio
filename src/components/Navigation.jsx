"use client";
import React from "react";
// import { FaBars } from "react-icons/fa";
// import Link from "next/link";
// import { Link } from "react-scroll";
// import { useState } from "react";
// import { navigations } from "@/data/navigation";
// import { FaChevronLeft } from "react-icons/fa";

const Navigation = () => {
  // const [isDropdownOpen, setDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setDropdownOpen(!isDropdownOpen);
  // };

  // const closeNavbar = () => {
  //   setDropdownOpen(false);
  // };

  return (
    <div className="flex w-11/12 h-10 bg-white justify-between z-0">
      {/* <div className="text-black text-3xl mr-10">stormyy'tm</div> */}
      <div className="text-lg">TIME</div>
    </div>
    // <div className="w-full ml-3 py-2 md:mt-64">
    //   <div
    //     onMouseEnter={toggleDropdown}
    //     onMouseLeave={closeNavbar}
    //     className="fixed group z-50"
    //   >
    //     <button
    //       onClick={toggleDropdown}
    //       className={`${
    //         isDropdownOpen
    //           ? "opacity-0 "
    //           : "opacity-100 bg-green-500/80 duration-800"
    //       } bg-design-green-300 rounded-xl w-1/3 pl-3.5 py-2.5 drop-shadow-xl`}
    //     >
    //       <FaBars className="text-white text-lg drop-shadow-md " />
    //     </button>
    //     <div
    //       className={`${
    //         isDropdownOpen
    //           ? "transition-all duration-300 ease-out transform translate-y-0 opacity-100"
    //           : "transition-all duration-300 ease-in  transform -translate-y-32 -translate-x-32 opacity-0"
    //       } bg-green-500/80 p-2 ml-0 -mt-10 md:-mt-10 grid grid-col rounded-xl drop-shadow-lg`}
    //     >
    //       <button onClick={closeNavbar}>
    //         <FaChevronLeft className="flex text-white text-xl items-center justify-start my-1 ml-1" />
    //       </button>

    //       {navigations.map((item, index) => (
    //         <Link
    //           key={index}
    //           onClick={() => console.log(`Clicked on ${item.name}`)}
    //           href={item.link}
    //           className="flex px-2 py-1.5 text-white text-lg flex-cols gap-3 justify-start items-center no-underline hover:cursor-pointer duration-500"
    //         >
    //           {item.text}
    //         </Link>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Navigation;
