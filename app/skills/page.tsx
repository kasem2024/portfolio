'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { skillsData } from '@/lib/data'

import { TypewriterEffect } from '@/components/ui/typewriter-effect'
import { skillWords } from '@/lib/words'
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.09 * index,
    },
  }),
};

const page = () => {
  // const [play] = useSound('/skills/sound.mp3');
  return (
    <main className='relative w-screen h-screen   bg-skills bg-cover  '>
        <div className='absolute top-0 left-0 flex flex-col inset-0 justify-center items-center w-full h-full z-40 max-w-[1170px]  mx-auto'>
          
          <motion.div 
          initial={{opacity:0 , scale:0}}
          animate={{opacity:1 , scale:1}}
          className='hidden md:block text-white bg-black/10 backdrop-blur-lg md:mb-40 rounded-lg px-1 py-2 shadow-lg'>
             <TypewriterEffect words={skillWords} />
          </motion.div>

        <ul className="flex flex-wrap justify-center items-center gap-1 md:gap-2 p-6 ">
          {skillsData.map((skill, index) => (
            <motion.li
              className="bg-gray-800  rounded-xl px-[2px] py-0 md:px-5 md:py-3  font-serif text-white shadow-lg w-[120px] md:w-[150px] sm:text-sm md:text-md  lg:text-lg xl:text-xl"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <div className='flex items-center justify-center gap-[2px] md:gap-[3px]'>
                  <span className="w-[50px] h-[50px] flex justify-center items-center ">
                    <skill.IconName size={25} style={{ color: skill.color }} />
                  </span>
                  <span>{skill?.name}</span>
              </div>
            </motion.li>
          ))}
        </ul>
        
        </div>
    </main>
  )
}

export default page