"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import me from "../../public/me.png";
// import wave from "../../public/wavin.gif";
const Landing = () => {
  const animation = {
    hidden: { opacity: 0, y: -30 },
    show: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <section
      id="landing"
      className="h-[70vh] md:h-full flex items-center md:items-center justify-center flex-col w-11/12 md:w-11/12 mt-4 md:mt-24 bg-gray-200"
    >
      <div className="flex flex-col w-full md:w-3/6 md:flex-row  md:items-start bg-blue-400 rounded-3xl shadow-md">
        {/* <Image src={me} alt="me" className="w-1/4 h-auto" /> */}
        {/* <div className="h-40 w-2/3 bg-pink-400"></div> */}
        {/* <div className="bg-web-theme h-48 w-6 mx-8" /> */}
        <div className="flex justtify-start mb-16 bg-100">
          <motion.div
            initial="hidden"
            animate="show"
            className="flex flex-col items-center"
          >
            <motion.p
              variants={animation}
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 2,
                delay: 0.3,
              }}
              className="m-3 text-black font-montserrat font-semibold text-xl md:text-4xl"
            >
              Hello, {"I'm"} Jonathan Trujillo
            </motion.p>
            <motion.p
              variants={animation}
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 2,
                delay: 0.6,
              }}
              className="m-3 text-web-white font-anticDidone text-xl md:text-2xl translate-x-6"
            >
              Software Engineer with a bit some touch to reality, Located in
              Socal, You can usualluy find me at some coffee shop cookin some
              new idea.
            </motion.p>
            <motion.p
              variants={animation}
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 3,
                delay: 0.6,
              }}
              className="m-3 text-web-white font-anticDidone text-xl md:text-2xl translate-x-6"
            >
              {/* <Image
              src={wave}
              alt="wave"
              className=" object-contain fill-blue-500"
              />
              Waving gif */}
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* <motion.div
        initial="hidden"
        animate="show"
        variants={animation}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 1,
          delay: 1.2,
        }}
        className="m-0 text-web-white font-montserrat font-thin text-xs md:text-base mx-3 mt-8"
      >
        <div className="bg-gray-500 border-4 border-gray-400 p-4 flex flex-col rounded-lg">
          <p>$cd hobbies</p>
          <p> - Gym </p>
          <p> - Snowbaording</p>
          <p> - Leetcode </p>
        </div>
      </motion.div> */}
    </section>
  );
};

export default Landing;
