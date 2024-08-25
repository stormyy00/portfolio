import React from "react";
import Title from "./Title";
import { motion } from "framer-motion";
import Skills from "./Skills";
import HorizontalLine from "./HorizontalLine";
// import Image from "next/image";
// import tag from "../../public/tag.svg";
const About = () => {
  const animation = {
    hidden: { opacity: 0, y: -30 },
    show: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <section
      id="about"
      className="justify-center flex flex-col w-11/12 md:w-11/12 gap-6 my-4 md:my-10"
    >
      <Title text="SKILLS">
        {/* <div className="h-6 w-36 absolute bg-web-cyan -left-4 -bottom-1 z-10" /> */}
        <div className="w-full m-full">
          <HorizontalLine />
        </div>
      </Title>
      <div className="flex w-full justify-center flex-col z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={animation}
          transition={{
            type: "tween",
            ease: "easeInOut",
            duration: 1,
            delay: 0.3,
          }}
        >
          {/* <Title text="ABOUT"> */}
          {/* <div className="h-6 w-36 absolute bg-web-cyan -left-4 -bottom-1 z-10" /> */}

          {/* </Title> */}
        </motion.div>

        <div className="flex w-full justify-center flex-col md:flex-row text-white">
          <div className="flex  gap-4">
            {/* <motion.div
              initial="hidden"
              whileInView="show"
              variants={animation}
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 1,
                delay: 0.6,
              }}
              className=" text-web-white font-montserrats font-thin text-sm md:text-lg p-3 md:p-11 h-auto"
            > */}
            {/* <div className="flex items-center">
                <p className="m-0 text-web-white font-montserrats font-thin text-base md:text-3xl">
                  EDUCATION
                </p>
              </div>
              <p className="m-0 text-web-white font-montserrats font-thin text-xs md:text-base mt-1">
                Bachelor of Science in Computer Science
              </p>
              <p className="m-0 text-web-white font-montserrats font-thin text-xs md:text-base mt-1">
                at University of California, Riverside
              </p>
              <p className="m-0 text-web-white font-montserrats font-thin text-xs md:text-base mt-1">
                Expected Graduation: 2025
              </p> */}
            {/* </motion.div> */}
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={animation}
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 0.2,
                delay: 0.2,
              }}
              className="w-full h-full"
            >
              <Skills />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
