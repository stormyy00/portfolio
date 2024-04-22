import React from "react";
import Image from "next/image";
// import snoopy from "../../public/stock.jpeg";
import Link from "next/link";
// import PAD from "../../public/PAD.png";
const Project = ({ project }) => {
  return (
    <div className="font-poppins rounded-3xl flex flex-col gap-3 items-center justify-center m-3 p-0  bg-gradient-to-br from-[#f7e7f9] to-[#e3efff] from-10% w-11/12 md:w-11/12 h-full text-black shadow-md">
      {/* <Link href={project.link} className="no-underline"> */}
      <Image
        src={project.image}
        alt="snoopy"
        className="rounded-2xl w-full h-full object-cover border-4 border-[#c2d2f9] "
      />
      {/* </Link> */}
      <div className="flex flex-col justify-center ml-3 w-11/12 h-full ">
        <div className="mt-0 flex font-bold text-xl text-black text-transparent bg-clip-text items-center gap-2 ">
          {project.title.toUpperCase()}
          {project.links.map((link, linkIndex) => (
            <Link
              key={linkIndex}
              href={link.url}
              className="text-black no-underline text-2xl  hover:scale-110 duration-300"
            >
              {link.text}
            </Link>
          ))}
        </div>

        <div className="text-lg font-light">{project.description}</div>
        <div className="font-anticDidone flex items-end text-xs md:text-sm gap-1 md;gap-2 py-4">
          <div className="m-0 grid grid-cols-2 md:grid-cols-3 gap-2">
            {project.techStack.map((techStack, index) => (
              <p
                className="m-0 inline-flex justify-center items-center rounded-xl bg-gray-50 px-1.5 py-0.5 text-xs font-semibold text-gray-600 ring-1 ring-inset ring-black/70 "
                key={index}
              >
                {techStack}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
    // <div className="flex flex-col w-full items-center">
    // <div className="flex flex-col md:grid md:grid-col-2 xl:grid-col-3 md:space-x-8 space-y-4">
    // <div className="w-80 md:w-96 bg-gray-400 shadow-xl h-[28rem]">
    //   <div className="w-full h-full">
    //     {/* <Image
    //       src={snoopy}
    //       width={100}
    //       height={100}
    //       alt="img"
    //       className="w-4/5 z-0 absolute top-0 opacity-30 h-full group-even:right-0 group-odd:left-0"
    //     /> */}
    //   </div>
    //   <div className="glass w-full text-web-white font-montserrat flex group-even:flex-row-reverse p-4 rounded-md relative justify-between">
    //   <Image
    //       src={snoopy}
    //       width={100}
    //       height={100}
    //       alt="img"
    //       className="w-[40%] group-odd:-ml-10 group-even:-mr-10 object-contain"
    //     />
    //     <div className="w-[60%] ml-5 flex flex-col">
    //       <div className="h-full flex flex-col justify-center">
    //         <p className="m-0 text-sm md:text-base font-light my-1 md:my-3">
    //           {project.title.toUpperCase()}
    //         </p>
    //         <p className="m-0 text-xs md:text-sm font-thin">
    //           {project.description}
    //         </p>
    //       </div>
    //       <div className="w-full flex justify-between items-end flex-col md:flex-row">
    //         <div className="font-anticDidone flex items-center text-xs md:text-sm gap-1 md;gap-2">
    //           <p className="m-0">Tech Stack: </p>
    //           {project.techStack.map((techStack, index) => (
    //             <p className="m-0" key={index}>
    //               {techStack}
    //             </p>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // </div>
    // </div>
  );
};

export default Project;
