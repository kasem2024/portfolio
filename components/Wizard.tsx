
'use client'

import { motion } from 'framer-motion'
import React from 'react'
import { Vortex } from './ui/vortex'
import Intro from './Intro'
import FlipWordsHeading from './FlipWordsHeading'

const Wizard = () => {
  return (
    <motion.div initial={{  translateX:500}}
    animate={{  translateX:0}}
    transition={{
    type: "spring",
    stiffness: 270,
    damping: 80,
  }}
  
  className='flex-1'>
  
    <Vortex
      backgroundColor="black"
      rangeY={700}
      particleCount={500}
      baseHue={120}
      className="flex items-center relative flex-col py-24 justify-center md:flex-row md:justify-between px-0  sm:px-2  w-[100vw] h-[100vh]  "
    >
     <div className='flex flex-col justify-center items-start bg-white/10 backdrop-blur-lg  rounded-lg pt-10 pb-2 shadow-lg mb-14 md:mb-0 lg:mb-6 md:mr-6 lg:mr-28'>
       <FlipWordsHeading/>
       <div className='text-sm sm:text-md md:text-lg lg:text-xl xl:text-xl text-gray-200 md:w-[400px] pt-3 md:pt-4 lg:pt-6 pl-4 pb-6 lg:w-[500px] xl:w-[800px]  '>
       I'm Kasem, a software engineer with 4 years of experience in the tech industry and a degree in Computer Science. I dive deep into diverse software architectures, with a special focus on Information Technology. Whether it's crafting dynamic websites or building innovative mobile apps, I have the expertise to turn ideas into reality.
       In this space, you'll get a glimpse into my journey through exciting projects, my educational background, and the skills I've honed over the years. Feel free to explore the services I offer and see the commitment I bring to my work.
        Thank you for stopping by, and I'm eager to explore future opportunities and collaborate on something amazing!
        </div>
     </div>
    <Intro />
    <div className='w-[400px] h-[400px]'></div>
    </Vortex>
    </motion.div>
  )
}

export default Wizard