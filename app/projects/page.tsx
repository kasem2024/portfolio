'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { TabsDemo } from '@/components/TabsDemo'
import { ShootingStars } from '@/components/ui/shooting-stars'
import { StarsBackground } from '@/components/ui/stars-background'
const Projects = () => {
  return (
   <main className='w-screen h-screen overflow-x-hidden overflow-y-hidden'>
     <motion.div 
      initial={{  translateX:400 }}
      animate={{  translateX:0}}
      transition={{
      type: "spring",
      stiffness: 270,
      damping: 80,
      }}
         className='w-full h-full relative'>
        <div className=' bg-slate-900 w-full h-full px-3'>
        <StarsBackground />
        <ShootingStars />
        <TabsDemo/>
        </div>
     </motion.div>
   </main>
    

  )
}

export default Projects