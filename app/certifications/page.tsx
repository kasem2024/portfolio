'use client'
import {  Demo1 } from '@/components/Demo1'
import { ShootingStars } from '@/components/ui/shooting-stars'
import { StarsBackground } from '@/components/ui/stars-background'
import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { Demo2 } from '@/components/Demo2'
import { Demo3 } from '@/components/Demo3'
import { BiChevronsDown } from 'react-icons/bi'
const Certifications = () => {
  const [showDemo2 , setShowDemo2] = useState(true);
  const [showDemo3 , setShowDemo3] = useState(true);
  return (

        <motion.div 
        className='flex flex-col overflow-auto overflow-x-hidden '
        initial={{  translateX:500 }}
        animate={{  translateX:0}}
        transition={{
        type: "spring",
        stiffness: 270,
        damping: 80,
        }}>
      
          <div className='h-screen w-screen bg-gradient-to-br from-yellow-500   to-teal-900 relative'>
              {showDemo2 && <a onClick={()=>setShowDemo2(false)} href="#demo2" className='z-50 absolute right-40 bottom-10 rounded-full w-10 h-10  bg-black flex items-center justify-center text-white'>    
                <BiChevronsDown  size={60}  className='animate-bounce'/>
              </a>}
              <Demo1/>
          </div>
          <div className='h-screen w-screen bg-gradient-to-bl from-teal-900 to-yellow-500 relative' id='demo2'>
              {showDemo3 && <a onClick={()=>setShowDemo3(false)} href="#demo3" className='absolute right-40 bottom-10 rounded-full w-10 h-10  bg-black flex items-center justify-center text-white'>
              <BiChevronsDown  size={60}  />
              </a>}
              <Demo2/>
          </div >
          <div className='h-screen w-screen bg-gradient-to-br from-yellow-500 to-teal-900' id='demo3'>
            <Demo3/>
          </div>
        
        </motion.div>
  )
}

export default Certifications
