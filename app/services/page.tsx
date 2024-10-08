'use client'
import React from 'react'
import { IoMdDoneAll } from "react-icons/io";
import {motion} from 'framer-motion';
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: 200,
  },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3 * index,
    },
  }),
};
const page = () => {
  return (
    <main className='relative w-full h-full   bg-services bg-cover  '>
      <div className='bg-gray-900/70 backdrop-blur-lg bg-cover w-full h-full absolute  '>
      </div>
      <div className='text-white w-full h-full max-w-[1170px] mx-auto  z-50'>
       
        <ul className='flex flex-col justify-center items-center w-full h-full  gap-[2px] md:gap-3  '>
        {services?.map((item ,idx)=>(
           <motion.li 
           custom={idx}
           key={idx}
           variants={fadeInAnimationVariants}
           initial="initial"
           whileInView="animate"
           className='flex items-center justify-start w-full bg-white/10 backdrop-blur-lg  md:px-5 md:py-3 px-[2px] py-[2px] gap-3 shadow-lg rounded-lg  '>
               <div className='w-4 h-4 bg-white text-teal-600 rounded-md'>
                <IoMdDoneAll  className='text-lg'/>
               </div>
               <span className='text-sm md:text-md lg:text-md xl:text-lg'>
                {item}
               </span>
           </motion.li>
        ))
        }
        </ul>
       
           
      </div> 
     
    </main>
  )
}

export default page;

const services = [
  "Next.js & React.js Development: Building high-performance websites and applications with optimized SEO and seamless user experiences.",
  
  "Custom Component Design: Creating reusable, responsive components with React.js for consistent design and efficient development.",
  
  "Backend Development: Developing robust server-side applications with Node.js and Express.js, ensuring efficient data handling and API integrations.",
  
  "Real-Time Applications: Implementing live chat, notifications, and real-time data updates using Pusher for interactive user experiences.",
  
  "AI Integration: Leveraging OpenAI to generate intelligent responses and automate processes, enhancing user interactions.",
  
  "Custom AI Models: Creating tailored AI models for natural language processing, image recognition, and predictive analytics.",
  
  "Mobile App Development: Building cross-platform mobile apps with React Native for native-like experiences on iOS and Android.",
  
  "Stripe Payment Integration: Setting up secure Stripe payment gateways for seamless transactions and subscriptions.",
  
  "WordPress & PHP Development: Designing custom WordPress and PHP websites, from blogs to e-commerce platforms.",
  
  "Startup Full-Stack Development: Offering end-to-end services to build and scale startups, from concept to deployment.",
  
  "Consultation & Strategy: Providing expert guidance on technology, architecture, and development strategies for long-term success."
];