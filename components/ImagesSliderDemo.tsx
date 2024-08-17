"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import Link from "next/link";


export function ImagesSliderDemo() {
  const images = [
    "/education/education1.jpg",
    "/education/education2.jpg",
    "/education/education5.jpg",
    "/education/education6.jpg",
  ];
  return (
    <ImagesSlider className="h-[50vh]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center bg-black/30 w-full xl:w-[70vw] h-full"
      >
        <motion.p className="-mt-20 sm:mt-0 p-4 z-50 bg-gradient-to-b from-neutral-50 to-neutral-300  bg-clip-text text-transparent  text-center text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold">
           Computer Science <br/> And Information Technology
        </motion.p>
        <button className=" sm:mt-4 px-4 py-2 backdrop-blur-md border-none bg-black/50 text-white mx-auto text-center rounded-full relative  ">
          <Link href={'/contact'} className="  text-sm md:text-md lg:text-lg">Contact now →</Link>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-blue-600 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
