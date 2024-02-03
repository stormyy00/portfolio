import React from "react";
import Title from "./Title";
import { motion } from "framer-motion";

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
      className="justify-center flex flex-col w-11/12 md:w-9/12 my-4 md:my-10"
    >
      <div className="flex w-full flex-col z-10">
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
          <Title text="ABOUT">
            <div className="h-6 w-36 absolute bg-web-cyan -left-4 -bottom-1 z-10" />
          </Title>
        </motion.div>

        <div className="flex justify-start flex-col md:flex-row text-white">
          <div className="flex flex-col gap-4">
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={animation}
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 1,
                delay: 0.6,
              }}
              className="glass text-web-white font-montserrats font-thin text-sm md:text-lg p-3 md:p-11 h-auto"
            >
              <div className="flex items-center">
                <p className="m-0 text-web-white font-montserrats font-thin text-base md:text-xl">
                  EDUCATION
                </p>
              </div>
              <p className="m-0 text-web-white font-montserrats font-thin text-xs md:text-base">
                Bachelor of Science in Computer Science
              </p>
              <p className="m-0 text-web-white font-montserrats font-thin text-xs md:text-base">
                at University of California, Riverside
              </p>
              <p className="m-0 text-web-white font-montserrats font-thin text-xs md:text-base">
                Expected Graduation: 2025
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={animation}
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 1,
                delay: 0.6,
              }}
              className="glass mb-4 p-3 h-fit"
            >
              <div className="flex items-center">
                <p className="m-0 text-web-white font-montserrats font-thin text-base md:text-xl">
                  Skills
                </p>
              </div>
              <p className="m-0 text-web-white font-montserrats font-thin text-xs md:text-base">
                Lanuages: C++/C# Python HTML/CSS Javascript Java MySQL
              </p>
              <p className="m-0 text-web-white font-montserrats font-thin text-xs md:text-base">
                Tech: React.js Next.js Tailwind CSS Figma Cypress
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
