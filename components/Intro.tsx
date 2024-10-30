
'use client'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { AiFillSafetyCertificate } from "react-icons/ai";
const Intro = () => {
 

 
  return (
    <motion.div  
    initial={{ scale: 0 , opacity:0  }}
    animate={{scale:[1,1] , opacity: [1,1] }}
      transition={{
      type: "spring",
      stiffness: 100,
      damping: 200,
      repeat:Infinity 
      }} 
      className="relative w-full h-full p-10 shadow-lg flex-col items-center justify-center overflow-hidden  outline-double outline-8  outline-offset-8 outline-white  px-6 py-3 bg-zinc-100 text-white font-semibold rounded-lg  ">
        <div className='flex justify-center items-center '>
          <div className="  w-[250px] h-[250px]  overflow-hidden flex  justify-center items-center rounded-md  ">
            <Image src={'/portfolio-image2.png'} alt="image"   width={250} height={250}/>  
          </div>
          <motion.span
          initial={{rotate:0 , y:0}}
          animate={{rotate:[50,0 ,50] , y:[-20 , 0 , -20],  transition:{repeat:Infinity , duration:3}}}
          className='  font-extrabold text-5xl '>
              &#x1F44B;
          </motion.span>
        </div>
        <div className=' text-zinc-200 font-serif flex justify-center items-center text-2xl w-[85%] m-auto rounded-sm bg-black mt-5 shadow-lg'>
          <div className=' text-teal-600 inline-flex p-3'><AiFillSafetyCertificate /></div>
          Mohamed Kasem
        </div>
      <div  className={cn("absolute top-0 -left-7   rounded-full  w-[10%] h-[10%]  delay-0  outline-double outline-8  outline-offset-2 outline-teal-900") } >
      </div> 
      <div  className={cn("absolute top-0 -right-7    rounded-full w-[10%] h-[10%]  delay-75 outline-double outline-8  outline-offset-8 outline-teal-900") } >
      </div>    
      <div  className={cn("absolute -top-7 left-0   rounded-full w-[10%] h-[10%]  delay-100  outline-double outline-8  outline-offset-2 outline-teal-900") } >
      </div> 
      <div  className={cn("absolute -top-7 right-0  rounded-full w-[10%] h-[10%]  delay-200 outline-double outline-8  outline-offset-8 outline-teal-900") } >
      </div>  
      <div  className={cn("absolute bottom-0 -left-7   rounded-full w-[10%] h-[10%]  delay-0  outline-double outline-8  outline-offset-2 outline-teal-900") } >
      </div> 
      <div  className={cn("absolute bottom-0 -right-7   rounded-full w-[10%] h-[10%]  delay-75 outline-double outline-8  outline-offset-8 outline-teal-900") } >
      </div>    
      <div  className={cn("absolute -bottom-7 left-0   rounded-full w-[10%] h-[10%]  delay-100  outline-double outline-8  outline-offset-2 outline-teal-900") } >
      </div> 
      <div  className={cn("absolute -bottom-7 right-0    rounded-full w-[10%] h-[10%]  delay-200 outline-double outline-8  outline-offset-8 outline-teal-900") } >
      </div>  
    </motion.div>
  )
}

export default Intro