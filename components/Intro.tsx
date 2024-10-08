
'use client'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useRef, useState } from 'react'

const Intro = () => {
 

 
  return (
    <motion.div  
      initial={{ scale: 0 , opacity:0  }}
      animate={{scale:[1 , 1.1] , opacity:[ 1 , 1] }}
      transition={{
      type: "spring",
      stiffness: 100,
      damping: 200,
      repeat:Infinity 
      }} 
      className="relative p-10 shadow-lg flex items-center justify-center   clickable-btn px-6 py-3 bg-zinc-100 text-white font-semibold rounded-full   focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ">
      <div className="  w-[200px] h-[200px]  overflow-hidden flex justify-center items-center rounded-full  ">
        <Image src={'/portfolio-image2.png'} alt="image"   width={200} height={200}/>
      </div>
      <motion.span
      initial={{rotate:0 , y:0}}
      animate={{rotate:[50,0 ,50] , y:[-20 , 0 , -20],  transition:{repeat:Infinity , duration:3}}}
       className='  font-extrabold text-5xl text-black'>
          &#x1F44B;
      </motion.span>
      <div  className={cn("absolute top-0 left-0 z-20  rounded-full  w-full h-full  outline-dashed  outline-8  outline-offset-8 outline-teal-600") } >
      </div>     
    </motion.div>
  )
}

export default Intro