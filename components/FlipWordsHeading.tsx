'use client'
import React from 'react'
import { FlipWords } from './ui/flip-words'
import {motion} from 'framer-motion'
const FlipWordsHeading = () => {
   const words = [
        "Innovative",
        "User-Friendly",
        "Intuitive",
        "Efficient",
        "Dynamic",
        "Seamless",
        "Interactive",
        "Robust",
        "Fast",
        "Engaging",
        "Adaptive",
        "Accessible",
        "Reliable",
        "Versatile",
        "Elegant",
        "Cutting-edge",
        "Responsive",
        "Modern",
        "Scalable",
        "Secure"
      ];
  return (
    <motion.div
     initial={{scale:0}}
     animate={{scale:1}}
     transition={{
      type:'tween',
      stiffness: 270,
      damping: 80,
     }}
     className=" justify-center items-center px-4 hidden sm:flex ">
    <div className="text-2xl  font-normal text-zinc-100  ">
     <span className='text-4xl text-zinc-100'>Build</span>
      <FlipWords words={words} className='text-teal-500 font-bold text-4xl -ml-1' /> <br />
      Websites And Mobile Apps With Me
    </div>
  </motion.div>
  )
}

export default FlipWordsHeading