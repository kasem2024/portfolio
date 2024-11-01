
'use client'

import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { Vortex } from './ui/vortex'
import Intro from './Intro'
import FlipWordsHeading from './FlipWordsHeading'
import { TbFileCv } from "react-icons/tb";
import { MdCloudDownload } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";
import { GiClick } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import Link from 'next/link'

import { ImCheckmark } from "react-icons/im";
const Wizard = () => {

  // const audioRef = useRef<HTMLAudioElement | null>(null);
  // const [isPlaying, setIsPlaying] = useState(false);
  const [downloaded , setDownloaded] = useState(false)
  // useEffect(() => {
  //   // Initialize the audio element
  //   audioRef.current = new Audio("/assets/aboutMe.mp4");

  //   // Cleanup function to pause and reset audio on unmount
  //   return () => {
  //     if (audioRef.current) {
  //       audioRef.current.pause();
  //       audioRef.current.src = ""; // Clear the audio source
  //     }
  //   };
  // }, []);

  // const handleAudioToggle = () => {
  //   const audio = audioRef.current;
  //   if (audio) {
  //     if (isPlaying) {
  //       audio.pause(); // Pause the audio
  //       console.log("Audio paused");
  //     } else {
  //       audio.currentTime = 0; // Reset to start if it was already played
  //       audio.play(); // Play the audio
  //       console.log("Audio playing");
  //     }
  //     setIsPlaying((prev) => !prev); // Toggle playing state
  //   }
  // };

  // // Event listener for when audio ends
  // useEffect(() => {
  //   const audio = audioRef.current;
  //   if (audio) {
  //     const handleAudioEnd = () => {
  //       setIsPlaying(false); // Reset playing state when audio ends
  //       audio.currentTime = 0; // Reset audio to start
  //       console.log("Audio ended, reset to start");
  //     };

  //     audio.addEventListener("ended", handleAudioEnd);

  //     // Cleanup event listener on unmount
  //     return () => {
  //       audio.removeEventListener("ended", handleAudioEnd);
  //     };
  //   }
  // }, []);


  return (
    <motion.div initial={{  translateX:500}}
    animate={{  translateX:0}}
    transition={{
    type: "spring",
    stiffness: 270,
    damping: 80,
  }}
  className='flex-1 relative'>
    <Vortex
      backgroundColor="black"
      rangeY={700}
      particleCount={500}
      baseHue={120}
      className="flex items-center relative flex-col py-14 md:pt-40 justify-center md:flex-row md:items-start md:justify-between px-0   sm:px-2  w-[100vw] h-[100vh]  "
    >
    <div className='relative flex flex-col justify-center items-start bg-gray-700/20 backdrop-blur-lg  rounded-lg pt-10 pb-2 shadow-lg mb-14 md:mb-0 lg:mb-6 md:mr-6 lg:mr-28'>
    <div className='absolute top-0 right-0 p-4'><PiCertificateFill  className='text-zinc-100 text-3xl md:text-4xl lg:text-5xl'/></div>
        <FlipWordsHeading />
        <div className='text-sm sm:text-md md:text-lg lg:text-xl xl:text-xl text-gray-200 md:w-[400px] pt-3 md:pt-4 lg:pt-6 pl-4 pb-6 lg:w-[500px] xl:w-[800px]'>
          I&apos;m Kasem, a software engineer with 4 years of experience in the tech industry and a degree in Computer Science. I dive deep into diverse software architectures, with a special focus on Information Technology. <span className=' bg-white text-zinc-900 px-2 '>Whether it&apos;s crafting dynamic websites or building innovative mobile apps, I have the expertise to turn ideas into reality</span>.
          In this space, you&apos;ll get a glimpse into my journey through exciting projects, my educational background, and the skills I&apos;ve honed over the years. Feel free to explore the services I offer and see the commitment I bring to my work.
          Thank you for stopping by, and I&apos;m eager to explore future opportunities and collaborate on something amazing!
        </div>
        <div className='w-full text-white pl-4 flex flex-col justify-center items-start md:flex-row md:items-center md:justify-between  gap-x-1'>
            <div>
              <div> Phone: +20 01556665297 / 01500064018</div>
              <div className='text-white'>Email: kasem2023mohareb@gmail.com</div>
            </div>
            <motion.div
            whileTap={{scale:1.1}}>
              <button className=" sm:mt-4 px-4 py-2 backdrop-blur-md border-none bg-zinc-100 text-black mx-auto text-center rounded-full relative  ">
              <Link href={'/contact'} className="  text-sm md:text-md lg:text-lg">Contact →</Link>
              <div className="absolute inset-x-0  h-[5px] -bottom-[4px] bg-gradient-to-r w-3/4 mx-auto animate-pulse from-transparent via-teal-700 to-transparent" />
              </button>
            </motion.div>
        </div>
    </div>
    <div className='w-[400px] h-[380px] relative  '> 
      <Intro />
      {/* <div className="absolute inset-x-0  h-[4px] -bottom-[9px] bg-gradient-to-r w-3/4 mx-auto from-transparent via-white to-transparent" />
      <div className="absolute inset-x-0  h-[4px] -top-[9px] bg-gradient-to-r w-3/4 mx-auto from-transparent via-white to-transparent" />
      <div className="absolute inset-y-0  w-[4px] -left-[9px] bg-gradient-to-b h-3/4 my-auto from-transparent via-white to-transparent" />
      <div className="absolute inset-y-0  w-[4px] -right-[9px] bg-gradient-to-b h-3/4 my-auto from-transparent via-white to-transparent" />
    */}
      <div className='w-full relative group'>
        <motion.a 
        onClick={()=>setDownloaded(true)}
        whileTap={{scale:1.1}}
            href="/cv.pdf"
           download 
           className='w-full text-white rounded-md bg-gradient-to-r from-teal-900 to-gray-700 px-6 py-3 mt-6 flex justify-between items-center'>
           <div  className='flex justify-center items-center'><TbFileCv size={25} />     
            Download CV
           </div> 
          {downloaded ?<ImCheckmark size={20}/> :<MdCloudDownload size={25}/>}
        </motion.a>
        <div className="absolute inset-x-0 animate-pulse h-[3px] delay-500 -bottom-[4px] bg-gradient-to-r w-3/4 mx-auto from-transparent via-white group-hover:via-transparent to-transparent transition-all " />
      </div>
      {/* <div className='w-full relative group'>
      <motion.button 
        onClick={handleAudioToggle}
        whileTap={{scale:1.1}}
        className='w-full text-white rounded-md bg-gradient-to-l from-teal-900 to-gray-700 px-6 py-3 mt-3 flex justify-between items-center'>
        <div className='flex justify-center items-center'><CgProfile size={25} /> About Me </div>
        <GiClick size={25}/>
        
      </motion.button>
      <div className="absolute inset-x-0 animate-pulse h-[3px] -bottom-[4px] bg-gradient-to-r w-3/4 mx-auto from-transparent group-hover:via-transparent via-white to-transparent" />
      </div> */}
    </div>
    <div className='w-[400px] h-[400px]'></div>
    </Vortex>
    </motion.div>
  )
}

export default Wizard