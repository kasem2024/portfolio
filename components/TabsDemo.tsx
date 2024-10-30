"use client";
import Image from "next/image";
import { Tabs } from "./ui/tabs";
import {motion} from 'framer-motion'
import Link from "next/link";

export function TabsDemo() {

  const tabs = [
    {
      title: "Hub",
      value: "gamehub",
      content: (
        <div className="w-full overflow-hidden relative h-[60vh] md:h-[70vh] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-800 to-teal-700">
          <p>NextPlay Hub </p>
          <GameHub />
        </div>
      ),
    },
    {
      title: "Movies",
      value: "Movies",
      content: (
        <div className="w-full overflow-hidden relative h-[60vh] md:h-[70vh] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-800 to-teal-700">
          <p>Movies Now</p>
          <Movies />
        </div>
      ),
    },
    {
      title: "Weather",
      value: "Weather",
      content: (
        <div className="w-full overflow-hidden relative h-[60vh] md:h-[70vh] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-800 to-teal-700">
          <p>CloudCraze</p>
          <CloudCraze />
        </div>
      ),
    },
    {
      title: "Intertainment",
      value: "Intertainment",
      content: (
        <div className="w-full overflow-hidden relative h-[60vh] md:h-[70vh] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-800 to-teal-700">
          <p>YouStream</p>
          <Videos />
        </div>
      ),
    },
    {
      title: "Store",
      value: "Store",
      content: (
        <div className="w-full overflow-hidden relative h-[60vh] md:h-[70vh] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-800 to-teal-700">
          <p>WatchStore</p>
          <Watches />
        </div>
      ),
    },
    {
      title: "Games",
      value: "TetrisGame",
      content: (
        <div className="w-full overflow-hidden relative h-[60vh] md:h-[70vh] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-800 to-teal-700">
          <p>TetrisGame</p>
          <TetrisGame />
        </div>
      ),
    },
  ];

  return (
    <motion.div
    initial={{scale:0 , opacity:0}}
    animate={{scale:1 , opacity:1}}
    transition={{
        type:'tween',
        stiffness: 270,
         damping: 80,
       
    }}
     className="h-[50vh] md:h-[70vh] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start pt-5">
      <Tabs tabs={tabs} />
    </motion.div>
  );
}
const GameHub = () => {

  return (
    <div className="group">
      <Image
        src="/games.png"
        alt=" image"
        width="500"
        height="500"
        className="object-cover object-left-top h-[90%]  absolute -bottom-10 hover:scale-95 transition inset-x-0 w-[90%] rounded-xl mx-auto"
      />
      <div className=" w-full h-full absolute top-0 left-0 text-sm sm:text-md md:text-lg lg:text-2xl bg-black/20 hidden group-hover:block transiation ">
      <div className="w-full h-full flex items-center justify-center gap-3">
       <Link href={"https://games-three-teal.vercel.app"} target="_blank">
           <motion.div 
           whileTap={{scale:0} 
           }
           transition={{type:'spring' }}
             className="shadow-lg bg-gradient-to-br from-teal-800 to-gray-700 hover:from-zinc-800 hover:to-teal-400  px-6 py-3 rounded-md transition">
               Visit
           </motion.div >
       </Link>
         
      </div>
          </div>
    </div>
  );
};
const Movies = () => {
  return (
   <div className="group">
     <Image
       src="/movies.png"
       alt=" image"
       width="500"
       height="500"
       className="object-cover object-left-top h-[90%]  absolute -bottom-10 group-hover:scale-95 transition inset-x-0 w-[90%] rounded-xl mx-auto"
     />
     <div className=" w-full h-full absolute top-0 left-0 text-sm sm:text-md md:text-lg lg:text-2xl bg-black/20 hidden group-hover:block transiation ">
       <div className="w-full h-full flex items-center justify-center gap-3">
         <Link href={"https://movie-application-hazel.vercel.app"} target="_blank">
            <motion.div 
            whileTap={{scale:0} 
            }
            transition={{type:'spring' }}
              className="shadow-lg bg-gradient-to-br from-teal-800 to-gray-700 hover:from-zinc-800 hover:to-teal-400  px-6 py-3 rounded-md transition">
                 Visit
            </motion.div >
         </Link>
          
          
       </div>
     </div>
   </div>
  );
};
const  CloudCraze= () => {
  return (
    <div className="group">
    <Image
      src="/weather.png"
      alt=" image"
      width="500"
      height="500"
      className="object-cover object-left-top h-[90%]  absolute -bottom-10 group-hover:scale-95 transition inset-x-0 w-[90%] rounded-xl mx-auto"
    />
    <div className=" w-full h-full absolute top-0 left-0 text-sm sm:text-md md:text-lg lg:text-2xl bg-black/20 hidden group-hover:block transiation ">
      <div className="w-full h-full flex items-center justify-center gap-3">
        <Link href={"https://cloudcraze-v2.vercel.app"} target="_blank">
            <motion.div 
            whileTap={{scale:0} 
            }
            transition={{type:'spring' }}
              className="shadow-lg bg-gradient-to-br from-teal-800 to-gray-700 hover:from-zinc-800 hover:to-teal-400  px-6 py-3 rounded-md transition">
                 Visit
            </motion.div >
        </Link>
         
        
      </div>
    </div>
  </div>
  );
};
const Videos = () => {
  return (
    <div className="group">
    <Image
      src="/youtube.png"
      alt=" image"
      width="500"
      height="500"
      className="object-cover object-left-top h-[90%]  absolute -bottom-10 group-hover:scale-95 transition inset-x-0 w-[90%] rounded-xl mx-auto"
    />
    <div className=" w-full h-full absolute top-0 left-0 text-sm sm:text-md md:text-lg lg:text-2xl bg-black/20 hidden group-hover:block transiation ">
      <div className="w-full h-full flex items-center justify-center gap-3">
       <Link href={"https://youtubeclone-bay-rho.vercel.app"} target="_blank">
           <motion.div 
           whileTap={{scale:0} 
           }
           transition={{type:'spring' }}
             className="shadow-lg bg-gradient-to-br from-teal-800 to-gray-700 hover:from-zinc-800 hover:to-teal-400  px-6 py-3 rounded-md transition">
                Visit
           </motion.div >
       </Link>
         
         
      </div>
    </div>
  </div>
  );
};
const Watches = () => {
  return (
    <div className="group">
     <Image
       src="/watch-store.png"
       alt=" image"
       width="500"
       height="500"
       className="object-cover object-left-top h-[90%]  absolute -bottom-10 group-hover:scale-95 transition inset-x-0 w-[90%] rounded-xl mx-auto"
     />
     <div className=" w-full h-full absolute top-0 left-0 text-sm sm:text-md md:text-lg lg:text-2xl bg-black/20 hidden group-hover:block transiation ">
       <div className="w-full h-full flex items-center justify-center gap-3">
          <Link href={"https://watch-store-rouge.vercel.app"} target="_blank">
             <motion.div 
             whileTap={{scale:0} 
             }
             transition={{type:'spring' }}
               className="shadow-lg bg-gradient-to-br from-teal-800 to-gray-700 hover:from-zinc-800 hover:to-teal-400  px-6 py-3 rounded-md transition">
                  Visit
             </motion.div >
          </Link>
          
        
       </div>
     </div>
   </div>
  );
};
const TetrisGame = () => {
  return (
    <div className="group">
     <Image
       src="/TetrisGame.png"
       alt=" image"
       width="500"
       height="500"
       className="object-cover object-left-top h-[90%]  absolute -bottom-10 group-hover:scale-95 transition inset-x-0 w-[90%] rounded-xl mx-auto"
     />
     <div className=" w-full h-full absolute top-0 left-0 text-sm sm:text-md md:text-lg lg:text-2xl bg-black/20 hidden group-hover:block transiation ">
       <div className="w-full h-full flex items-center justify-center gap-3">
        <Link href={'https://tetris-game-beige.vercel.app'} target="_blank">
             <motion.div 
             whileTap={{scale:0} 
             }
             transition={{type:'spring' }}
               className="shadow-lg bg-gradient-to-br from-teal-800 to-gray-700 hover:from-zinc-800 hover:to-teal-400  px-6 py-3 rounded-md transition">
                  Visit
             </motion.div >
        </Link>
       </div>
     </div>
   </div>
  );
};

export const projectsData = [
  {
    title: "Games",
    description:
      "I worked on this project to provide comprehensive information about various games, enhancing the user experience.",
    tags: ["React", "ReactQuery", "ReactRouter", "Tailwind","Typescript"],
    imageUrl: '/games.png',
    link:"https://games-three-teal.vercel.app"
  },
  {
    title: "CloudCraze",
    description:
      "I worked on this project to provide comprehensive weather information. Based on your location or city, you will receive the current weather conditions as well as the forecast for the rest of the week.",
    tags: ["React", "Tailwind","RESTful API"],
    imageUrl: '/weather.png',
    link:"https://cloudcraze-v2.vercel.app"
  },
  {
    title: "Movies",
    description:
      "I worked on this project to show users movie trailers and provide a seamless, engaging experience. Additionally, the platform includes detailed movie information",
    tags: ["React", "Next.js","Html", "Tailwind", ],
    imageUrl: '/movies.png',
    link:"https://movie-application-hazel.vercel.app"

  },
  {
    title: "Videos",
    description:
      "I worked on Youtube Api that allows users to search for specific content and view various channels.",
    tags: ["React","RESTful API", "Html", "Tailwind", "Framer"],
    imageUrl: '/youtube.png',
    link:'https://youtubeclone-bay-rho.vercel.app'

  },
  {
    title: "Watches Store",
    description:
      " The platform offers advanced filtering features, allowing users to sort watches by color, size, and price.Additionally, users can effortlessly sort watches by price, from high to low or low to high.",
    tags: [ "Next.js", "TypeScript", "Tailwind"],
    imageUrl: '/watch-store.png',
    link:'https://watch-store-rouge.vercel.app'
  },
  {
    title: "Tetris Game",
    description:
      " This game allows the player to move the shape (tetromino) left, right, and down, and rotate it. Additionally, it provides the player with stats about their current level and points, and includes a preview of the upcoming shapes.",
    tags: [ "Javascript", "React", "css"],
    imageUrl: '/TetrisGame.png',
    link:'https://tetris-game-beige.vercel.app'
  },
] as const;


