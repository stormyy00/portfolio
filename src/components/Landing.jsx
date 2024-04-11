"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import bruh from "../../public/bruh1.JPG";
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
      className="h-full flex items-center md:items-start gap-10 justify-center flex-col md:flex-row w-11/12 md:w-11/12 mt-4 md:mt-24 bg-gray-200 mb-8"
    >
      <div className="flex w-full flex-col md:flex-row justify-center gap-10 md:gap-20 ">
        <div className="flex justtify-center w-full md:w-3/6 bg-blue-400 rounded-3xl shadow-md ">
          <motion.div initial="hidden" animate="show" className="">
            <motion.p
              variants={animation}
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 2,
                delay: 0.3,
              }}
              className="m-3 text-white text-center font-montserrat font-semibold text-lg lg:text-xl xl:text-4xl"
            >
              Hello!!!
            </motion.p>
            <motion.p
              variants={animation}
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 2,
                delay: 0.6,
              }}
              className="m-3 text-web-white font-anticDidone text-lg md:text-xl lg:text-2xl"
            >
              {
                "I'm a 3rd Year, studying Computer Science at UC Riverside. I'm Software Engineer/Web Developer with a touch of reality, located in SoCal. You can usually find me at a coffee shop, cooking up new ideas."
              }
            </motion.p>
            <motion.p
              variants={animation}
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 3,
                delay: 0.6,
              }}
              className="m-3 text-web-white font-semibold  flex flex-col items-center font-anticDidone text-xl lg:text-2xl xl:text-4xl"
            >
              What am I doing?
              <span className=" font-normal text-base  md:text-xl lg:text-2xl m-1 mt-3">
                - Currently leading Art Factory with 10 devs
                <br /> - Probably buying an Iced Caramel Latte
                <br /> - commiting to github
              </span>
            </motion.p>
          </motion.div>
        </div>
        <div className="flex w-full h-full md:w-1/3 justify-center overflow-hidden">
          <Image
            src={bruh}
            alt="me"
            className="hidden md:block w-full h-full lg:h-1/3 border-2 border-gray-400 rounded-xl object-cover"
          />
        </div>
      </div>
      {/* <div className="w-full md:w-3/6 flex flex-col items-center bg-green-200 rounded-3xl shadow-md -16">
        <p className=" font-montserrat font-semibold  text-xl md:text-4xl mt-3 ">
          What am i doing?
        </p>
        <div className="m-3 font-anticDidone text-xl md:text-2xl translate-x-1">
          currently leading art factory Software Engineer with a bit some touch
          to reality, Located in Socal, You can usualluy find me at some coffee
          shop cookin some new idea.
        </div>
        <div className="mb-10">github</div>
      </div> */}
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
