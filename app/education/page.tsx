'use client'
import { ImagesSliderDemo } from '@/components/ImagesSliderDemo'
import React from 'react'
import {motion} from 'framer-motion'
import { TypewriterEffect } from '@/components/ui/typewriter-effect'
import { words } from '@/lib/words'
import { ExpandableCard } from '@/components/ExpandableCard'
const Education = () => {
  return (
    <main className='w-screen h-screen overflow-x-hidden overflow-y-hidden relative bg-education bg-cover  '>
      <div className='bg-black/10 backdrop-blur-md absolute inset-0 w-full h-full'></div>
        <motion.div  
        className='w-full h-full relative'
        initial={{  translateY:-500 }}
        animate={{  translateY:0}}
        transition={{
        type: "spring",
        stiffness: 270,
        damping: 80,
        }}>
        <ImagesSliderDemo/> 
        </motion.div>
          <div className='  absolute bottom-0 text-white  h-[65vh] sm:h-[50vh] xl:w-[70vw] inset-x-0 mx-auto'>
            <div className='-mt-10 sm:mt-0'>
            <TypewriterEffect words={words} />
            </div>
           
            {/* expandable component */}
            <div className='w-full h-full  sm:mt-2  '>
              <ExpandableCard/>
            </div>
          </div>
    </main>
  )
}

export default Education