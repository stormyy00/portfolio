import React from "react";
import Image from "next/image";
import snoopy from "../../public/stock.jpeg";

const Project = ({ project }) => {
  return (
    <div className="font-poppins m-4 p-4 bg-white w-11/12 h-11/12 rounded-3xl shadow-md flex flex-col items-start justify-center gap-0">
      <Image
        src={snoopy}
        alt="snoopy"
        className="w-full rounded-2xl object-cover"
      />

      <div>
        <div className="mt-2 font-bold text-xl text-black text-transparent bg-clip-text top-0">
          {project.title.toUpperCase()}
        </div>

        <div className="-mt-0 text-xl font-light">{project.description}</div>
        <div className="font-anticDidone flex items-end text-xs md:text-sm gap-1 md;gap-2 py-4">
          <div className="m-0 grid grid-cols-3 gap-2">
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
