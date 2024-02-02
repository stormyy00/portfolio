"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import me from "public/me.png";

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
      className="h-[70vh] md:h-full items-center justify-center flex flex-col w-11/12 md:w-7/12 -mt-10 md:-mt-24"
    >
      <div className="flex flex-col md:flex-row justtify-center items-center md:items-start bg-blue">
        <Image src={me} alt="me" className="w-1/4 h-auto" />
        {/* <div className="bg-web-theme h-48 w-6 mx-8" /> */}
        <div className="flex justtify-center mb-16">
          <motion.div
            initial="hidden"
            animate="show"
            className="flex flex-col items-center"
          >
            {/* <motion.p
              variants={animation}
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 1,
                delay: 0,
              }}
              className="m-0 text-web-white font-montserrat font-regular text-3xl md:text-5xl"
            >
              Hello!! Nice to meet you
            </motion.p> */}
            <motion.p
              variants={animation}
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 2,
                delay: 0.3,
              }}
              className="m-3 text-web-cyan font-montserrat font-semibold text-xl md:text-4xl"
            >
              Jonathan Trujillo
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
              SOFTWARE ENGINEER
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
              Waving gif
            </motion.p>
          </motion.div>
        </div>
      </div>

      <motion.div
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
        <p> $cd hobbies</p>
        <p> -Gym </p>
        <p> -Snowbaording</p>
        <p> -Leetcode </p>
      </motion.div>
    </section>
  );
};

export default Landing;
