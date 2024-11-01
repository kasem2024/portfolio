'use client'
import React from 'react'
import { IoMdDoneAll } from "react-icons/io";
import {motion} from 'framer-motion';
import { GiCheckMark } from "react-icons/gi";
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
      <div className='text-white w-full h-full max-w-[1170px]  mx-auto  z-50'>
       
        <ul className='flex  flex-wrap justify-center content-start items-start w-full h-full  gap-[2px] md:gap-3  mt-10'>
        {services?.map((item ,idx)=>(
           <motion.li 
           custom={idx}
           key={idx}
           variants={fadeInAnimationVariants}
           initial="initial"
           whileInView="animate"
           className='flex items-start justify-start  w-full md:w-[300px]   h-[80px] md:h-[200px]  lg:h-[300px] bg-white/10 backdrop-blur-lg  md:px-2 md:py-1 px-[2px] py-[2px] gap-[2px] md:gap-3 shadow-lg rounded-lg  '>
               <div className=' md:w-[50px] w-[20px] h-[20px] p-1  text-white  md:mt-[10px] '>
                <GiCheckMark   className='text-md'/>
               </div>
              <div className='flex justify-center flex-col gap-y-[3px] md:mt-[10px]'>
                 <span className='text-sm md:text-lg lg:text-xl xl:text-2xl bg-gray-800 w-fit text-white px-[5px] py-[2px] md:px-[7px] md:py-[3px] rounded-md'>
                  {item.label}
                 </span>
                 <span className='text-sm md:text-md lg:text-lg xl:text-xl'>
                  {item.value}
                 </span>
              </div>
           </motion.li>
        ))
        }
        </ul>
       
           
      </div> 
     
    </main>
  )
}

export default page;

// const services = [
//   "Next.js & React.js Development: Building high-performance websites and applications with optimized SEO and seamless user experiences.",
  
//   "Custom Component Design: Creating reusable, responsive components with React.js for consistent design and efficient development.",
  
//   "Backend Development: Developing robust server-side applications with Node.js and Express.js, ensuring efficient data handling and API integrations.",
  
//   "Real-Time Applications: Implementing live chat, notifications, and real-time data updates using Pusher for interactive user experiences.",
  
//   "AI Integration: Leveraging OpenAI to generate intelligent responses and automate processes, enhancing user interactions.",
  
  
//   "Mobile App Development: Building cross-platform mobile apps with React Native for native-like experiences on iOS and Android.",
  
//   "Stripe Payment Integration: Setting up secure Stripe payment gateways for seamless transactions and subscriptions.",
  
//   "WordPress & PHP Development: Designing custom WordPress and PHP websites, from blogs to e-commerce platforms.",
  
// ];




const services = [
  {
    label: "Next.js & React.js Development",
    value: "Building high-performance websites and applications with optimized SEO and seamless user experiences."
  },
  {
    label: "Custom Component Design",
    value: "Creating reusable, responsive components with React.js for consistent design and efficient development."
  },
  {
    label: "Backend Development",
    value: "Developing robust server-side applications with Node.js and Express.js, ensuring efficient data handling and API integrations."
  },
  {
    label: "Real-Time Applications",
    value: "Implementing live chat, notifications, and real-time data updates using Pusher for interactive user experiences."
  },
  {
    label: "AI Integration",
    value: "Leveraging OpenAI to generate intelligent responses and automate processes, enhancing user interactions."
  },
  {
    label: "Mobile App Development",
    value: "Building cross-platform mobile apps with React Native for native-like experiences on iOS and Android."
  },
  {
    label: "Stripe Payment Integration",
    value: "Setting up secure Stripe payment gateways for seamless transactions and subscriptions."
  },
  {
    label: "WordPress & PHP Development",
    value: "Designing custom WordPress and PHP websites, from blogs to e-commerce platforms."
  }
];


